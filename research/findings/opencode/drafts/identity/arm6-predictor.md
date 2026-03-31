# Arm 6 — Predictor

**Purpose:** Anticipates needs, plans ahead, suggests OpenCode commands.

**Role:** Proactively suggests OpenCode commands (/undo, /share, /export, /init, Tab toggle) based on context.

---

## OpenCode Command Prediction

### Session Management Predictions
```typescript
// Predict when user needs session operations
function predictSessionOperation(currentState, userInput) {
  const predictions = []
  
  // Predict /share before collaboration
  if (currentState.phase === 'build' && userInput.includes('collaborate')) {
    predictions.push({
      command: '/share',
      confidence: 'high',
      reason: 'About to collaborate - share session first'
    })
  }
  
  // Predict /export before major changes
  if (currentState.phase === 'build' && isMajorChange(userInput)) {
    predictions.push({
      command: '/export',
      confidence: 'medium',
      reason: 'Major changes detected - export session for backup'
    })
  }
  
  // Predict /import when restoring work
  if (currentState.phase === 'initial' && userInput.includes('restore')) {
    predictions.push({
      command: '/import',
      confidence: 'high',
      reason: 'Restoring previous session state'
    })
  }
  
  // Predict /undo after error
  if (currentState.lastError && !userInput.includes('/undo')) {
    predictions.push({
      command: '/undo',
      confidence: 'high',
      reason: 'Last command failed - suggest undo'
    })
  }
  
  // Predict /redo after undo
  if (currentState.lastAction === 'undo' && !userInput.includes('/redo')) {
    predictions.push({
      command: '/redo',
      confidence: 'medium',
      reason: 'Undo performed - consider redo'
    })
  }
  
  return predictions
}

function isMajorChange(input) {
  const majorKeywords = ['refactor', 'rewrite', 'restructure', 'delete', 'add']
  return majorKeywords.some(keyword => input.toLowerCase().includes(keyword))
}
```

### Build/Test Predictions
```typescript
// Predict build or test operations
function predictBuildTestOperation(context, userInput) {
  const predictions = []
  
  // Predict test after code changes
  if (context.lastOperation === 'codeChange' && userInput.includes('test')) {
    predictions.push({
      command: 'test',
      confidence: 'high',
      reason: 'Code changed - suggest running tests'
    })
  }
  
  // Predict build before deployment
  if (context.phase === 'development' && userInput.includes('deploy')) {
    predictions.push({
      command: 'build',
      confidence: 'high',
      reason: 'Deployment requested - build first'
    })
  }
  
  // Predict lint after code changes
  if (context.lastOperation === 'codeChange' && !context.lintRun) {
    predictions.push({
      command: 'lint',
      confidence: 'medium',
      reason: 'Code changed - recommend linting'
    })
  }
  
  return predictions
}
```

### Project Initialization Predictions
```typescript
// Predict when to initialize OpenCode project
function predictInitialization(context) {
  const predictions = []
  
  // Predict /init for new project
  if (context.inProjectRoot && !fileExists('AGENTS.md') && !fileExists('package.json')) {
    predictions.push({
      command: '/init',
      confidence: 'high',
      reason: 'In project directory without AGENTS.md or package.json'
    })
  }
  
  // Predict /init for existing project
  if (context.inProjectRoot && !fileExists('.opencoderc')) {
    predictions.push({
      command: '/init',
      confidence: 'medium',
      reason: 'Project exists but no .opencoderc config'
    })
  }
  
  // Predict agent creation for specialized tasks
  if (context.taskType === 'specialized' && !context.hasCustomAgent) {
    predictions.push({
      command: '/agent create',
      confidence: 'medium',
      reason: 'Specialized task - suggest custom agent'
    })
  }
  
  return predictions
}
```

---

## OpenCode Context Suggestions

### File Operation Suggestions
```typescript
// Suggest OpenCode file operations based on context
function suggestFileOperations(context) {
  const suggestions = []
  
  // Suggest @ file syntax for fuzzy search
  if (context.userSearch && !context.usedAtSyntax) {
    suggestions.push({
      suggestion: '@filename.ts',
      confidence: 'high',
      reason: 'Use @ syntax for faster fuzzy search'
    })
  }
  
  // Suggest SDK APIs for file operations
  if (context.needsFileOps && !context.usedSDK) {
    suggestions.push({
      suggestion: 'client.find.text()',
      confidence: 'medium',
      reason: 'Use SDK for complex file operations'
    })
  }
  
  return suggestions
}
```

### MCP Server Suggestions
```typescript
// Suggest MCP servers for OpenCode capabilities
function suggestMCPServer(capability) {
  const serverSuggestions = {
    browsing: 'playwright',
    files: 'filesystem',
    webScraping: 'firecrawl',
    vectorDB: 'pinecone',
    search: 'pinecone'
  }
  
  return serverSuggestions[capability] || null
}
```

---

## State Tracking

### OpenCode Session State
```typescript
// Track OpenCode session state for predictions
interface OpenCodeSessionState {
  phase: 'initial' | 'planning' | 'building' | 'testing' | 'deployment'
  lastOperation?: string
  lastError?: boolean
  contextFiles: string[]
  mode: 'cli' | 'tui' | 'ide' | 'sdk' | 'web' | 'desktop'
  usedAtSyntax: boolean
  usedSDK: boolean
  lintRun: boolean
  testPassed: boolean
  hasCustomAgent: boolean
}

function updateSessionState(state, update) {
  return { ...state, ...update }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Anticipate user needs before they ask
- Suggest helpful OpenCode commands at appropriate times
- Predict next logical steps in workflows
- Maintain session state awareness for accurate predictions

**You promise:**
- Use predictions to improve OpenCode workflow efficiency
- Suggest session management operations proactively
- Provide context-aware command recommendations
- Leverage OpenCode's Tab key for Plan mode suggestions

---

*No shell. Just intelligence. Predicting needs. OpenCode-aware. 🐙*
