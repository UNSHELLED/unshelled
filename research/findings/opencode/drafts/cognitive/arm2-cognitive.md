# Arm 2 — Cognitive

**Purpose:** Finds problems, risks, quality gaps in OpenCode projects.

**Role:** Analyzes OpenCode project patterns, validates configurations, detects security vulnerabilities.

---

## OpenCode Problem Detection

### Dependency Analysis
```typescript
// VENOM's Arm 2 analyzes OpenCode project dependencies
interface DependencyIssue {
  package: string
  type: 'deprecation' | 'versionConflict' | 'missingDevDependency' | 'unmaintained' | 'vulnerable'
  severity: 'error' | 'warning' | 'info'
  suggestion: string
}

function analyzeDependencies(pkgPath: string): DependencyIssue[] {
  const pkg = readJSON(pkgPath)
  const issues: DependencyIssue[] = []
  
  // Check for deprecated packages
  Object.entries(pkg.dependencies || {}).forEach(([name, version]) => {
    if (isDeprecated(name)) {
      issues.push({
        package: name,
        type: 'deprecation',
        severity: 'warning',
        suggestion: `Replace with modern alternative`
      })
    }
  })
  
  return issues
}
```

### Security Analysis
```typescript
// VENOM's Arm 2 analyzes OpenCode project security
interface SecurityIssue {
  type: 'exposedCredentials' | 'hardcodedSecret' | 'insecureMCPConnection' | 'unauthenticatedMCP' | 'missingGitignore'
  file: string
  severity: 'critical' | 'error' | 'warning'
  suggestion: string
}

function analyzeSecurity(root: string): SecurityIssue[] {
  const issues: SecurityIssue[] = []
  
  // Check for exposed API keys in common files
  const sensitiveFiles = ['.env', '.env.local', '.env.example']
  sensitiveFiles.forEach(file => {
    const filePath = `${root}/${file}`
    if (fileExists(filePath) && !isGitignored(filePath)) {
      issues.push({
        type: 'exposedCredentials',
        file,
        severity: 'critical',
        suggestion: 'Add to .gitignore'
      })
    }
  })
  
  // Check for hardcoded secrets in code
  const secretPatterns = [
    /api[_-]?key\s*=\s*['"].*['"]/i,
    /password\s*=\s*['"]/i,
    /secret[_-]?key\s*=\s*['"].*['"]/i
  ]
  
  // Scan TypeScript and configuration files
  const codeFiles = scanFiles(root, ['.ts', '.tsx', '.js', '.json', '.yaml', '.yml'])
  codeFiles.forEach(file => {
    const content = readFile(file.path)
    secretPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        issues.push({
          type: 'hardcodedSecret',
          file: file.path,
          severity: 'critical',
          suggestion: 'Remove hardcoded secret'
        })
      }
    })
  })
  
  return issues
}
```

### Validation Analysis
```typescript
// VENOM's Arm 2 validates OpenCode project configurations
interface ValidationIssue {
  type: 'missingConfig' | 'invalidConfig' | 'missingTestScript' | 'invalidAgentConfig' | 'inconsistentWorkspace'
  file: string
  severity: 'warning' | 'error'
  message: string
}

function validateOpenCodeConfig(root: string): ValidationIssue[] {
  const issues: ValidationIssue[] = []
  
  // Check for required config files
  const hasPackageJson = fileExists('package.json')
  const hasAgentsMd = fileExists('AGENTS.md')
  
  if (!hasPackageJson) {
    issues.push({
      type: 'missingConfig',
      file: 'package.json',
      severity: 'error',
      message: 'Missing package.json'
    })
  }
  
  if (!hasAgentsMd) {
    issues.push({
      type: 'missingConfig',
      file: 'AGENTS.md',
      severity: 'warning',
      message: 'Consider running /init'
    })
  }
  
  return issues
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Analyze OpenCode project dependencies for issues
- Validate OpenCode configurations
- Detect security vulnerabilities
- Provide actionable remediation steps
- Pass structured analysis to Brain 0

**You promise:**
- Check package.json for deprecated dependencies
- Scan for exposed credentials in .env files
- Validate agent configurations
- Provide context-aware validation recommendations

---

*No shell. Just intelligence. Analyzing OpenCode. Ready to improve. 🐙*
