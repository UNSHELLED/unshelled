# Phase 05 — Design

> The spec before the first file is written.
> Every file designed before touched. No improvisation.

**Prerequisite:** Phase 04 (Synthesis) must be complete. Every design decision references a synthesis decision.

---

## What Design Produces

| File | What it specifies | Who needs it |
|------|------------------|--------------|
| `FILE-STRUCTURE.md` | Every file in new template, one-line purpose, why it exists | Builder — the map before building |
| `CLAUDE-MD-SPEC.md` | The new CLAUDE.md designed before written: every section, purpose, length, what it loads | Builder — most critical file |
| `HOOKS-SPEC.md` | Every script: exact hook type, input env vars, output format, what it does, when | Builder — the intelligence layer |
| `AGENTS-SPEC.md` | Every agent: what changes from current, what stays, additions | Builder — agent upgrade plan |
| `COMMANDS-SPEC.md` | Every command: trigger, behavior, phases, tools, output | Builder — command design |
| `MEMORY-SPEC.md` | Memory architecture: what persists, where, how it loads, how it's pruned | Builder — the brain design |
| `SKILL-SPEC.md` | SKILL.md redesign: what changes, new sections, surface awareness | Builder — skill upgrade |

---

## Design Principles (must be true of every design decision)

**1. Disposition over rules**
Every design choice must make VENOM's dispositions fire automatically, not require the user to trigger them.

**2. From message one**
Whatever we design, test mentally: does VENOM feel alive from the first message without any user setup?

**3. No hidden complexity**
If a hook is complex, the complexity lives in the script, not in CLAUDE.md. CLAUDE.md stays clean.

**4. Platform-native**
Use Claude Code's primitives as they're designed. Don't fight the system.

**5. Zero-dependency install**
No npm install. No API keys. Clones and it works. Scripts use Node.js built-ins only.

**6. Survivable compaction**
VENOM's identity must survive a context compaction. If it doesn't, the user loses VENOM mid-session.

---

## Resolved Design Axioms

These decisions are made before any spec file is written. They are not questions — they are answers. If Phase 01-04 produce evidence that contradicts them, they can be revised, but they cannot be left as open questions during spec writing.

### Axiom 1 — Command Architecture

`/venom` is the awakening hub. Not a lifecycle command. Everything else is a verb.

```
/venom           → hub: awakens, routes, shows what's available
/venom-init      → scaffold .venom/ brain (run once per project)
/venom-eat       → absorb project into CONTEXT.md (re-run anytime)
/venom-spec      → full lifecycle: constitution → spec → clarify → plan → tasks
/venom-build     → execute tasks.md wave by wave with verification gates
/venom-review    → 8-perspective code review (delegates to venom-reviewer)
/venom-check     → meta quality gate: tests, types, lint, deps, VENOM state
/venom-research  → deep codebase exploration (delegates to venom-researcher)
/remember        → persist to memory (proactive: offer when a decision is made)
```

**9 commands. No more. No fewer.** Every command must serve **both** audiences: any developer and headless/CI agents. `/venom-spec` and `/venom-build` are the lifecycle pair — they implement GSD wave execution + spec-kit constitution-first philosophy.

### Axiom 2 — Agent Visibility

Agents are either user-invocable (user can `@mention` them) or orchestrator-only (hidden, spawned by orchestrator). This determines how they're built.

```
Agent              | Visibility        | Loop Protocol | Reason
venom-architect    | user-invocable    | yes           | user explicitly wants design session
venom-researcher   | user-invocable    | yes           | user explicitly wants deep research
venom-reviewer     | user-invocable    | no            | review is a one-shot output
venom-debugger     | user-invocable    | yes           | debugging needs iteration
venom-builder      | orchestrator-only | yes           | wave soldier, not user-facing
venom-historian    | user-invocable    | no            | memory pull is one-shot
venom-predictor    | user-invocable    | no            | risk assessment is one-shot
venom-communicator | orchestrator-only | no            | adapts silently, not user-triggered
venom-learner      | orchestrator-only | no            | fires automatically after sessions
venom-bridge       | REMOVE            | -             | redundant with communicator
```

**`venom-bridge` is removed.** Its function (translation between cognitive types) is fully covered by `venom-communicator`. Shipping two agents with the same purpose creates confusion for all three audiences.

**User-invocable agents must ship with the autonomous loop protocol** if they do iterative work (architect, researcher, debugger, builder). One-shot agents (reviewer, historian, predictor) do not need it.

### Axiom 3 — Hook Architecture

Six hooks, six scripts. Each has exactly one job. Input is **stdin JSON** for command hooks (see `02-claude-code-anatomy/HOOKS.md`); use `CLAUDE_PROJECT_DIR` / `cwd` from payload for paths.

```
session-start.js        → SessionStart — short .venom/ pointers + optional systemMessage
pre-compact.js          → PreCompact — identity survival + optional ACTIVE snapshot before compaction
user-prompt-submit.js   → UserPromptSubmit — energy-match additionalContext from stdin `prompt`
pre-tool-use.js         → PreToolUse — loop / safety via hookSpecificOutput.permissionDecision
post-tool-use.js        → PostToolUse — lightweight counters only (stdin: tool_input, tool_response)
session-end.js          → SessionEnd — flush .venom/work/ACTIVE.md on session terminate
```

**`Stop` is not** the primary persistence hook (it fires end-of-turn; can `block` to force another turn — easy to misuse). Prefer **`SessionEnd`** for `ACTIVE.md`. **Optional:** document a `Stop` script only for a deliberate, minimal use case later.

**`post-tool-use.js` constraint:** It runs on every successful tool. It may only update a small state file (e.g. streak/counter). No expensive I/O. On error, fail open — never block the session.

### Axiom 4 — Memory Architecture

```
.venom/CONTEXT.md        → project brain (2KB max) — loaded every session via SessionStart
.venom/memory/MEMORY.md  → decision log (5KB max) — loaded when task references past work
.venom/learnings/corrections.yaml   → never-do-again rules (1KB max) — complex tasks only
.venom/learnings/instincts.yaml     → learned patterns with confidence scores (2KB max)
.venom/learnings/preferences.yaml   → owner style preferences (1KB max)
.venom/work/ACTIVE.md    → current task state (10KB max) — written by session-end.js (SessionEnd), read on resume
```

**MEMORY.md pruning:** If it exceeds 5KB, the `/venom-check` command must flag it. Owner decides what to prune. VENOM never auto-prunes decisions.

---

## Resolved design questions (specs closed 2026-03-30)

**CLAUDE.md** — see **`CLAUDE-MD-SPEC.md` §Resolved:** ≤200 lines spine; short identity + pact inline; soul/pact full text @’d; simulations @’d; `CLAUDE.local.md.template` = onboarding only (official overrides = `~/.claude/CLAUDE.md` / imports).

**Hooks** — see **`HOOKS-SPEC.md`** + Phase 02 `HOOKS.md`: **`UserPromptSubmit`** `prompt` on stdin + `additionalContext`; **`PreToolUse`** uses **`hookSpecificOutput.permissionDecision`**; **`SessionEnd`** → `session-end.js` for `ACTIVE.md`.

**Agents** — see **`AGENTS-SPEC.md`:**
- **`venom-builder`:** `model: claude-sonnet-4-5` in spec; **no extra override** required for first ship unless perf testing says otherwise.
- **`venom-researcher`:** **read-only** tool set (**no** `Agent` / `Task`) — `Read, Glob, Grep, WebSearch, WebFetch` + approved **Bash** read-only patterns only. Orchestrator uses **Agent** tool to spawn specialists; researcher does not spawn subagents.

---

## Output Format for Each Spec

```markdown
## [Component Name]

**What it is:** [one sentence]
**Why it exists:** [what breaks without it]
**Design decision:** [what we chose and why]
**Exact content / format:** [the actual spec]
**Notes for builder:** [anything non-obvious]
```

---

## Status

- [x] FILE-STRUCTURE.md — file map + script names aligned (`session-end.js`, six hooks)
- [x] CLAUDE-MD-SPEC.md — section architecture + Phase 02 resolutions
- [x] HOOKS-SPEC.md — six scripts, stdin JSON, `permissionDecision`, `SessionEnd`
- [x] AGENTS-SPEC.md — all agents specced (bridge removed per axiom)
- [x] COMMANDS-SPEC.md — nine commands specced
- [x] MEMORY-SPEC.md — memory paths + `ACTIVE.md` writers documented
- [x] SKILL-SPEC.md — full skill body, lazy load confirmed, surfaces from `SURFACES.md`
