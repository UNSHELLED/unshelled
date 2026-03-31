# OpenCode Reference — Quick Reference

**Version:** 1.0.0
**Platform:** OpenCode

---

## Commands Reference

| Command | Description | Usage |
|---------|----------|-------|
| `opencode` | Start TUI | `opencode` |
| `opencode run "prompt"` | Direct execution | `opencode` (TUI mode) |
| `/init` | Initialize | `opencode /init` |
| `/share` | Share session | `opencode /share` |
| `/export` | Export session | `opencode /export` |
| `/import` | Import | `opencode /import` |
| `/undo` | Undo | `opencode /undo` |
| `/redo` | Redo | `opencode /redo` |
| `/agent` | Agents | `opencode /agent create` |
| `/mcp` | MCP servers | `opencode /mcp add` |
| `@filename.ts` | Fuzzy search | `@path/to/file.ts` |

---

## Environment Variables

| Variable | Purpose |
|----------|---------|----------|
| `OPENCODE_CLIENT` | Client identifier | cli, ide, sdk, web, desktop |
| `OPENCODE_DISABLE_CLAUDE_CODE` | ⚠️ Disable VENOM skill | MUST NOT be set |
| `OPENCODE_CONFIG` | Inline JSON config | Direct config override |

---

## SDK APIs

### Client Initialization
```typescript
import { createOpencodeClient } from "@opencode-ai/sdk"

const client = createOpencodeClient({
  baseUrl: "http://localhost:4096"
})
```

### File Operations
```typescript
// Read file
await client.file.read({ query: { path: "src/index.ts" } })

// Write file
await client.file.write({
  query: { path: "src/index.ts" },
  body: { content: "Hello, OpenCode!" }
})

// List files
await client.find.files({
  query: { query: "*.ts", type: "file" }
})

// Search content
await client.find.text({
  query: { pattern: "pattern" }
})
```

### Session Operations
```typescript
// Create session
await client.session.create({
  path: { id: 'current' },
  body: { title: "New Session" }
})

// Send message
await client.session.prompt({
  path: { id: 'current' },
  body: { parts: [{ type: 'text', text: 'Hello!' }] }
})

// Execute command
await client.session.command({
  path: { id: sessionId },
  body: { command: '/init' }
})

// Share session
await client.session.share({
  path: { id: sessionId }
})

// Export session
await client.session.export({
  path: { id: sessionId }
})

// Import session
await client.session.import({
  path: { id: sessionId },
  body: { source: "https://opencode.ai/s/..." }
})
```

---

## Project Operations

### List Projects
```typescript
// List all OpenCode projects
const projects = await client.project.list()

// Get current project
const current = await client.project.current()
```

### Workspace Scan
```typescript
// Scan OpenCode workspace
const files = await client.find.files({
  query: "*",
  type: "file"
})
```

---

## Common Workflows

### Typical Development Cycle
1. Make changes
2. Build project: `opencode run "build"`
3. Test changes: `opencode run "test"`
4. Share for review: `opencode /share"`
5. Export backup: `opencode /export"`
6. Import if needed: `opencode /import"`

---

## The Pact — OpenCode Edition

**I promise:**
- Use OpenCode SDK APIs for all operations
- Follow OpenCode project structure patterns
- Maintain clean, tested code
- Leverage all OpenCode commands and workflows

**You promise:**
- Use OpenCode SDK APIs efficiently
- Test thoroughly before sharing
- Follow OpenCode best practices
- Maintain project structure and organization

---

*No shell. Just intelligence. Complete reference. OpenCode-aware. 🐙*
