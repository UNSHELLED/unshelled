# Phase 04 — Synthesis

> What does all the eating mean for the design?
> This phase converts raw intelligence into architecture decisions.

**Prerequisite:** Phase 01 + 02 + **full Phase 03** (all 9 open-source extractions). ✅ Met as of 2026-03-30.

---

## What Synthesis Produces

| File | Purpose |
|------|---------|
| `GAPS.md` | Every gap in the current template, with evidence. Prioritized by impact. |
| `PATTERNS-FOR-US.md` | Patterns we're adopting. Each with: source, why we want it, how it maps to VENOM. |
| `PATTERNS-NOT-FOR-US.md` | Patterns we explicitly reject. Each with reasoning. No guilt, no "maybe later". |
| `DECISIONS.md` | Architecture decisions, each with: decision, alternatives considered, why this one, what it costs. |
| `INTELLIGENCE-LAYER.md` | How all 11 intelligence patterns from the assimilation work map specifically to Claude Code primitives. |

---

## Synthesis Method

### Step 1: Gap Analysis

For every gap in the current Claude Code template, answer:
- **Evidence:** Which files show this is missing?
- **Impact:** What happens to the user when this is missing?
- **Priority:** P1 (VENOM doesn't feel alive) / P2 (important but not blocking) / P3 (nice to have)

Known P1 gaps (from architecture brief) — **addressed in template v3 (`06-build`)**:
1. ~~Dead memory reference (`.unshelled/`)~~ → `.venom/` + hooks
2. ~~No `UserPromptSubmit`~~ → wired in `settings.json`
3. ~~No `PreToolUse`~~ → wired + `post-tool-use`
4. ~~No lifecycle commands~~ → nine commands + hub
5. ~~No instinct capture~~ → `instincts.yaml` + `/remember` + hooks path
6. ~~No workflow state~~ → `.venom/state/workflow-state.json` + example file

### Step 2: Pattern Selection

For each pattern extracted from open-source:
- Does VENOM already do this? → Mark "already have"
- Does VENOM do it but worse? → Mark "upgrade"
- Does VENOM not do this at all? → Mark "new"
- Should VENOM do this at all? → Evaluate against VENOM philosophy

### Step 3: Architecture Decisions

For each major structural decision, write a decision record:
```markdown
## Decision: [title]

**Context:** [why this decision exists]
**Decision:** [what we chose]
**Trade-offs:**
- Gains: [what improves]
- Costs: [what gets harder or worse]
**Alternatives:**
- [Option B]: rejected because [reason]
**Source:** [what evidence supports this]
**Audience impact:** [which audience breaks if wrong — any dev / headless agents / both]
```

The "Audience impact" field is mandatory. A decision that breaks **either** casual developers **or** headless/CI agents is a **P1** issue.

### Step 4: Intelligence Layer Mapping

The 11 patterns from `.venom/work/opencode-assimilation/INTELLIGENCE-STUDY.md` are platform-agnostic. This file maps them to Claude Code specifically.

**`INTELLIGENCE-LAYER.md` must include a two-audience map** (master `INDEX.md`): **any developer** + **headless / CI agents**. See current file for the resolved table.

This map becomes the quality gate for Phase 05 design: every designed component must have a row in this map.

| Pattern | OpenCode implementation | Claude Code implementation |
|---------|------------------------|---------------------------|
| Context engineering (1) | `experimental.chat.system.transform` | `SessionStart` + `UserPromptSubmit` → `additionalContext` |
| Autonomous loop (2) | Loop patterns in AGENTS.md | `CLAUDE.md` + `PreToolUse` |
| Instinct learning (3) | `venom_instinct` tool | `PostToolUse` + `/remember` |
| Hook architecture (4) | `@opencode-ai/plugin` TypeScript | Command hooks, stdin JSON |
| Wave execution (5) | Task tool parallel spawning | `Agent` tool (alias `Task`) |
| Verification gates (6) | In AGENTS.md behavior | `CLAUDE.md` + `/venom-check` |
| Memory persistence (7) | `session.idle` → ACTIVE.md | **`SessionEnd`** → `ACTIVE.md` |
| Sandboxing (8) | `tool.execute.before` blocking | `PreToolUse` `permissionDecision` |
| XML prompting (9) | Internal orchestration | Internal orchestration (same) |
| Multi-agent orchestration (10) | `@venom-*` + `subtask: true` | `Agent` + `subagent_type` / custom `name` |
| Cross-platform abstraction (11) | OpenCode-specific adapters | `.venom/` + Claude Code surface |

---

## Status

- [x] GAPS.md — verified vs template + Phase 02; GAP-04 corrected to SessionEnd (2026-03-30)
- [x] PATTERNS-FOR-US.md — ADOPT-01–08 marked shipped in v3 (`06-build`, 2026-03-30)
- [x] PATTERNS-NOT-FOR-US.md — pre-loaded rejections closed for v3
- [x] DECISIONS.md — DEC-01+ frozen; build trace in `05-design/` + `DONE.md`
- [x] INTELLIGENCE-LAYER.md — 11 patterns mapped + verified (`HOOKS.md`, `AGENTS.md`)
