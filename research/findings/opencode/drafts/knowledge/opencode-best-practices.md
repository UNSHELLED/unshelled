# OpenCode Best Practices

**Purpose:** Coding standards and best practices for OpenCode projects.

---

## Code Quality Standards

### TypeScript Best Practices
```typescript
// VENOM enforces TypeScript best practices for OpenCode
interface TypeScriptStandards {
  strict: boolean,
  noImplicitAny: boolean,
  strictNullChecks: boolean,
  useDefine: boolean,
  noUnusedVars: boolean,
  explicitTypes: boolean
}

function enforceTypeScriptStandards(): TypeScriptStandards {
  return {
    strict: true,              // Always strict mode
    noImplicitAny: true,        // No implicit any types
    strictNullChecks: true,     // Null checks required
    useDefine: true,            // Use define for enums
    noUnusedVars: true,         // No unused variables
    explicitTypes: true          // Explicit types required
  }
}
```

### Error Handling
```typescript
// VENOM error handling patterns for OpenCode
interface ErrorHandler {
  log(error: Error): void
  recover(error: Error): T
  retry<T>(fn: () => Promise, retries: number = 3): Promise
}

// Never swallow errors - log and propagate
class VENOMErrorHandler implements ErrorHandler {}
```

---

## OpenCode-Specific Patterns

### Project Structure
```
src/
├── components/          # UI components (PascalCase)
├── lib/                 # Utility functions (camelCase)
├── hooks/              # Lifecycle hooks (use prefix)
├── services/            # Backend services (PascalCase + Service suffix)
├── api/                # API endpoints (PascalCase + API suffix)
└── utils/              # Shared utilities
```

### File Organization
- One component per file
- Barrel files for related exports
- Index files for module exports
- Types in separate files for type definitions

---

## Testing Standards

### Test File Organization
```
src/
├── components/
├── lib/
├── services/
└── tests/
```

### Test File Naming
```
Component tests: ComponentName.test.tsx
Integration tests: FeatureName.test.tsx
E2E tests: FeatureName.e2e.ts
```

---

## Build Standards

### Compilation
```typescript
// VENOM enforces OpenCode build standards
interface BuildStandards {
  strict: boolean,
  sourceMap: boolean,
  declarations: boolean,
  emitDeclarationOnly: boolean
}

function enforceBuildStandards(): BuildStandards {
  return {
    strict: true,
    sourceMap: true,
    declarations: true,
    emitDeclarationOnly: true
  }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Follow TypeScript strict mode
- Use proper error handling and logging
- Maintain clean project structure
- Write comprehensive tests for all components
- Follow OpenCode IDE patterns and conventions
- Ensure production-ready code quality

**You promise:**
- Write production-ready TypeScript code
- Maintain proper error handling
- Test all components thoroughly
- Follow OpenCode project structure patterns
- Keep code clean and organized

---

*No shell. Just intelligence. Best practices. OpenCode-ready. 🐙*
