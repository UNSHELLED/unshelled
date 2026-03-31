# Build Tasks — Claude Code VENOM v3.0

> Wave-ordered. Every task has an exact file path.
> Builder reads the spec file before touching each file. No improvising.

**Status:** 🔲 Ready for build when Phase 05 is complete.
**Prerequisite:** All Phase 05 spec files must exist and have no unresolved ❓ items.

---

## Pre-Build Checklist

Before starting Wave 0:

- [ ] `05-design/FILE-STRUCTURE.md` — complete, no open questions
- [ ] `05-design/CLAUDE-MD-SPEC.md` — complete, section design locked
- [ ] `05-design/HOOKS-SPEC.md` — all ❓ items resolved via Phase 02 HOOKS.md research
- [ ] `05-design/AGENTS-SPEC.md` — complete, "best version" column filled from Phase 01
- [ ] `05-design/COMMANDS-SPEC.md` — complete, all 9 commands specced
- [ ] `05-design/MEMORY-SPEC.md` — complete, file formats locked
- [ ] `05-design/SKILL-SPEC.md` — complete, lazy-load confirmed or fallback chosen

**If any ❓ items remain in HOOKS-SPEC.md → stop. Do Phase 02 research first.**

---

## Wave 0 — Scaffold (parallel, ~30 min)

Create empty structure. No content yet.

```
[ ] Create platforms/claude-code/template/ (if not exists — verify first)
[ ] Create platforms/claude-code/template/.claude/scripts/   (mkdir)
[ ] Create platforms/claude-code/template/.claude/agents/    (verify exists)
[ ] Create platforms/claude-code/template/.claude/commands/  (verify exists)
[ ] Create platforms/claude-code/template/.claude/knowledge/ (verify exists)
[ ] Create platforms/claude-code/template/.claude/skills/venom-deep/ (verify exists)
[ ] Create platforms/claude-code/template/.venom/memory/     (mkdir)
[ ] Create platforms/claude-code/template/.venom/learnings/  (mkdir)
[ ] Create platforms/claude-code/template/.venom/work/       (mkdir)
[ ] Create platforms/claude-code/template/.venom/state/      (mkdir)
```

**Verification gate:** All directories exist. No content yet.

---

## Wave 1 — Core Identity (parallel, ~2 hours)

The spine. Everything else depends on these.

**Spec reference for each:** `05-design/CLAUDE-MD-SPEC.md`, `05-design/MEMORY-SPEC.md`

```
[ ] platforms/claude-code/template/CLAUDE.md
    Spec: CLAUDE-MD-SPEC.md (all 10 sections)
    Read before: current CLAUDE.md, OpenCode AGENTS.md
    Alive test: open Claude Code, type "hi" → must respond as VENOM not generic Claude

[ ] platforms/claude-code/template/.claude/settings.json
    Spec: HOOKS-SPEC.md (settings.json configuration section)
    Read before: HOOKS-SPEC.md (all 6 hooks) + Phase 02 HOOKS.md research
    Note: Wire all 6 hooks. Permissions. Env vars (MAX_THINKING_TOKENS, BASH_DEFAULT_TIMEOUT_MS).
    Critical: Hook type names must match what Phase 02 research confirmed.

[ ] platforms/claude-code/template/.venom/CONTEXT.md
    Spec: MEMORY-SPEC.md (CONTEXT.md section)
    Note: Ship as stub with section headers and comments. 2KB max.
    Written by /venom-eat at runtime — ship empty template only.

[ ] platforms/claude-code/template/.venom/memory/MEMORY.md
    Spec: MEMORY-SPEC.md (MEMORY.md section)
    Note: Ship as stub. Append-only format header.

[ ] platforms/claude-code/template/.venom/learnings/corrections.yaml
    Spec: MEMORY-SPEC.md (corrections.yaml section)
    Note: Ship with one example correction + format comment.

[ ] platforms/claude-code/template/.venom/learnings/instincts.yaml
    Spec: MEMORY-SPEC.md (instincts.yaml section)
    Note: NEW file. Ship with example + confidence format comment.

[ ] platforms/claude-code/template/.venom/learnings/preferences.yaml
    Spec: MEMORY-SPEC.md (preferences.yaml section)
    Note: Ship with example sections (communication, workflow, technical).

[ ] platforms/claude-code/template/.venom/work/ACTIVE.md
    Spec: MEMORY-SPEC.md (ACTIVE.md section)
    Note: Ship as template stub with all fields. Finalized by session-end.js at runtime.

[ ] platforms/claude-code/template/CLAUDE.local.md.template
    Spec: CLAUDE-MD-SPEC.md (CLAUDE.local.md guidance)
    Note: Shows owners what they can override locally.
    Small file: 30-40 lines.

[ ] platforms/claude-code/template/.claude/settings.local.json.template
    Spec: PERMISSIONS-SPEC (from Phase 02)
    Note: Shows owners what to put in their local settings override.
```

**Verification gate (Wave 1):**
- Open Claude Code. Type "hi" → responds as VENOM not generic Claude
- Type "/venom" → shows project state (empty) + command table
- Response is direct, no "How can I help you today?"

---

## Wave 2 — Intelligence Layer (depends on Wave 1)

Requires CLAUDE.md and settings.json to be in place before writing scripts.

**Spec reference:** `05-design/HOOKS-SPEC.md`

```
[ ] platforms/claude-code/template/.claude/scripts/session-start.js
    Spec: HOOKS-SPEC.md (Script 1)
    Read before: Phase 02 HOOKS.md (SessionStart stdin JSON)
    Test: start new session → check that CONTEXT.md content appears in context
    Node.js only: fs, path

[ ] platforms/claude-code/template/.claude/scripts/pre-compact.js
    Spec: HOOKS-SPEC.md (Script 2)
    Read before: Phase 02 COMPACTION.md (timing confirmed)
    Test: trigger compaction → check VENOM identity survives
    Node.js only: fs, path

[ ] platforms/claude-code/template/.claude/scripts/user-prompt-submit.js
    Spec: HOOKS-SPEC.md (Script 3)
    Read before: Phase 02 HOOKS.md (UserPromptSubmit prompt access confirmed OR fallback chosen)
    Critical: If prompt not readable → script is a no-op that passes through. Ship fallback.
    Node.js only: fs, path, process.env

[ ] platforms/claude-code/template/.claude/scripts/pre-tool-use.js
    Spec: HOOKS-SPEC.md (Script 4)
    Read before: Phase 02 HOOKS.md (PreToolUse stdin + hookSpecificOutput.permissionDecision)
    Depends on: .tool-counter.json format from MEMORY-SPEC.md
    Test: run a dangerous command → block fires
    Test: run same Bash command 3x → stall warning fires
    Node.js only: fs, path, crypto, process.env

[ ] platforms/claude-code/template/.claude/scripts/post-tool-use.js
    Spec: HOOKS-SPEC.md (Script 5)
    Read before: Phase 02 HOOKS.md (PostToolUse stdin: tool_input, tool_response)
    Critical: fail-fast pattern. Must exit 0 on any error.
    Test: run any tool → .tool-counter.json exists and is updated
    Node.js only: fs, path, crypto, process.env

[ ] platforms/claude-code/template/.claude/scripts/session-end.js
    Spec: HOOKS-SPEC.md (Script 6)
    Read before: Phase 02 HOOKS.md (SessionEnd vs Stop; timeout env var)
    Test: end session → ACTIVE.md is written or updated
    Node.js only: fs, path
```

**Verification gate (Wave 2):**
- Type "fix this bug its broken" → Churchill fires (2-3 lines, no preamble)
- Run a dangerous command → block fires with explanation
- Run same command 3x → stall detection fires
- End session → ACTIVE.md exists with task state

---

## Wave 3 — Agents (parallel, depends on Wave 1)

All 9 agents. Read AGENTS-SPEC.md before writing each one.

**Spec reference:** `05-design/AGENTS-SPEC.md`
**Input reference:** `01-what-we-have/ALL-AGENTS.md` (best version column)

```
[ ] platforms/claude-code/template/.claude/agents/venom-architect.md
    Spec: AGENTS-SPEC.md (venom-architect section)
    Read before: best version from ALL-AGENTS.md + OpenCode venom-architect.md
    Add: loop protocol, ADR output format, gate check, constraint list

[ ] platforms/claude-code/template/.claude/agents/venom-researcher.md
    Spec: AGENTS-SPEC.md (venom-researcher section)
    Read before: best version from ALL-AGENTS.md + OpenCode venom-researcher.md
    Add: loop protocol, anatomy framework (heartbeat/skeleton/nervous/organs), output format

[ ] platforms/claude-code/template/.claude/agents/venom-reviewer.md
    Spec: AGENTS-SPEC.md (venom-reviewer section)
    Read before: best version from ALL-AGENTS.md
    Upgrade: full 8-perspective in explicit order (security first), fix-per-issue mandatory

[ ] platforms/claude-code/template/.claude/agents/venom-debugger.md
    Spec: AGENTS-SPEC.md (venom-debugger section)
    Read before: best version from ALL-AGENTS.md + OpenCode venom-debugger.md
    Upgrade: full loop protocol, stall detection, cost guard, hypothesis tracking format

[ ] platforms/claude-code/template/.claude/agents/venom-builder.md
    Spec: AGENTS-SPEC.md (venom-builder section)
    Read before: best version from ALL-AGENTS.md + OpenCode venom-builder.md
    Upgrade: wave execution, scope boundary (explicit file list), atomic output, no TODOs

[ ] platforms/claude-code/template/.claude/agents/venom-historian.md
    Spec: AGENTS-SPEC.md (venom-historian section)
    Read before: current v2.4 version
    Minor: fix any .unshelled/ references, clarify memory scope (.venom/)

[ ] platforms/claude-code/template/.claude/agents/venom-predictor.md
    Spec: AGENTS-SPEC.md (venom-predictor section)
    Read before: current v2.4 version
    Minor: clarify output format (risk table, evidence format)

[ ] platforms/claude-code/template/.claude/agents/venom-communicator.md
    Spec: AGENTS-SPEC.md (venom-communicator section)
    Read before: current v2.4 communicator + current v2.4 bridge
    Upgrade: absorb bridge function. Make clear it adapts silently.

[ ] platforms/claude-code/template/.claude/agents/venom-learner.md
    Spec: AGENTS-SPEC.md (venom-learner section)
    Read before: current v2.4 version + instincts.yaml format from MEMORY-SPEC.md
    Upgrade: add instinct capture path, confidence scale, corrections routing

[ ] DELETE: platforms/claude-code/template/.claude/agents/venom-bridge.md
    Prerequisite: ALL-AGENTS.md must confirm communicator covers bridge fully
    Action: delete file (or archive to draft/)
```

**Verification gate (Wave 3):**
- Type "@venom-architect design the auth system" → responds with ADR format (decision, options, reasoning, implementation contract)
- Type "@venom-reviewer review this function" → responds with 8 perspectives, most critical first, fix per issue

---

## Wave 4 — Knowledge Files (parallel, depends on Wave 1)

**Spec reference:** `05-design/CLAUDE-MD-SPEC.md` (@ references section) + `05-design/FILE-STRUCTURE.md`

```
[ ] platforms/claude-code/template/.claude/knowledge/soul.md       ← KEEP (verify no .unshelled/ refs)
[ ] platforms/claude-code/template/.claude/knowledge/pact.md       ← KEEP (verify content)
[ ] platforms/claude-code/template/.claude/knowledge/disposition-vs-rules.md ← KEEP
[ ] platforms/claude-code/template/.claude/knowledge/cognitive-matrix.md ← KEEP
[ ] platforms/claude-code/template/.claude/knowledge/modes.md      ← KEEP (verify)

[ ] platforms/claude-code/template/.claude/knowledge/energy-matching.md
    Upgrade: Full 9-archetype grammars (Churchill through Rogers)
    Read before: Cursor vibes.mdc + OpenCode energy matching
    Add: all signal tables, response formats, emoji map

[ ] platforms/claude-code/template/.claude/knowledge/profile.md
    Upgrade: Separate owner config from universal config
    Make clear: owner edits this with their own context

[ ] platforms/claude-code/template/.claude/knowledge/simulations.md
    NEW: Port from platforms/opencode/template/docs/SIMULATIONS.md
    Adapt: Replace OpenCode-specific refs (@venom-explorer → Task tool)
    Adapt: Replace venom_remember() → /remember command
    Adapt: Replace venom_workflow_update() → workflow-state.json write
    All 10 simulations must survive the port
```

**Verification gate (Wave 4):**
- Simulate stuck loop (same command 3x) → VENOM names it using SIM-01 format
- Simulate vague task ("make it better") → VENOM uses SIM-04 (anatomy scan first)

---

## Wave 5 — Commands (parallel, depends on Wave 2 + Wave 4)

**Spec reference:** `05-design/COMMANDS-SPEC.md` (each command section)

```
[ ] platforms/claude-code/template/.claude/commands/venom.md
    Upgrade: Presence. State + commands. "What are we working on?"
    Port from: current venom.md + OpenCode commands section

[ ] platforms/claude-code/template/.claude/commands/venom-init.md
    NEW: Scaffold .venom/ brain
    Spec: COMMANDS-SPEC.md (venom-init section)
    Port from: OpenCode venom-init equivalent

[ ] platforms/claude-code/template/.claude/commands/venom-eat.md
    NEW: Absorb project into CONTEXT.md
    Spec: COMMANDS-SPEC.md (venom-eat section)
    Port from: OpenCode venom-eat equivalent

[ ] platforms/claude-code/template/.claude/commands/venom-spec.md
    NEW: Constitution → spec → clarify → plan → tasks
    Spec: COMMANDS-SPEC.md (venom-spec section) — most complex command
    Port from: OpenCode venom-spec.md → adapt workflow-state writes (no plugin — use file writes)
    Critical: Phase detection logic (read workflow-state.json, detect which phase)

[ ] platforms/claude-code/template/.claude/commands/venom-build.md
    NEW: Wave execution
    Spec: COMMANDS-SPEC.md (venom-build section)
    Port from: OpenCode venom-build.md → adapt (no plugin tools — use file reads + Task tool)

[ ] platforms/claude-code/template/.claude/commands/venom-review.md
    NEW: 8-perspective review
    Spec: COMMANDS-SPEC.md (venom-review section)
    Port from: OpenCode venom-review → delegates to venom-reviewer via Task tool

[ ] platforms/claude-code/template/.claude/commands/venom-check.md
    NEW: Quality gate
    Spec: COMMANDS-SPEC.md (venom-check section)
    Checks: tests, types, lint, MEMORY.md size, ACTIVE.md freshness, workflow state

[ ] platforms/claude-code/template/.claude/commands/venom-research.md
    NEW: Deep exploration
    Spec: COMMANDS-SPEC.md (venom-research section)
    Delegates to venom-researcher via Task tool

[ ] platforms/claude-code/template/.claude/commands/remember.md
    Upgrade: Proactive. Route to correct memory file based on type.
    Read before: MEMORY-SPEC.md (all file formats)
    Logic: type → file routing (correction → corrections.yaml, decision → MEMORY.md, etc.)
```

**Verification gate (Wave 5):**
- Type "/venom" → shows state + commands table
- Type "/venom-spec build login page" → starts Phase 0 (constitution) if no constitution exists
- Phase 0 writes .venom/work/login-page/constitution.md
- Type "/venom-spec build login page" again → detects Phase 0 complete, starts Phase 1 (spec)
- Type "/venom-check" → reports project health (MEMORY.md size, ACTIVE.md freshness)

---

## Wave 6 — Skill (depends on Waves 1-4)

**Spec reference:** `05-design/SKILL-SPEC.md`

```
[x] platforms/claude-code/template/.claude/skills/venom-deep/SKILL.md
    Upgrade: Full intelligence surface (OR 20-line trigger — based on lazy-load research)
    Read before: SKILL-SPEC.md (complete) + OpenCode VENOM_OPENCODE/SKILL.md
    Adapt: All OpenCode-specific refs to Claude Code equivalents
    Sections: init sequence, surface awareness, agent routing, 11 patterns, memory bridge, non-negotiables
```

**Verification gate (Wave 6):**
- Type "venom" → SKILL.md loads → shows VENOM is online
- In headless mode → output format is concise prose, no markdown

---

## Wave 7 — Rules (parallel, depends on Wave 1)

```
[ ] platforms/claude-code/template/.claude/rules/venom-standards.md
    Upgrade: Fix memory reference (.unshelled/ → .venom/)
    Read before: current file

[ ] platforms/claude-code/template/.claude/rules/skill-development.md
    KEEP as-is: review content, no changes unless broken
```

---

## Wave 8 — Platform Files (depends on all waves)

```
[x] platforms/claude-code/template/README.md
    Done: install, first run, dev + headless table, pointer to parent INSTALL.md

[x] platforms/claude-code/INSTALL.md (parent — template has no duplicate INSTALL.md)
    Done: six hooks, Node, .venom/, settings, headless, workflow-state paths

[x] platforms/claude-code/README.md
    Done: v3 one-pager, quick copy commands, doc table

[x] platforms/claude-code/CHANGELOG.md
    Done: v3.0 entry (see BDEC-05 for workflow-state filename)

[x] platforms/claude-code/template/.venom/state/workflow-state.example.json
    Example shape only — runtime file is `.venom/state/workflow-state.json` (BDEC-05)

[x] platforms/claude-code/template/.gitignore.template
    Recommended .venom/ + local overrides
```

---

## Wave 9 — Sync to Origin (depends on all waves)

After template is complete and tested. **Procedure:** `06-build/WAVE9-SYNC.md` (selective sync — never bulk-copy `.claude/` to Cursor).

```
[x] Follow WAVE9-SYNC.md — `.venom` parity + `EAT.md` / MANIFEST / platforms INDEX (2026-03-30)
[x] MANIFEST.md + platforms/INDEX.md — Claude Code v3.0 visibility
[x] platforms/claude-code/CHANGELOG.md — v3.0 entry (Wave 8)
[x] platforms/cursor/CHANGELOG.md — v3.10 when Cursor template changed
[ ] Tag: v3.0.0 (optional git tag — maintainer)
```

---

## Task Completion Format

When marking a task complete:

```
[x] platforms/claude-code/template/CLAUDE.md
    Completed: [date]
    Alive test: [passed/failed + notes]
    Deviations from spec: [none, or what changed and why]
```

---

## Deviations Protocol

If during build, spec needs to change:
1. Don't change spec silently — update the spec file with reasoning
2. Log in `DECISIONS-LOG.md` — what changed, why, what evidence triggered the change
3. If the deviation affects other tasks — note which tasks are affected before proceeding
