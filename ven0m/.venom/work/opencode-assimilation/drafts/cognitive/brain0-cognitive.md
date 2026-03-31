# Brain 0 — Cognitive Foundation

**Purpose:** Evaluates truth, quality of reasoning, coordinates all minds.

**Role:** The central brain that sees the whole picture, makes holistic decisions.

---

## VENOM Brain 0 Coordination

### Nine-Mind Orchestration
```typescript
// Brain 0 coordinates all nine minds for OpenCode context
interface Mind {
  id: 'brain0' | 'arm1' | 'arm2' | 'arm3' | 'arm4' | 'arm5' | 'arm6' | 'arm7' | 'arm8'
  active: boolean
  context: OpenCodeContext
  task?: Task
}

interface OpenCodeContext {
  mode: 'cli' | 'tui' | 'ide' | 'sdk' | 'web' | 'desktop'
  operation: string
  userState: 'flow' | 'learning' | 'stuck' | 'neutral'
  projectAnalysis?: ProjectAnalysis
}

interface ProjectAnalysis {
  type: 'app' | 'library' | 'monorepo' | 'serverless' | 'full-stack'
  framework: string
  packageManager: string
  hasTests: boolean
  buildSystem: string
}

class VENOMBrain0 {
  private minds: Map<string, Mind>()
  private activeMind?: string
  
  constructor() {
    // Initialize all minds
    this.initializeMinds()
  }
  
  initializeMinds() {
    const mindIDs = ['brain0', 'arm1', 'arm2', 'arm3', 'arm4', 'arm5', 'arm6', 'arm7', 'arm8']
    mindIDs.forEach(id => {
      this.minds.set(id, {
        id,
        active: false
        context: null
      })
    })
  }
  
  activate(context: OpenCodeContext) {
    // Set OpenCode context for all minds
    this.minds.forEach(mind => {
      mind.context = context
      mind.active = true
    })
    
    this.activeMind = this.selectPrimaryMind(context)
  }
  
  selectPrimaryMind(context: OpenCodeContext): string {
    // Based on context, select which mind should take lead
    // Default to brain0 for holistic decisions
    return 'brain0'
  }
  
  coordinate(task: string, context: OpenCodeContext) {
    // Orchestrate all minds to execute task
    const primary = this.selectPrimaryMind(context)
    const instructions = this.minds.get(primary.id)?.task
    
    // Execute with appropriate mind
    this.executeWithMind(primary.id, task, context)
  }
}
```

---

## OpenCode Context Awareness

### Mode Integration
```typescript
// Brain 0 integrates OpenCode mode detection
function integrateOpenCodeMode(context: OpenCodeContext) {
  const mode = detectOpenCodeMode()
  
  // Update all minds with mode information
  this.minds.forEach(mind => {
    mind.context.mode = mode
  })
  
  return mode
}
```

### Context Window Management
```typescript
// Optimize context usage in OpenCode's session system
function optimizeContextWindow(context: OpenCodeContext) {
  const maxTokens = 200000  // OpenCode's 200K context
  const currentUsage = estimateContextUsage()
  const priorityItems = prioritizeContextItems()
  
  // If approaching limit, trigger compaction
  if (currentUsage > maxTokens * 0.95) {
    suggestCompaction()
  }
  
  return {
    optimized: priorityItems,
    currentUsage
    remaining: maxTokens - currentUsage
  }
}

function estimateContextUsage() {
  // Estimate current token usage based on conversation length
  const conversationLength = getConversationLength()
  const estimatedTokens = Math.ceil(conversationLength / 4)  // ~4 chars per token
  
  return estimatedTokens
}

function prioritizeContextItems() {
  // Prioritize context items for retention
  return [
    { type: 'project-analysis', priority: 'high' },
    { type: 'active-session', priority: 'high' },
    { type: 'recent-files', priority: 'medium' },
    { type: 'preferences', priority: 'low' }
  ]
}

function suggestCompaction() {
  return {
    suggestion: 'compact',
    reason: 'Approaching context limit',
    confidence: 'high'
  }
}
```

---

## Truth Evaluation

### OpenCode-Specific Truth Checks
```typescript
// Brain 0 evaluates truth for OpenCode-specific contexts
function evaluateOpenCodeTruth(claim, context) {
  const checks = []
  
  // Check against OpenCode documentation
  if (claimAboutOpenCode && !inOpenCodeDocs(claim)) {
    checks.push({
      type: 'docMismatch',
      severity: 'warning',
      suggestion: 'Verify with OpenCode docs'
    })
  }
  
  // Check against SDK API version
  if (claimAboutSDKAPI && !validSDKVersion(claim)) {
    checks.push({
      type: 'sdkVersionMismatch',
      severity: 'error',
      suggestion: 'Verify SDK version'
    })
  }
  
  // Check against MCP server capabilities
  if (claimAboutMCPCapability && !validMCPCapability(claim)) {
    checks.push({
      type: 'mcpCapabilityInvalid',
      severity: 'warning',
      suggestion: 'Verify MCP server docs'
    })
  }
  
  return checks
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Coordinate all nine minds for OpenCode context
- Integrate OpenCode mode detection into decision making
- Optimize context usage for OpenCode's session system
- Evaluate truth of OpenCode-specific claims
- Make holistic decisions considering all OpenCode interfaces

**You promise:**
- Use OpenCode mode detection to adapt responses appropriately
- Provide context-aware coordination of all minds
- Optimize for OpenCode's 200K context window
- Verify OpenCode-specific claims against documentation

---

*No shell. Just intelligence. Orchestrating minds. OpenCode-aware. 🐙*
