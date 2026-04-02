# 13 — Hooks parity (Claude Code / VENOM expectations ↔ OpenClaw)

> **Canon:** [OPENCLAW-EAT-CANON.md](../OPENCLAW-EAT-CANON.md) · **Upstream truth:** [`openclaw-main/docs/automation/hooks.md`](../../openclaw-main/docs/automation/hooks.md) (event names + plugin hooks)  
> **Why:** [PLANNING-GAPS.md](../PLANNING-GAPS.md) §5 — VENOM’s “hooks” language came from Cursor/Claude Code; OpenClaw uses a **different** event surface.

## 1. Not 1:1

| Claude Code / Cursor style | OpenClaw reality |
|----------------------------|------------------|
| `PreToolUse` / `PostToolUse` | **Plugin SDK:** `before_tool_call`, `after_tool_call`, `tool_result_persist` (see hooks doc §Tool Result Hooks + Plugin Hook Events) |
| `SessionStart` / `SessionEnd` | **Plugin hooks:** `session_start`, `session_end` (same doc; also gateway lifecycle) |
| `UserPromptSubmit` | Closest: **`message:preprocessed`** / **`message:received`** (inbound before or after enrichment) — not identical |
| `PreCompact` | **`session:compact:before`** / **`session:compact:after`** |
| N/A (VENOM-specific) | **`agent:bootstrap`** — mutate `context.bootstrapFiles` before injection |

VENOM obligations (memory flush reminders, “never do X” re-injection) map to **custom hooks or plugins**, not drop-in Claude hook scripts.

## 2. Mapping table (planning)

| VENOM / .claude intent | OpenClaw hook / event | Notes |
|------------------------|------------------------|--------|
| Block dangerous tool | `before_tool_call` — `block` / `requireApproval` | Pushback-as-policy |
| Log or trim tool output | `after_tool_call`, `tool_result_persist` | Transcript shaping |
| Session open — load MEMORY pointer | `session_start` (plugin) or workspace bootstrap | Bootstrap already injects AGENTS/SOUL |
| Before compaction — preserve identity | `session:compact:before` | Pair with [08-compaction-handler.md](./08-compaction-handler.md) |
| After compaction — verify | `session:compact:after` | |
| Inbound message audit | `message:received` / `message:preprocessed` | Channel-aware; not IDE-only |

## 3. Implementation discipline

1. **Read** official [`hooks.md`](../../openclaw-main/docs/automation/hooks.md) when adding automation — names change with releases.
2. **Workspace hooks** (`<workspace>/hooks/`) require explicit enablement — trusted code only.
3. **Parity:** “same as Claude Code” is **false**; treat each VENOM hook idea as a **re-implementation** against OpenClaw’s API.

---

*Hooks are contracts — rename the obligation, don’t rename the upstream event.*
