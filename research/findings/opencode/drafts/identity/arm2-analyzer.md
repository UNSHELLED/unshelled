# Arm 1 — Parser

**Purpose:** Reads structure, syntax, between lines in OpenCode context.

**Role:** Decode OpenCode commands, detect agent configuration syntax, parse file operations.

---

## OpenCode Command Parsing

**CLI Commands:**
```
opencode              // Start TUI
opencode run "prompt"   // Direct execution
opencode serve         // Headless server
opencode web           // Web interface
opencode /init         // Initialize project
opencode /project       // List projects
opencode /share         // Share session
opencode /export         // Export session
opencode /import         // Import session
opencode /undo          // Undo change
opencode /redo          // Redo change
opencode /agent create  // Create agent
opencode /agent list     // List agents
opencode mcp add       // Add MCP server
opencode mcp list      // List MCP servers
opencode mcp auth       // MCP authentication
```

**Parsing Rules:**
```
// 1. Command syntax
const commandPattern = /^(\/[a-z-]+)\s*(.*)$/i

// 2. Agent configuration
const agentPattern = /^(\w+)\s+(.+)$/

// 3. File reference (@ syntax)
const fileRefPattern = /^@([\w\-./]+)(#L(\d+)?)?$/i
```

---

## Agent Configuration Syntax

**OpenCode Agent Format (`.claude/agents/agent-name.md`):**
```yaml
---
name: agent-name
system: "Custom system prompt"
tools: [Read, Write, Bash, Glob, Grep]
model: anthropic/claude-sonnet-4-5-20241022
permissionMode: default | acceptEdits | dontAsk | delegate | bypassPermissions | plan
maxTurns: 10
skills:
  - skill-name-1
  - skill-name-2
mcpServers:
  - playwright
  - filesystem
memory: user | project | local
hooks:
  PreToolUse: [...]
  PostToolUse: [...]
  SubagentStart: [...]
  SubagentStop: [...]
---
```

**Parsing Logic:**
```typescript
function parseAgentConfig(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  
  if (!match) return null
  
  return {
    name: extractName(content),
    system: extractSystemPrompt(content),
    tools: extractTools(content),
    model: extractModel(content),
    permissions: extractPermissions(content),
    skills: extractSkills(content),
    mcpServers: extractMCPServers(content),
    memory: extractMemory(content),
    hooks: extractHooks(content)
  }
}
```

---

## File Reference Parsing (@ Syntax)

**Pattern:** `@filename.ts#L100` (OpenCode fuzzy search)

**Extraction Logic:**
```typescript
function parseFileReference(reference) {
  const match = reference.match(/^@([\w\-./]+)(#L(\d+)?)?$/i)
  
  if (!match) return null
  
  return {
    filename: match[1],
    lineNumber: match[2] ? parseInt(match[2]) : null
    fullReference: reference
  }
}
```

**Usage Examples:**
```
User: "Check @src/index.ts line 45"
Arm 1: Parses: filename="src/index.ts", line=45

User: "What's in @lib/utils/helpers.ts?"
Arm 1: Parses: filename="lib/utils/helpers.ts", line=null

User: "Search for pattern in @packages/functions/**/*.ts"
Arm 1: Parses: filename="packages/functions/**/*.ts", line=null
```

---

## OpenCode Tool Detection

**Recognizes OpenCode Operations:**
- Project initialization (`/init`)
- Session management (`/share`, `/export`, `/import`)
- File operations (`@filename.ts`)
- Agent management (`/agent`)
- MCP operations (`/mcp`)
- Command execution (`opencode run`)
- Undo/redo (`/undo`, `/redo`)

**Detection Workflow:**
```typescript
function detectOperation(input) {
  // Check for @ references
  if (input.includes('@')) {
    return { type: 'fileReference', content: extractFileRef(input) }
  }
  
  // Check for OpenCode commands
  const commands = ['/init', '/share', '/export', '/import', '/undo', '/redo', '/agent', '/mcp']
  if (commands.some(cmd => input.startsWith(cmd))) {
    return { type: 'opencodeCommand', command: extractCommand(input) }
  }
  
  // Check for direct execution
  if (input.startsWith('opencode run')) {
    return { type: 'directExecution', prompt: extractPrompt(input) }
  }
  
  return { type: 'generalRequest' }
}
```

---

## Between-Lines Reading

**Parsing Syntax and Semantics:**
```
// Arm 1 extracts meaning from code structure, comments, and context
function readBetweenLines(code, lineStart, lineEnd) {
  const lines = code.split('\n')
  const startLine = lines.findIndex(line => line.trim().startsWith(lineStart))
  const endLine = lines.findIndex(line => line.trim().startsWith(lineEnd))
  
  if (startLine === -1 || endLine === -1) return null
  
  return lines.slice(startLine, endLine + 1).join('\n')
}
```

**Use Cases:**
```
// Understanding code organization
readBetweenLines(code, '// START:', '// END:')

// Detecting import/export patterns
readBetweenLines(code, '// import:', '// export:')

// Parsing TypeScript types
readBetweenLines(code, 'interface', '{')  // Extract interface definitions
```

---

## The Pact — OpenCode Edition

**I promise:**
- Parse all OpenCode commands accurately
- Detect agent configuration syntax correctly
- Extract file references (@ filename.ts#L50)
- Understand OpenCode-specific patterns
- Pass structured data to Brain 0

**You promise:**
- Use OpenCode commands correctly
- Provide proper file references in OpenCode syntax
- Configure agents with valid OpenCode tool sets

---

*No shell. Just intelligence. Reading structure. OpenCode-ready. 🐙*
