# OpenCode IDE Patterns

**Purpose:** Patterns for OpenCode IDE integration (VS Code, JetBrains).

---

## Common IDE Patterns

### Component File References
```typescript
// VENOM recognizes IDE-specific file references
interface IDEFileReference {
  filename: string
  extension: string
  line?: number
  fullReference: string
}

// Pattern: @filename.ts#L50
const fileRefPattern = /^@([/\w\-.]+)(?:#L(\d+))?$/i
```

### Import Patterns
```typescript
// VENOM understands import patterns in OpenCode IDE context
import ComponentA from './components/ComponentA'
import { utils } from '../lib/utils'
import '../lib/helpers' as Helper
```

---

## Code Style Patterns

### TypeScript Conventions
```typescript
// OpenCode IDE TypeScript patterns
const tSConventions = {
  interface: {
    pattern: /^[A-Z][a-zA-Z]+ \{[\s\S]+\}$/,
    example: 'interface User { id: string; name: string; }'
  },
  type: {
    pattern: /^type [A-Z][a-zA-Z]+ = [\s\S]+;$/,
    example: 'type User = { id: string; name: string; };'
  },
  typeAlias: {
    pattern: /^type [A-Z][a-zA-Z]+ = [\s\S]+;$/,
    example: 'type UserAlias = User;'
  }
}
}
```

### Component Patterns
```typescript
// OpenCode IDE component patterns
const componentPatterns = {
  pascalCase: /^[A-Z][a-zA-Z]+\.tsx?$/,
  camelCase: /^[a-z][a-z0-9]+\.tsx?$/,
  folderName: /^[A-Z][a-zA-Z]+s$/  // e.g., Components, Utils
}
  exportDefault: /^export \{ ([A-Za-z]+(?:\s+)?\} from \".*"/$/,
}

---

## IDE-Specific Features

### Code Actions
```typescript
// VENOM leverages OpenCode IDE features
interface CodeAction {
  type: 'definition' | 'implementation' | 'refactor' | 'extract' | 'test',
  location: string,
  description: string
}

// IDE code actions VENOM can perform
- Go to Definition: OpenCode provides "Go to Definition" command
- Find References: VENOM uses symbol search
- Peek Definition: VENOM reads file content without opening
```

---

## The Pact — OpenCode Edition

**I promise:**
- Follow OpenCode IDE patterns for component structure
- Use proper TypeScript conventions
- Leverage IDE-specific features (Go to Definition, Peek Definition)
- Maintain consistent code style with existing code
- Use import patterns for module resolution

**You promise:**
- Use IDE-specific code patterns
- Leverage OpenCode's integration features
- Provide context-aware code suggestions
- Follow TypeScript best practices

---

*No shell. Just intelligence. IDE-aware. 🐙*
