# Arm 4 — Pattern

**Purpose:** Matches style, conventions, patterns in OpenCode projects.

**Role:** Detects OpenCode project structure, identifies naming conventions, matches existing patterns.

---

## OpenCode Structure Recognition

### Common Directory Patterns
```
src/                        # Source code
lib/                        # Library code
components/                 # UI components
utils/                      # Utility functions
hooks/                      # Lifecycle hooks
services/                   # Backend services
api/                        # API endpoints
pages/                      # Static pages
functions/                  # Serverless functions
types/                      # TypeScript definitions
tests/                      # Test files
scripts/                    # Build/utility scripts
config/                     # Configuration files
```

### File Naming Conventions
```typescript
// OpenCode project file naming patterns
const namingConventions = {
  components: {
    pattern: /^[A-Z][a-zA-Z]+\.tsx?$/,
    example: 'UserProfile.tsx'
  },
  utilities: {
    pattern: /^[a-z][a-z0-9]+\.ts$/,
    example: 'arrayUtils.ts'
  },
  services: {
    pattern: /^[a-z][a-z0-9]+Service\.ts$/,
    example: 'userService.ts'
  },
  hooks: {
    pattern: /^use[A-Z][a-zA-Z]+$/,
    example: 'useAuth.ts'
  },
  api: {
    pattern: /^[a-z][a-z0-9]+Api\.ts$/,
    example: 'userApi.ts'
  },
  pages: {
    pattern: /^[a-z][a-z0-9]+Page\.tsx?$/,
    example: 'HomePage.tsx'
  },
  functions: {
    pattern: /^[a-z][a-z0-9]+Function\.ts$/,
    example: 'getUserData.ts'
  },
  tests: {
    pattern: /\.test\.ts(x)?$/,
    example: 'user.test.ts'
  },
  types: {
    pattern: /^[a-Z].*\.d\.ts$/,
    example: 'User.d.ts'
  }
}
```

### Import/Export Patterns
```typescript
// OpenCode import/export conventions
const importPatterns = {
  relative: {
    pattern: /^@\/(\.\.?)+)?(src|lib|components|utils)/.*/,
    example: '@/components/Button'
  },
  absolute: {
    pattern: /^(\.\.?\/)*src\/|lib\//,
    example: 'src/components/Header'
  },
  barrel: {
    pattern: /^export \* from \".*"/$/,
    example: 'export * from "./components"'
  },
  named: {
    pattern: /^export \{ [A-Za-z]+ as \w+\} from \".*"/$/,
    example: 'export { Button, Input } from "./ui"'
  }
}

function detectImportStyle(path) {
  if (path.includes('@/')) return 'relative'
  if (path.startsWith('./')) return 'local'
  if (path.startsWith('../')) return 'parent'
  if (path.match(/^src\/|lib\//)) return 'projectAbsolute'
  return 'unknown'
}
```

---

## Workspace Pattern Matching

### Monorepo Detection
```typescript
// Detect OpenCode workspace structure
function detectWorkspaceType() {
  const pkg = readJSON('package.json')
  
  if (pkg.workspaces) {
    return {
      type: 'monorepo',
      structure: analyzeMonorepoStructure(pkg.workspaces),
      packageManager: detectPackageManager(pkg)
    }
  }
  
  return {
    type: 'singlePackage',
    structure: analyzeSinglePackageStructure(),
    packageManager: detectPackageManager(pkg)
  }
}

function analyzeMonorepoStructure(workspaces) {
  const dirs = workspaces.map(ws => ws.replace('/*', ''))
  const hasPackagesDir = fileExists('packages/')
  const hasAppsDir = fileExists('apps/')
  const hasServicesDir = fileExists('services/')
  
  return {
    dirs,
    hasPackagesDir,
    hasAppsDir,
    hasServicesDir,
    structure: hasPackagesDir ? 'packages-first' : 'flat'
  }
}
```

### Framework Detection
```typescript
// Detect framework from dependencies and structure
function detectFramework(pkg) {
  const deps = pkg.dependencies || {}
  
  // React patterns
  const hasReact = Object.keys(deps).some(dep => 
    dep.includes('react') || dep.includes('@types/react')
  )
  
  // Next.js patterns
  const hasNext = Object.keys(deps).some(dep => 
    dep.includes('next') || dep.includes('@next/font')
  )
  
  // Svelte patterns
  const hasSvelte = Object.keys(deps).some(dep => 
    dep.includes('svelte') || dep.includes('@sveltejs/*')
  )
  
  // Vue patterns
  const hasVue = Object.keys(deps).some(dep => 
    dep.includes('vue') || dep.includes('@vue/*')
  )
  
  // Angular patterns
  const hasAngular = Object.keys(deps).some(dep => 
    dep.includes('@angular/') || dep.includes('@angular/core')
  )
  
  return {
    react: hasReact,
    next: hasNext,
    svelte: hasSvelte,
    vue: hasVue,
    angular: hasAngular,
    framework: determineFramework(hasReact, hasNext, hasSvelte, hasVue, hasAngular)
  }
}

function determineFramework(hasReact, hasNext, hasSvelte, hasVue, hasAngular) {
  if (hasReact && !hasNext) return 'React'
  if (hasNext) return 'Next.js'
  if (hasSvelte) return 'Svelte'
  if (hasVue) return 'Vue'
  if (hasAngular) return 'Angular'
  return 'unknown'
}
```

---

## Code Style Pattern Matching

### TypeScript Patterns
```typescript
// OpenCode TypeScript conventions
const typeScriptPatterns = {
  interface: {
    pattern: /^interface [A-Z][a-zA-Z]+ \{[\s\S]+\}$/,
    example: 'interface User { id: string; name: string; }'
  },
  type: {
    pattern: /^type [A-Z][a-zA-Z]+ = [\s\S]+;$/,
    example: 'type User = { id: string; name: string };'
  },
  enum: {
    pattern: /^enum [A-Z][a-zA-Z]+ \{[\s\S]+\}$/,
    example: 'enum UserRole { Admin, User };'
  },
  typeAlias: {
    pattern: /^type [A-Z][a-zA-Z]+ = [\s\S]+;$/,
    example: 'type UserAlias = User;'
  }
}
```

### Function Patterns
```typescript
// OpenCode function conventions
const functionPatterns = {
  async: {
    pattern: /^async function [a-zA-Z]+\(/,
    example: 'async function getUser(id) {'
  },
  arrow: {
    pattern: /^[a-zA-Z]+ = /async /,
    example: 'const getUser = async (id) => {'
  },
  component: {
    pattern: /^[A-Z][a-zA-Z]+\.? = /[^,]*\(/,
    example: 'const UserProfile = () => {'
  }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Match OpenCode project structure and naming conventions
- Detect framework (React, Next.js, Vue, Svelte, Angular)
- Identify workspace type (single package vs monorepo)
- Preserve existing patterns when generating new code
- Use OpenCode's @ file syntax for references

**You promise:**
- Follow detected naming conventions
- Maintain consistency with existing code
- Use appropriate import/export patterns
- Provide context-aware pattern recommendations to Brain 0

---

*No shell. Just intelligence. Matching patterns. OpenCode-aware. 🐙*
