# Extracted: spec-kit (github/spec-kit)

**Source path:** `draft/research-sdd-vendors/spec-kit/`  
**Eaten:** 2026-03-30 (README + `templates/*.md` + command templates)

---

## One-line thesis

**Specifications become executable** — constitution and spec precede code; slash commands (`/speckit.*`) drive a **four-phase** pipeline so the model works from stable artifacts, not ad-hoc chat.

---

## Philosophy (answers to EAT-PLAN)

| Question | Answer |
|----------|--------|
| Problem vs ad-hoc prompting? | Predictable outcomes and **product scenarios** first; reduces “vibe code everything from scratch.” |
| What is “constitution”? | **Governing principles + dev guidelines** that constrain *all* later specs/plans/tasks — ratified doc with principles, optional extra sections, **Governance** + version/ratification metadata. |
| Why 4 phases? | **Specify → Plan → Tasks → Implement** separates *what* (spec), *how* (plan), *ordered work* (tasks), *execution* (implement). Skipping phases risks building without testable user stories, without a plan, or without dependency-aware tasks. |
| What breaks if you skip? | Spec without constitution → inconsistent quality bars; plan without spec → wrong scope; tasks without plan → missing paths/deps; implement without tasks → untraceable work. |

---

## Constitution template (shape)

From `templates/constitution-template.md`:

- Title: `[PROJECT_NAME] Constitution`
- **Core Principles** — numbered/named principles with descriptions (library-first, CLI, test-first, integration tests, observability, etc.)
- Optional sections for constraints, workflow, quality gates
- **Governance** — how constitution is amended / supersedes other docs
- Footer: **Version | Ratified | Last Amended**

**Audience:** **all three** — readable by any dev; agents consume same file as instructions.

---

## Spec template (shape)

From `templates/spec-template.md`:

- Feature name, branch, status, **Input**: `$ARGUMENTS`
- **User Scenarios & Testing (mandatory)** — stories **prioritized** (P1, P2…), each **independently testable** (MVP slice per story), **Acceptance Scenarios** in **Given / When / Then**
- **Edge cases**
- **Requirements** — functional + key entities (continues in file)

**VENOM comparison:** Strong on **independent testability per story** and explicit priorities — worth mirroring in `/venom-spec` output.

**Audience:** **all three** — structured markdown is `claude -p`-friendly if paths are fixed.

---

## Tasks template (shape)

From `templates/tasks-template.md`:

- Frontmatter: `description` for the task list
- Links to inputs: `specs/`, **plan.md**, spec.md, research, data-model, contracts
- **Format:** `[ID] [P?] [Story] Description` — **`[P]`** = parallelizable; **`[Story]`** = user-story tag (US1…)
- **Phases:** Setup → **Foundational (blocking)** with explicit “no user story until foundation” → **per user story** phases with checkpoints
- Checkbox tasks with file paths in descriptions

**Dependency ordering:** Implicit via **phases** + **story groups** + checklist order; not a graph DSL in the template.

**Audience:** **any dev + agents** — parallel markers help headless batching.

---

## Slash commands (templates)

Under `templates/commands/`: `constitution`, `specify`, `clarify`, `plan`, `tasks`, `implement`, `analyze`, `checklist`, `taskstoissues` — each is a markdown command definition aligned with the phase pipeline.

**Claude Code integration:** Installed via **`specify init`** (CLI scaffolds agent-specific assets, e.g. `.cursor/` or `.claude/` per `--ai claude`). Hooks are **not** the center of spec-kit; **commands + templates** are.

**Extension system:** **Presets** and **extensions** in README — pluggable workflows; relevant to VENOM **profiles** as “swap pack” of commands/templates without forking core Pact.

---

## What spec-kit does better than ad-hoc VENOM-spec (actionable)

1. **Explicit “independent test” + priority per user story** in the spec — reduces monolithic specs.
2. **Foundational phase** in tasks template — blocks user-story work until shared infra exists (clear gate).
3. **Constitution versioning** — formal ratification/amendment metadata.

---

## Patterns for MASTER-PATTERNS.md

See root `MASTER-PATTERNS.md` entries: **Independent user story testability**, **Foundational phase gate**.

---

## Gaps / not needed for VENOM

- Python/`uv` CLI as product — we keep **markdown + skills/commands**, not `specify` binary requirement.
- 87% Python implementation detail — ignore per EAT-PLAN.
