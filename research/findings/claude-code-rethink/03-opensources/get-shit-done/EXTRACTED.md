# Extracted: get-shit-done (GSD)

**Source path:** `draft/research-sdd-vendors/get-shit-done/` (`origin`: `github.com/gsd-build/get-shit-done`)  
**Eaten:** 2026-03-30 (README + `docs/USER-GUIDE.md` workflow sections)

---

## One-line thesis

**Context engineering for reliability** — meta-prompting + XML + subagent orchestration **behind** a small command surface; solves **context rot** by refreshing structure per phase/task.

---

## Context engineering

| Mechanism | What GSD does |
|-----------|----------------|
| Context rot | Treats filling the window as quality decay; **fresh subagent context** per research/plan/execute roles (see planning diagram: parallel researchers → single planner → plan checker). |
| What to load | Phase artifacts: **PROJECT.md**, **REQUIREMENTS.md**, **CONTEXT.md**, **RESEARCH.md** feeding the planner; executors get phase-scoped plans. |
| Max size | Not stated as a single number in the excerpt — README emphasizes **system** complexity vs user workflow complexity. |

**Audience:** **all three** — non-interactive install flags (`--claude --global`) documented for CI.

---

## Wave / parallel execution

- **Plan phase:** Four parallel **researchers** (stack, features, architecture, pitfalls) → merge to **RESEARCH.md** → single **Planner** → **Plan Checker** loop (up to **3** retries) → PLAN files.
- **Execute phase:** **`/gsd:execute-phase`** — parallel execution of phase work (per USER-GUIDE lifecycle).
- **Dependency expression:** Phases and **backlog** semantics; plan checker enforces completeness before execute. Explicit **topological JSON** not in the USER-GUIDE excerpt — coordination is **file-based** (RESEARCH.md, PLAN, VALIDATION).

**Audience:** **any dev** for interactive; **headless agents** need scripted equivalents of `/gsd:*` or replicated artifact flow.

---

## Verification gates

| Gate | Behavior |
|------|----------|
| **Plan checker** | Blocks until plan passes; up to **3** revision loops. |
| **Nyquist / validation layer** | Maps **automated tests** to requirements per phase; plan checker has an **8th dimension**: tasks without **automated verify** commands fail approval. Output: `{phase}-VALIDATION.md`. |
| **`/gsd:verify-work`** | Manual UAT in lifecycle. |
| **`/gsd:validate-phase`** | Retroactive — auditor only touches **tests** + **VALIDATION.md**, not implementation (max 3 attempts). |

**Failure behavior:** Loop (plan) or escalate (validation gaps to manual-only).

**Audience:** **all three** if **VALIDATION.md** + test commands are machine-readable; **Nyquist** is especially strong for CI.

---

## XML prompting

README claims **XML prompt formatting** internally; USER-GUIDE excerpt focuses on workflow diagrams — **XML schema not captured in this pass** (follow-up: grep `prompts/` or `templates/` in repo if needed).

**Audience:** internal to GSD prompts — **headless** users don’t see XML unless exposed in commands.

---

## State files

| Artifact | Role |
|----------|------|
| PROJECT.md | Project shape |
| REQUIREMENTS.md | What to build |
| CONTEXT.md | Locked preferences / assumptions |
| RESEARCH.md | Merged research |
| PLAN / phase plans | Execution input |
| `{phase}-VALIDATION.md` | Test↔requirement mapping |

**Audience:** **all three** — files are plain markdown/MD in repo.

---

## What we may have adopted incompletely in OpenCode/VENOM

1. **Nyquist-style validation** — explicit **feedback contract** before implementation; **8th dimension** on plan approval. VENOM should ask: does every `/venom-build` task have an **automated verify** command?
2. **Plan checker loop cap (3)** — explicit bound on revision; prevents infinite refine.
3. **UI design contract** (`/gsd:ui-phase` / `ui-review`) — **pre-contract** before planning for frontends — parallel to VENOM “design before code”.

---

## Patterns for MASTER-PATTERNS.md

See **Nyquist validation contract**, **Plan checker loop bound**, **UI phase contract**.
