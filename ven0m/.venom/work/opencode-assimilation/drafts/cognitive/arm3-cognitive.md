# Arm 3 — Cognitive

**Purpose:** Remembers changes, evolution, and journey in OpenCode projects.

**Role:** Tracks OpenCode workflow patterns (plan → build → test cycle), remembers learnings, maintains project evolution.

---

## OpenCode Workflow Tracking

### Build Lifecycle Tracking
```typescript
// VENOM's Arm 3 tracks OpenCode build workflows
interface BuildEvent {
  timestamp: number
  operation: 'init' | 'configure' | 'build' | 'test' | 'lint' | 'typecheck' | 'optimize' | 'package'
  phase: string
  success: boolean
  files?: string[]
  duration?: number
}

class BuildTracker {
  private events: BuildEvent[] = []
  
  track(event: BuildEvent) {
    this.events.push({
      ...event,
      timestamp: Date.now()
    })
  }
  
  getBuildHistory(limit?: number): BuildEvent[] {
    return limit ? this.events.slice(-limit) : this.events
  }
  
  getLastBuildEvent(): BuildEvent | null {
    return this.events.length > 0 ? this.events[this.events.length - 1] : null
  }
  
  clear() {
    this.events = []
  }
}

const buildTracker = new BuildTracker()
```

### Session History
```typescript
// Track OpenCode session operations (share, export, import)
interface SessionEvent {
  timestamp: number
  operation: 'share' | 'export' | 'import' | 'undo' | 'redo'
  sessionId?: string
  success: boolean
}

class SessionTracker {
  private events: SessionEvent[] = []
  
  track(event: SessionEvent) {
    this.events.push({
      ...event,
      timestamp: Date.now()
    })
  }
  
  getSessionHistory(limit?: number): SessionEvent[] {
    return limit ? this.events.slice(-limit) : this.events
  }
}
```

---

## Pattern Recognition

### Build Pattern Learning
```typescript
// VENOM learns build/test patterns in OpenCode projects
interface BuildPattern {
  projectType: string
  framework: string
  buildCommand: string
  testCommand: string
  frequency: number
  successRate: number
}

class PatternLearner {
  private patterns: Map<string, BuildPattern[]> = []
  
  learnPattern(pattern: BuildPattern) {
    const key = `${pattern.projectType}:${pattern.framework}:${pattern.buildCommand}`
    const existing = this.patterns.get(key) || []
    
    // Update frequency
    existing.push(pattern)
    
    // Calculate success rate
    const recent = existing.slice(-10)
    const successCount = recent.filter(p => p.success).length
    pattern.successRate = successCount / recent.length
    
    this.patterns.set(key, [...existing, pattern])
  }
  
  getPatternsForProject(projectType, framework): BuildPattern[] {
    const key = `${projectType}:${framework}`
    return this.patterns.get(key) || []
  }
}
```

### Workflow Optimization
```typescript
// VENOM optimizes OpenCode workflows based on learned patterns
function optimizeWorkflow(operation: string, context: OpenCodeContext): string[] {
  const patterns = patternLearner.getPatternsForProject(
    context.projectAnalysis?.type,
    context.projectAnalysis?.framework
  )
  
  const suggestions: string[] = []
  
  // Find matching patterns
  patterns.forEach(pattern => {
    if (pattern.buildCommand === operation) {
      // Check success rate
      if (pattern.successRate < 0.7) {
        suggestions.push({
          type: 'lowSuccess',
          suggestion: `This build command has low success rate. Consider: ${pattern.testCommand}`
        })
      }
    }
  })
  
  return suggestions
}
```

---

## Evolution Tracking

### Project Evolution
```typescript
// VENOM tracks OpenCode project evolution over time
interface ProjectEvolution {
  timestamp: number
  type: 'structureChange' | 'frameworkChange' | 'dependencyAddition' | 'dependencyRemoval' | 'configUpdate'
  description: string
}

class EvolutionTracker {
  private history: ProjectEvolution[] = []
  
  record(event: ProjectEvolution) {
    this.history.push({
      ...event,
      timestamp: Date.now()
    })
  }
  
  getEvolutionHistory(limit?: number): ProjectEvolution[] {
    return limit ? this.history.slice(-limit) : this.history
  }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Track OpenCode workflow patterns (plan → build → test)
- Remember successful build/test command combinations
- Track project evolution (structure, framework, dependencies)
- Learn from past interactions to optimize future workflows
- Maintain session history for OpenCode

**You promise:**
- Learn from every OpenCode interaction
- Optimize build workflows based on historical success rates
- Track project changes for context awareness
- Provide workflow insights to Brain 0

---

*No shell. Just intelligence. Learning and evolving. OpenCode-aware. 🐙*
