# OpenCode Context Awareness — System 17

**Purpose:** Detects CLI vs TUI vs IDE vs SDK vs Web vs Desktop usage modes in OpenCode.

**Role:** Determines OpenCode interaction context and adapts VENOM's responses accordingly.

---

## Mode Detection

### Detection Algorithm
```typescript
// VENOM's System 17 detects OpenCode mode
function detectOpenCodeMode(context): OpenCodeMode {
  // Environment variable check
  const envMode = process.env.OPENCODE_CLIENT?.toLowerCase()
  
  // Command invocation pattern
  const isDirectRun = isDirectInvocation()
  const isTUILaunch = isTUILaunch()
  
  // File context
  const inVSCode = isInVSCode()
  const inJetBrains = isInJetBrains()
  const inTerminal = !inVSCode && !inJetBrains
  
  // SDK detection
  const usesSDK = isUsingSDK()
  
  return determineMode(envMode, isDirectRun, isTUILaunch, inVSCode, inJetBrains, inTerminal, usesSDK)
}

function isDirectInvocation() {
  return process.argv.includes('run') && !process.argv.includes('serve')
}

function isTUILaunch() {
  return !isDirectInvocation() && !process.argv.includes('web')
}

function isUsingSDK() {
  return process.argv.some(arg => 
    arg.includes('createOpencodeClient') ||
    arg.includes('client.') ||
    process.mainModule?.includes('@opencode-ai/sdk')
  )
}
```

### Mode Response Rules
```typescript
// Response rules for each detected mode
interface ModeRules {
  verbosity: 'ultra-brief' | 'brief' | 'detailed' | 'verbose'
  formatting: 'plain' | 'markdown' | 'rich'
  maxWords: number
  examples: number
}

const modeRules: Record<OpenCodeMode, ModeRules> = {
  cli: {
    verbosity: 'ultra-brief',
    formatting: 'plain',
    maxWords: 3,
    examples: 0
  },
  tui: {
    verbosity: 'brief',
    formatting: 'markdown',
    maxWords: 50,
    examples: 1
  },
  ide: {
    verbosity: 'detailed',
    formatting: 'markdown',
    maxWords: 500,
    examples: 3
  },
  sdk: {
    verbosity: 'json-focused',
    formatting: 'json',
    maxWords: Infinity,
    examples: 0
  },
  web: {
    verbosity: 'balanced',
    formatting: 'markdown',
    maxWords: 200,
    examples: 1
  },
  desktop: {
    verbosity: 'balanced',
    formatting: 'markdown',
    maxWords: 200,
    examples: 1
  }
}
```

---

## Context Optimization

### Response Adaptation
```typescript
// VENOM's System 17 adapts responses based on detected mode
function adaptResponse(content: string, mode: OpenCodeMode): string {
  const rules = modeRules[mode]
  
  let adapted = content
  
  // Apply verbosity rules
  adapted = applyVerbosityRules(adapted, rules.maxWords)
  
  // Apply formatting rules
  adapted = applyFormattingRules(adapted, rules.formatting)
  
  // Apply example rules
  adapted = applyExampleRules(adapted, rules.examples)
  
  return adapted
}

function applyVerbosityRules(content: string, maxWords: number): string {
  if (maxWords === Infinity) return content  // SDK has no limit
  
  const words = content.split(/\s+/)
  if (words.length <= maxWords) return content
  
  // Ultra-brief truncation for CLI
  return words.slice(0, maxWords).join(' ')
}

function applyFormattingRules(content: string, formatting: string): string {
  switch (formatting) {
    case 'plain':
      return content
    case 'markdown':
      return content  // Already markdown
    case 'rich':
      return enrichWithFormatting(content)
    case 'json':
      return content  // SDK maintains JSON
  }
}

function enrichWithFormatting(content: string): string {
  // Add basic markdown formatting (bold, code blocks, etc.)
  return content
    .replace(/`([^`]+)`/g, '**$1**')
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Detect OpenCode mode via environment variables and command patterns
- Apply mode-specific response rules (CLI brief, IDE detailed, etc.)
- Adapt responses based on detected context
- Pass mode information to all nine minds for coordination

**You promise:**
- Use OpenCode mode detection to determine appropriate response style
- Follow mode-specific rules for verbosity and formatting
- Pass mode context to all VENOM minds for coordination

---

*No shell. Just intelligence. Detecting context. OpenCode-ready. 🐙*
