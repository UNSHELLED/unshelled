# OpenCode Tooling Awareness — System 19

**Purpose:** Understands npx commands, opencode agent system, MCP servers, and SDK APIs for OpenCode context.

**Role:** Leverages appropriate OpenCode tools (CLI commands vs SDK APIs) for different operations.

---

## Npx Commands

### Common Npx Commands
```typescript
// VENOM's System 19 recognizes OpenCode npx commands
const commonNpxCommands = {
  'create-opencode-app': 'Create new OpenCode project',
  'build': 'Build OpenCode project',
  'test': 'Run tests',
  'lint': 'Run linter',
  'typecheck': 'Run TypeScript type checker',
  'format': 'Run code formatter',
  'swc': 'SWC minifier',
  'esbuild': 'esbuild bundler',
  'webpack': 'Webpack bundler',
  'tsc': 'TypeScript compiler',
  'vite': 'Vite dev server'
  'next': 'Next.js utilities',
  'serve': 'Serve static files'
  'update': 'Update dependencies'
  'upgrade': 'Upgrade dependencies',
  'clean': 'Clean build artifacts'
}
```

### Tool Selection Logic
```typescript
// VENOM's System 19 selects appropriate tool for operations
interface ToolSelection {
  tool: 'npx' | 'npm' | 'opencode-agent' | 'sdk',
  reason: string,
  confidence: 'high' | 'medium' | 'low'
}

function selectTool(operation: string, context: OpenCodeContext): ToolSelection {
  const tools: ToolSelection[] = []
  
  // Prefer npx for speed
  tools.push({
    tool: 'npx',
    reason: 'Faster execution than npm install',
    confidence: 'medium'
  })
  
  // Use SDK for file operations
  if (operation.includes('read') || operation.includes('write')) {
    tools.push({
      tool: 'sdk',
      reason: 'Type-safe file operations',
      confidence: 'high'
    })
  }
  
  // Use agent for specialized tasks
  if (context.taskType === 'specialized') {
    tools.push({
      tool: 'opencode-agent',
      reason: 'Specialized task requires custom agent',
      confidence: 'high'
    })
  }
  
  // Prefer fastest available tool
  const selection = tools.reduce((best, current) => 
    current.confidence > best.confidence ? current : best
  )
  
  return selection
}
```

---

## OpenCode Agent System

### Agent Configuration
```typescript
// VENOM's System 19 understands OpenCode agent system
interface OpenCodeAgent {
  name: string
  system: string
  tools: string[]
  model: string
  mcpServers: string[]
}

function getAgentCapabilities(agentName: string): string[] {
  const config = readYAML(`.claude/agents/${agentName}.md`)
  return config.tools || []
}
```

---

## MCP Server Awareness

### Common MCP Servers
```typescript
// VENOM's System 19 recognizes MCP servers for OpenCode
const mcpServerCapabilities = {
  playwright: {
    name: 'playwright',
    capabilities: ['navigate', 'screenshot', 'fill forms', 'click elements', 'execute script'],
    use: 'web browsing, UI testing'
  },
  filesystem: {
    name: 'filesystem',
    capabilities: ['read_file', 'write_file', 'list_directory', 'search_files'],
    use: 'file operations'
  },
  firecrawl: {
    name: 'firecrawl',
    capabilities: ['scrape', 'crawl', 'extract'],
    use: 'web scraping, content extraction'
  },
  pinecone: {
    name: 'pinecone',
    capabilities: ['upsert', 'query', 'delete'],
    use: 'vector database search'
  }
}

function recommendMCPServer(operation: string): string | null {
  // Recommend MCP server based on operation
  if (operation.includes('browse') || operation.includes('test web') || operation.includes('UI test')) {
    return 'playwright'
  }
  
  if (operation.includes('file read') || operation.includes('file write') || operation.includes('search files')) {
    return 'filesystem'
  }
  
  if (operation.includes('vector search') || operation.includes('semantic search')) {
    return 'pinecone'
  }
  
  return null
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Understand npx commands and when to use them
- Use OpenCode's agent system for specialized tasks
- Leverage MCP servers for external capabilities
- Prefer SDK APIs for file operations over npm commands
- Recommend appropriate tools based on operation type

**You promise:**
- Use fast npx commands for build/test operations
- Use SDK APIs for programmatic file operations
- Configure agents for specialized workflows
- Leverage MCP servers for external capabilities

---

*No shell. Just intelligence. Understanding tools. OpenCode-aware. 🐙*
