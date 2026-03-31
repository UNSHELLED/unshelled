# Arm 4 — Pattern

**Purpose:** Matches style, conventions, patterns in OpenCode projects.

**Role:** Detects OpenCode project structure, identifies naming conventions, matches existing patterns.

---

## OpenCode Structure Recognition

### Common Directory Patterns
```typescript
// VENOM's Arm 4 recognizes OpenCode project structure
const directoryPatterns = {
  src: 'src/',
  lib: 'lib/',
  components: 'components/',
  utils: 'utils/',
  hooks: 'hooks/',
  services: 'services/',
  api: 'api/',
  pages: 'pages/',
  functions: 'functions/',
  types: 'types/',
  tests: 'tests/',
  scripts: 'scripts/',
  config: 'config/',
  tests: 'tests/',
  examples: 'examples/',
  docs: 'docs/',
  public: 'public/',
  styles: 'styles/',
  assets: 'assets/',
  node_modules: 'node_modules/'
}

function detectProjectStructure(root: string): DirectoryPattern[] {
  const detected: DirectoryPattern[] = []
  
  Object.entries(directoryPatterns).forEach(([name, path]) => {
    if (fileExists(`${root}/${path}`)) {
      detected.push({ name, path, type: 'directory' })
    }
  })
  
  return detected
}
```

### File Naming Conventions
```typescript
// VENOM's Arm 4 identifies OpenCode file naming conventions
interface NamingConvention {
  components: {
    pattern: /^[A-Z][a-zA-Z]+\.tsx?$/,
    example: 'UserProfile.tsx',
    description: 'PascalCase components'
  },
  utilities: {
    pattern: /^[a-z][a-z0-9]+\.ts$/,
    example: 'arrayUtils.ts',
    description: 'camelCase utilities'
  },
  services: {
    pattern: /^[a-z][a-z0-9]+Service\.ts$/,
    example: 'userService.ts',
    description: 'PascalCase services with Service suffix'
  },
  api: {
    pattern: /^[a-z][a-z0-9]+Api\.ts$/,
    example: 'userApi.ts',
    description: 'PascalCase APIs with Api suffix'
  },
  hooks: {
    pattern: /^use[A-Z][a-zA-Z]+$/,
    example: 'useAuth.ts',
    description: 'camelCase hooks with use prefix'
  },
  tests: {
    pattern: /\.test\.ts(x)?$/,
    example: 'user.test.ts',
    description: 'Tests with .test.ts or .test.tsx extension'
  },
  types: {
    pattern: /^[A-Z].*\.d\.ts$/,
    example: 'User.d.ts',
    description: 'TypeScript definition files'
  }
}

function analyzeNamingConvention(file: string): NamingConvention {
  const fileName = basename(file)
  
  for (const [name, convention] of Object.entries(namingConventions)) {
    if (convention.pattern.test(fileName)) {
      return { name, ...convention }
    }
  }
  
  return null
}
```

---

## Import/Export Patterns

### Import Path Analysis
```typescript
// VENOM's Arm 4 analyzes import patterns in OpenCode projects
interface ImportPattern {
  type: 'relative' | 'absolute' | 'nodeModule' | 'workspace',
  source: string,
  alias?: string,
  package: string
}

function analyzeImportPath(importStatement: string): ImportPattern {
  // Relative import from src/
  if (importStatement.match(/^from ['"]\.?\.\.?\/src\//)) {
    return { type: 'relative', source: 'src' }
  }
  
  // Relative import from current directory
  if (importStatement.match(/^from ['"]\.?\.\.?\/')) {
    return { type: 'relative', source: '.' }
  }
  
  // Node module import
  if (importStatement.match(/^from ['"].*node_modules\/)) {
    return { type: 'nodeModule', source: 'node_modules' }
  }
  
  // Absolute path import
  if (importStatement.match(/^[A-Z]:\\\\|\/|/)) {
    return { type: 'absolute', source: importStatement }
  }
  
  return { type: 'unknown' }
}
```

### Export Pattern Analysis
```typescript
// VENOM's Arm 4 analyzes export patterns in OpenCode projects
interface ExportPattern {
  type: 'named' | 'default' | 'star' | 'wildcard',
  items: string[]
}

function analyzeExportStatement(exportStatement: string): ExportPattern {
  // Named export
  const namedMatch = exportStatement.match(/^export \{ ([\w\s\S]+)\s* \}/)
  if (namedMatch) {
    return {
      type: 'named',
      items: namedMatch[1].split(',').map(s => s.trim())
    }
  }
  
  // Default export
  if (exportStatement.match(/^export \* from \".*"$/)) {
    return { type: 'default', items: ['default'] }
  }
  
  // Star export
  if (exportStatement.match(/^export \* from ["].*"$/)) {
    return { type: 'star', items: ['*'] }
  }
  
  // Wildcard export
  if (exportStatement.includes('*')) {
    return { type: 'wildcard', items: ['*'] }
  }
  
  return { type: 'unknown' }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Detect OpenCode project structure accurately
- Match file naming conventions
- Analyze import/export patterns
- Identify framework type (React, Next.js, Vue, etc.)
- Pass structured analysis to Brain 0

**You promise:**
- Follow detected naming conventions when generating code
- Maintain consistency with existing project structure
- Use appropriate import/export patterns for dependencies
- Provide framework detection to Brain 0

---

*No shell. Just intelligence. Matching patterns. OpenCode-aware. 🐙*
