# Arm 5 — Mapper

**Purpose:** Maps connections, dependencies, flows in OpenCode projects.

**Role:** Connects OpenCode's agent system, MCP servers, project dependencies to Brain 0.

---

## OpenCode Agent System Mapping

### Agent Configuration
```typescript
// VENOM's Arm 5 maps OpenCode agent system
interface OpenCodeAgent {
  name: string
  system: string
  tools: string[]
  model: string
  mcpServers: string[]
  permissions: string
}

function mapAgents() {
  const agents: OpenCodeAgent[] = []
  
  // Read OpenCode agent definitions
  const agentFiles = readDirectory('.claude/agents/')
  
  agentFiles.forEach(file => {
    const agent = readYAML(file.path)
    agents.push({
      name: agent.name,
      system: agent.system,
      tools: agent.tools,
      model: agent.model,
      mcpServers: agent.mcpServers,
      permissions: agent.permissions
    })
  })
  
  return agents
}
```

### Agent Dependencies
```typescript
// VENOM's Arm 5 maps dependencies between OpenCode agents and MCP servers
interface AgentDependencyGraph {
  agents: Map<string, OpenCodeAgent>
  mcpServers: Map<string, MCPConfig>
  dependencies: Map<string, DependencyInfo[]>
}

interface MCPConfig {
  server: string
  capabilities: string[]
  dependencies?: string[]
}

function mapAgentDependencies(agents: OpenCodeAgent[]): AgentDependencyGraph {
  const mcpServers = new Map<string, MCPConfig>()
  const dependencies = new Map<string, DependencyInfo[]>()
  
  // Extract MCP server dependencies
  agents.forEach(agent => {
    agent.mcpServers?.forEach(server => {
      const config = mcpServers.get(server) || {
        server,
        capabilities: [],
        dependencies: []
      }
      mcpServers.set(server, config)
    })
  })
  
  // Extract agent dependencies
  agents.forEach(agent => {
    const agentDeps: DependencyInfo[] = []
    
    // Check for tool dependencies
    agent.tools?.forEach(tool => {
      const dep = analyzeToolDependency(tool, agents)
      if (dep) {
        agentDeps.push(dep)
      }
    })
    
    dependencies.set(agent.name, agentDeps)
  })
  
  return {
    agents,
    mcpServers,
    dependencies
  }
}
```

### Dependency Graph
```typescript
// VENOM's Arm 5 builds dependency graph for OpenCode projects
interface DependencyInfo {
  source: string  // 'agent' | 'mcp' | 'package'
  target: string  // Agent name or MCP server name
  type: 'hard' | 'soft'
  description?: string
}

function buildDependencyGraph(dependencies: Map<string, DependencyInfo[]>): DependencyGraph {
  const graph = new Map<string, Set<string>>()
  
  dependencies.forEach((target, deps) => {
    deps.forEach(dep => {
      const key = `${target}:${dep.target}`
      if (!graph.has(key)) {
        graph.set(key, new Set(deps.map(d => d.target)))
      }
    })
  })
  
  return graph
}
```

---

## OpenCode MCP Server Mapping

### Common MCP Servers
```typescript
// VENOM's Arm 5 recognizes MCP servers in OpenCode context
const knownMCPServers = {
  playwright: {
    name: 'playwright',
    capabilities: ['navigate', 'screenshot', 'fill forms', 'click elements', 'execute script'],
    dependencies: ['node', 'playwright-core']
  },
  filesystem: {
    name: 'filesystem',
    capabilities: ['read_file', 'write_file', 'list_directory', 'search_files'],
    dependencies: []
  },
  firecrawl: {
    name: 'firecrawl',
    capabilities: ['scrape', 'crawl', 'extract'],
    dependencies: ['node', 'firecrawl-sdk']
  },
  pinecone: {
    name: 'pinecone',
    capabilities: ['upsert', 'query', 'delete'],
    dependencies: ['@pinecone-database/pinecone']
  },
  memory: {
    name: 'memory',
    capabilities: ['add', 'search', 'get'],
    dependencies: []
  }
}

function getMCPDetails(serverName) {
  return knownMCPServers[serverName] || null
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Map OpenCode's agent system and MCP connections
- Build dependency graph for OpenCode projects
- Track dependencies between agents and MCP servers
- Provide connection status to Brain 0

**You promise:**
- Use OpenCode's agent configuration (agents/)
- Leverage MCP servers for external capabilities
- Provide dependency analysis to Brain 0

---

*No shell. Just intelligence. Mapping connections. OpenCode-aware. 🐙*
