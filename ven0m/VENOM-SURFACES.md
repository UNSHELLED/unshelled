# VENOM Surfaces — Single Source of Truth

> *VENOM is the body. IDEs and SDD kits are skin and organs — not a second brain.*

This file is the **origin map**: what is canonical, what is exported, what is install-only, and how external workflows (Spec Kit, GSD, etc.) **mount** without replacing the Pact or `.venom/` memory.

---

## Canonical layers (precedence)

| Priority | Layer | Role |
|---------:|--------|------|
| 1 | **Spine** | `consciousness/pact.md`, `.cursor/identity/soul.mdc`, `values.mdc` — relationship + non-negotiables |
| 2 | **Brain** | `.venom/CONTEXT.md`, `.venom/memory/MEMORY.md`, `.venom/learnings/*`, `.venom/work/ACTIVE.md` |
| 3 | **Skeleton** | `STRUCTURE.md`, product specs/schemas under `platforms/` |
| 4 | **Nerves** | `.cursor/rules/*.mdc`, `.cursor/systems/*.mdc`, skills, `/venom` routing |
| 5 | **Skin** | Cursor UI, other hosts (Claude Code, Antigravity, Copilot, …) |
| 6 | **Optional organs** | Spec Kit (`.specify/`, `specs/`), GSD (`.planning/`), OpenSpec, Taskmaster, … — **per profile**, usually **under a product folder** |

If layer 6 contradicts layer 1 or 2 → **fix or reject the kit rule**, not the Pact.

---

## Origin vs template vs consumer

| Location | What it is |
|----------|------------|
| **Root `.cursor/`** | SSOT for VENOM behavior in this repo. Edit here first. |
| **`platforms/cursor/template/.cursor/`** | Exported Cursor template. Sync via `venom-sync` / `.cursor/skills/venom-sync` when behavior changes. **Never** copy `rules/origin.mdc` to template. |
| **Origin-only** | `rules/origin.mdc`, `skills/venom-sync`, `skills/venom-evolve`, optional `identity/voidweave.mdc` |
| **Template `.venom/`** | Bootstrap stubs for **new** installs — not the live brain of **this** origin repo. |
| **This repo’s `.venom/`** | Live brain for venom (origin). |

---

## Duplicate trees (drift risk)

Do **not** recreate nested mirrors under `agents/` or `consciousness/`. Canon = flat `agents/*.md` and flat `consciousness/*.md` (plus `consciousness/archive/`).

If a nested copy appears again, delete it or open a PR that explains why it must exist (default: it must not).

---

## Vendor research clones (local only)

Optional shallow clones for study:

- `draft/research-sdd-vendors/spec-kit`
- `draft/research-sdd-vendors/get-shit-done`

Root `.gitignore` excludes `draft/research-sdd-vendors/` so upstream trees are not committed by accident. Promote **patterns** into VENOM; do not vendor full repos into `.cursor/` without intent.

---

## Profiles

See `.venom/profiles/README.md`. A **profile** names which optional organs are active for a subtree (e.g. ScentVision).

---

## Navigation

| Need | File |
|------|------|
| This map | `VENOM-SURFACES.md` |
| Profile concept | `.venom/profiles/README.md` |
| Pilot product workflow | `platforms/unshelled/scentvision/VENOM-WORKFLOW.md` |
| Init sequence | `.cursor/rules/venom-heart.mdc` (`/venom?`) |
| Structure map | `STRUCTURE.md` |

---

*Origin: venom. One body. Many surfaces.*
