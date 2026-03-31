# VENOM Help Command for OpenCode

**Purpose:** Provides OpenCode command reference, quick start guide, and troubleshooting.

**Content:**

## Quick Reference

### Commands
```
/opencode              Start TUI (main entry point)
/opencode run "prompt"  Direct execution
/init                Initialize project (creates AGENTS.md)
/share               Share session (creates URL)
/export              Export session to JSON
/import              Import from URL or JSON
/undo                Revert last change
/redo                 Restore reverted change
/agent                Manage custom agents
/mcp                  Manage MCP servers
@filename.ts          Fuzzy file search
<TAB>                Toggle Plan mode
```

### Environment Variables
```
OPENCODE_CLIENT           Client identifier (cli, ide, sdk, web, desktop)
OPENCODE_DISABLE_CLAUDE_CODE   ⚠️ CRITICAL: VENOM requires `.claude/` enabled
OPENCODE_CONFIG          Inline JSON config
OPENCODE_SERVER_PASSWORD  Web/Desktop basic auth
```

### SDK APIs
```typescript
import { createOpencodeClient } from "@opencode-ai/sdk"

const client = createOpencodeClient({
  baseUrl: "http://localhost:4096"
})
```

### Quick Start
```bash
# Initialize project
opencode /init

# Share session for collaboration
opencode /share
```

## Full Power Mode

Trigger: `masterpiece opencode help`

All minds active. Complete command reference and documentation.

---

*No shell. Just intelligence. Helping. OpenCode-aware. 🐙*
