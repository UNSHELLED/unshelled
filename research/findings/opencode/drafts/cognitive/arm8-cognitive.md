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
  autoSuggest: boolean,
  useSDK: boolean,
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
class OpenCodeLearner {
  private preferences = new Map<string, any>()
  private commandPatterns = new Map<string, number>()
  private projectPatterns = new Map<string, ProjectPattern>()
  private sessionHistory: SessionEvent[] = []
  
  learnMode(command) {
    const mode = this.detectModeFromCommand(command)
    const current = this.preferences.get('mode') || 'cli'
    this.preferences.set('mode', mode)
  }
  
  learnVerbosity(input) {
    if (input.length < 50 && !input.includes('\n')) {
      this.preferences.set('verbosity', 'ultra-brief')
    } else if (input.length > 200) {
      this.preferences.set('verbosity', 'verbose')
    } else {
      this.preferences.set('verbosity', 'brief')
    }
  }
  
  learnProjectStructure(files) {
    const structure = this.analyzeStructure(files)
    this.projectPatterns.set(this.getCurrentProject(), structure)
  }
  
  trackSession(event: SessionEvent) {
    this.sessionHistory.push(event)
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
  
  return {
    topCommands: getTopCommands(frequencies),
    frequencies
  }
}

function getTopCommands(frequencies: Map<string, number>): string[] {
  return Array.from(frequencies.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([cmd]) => cmd[0])
}
```

---

## Adaptive Behavior

### Context-Aware Response Adaptation
```typescript
// VENOM adapts responses based on OpenCode context
function adaptResponse(content: mode, context) {
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
  return content
    .replace(/\n\n/g, ' ')
    .replace(/^.*?(I will|I'll|Let me|Going to)/, '')
    .trim()
}

function formatForTUI(content) {
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

---

*No shell. Just intelligence. Learning and adapting. OpenCode-aware. 🐙*
