# OpenCode × VENOM — patterns (merged)

**SSOT for recurring behaviors.** Upstream → **`UPSTREAM-README-DIGEST.md`**. CLI/config → **`CAPABILITIES.md`**. Disk/DB → **`ANATOMY.md`**.

---

## 1. Agent system — complete (docs verified 2026-03-27)

**Primary agents (Tab cycle):**
- **build** — default, all tools, full dev work.
- **plan** — read-only; edits + bash = `ask`. Analysis/planning.
- compaction / title / summary — hidden system agents (auto-only).

**Subagents (`@mention` or auto-invoked by primary):**
- **`@general`** — full tools except todo; heavy search + multistep; runs in **parallel**. Draft called it "general" but missed capabilities.
- **`@explore`** — **read-only, fast codebase search**. Cannot modify files. ← *drafts completely missed this*.

**VENOM mind mapping:**

| OpenCode | VENOM |
|----------|-------|
| plan primary | Architect + Researcher |
| build primary | Builder + Debugger |
| @explore | Pure researcher (no write) |
| @general | All-arms soldier (parallel) |
| custom subagent | Named scoped soldier |
| Tab switch | Mind-routing, physical |
| `@mention` | Explicit subagent dispatch |
| `hidden: true` | Internal soldier, not in autocomplete |

**Define:** JSON in `opencode.json` or markdown in `.opencode/agents/`. `opencode agent create` = interactive wizard.

**Permission model:** `ask`/`allow`/`deny` per tool, per bash glob. Last matching rule wins. `task` permission = which subagents a primary can spawn.

---

## 2. Surfaces + VENOM voice skew (verified)

| Surface | Entry | Voice skew |
|---------|-------|------------|
| TUI | `opencode [project]` | Structured markdown; agent-aware |
| Script | `opencode run` + `--format json` | Terse; machine-parseable |
| Remote TUI | `opencode attach <url>` | Same as TUI; server runs separately |
| Headless server | `opencode serve` / `web` | API-driven; SDK client |
| MCP | `opencode mcp …` | Name servers explicitly |
| ACP | `opencode acp` | Protocol boundary |
| Desktop / IDE | Releases + extensions | Richer depth |

---

## 3. Persistence split (never conflate)

| Store | Holds |
|-------|-------|
| `opencode.db` | Projects, workspaces, sessions, messages, parts, shares, todos, accounts |
| `.venom/` | Pact, decisions, learnings — **cross-tool relationship truth** |

Session DB = OpenCode runtime. `.venom/` = VENOM relationship. Link by project path, never duplicate.

---

## 4. Config inheritance (6 layers — merge, not replace)

`remote org` → `~/.config/opencode/opencode.json` (global) → `OPENCODE_CONFIG` → `project opencode.json` → `.opencode/` dirs → `OPENCODE_CONFIG_CONTENT`

**VENOM pattern:** global = model + instructions spine; `.opencode/` = project agents + commands.

**`instructions` key** = paths/globs fed to model. `.cursor/rules/*.md` is valid. This bridges VENOM rules into OpenCode.

Variable substitution: `{env:NAME}` and `{file:path}` in any config string.

---

## 5. Plugin architecture (npm project)

`~/.config/opencode/` is an npm project. `@opencode-ai/plugin` 1.3.2 → `@opencode-ai/sdk` 1.3.2 + zod 4.1.8. Custom plugins in `.opencode/plugins/` or via `plugin` array.

---

## 6. Snapshot system

Internal git-based snapshot tracks file changes → enables `/undo`. Stored in `storage/`. Disable with `"snapshot": false` for large repos (CI).

---

## 7. Draft cognitive systems (17–23) — intent, not code

| # | Intent |
|---|--------|
| 17 | Map surface → verbosity/tool choice |
| 18 | package.json, trees, frameworks scan |
| 19 | npx vs SDK vs MCP vs agent selection |
| 20 | init/share/export lifecycle awareness |
| 21 | test/build gate verification |
| 22 | perf/bundle optimization bias |
| 23 | SDK/session command glue |

Draft pseudocode has bugs — treat as **intent spec**, rewrite from tests/docs when implementing.

---

## 8. TUI slash commands (not shell subcommands)

`/init` (creates AGENTS.md) · `/connect` (provider setup) · `/share` · `/undo` · `/redo` · `/export` · `/import`

---

## 9. OSS repo workflow

Clone `dev` branch. TypeScript monorepo. `CONTRIBUTING.md`. Fork: `Unshelled/venom-opencode`.

---

*Add new rows when a behavior repeats 3+ times in real sessions.*
