# OpenCode — Capabilities (COMPLETE — verified 2026-03-27)

**CLI version:** `1.3.2` · **package:** `opencode-ai` · **plugin/SDK API:** `@opencode-ai/plugin` 1.3.2 → `@opencode-ai/sdk` 1.3.2

---

## 1. Top-level CLI (`opencode --help`) — verified

| Command | Purpose |
|---------|---------|
| `opencode [project]` | Start **TUI** (default). Optional path positional. |
| `opencode run [message..]` | Headless / scripted execution. |
| `opencode serve` | Headless server. |
| `opencode web` | Start server + open browser. |
| `opencode attach <url>` | Attach TUI to running server. |
| `opencode acp` | Start ACP (Agent Client Protocol) server. |
| `opencode mcp` | Manage MCP servers. |
| `opencode agent` | Manage agents. |
| `opencode session` | Manage sessions. |
| `opencode db` | SQLite database tools. |
| `opencode export [sessionID]` | Export session → JSON. |
| `opencode import <file>` | Import session from JSON or URL. |
| `opencode providers` / `auth` | Manage AI providers + credentials. |
| `opencode models [provider]` | List available models. |
| `opencode stats` | Token usage + cost statistics. |
| `opencode github` | GitHub agent (install / run). |
| `opencode pr <number>` | Checkout PR branch + run OpenCode. |
| `opencode debug` | Debugging tools. |
| `opencode upgrade [target]` | Upgrade OpenCode. `-m` method (curl/npm/pnpm/bun/brew/choco/scoop). |
| `opencode uninstall` | Uninstall. |
| `opencode completion` | Shell completion script. |

**Global flags:** `-h/--help`, `-v/--version`, `--print-logs`, `--log-level` (DEBUG/INFO/WARN/ERROR), `--port`, `--hostname`, `--mdns`, `--mdns-domain`, `--cors`, `-m/--model`, `-c/--continue`, `-s/--session`, `--fork`, `--prompt`, `--agent`.

---

## 2. `opencode run` — scripting surface

Options: `--command`, `-c/--continue`, `-s/--session`, `--fork`, `--share`, `-m/--model`, `--agent`, `--format` (`default`|`json`), `-f/--file`, `--title`, `--attach`, `-p/--password`, `--dir`, `--port`, `--variant` (reasoning effort), `--thinking`.

**`--format json`** = machine-readable event stream. Use for CI pipelines.

---

## 3. `opencode attach <url>` — remote TUI

Options: `--dir`, `-c/--continue`, `-s/--session`, `--fork`, `-p/--password`.

Run `serve` on one machine, drive TUI from another (or mobile). Core client-server architecture.

---

## 4. `opencode debug` — verified

| Subcommand | Output |
|------------|--------|
| `debug config` | Resolved merged config JSON |
| `debug paths` | data/bin/log/cache/config/state paths |
| `debug skill` | All loaded skills (name, description, path, content) |
| `debug agent <name>` | Full agent config JSON (build/plan tested) |
| `debug lsp` | LSP utilities |
| `debug rg` | ripgrep utilities |
| `debug file` | filesystem utilities |
| `debug scrap` | All known projects |
| `debug snapshot` | Snapshot debug |
| `debug wait` | Wait indefinitely (for debugging) |

---

## 5. `opencode mcp` — verified

| Subcommand | Purpose |
|------------|---------|
| `mcp add` | Add server |
| `mcp list` / `ls` | List servers + status |
| `mcp auth [name]` | OAuth authenticate |
| `mcp logout [name]` | Remove OAuth credentials |
| `mcp debug <name>` | Debug OAuth connection |

---

## 6. `opencode agent` — verified

| Subcommand | Purpose |
|------------|---------|
| `agent create` | Interactive: asks where (global/project), description, generates prompt, selects tools, writes `.md` file |
| `agent list` | All available agents |

---

## 7. `opencode session` — verified

| Subcommand | Purpose |
|------------|---------|
| `session list` | List sessions |
| `session delete <sessionID>` | Delete session |

---

## 8. `opencode db` — verified

| Subcommand | Purpose |
|------------|---------|
| `db [query]` | Interactive sqlite3 shell or run SQL |
| `db path` | Print DB file path |
| `db migrate` | Migrate JSON → SQLite |

`--format json|tsv` (default tsv).

---

## 9. `opencode providers` — verified

| Subcommand | Purpose |
|------------|---------|
| `providers list` / `ls` | List providers + credentials |
| `providers login [url]` | Log in |
| `providers logout` | Log out |

---

## 10. `opencode models` — verified

Options: `--verbose` (costs), `--refresh` (refresh from models.dev).

---

## 11. `opencode stats` — verified

Options: `--days N`, `--tools N`, `--models`, `--project`.

---

## 12. `opencode github` — verified

| Subcommand | Purpose |
|------------|---------|
| `github install` | Install GitHub agent |
| `github run` | Run GitHub agent |

---

## 13. `opencode upgrade` — verified

`--method`: curl / npm / pnpm / bun / brew / choco / scoop.

---

## 14. Agents system (docs — verified)

### Primary agents (Tab cycle)

| Name | Mode | Description |
|------|------|-------------|
| **build** | primary | Default. All tools. Full dev work. |
| **plan** | primary | Read-only. Edits + bash = `ask`. Analysis / planning. |
| **compaction** | primary (hidden) | Auto-compact long context. |
| **title** | primary (hidden) | Auto-generate session titles. |
| **summary** | primary (hidden) | Auto-create session summaries. |

### Subagents (`@mention`)

| Name | Mode | Description |
|------|------|-------------|
| **general** | subagent | Full tools (except todo). Complex search, multistep, parallel work. |
| **explore** | subagent | Read-only. Fast codebase exploration. |

### Agent definition — 2 formats

**JSON in `opencode.json`:**
```json
{ "agent": { "my-reviewer": { "mode": "subagent", "description": "...", "model": "...", "prompt": "{file:prompts/review.txt}", "permission": { "edit": "deny" }, "temperature": 0.1, "steps": 10 } } }
```

**Markdown** in `~/.config/opencode/agents/` or `.opencode/agents/`:
```markdown
---
description: Reviews code for quality
mode: subagent
model: anthropic/claude-sonnet-4-5
temperature: 0.1
permission:
  edit: deny
  bash: { "git diff": allow, "*": deny }
---
System prompt content here.
```

Filename = agent name. `opencode agent create` is interactive scaffolder.

### Permission model (per agent)

Values: `ask` / `allow` / `deny`. Granularity: tool + glob bash command pattern. Last matching rule wins. `task` permission controls what subagents a primary agent can spawn.

---

## 15. Config schema (docs — verified)

Key fields in `opencode.json`:
- `model`, `small_model`, `provider` (with `timeout`, `chunkTimeout`, `setCacheKey`)
- `agent` + `default_agent`
- `mcp`
- `permission`
- `tools` (deprecated → use agent `permission`)
- `command` — custom commands with `template`, `description`, `agent`, `model`
- `instructions` — array of paths/globs (feeds into AGENTS.md pattern)
- `formatter`
- `share` — `"manual"` | `"auto"` | `"disabled"`
- `snapshot` — bool (disable for large repos)
- `autoupdate` — bool or `"notify"`
- `compaction` — `auto`, `prune`, `reserved`
- `watcher.ignore` — glob patterns
- `plugin` — array of npm package IDs
- `experimental`
- `disabled_providers` / `enabled_providers`

**Variable substitution:** `{env:NAME}` and `{file:path}` in any string value.

**TUI config** separate file: `tui.json` / `OPENCODE_TUI_CONFIG`. Keys: `theme`, `keybinds`, `scroll_speed`, `scroll_acceleration`, `diff_style`.

---

## 16. Plugin system (docs + verified locally)

Global plugin config in `~/.config/opencode/` as npm project. `package.json` has `@opencode-ai/plugin` (depends on SDK + zod). Place plugin files in `.opencode/plugins/` or reference npm packages in `plugin` array.

---

## 17. TUI slash commands (inside TUI — not shell subcommands)

`/init` · `/share` · `/undo` · `/redo` · `/connect` · `/export` · `/import`

**`/connect`** = set up Zen/provider (not just share — new verified command from docs).

---

## 18. File reference + image drop

`@filename.ts` = fuzzy file search in project. Drag/drop image → attaches to prompt (docs verified).

---

## 19. LSP — out of the box

LSP support built in. No plugin needed. Useful for symbol search, go-to-def inside sessions.

---

## 20. Snapshot system

Tracks file changes using internal git. Enables `/undo`. Disable with `"snapshot": false` for large repos. Snapshots stored in `storage/`.

---

*Last full update: EAT-2026-03-27e. Run `opencode upgrade && opencode --help` to detect surface changes.*
