# VENOM — Platform compatibility matrix

> **Role:** One table to rule them all: *where* each runtime loads VENOM, *what format*, *what to run to verify*.
> **Canonical repo path (this machine):** `venom-mine/platforms/opencode/` — deploy via `template/`.

**Version:** 1.0.0 · **Updated:** 2026-03-29

---

## Matrix (living document)

| Runtime | Primary injection | Secondary / optional | Format | Official reference | Verify |
|---------|-------------------|----------------------|--------|---------------------|--------|
| **OpenCode** | `opencode.json` → `instructions[]` | `.opencode/agents/*.md`, `.opencode/commands/*.md`, `skills.paths` / `~/.config/opencode/skills`, plugin `venom-core.ts` | JSON + Markdown | [opencode.ai/config.json](https://opencode.ai/config.json) | `opencode debug config`, `opencode debug skill`, `opencode debug agent build` |
| **Cursor** | User **Rules** (global) and/or `.cursor/rules/*.mdc` | Cursor **Skills** (if used), `AGENTS.md` in repo | `.mdc` YAML frontmatter + markdown | Cursor docs: Rules, Agent | Open project; confirm rule applies; test in chat |
| **Claude Code** | `CLAUDE.md` (project or user) | `~/.claude/skills/VENOM/SKILL.md`, `~/.claude/agents/*.md` | Markdown + skill frontmatter | Anthropic / Claude Code docs | New session; invoke or rely on CLAUDE.md load |

---

## Files in *this* repo (origin, not necessarily deployed)

| Concern | Path | Consumed by |
|---------|------|-------------|
| Constitution + idea loop | `platforms/opencode/SPEC.md` | Humans; reference in PRs |
| Maintainer drill floor | `platforms/opencode/ARENA.md` | After edits: proof rounds + scenario hooks |
| This matrix | `platforms/opencode/MATRIX.md` | Humans; update when tooling changes |
| OpenCode map + CLI | `platforms/opencode/README.md` | Maintainers |
| Full inventory | `platforms/opencode/MANIFEST.md` | Maintainers |
| Deploy template root | `platforms/opencode/template/` | Copy or scaffold into projects |
| Soul (identity) | `template/VENOM.md` | `instructions` in `template/opencode.json` |
| Dispatch sheet | `template/AGENTS.md` | `instructions` |
| OpenCode config (clean) | `template/opencode.json` | Project root after deploy |
| Annotated config | `platforms/opencode/opencode.example.json` | Humans only |
| OpenCode skill body | `template/.opencode/skills/VENOM_OPENCODE/SKILL.md` | OpenCode skill discovery |
| Venom agents | `template/.opencode/agents/venom-*.md` | OpenCode `@` agents |
| Venom commands | `template/.opencode/commands/venom-*.md` | OpenCode `/` commands |
| Plugin | `template/.opencode/plugins/venom-core.ts` | OpenCode `plugin` entry |

---

## Parity honesty (do not fake universal files)

| Capability | OpenCode | Cursor | Claude Code |
|------------|----------|--------|-------------|
| First-class `.md` agents | Yes (`.opencode/agents/`) | No (rules / subagents differ) | Yes (`~/.claude/agents/` or project) |
| Slash commands from markdown | Yes (`.opencode/commands/`) | No native same shape | Different invocation model |
| `opencode.json` | Yes | N/A | N/A |
| Persistent session DB | Yes | No | Varies |
| **Portable core** | `VENOM.md` + `AGENTS.md` + `.venom/` | User rules + `.mdc` + same markdown in repo | `CLAUDE.md` + skills |

**Rule:** Same *words* where possible (`VENOM.md` text); different *wiring* per column — documented in the table above.

---

## After a tool upgrade

1. Re-open official schema or changelog for that runtime.
2. Update the **Matrix** row if paths or keys changed.
3. Run the **Verify** command for that column.
4. If behavior regressed, patch **shim** only — keep `VENOM.md` / `SKILL.md` canonical text stable unless the pact itself changes.

---

*Add a row when you adopt a new CLI or IDE agent; remove fantasy rows that claim parity without a load path.*
