# Claude Code Anatomy: Slash Commands (Custom)

> **Verified against:** [Extend Claude with skills](https://docs.anthropic.com/en/docs/claude-code/skills) + [Built-in commands](https://docs.anthropic.com/en/docs/claude-code/commands) (2026-03-30).  
> **Critical fact:** **Custom slash commands and skills are unified.** A file at `.claude/commands/deploy.md` and a skill at `.claude/skills/deploy/SKILL.md` **both create `/deploy`** and behave the same way. Skills are the **recommended** path (directory, supporting files, extra frontmatter).

**Status:** 🟢 Research complete

---

## Two kinds of `/` entries

| Kind | Source | Behavior |
|------|--------|----------|
| **Built-in commands** | Claude Code | Fixed behavior — see [Built-in commands](https://docs.anthropic.com/en/docs/claude-code/commands). Examples: `/compact`, `/init`, `/agents`, `/hooks`. |
| **Custom commands / skills** | `.claude/commands/*.md`, `.claude/skills/*/SKILL.md`, `~/.claude/skills`, plugins | Prompt + frontmatter; Claude orchestrates with tools. Bundled skills like `/batch`, `/simplify`, `/debug` ship with the product. |

Type **`/`** in the TUI to filter. Not every built-in is visible on every platform/plan (doc lists examples: `/desktop`, `/upgrade`, etc.).

---

## Custom command files (`.claude/commands/`)

- **Path:** `.claude/commands/<name>.md` (project). Same patterns exist for user-level command locations per docs evolution — **skills doc** is canonical for discovery precedence.
- **Effect:** Defines **`/<name>`** (derived from filename).
- **Format:** YAML **frontmatter** + Markdown body — **same frontmatter as `SKILL.md`** (see **`SKILLS.md`** for the full table).
- **Precedence:** If a **skill** and a **command** share the same name, **the skill wins**.

**Recommendation for VENOM:** Prefer **`.claude/skills/<verb>/SKILL.md`** so each workflow can bundle templates, scripts, and references. Keep **`.claude/commands/`** only for thin aliases or migration.

---

## Arguments (`$ARGUMENTS`)

Same substitution model as skills:

| Mechanism | Behavior |
|-----------|----------|
| `$ARGUMENTS` | Everything after `/name ` |
| `$ARGUMENTS[N]` / `$N` | Zero-indexed positional args |
| Missing `$ARGUMENTS` in body | If user passed args, Claude Code appends `ARGUMENTS: ` to the end of the content |

No separate “named CLI flags” in frontmatter — use positional args and document in `argument-hint`.

---

## Invocation

| Who | How |
|-----|-----|
| User | `/skill-name` or `/skill-name arg1 arg2` |
| Claude | **Skill tool** (when model invokes a skill) — see `SKILLS.md` + permissions `Skill(name)` |
| MCP | MCP servers can expose prompts as `/mcp__...` (see [MCP prompts](https://docs.anthropic.com/en/mcp#use-mcp-prompts-as-commands) — linked from built-in commands page) |

**Not documented as:** hook scripts or headless `claude -p` invoking `/foo` as a shell — treat **slash commands as interactive / Skill-tool** surfaces unless you verify [headless](https://docs.anthropic.com/en/headless) behavior in **`SURFACES.md`**.

---

## Tool permissions (`allowed-tools`)

Frontmatter **`allowed-tools`** on the command/skill restricts what Claude may use **while that skill is active** (same semantics as skills). See **`SKILLS.md`** and [permissions](https://docs.anthropic.com/en/permissions).

**Template note:** `platforms/claude-code/template/.claude/skills/venom-deep/SKILL.md` lists **`Task`** and **`Agent`** — align with Claude Code ≥ 2.1.63 ([`AGENTS.md`](./AGENTS.md)). **`/venom`** is a **command**; **`/venom-deep`** is the skill (name collision avoided).

---

## Inline shell / “OpenCode `!`”

- **Claude Code custom commands** do **not** use a separate OpenCode-style `!` prefix in the command file.
- **Skills** support **preprocessing** via `` !`command` `` in **`SKILL.md`** — command runs **before** the prompt is sent to Claude; output replaces the placeholder. See **`SKILLS.md`** (dynamic injection).

For arbitrary shell after load, the model uses the **Bash** tool under normal permission rules.

---

## Context: does `/foo` run in a fresh context?

- **Default:** Skill/command content is injected into the **main** conversation (or loaded per invocation-control rules).
- **`context: fork`** in frontmatter runs the skill in a **subagent** — isolated; see **`SKILLS.md`**.

---

## VENOM design implications

1. **Phase detection (`/venom-spec`):** Use `` !`cat .venom/state/workflow-state.json` `` (or platform-equivalent) in `SKILL.md` to inject file contents **before** the model sees the prompt — same *idea* as OpenCode’s `!cat`, but Claude Code uses **backtick-wrapped** shell in the skill body.
2. **`/venom-build`:** Can pass wave args via `$ARGUMENTS` / `$0`; no magic file reads without `!` or explicit tool steps in the skill body.
3. **Read-only review:** Set `allowed-tools: Read, Grep, Glob` on the review skill.
4. **Lifecycle:** Implement as **one skill per verb** under `.claude/skills/` with `disable-model-invocation` where OpenCode used “human-only” gates.

---

## References

- [Extend Claude with skills](https://docs.anthropic.com/en/docs/claude-code/skills) — custom commands + skills merge, frontmatter, `!` injection  
- [Built-in commands](https://docs.anthropic.com/en/docs/claude-code/commands) — product `/` commands  
- **`SKILLS.md`** — full frontmatter + loading + Skill tool
