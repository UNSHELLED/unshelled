---
description: "Spec-driven feature development. Detects current phase from filesystem. Runs: constitution → spec → clarify → plan → tasks. Resumable."
allowed-tools: Read, Write, Glob, Grep, Bash(ls *), Bash(mkdir *), Task
---

# /venom-spec $ARGUMENTS

Spec-driven feature lifecycle. Phase-detection driven — checks filesystem and resumes from the right step.

## Phase Detection (check in this order)

```
1. No .venom/work/constitution.md         → Phase 0 (Constitution)
2. Feature named, no feature directory    → Phase 1 (Specify)
3. spec.md exists, no clarifications.md  → Phase 2 (Clarify)
4. clarifications.md exists, no plan.md  → Phase 3 (Plan)
5. plan.md exists, no tasks.md           → Phase 4 (Consistency) + Phase 5 (Tasks)
6. tasks.md with [ ] items               → redirect: "Run /venom-build [slug] to execute"
7. tasks.md all [x]                      → redirect: "All tasks done. Run /venom-review then /venom-check"
```

State is written to `.venom/state/workflow-state.json` at every phase transition.

## Phase 0 — Constitution

**Trigger:** No `constitution.md` found.

Ask the developer 4 questions. One at a time. Wait for answers.

```
1. What is this project's primary purpose? (one sentence)
2. Who is the primary user? What's their main job?
3. What must this system never do? (top constraint)
4. What does "done" look like for a feature in this project?
```

Write `.venom/work/constitution.md`:
```markdown
# Project Constitution

**Purpose:** [answer 1]
**Primary user:** [answer 2]
**Never:** [answer 3]
**Done means:** [answer 4]
**Created:** [date]
```

Report: "Constitution written. Run /venom-spec [feature name] to start a feature."

## Phase 1 — Specify

**Trigger:** Feature named in `$ARGUMENTS`, no directory yet.

Feature slug = lowercased, hyphenated version of `$ARGUMENTS`.
Create `.venom/work/features/[slug]/spec.md`.

Ask up to 5 questions to clarify what "done" looks like. Write the spec:

```markdown
# Spec: [Feature Name]

**Goal:** [one sentence — what changes for the user]
**User:** [who]
**Acceptance criteria:**
- [ ] [AC1 — specific, testable]
- [ ] [AC2]
- [ ] [AC3]

**Out of scope:**
- [explicitly excluded — prevents scope creep]

**Constraints:**
- [technical constraints from CONTEXT.md that apply]
```

## Phase 2 — Clarify

**Trigger:** `spec.md` exists, no `clarifications.md`.

Read `constitution.md` + `spec.md`. Identify ambiguities.

Ask 3-5 clarifying questions. Write answers to `.venom/work/features/[slug]/clarifications.md`.

Flag any scope concerns before proceeding to plan.

## Phase 3 — Plan

**Trigger:** `clarifications.md` exists, no `plan.md`.

Delegate to `venom-architect` via Task tool. Pass:
- `constitution.md` content
- `spec.md` content  
- `clarifications.md` content
- `CONTEXT.md` (project anatomy)

Write architect's decision to `.venom/work/features/[slug]/plan.md`:
```markdown
# Plan: [Feature Name]

**Architecture decision:** [what + why]
**Files to create:** [list with purpose]
**Files to modify:** [list with what changes]
**Test approach:** [what to verify]
**Risks:** [from venom-predictor if complex change]
```

## Phase 4+5 — Consistency Check + Tasks

**Trigger:** `plan.md` exists, no `tasks.md`.

Run consistency check: does plan satisfy all acceptance criteria in spec.md? Flag any gaps.

Write `.venom/work/features/[slug]/tasks.md`:
```markdown
# Tasks: [Feature Name]

## Wave 1 — [name]
- [ ] T01: [exact task] — `[file:function]` — verify: [observable]
- [ ] T02: [exact task] — `[file:function]` — verify: [observable]

## Wave 2 — [name]
- [ ] T03: [exact task after wave 1 complete] — `[file:function]` — verify: [observable]
```

Report: "Tasks ready. Run /venom-build [slug] to execute."

## State File

Write `.venom/state/workflow-state.json` at each transition:
```json
{
  "workflow": "spec",
  "feature": "[slug]",
  "phase": 3,
  "phaseName": "plan",
  "complete": false,
  "lastUpdated": "[ISO timestamp]"
}
```
