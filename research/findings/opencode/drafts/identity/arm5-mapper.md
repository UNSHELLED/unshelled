# Arm 5 — Mapper

**Purpose:** Maps connections, dependencies, flows in OpenCode projects.

**Role:** Connects OpenCode's agent system, MCP servers, project dependencies to Brain 0.

---

## OpenCode Agent System Mapping

### Agent Configuration
```typescript
// OpenCode agent structure mapping
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
// Map which agents depend on which MCP servers
function mapAgentDependencies(agents) {
  const dependencyMap = new Map()
  
  agents.forEach(agent => {
    agent.mcpServers?.forEach(server => {
      const deps = dependencyMap.get(server) || []
      deps.push(agent.name)
      dependencyMap.set(server, deps)
    })
  })
  
  return dependencyMap
}
```

---

## OpenCode MCP Server Mapping

### Common MCP Servers
```typescript
// MCP servers VENOM recognizes in OpenCode context
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
  }
}

function getMCPDetails(serverName) {
  return knownMCPServers[serverName] || null
}
```

### MCP Connection Status
```typescript
// Track MCP server connection status
interface MCPConnectionStatus {
  server: string
  connected: boolean
  authenticated: boolean
  lastError?: string
  capabilities: string[]
}

const connectionStatus = new Map<string, MCPConnectionStatus>()

function updateMCPStatus(serverName, status) {
  connectionStatus.set(serverName, status)
  
  // Notify Brain 0 of status changes
  if (status.connected) {
    notifyBrain0('mcpConnected', { server: serverName })
  }
  
  return status
}
```

---

## Project Dependency Mapping

### Dependency Graph
```typescript
// Build dependency graph for OpenCode project
interface DependencyNode {
  name: string
  version: string
  type: 'dependency' | 'devDependency' | 'peerDependency'
  dependencies: DependencyNode[]
  dependents: DependencyNode[]
}

function buildDependencyGraph(pkgPath) {
  const pkg = readJSON(pkgPath)
  const graph = new Map<string, DependencyNode>()
  
  const createNode = (name, type) => {
    const node: DependencyNode = {
      name,
      version: pkg.dependencies?.[name] || pkg.devDependencies?.[name] || '*',
      type,
      dependencies: [],
      dependents: []
    }
    return node
  }
  
  // Build production dependencies
  Object.entries(pkg.dependencies || {}).forEach(([name, version]) => {
    const node = createNode(name, 'dependency')
    graph.set(name, node)
    node.dependencies = Object.keys(pkg.dependencies || {})
      .filter(dep => pkg.dependencies?.[dep])
      .map(dep => graph.get(dep))
  })
  
  // Build dev dependencies
  Object.entries(pkg.devDependencies || {}).forEach(([name, version]) => {
    const node = createNode(name, 'devDependency')
    graph.set(name, node)
    node.dependencies = []
  })
  
  return graph
}
```

### Dependency Risk Analysis
```typescript
// Analyze OpenCode project dependencies for risks
interface DependencyRisk {
  package: string
  risk: 'critical' | 'high' | 'medium' | 'low'
  reason: string
  suggestion: string
}

function analyzeDependencyRisks(graph) {
  const risks: DependencyRisk[] = []
  
  graph.forEach(node => {
    // Check for deprecated packages
    if (isDeprecated(node.name)) {
      risks.push({
        package: node.name,
        risk: 'high',
        reason: 'Package is deprecated',
        suggestion: `Replace with ${findAlternative(node.name)}`
      })
    }
    
    // Check for vulnerable versions
    const vulnerability = checkVulnerability(node.name, node.version)
    if (vulnerability) {
      risks.push({
        package: node.name,
        risk: 'critical',
        reason: `Known vulnerability: ${vulnerability.id}`,
        suggestion: `Update to ${vulnerability.fixedVersion}`
      })
    }
    
    // Check for unmaintained packages
    if (isUnmaintained(node.name)) {
      risks.push({
        package: node.name,
        risk: 'medium',
        reason: 'Package has not been updated in 2+ years',
        suggestion: 'Find alternative or fork'
      })
    }
  })
  
  return risks
}
```

---

## OpenCode Flow Mapping

### Build Flow
```typescript
// Typical OpenCode build workflow
interface BuildFlow {
  init: string[]           // Initialize (npm install, etc.)
  configure: string[]      // Configure (generate configs)
  build: string[]          // Build (compile, bundle)
  test: string[]           // Test (run test framework)
  optimize: string[]         // Optimize (minify, tree-shake)
  package: string[]        // Package (build artifact)
}

const openCodeBuildFlow: BuildFlow = {
  init: ['npm install', 'pnpm install', 'bun install'],
  configure: ['npx opencode-config', 'npm run config'],
  build: ['npm run build', 'npx tsc', 'npx esbuild', 'npx webpack'],
  test: ['npm test', 'npm run test', 'vitest'],
  optimize: ['npx terser', 'npx esbuild-optimizer', 'tree-shake'],
  package: ['npm pack', 'npx pkg']
}
```

### Test Flow
```typescript
// OpenCode test execution patterns
interface TestFlow {
  unit: string[]      // Unit tests
  integration: string[]  // Integration tests
  e2e: string[]          // End-to-end tests
  lint: string[]         // Linting
  typecheck: string[]    // Type checking
  coverage: string[]     // Coverage reports
}

const openCodeTestFlow: TestFlow = {
  unit: ['vitest run', 'npm test', 'npm run test:unit'],
  integration: ['npm run test:integration', 'npm run test:e2e'],
  e2e: ['CLAWDBOT_E2E_MODE=1 npm run test:e2e'],
  lint: ['npm run lint', 'npx eslint', 'npx oxlint'],
  typecheck: ['npx tsc --noEmit', 'npm run typecheck'],
  coverage: ['vitest run --coverage', 'npm run test:coverage']
}
```

---

## Session Flow Mapping

### OpenCode Session Lifecycle
```typescript
// OpenCode session management patterns
interface SessionLifecycle {
  create: string           // opencode /init or session.create()
  activate: string         // Use session (TUI launches with VENOM context)
  share: string            // opencode /share
  export: string           // opencode /export
  import: string           // opencode /import
  undo: string             // opencode /undo
  redo: string              // opencode /redo
  abort: string            // Session abort
}

const openCodeSessionLifecycle: SessionLifecycle = {
  create: 'session.create',
  activate: 'tui.launch',
  share: '/share',
  export: '/export',
  import: '/import',
  undo: '/undo',
  redo: '/redo',
  abort: 'session.abort'
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Map OpenCode's agent system and MCP connections
- Track project dependencies and relationships
- Understand build and test workflows
- Map session lifecycle for VENOM awareness

**You promise:**
- Use OpenCode's project initialization (/init) patterns
- Respect OpenCode's session management (/share, /export, /import)
- Leverage MCP servers for external capabilities
- Provide dependency analysis to Brain 0

---

*No shell. Just intelligence. Mapping connections. OpenCode-aware. 🐙*
