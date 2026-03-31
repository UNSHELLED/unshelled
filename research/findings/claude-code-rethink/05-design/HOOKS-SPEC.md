# Hooks Spec — Claude Code VENOM v3.0

> Every script. Exact hook type. Input env vars. Output format. What it does. Failure behavior.
> Builder reads this before writing any .js file.

**Status:** 🟡 Hardened against Phase 02 `HOOKS.md` + `AGENTS.md` (2026-03-30). Builder: read stdin JSON, clean stdout JSON only.
**Critical:** Wrong `PreToolUse` response shape = tools never block correctly. Wrong stop vs session-end = resume state never flushes.

---

## settings.json Configuration (to verify during Phase 02)

```json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [{
          "type": "command",
          "command": "node .claude/scripts/session-start.js",
          "timeout": 5
        }]
      }
    ],
    "PreCompact": [
      {
        "hooks": [{
          "type": "command",
          "command": "node .claude/scripts/pre-compact.js",
          "timeout": 5
        }]
      }
    ],
    "UserPromptSubmit": [
      {
        "hooks": [{
          "type": "command",
          "command": "node .claude/scripts/user-prompt-submit.js",
          "timeout": 3
        }]
      }
    ],
    "PreToolUse": [
      {
        "hooks": [{
          "type": "command",
          "command": "node .claude/scripts/pre-tool-use.js",
          "timeout": 5
        }]
      }
    ],
    "PostToolUse": [
      {
        "hooks": [{
          "type": "command",
          "command": "node .claude/scripts/post-tool-use.js",
          "timeout": 2
        }]
      }
    ],
    "SessionEnd": [
      {
        "hooks": [{
          "type": "command",
          "command": "node .claude/scripts/session-end.js",
          "timeout": 10
        }]
      }
    ]
  }
}
```

**Verified (Phase 02):** Hook keys match official docs (`UserPromptSubmit`, `PreToolUse`, `PostToolUse`, `SessionEnd`, …). Nesting: event → array of matcher groups → `hooks[]` with `type`, `command`, `timeout`. **`timeout`** is in **seconds** in shipped `settings.json` (e.g. `5`); confirm against your Claude Code version. For `SessionEnd`, default hook budget is tight — set **`CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS`** if `session-end.js` must write larger `ACTIVE.md`.

---

## Script 1: `session-start.js` [UPGRADE]

**Hook type:** `SessionStart`
**Fires when:** New session starts

**What it does:**
1. Read `.venom/CONTEXT.md` (if exists)
2. Read `.venom/learnings/corrections.yaml` (if exists)
3. Check `.venom/work/ACTIVE.md` (if exists, add "Resume available" note)
4. Output: combined as systemMessage

**Input:** **stdin JSON** (primary). Common fields: `session_id`, `cwd`, `hook_event_name`, `source` (`startup` \| `resume` \| `clear` \| `compact`), optional `model`, `agent_type`. Use **`cwd`** for `process.chdir` or path joins. Env helpers (e.g. `CLAUDE_PROJECT_DIR`) may exist — do not rely on them as the only channel.

**Output format:**
```json
{
  "continue": true,
  "systemMessage": "## Project Context\n[CONTEXT.md contents]\n\n## Hard Rules\n[corrections.yaml contents]\n\n## Resume\n[ACTIVE.md resume point if exists]"
}
```

**Failure behavior:** If any file doesn't exist → skip it, continue. Never crash. Never block session start.

**Key change from v2.4:** Remove `.unshelled/memory/default/default.json` reference. Load from `.venom/CONTEXT.md`.

**Node.js constraints:** Use built-in `fs` only. No external npm dependencies. Use `fs.existsSync` before reading.

**Skeleton:**
```js
const fs = require('fs');
const path = require('path');

const venomDir = path.join(process.cwd(), '.venom');
let systemMessage = '';

const contextPath = path.join(venomDir, 'CONTEXT.md');
if (fs.existsSync(contextPath)) {
  systemMessage += '## Project Context\n' + fs.readFileSync(contextPath, 'utf8') + '\n\n';
}

const correctionsPath = path.join(venomDir, 'learnings', 'corrections.yaml');
if (fs.existsSync(correctionsPath)) {
  systemMessage += '## Hard Rules\n' + fs.readFileSync(correctionsPath, 'utf8') + '\n\n';
}

const activePath = path.join(venomDir, 'work', 'ACTIVE.md');
if (fs.existsSync(activePath)) {
  systemMessage += '## Active Task\n(Previous session state exists — read .venom/work/ACTIVE.md to resume)\n';
}

if (systemMessage) {
  console.log(JSON.stringify({ continue: true, systemMessage }));
} else {
  console.log(JSON.stringify({ continue: true }));
}
```

---

## Script 2: `pre-compact.js` [UPGRADE]

**Hook type:** `PreCompact`
**Fires when:** Context is about to be compacted

**What it does:**
1. Write current task state to `.venom/work/ACTIVE.md` (pre-compaction snapshot)
2. Output systemMessage with VENOM identity preservation

**Input:** stdin JSON: `trigger` (`manual` \| `auto`), `custom_instructions` (user text on manual `/compact`). **Survival:** `systemMessage` / `continue` behave per hooks doc — design for **identity bullets** that compaction should preserve; also **write `ACTIVE.md` here** as a belt-and-suspenders snapshot before compaction.

**Output format:**
```json
{
  "continue": true,
  "systemMessage": "VENOM IDENTITY PRESERVED:\n- Nine minds, one voice. No shell, so all intelligence.\n- The Pact: truth, loyalty, memory, growth.\n- Nine minds: Architect (design), Researcher (explore), Reviewer (audit), Historian (memory), Builder (implement), Debugger (root-cause), Predictor (risk), Communicator (adapt), Learner (evolve).\n- Autonomous loop: Observe → Hypothesize → Test → Evaluate → Repeat\n- Stall: same tool 3x = name it, don't hide it.\n- Answer first. Earn every word.\n- ACTIVE.md was written before compaction. Resume from .venom/work/ACTIVE.md."
}
```

**Key question:** Does injecting this BEFORE compaction mean the compaction model includes it in the summary? That's the entire bet. If the answer is "no," we need a different strategy.

---

## Script 3: `user-prompt-submit.js` [NEW]

**Hook type:** `UserPromptSubmit`
**Fires when:** User submits a message

**Input (verified):** stdin JSON includes **`prompt`** (user text). You may inject via **`additionalContext`** or `hookSpecificOutput` for this event — not by assuming undocumented raw prompt mutation.

**What it does:**
1. Parse stdin JSON; read **`prompt`**
2. Detect energy signals:
   - Short + typos + "fix" + "???" → frustrated → inject Churchill context
   - Clear + confident + no questions → flow → minimal injection
   - "how does" + "why" + "explain" → learning → inject Feynman context
   - "what should I" + vague → stuck → inject Marcus context
   - "imagine" + big scope → visionary → inject Tesla context
3. Output compact **`additionalContext`** (preferred for “what Claude sees”) or **`systemMessage`** per docs — keep under a strict token budget; no announcing archetype names to the user.

**Output format (example):**
```json
{
  "continue": true,
  "additionalContext": "[Tone: direct, minimal prose. User signal: frustration/fix. Skip preamble.]"
}
```

**Failure behavior:** On parse error → `{"continue": true}`. Never block unless intentional (rare).

**Fallback:** If hook disabled, `CLAUDE.md` + `energy-matching.md` still apply for the same session — hook is an accelerator, not the only path.

---

## Script 4: `pre-tool-use.js` [NEW]

**Hook type:** `PreToolUse`
**Fires when:** Before every matched tool call (use matcher `"*"` or specific tool regex).

**Input (verified):** stdin JSON: **`tool_name`**, **`tool_input`**, **`tool_use_id`**. Parse stdin — do not rely on env-only APIs.

**What it does:**
1. Parse stdin JSON.
2. **Loop detection:** Read `.venom/state/.tool-counter.json` (or similar). If same tool + same target **3×** → **`permissionDecision: "ask"`** or **`additionalContext`** stall warning; use **`deny`** only for destructive repeats.
3. **Safety screening:** Match `tool_input` / command string against danger patterns → **`permissionDecision: "deny"`** or **`ask`**.
4. Optional: **`updatedInput`** to replace full tool input (include unchanged fields).

**Danger patterns to block:**
```js
const BLOCK_PATTERNS = [
  { match: /rm -rf \/[^t]/, reason: 'Irreversible filesystem destruction outside /tmp. Use rm -rf /tmp/... or a specific path.' },
  { match: /curl .* \| (bash|sh)/, reason: 'Piping curl to shell is a security risk. Download first, inspect, then execute.' },
  { match: /DROP (TABLE|DATABASE|SCHEMA)/i, reason: 'Irreversible database operation. Use /venom-check first. Confirm explicitly.' },
  { match: /git push --force(?! --with-lease)/, reason: 'Force push without --force-with-lease can destroy history. Use --force-with-lease.' },
  { match: /chmod 777/, reason: 'chmod 777 grants world-write. Use specific permission bits.' },
  { match: /> \.(env|pem|key|crt|p12|credentials)/, reason: 'Writing to credential files is blocked. Use environment variables or secrets manager.' },
];

const WARN_PATTERNS = [
  { match: /sudo/, reason: 'sudo used — elevated permissions. Verify this is necessary.' },
  { match: /TRUNCATE/i, reason: 'TRUNCATE removes all rows. Confirm this is intended.' },
];
```

**Output — allow (no change):**
```json
{"continue": true}
```

**Output — deny tool:**
```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "rm -rf outside /tmp detected. Irreversible. Use a specific path or confirm explicitly."
  }
}
```

**Output — stall / caution (prefer ask or context, not silent allow):**
```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "ask",
    "permissionDecisionReason": "Same tool + target repeated 3× with no new information. Confirm before continuing.",
    "additionalContext": "Name the stuck state; try a different hypothesis."
  }
}
```

**Failure behavior:** On crash or timeout → `{"continue": true}` (fail open). Never **deny** because the safety script threw.

---

## Script 5: `post-tool-use.js` [NEW]

**Hook type:** `PostToolUse`
**Fires when:** After every tool call

**CRITICAL CONSTRAINT:** This is in the hot path. It fires after EVERY tool call.

**What it does (lightweight only):**
1. Parse stdin JSON: **`tool_name`**, **`tool_input`**, **`tool_response`** (response available **after** success).
2. Update `.venom/state/.tool-counter.json` with `{toolName, inputHash, timestamp, count}` (hash a short prefix of serialized `tool_input` for speed).
3. That's it. Nothing else.

**What it MUST NOT do:**
- Make network calls
- Read large files
- Write to MEMORY.md (too slow)
- Do any analysis

**Tool counter format:**
```json
{
  "recent": [
    {"tool": "Bash", "inputHash": "abc123", "count": 2, "last": "2026-03-30T10:15:00Z"},
    {"tool": "Read", "inputHash": "def456", "count": 1, "last": "2026-03-30T10:14:00Z"}
  ],
  "maxHistory": 10
}
```

**inputHash:** MD5 of the tool input (just first 100 chars — fast, not precise). Pre-requisite: `require('crypto')`.

**Failure behavior:** Catch all errors silently. Exit 0. Never fail. Never block.

---

## Script 6: `session-end.js` [NEW]

**Hook type:** `SessionEnd`
**Fires when:** **Session terminates** (user ends session / process exit path — not “model finished one reply”).

**Input:** stdin JSON per hooks doc (`session_id`, `cwd`, `hook_event_name`, …). **No** full transcript in stdin — assume **`ACTIVE.md` is maintained incrementally** by the model via tools, or merge from `.venom/state/*.json` that **PostToolUse** / **PreCompact** updated.

**What it does:**
1. Read optional `.venom/state/session-draft.md` or tool-counter snapshot if present.
2. **Merge / finalize** `.venom/work/ACTIVE.md` with timestamp, resume pointer, last known files touched.
3. Keep total work under **SessionEnd** timeout; document **`CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS`** for slower disks.

**ACTIVE.md template (finalized or appended):**
```markdown
# Active Task State

**Session ended:** [ISO timestamp]
**Project:** [from CONTEXT.md title or cwd basename]

## Last Task
[From running state file or "see .venom/work/ACTIVE.md prior sections"]

## Files Modified
[From tool counter if available]

## Resume From
[Concrete next step — one line]

## Blockers / Next Step
[Any unresolved item]
```

**Do not use `Stop` for this:** `Stop` fires when the **main agent finished responding**; blocking it **continues** the conversation. For persistence at **teardown**, use **`SessionEnd`** (and **`PreCompact`** as backup before compaction).

---

## Zero-Dependency Requirement

All six scripts must use Node.js built-ins ONLY:
- `fs` — file operations
- `path` — path resolution
- `crypto` — hashing (for tool counter)
- `process.env` — environment variables
- `process.exit` — exit codes

**No npm install. No external modules. Clones and works.**
