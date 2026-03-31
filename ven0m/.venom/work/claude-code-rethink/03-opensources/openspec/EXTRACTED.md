# Extracted: OpenSpec (Fission-AI/OpenSpec)

**Source path:** `draft/research-sdd-vendors/openspec/`  
**Eaten:** 2026-03-30 (README + `docs/opsx.md`)

---

## One-line thesis

**Artifact-guided, fluid workflow** — each change lives in **`openspec/changes/<name>/`** with **proposal, specs, design, tasks**; **OPSX** replaces rigid phases with **actions** and **editable templates/schema** (`schema.yaml`, `templates/*.md`).

---

## Spec “deltas” (what they actually are)

| Concept | Reality |
|---------|---------|
| **Delta** | Not a unified diff format in the README — **each change is a folder** (`openspec/changes/add-dark-mode/`) with `proposal.md`, `specs/`, `design.md`, `tasks.md`. **Archive** moves to `openspec/changes/archive/<date>-<name>/` and **updates main specs** — evolution is **folder-level** + **archive**, not line-by-line patch files. |
| **Why not full rewrites** | Small, reviewable **change units**; **brownfield** friendly; iterate any artifact anytime (`/opsx:apply` updates during implementation). |
| **Conflicts** | Fluid editing — human/AI merge in repo; doc stresses **customize templates** instead of merge algorithms. |

**OPSX `sync`** (expanded): “Sync delta specs to main” — **optional** command in expanded profile.

**Audience:** **all three** — folder artifacts work in `git` + `claude -p` with fixed paths.

---

## Propose → apply → archive

| Command | Purpose |
|---------|---------|
| `/opsx:propose` | Create change + planning artifacts (quick path) |
| `/opsx:explore` | Think/clarify without full structure |
| `/opsx:apply` | Implement tasks; **may update artifacts** as work proceeds |
| `/opsx:archive` | Move to archive; **merge learnings into canonical specs** (per README narrative) |

Expanded: `/opsx:new`, `continue`, `ff`, `verify`, `sync`, `bulk-archive`, `onboard`.

**Audience:** **interactive** for slash; **headless** needs equivalent **CLI** (`openspec` npm) + non-interactive docs.

---

## Project config (`openspec/config.yaml`)

- **`context`** — injected into **all** artifact prompts, wrapped in `<context>...</context>` (50KB limit).
- **`rules`** — per **artifact ID** (`proposal`, `specs`, `design`, `tasks`), wrapped in `<rules>...</rules>`.
- **Schema precedence:** CLI `--schema` > change `.openspec.yaml` > project config > default `spec-driven`.

**Audience:** **all three** — YAML is machine-editable.

---

## What OpenSpec adds vs spec-kit

- **Lighter ceremony** — self-positioned vs Spec Kit’s **heavy** phase gates.
- **Template ownership** — OPSX lets teams **edit templates** without package release.
- **Fluid iteration** — `apply` can **update** specs/design while coding.

---

## VENOM: delta tracking in `.venom/work/features/`

**Feasible pattern:** Treat each feature as **`changes/<slug>/`** with `proposal.md` + `tasks.md` — **mirror OpenSpec’s folder-per-change** without adopting the npm CLI. Avoids **monolithic** `ACTIVE.md` drift if each change is a **unit**.

**Risk:** Extra folders to maintain — mitigate with **archive** when done (like OpenSpec).

**Audience:** **all three** if templates and paths are stable.

---

## Patterns for MASTER-PATTERNS.md

See **Folder-per-change archive**, **Context/rules injection for artifact prompts**.
