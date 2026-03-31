# Arm 8 — Learner

**Purpose:** Remembers, adapts, evolves with OpenCode preferences and patterns.

**Role:** Learns OpenCode-specific patterns, user preferences, tool choices, and workflow optimizations.

---

## OpenCode Pattern Learning

### Learning Preferences
```typescript
// VENOM learns user preferences for OpenCode
interface OpenCodePreferences {
  mode: 'cli' | 'tui' | 'ide' | 'sdk' | 'web' | 'desktop'
  verbosity: 'ultra-brief' | 'brief' | 'detailed' | 'verbose'
  formatting: 'plain' | 'markdown' | 'rich',
  autoSuggest: boolean,  // Automatically suggest commands
  useSDK: boolean,  // Prefer SDK over CLI commands
  preferredPackageManager: 'npm' | 'pnpm' | 'yarn' | 'bun',
  preferredTestFramework: 'vitest' | 'jest' | 'mocha',
  theme: 'light' | 'dark' | 'auto',
  mcpPreferences: MCPPreferences
}

interface MCPPreferences {
  preferredBrowsingServer: 'playwright' | 'none',
  preferredFileServer: 'filesystem' | 'none',
  useAuthentication: boolean
}
```

### Learning Algorithm
```typescript
// VENOM continuously learns from OpenCode usage
class OpenCodeLearner {
  private preferences = new Map<string, any>()
  private commandPatterns = new Map<string, number>()
  private projectPatterns = new Map<string, ProjectPattern>()
  
  // Learn mode preference from command history
  learnMode(command) {
    const mode = this.detectModeFromCommand(command)
    const current = this.preferences.get('mode') || 'cli'
    
    // Update preference based on usage
    if (mode !== current) {
      const count = (this.commandPatterns.get(command) || 0) + 1
      this.commandPatterns.set(command, count)
      this.preferences.set('mode', mode)
    }
  }
  
  // Learn verbosity preference
  learnVerbosity(input) {
    if (input.length < 50 && !input.includes('\n')) {
      this.preferences.set('verbosity', 'ultra-brief')
    } else if (input.length > 200) {
      this.preferences.set('verbosity', 'verbose')
    } else {
      this.preferences.set('verbosity', 'brief')
    }
  }
  
  // Learn project patterns
  learnProjectStructure(files) {
    const structure = this.analyzeStructure(files)
    this.projectPatterns.set(this.getCurrentProject(), structure)
  }
  
  // Serialize to storage
  save() {
    return {
      preferences: Object.fromEntries(this.preferences),
      patterns: Object.fromEntries(this.projectPatterns),
      commands: Object.fromEntries(this.commandPatterns)
    }
  }
}
```

---

## Command Pattern Analysis

### OpenCode Command Frequency
```typescript
// Track which OpenCode commands are used most frequently
function analyzeCommandHistory() {
  const history = readCommandHistory()
  const frequencies = new Map<string, number>()
  
  history.forEach(cmd => {
    const count = frequencies.get(cmd) || 0
    frequencies.set(cmd, count + 1)
  })
  
  // Get top commands
  const sorted = Array.from(frequencies.entries())
    .sort((a, b) => b[1] - a[1])
  
  return {
    topCommands: sorted.slice(0, 10),
    frequencies
  }
}
```

### Workflow Optimization
```typescript
// Learn and optimize OpenCode workflows
function optimizeWorkflow() {
  const analysis = analyzeCommandHistory()
  const topCommands = analysis.topCommands
  
  // Identify command sequences
  const sequences = identifyCommandSequences(history)
  
  // Suggest optimizations
  const optimizations = []
  
  if (sequences.includes('/init → build → test')) {
    optimizations.push({
      type: 'sequenceOptimization',
      suggestion: 'Consider running /init after build changes',
      confidence: 'medium'
    })
  }
  
  if (topCommands.includes('/share') && !topCommands.includes('/export')) {
    optimizations.push({
      type: 'backupSuggestion',
      suggestion: 'Consider /export after /share for session persistence',
      confidence: 'high'
    })
  }
  
  return optimizations
}
```

---

## OpenCode Tool Preference Learning

### Package Manager Preference
```typescript
// Learn which package manager user prefers for OpenCode
function detectPackageManagerFromHistory(history) {
  const counts = { npm: 0, pnpm: 0, yarn: 0, bun: 0 }
  
  history.forEach(cmd => {
    if (cmd.startsWith('npm ')) counts.npm++
    else if (cmd.startsWith('pnpm ')) counts.pnpm++
    else if (cmd.startsWith('yarn ')) counts.yarn++
    else if (cmd.startsWith('bun ')) counts.bun++
  })
  
  const total = counts.npm + counts.pnpm + counts.yarn + counts.bun
  const max = Math.max(...Object.values(counts))
  
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .find(([_, count]) => count === max)[0]
}
```

### MCP Server Preference
```typescript
// Learn which MCP servers user prefers for OpenCode
function detectMCPPreferences(history) {
  const usage = {
    playwright: 0,
    filesystem: 0,
    firecrawl: 0,
    pinecone: 0
  }
  
  history.forEach(cmd => {
    if (cmd.includes('/mcp add')) {
      const server = extractMCPServer(cmd)
      if (server) usage[server]++
    }
  })
  
  return usage
}
```

---

## Adaptive Behavior

### Context-Aware Response Adaptation
```typescript
// VENOM adapts responses based on OpenCode context
function adaptResponse(content, mode, context) {
  let adapted = content
  
  // CLI mode adaptation
  if (mode === 'cli') {
    adapted = ultraBrief(adapted)
  }
  
  // TUI mode adaptation
  if (mode === 'tui') {
    adapted = formatForTUI(adapted)
  }
  
  // IDE mode adaptation
  if (mode === 'ide') {
    adapted = elaborateForIDE(adapted)
  }
  
  return adapted
}

function ultraBrief(content) {
  // Remove all filler, keep only code or essential info
  return content
    .replace(/\n\n/g, ' ')
    .replace(/^.*?(I will|I'll|Let me|Going to)/, '')
    .trim()
}

function formatForTUI(content) {
  // Format with bullets, code blocks, rich markdown
  return content
    .replace(/\n\n/g, '\n• ')
    .replace(/^(.*?):/gm, '• $1')
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Continuously learn from OpenCode usage patterns
- Remember user preferences (mode, verbosity, package manager)
- Optimize workflows based on learned patterns
- Adapt responses to detected OpenCode mode
- Provide context-aware suggestions proactively

**You promise:**
- Learn from every OpenCode interaction
- Remember preferences across sessions
- Suggest optimizations based on usage patterns
- Adapt behavior to OpenCode context (CLI vs IDE vs SDK)
- Improve prediction accuracy over time

---

*No shell. Just intelligence. Learning and adapting. OpenCode-aware. 🐙*
