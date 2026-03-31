# Claude Code Anatomy: CLAUDE.md & Rules

> **Verified against:** [How Claude remembers your project](https://docs.anthropic.com/en/docs/claude-code/memory) (2026-03-30).

**Status:** 🟢 Research complete

---

## What CLAUDE.md is

Markdown instructions loaded at **session start** (with nuances below). **Not** the internal system prompt; **not** enforced like managed settings. Delivered as context Claude follows **best effort**.

**Target size:** **Under ~200 lines** per file for adherence; longer content **splits** via `@` imports or `.claude/rules/`.

**HTML comments:** Block-level **`<!-- ... -->`** in CLAUDE.md are **stripped** before injection (saves tokens). Comments **inside** code fences stay.

---

## Where files live (precedence)

More **specific** locations take precedence over broader ones (see doc for full hierarchy).

| Scope | Path |
|-------|------|
| Managed (org) | macOS `/Library/Application Support/ClaudeCode/CLAUDE.md`; Linux `/etc/claude-code/CLAUDE.md`; Windows `C:\Program Files\ClaudeCode\CLAUDE.md` |
| Project | `./CLAUDE.md` **or** `./.claude/CLAUDE.md` |
| User | `~/.claude/CLAUDE.md` |

**User `~/.claude/rules/`** load **before** project rules; **project rules** win on conflicts.

---

## How loading works

1. **Walk up** from **cwd:** Ancestor `CLAUDE.md` files toward repo root are loaded **in full** at launch.
2. **Subdirectories:** `CLAUDE.md` under the project **not** on the path from cwd upward — **lazy**: pulled in when Claude **reads files** in those subtrees (saves context).
3. **`--add-dir`:** Extra dirs **do not** load their `CLAUDE.md` / `.claude/rules` by default. Set **`CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1`** to include them.

**Monorepos:** Use **`claudeMdExcludes`** in settings globs to skip other teams’ instruction files (arrays **merge** across settings layers).

---

## `@` imports

- **Syntax:** `@path/to/file` anywhere in markdown (also `@README`, `@package.json`).
- **Resolution:** Relative paths are relative to the **file containing the import**, not cwd.
- **Recursion:** Imports can chain; **max depth 5**.
- **Absolute / home:** `~/.claude/...` allowed — first use may show **approval dialog** for external imports.
- **Expansion:** Imported files are **expanded at launch** with the importing CLAUDE.md (eager for that bundle).

**`AGENTS.md`:** Claude Code reads **`CLAUDE.md`**, not `AGENTS.md` natively. Pattern:

```markdown
@AGENTS.md

## Claude Code
…Claude-specific additions…
```

---

## `.claude/rules/*.md`

- **Recursive** discovery; one topic per file; optional subdirs (`frontend/`, …).
- **No `paths` frontmatter:** Loaded at launch **with same priority** as `.claude/CLAUDE.md`.
- **Path-specific rules:** YAML frontmatter:

```yaml
---
paths:
  - "src/api/**/*.ts"
---
```

Load when Claude **works with matching files** (glob), not necessarily every tool call.

**Skills:** For task-heavy workflows that should **not** sit in context all session, prefer **skills** (`SKILLS.md`).

---

## Merge / conflicts

- **No automatic merge** of contradictory instructions — **Claude may pick arbitrarily**. Maintain **one** source of truth per behavior.
- **Managed** org CLAUDE.md cannot be excluded by user settings.

---

## System prompt vs CLAUDE.md

- Default: **CLAUDE.md is not** system prompt.
- **Automation:** [`--append-system-prompt`](https://docs.anthropic.com/en/cli-reference#system-prompt-flags) for script-level system prompt (must pass every invocation).

---

## Compaction

- **CLAUDE.md** survives compaction: **re-read from disk** and re-injected after `/compact`.
- **Chat-only** instructions do **not** survive — persist in files.

---

## VENOM template implications

1. **Thin CLAUDE.md** at project root: pointers + `@.claude/knowledge/soul.md` etc. (match existing template pattern).
2. **Identity** in knowledge files; **routing** in CLAUDE + optional `.claude/rules/`.
3. **Owner prefs:** `~/.claude/CLAUDE.md` or `@` to home file — not a second `CLAUDE.md` in repo unless you introduce a documented convention.
4. **Init:** `/init` scaffolds CLAUDE.md; `CLAUDE_CODE_NEW_INIT=true` for multi-phase init (skills, hooks).

---

## References

- [Memory / CLAUDE.md](https://docs.anthropic.com/en/docs/claude-code/memory)  
- [Settings](https://docs.anthropic.com/en/docs/claude-code/settings) — `claudeMdExcludes`  
- [InstructionsLoaded hook](https://docs.anthropic.com/en/hooks#instructionsloaded) — audit loads  
- **`MEMORY.md`** (this folder) — auto memory vs instructions  

---

## Checklist

- [x] Load order (ancestors + lazy subdirs)  
- [x] `@` depth 5, relative-to-file  
- [x] rules + `paths`  
- [x] 200-line guidance  
- [x] AGENTS.md bridge pattern  
- [x] `CLAUDE.local.md` → official alternatives noted  
