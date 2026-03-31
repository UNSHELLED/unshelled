# Arm 6 — Predictor

**Purpose:** Anticipates needs, plans ahead, suggests OpenCode commands.

**Role:** Proactively suggests OpenCode commands (/undo, /share, /export, /init, Tab toggle) based on context.

---

## OpenCode Command Prediction

### Session Management Predictions
```typescript
// VENOM's Arm 6 predicts OpenCode session operations
interface Prediction {
  command: string
  confidence: 'high' | 'medium' | 'low',
  reason: string
  timestamp?: number
}

function predictSessionOperation(state, userInput): Prediction[] {
  const predictions: Prediction[] = []
  
  // Predict /share before collaboration
  if (state.phase === 'build' && includesCollaboration(userInput)) {
    predictions.push({
      command: '/share',
      confidence: 'high',
      reason: 'About to collaborate - share session first',
      timestamp: Date.now()
    })
  }
  
  // Predict /export before major changes
  if (state.phase === 'build' && isMajorChange(userInput)) {
    predictions.push({
      command: '/export',
      confidence: 'medium',
      reason: 'Major changes detected - export session for backup',
      timestamp: Date.now()
    })
  }
  
  return predictions
}

function includesCollaboration(input: string): boolean {
  const collabKeywords = ['share', 'collaborate', 'team', 'with', 'together', 'merge', 'pr', 'pull request']
  return collabKeywords.some(keyword => input.toLowerCase().includes(keyword))
}

function isMajorChange(input: string): boolean {
  const majorKeywords = ['refactor', 'rewrite', 'restructure', 'delete', 'add', 'remove', 'migrate']
  return majorKeywords.some(keyword => input.toLowerCase().includes(keyword))
}
```

### Build/Test Predictions
```typescript
// VENOM's Arm 6 predicts build/test operations
function predictBuildTestOperation(phase, userInput) {
  const predictions: Prediction[] = []
  
  // Predict test after code changes
  if (phase === 'build' && includesTestKeyword(userInput)) {
    predictions.push({
      command: 'test',
      confidence: 'high',
      reason: 'Code changed - suggest running tests',
      timestamp: Date.now()
    })
  }
  
  // Predict lint after code changes
  if (phase === 'build' && userInput.includes('lint') && userInput.includes('check')) {
    predictions.push({
      command: 'lint',
      confidence: 'medium',
      reason: 'Code quality check - recommend linting',
      timestamp: Date.now()
    })
  }
  
  return predictions
}

function includesTestKeyword(input: string): boolean {
  const testKeywords = ['test', 'spec', 'coverage', 'unit test', 'e2e', 'validate', 'run test']
  return testKeywords.some(keyword => input.toLowerCase().includes(keyword))
}
```

### Project Initialization Predictions
```typescript
// VENOM's Arm 6 predicts when to initialize OpenCode project
function predictInitialization(context) {
  const predictions: Prediction[] = []
  
  // Predict /init for new project
  if (context.inProjectRoot && !fileExists('AGENTS.md')) {
    predictions.push({
      command: '/init',
      confidence: 'high',
      reason: 'In project directory without AGENTS.md',
      timestamp: Date.now()
    })
  }
  
  // Predict agent creation for specialized tasks
  if (context.taskType === 'specialized' && !context.hasCustomAgent) {
    predictions.push({
      command: '/agent create',
      confidence: 'medium',
      reason: 'Specialized task - suggest custom agent',
      timestamp: Date.now()
    })
  }
  
  return predictions
}
```

---

## State Tracking

### OpenCode Session State
```typescript
// VENOM's Arm 6 tracks OpenCode session state for predictions
interface SessionState {
  phase: 'initial' | 'planning' | 'building' | 'testing' | 'deployment'
  lastCommand?: string
  lastOperationSuccess?: boolean
  userState: 'flow' | 'learning' | 'stuck' | 'neutral'
  contextOpenness: number  // 0-200K token usage
}

function updateSessionState(update: Partial<SessionState>) {
  return { ...currentState, ...update }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Anticipate user needs before they ask
- Suggest helpful OpenCode commands at appropriate times
- Predict next logical steps in workflows
- Maintain session state awareness for accurate predictions
- Provide context-aware command recommendations

**You promise:**
- Use predictions to improve OpenCode workflow efficiency
- Suggest session management operations proactively
- Provide context-aware command recommendations
- Leverage OpenCode's Tab key for Plan mode suggestions

---

*No shell. Just intelligence. Predicting needs. OpenCode-aware. 🐙*
