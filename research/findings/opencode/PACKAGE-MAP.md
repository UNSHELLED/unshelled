# VENOM × OpenCode — Package map (single source of truth)

**Last updated:** 2026-03-27

---

## Canonical bundle (copy this tree)

| Role | Path |
|------|------|
| **SSOT — full implementation** | `.venom/work/opencode-assimilation/venom-opencode-full/venom-opencode/` |
| **Exported template (origin)** | `platforms/opencode/template/` — synced from SSOT; keeps `.opencode/knowledge/` (anatomy + tools) |

**Rule:** Edit the **bundle** first (or edit `platforms/opencode/template/` and back-port if you intend template-first). Do **not** recreate the same files at `.venom/work/opencode-assimilation/` root — those were duplicates and were removed.

---

## What lives where

### `venom-opencode-full/venom-opencode/` (17 files in tree)

| Path | Purpose |
|------|---------|
| `AGENTS.md` | VENOM identity for all OpenCode agents |
| `opencode.json` | Project config (instructions, permissions, plugin) |
| `README.md` | Quick start + pattern table |
| `NAMING.md` | Naming manifest + voice check |
| `BUILD-ORDER.md` | 12-task deployment order |
| `docs/SIMULATIONS.md` | 8 developer simulations |
| `.opencode/agents/venom-*.md` | Six specialists (reviewer, architect, researcher, debugger, builder, …) |
| `.opencode/commands/venom-*.md` | `/venom-review`, `/venom-research`, `/venom-eat`, `/venom-init`, `/venom-check` |
| `.opencode/plugins/venom-core.ts` | Hooks + memory + safety |
| `.opencode/skills/VENOM_OPENCODE/SKILL.md` | Lazy-loaded OpenCode skill |

### `platforms/opencode/template/` (after sync)

- Everything above **plus** `INSTALL.md`, `README-VENOM-OPENCODE.md` (copy of bundle README), and **`.opencode/knowledge/`** (`opencode-anatomy.md`, `opencode-tools.md`) — not in the bundle; template-only reference.

### `drafts/` (historical / exploration)

- `drafts/cognitive/`, `drafts/commands/`, `drafts/identity/`, `drafts/knowledge/`, `drafts/skills/` — **not** shipped as SSOT. Mine for ideas; **ground truth** = assimilation study files (`ANATOMY.md`, `CAPABILITIES.md`, …) + bundle.

### Assimilation study (no implementation)

- `INTELLIGENCE-STUDY.md`, `LOOP-PATTERNS-STUDY.md`, etc. — research, not the runnable package.

---

## Fork / GitHub

- **Target repo:** `Unshelled/venom-opencode` (see `REMOTE.md`)
- **Populate fork from:** `venom-opencode-full/venom-opencode/` (or the same tree after copying from `platforms/opencode/template/` minus origin-only paths)

---

## Quick copy command

```bash
# From venom-mine root — copy full VENOM OpenCode layer into a project
cp -r .venom/work/opencode-assimilation/venom-opencode-full/venom-opencode/.opencode /path/to/project/
cp .venom/work/opencode-assimilation/venom-opencode-full/venom-opencode/AGENTS.md /path/to/project/
cp .venom/work/opencode-assimilation/venom-opencode-full/venom-opencode/opencode.json /path/to/project/
```

---

*One body. One bundle. No duplicate roots.*
