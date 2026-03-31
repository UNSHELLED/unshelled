# EAT — platforms assimilation digest

> **Method:** Walked **`platforms/`** (2026-03-29; **Claude Code `.venom/` + roster** corrected 2026-03-30). Counted files with `find`, excluding `node_modules/` and `.git/`. Read every kit’s **README**, template **entry prompts**, **OpenCode `opencode.json`**, and compared **agent / skill / rule** layouts.  
> **Job:** Say what **actually exists**, which **layers repeat** across products, where **names diverge**, and what **must** ship for a new instance vs what is **optional**.

This is the spine digest. Main-repo anatomy of filenames → `anatomy/PARTS.md`. Navigation hub → `MAP.md`.

---

## 1. Inventory (by kit)

| Kit | Non-`node_modules` files (approx.) | Template deploy root | Vendor “body” dir |
|-----|-------------------------------------|----------------------|-------------------|
| **cursor** | 65 | `template/.cursor/`, `template/.venom/`, `CURSOR.md`, `.cursorrules`, `VENOM-SURFACES.md` | `.cursor/` |
| **claude-code** | *(varies)* | `template/.claude/`, `template/.venom/`, `CLAUDE.md` | `.claude/` + `.venom/` |
| **opencode** | 56 (+ origin docs) | `template/` full tree | `.opencode/`, `opencode.json` |
| **antigravity** | 32 | `template/.agent/`, `GEMINI.md`, `mcp_config.json` | `.agent/` (Antigravity) |
| **chatgpt** | 15 | `prompt/*.txt` + `prompt/brain.md` (paste-only) | *(none — product UI)* |
| **claude-mobile** | 6 | `PROJECT_INSTRUCTIONS.md`, `knowledge/*.md` | *(Claude.ai Project)* |
| **unshelled** | 247 | Live workspace: `.opencode/`, `.venom/`, `AGENTS.md`, `platforms/opencode/` mirror, `design-language/`, `venom-opencode-site/` | Composite |

**Origin-only** (not copied to end projects): `opencode/INSTALL.md`, `MANIFEST.md`, `SPEC.md`, `MATRIX.md`, `opencode.example.json`, `opencode/knowledge/*.md`, `cursor/INSTALL.md`, etc.

---

## 2. Seven conceptual layers (cross-platform)

These are **roles**, not filenames. Every kit implements a subset.

| Layer | Meaning | Typical artifacts |
|-------|---------|-------------------|
| **L1 — Soul anchor** | Who VENOM is; pact; triggers | `CLAUDE.md`, `CURSOR.md`, `VENOM.md`, `GEMINI.md`, `1-identity.txt`, `PROJECT_INSTRUCTIONS.md` |
| **L2 — Dispatch** | How to route work / agents | `AGENTS.md` (OpenCode), nine-minds in rules (`venom-agents.mdc`), agent `.md` files (Claude Code, OpenCode) |
| **L3 — Knowledge** | Longer reference chunks | `.claude/knowledge/*.md`, `.opencode/knowledge/*.md`, `chatgpt/knowledge/` (ref only) |
| **L4 — Rules / policies** | Always-on or scoped behavior | `.cursor/rules/*.mdc`, `.claude/rules/*.md`, `.agent/rules/*.md` |
| **L5 — Skills / procedures** | Invocable bundles | `.cursor/skills/*/SKILL.md`, `.claude/skills/VENOM/SKILL.md`, `.opencode/skills/*/SKILL.md`, `.agent/skills/*/SKILL.md` |
| **L6 — Commands / workflows** | Slash or workflow docs | `.opencode/commands`, `.opencode/workflows`, `.claude/commands`, Cursor `/venom` command file |
| **L7 — Runtime state** | Per-project memory | `.venom/` (Cursor + OpenCode + **Claude Code** templates), Antigravity `.agent/learnings/` |

**Plugins / hooks (extra):** OpenCode `venom-core.ts`; Claude `settings.json` + `scripts/`; Cursor `hooks/*.mdc`.

---

## 3. Layer → kit matrix (what exists where)

| Layer | Cursor | Claude Code | OpenCode | Antigravity | ChatGPT | Claude mobile |
|-------|--------|-------------|----------|-------------|---------|----------------|
| L1 Soul | `CURSOR.md` + identity `.mdc` | `CLAUDE.md` + `knowledge/soul.md` | `VENOM.md` + `instructions[]` | `GEMINI.md` | `1-identity` + `brain.md` | `PROJECT_INSTRUCTIONS.md` |
| L2 Dispatch | `venom-agents.mdc` | 9× `agents/venom-*.md` (no `venom-bridge`) | `AGENTS.md` + 6× agents | workflows + skills | *(in text)* | *(in text)* |
| L3 Knowledge | spread in rules/systems | `knowledge/*.md` | `opencode-anatomy.md`, `opencode-tools.md` | rules | `knowledge/` ref | `knowledge/` upload |
| L4 Rules | many `.mdc` | `rules/*.md` | permissions + agent frontmatter | `rules/*.md` | *(in 5 files)* | — |
| L5 Skills | `venom-*/SKILL.md` | `venom-deep/SKILL.md` (`/venom-deep`) | `VENOM_OPENCODE/SKILL.md` | 6 skills | — | — |
| L6 Commands/workflows | `commands/venom.md` | `commands/*.md` | commands + workflows | `workflows/*.md` | — | — |
| L7 State | `.venom/` + `state/workflow-state.example.json` | `.venom/` (stubs + `state/workflow-state.example.json`; hooks + `CLAUDE.md`) | `.venom/` full tree | `learnings/` | boundaries text | `MEMORY.md` upload |

**Note:** Claude Code v3 template **ships `.venom/`** (aligned with Cursor/OpenCode brain layout). Runtime-only files (e.g. `.venom/state/workflow-state.json`, hook counters) may stay gitignored per project policy.

---

## 4. Agent roster drift (IDE kits)

| Role | OpenCode `.md` | Claude Code `.md` | Cursor |
|------|----------------|-------------------|--------|
| architect | yes | yes | via rules |
| researcher | yes | yes | via rules |
| builder | yes | yes | via rules |
| reviewer | yes | yes | via rules |
| debugger | yes | yes | via rules |
| explorer | yes | no | via rules |
| bridge | no | no (absorbed by communicator) | via rules |
| communicator | no | yes | via rules |
| historian | no | yes | via rules |
| learner | no | yes | via rules |
| predictor | no | yes | via rules |

**Implication:** “Nine minds” is **texture** everywhere; **file-level parity** is only 6 agents on OpenCode vs 10 files on Claude Code. **`anatomy/PARTS.md`** should not claim 1:1 file parity — map **roles**, not counts.

---

## 5. Filenames that repeat (true common parts)

| Name / pattern | Where |
|----------------|--------|
| **`MEMORY.md`** | `cursor/template/.venom/memory/`, `opencode/template/.venom/memory/`, `claude-mobile/knowledge/` |
| **`CONTEXT.md`** | Cursor + OpenCode `.venom/` |
| **`corrections.yaml` / learnings** | Cursor + OpenCode (yaml); Antigravity learnings dir |
| **`venom-deep` / VENOM skill** | `.claude/skills/venom-deep/`, `.opencode/skills/VENOM_OPENCODE/` (ID differs) |
| **`venom-*` agents** | OpenCode + Claude Code file names |
| **`CHANGELOG.md` / `INSTALL.md` / `README.md`** | Every kit at `platforms/<kit>/` |

**Vendor-locked names (do not reuse for other meanings):** `CLAUDE.md`, `opencode.json`, `.cursorrules`, `GEMINI.md`, `settings.json`.

---

## 6. OpenCode template — concrete stack (canonical richest tree)

What a **full** VENOM OpenCode project carries (template = SSOT for “everything on disk”):

- **Root:** `AGENTS.md`, `VENOM.md`, `opencode.json`
- **`.venom/`:** `INDEX.md`, `CONTEXT.md`, `BRAIN.md`, `learnings/`, `memory/`, `work/`
- **`.opencode/`:** `INDEX.md`, `agents/`, `commands/`, `workflows/`, `knowledge/`, `skills/VENOM_OPENCODE/`, `plugins/venom-core.ts` (+ TS package files)

**Governance next to kit:** `SPEC.md`, `MATRIX.md`, `MANIFEST.md` (origin only).

---

## 7. `unshelled/` — not the same species

`platforms/unshelled/` is a **living pilot**: it **embeds** an OpenCode-shaped tree (`.opencode/`, `.venom/`, `AGENTS.md`), **mirrors** `platforms/opencode/` under `unshelled/platforms/opencode/`, and adds **product** (`design-language/`, `venom-opencode-site/`).  

**Do not** treat unshelled file count as “minimum kit size.” Treat it as **maximum composite**. Sync policy: when **origin** `platforms/opencode/template/` changes, unshelled copies need a deliberate merge (manual or scripted).

---

## 8. What must exist for a **new** platform kit

Minimum **maintainer** surface (like existing kits):

- `README.md` — what it is, install in 5 lines
- `INSTALL.md` — full steps
- `CHANGELOG.md` — version trail
- `template/` — copy-only tree (no INSTALL/README inside template if it overwrites user projects — Antigravity pattern)

Minimum **VENOM** surface (when the product allows folders):

- **L1** — one anchor doc (soul + triggers) named per vendor convention
- **L2** — either `AGENTS.md` or agent files or consolidated rules
- **L7** — if long sessions: a **memory path** (`.venom/` or product equivalent)

Chat-only caps (ChatGPT, Claude mobile): **flatten** into N files or 1–2 fields — **no** fake folder parity.

---

## 9. Gaps worth fixing later (not blocking)

1. ~~**Claude Code** — no template `.venom/`~~ **Resolved (v3):** Claude Code template ships `.venom/`; keep `EAT.md` / kit READMEs in sync when layout changes.
2. **OpenCode vs Claude Code** — agent **file** count mismatch (6 vs 9); align **roles** in docs unless you add OpenCode agent files.
3. **unshelled** duplicate OpenCode tree — risk of **fork drift**; prefer symlink or single submodule story long-term.
4. **Cursor** — no `VENOM.md` at template root (uses `CURSOR.md` + many `.mdc`) — fine, but `anatomy/PARTS.md` should list **per-platform** soul filename.

---

## 10. How this feeds the rest of the repo

| Artifact | Update when |
|----------|-------------|
| **`platforms/EAT.md`** | Any template spine change, new kit, or agent roster change |
| **`platforms/INDEX.md`** | New directory under `platforms/` |
| **`anatomy/PARTS.md`** | New **canonical** filename shared across kits |
| **`MAP.md`** | New INDEX or hub files |
| **`opencode/MATRIX.md`** | OpenCode config or injection paths change |

---

*Eat again after major template releases — diff `template/` trees and bump the date in §1.*
