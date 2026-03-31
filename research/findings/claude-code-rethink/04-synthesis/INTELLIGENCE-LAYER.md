# Synthesis: Intelligence Layer

> How the 11 intelligence patterns from the OpenCode assimilation map to Claude Code primitives.  
> Every pattern has a concrete Claude Code implementation **verified** against Phase 02 anatomy.

**Status:** 🟢 Resolved (2026-03-30) — cross-checked with `02-claude-code-anatomy/HOOKS.md`, `AGENTS.md`, `SURFACES.md`  
**Input:** `.venom/work/opencode-assimilation/` + Phase 02 + Phase 03 `MASTER-PATTERNS.md`

---

## The 11 Patterns → Claude Code Mapping

| # | Pattern | OpenCode implementation | Claude Code implementation | Status |
|---|---------|------------------------|---------------------------|--------|
| 1 | Context engineering | `experimental.chat.system.transform` | `SessionStart` + **`UserPromptSubmit`** → `additionalContext` / hook-specific output (short `.venom/` pointers) | ✅ |
| 2 | Autonomous loop | Loop patterns in AGENTS.md | Loop protocol in `CLAUDE.md` + **`PreToolUse`** stall / repeat detection (`tool_name` + `tool_input` on stdin) | ✅ |
| 3 | Instinct learning | `venom_instinct()` tool | **`PostToolUse`** (sees `tool_response`) + `/remember` routing → learnings files | ✅ |
| 4 | Hook architecture | TypeScript `@opencode-ai/plugin` | Command hooks: Node (or shell) in `.claude/scripts/`, **stdin JSON** | ✅ |
| 5 | Wave execution | Task tool parallel spawning | **`Agent`** tool (alias `Task`) — parallel delegation when orchestration requests it | ✅ |
| 6 | Verification gates | In AGENTS.md behavior | `CLAUDE.md` + `/venom-check` (and command output contracts) | ✅ |
| 7 | Memory persistence | `session.idle` → ACTIVE.md | **`SessionEnd`** hook → flush `ACTIVE.md` (primary). **`Stop`** = turn finished, not session exit; use only if intentional side-effect | ✅ |
| 8 | Sandboxing | `tool.execute.before` blocking | **`PreToolUse`** → `hookSpecificOutput.permissionDecision` `deny` \| `allow` \| `ask` (not deprecated top-level `decision` for this event) | ✅ |
| 9 | XML prompting | Internal orchestration | Same — internal structured prompts in skills/agents | ✅ |
| 10 | Multi-agent orchestration | `@venom-*` + `subtask: true` | **`Agent`** tool: `subagent_type` = built-in **or** custom agent **`name`** from `.claude/agents/` | ✅ |
| 11 | Cross-platform abstraction | OpenCode-specific adapters | **`.venom/`** tree (platform-agnostic); Claude Code is one surface | ✅ |

**References:** `HOOKS.md` §UserPromptSubmit, §PreToolUse, §PostToolUse, §SessionStart, §Stop, §SessionEnd; `AGENTS.md` §Agent tool; `HOOKS.md` §VENOM design implications.

---

## Two Audiences Map

Aligned with master `INDEX.md`: **any developer** + **any agent** (headless, `claude -p`, CI).

| Pattern | Any developer | Headless / CI agents | Notes |
|---------|:-------------:|:--------------------:|-------|
| 1 Context engineering | ✅ | ✅ | Hooks fire on all surfaces; keep injections **small** (token budget) |
| 2 Autonomous loop | ✅ | ✅ | `CLAUDE.md` + `PreToolUse` logic identical in TUI and `-p` |
| 3 Instinct learning | ✅ | ⚠️ | Needs writable `.venom/` + hooks enabled; CI must allow hook execution and git commit of learnings if desired |
| 4 Hook architecture | ✅ | ✅ | Same stdin JSON contract |
| 5 Wave execution | ✅ | ✅ | `Agent` / parallel work — orchestration still model-driven; document deterministic **file checkpoints** for machines |
| 6 Verification gates | ✅ | ✅ | `/venom-check` output must stay **machine-parseable** (sections / JSON block) |
| 7 Memory persistence | ✅ | ⚠️ | **`SessionEnd`** default hook timeout **~1.5s** — set `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` if `ACTIVE.md` grows; headless sessions must run hooks |
| 8 Sandboxing | ✅ | ✅ | `PreToolUse` deny/ask |
| 9 XML prompting | ✅ | ✅ | Internal |
| 10 Multi-agent orchestration | ✅ | ✅ | Custom agent **`name`** is stable for scripted prompts |
| 11 Cross-platform abstraction | ✅ | ✅ | `.venom/` is plain files |

**Legend:** ✅ Works fully | ⚠️ Partial (env, permissions, or convention required)

---

## Implementation Details Per Pattern

### Pattern 1: Context Engineering (Claude Code)

**Hooks:** `SessionStart` (startup / resume / clear / compact) + **`UserPromptSubmit`** (every user message).  
**Scripts:** e.g. `session-start.js`, optional `user-prompt-submit.js`.

**Verified behavior (HOOKS.md):**

- **`SessionStart`:** command-only; output via `hookSpecificOutput` + `hookEventName: "SessionStart"` + `additionalContext`, or plain stdout; optional `CLAUDE_ENV_FILE` exports.
- **`UserPromptSubmit`:** stdin includes **`prompt`**; can add **`additionalContext`** or block with `decision: "block"` / exit **2**.

**Progressive loading protocol (design target):**

```
Load always:   CONTEXT.md (small) — project identity
Load always:   corrections.yaml (small) — hard rules
Load on flag:  ACTIVE.md — if resume / stale work
Load on task:  MEMORY.md — when task references past decisions
Never dump:    full corpora at session start
```

**Token budget:** Hooks docs do not state a numeric cap for `additionalContext`; treat as **strictly bounded** (~≤2K tokens injected from hooks + keep `CLAUDE.md` lean).

**Status:** ✅ UPS + SessionStart both valid injection points; UPS is the right place for **energy-matching hints** tied to the **current** prompt.

---

### Pattern 2: Autonomous Loop (Claude Code)

**Location:** `CLAUDE.md` + iterative agent definitions.  
**Hook:** **`PreToolUse`** — stdin includes **`tool_name`**, **`tool_input`**, **`tool_use_id`**.

**Stall detection (example):** maintain `.venom/state/tool-streak.json`; on repeated same tool + same target, emit **`additionalContext`** or **`permissionDecision: "ask"`** / **`deny`** for destructive repeats.

**Status:** ✅ No remaining anatomy unknowns for reading tool + input.

---

### Pattern 3: Instinct Learning (Claude Code)

**Hook:** **`PostToolUse`** (after successful tool).  
**Verified stdin:** `tool_input`, **`tool_response`**, `tool_use_id` — sufficient for lightweight logging / pattern detection.

**Constraints:** Cannot undo the tool; **`decision: "block"`** only feeds back to Claude. Keep script **fast**; on error, fail open (do not break the session).

**Command:** `/remember` routes confirmed learnings to `corrections.yaml`, `instincts.yaml`, `preferences.yaml`, or `MEMORY.md`.

**Status:** ✅ PostToolUse sees **output** (`tool_response`).

---

### Pattern 4: Hook Architecture (Claude Code)

**Six-script target (VENOM template):**

| Event | Script (example) | Role |
|-------|------------------|------|
| `SessionStart` | `session-start.js` | Short `.venom/` context |
| `PreCompact` | `pre-compact.js` | Compaction survival / identity snapshot |
| `UserPromptSubmit` | `user-prompt-submit.js` | Energy match → `additionalContext` |
| `PreToolUse` | `pre-tool-use.js` | Safety + loop screening |
| `PostToolUse` | `post-tool-use.js` | Metrics / instinct signals |
| `SessionEnd` | `session-end.js` | Flush `ACTIVE.md` (preferred) |

**Optional:** `Stop` — use sparingly; **`decision: "block"`** forces another model turn; risk of loops. Not the primary “save workspace state” hook.

**Wiring:** `.claude/settings.json` — `hooks.<Event>[].hooks[]` with `type: "command"`, `command`, `timeout`. **Stdout must be clean JSON** when returning JSON (no shell profile noise).

**Status:** ✅ Event names match Phase 02 list; verify exact casing when editing `settings.json` (`UserPromptSubmit`, `PreToolUse`, …).

---

### Patterns 5–11: Short Notes

**5 — Wave execution:** Same **`Agent`** primitive; template docs should state **file-based wave checkpoints** for headless resumption.

**6 — Verification gates:** Encode **fixed output headings** or a **JSON block** in `/venom-check` for OpenClaw parsers.

**7 — Memory persistence:** Prefer **`SessionEnd`** for `ACTIVE.md`; document timeout env var; **`Stop`** is end-of-turn, not session teardown.

**8 — Sandboxing:** Use **`hookSpecificOutput`** with `hookEventName: "PreToolUse"` and `permissionDecision`.

**9 — XML prompting:** Internal only.

**10 — Multi-agent:** **`subagent_type`** is built-in name or **custom `name`** from agent markdown frontmatter (`AGENTS.md`).

**11 — Cross-platform:** `.venom/` format stays stable across Cursor / Claude Code / OpenCode templates.

---

## Corrections vs Earlier Drafts

| Old assumption | Correct per Phase 02 |
|----------------|----------------------|
| Only `SessionStart` for context | **`UserPromptSubmit`** also injects per prompt — required for energy matching **before** that turn |
| `Stop` writes `ACTIVE.md` | **`SessionEnd`** is the semantic “session terminates” hook for flush; **`Stop`** = main agent finished **responding** (can block to continue) |
| PreToolUse `decision: "block"` | Use **`permissionDecision`** in **`hookSpecificOutput`** |
| Hooks read mostly env vars | **stdin JSON** is primary payload |
| Task tool | Renamed **`Agent`** in v2.1.63+; `Task` remains alias |

---

*This file is the quality gate input for Phase 05: every designed hook or command must remain consistent with the verified rows above.*
