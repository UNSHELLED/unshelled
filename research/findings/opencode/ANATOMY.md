# OpenCode — Anatomy (living)

**Status:** Phase 1 — seeded with verified local facts; expand via `WORKFLOW-JOB.md` Lane A–C.

---

## Verified — Windows (this machine) — 2026-03-27

| Fact | Value |
|------|--------|
| **CLI version** | `1.3.2` (`opencode --version`) |
| **Invocation** | npm global shim: `opencode.ps1` → `node_modules/opencode-ai/bin/opencode` under npm prefix (e.g. `%AppData%\Roaming\npm\`) |
| **User data** | `%USERPROFILE%\.local\share\opencode\` — contains `opencode.db`, `auth.json`, `bin\`, `log\`, `storage\`, `tool-output\` |
| **DB path (CLI)** | `opencode db path` → `%USERPROFILE%\.local\share\opencode\opencode.db` |
| **npm package** | `opencode-ai` **1.3.2** — `bin.opencode` → `./bin/opencode`; platform binaries via `optionalDependencies` (`opencode-windows-x64`, etc.) |

### SQLite schema (verified — `sqlite3 … .schema`)

**Migrations:** `__drizzle_migrations`

**Core entities:** `project` (worktree, vcs, sandboxes, commands, …) · `workspace` · `session` (project_id, parent_id, share_url, revert, workspace_id, …) · `message` · `part` · `permission` · `session_share` · `todo` (per session, ordered by position)

**Accounts:** `account` · `account_state` · `control_account`

**Hot path:** sessions ↔ messages/parts; project ↔ workspace; share via `session_share`.

---

## Legacy session export — do not treat as this machine

`session-ses_2cf8.md` documents a **Linux** environment (`/home/venom/...`). Use only after **SESSION-LEGACY-DIGEST.md** filtering. Product URLs and GitHub org still useful.

---

## Upstream (re-verify periodically)

- Site: `https://opencode.ai`
- Repo: `https://github.com/anomalyco/opencode`

---

## Config system (verified 2026-03-27 — docs + debug config)

### Paths (this machine — `opencode debug paths`)

| Store | Path |
|-------|------|
| home | `C:\Users\karie` |
| data | `C:\Users\karie\.local\share\opencode` |
| bin | `C:\Users\karie\.cache\opencode\bin` |
| log | `C:\Users\karie\.local\share\opencode\log` |
| cache | `C:\Users\karie\.cache\opencode` |
| config | `C:\Users\karie\.config\opencode` |
| state | `C:\Users\karie\.local\state\opencode` |

### Config precedence (low → high wins)

1. Remote (`.well-known/opencode`) — org defaults
2. Global (`~/.config/opencode/opencode.json`) — user prefs
3. Custom (`OPENCODE_CONFIG` env var)
4. Project (`opencode.json` in project root)
5. `.opencode/` directories — agents, commands, plugins, modes, skills, themes, tools
6. Inline (`OPENCODE_CONFIG_CONTENT` env var)

**Merge, not replace.** Non-conflicting keys stack from all layers.

### Global config on this machine (`~/.config/opencode/`)

- `opencode.json` — schema `https://opencode.ai/config.json`; MCP + agent + mode + plugin + command + username
- `package.json` + `bun.lock` — dependency: **`@opencode-ai/plugin` 1.3.2** (which depends on `@opencode-ai/sdk` 1.3.2 + zod 4.1.8). **This is how plugins/SDK is installed globally.**
- Pencil MCP already wired (from Cursor extension).

### Current active config (`opencode debug config`)

```json
{ "$schema": "https://opencode.ai/config.json", "mcp": {"pencil": {...}}, "agent": {}, "mode": {}, "plugin": [], "command": {}, "username": "karie" }
```

### Active skill (`opencode debug skill`)

VENOM skill at `venom-mine\.claude\skills\VENOM\SKILL.md` — already loaded. ✅

---

*SSOT for “what OpenCode is on disk here.” Merge online truth into `CAPABILITIES.md` with citations.*
