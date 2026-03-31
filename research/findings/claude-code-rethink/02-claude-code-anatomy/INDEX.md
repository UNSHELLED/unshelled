# Phase 02 — Claude Code Anatomy

> How Claude Code actually works. Not what we think. What the docs and source say.
> A surgeon who doesn't understand anatomy is just cutting.

**Purpose:** Map every Claude Code primitive before designing anything. Every hook type, every capability, every limit. No gaps.

---

## Why This Phase Exists

The current Claude Code template was built without this depth. It has `SessionStart` and `PreCompact` — and that's most of the hook usage. But Claude Code has:
- 8+ hook types (SessionStart, PreToolUse, PostToolUse, UserPromptSubmit, Stop, SubagentStop, PreCompact, Notification)
- Sub-agent system with typed `subagent_type` routing
- Skill system with frontmatter schema
- Plugin ecosystem with standardized structure
- Multiple surfaces (interactive, `claude -p`, hooks, sub-agents)
- `settings.local.json` + user `~/.claude/CLAUDE.md` / `@` imports (see **CLAUDE-MD.md** — no first-class project `CLAUDE.local.md` in the official scope table)

We haven't used most of this. We need to understand all of it.

---

## Files To Produce

| File | What to research | Sources |
|------|-----------------|---------|
| `HOOKS.md` | All 8+ hook types, exact JSON format, what they receive, what they can return, timing, limits | Claude Code docs + official plugin registry |
| `AGENTS.md` | Task tool, subagent_type list, how sub-agents are invoked, how they differ from primary | Claude Code docs |
| `COMMANDS.md` | Slash command frontmatter, argument passing, allowed-tools, how they're invoked | Claude Code docs |
| `SKILLS.md` | SKILL.md format, when skills load, how they're invoked, frontmatter schema | Claude Code docs |
| `MEMORY.md` | What persists, what doesn't, how CLAUDE.md loads, @ references | Claude Code docs |
| `PERMISSIONS.md` | settings.json schema, Bash() patterns, allow/deny mechanics | Claude Code docs |
| `CLAUDE-MD.md` | CLAUDE.md anatomy: what @ loads, what merges, project vs global, limits | Claude Code docs |
| `COMPACTION.md` | How compaction triggers, PreCompact hook, what the systemMessage does | Claude Code docs |
| `SURFACES.md` | Interactive vs non-interactive, SDK usage, how to detect | Claude Code docs |
| `PLUGINS.md` | Official plugin structure (anthropics/claude-plugins-official), what a plugin is | Plugin registry |

---

## Research Strategy

**Primary sources (in order):**
1. Anthropic's official Claude Code documentation
2. `anthropics/claude-plugins-official` GitHub (15k★) — official plugin structure
3. `jarrodwatts/claude-code-config` (1k★) — community patterns
4. `claude-contrib/claude-extensions` — hook patterns

**For each primitive, answer:**
- What is it exactly?
- What can it do that nothing else can?
- What are its limits?
- What does a production example look like?
- What does VENOM need from it specifically?

---

## Key Questions To Answer

**Hooks:**
- What does `UserPromptSubmit` receive exactly? Can we read the prompt text? Can we modify it?
- Can `PreToolUse` truly block execution? What's the exact return format?
- What does `SubagentStop` fire on? Can we capture sub-agent output?
- What's the `Notification` hook for? When does it fire?
- Does `Stop` fire when the user ends the session or when the model stops generating?

**Agents:**
- Full list of `subagent_type` values? What does each do differently?
- Can custom agents be defined beyond the built-in types?
- How does a Task tool call differ from an inline @ mention?

**Memory:**
- Does `CLAUDE.local.md` load silently? Does it merge with `CLAUDE.md` or override?
- What's the exact limit on CLAUDE.md size before it hurts performance?
- How does `@` file reference work in CLAUDE.md? Relative to project root?

**Compaction:**
- What exactly gets discarded during compaction?
- Does `PreCompact` systemMessage appear before or after the compaction prompt?
- Can we prevent compaction? Should we?

---

## What We Already Know (don't re-research)

Superseded by **`HOOKS.md`** — short reminders:
- `PreToolUse` blocks via **`hookSpecificOutput.permissionDecision`** (`deny` / `allow` / `ask`), not top-level `decision` (deprecated for this event).
- Hook input: **stdin JSON**; universal output patterns in Hooks reference.
- `settings.local.json` / `CLAUDE.local.md` — local overrides (gitignored).

---

## Status

- [x] HOOKS.md — research all hook types (official Hooks reference, 2026-03-30)
- [x] AGENTS.md — Agent tool (ex-Task), frontmatter, built-ins, precedence, permissions (official sub-agents doc, 2026-03-30)
- [x] COMMANDS.md — custom `/` commands = skills; `.claude/commands` vs `.claude/skills` (official skills doc, 2026-03-30)
- [x] SKILLS.md — SKILL.md, frontmatter, loading, `!` injection, Skill tool (official skills doc, 2026-03-30)
- [x] MEMORY.md — CLAUDE.md vs auto memory, storage, caps (official memory doc, 2026-03-30)
- [x] PERMISSIONS.md — deny/ask/allow, modes, Bash/Agent/Skill patterns, precedence (official permissions doc, 2026-03-30)
- [x] CLAUDE-MD.md — load order, `@` imports, rules, AGENTS.md pattern (official memory doc, 2026-03-30)
- [x] COMPACTION.md — CLAUDE.md survives + re-inject; PreCompact/PostCompact; subagent auto % (memory + hooks + sub-agents docs, 2026-03-30)
- [x] SURFACES.md — TUI vs `claude -p` vs `--bare`; output formats; hooks caveats (official programmatic doc, 2026-03-30)
- [x] PLUGINS.md — manifest, layout, `--plugin-dir`, marketplace (official create-plugins doc, 2026-03-30)
