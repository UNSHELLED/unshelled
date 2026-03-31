# Claude Code Anatomy: Skills

> **Verified against:** [Extend Claude with skills](https://docs.anthropic.com/en/docs/claude-code/skills) (2026-03-30).  
> Follows [Agent Skills](https://agentskills.io/) open standard; Claude Code adds invocation control, subagent execution, dynamic injection, hooks.

**Status:** 🟢 Research complete

---

## What a skill is

- Directory with required **`SKILL.md`** (+ optional supporting files).
- YAML **frontmatter** + Markdown **instructions** Claude follows when the skill is active or invoked.
- **`name`** in frontmatter becomes **`/name`** (slash command). **If omitted**, directory name is used (`lowercase`, numbers, hyphens; max **64** chars).

**Merged with commands:** `.claude/commands/foo.md` and `.claude/skills/foo/SKILL.md` both create **`/foo`**; **skill wins** on naming conflict.

---

## Where skills live (precedence)

| Scope | Path | Notes |
|-------|------|--------|
| Enterprise | Managed settings | Org-wide |
| Personal | `~/.claude/skills/<name>/SKILL.md` | All projects |
| Project | `.claude/skills/<name>/SKILL.md` | Version control friendly |
| Plugin | `plugins/.../skills/<name>/SKILL.md` | Namespaced `plugin-name:skill-name` |

**Nested monorepos:** Skills under `packages/foo/.claude/skills/` auto-discover when working in that subtree.

**`--add-dir`:** Skills in added dirs load with live reload; `CLAUDE.md` from those dirs needs `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1` to load (per memory doc).

---

## Loading behavior (context cost)

| Phase | What loads |
|-------|------------|
| **Normal session** | **Descriptions** of invocable skills (for matching). **Full `SKILL.md`** loads when invoked (user `/name` or model via Skill tool), subject to `disable-model-invocation` / `user-invocable`. |
| **Subagent with `skills:` in frontmatter** | **Full skill content injected at startup** — not lazy (see [`AGENTS.md`](./AGENTS.md)). |

**Description truncation:** Descriptions **> 250 characters** truncated in listings. Many skills + budget: dynamic **~1% of context window** for description budget, fallback **8,000** chars — tune with **`SLASH_COMMAND_TOOL_CHAR_BUDGET`**.

**SKILL.md size:** Keep **under ~500 lines**; move detail to sibling files and reference them.

---

## Frontmatter reference (complete)

| Field | Required | Description |
|-------|----------|-------------|
| `name` | No | Display name; default = directory name |
| `description` | **Recommended** | When to use; model auto-invocation signal. If omitted, first paragraph of body. **>250 chars** truncated in listing. |
| `argument-hint` | No | Autocomplete hint, e.g. `[issue-number]` |
| `disable-model-invocation` | No | `true` = **only user** can run `/name` (not auto, not Skill tool). Removes from model **context** when true. |
| `user-invocable` | No | `false` = hide from `/` menu; **Claude only** can load. Default `true`. |
| `allowed-tools` | No | Tools usable **without per-use approval** when skill active |
| `model` | No | Override model for this skill |
| `effort` | No | `low` \| `medium` \| `high` \| `max` |
| `context` | No | `fork` = run in **subagent** (isolated) |
| `agent` | No | With `context: fork`: `Explore`, `Plan`, `general-purpose`, or **custom** agent **name** |
| `hooks` | No | Hooks scoped to skill lifecycle ([hooks doc](https://docs.anthropic.com/en/hooks)) |
| `paths` | No | Globs — auto-load when editing matching files (same idea as path-specific rules) |
| `shell` | No | `bash` (default) or `powershell` for inline `` !`...` `` preprocessing — requires PowerShell tool opt-in on Windows |

---

## String substitutions

| Variable | Meaning |
|----------|---------|
| `$ARGUMENTS` | All arguments after `/name` |
| `$ARGUMENTS[N]`, `$N` | Positional args (0-based) |
| `${CLAUDE_SESSION_ID}` | Session id |
| `${CLAUDE_SKILL_DIR}` | Directory containing this `SKILL.md` (use for bundled scripts) |

If `$ARGUMENTS` absent but user provided args → append `ARGUMENTS: ...`.

---

## Dynamic injection (shell preprocessing)

Syntax: `` !`your-shell-command` `` (exclamation + backtick-delimited command, per official examples). Runs **before** Claude sees the prompt; **stdout replaces** the placeholder (preprocessing, not a model tool call).

```markdown
- PR diff: !`gh pr diff`
```

Requires appropriate shell (see `shell:` frontmatter for PowerShell on Windows).

---

## Invocation control (summary)

| Config | User `/name` | Model auto | Description in context |
|--------|--------------|------------|-------------------------|
| Default | Yes | Yes | Yes (names always; descriptions budgeted) |
| `disable-model-invocation: true` | Yes | No | **No** (full skill only on user invoke) |
| `user-invocable: false` | No | Yes | Yes |

**Skill tool permissions:** Deny `Skill` entirely, or `Skill(commit)`, `Skill(review-pr *)` patterns. **`user-invocable: false` does not block Skill tool** — use **`disable-model-invocation`** to block model.

Built-in commands like `/compact` are **not** available through the Skill tool (per docs).

---

## `context: fork` + `agent:`

- Creates isolated run; skill body becomes the **task**; optional **`agent`** picks built-in or custom subagent (default **`general-purpose`**).
- Does **not** see main chat history — design for self-contained tasks.

---

## Skill vs command vs knowledge vs agent

| Primitive | Role |
|-----------|------|
| **Skill** | Reusable **workflow + optional fork + hooks + tools**; may become `/command`. |
| **`.claude/commands/*.md`** | Same as skill **without** supporting directory features (still valid). |
| **Knowledge (`CLAUDE.md`, `@files`)** | Always-on or referenced **facts**; not a slash verb. |
| **Agent (`.claude/agents/`)** | Delegated **persona** with own context via **Agent** tool / @mention; not the same as a skill. |

---

## Bundled skills (product)

Examples: `/batch`, `/simplify`, `/debug`, `/loop`, `/claude-api` — prompt playbooks, not fixed code paths. Listed in the skills doc table.

---

## VENOM template: current `SKILL.md`

**Path:** `platforms/claude-code/template/.claude/skills/venom-deep/SKILL.md` (`/venom-deep`; hub `/venom` = `.claude/commands/venom.md`)

- **Length:** Short trigger (~30 lines) pointing at `CLAUDE.md` for full spec.
- **Frontmatter:** `name: VENOM`, `allowed-tools` includes **`Task`** — should be **`Agent`** per tool rename ([`AGENTS.md`](./AGENTS.md)).
- **OpenCode contrast:** OpenCode may ship a **350-line** SKILL with embedded intelligence; Claude Code can do the same **if** token budget and lazy-loading tradeoffs are acceptable. Official pattern: **keep SKILL.md navigable**, push depth to linked files + CLAUDE.md.

**Recommendation:** For parity with “full intelligence in one file,” either:
- **Fat `SKILL.md`** + trim `CLAUDE.md` overlap, or  
- **Thin `SKILL.md`** + **`CLAUDE.md` @-includes** (see **`CLAUDE-MD.md`** when written) — avoid duplicating the nine-minds essay in three places.

---

## References

- [Extend Claude with skills](https://docs.anthropic.com/en/docs/claude-code/skills)  
- [Hooks — hooks in skills](https://docs.anthropic.com/en/hooks#hooks-in-skills-and-agents)  
- [Permissions — Skill(name)](https://docs.anthropic.com/en/permissions)  
- [Subagents](https://docs.anthropic.com/en/sub-agents) — preload skills vs `context: fork`

---

## Checklist

- [x] Locations + precedence  
- [x] Frontmatter complete  
- [x] Lazy vs full load  
- [x] `$ARGUMENTS` + `!` injection  
- [x] Commands merge + conflict rule  
- [x] Skill tool vs user-invocable  
