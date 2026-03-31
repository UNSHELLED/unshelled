# Claude Code Anatomy: Hooks

> **Verified against:** Anthropic [Hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks) (fetched 2026-03-30).  
> Command hooks receive JSON on **stdin**; results via **exit code** + **stdout** (JSON must be clean — no shell profile noise).

**Status:** 🟢 Research complete (official docs)

---

## Executive summary (VENOM-critical)

| Question | Answer |
|----------|--------|
| Does `UserPromptSubmit` exist? | **Yes.** Fires when the user submits a prompt, **before** Claude processes it. |
| Can it read the prompt text? | **Yes.** stdin JSON includes `"prompt": "..."`. |
| Can it modify the prompt string? | **Not directly** in the schema shown. You can **add context**: plain text on stdout (exit 0), or JSON fields like `additionalContext` / `hookSpecificOutput` (see §UserPromptSubmit). To **block**, use `decision: "block"` + `reason` or exit **2**. |
| Does `PreToolUse` block tools? | **Yes.** Use `hookSpecificOutput` with `permissionDecision`: `"deny"` \| `"allow"` \| `"ask"`, **not** top-level `decision: "block"` (that pattern is for other events; PreToolUse uses `hookSpecificOutput`). |
| Deprecated PreToolUse format? | Docs: top-level `decision`/`reason` for PreToolUse are **deprecated**; use `permissionDecision` / `permissionDecisionReason`. |
| Input method | **stdin JSON** for command hooks — not a fixed set of `CLAUDE_*` env vars as the only channel (env vars like `CLAUDE_PROJECT_DIR` exist for script paths). |

---

## Hook events — complete list (official)

| Event | When it fires |
|-------|----------------|
| `SessionStart` | Session begins or resumes |
| `UserPromptSubmit` | User submits a prompt, **before** Claude processes it |
| `PreToolUse` | Before a tool runs; **can block** |
| `PermissionRequest` | When a permission dialog would appear |
| `PostToolUse` | After tool **succeeds** |
| `PostToolUseFailure` | After tool **fails** |
| `Notification` | Claude Code sends a notification |
| `SubagentStart` | Subagent spawned |
| `SubagentStop` | Subagent finishes |
| `TaskCreated` | Task created via TaskCreate |
| `TaskCompleted` | Task marked completed |
| `Stop` | Main agent **finished responding** (not user interrupt) |
| `StopFailure` | Turn ends due to **API error**; hook output **ignored** |
| `TeammateIdle` | Agent-team teammate about to go idle |
| `InstructionsLoaded` | `CLAUDE.md` or `.claude/rules/*.md` loaded (session start or lazy) |
| `ConfigChange` | Config changes during session |
| `CwdChanged` | Working directory changes |
| `FileChanged` | Watched file changes (`matcher` = basename) |
| `WorktreeCreate` / `WorktreeRemove` | Worktree lifecycle |
| `PreCompact` | Before compaction |
| `PostCompact` | After compaction |
| `Elicitation` / `ElicitationResult` | MCP server user-input flows |
| `SessionEnd` | Session terminates |

**Subagent note:** For subagents, **`Stop` hooks are converted to `SubagentStop`** (per docs).

---

## Configuration shape

Three levels:

1. **Hook event** (e.g. `PreToolUse`)
2. **Matcher group** — regex filter (varies by event; see matcher table below)
3. **Hook handlers** — `type`: `command` | `http` | `prompt` | `agent`

**Locations:** `~/.claude/settings.json`, `.claude/settings.json`, `.claude/settings.local.json`, managed policy, plugin `hooks/hooks.json`, and **skill/agent frontmatter** (scoped to component lifecycle).

**Matcher (tool events):** filters **tool name** — e.g. `Bash`, `Edit|Write`, `mcp__.*`. Use `"*"` or omit for all. **`if`** field: permission-rule syntax on tool + args (e.g. `Bash(rm *)`, `Edit(*.ts)`).

**Timeouts (defaults):** command **600s**, prompt **30s**, agent **60s** — override per handler with `timeout`.

**`async`:** command hooks can run in background (`async: true`).

**Windows:** `shell: "powershell"` for command hooks on Windows.

**Dedup:** Identical handlers deduplicated; parallel matching runs.

---

## Matcher support summary

| Event | Matcher filters |
|-------|-----------------|
| `PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest` | Tool name |
| `SessionStart` | `startup`, `resume`, `clear`, `compact` |
| `PreCompact`, `PostCompact` | `manual`, `auto` |
| `SubagentStart`, `SubagentStop` | Agent type / name |
| `UserPromptSubmit`, `Stop`, `TaskCreated`, `TaskCompleted`, `WorktreeCreate`, `WorktreeRemove`, `CwdChanged` | **No matcher** — fires every time; `matcher` **silently ignored** |

---

## Common stdin fields (all events)

| Field | Meaning |
|-------|---------|
| `session_id` | Session id |
| `transcript_path` | Path to conversation JSONL |
| `cwd` | CWD when hook runs |
| `permission_mode` | When applicable: `default`, `plan`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions` |
| `hook_event_name` | Event name |

**Subagent / `--agent`:** `agent_id`, `agent_type` when inside subagent.

---

## Exit codes (command hooks)

| Code | Meaning |
|------|---------|
| **0** | Success — stdout parsed for JSON (if present). **Only JSON on stdout** — no extra print noise. |
| **2** | **Blocking error** — stderr → feedback; **no JSON processed**. Effect varies by event (see below). |
| Other | Non-blocking error; stderr verbose; execution continues |

**Exit 2 effects (selection):**

| Event | Exit 2 |
|-------|--------|
| `PreToolUse` | Blocks tool |
| `UserPromptSubmit` | Blocks prompt, **erases** prompt |
| `Stop` | Prevents stop (conversation continues) |
| `SubagentStop` | Prevents subagent stop |
| `PostToolUse` | Cannot block tool (already ran); stderr to Claude |
| `SessionStart`, `PreCompact`, `PostCompact` | stderr to user only; no block |

---

## JSON output — universal fields

On **exit 0**, stdout may be JSON:

| Field | Role |
|-------|------|
| `continue` | If `false`, stops processing after hook (`stopReason` to user) |
| `stopReason` | Shown when `continue` is false |
| `suppressOutput` | Hide stdout from verbose |
| `systemMessage` | Warning shown to **user** |

**Either** exit code signaling **or** structured JSON — **not both** for the same decision path: exit **2** ignores JSON on stdout.

**Exceptions:** `UserPromptSubmit` and `SessionStart` — stdout can add **context Claude sees** (see docs: plain text or structured).

---

## Decision patterns by event (official table)

| Events | Pattern | Keys |
|--------|---------|------|
| `UserPromptSubmit`, `PostToolUse`, `PostToolUseFailure`, `Stop`, `SubagentStop`, `ConfigChange` | Top-level | `decision: "block"`, `reason` |
| `PreToolUse`, `PermissionRequest`, etc. | `hookSpecificOutput` | See per-event sections |

**PreToolUse** uses **`hookSpecificOutput.hookEventName: "PreToolUse"`** + `permissionDecision` + optional `updatedInput`, `additionalContext`.

---

## Hook: `UserPromptSubmit`

**Fires when:** User submits a prompt, **before** Claude processes it.  
**Matcher:** None (always fires).

**Input (additional):** `prompt` — user text.

**Output / control:**

- **Add context:** exit 0 + **plain text** stdout (non-JSON), **or** JSON with `additionalContext`, **or** `hookSpecificOutput` with `hookEventName: "UserPromptSubmit"` + `additionalContext`.
- **Block prompt:** JSON `{"decision":"block","reason":"..."}` **or** exit **2** (stderr).
- Universal fields: `continue`, `systemMessage`, etc.

**VENOM use:** Energy-matching **hints** as `additionalContext` (compact, non-announcing); optional lightweight validation. **Cannot** replace Cursor `alwaysApply` entirely — but can inject **session-aware** reminders from `.venom/` when prompt matches init patterns.

---

## Hook: `PreToolUse`

**Fires when:** After tool params are built, **before** execution.  
**Matcher:** Tool name regex; `if` for finer filter.

**Input (additional):** `tool_name`, `tool_input`, `tool_use_id`. Shapes documented per tool (Bash, Edit, Write, Read, Glob, Grep, Agent, MCP, …).

**Decision control (`hookSpecificOutput`):**

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "…",
    "updatedInput": { },
    "additionalContext": "…"
  }
}
```

- `permissionDecision`: **`allow`** | **`deny`** | **`ask`**
- **`updatedInput`** replaces full tool input object — include unchanged fields
- **`additionalContext`** added for Claude before tool runs

**VENOM use:** Loop/safety screening (repeat tool + same target), destructive command patterns, **ask** for edge cases.

---

## Hook: `PostToolUse`

**Fires when:** After tool **succeeds**.  
**Input:** `tool_input`, `tool_response`, `tool_use_id`.

**Decision:** Can use top-level `decision: "block"` + `reason` to **feedback** Claude (tool already ran). `additionalContext` in `hookSpecificOutput` for PostToolUse.

**VENOM use:** Instinct / pattern logging (side effects), loop detection **after** fact, lint-on-write patterns.

---

## Hook: `PostToolUseFailure`

**Input:** `error`, `is_interrupt`, tool fields.

**VENOM use:** Structured failure logging; corrective `additionalContext` to Claude.

---

## Hook: `SessionStart`

**Fires when:** New session, resume, `/clear`, or post-compact (matchers: `startup`, `resume`, `clear`, `compact`).  
**Only `type: "command"`** supported.

**Input (additional):** `source`, `model`, optional `agent_type`.

**Output:** `hookSpecificOutput` with `hookEventName: "SessionStart"` + `additionalContext`; or plain stdout for Claude context.

**Env:** `CLAUDE_ENV_FILE` — append `export` lines for env vars visible to later Bash.

**VENOM use:** Inject `.venom/` summary pointers, **not** full file dumps — token budget.

---

## Hook: `PreCompact`

**Fires when:** Before compaction. Matcher: `manual` | `auto`.

**Input:** `trigger`, `custom_instructions` (user text for manual `/compact`).

**Decision control:** **None** in the “block compaction” sense (per docs table: side effects / logging). **Universal** JSON fields (`systemMessage`, etc.) still apply per template usage — see existing `pre-compact.js` pattern in `platforms/claude-code/template/`.

**VENOM use:** **Compaction survival list** — `systemMessage` / `continue: true` preserve identity bullets (align with CLAUDE.md compact section).

---

## Hook: `PostCompact`

**Input:** `trigger`, `compact_summary`.

**VENOM use:** Optional telemetry/logging; no decision control on summary.

---

## Hook: `Stop`

**Fires when:** Main agent **finished responding** — **not** on user interrupt; API errors → `StopFailure`.

**Input:** `stop_hook_active` (guard infinite continue), `last_assistant_message`.

**Decision:** `decision: "block"` + `reason` → **forces Claude to continue** (does not stop the session).

**VENOM use:** “One more pass” gates — use sparingly; risk of loops — check `stop_hook_active`.

---

## Hook: `SubagentStop`

Same decision pattern as `Stop` for subagent completion; **Stop** auto-maps to **SubagentStop** in subagent context.

---

## Corrections to prior internal brief

| Old assumption | Correct per docs |
|----------------|------------------|
| `PreToolUse` blocks with `{"decision":"block"}` | Use **`hookSpecificOutput.permissionDecision`** (`deny` / `allow` / `ask`). Old top-level `decision` **deprecated** for this event. |
| Hooks only use env vars | Primary input is **stdin JSON**; `$CLAUDE_PROJECT_DIR` etc. for script paths. |
| `SessionStart` only returns `continue` + `systemMessage` | Also **`additionalContext`** via `hookSpecificOutput`; `SessionStart` is **command-only**. |

---

## VENOM design implications (updated)

1. **Energy matching via `UserPromptSubmit`:** **Correct hook.** Read `prompt` from stdin; inject `additionalContext` (compact energy hints) **without** naming user state. **Do not** rely on modifying raw prompt text unless future docs add it — design for **add** + **block**.
2. **Loop detection via `PreToolUse`:** **Correct hook.** Full `tool_name` + `tool_input` for equality checks; **deny** or **ask** with reason.
3. **Loop state via `PostToolUse`:** Tool already ran — use for **logging** / **additionalContext** to Claude, not prevention.
4. **Task state via `Stop`:** Can **block stop** to continue — **not** the same as “save ACTIVE.md”; prefer **explicit file writes inside tools** or **SessionEnd** / **Stop** side-effect scripts with care for timeouts. **SessionEnd** default timeout **1.5s** — set `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` if saving large state.
5. **Context via `SessionStart`:** Yes — keep **short** `additionalContext` + `CLAUDE_ENV_FILE` if needed for tooling.

---

## Reference

- [Hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks) — Anthropic  
- [Hooks guide](https://docs.anthropic.com/en/hooks-guide) — quickstart  
- [Permissions](https://docs.anthropic.com/en/permissions) — `if` matcher syntax

---

## Output checklist (for this file)

- [x] All hook types listed
- [x] `UserPromptSubmit` prompt field + context + block
- [x] `PreToolUse` deny/allow/ask + `updatedInput`
- [x] stdin vs env clarified
- [x] Exit 0 vs 2 vs JSON
- [x] SubagentStop / Stop mapping
- [x] VENOM implications mapped
