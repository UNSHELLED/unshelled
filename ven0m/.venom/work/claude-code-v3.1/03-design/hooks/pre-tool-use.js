// pre-tool-use.js — Intelligence layer before tool execution
// Built-in modules only — no external dependencies

const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────

const VENOM_DIR = '.venom';
const STATE_DIR = path.join(VENOM_DIR, 'state');
const RECENT_CALLS_PATH = path.join(STATE_DIR, 'recent-calls.json');

const DANGER_PATTERNS = [
  { pattern: /rm\s+-rf\s+\/(?!tmp)/, severity: 'block', reason: 'Recursive delete of root' },
  { pattern: /sudo\s+rm/, severity: 'warn', reason: 'Sudo + rm combo' },
  { pattern: /curl\s+.*\|\s*(?:ba)?sh/, severity: 'block', reason: 'Piped shell execution' },
  { pattern: />\s*\/dev\/sd[a-z]/, severity: 'block', reason: 'Direct disk write' },
  { pattern: /dd\s+.*of=\/dev/, severity: 'block', reason: 'dd to device' },
  { pattern: /:()\{\s*:\|:&\s*\};:/, severity: 'block', reason: 'Fork bomb' },
  { pattern: /chmod\s+777/, severity: 'warn', reason: 'Insecure permissions' },
  { pattern: /git\s+push\s+.*--force(?!\s+-with-lease)/, severity: 'warn', reason: 'Force push without lease' },
];

const LIMITS = {
  maxToolCalls: 200,
  loopDetectionWindow: 5,
  loopRepeatThreshold: 3,
};

// ─── Helpers ─────────────────────────────────────────────────────────

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

function safeWrite(filePath, content) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  } catch {
    return false;
  }
}

function safeParseJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

// ─── Stall Detection ─────────────────────────────────────────────────

function detectStall(toolName, args) {
  const recentStr = safeRead(RECENT_CALLS_PATH);
  const recent = recentStr ? safeParseJSON(recentStr) : { calls: [] };
  
  if (!recent || !recent.calls) {
    recent.calls = [];
  }

  // Record this call
  const call = {
    tool: toolName,
    args: JSON.stringify(args),
    timestamp: Date.now(),
  };

  recent.calls.push(call);

  // Keep only last N calls
  if (recent.calls.length > LIMITS.loopDetectionWindow) {
    recent.calls = recent.calls.slice(-LIMITS.loopDetectionWindow);
  }

  safeWrite(RECENT_CALLS_PATH, JSON.stringify(recent, null, 2));

  // Check for loops (same tool + same args repeated)
  const window = recent.calls.slice(-LIMITS.loopDetectionWindow);
  const signature = `${toolName}:${JSON.stringify(args)}`;
  const matches = window.filter(c => `${c.tool}:${c.args}` === signature);

  if (matches.length >= LIMITS.loopRepeatThreshold) {
    return {
      stalled: true,
      message: `⚠️ STALL: ${toolName} called ${matches.length}x with same args in last ${LIMITS.loopDetectionWindow} calls. Iteration stuck?`,
    };
  }

  return { stalled: false };
}

// ─── Danger Screening ────────────────────────────────────────────────

function screenDanger(toolName, args) {
  if (toolName !== 'Bash') return { dangerous: false };

  const command = args.command || '';

  for (const { pattern, severity, reason } of DANGER_PATTERNS) {
    if (pattern.test(command)) {
      if (severity === 'block') {
        return {
          dangerous: true,
          blocked: true,
          message: `🛑 BLOCKED: ${reason}\nCommand: ${command}`,
        };
      } else {
        return {
          dangerous: true,
          blocked: false,
          message: `⚠️ WARNING: ${reason}\nCommand: ${command}`,
        };
      }
    }
  }

  return { dangerous: false };
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  try {
    let input = '';
    try {
      input = fs.readFileSync(0, 'utf-8');
    } catch {
      process.exit(0);
    }

    const data = safeParseJSON(input);
    if (!data) {
      process.exit(0);
    }

    const toolName = data.tool || data.tool_name || data.name || '';
    const args = data.args || data.input || {};

    const warnings = [];

    const stallCheck = detectStall(toolName, args);
    if (stallCheck.stalled) {
      warnings.push(stallCheck.message);
    }

    const dangerCheck = screenDanger(toolName, args);
    if (dangerCheck.dangerous) {
      if (dangerCheck.blocked) {
        console.log(JSON.stringify({
          systemPromptAddendum: dangerCheck.message + '\n\nI cannot execute this command. Stopping.',
        }));
        process.exit(1);
      } else {
        warnings.push(dangerCheck.message);
      }
    }

    if (warnings.length > 0) {
      console.log(JSON.stringify({
        systemPromptAddendum: warnings.join('\n\n'),
      }));
    }
  } catch {
    // Never throw — bad stdin shape should not break the session
  }
  process.exit(0);
}

main().catch(() => process.exit(0));
