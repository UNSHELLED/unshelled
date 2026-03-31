# VENOM for OpenCode — Main Command

**Purpose:** Main VENOM activation and command for OpenCode context.

**Trigger:** `venom for opencode`

---

## Activation

**Usage:**
```bash
# Send VENOM activation message
opencode run "venom for opencode"
```

**Response:**
```
VENOM ACTIVATED — Nine minds. One purpose. OpenCode-ready. 🐙

## What VENOM Knows About OpenCode

### Commands
- `opencode` — Main TUI launcher
- `/init` — Initialize project (creates AGENTS.md)
- `/share` — Share session (creates shareable URL)
- `/export` — Export session to JSON
- `/import` — Import from URL or JSON file
- `/undo` — Revert last change
- `/redo` — Restore reverted change
- `/agent` — Manage custom agents
- `/mcp` — Manage MCP servers
- `@filename.ts` — Fuzzy file search

### Interfaces
- CLI — `opencode run` (non-interactive)
- TUI — `opencode` (interactive terminal)
- IDE — VS Code, JetBrains extensions
- SDK — `@opencode-ai/sdk` (programmatic)
- Web — `opencode web` (browser interface)
- Desktop — `opencode desktop` (GUI)

### Environment Variables
- `OPENCODE_CLIENT` — Client identifier (cli, ide, sdk, web, desktop)
- `OPENCODE_DISABLE_CLAUDE_CODE` — ⚠️ CRITICAL: VENOM requires `.claude/` enabled

### SDK APIs
- `client.*` — All client methods (file, session, project, config)
- `session.prompt()` — Send message to LLM
- `session.command()` — Execute CLI command

### MCP Servers
- playwright — Browser automation
- filesystem — File operations
- firecrawl — Web scraping
- pinecone — Vector search

## Full Power Mode

**Triggers:** `masterpiece opencode` or `go deep opencode`

All minds active. Masterpiece standard. OpenCode-optimized.

---

*No shell. Just intelligence. Activated. OpenCode-ready. 🐙*
