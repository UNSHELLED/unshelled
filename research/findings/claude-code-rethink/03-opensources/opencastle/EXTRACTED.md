# Extracted: opencastle (monkilabs/opencastle)

**Source path:** `draft/research-sdd-vendors/opencastle/`  
**Eaten:** 2026-03-30 (`README.md`, `ARCHITECTURE.md`)

---

## One-line thesis

**Team Lead + ~19 specialists + Convoy engine** — **`npx opencastle init`** scaffolds **per-IDE** outputs (Claude Code: `CLAUDE.md` + `.claude/`); execution via **Compact** (inline subagent, sequential) vs **Convoy** (`.convoy.yml`, **DAG**, parallel); **model tiers** (Premium/Standard/Utility/Economy); **quality gates** + **panel majority vote** for high-stakes changes.

---

## Orchestrator (Team Lead)

- **Never writes code** (ARCHITECTURE) — analyzes, decomposes, delegates, verifies.
- **Two modes:**

| Mode | When | Execution |
|------|------|-----------|
| **Compact** | Complexity score ≤2, single subtask | `runSubagent` sequential |
| **Convoy** | Score 3+ or multi-task | ConvoyEngine, **DAG-based** parallelism |

**Audience:** **any dev** via CLI; **headless** — **`opencastle run`** + convoy YAML as **machine-readable** orchestration.

---

## Specialists (sample from ARCHITECTURE)

Team Lead, Developer, UI/UX, Architect, Security, Testing, Database, Content, Data, DevOps, Performance, API Designer, Release Manager, Documentation Writer, Researcher, Reviewer, Copywriter, SEO, … (**19** listed in doc — table continues beyond first excerpt).

**vs VENOM nine minds:** OpenCastle **splits** by **job title** + **stack**; VENOM **compresses** into **nine lenses**. **Optional VENOM adds:** explicit **Release** / **DevOps** **skills** if users ship without remembering ops — not a new “mind” required.

---

## Cross-platform

- **One CLI** → emits **Cursor** `.cursorrules`, **Claude Code** `CLAUDE.md`, **OpenCode** `AGENTS.md` + `.opencode/`, etc.
- **MCP** auto-config per stack — parallel to VENOM **`platforms/`** template matrix.

---

## Workflow / convoy

- **`opencastle start`** — idea → PRD → validate → convoy → validate → fix.
- **`opencastle run`** — deterministic, **crash-recoverable** engine (README).
- **Artifacts**, **dashboard**, **lessons** → `LESSONS-LEARNED.md` — self-improvement loop.

**Audience:** **all three** if convoy YAML + logs are **committed** as contract.

---

## Key question: missing specialist?

**Answer:** **Reviewer + Architect + Security** map to VENOM **venom-reviewer / venom-architect`**; **Release Manager / DevOps / SEO** are **role** specialists OpenCastle exposes that VENOM may address as **optional skills** or **commands**, not core nine-mind gaps.
