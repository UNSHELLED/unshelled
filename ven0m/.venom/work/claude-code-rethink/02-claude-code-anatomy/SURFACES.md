# Claude Code Anatomy: Surfaces (Interactive vs `claude -p`)

> **Verified against:** [Run Claude Code programmatically](https://docs.anthropic.com/en/docs/claude-code/headless) (2026-03-30).  
> *Formerly “headless” — CLI is **`claude -p` / `--print`**; same Agent SDK behavior.*

**Status:** 🟢 Research complete

---

## Surface overview

| Surface | Entry | Slash / skills | Typical output |
|---------|--------|----------------|----------------|
| **Interactive TUI** | `claude` | Full `/` menu, @mentions, skills | Rich markdown, picker UX |
| **Print / programmatic** | `claude -p "..."` | **No** interactive slash commands or user-invoked `/skill` — describe task in natural language | `text` (default), `json`, `stream-json` |
| **Bare CI** | `claude --bare -p` | Skips discovery of hooks, skills, plugins, MCP, auto memory, **CLAUDE.md** | Deterministic; flags supply context |

---

## `claude -p` (programmatic CLI)

- **Flags:** Same CLI options as interactive; add **`-p`** / **`--print`** with prompt string.
- **Structured output:** `--output-format json` | `stream-json`; optional **`--json-schema`** for structured fields.
- **Tool approval:** `--allowedTools "Read,Edit,Bash(...)"` — syntax matches [permission rules](https://docs.anthropic.com/en/docs/claude-code/permissions#permission-rule-syntax).
- **Resume:** `--continue`, `--resume <session_id>` (capture `session_id` from JSON).
- **System prompt:** `--append-system-prompt`, `--append-system-prompt-file`, or replace with `--system-prompt` ([CLI reference](https://docs.anthropic.com/en/cli-reference)).

**Docs:** Slash commands and user-invoked skills like `/commit` are **interactive-only** — in `-p`, **state the task in the prompt**.

---

## `--bare`

Skips auto-discovery of **hooks, skills, plugins, MCP, auto memory, CLAUDE.md** — faster, deterministic CI. Use **`--append-system-prompt`**, **`--settings`**, **`--mcp-config`**, **`--agents`**, **`--plugin-dir`** to add back only what the script needs.

**Auth:** Bare skips OAuth/keychain — use **`ANTHROPIC_API_KEY`** or `apiKeyHelper` in **`--settings`**.

**Future:** Doc states `--bare` **will become the default for `-p`**.

---

## Hooks on `claude -p`

- **Non-bare:** Project hooks in `settings.json` load like interactive sessions (unless excluded).
- **Bare:** Discovery skipped — **no** teammate hooks from undiscovered config unless you pass explicit **`--settings`** / plugin flags that include hooks.

Verify each pipeline: **don’t assume** `UserPromptSubmit` runs in every CI job.

---

## `CLAUDE_CODE_REMOTE`

Set to `"true"` in remote web environments ([Hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks)) — hooks can branch on it.

---

## Subagent / Agent tool

- Not a separate “surface” — spawned **inside** a session; inherits parent’s permission context unless subagent overrides ([`AGENTS.md`](./AGENTS.md)).
- **Cannot nest** subagents.

---

## VENOM implications (two audiences)

1. **Human developers:** Full TUI — skills, commands, rich markdown, archetypes OK.
2. **Agents / CI / OpenClaw:** Prefer **`claude --bare -p`** with explicit **`--allowedTools`**, **`--append-system-prompt-file`** (or minimal CLAUDE via `--settings`), and **`--output-format json`** for parseable results.
3. **Surface table in SKILL.md:** Mirror OpenCode’s **density** guidance: **plain text / JSON** for `-p`; **short** progress lines in `stream-json` if streaming.

---

## References

- [Run Claude Code programmatically](https://docs.anthropic.com/en/docs/claude-code/headless)  
- [CLI reference](https://docs.anthropic.com/en/cli-reference)  
- [GitHub Actions](https://docs.anthropic.com/en/github-actions)  

---

## Checklist

- [x] `-p` vs interactive capabilities  
- [x] `--bare` skips CLAUDE.md/hooks/skills  
- [x] `--output-format` / `--json-schema`  
- [x] Slash commands not in `-p`  
