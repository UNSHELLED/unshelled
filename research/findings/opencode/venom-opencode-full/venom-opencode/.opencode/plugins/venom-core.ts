// venom-core.ts — VENOM intelligence layer for OpenCode
//
// Pattern #1: Context Engineering — progressive layering
// Pattern #3: Instinct Learning — auto-capture and firing
// Pattern #4: Hook Architecture — intelligence interception
// Pattern #7: Memory Persistence — state across sessions and compaction
// Pattern #8: Sandboxing & Resource Limits — safety gates
// Pattern #2: Loop Detection — stall prevention

import type { Plugin } from "@opencode-ai/plugin";
import { z } from "zod";
import { readFile, writeFile, mkdir, access } from "fs/promises";
import { join, dirname } from "path";

// ─── Paths ───────────────────────────────────────────────────────

const VENOM_DIR = ".venom";
const CONTEXT_PATH = join(VENOM_DIR, "CONTEXT.md");
const MEMORY_PATH = join(VENOM_DIR, "memory", "MEMORY.md");
const INSTINCTS_PATH = join(VENOM_DIR, "learnings", "instincts.yaml");
const CORRECTIONS_PATH = join(VENOM_DIR, "learnings", "corrections.yaml");
const ACTIVE_PATH = join(VENOM_DIR, "work", "ACTIVE.md");
const METRICS_PATH = join(VENOM_DIR, "state", "session-metrics.json");

// ─── Resource Limits (Pattern #8) ────────────────────────────────

const LIMITS = {
  maxToolCalls: 200,
  maxCostUsd: 5.0,
  maxFileWrites: 50,
  warnCostUsd: 1.0,
  loopDetectionWindow: 5,    // last N tool calls to check for repetition
  loopRepeatThreshold: 3,    // same tool+file pattern N times = stall
} as const;

// ─── Danger Zone Patterns (Pattern #8) ───────────────────────────

const DANGER_PATTERNS: Array<{ pattern: RegExp; severity: "deny" | "ask" }> = [
  { pattern: /rm\s+-rf\s+\/(?!tmp)/, severity: "deny" },
  { pattern: /sudo\s+/, severity: "ask" },
  { pattern: /curl\s+.*\|\s*(?:ba)?sh/, severity: "deny" },
  { pattern: />\s*\/dev\/sd[a-z]/, severity: "deny" },
  { pattern: /dd\s+.*of=\/dev/, severity: "deny" },
  { pattern: /:()\{\s*:\|:&\s*\};:/, severity: "deny" },
  { pattern: /chmod\s+777/, severity: "ask" },
  { pattern: /git\s+push\s+.*--force(?!\s+-with-lease)/, severity: "ask" },
  { pattern: /DROP\s+(?:TABLE|DATABASE)/i, severity: "ask" },
  { pattern: /TRUNCATE\s+/i, severity: "ask" },
];

const SENSITIVE_FILE_PATTERNS = [
  /\.env$/,
  /\.env\..+$/,
  /credentials?\.json$/,
  /\.key$/,
  /\.pem$/,
  /\.p12$/,
  /secret/i,
  /\.ssh\//,
];

// ─── State ───────────────────────────────────────────────────────

interface ToolCallRecord {
  tool: string;
  target: string;  // file path or command fragment
  timestamp: number;
}

interface SessionMetrics {
  sessionId: string;
  startTime: string;
  toolCalls: number;
  fileWrites: number;
  costUsd: number;
  inputTokens: number;
  outputTokens: number;
  toolBreakdown: Record<string, number>;
  filesModified: string[];
  warningsSent: string[];
  recentCalls: ToolCallRecord[];  // rolling window for loop detection
  loopWarnings: number;
}

let metrics: SessionMetrics = createFreshMetrics("");

function createFreshMetrics(sessionId: string): SessionMetrics {
  return {
    sessionId,
    startTime: new Date().toISOString(),
    toolCalls: 0,
    fileWrites: 0,
    costUsd: 0,
    inputTokens: 0,
    outputTokens: 0,
    toolBreakdown: {},
    filesModified: [],
    warningsSent: [],
    recentCalls: [],
    loopWarnings: 0,
  };
}

// ─── Helpers ─────────────────────────────────────────────────────

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function safeRead(dir: string, path: string): Promise<string | null> {
  try {
    return await readFile(join(dir, path), "utf-8");
  } catch {
    return null;
  }
}

async function safeWrite(dir: string, path: string, content: string): Promise<boolean> {
  try {
    const full = join(dir, path);
    await mkdir(dirname(full), { recursive: true });
    await writeFile(full, content, "utf-8");
    return true;
  } catch {
    return false;
  }
}

async function appendToFile(dir: string, path: string, content: string): Promise<boolean> {
  const existing = (await safeRead(dir, path)) ?? "";
  return safeWrite(dir, path, existing + "\n" + content);
}

// ─── Loop Detection (Pattern #2) ─────────────────────────────────

// Returns stall reason if detected, null if healthy
function detectStall(record: ToolCallRecord): string | null {
  const window = metrics.recentCalls.slice(-LIMITS.loopDetectionWindow);
  const identical = window.filter(
    (r) => r.tool === record.tool && r.target === record.target
  );
  if (identical.length >= LIMITS.loopRepeatThreshold) {
    return `VENOM loop detected: "${record.tool}" on "${record.target}" repeated ${identical.length}x in last ${LIMITS.loopDetectionWindow} calls. Change strategy — try @explore, git blame, or a different approach.`;
  }
  return null;
}

function recordCall(record: ToolCallRecord): void {
  metrics.recentCalls.push(record);
  // Keep only the rolling window
  if (metrics.recentCalls.length > LIMITS.loopDetectionWindow * 2) {
    metrics.recentCalls = metrics.recentCalls.slice(-LIMITS.loopDetectionWindow);
  }
}

// ─── VENOM Context Builder (Pattern #1) ──────────────────────────

// Progressive layering: load only what's needed, never dump everything
async function buildVenomContext(dir: string): Promise<string> {
  const parts: string[] = [];

  // Layer 1: Project context (always — 2KB budget)
  const context = await safeRead(dir, CONTEXT_PATH);
  if (context) {
    parts.push("## VENOM Project Context\n" + context.trim());
  }

  // Layer 2: Corrections — hard rules that must always fire
  const corrections = await safeRead(dir, CORRECTIONS_PATH);
  if (corrections?.trim()) {
    parts.push("## Never-Again Rules\n" + corrections.trim());
  }

  // Layer 3: Active work state — resume where we left off
  const active = await safeRead(dir, ACTIVE_PATH);
  if (active?.trim()) {
    parts.push("## Where We Left Off\n" + active.trim());
  }

  if (parts.length === 0) {
    return "VENOM is active. No project context yet — run /venom-init to set up.";
  }

  return parts.join("\n\n---\n\n");
}

// ─── Compaction Snapshot (Pattern #7) ────────────────────────────

// Rich snapshot so VENOM survives context compaction with full context
async function generateVenomSnapshot(dir: string): Promise<string> {
  const context = await safeRead(dir, CONTEXT_PATH);
  const corrections = await safeRead(dir, CORRECTIONS_PATH);
  const active = await safeRead(dir, ACTIVE_PATH);

  const lines: string[] = [
    "## VENOM State — persist through compaction\n",
    context ? `**Project:** ${context.split("\n")[0].replace(/^#\s*/, "")}\n` : "",
    active?.trim()
      ? `**Active task:**\n${active.trim().split("\n").slice(0, 5).join("\n")}\n`
      : "",
    metrics.filesModified.length > 0
      ? `**Files modified this session:**\n${metrics.filesModified.map((f) => `- ${f}`).join("\n")}\n`
      : "",
    corrections?.trim()
      ? `**Never-again rules:**\n${corrections.trim()}\n`
      : "",
    `**Session:** $${metrics.costUsd.toFixed(3)} spent | ${metrics.toolCalls}/${LIMITS.maxToolCalls} tool calls | ${metrics.fileWrites} writes`,
    metrics.loopWarnings > 0
      ? `**Loop warnings this session:** ${metrics.loopWarnings}`
      : "",
  ];

  return lines.filter(Boolean).join("\n");
}

// ─── Plugin ───────────────────────────────────────────────────────

const venomPlugin: Plugin = async (ctx) => {
  const dir = ctx.directory;

  // ── Tool: venom_remember ──────────────────────────────────────

  const venomRemember = ctx.tool(
    "venom_remember",
    {
      description:
        "Save a decision, pattern, or learning to VENOM's persistent memory. Use for architecture decisions, bug root causes, user corrections, and patterns worth keeping across sessions.",
      input: z.object({
        content: z.string().describe("What to remember — be specific and concise"),
        type: z
          .enum(["decision", "pattern", "correction", "note"])
          .describe("decision = architecture choice; pattern = recurring approach; correction = hard never-again; note = general context"),
      }),
    },
    async (input) => {
      const timestamp = new Date().toISOString().split("T")[0];
      const entry = `\n## ${input.type} — ${timestamp}\n${input.content}\n`;
      const success = await appendToFile(dir, MEMORY_PATH, entry);
      if (success) {
        return { content: `Remembered: ${input.type} saved to MEMORY.md` };
      }
      return { content: "Failed to write to MEMORY.md — is .venom/ initialized? Run /venom-init." };
    }
  );

  // ── Tool: venom_instinct ──────────────────────────────────────

  const venomInstinct = ctx.tool(
    "venom_instinct",
    {
      description:
        "Capture a learned pattern as an instinct. Instincts fire before tool execution to prevent repeated mistakes. Use when a pattern repeats or when a mistake reveals a structural issue.",
      input: z.object({
        trigger: z.string().describe("When this should fire — be precise (e.g. 'About to create a TODO comment')"),
        action: z.string().describe("What to do instead (e.g. 'Write complete implementation or document exactly why deferred')"),
        confidence: z
          .number()
          .min(0)
          .max(1)
          .describe("0.3 = first observation | 0.6 = seen 3x | 0.9 = proven reliable"),
        evidence: z.string().describe("What happened that taught this — the specific incident"),
      }),
    },
    async (input) => {
      const timestamp = new Date().toISOString().split("T")[0];
      const id = `instinct-${Date.now()}`;
      const entry = [
        `\n- id: ${id}`,
        `  confidence: ${input.confidence}`,
        `  trigger: "${input.trigger}"`,
        `  action: "${input.action}"`,
        `  evidence: "${input.evidence}"`,
        `  learned: "${timestamp}"`,
        `  fire_count: 0`,
      ].join("\n");

      const success = await appendToFile(dir, INSTINCTS_PATH, entry);
      if (success) {
        return { content: `Instinct captured: "${input.trigger}" → "${input.action}" (confidence: ${input.confidence})` };
      }
      return { content: "Failed to write instinct. Is .venom/ initialized?" };
    }
  );

  // ── Hooks ─────────────────────────────────────────────────────

  return {
    // Pattern #4 + #1: Inject VENOM identity on session start (no AI response)
    "session.created": async (input) => {
      metrics = createFreshMetrics(input.session?.id ?? "unknown");
      const venomContext = await buildVenomContext(dir);

      try {
        await ctx.client.session.prompt({
          path: { id: input.session?.id ?? "" },
          body: {
            noReply: true,
            parts: [{ type: "text", text: venomContext }],
          },
        });
      } catch {
        // noReply might not be supported in all surfaces — fail silently
      }
    },

    // Pattern #8 + #2: Safety screening + loop detection before every tool
    "tool.execute.before": async (input) => {
      metrics.toolCalls++;
      const tool = input.tool?.name ?? "";
      metrics.toolBreakdown[tool] = (metrics.toolBreakdown[tool] ?? 0) + 1;

      // Hard limit: too many tool calls
      if (metrics.toolCalls > LIMITS.maxToolCalls) {
        return {
          deny: true,
          reason: `VENOM safety: tool call limit (${LIMITS.maxToolCalls}) reached. Break into smaller tasks and commit what you have.`,
        };
      }

      // Hard limit: cost
      if (metrics.costUsd > LIMITS.maxCostUsd) {
        return {
          deny: true,
          reason: `VENOM safety: session cost limit ($${LIMITS.maxCostUsd}) reached at $${metrics.costUsd.toFixed(2)}. Pause and review.`,
        };
      }

      // File write tracking + sensitive file screening
      if (["write", "edit", "patch"].includes(tool)) {
        metrics.fileWrites++;
        const filePath = String(input.tool?.input?.path ?? input.tool?.input?.file ?? "");

        if (filePath) {
          if (!metrics.filesModified.includes(filePath)) {
            metrics.filesModified.push(filePath);
          }

          for (const pattern of SENSITIVE_FILE_PATTERNS) {
            if (pattern.test(filePath)) {
              return {
                deny: true,
                reason: `VENOM safety: refusing to write to sensitive file "${filePath}". Secrets belong in environment variables.`,
              };
            }
          }
        }

        if (metrics.fileWrites > LIMITS.maxFileWrites) {
          return {
            deny: true,
            reason: `VENOM safety: file write limit (${LIMITS.maxFileWrites}) reached. Commit what you have and start fresh.`,
          };
        }

        // Loop detection for file operations
        const record: ToolCallRecord = { tool, target: filePath, timestamp: Date.now() };
        const stall = detectStall(record);
        recordCall(record);
        if (stall) {
          metrics.loopWarnings++;
          return { deny: true, reason: stall };
        }
      }

      // Bash command screening
      if (tool === "bash") {
        const command = String(input.tool?.input?.command ?? "");

        for (const { pattern, severity } of DANGER_PATTERNS) {
          if (pattern.test(command)) {
            if (severity === "deny") {
              return {
                deny: true,
                reason: `VENOM safety: blocked dangerous command pattern: ${pattern.source}`,
              };
            }
            metrics.warningsSent.push(`Danger zone: "${command.substring(0, 80)}"`);
          }
        }

        // Loop detection for bash (e.g. same grep command repeated)
        const record: ToolCallRecord = {
          tool: "bash",
          target: command.substring(0, 60),
          timestamp: Date.now(),
        };
        const stall = detectStall(record);
        recordCall(record);
        if (stall) {
          metrics.loopWarnings++;
          // For bash loops: warn but don't deny — might be intentional polling
          metrics.warningsSent.push(stall);
        }
      }

      return {};
    },

    // Pattern #3 + #8: Cost tracking after each tool
    "tool.execute.after": async (input) => {
      const inputTokens = input.usage?.inputTokens ?? 0;
      const outputTokens = input.usage?.outputTokens ?? 0;
      metrics.inputTokens += inputTokens;
      metrics.outputTokens += outputTokens;
      // Sonnet pricing baseline: $3/1M input, $15/1M output
      metrics.costUsd += inputTokens * (3 / 1_000_000) + outputTokens * (15 / 1_000_000);

      if (
        metrics.costUsd > LIMITS.warnCostUsd &&
        !metrics.warningsSent.includes("cost_warn_1")
      ) {
        metrics.warningsSent.push("cost_warn_1");
        try {
          await ctx.client.tui?.toast?.show?.({
            body: {
              message: `VENOM: session cost $${metrics.costUsd.toFixed(2)} (limit $${LIMITS.maxCostUsd})`,
              level: "warning",
            },
          });
        } catch {
          // TUI toast not available in headless mode
        }
      }
    },

    // Pattern #7: Save state when agent goes idle (checkpoint)
    "session.idle": async () => {
      await safeWrite(dir, METRICS_PATH, JSON.stringify(metrics, null, 2));

      if (metrics.filesModified.length > 0) {
        const today = new Date().toISOString().split("T")[0];
        const content = [
          `# Active Work — ${today}`,
          "",
          `**Session:** ${metrics.sessionId}`,
          `**Modified:** ${metrics.filesModified.join(", ")}`,
          `**Cost:** $${metrics.costUsd.toFixed(3)} | **Calls:** ${metrics.toolCalls}`,
          "",
          "Resume from here next session.",
        ].join("\n");

        await safeWrite(dir, ACTIVE_PATH, content);
      }
    },

    // Pattern #7: Inject VENOM state into compaction so identity survives context reset
    "experimental.session.compacting": async (_input, output) => {
      const snapshot = await generateVenomSnapshot(dir);
      if (output.context) {
        output.context.push(snapshot);
      }
    },

    // Pattern #4: Expose VENOM environment to all shell commands
    "shell.env": async () => ({
      VENOM_ACTIVE: "1",
      VENOM_PROJECT: dir,
      VENOM_SESSION: metrics.sessionId,
    }),

    tools: [venomRemember, venomInstinct],
  };
};

export default venomPlugin;
