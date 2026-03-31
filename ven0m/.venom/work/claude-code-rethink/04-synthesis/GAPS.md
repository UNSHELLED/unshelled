# Synthesis: Gaps

> Every gap in the current Claude Code template, evidenced, prioritized.
> Evidence = file path or doc. No assertion without proof.

**Status:** 🟢 Verified against template + Phase 02 (2026-03-30)
**Input:** `01-what-we-have/CURRENT-CLAUDE-CODE.md`, `02-claude-code-anatomy/HOOKS.md`, `04-synthesis/INTELLIGENCE-LAYER.md`

---

## Pre-Loaded: Known P1 Gaps

These are confirmed from prior research. Verify during Phase 01/02 and add evidence.

### GAP-01: Dead Memory Reference
**Status:** P1 — every session broken
**What:** `session-start.js` loads `.unshelled/memory/default/default.json` — this path was deleted from the repo
**Effect:** VENOM starts every session with zero context. Memory pact broken.
**Evidence:** `platforms/claude-code/template/.claude/scripts/session-start.js` line ~6
**Fix needed:** Replace with `.venom/CONTEXT.md` loading

### GAP-02: No UserPromptSubmit Hook
**Status:** P1 — energy matching cannot fire
**What:** No `UserPromptSubmit` hook in `settings.json`
**Effect:** Energy matching (Churchill/Senna/Tesla etc.) cannot fire before the model processes the user's message. VENOM reads the message AFTER forming its response.
**Evidence:** `platforms/claude-code/template/.claude/settings.json` — only `SessionStart` + `PreCompact` wired
**Fix needed:** Add `user-prompt-submit.js` + wire in settings.json

### GAP-03: No PreToolUse Hook
**Status:** P1 — no safety, no loop detection
**What:** No `PreToolUse` hook
**Effect:** No loop detection (same tool 3x = stuck), no dangerous command screening
**Evidence:** `settings.json` has no `PreToolUse` entry
**Fix needed:** Add `pre-tool-use.js` + wire

### GAP-04: No SessionEnd Hook (resume / ACTIVE.md)
**Status:** P1 — task state not flushed at real session exit
**What:** No `SessionEnd` hook (and no `Stop` hook). Per Phase 02, **`Stop`** fires when the **main agent finishes a turn**, not when the user or process exits; **`SessionEnd`** fires on **session terminate** — the right place to flush `.venom/work/ACTIVE.md`.
**Effect:** No reliable hook writes resume state; interrupted or closed sessions lose structured “where we left off.”
**Evidence:** `platforms/claude-code/template/.claude/settings.json` — only `SessionStart` + `PreCompact`
**Fix needed:** Add `session-end.js` wired to **`SessionEnd`**; document `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` if `ACTIVE.md` grows. Optional: lightweight **`Stop`** only for non-persistence side effects (not a substitute for `SessionEnd`).

### GAP-05: Missing 7 Commands
**Status:** P1 — lifecycle doesn't exist
**What:** Template ships with 2 commands (`/venom` + `/remember`). Designed 9 exist in OpenCode.
**Missing:** `/venom-init`, `/venom-eat`, `/venom-spec`, `/venom-build`, `/venom-review`, `/venom-check`, `/venom-research`
**Effect:** User cannot run a spec-driven workflow. No wave execution. No quality gate. No review lifecycle.
**Evidence:** `platforms/claude-code/template/.claude/commands/` — only 2 files
**Fix needed:** Port from OpenCode, adapt to Claude Code

### GAP-06: Agents Lack Loop Protocol
**Status:** P1 — autonomous tasks fail silently or run infinitely
**What:** No agent has the observe-hypothesize-test-evaluate loop with stall detection
**Effect:** Agents that get stuck will keep trying random things instead of naming it and escalating
**Evidence:** All agent files in `.claude/agents/` — none mention iterations, stall detection, or stuck protocol
**Fix needed:** Add loop protocol to architect, researcher, debugger, builder

### GAP-07: No Situation Matching
**Status:** P1 — VENOM improvises where it should apply proven patterns
**What:** No `simulations.md` knowledge file. No SIM-01 through SIM-10.
**Effect:** When VENOM hits a stuck loop, context reset, vague task, or architecture decision — it has no pre-proven playbook to pull
**Evidence:** No `simulations.md` in `.claude/knowledge/`
**Fix needed:** Port SIMULATIONS.md from OpenCode + adapt SIM references

---

## Template For Additional Gaps (fill during Phase 01/02)

```
### GAP-XX: [Gap Name]
**Status:** P1 / P2 / P3
**What:** [what's missing or broken]
**Effect:** [what the user experiences because of this gap]
**Evidence:** [file path + line number]
**Audience impact:** [any dev / headless agents / both]
**Fix needed:** [what has to be built]
```

---

## P2 Gaps (important but not blocking)

Fill these after Phase 01/02:

- [ ] No `PostToolUse` hook (tool metrics not captured → loop state not tracked)
- [ ] No `instincts.yaml` file (learned patterns don't accumulate)
- [ ] No `preferences.yaml` file (owner style not persisted)
- [ ] `venom-builder` lacks scope boundary + wave execution protocol
- [ ] `venom-debugger` lacks hypothesis tracking + cost guard
- [ ] `venom-architect` lacks ADR output format + gate check
- [ ] `venom-reviewer` 8 perspectives not explicitly ordered (most critical first)
- [ ] `venom-bridge` exists (should be removed — redundant)
- [ ] SKILL.md is 4-line trigger (should be surface-aware intelligence)
- [ ] No `.venom/state/workflow-state.json` pattern (workflow can't resume)
- [ ] No `CLAUDE.local.md` guidance (owners don't know they can use it)

---

## P3 Gaps (nice to have)

- [ ] No `venom-check` quality gate (users don't know project health)
- [ ] No archive pattern for completed features
- [ ] No `corrections.yaml` populated (first-install has no learnings)
- [ ] Memory size limits not enforced (MEMORY.md can bloat unbounded)
- [ ] No headless/surface-aware output (all output assumes TUI)

---

## Gap Priority Matrix

| Gap | P | Audience | Effort | Impact |
|-----|---|----------|--------|--------|
| GAP-01 Dead memory | P1 | all | S | VENOM has no context |
| GAP-02 No UPS hook | P1 | all | M | Energy matching dead |
| GAP-03 No PreToolUse | P1 | all | M | Safety + loop detection dead |
| GAP-04 No SessionEnd | P1 | all | S | ACTIVE.md / resume lost |
| GAP-05 Missing 7 cmds | P1 | all | L | No lifecycle |
| GAP-06 No loop protocol | P1 | all | M | Agents fail silently |
| GAP-07 No simulations | P1 | all | M | No playbook |
