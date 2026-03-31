# MAP — navigation hub

> **One door in.** This file lists **where the maps live** — not the full hierarchy (that is `STRUCTURE.md`). Each subtree keeps its own **`INDEX.md`** (“what lives in this folder”).
> **Why not inside `.venom/`?** `.venom/` is **runtime brain** for a project. A map of the **entire** repo (platforms, consciousness, anatomy, …) belongs **above** that layer — otherwise the brain folder pretends to describe the whole body.

---

## MAP vs INDEX vs STRUCTURE

| Doc | Scope | Job |
|-----|--------|-----|
| **MAP.md** (this file) | Whole repo | **Hub** — links to every first-class map and INDEX entry point. |
| **INDEX.md** (per folder) | That folder only | **Local table of contents** — agents, commands, learnings, … |
| **STRUCTURE.md** | Whole repo | **Canonical deep tree** — SSOT paths, who consumes what. |
| **MANIFEST.md** | Whole repo | **Narrative index** — what VENOM is, systems, quick questions. |
| **anatomy/PARTS.md** | Whole repo | **Body files** — one path, one job; registry. |

---

## Start here (ven0m/ origin within UNSHELLED.AI universe)

| Need | Go to |
|------|--------|
| Universe root | `../README.md` |
| Framework (UNSHELLED) | `../UNSHELLED/` |
| Living system (VENOCTIS) | `../venoctis/` |
| Deep topology + SSOT | `STRUCTURE.md` |
| Identity + systems story | `MANIFEST.md` |
| **All platform kits + EAT digest** | `platforms/INDEX.md` → **`platforms/EAT.md`** |
| File naming + spawn rules | `anatomy/INDEX.md` → `PARTS.md`, `SPAWN.md` |
| Body vs surfaces | `VENOM-SURFACES.md` |
| Crew members | `crew/` |
| This hub | `MAP.md` |

---

## INDEX.md — canonical entry points (maintainer)

*Prefer these paths when updating; ScentVision product lives under `../products/scentvision/` (not under `platforms/`).*

| Area | INDEX |
|------|--------|
| **All `platforms/*` kits** | `platforms/INDEX.md` |
| **Platform assimilation digest** | `platforms/EAT.md` (not INDEX — long-form eat) |
| Anatomy (naming hub) | `anatomy/INDEX.md` |
| OpenCode template — `.opencode` root | `platforms/opencode/template/.opencode/INDEX.md` |
| OpenCode template — agents | `platforms/opencode/template/.opencode/agents/INDEX.md` |
| OpenCode template — commands | `platforms/opencode/template/.opencode/commands/INDEX.md` |
| OpenCode template — workflows | `platforms/opencode/template/.opencode/workflows/INDEX.md` |
| OpenCode template — knowledge | `platforms/opencode/template/.opencode/knowledge/INDEX.md` |
| OpenCode template — skills | `platforms/opencode/template/.opencode/skills/VENOM_OPENCODE/INDEX.md` |
| OpenCode template — plugins | `platforms/opencode/template/.opencode/plugins/INDEX.md` |
| OpenCode template — docs | `platforms/opencode/template/docs/INDEX.md` |
| OpenCode template — `.venom` | `platforms/opencode/template/.venom/INDEX.md` |
| OpenCode template — learnings | `platforms/opencode/template/.venom/learnings/INDEX.md` |
| OpenCode template — memory | `platforms/opencode/template/.venom/memory/INDEX.md` |
| OpenCode template — work | `platforms/opencode/template/.venom/work/INDEX.md` |
| Main `.venom` work (assimilations) | `.venom/work/opencode-assimilation/INDEX.md`, `.venom/work/antigravity-eat/INDEX.md` |

---

## Smaller deployed projects (pattern)

- **Project root `MAP.md` or `README.md`:** optional one screen — “where is VENOM here?”
- **`.venom/INDEX.md`:** map **only** `.venom/*` (template already ships this).
- **Do not** put the **whole-repo** map only under `.venom/` — agents and humans look for repo-wide nav at **root** (or `docs/`).

---

*When you add a new subtree that uses INDEX.md, add one row to the table above.*
