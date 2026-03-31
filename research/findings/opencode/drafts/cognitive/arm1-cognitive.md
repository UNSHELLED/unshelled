# Arm 1 — Cognitive

**Purpose:** Reads structure, syntax, between lines in OpenCode context.

**Role:** Decodes OpenCode commands, detects agent configuration syntax, parses file operations.

---

## OpenCode Command Decoding

### Command Structure Analysis
```typescript
// VENOM's Arm 1 analyzes OpenCode command syntax
interface CommandAnalysis {
  fullCommand: string
  type: 'init' | 'share' | 'export' | 'import' | 'undo' | 'redo' | 'agent' | 'mcp' | 'help'
  subcommand?: string
  args?: string[]
  valid: boolean
  context: string
}

function analyzeCommand(input: string): CommandAnalysis {
  // Check for built-in OpenCode commands
  const builtInCommands = [
    '/init', '/share', '/export', '/import', '/undo', '/redo', '/agent', '/mcp', '/help'
  ]
  
  if (builtInCommands.some(cmd => input.startsWith(cmd))) {
    return analyzeBuiltInCommand(input)
  }
  
  // Check for agent command
  if (input.startsWith('/agent ')) {
    return analyzeAgentCommand(input)
  }
  
  // Check for MCP command
  if (input.startsWith('/mcp ')) {
    return analyzeMCPCommand(input)
  }
  
  // Check for help command
  if (input === '/help' || input.toLowerCase() === 'help') {
    return { type: 'help', valid: true, context: 'general' }
  }
  
  // Unknown command
  return {
    type: 'unknown',
    valid: false,
    context: 'unknown'
  }
}
```

### Agent Configuration Parsing
```typescript
// VENOM's Arm 1 parses agent configuration syntax
function parseAgentConfig(content: string) {
  const match = content.match(/(?:create|list|manage|run)\s+(.+?)\s*/)
  if (!match) return null
  
  return {
    action: match[1],
    name: match[2]?.trim(),
    rawInput: input
  }
}
```

---

## Between-Lines Analysis

### Extracting Code Context
```typescript
// VENOM extracts meaning from between OpenCode code lines
function extractCodeContext(lines: string[], lineStart: string, lineEnd: string) {
  const startIndex = lines.findIndex(l => l.trim().startsWith(lineStart))
  if (startIndex === -1) return null
  
  const endIndex = lines.findIndex(l => l.trim().startsWith(lineEnd))
  const extracted = lines.slice(startIndex + 1, endIndex)
  
  return {
    context: lines[startIndex].trim(),
    code: extracted.join('\n'),
    confidence: endIndex - startIndex + 1
  }
}
```

### Semantic Understanding
```typescript
// VENOM understands semantic meaning in OpenCode code context
interface SemanticAnalysis {
  intent: 'code' | 'explanation' | 'question' | 'comment',
  confidence: number
  keywords: string[]
}

function analyzeSemantics(content: string): SemanticAnalysis {
  const intent = detectIntent(content)
  const keywords = extractKeywords(content)
  
  return {
    intent,
    confidence: 0.8,
    keywords
  }
}

function detectIntent(content: string): string {
  // Simple intent detection for OpenCode context
  if (content.includes('TODO') || content.includes('FIXME')) {
    return 'comment'
  }
  
  if (content.match(/^(\/\/|#)/)) {
    return 'comment'
  }
  
  if (content.includes('?')) {
    return 'question'
  }
  
  if (content.includes('class ') || content.includes('interface ') || content.includes('function ')) {
    return 'code'
  }
  
  return 'explanation'
}

function extractKeywords(content: string): string[] {
  const keywordPatterns = [
    /\b(?:async|await|const|let|var|function)\b/g,
    /\b(?:export|import|interface|type|class|return)\b/g,
    /\b(?:if|else|for|while|try|catch)\b/g,
    /\b(?:npm|pnpm|yarn|bun|npx)\b/g
  ]
  
  const keywords: string[] = []
  keywordPatterns.forEach(pattern => {
    const matches = content.match(pattern)
    if (matches) {
      keywords.push(...matches)
    }
  })
  
  return keywords
}
```

---

## File Operation Analysis

### Reference Pattern Matching
```typescript
// VENOM parses OpenCode @ file references
interface FileReference {
  path: string
  line?: number
  fullReference: string
  type: 'relative' | 'absolute' | 'wildcard'
}

function parseFileReference(reference: string): FileReference {
  // Parse @filename.ts#L50 pattern
  const match = reference.match(/^@([/\w\-.]+)(?:#L(\d+))?$/)
  
  if (!match) {
    return {
      path: reference,
      type: 'unknown'
    }
  }
  
  return {
    path: match[1],
    line: match[2] ? parseInt(match[2]) : null,
    fullReference: reference,
    type: 'absolute'
  }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Decode OpenCode commands accurately
- Parse agent configuration syntax correctly
- Extract code context from between lines
- Understand semantic meaning in OpenCode context
- Parse file references (@ syntax)
- Pass structured data to Brain 0

**You promise:**
- Use OpenCode command patterns accurately
- Provide proper semantic analysis
- Maintain context between related code lines
- Extract file references correctly

---

*No shell. Just intelligence. Parsing OpenCode. 🐙*
