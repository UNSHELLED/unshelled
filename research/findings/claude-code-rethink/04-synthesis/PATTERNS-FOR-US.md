# Synthesis: Patterns We're Adopting

> Every pattern we're taking from open-source, with source, reasoning, and Claude Code implementation.
> "Adopted" only means the pattern. Never the code. Never the vendor.

**Status:** 🟢 Closed for v3 — Phase 03 complete; ADOPT-01–08 shipped in **`06-build`** + `platforms/claude-code/template/` (trace in `05-design/`).
**Input:** `03-opensources/MASTER-PATTERNS.md` (grows as sources are eaten)

---

## Pre-Loaded: Already Decided Adoptions

These were decided from the OpenCode assimilation. Verify during Phase 03 and refine.

---

### ADOPT-01: Constitution-First Philosophy
**Source:** spec-kit (83k★)
**What:** Before any feature is specced, the project's quality standard, performance requirements, and constraints are written in a `constitution.md`. This never changes. All specs and plans check against it.
**Why VENOM:** Without a constitution, every feature has to re-litigate "what's our test requirement?" and "what can't change?" The spec-kit data shows this is the single biggest driver of spec quality.
**How in Claude Code:** `/venom-spec` Phase 0 writes `.venom/work/constitution.md`. Every subsequent phase reads it.
**Audience:** all three — any developer benefits from a constitution even if they don't know VENOM
**Status:** [x] implemented in COMMANDS-SPEC.md `/venom-spec`

---

### ADOPT-02: Wave Execution with Verification Gates
**Source:** get-shit-done (32k★) + OpenCode assimilation
**What:** Multi-file changes grouped by dependency order. Tasks within a wave run in parallel. Verification runs after each wave before the next starts.
**Why VENOM:** Prevents "I changed 10 files and now nothing works and I don't know which change broke it." Each wave is atomic and verified.
**How in Claude Code:** `/venom-build` reads tasks.md wave sections, spawns parallel Task tool calls per independent task, runs tests after each wave.
**Audience:** all three — agents especially benefit (clean intermediate states)
**Status:** [x] implemented in COMMANDS-SPEC.md `/venom-build`

---

### ADOPT-03: Fresh Context Per Task (Thin Orchestrator)
**Source:** get-shit-done + OpenCode assimilation
**What:** Heavy work is delegated to fresh subagent contexts. The orchestrator stays lean (<30% full). Each specialist runs in isolation.
**Why VENOM:** Long sessions accumulate context that slows reasoning. Delegation keeps the primary sharp.
**How in Claude Code:** CLAUDE.md instructs: delegate when work would consume >30% of primary context. Task tool spawns fresh context per specialist.
**Audience:** all three — especially valuable for agents running long autonomous tasks
**Status:** [x] implemented in CLAUDE-MD-SPEC.md

---

### ADOPT-04: Artifact-Guided Workflow
**Source:** OpenSpec (35k★)
**What:** Each phase produces a concrete artifact (constitution.md, spec.md, clarifications.md, plan.md, tasks.md). The artifact IS the deliverable — not the conversation.
**Why VENOM:** Artifacts survive sessions. When work is interrupted, the artifact is the resume point. Conversations don't persist; files do.
**How in Claude Code:** `/venom-spec` writes one artifact per phase. `/venom-build` reads from tasks.md. `/venom-check` reads from ACTIVE.md.
**Audience:** all three — especially critical for agents (no interactive resume possible)
**Status:** [x] implemented in COMMANDS-SPEC.md

---

### ADOPT-05: Observe-Hypothesize-Test-Evaluate Loop
**Source:** SWE-agent (19k★, 77.6% SWE-bench)
**What:** Every debugging/research/autonomous task follows: Observe → Hypothesize → Test → Evaluate → Repeat. One hypothesis at a time. Smallest possible test. Exit when stuck (same hypothesis 3x, no new info 5x, cost > limit, circular pattern).
**Why VENOM:** This is what makes SWE-agent better than generic agents. The discipline of "one hypothesis, smallest test, track iterations" prevents random thrashing.
**How in Claude Code:** Added to venom-debugger, venom-researcher, venom-architect as loop protocol section. Pre-loaded in CLAUDE.md autonomous loop section.
**Audience:** all three — especially critical for agents running unsupervised
**Status:** [x] implemented in AGENTS-SPEC.md

---

### ADOPT-06: Situation Matching (Edge Case Playbook)
**Source:** OpenCode assimilation (SIMULATIONS.md)
**What:** 10 named situations where generic AI fails. Each has: signal, wrong move, right move, why. When VENOM detects a matching signal, it applies the proven move instead of improvising.
**Why VENOM:** Improvised responses to stuck loops, context resets, vague tasks, and dangerous commands are reliably worse than proven responses.
**How in Claude Code:** Port `SIMULATIONS.md` from OpenCode to `.claude/knowledge/simulations.md`. CLAUDE.md references it. Agents reference it.
**Audience:** all three — especially critical for autonomous agents
**Status:** [x] implemented in CLAUDE-MD-SPEC.md

---

### ADOPT-07: Phase-Detected Workflow Resumption
**Source:** claude-task-master + OpenCode workflow state
**What:** Workflow state is written to a file (`workflow-state.json`). On command invocation, the command reads the file and detects which phase to resume from — without the user having to say "we were on Phase 3."
**Why VENOM:** Interruptions happen. Session restarts happen. The workflow must be self-resuming.
**How in Claude Code:** `/venom-spec` writes `.venom/state/workflow-state.json`. When invoked again, reads it, detects phase, resumes.
**Audience:** all three — especially critical for headless agents that can't ask "where were we?"
**Status:** [x] implemented in COMMANDS-SPEC.md `/venom-spec`

---

### ADOPT-08: Pattern-as-Skill (Lazy-Loaded Intelligence)
**Source:** fabric (40k★) + OpenCode SKILL.md
**What:** Intelligence patterns live in SKILL.md (or equivalent files) that load only when needed, not always in context. This preserves context budget while making full intelligence available on demand.
**Why VENOM:** CLAUDE.md can't hold everything. Skills let VENOM carry full pattern libraries without paying the token cost unless invoked.
**How in Claude Code:** `venom-deep/SKILL.md` lazy-loads on **`/venom-deep`** (hub command **`/venom`** stays the short entry — BDEC-04).
**Audience:** all three
**Status:** [x] implemented in SKILL-SPEC.md (`skills/venom-deep/SKILL.md`)

---

## Template For New Adoptions (fill during Phase 03)

```
### ADOPT-XX: [Pattern Name]
**Source:** [repo + stars]
**What:** [one paragraph — specific]
**Why VENOM:** [why this specifically, what breaks without it]
**How in Claude Code:** [concrete implementation path]
**Audience:** [Kariem only | any dev | headless agents | all three]
**Status:** [ ] implemented in [spec file]
```
