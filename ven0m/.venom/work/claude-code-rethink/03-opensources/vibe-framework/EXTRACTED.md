# Extracted: vibe-framework (normy-vibe / Vibe Framework)

**Source path:** `draft/research-sdd-vendors/vibe-framework/` (`npx normy-vibe init`)  
**Eaten:** 2026-03-30 (`README.md`)

---

## One-line thesis

**Orchestrator + PASS/FAIL gates + session traceability** — 15 specialist prompts, **rules tiering**, **context budget (~70% stop)**, **`SESSION_LOG.md`** per agent, **security rules always on** (`rules_essential.md` ~2K every response).

---

## Orchestrator design

- **Single entry:** Orchestrator auto-detects project state, routes to next command (`/brainstorm` → …).
- **Lean model:** Delegation to specialists; orchestrator prompt in `.vibe/agents/00-orchestrator.md` (per structure).
- **Integration:** Each agent writes artifacts to known folders (`planning_artifacts/`, `audit_out/`, …); **Definition of Done** is a **checklist** (AC, review, QA, audit score, vault, SESSION_LOG, snapshot, human “DONE”).

**Audience:** **any dev** (slash commands); **headless** needs scripted equivalents of flows — not turnkey.

---

## 15 specialists (from README table)

| # | Agent | Notes |
|---|--------|--------|
| 00 | Orchestrator | Auto-loaded |
| 01 | Brainstorm | `/brainstorm` |
| 02 | Vibecoding Committee | `/prd`, `/datamodel`, `/acpack` |
| 03 | Dev | `/dev` |
| 04 | Reviewer + Librarian | `/review` |
| 05 | Audit | `/audit` (13 dimensions) |
| 06 | QA | `/qa` |
| 07 | Product Reviewer | `/product` |
| 08 | Release + Ops | `/release` |
| 09 | RCA / Learning | `/rca` |
| 10 | UI/UX | `/ux` |
| 11 | User Training | `/training` |
| 12 | DB Migration | `/db_migrate` |
| 13 | Dependency Agent | `/deps` |
| 14 | Context Manager | `/snapshot` |

**vs VENOM nine minds:** Vibe splits **shipping** (release, training, product, QA, audit, DB, deps) into **separate** agents; VENOM folds many into **texture** (reviewer, predictor, debugger) without separate prompts per lifecycle stage. **Not** “9 vs 15 capability gap” — **different decomposition**: Vibe = **SDLC roles**; VENOM = **cognitive lenses**.

---

## Quality gates

- **Every step [GATE]** in standard flow (committee substeps, dev, review, audit, QA, product, release, RCA).
- **Hotfix** shortened path with **RCA obligatoire** within 24h.
- **Global DoD** ties AC, review, QA, audit threshold, vault + logs.

**Comparison to GSD:** GSD stresses **Nyquist** test mapping + plan-checker; Vibe stresses **multi-agent stage gates** + **audit dimensions** + **human confirmation**.

**Audience:** **any dev** interactive; **headless** must encode gates as **file checkpoints** or CI.

---

## Context management

| Mechanism | Detail |
|-----------|--------|
| **Rules tiering** | `rules_essential` every response; `CODE_INVENTORY` + `CONTEXT_SNAPSHOT` session start; `rules_full` / `skills.md` only when needed |
| **Session boundaries** | One scope per session; **10–12 messages** → mandatory snapshot; **debug >5 messages** no resolution → STOP → snapshot → new chat |
| **Context budget** | Agent estimates tokens; **>70% window** → STOP, split |

**Audience:** **all three** — rules tiering maps to **CLAUDE.md + @ imports** + **UserPromptSubmit** hints.

---

## Key question: 15 vs 9?

**Answer:** The **extra** roles are **delivery ops** (release, training, product review, DB migrate, deps) and **depth** (13-dim audit, committee for PRD/datamodel/AC). VENOM does **not** need 15 files if **commands/skills** cover `/venom-check`, `/venom-build`, `.venom/` memory — but **could** add **optional** skills for **release notes** or **migration checklist** without new “minds.”

**Audience:** all three for tiering; 15 agents = mostly **any dev** workflow density.
