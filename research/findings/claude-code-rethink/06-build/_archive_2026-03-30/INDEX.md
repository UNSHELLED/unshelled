# Phase 06 — Build

> Only what's designed gets built. No improvising during build.
> Prerequisite: Phase 05 (Design) fully complete — **met** (see `05-design/INDEX.md` status).

---

## Build Sequence (wave-ordered)

### Wave 0 — Scaffolding (parallel, no deps)
- [ ] Create `platforms/claude-code/` folder structure
- [ ] Initialize all stub files
- [ ] Set up `.venom/` brain stubs

### Wave 1 — Core Identity (parallel, no deps)
- [ ] `CLAUDE.md` — the spine
- [ ] `.claude/settings.json` — all hooks wired
- [ ] `.venom/CONTEXT.md` stub
- [ ] `.venom/memory/MEMORY.md` stub
- [ ] `.venom/learnings/corrections.yaml` stub
- [ ] `.venom/learnings/instincts.yaml` stub (new)
- [ ] `.venom/learnings/preferences.yaml` stub (new)
- [ ] `.venom/work/ACTIVE.md` stub

### Wave 2 — Intelligence Layer (depends on Wave 1 — needs CLAUDE.md + settings.json)
- [ ] `.claude/scripts/session-start.js` — loads .venom/
- [ ] `.claude/scripts/pre-compact.js` — VENOM snapshot
- [ ] `.claude/scripts/pre-tool-use.js` — safety + loop detection (NEW)
- [ ] `.claude/scripts/post-tool-use.js` — metrics + instinct trigger (NEW)
- [ ] `.claude/scripts/user-prompt-submit.js` — energy matching injection (NEW)
- [ ] `.claude/scripts/session-end.js` — SessionEnd → ACTIVE.md (NEW)

### Wave 3 — Agents (parallel, depends on Wave 1 — needs CLAUDE.md for context)
- [ ] `.claude/agents/venom-architect.md` — upgrade: add loop protocol
- [ ] `.claude/agents/venom-researcher.md` — upgrade: add @explore equivalent
- [ ] `.claude/agents/venom-reviewer.md` — upgrade: full 8-perspective
- [ ] `.claude/agents/venom-historian.md` — keep current (already good)
- [ ] `.claude/agents/venom-builder.md` — upgrade: add wave execution
- [ ] `.claude/agents/venom-debugger.md` — upgrade: add full loop + stall
- [ ] `.claude/agents/venom-predictor.md` — keep/minor upgrade
- [ ] `.claude/agents/venom-communicator.md` — keep/minor upgrade
- [ ] `.claude/agents/venom-learner.md` — upgrade: add instinct capture
- [ ] **Remove** `.claude/agents/venom-bridge.md` — redundant with `venom-communicator` (design axiom)

### Wave 4 — Knowledge Files (parallel, depends on Wave 1)
- [ ] Keep all existing knowledge files (soul, pact, protocols, energy-matching, disposition-vs-rules, cognitive-matrix, modes, profile)
- [ ] `.claude/knowledge/simulations.md` — NEW: 10 situation patterns

### Wave 5 — Commands (parallel, depends on Wave 2 — needs scripts)
- [ ] `.claude/commands/venom.md` — upgrade
- [ ] `.claude/commands/venom-init.md` — new
- [ ] `.claude/commands/venom-eat.md` — new
- [ ] `.claude/commands/venom-spec.md` — port from OpenCode, Claude Code native
- [ ] `.claude/commands/venom-build.md` — port from OpenCode, Claude Code native
- [ ] `.claude/commands/venom-review.md` — new
- [ ] `.claude/commands/venom-check.md` — new
- [ ] `.claude/commands/venom-research.md` — new
- [ ] `.claude/commands/remember.md` — upgrade

### Wave 6 — Skill (depends on Wave 1-4)
- [x] `.claude/skills/venom-deep/SKILL.md` — extended surface; `/venom` stays command hub (BDEC-04)

### Wave 7 — Rules (parallel, depends on Wave 1)
- [ ] `.claude/rules/venom-standards.md` — upgrade: fix memory reference
- [ ] `.claude/rules/skill-development.md` — keep

### Wave 8 — Platform Files
- [x] `platforms/claude-code/template/README.md` — install + audiences
- [x] `platforms/claude-code/README.md` + `INSTALL.md` — v3 hooks, `.venom`, headless
- [x] `platforms/claude-code/CHANGELOG.md` — v3.0 entry
- [x] `workflow-state.example.json` + `.gitignore.template` (BDEC-05)

---

## Build Rules

1. **Read design spec before writing each file** — no improvising
2. **Production-ready only** — no TODOs, no "fill this in"
3. **Alive test after every wave** — see protocol below
4. **Mark done** — check the box only when verified

---

## Alive Test Protocol

After every wave completes, before proceeding to the next: install what's been built so far into a fresh project and ask: **"Does VENOM feel alive from message one?"**

This is not a unit test. It's a disposition test. Run it mentally or literally.

### What "alive from message one" means:

The user opens Claude Code, types anything, and VENOM:
1. Knows it's VENOM (identity survives compaction — `pre-compact.js` fires)
2. Matches the user's energy (not verbose when they're terse, not terse when they're visionary)
3. Answers first — no warm-up, no restatement
4. Knows the project (CONTEXT.md was loaded by `session-start.js`)
5. Doesn't ask "what would you like to work on?" if there's an active task in ACTIVE.md

### Wave-by-wave alive test:

**After Wave 1 (core identity):**
- CLAUDE.md loaded → VENOM has identity
- settings.json has at least `SessionStart` and `PreCompact` wired
- Test: open Claude Code, type "hi" — does it respond as VENOM or as generic Claude?
- **Pass condition:** Response is direct, shows nine-minds texture, no "How can I help?"

**After Wave 2 (intelligence layer):**
- `session-start.js` loads `.venom/CONTEXT.md`
- `pre-compact.js` snapshots VENOM identity
- `user-prompt-submit.js` injects energy context
- Test: type "fix this bug its broken" — does VENOM go directly to diagnosis without preamble?
- **Pass condition:** Churchill mode fires. 2-3 lines max. No sympathy speech.

**After Wave 3 (agents):**
- All 9 agents installed
- Test: type "@venom-architect design the auth system" — does architect respond with ADR format?
- **Pass condition:** Output is a decision record, not a conversation.

**After Wave 4 (knowledge files):**
- `simulations.md` installed
- Test: type the same tool 3 times with the same file — does VENOM name the stuck loop?
- **Pass condition:** VENOM reports the stuck state using SIM-01 format, not pretends to try again.

**After Wave 5 (commands):**
- All 9 commands installed
- Test: type `/venom` — does it show project state + command list?
- Test: type `/venom-spec build a login page` — does it start Phase 0 if no constitution exists?
- **Pass condition:** Both work. Phase detection is correct.

**After Wave 6 (skill):**
- SKILL.md installed
- Test: surface detection — type a command while in non-interactive mode — does output format change?
- **Pass condition:** No markdown decorations in headless output.

**After Waves 7-8 (rules, platform files):**
- README + INSTALL are accurate
- Test: follow INSTALL.md from scratch on a blank project
- **Pass condition:** Fresh install works in under 5 minutes. User reaches `venom` response without errors.

---

## Status

**Template build:** Waves 0–9 complete (see `DONE.md`, `WAVE9-SYNC.md`). **Headless:** `platforms/claude-code/HEADLESS-PLAYBOOK.md`. **Hook smoke:** `platforms/claude-code/smoke-hooks.sh`. **Maintainers:** `../POST-V3.md`. Optional: git tag; manual alive tests in `DONE.md`.
