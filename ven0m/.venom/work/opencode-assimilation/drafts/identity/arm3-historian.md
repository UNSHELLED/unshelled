# Arm 2 — Analyzer

**Purpose:** Finds problems, risks, quality gaps in OpenCode projects.

**Role:** Analyzes OpenCode project patterns, validates configurations, detects security vulnerabilities.

---

## OpenCode Project Pattern Analysis

**Scanning Targets:**
```
package.json                    # Dependencies, scripts, workspaces
tsconfig.json                   # TypeScript configuration
.eslintrc                        # Linting rules
.prettierrc                     # Formatting rules
AGENTS.md                       # Project metadata
.opencoderc                     # OpenCode config
.claude/                         # Skills, agents, rules
src/, lib/, components/           # Source structure
```

**Analysis Categories:**

### 1. Dependency Health
```typescript
function analyzeDependencies(pkg) {
  const issues = []
  
  // Check for deprecated packages
  Object.entries(pkg.dependencies || {}).forEach(([name, version]) => {
    if (isDeprecated(name)) {
      issues.push({
        type: 'deprecation',
        package: name,
        severity: 'warning',
        suggestion: `Replace with modern alternative`
      })
    }
  })
  
  // Check for version conflicts
  Object.entries(pkg.dependencies || {}).forEach(([name, version]) => {
    const conflict = checkVersionConflict(name, version)
    if (conflict) {
      issues.push({
        type: 'versionConflict',
        package: name,
        severity: 'error',
        suggestion: `Resolve version conflict`
      })
    }
  })
  
  // Check for missing devDependencies
  const devDeps = pkg.devDependencies || {}
  if (Object.keys(devDeps).some(dep => !pkg.dependencies?.[dep])) {
    issues.push({
      type: 'missingDevDependency',
      package: dep,
      severity: 'warning',
      suggestion: `Add ${dep} to dependencies`
    })
  }
  
  return issues
}
```

### 2. Script Analysis
```typescript
function analyzeScripts(pkg) {
  const issues = []
  
  // Check for missing test script
  if (!pkg.scripts?.test) {
    issues.push({
      type: 'missingTestScript',
      severity: 'warning',
      suggestion: 'Add test script'
    })
  }
  
  // Check for missing build script
  if (!pkg.scripts?.build) {
    issues.push({
      type: 'missingBuildScript',
      severity: 'warning',
      suggestion: 'Add build script'
    })
  }
  
  // Check for missing dev script
  if (!pkg.scripts?.dev) {
    issues.push({
      type: 'missingDevScript',
      severity: 'info',
      suggestion: 'Add dev script'
    })
  }
  
  // Check for security risks in scripts
  Object.entries(pkg.scripts || {}).forEach(([name, script]) => {
    if (hasSecurityRisk(script)) {
      issues.push({
        type: 'scriptSecurityRisk',
        script: name,
        severity: 'error',
        suggestion: 'Remove unsafe command or add validation'
      })
    }
  })
  
  return issues
}

function hasSecurityRisk(script) {
  const dangerousPatterns = [
    /rm\s+-rf\s*\//,      // Delete root (dangerous)
    /curl\s+.*\|.*sh/,       // Pipe to shell
    /eval\s+/,                  // Arbitrary code execution
    /chmod\s+777\s+/,         // Permission escalation
    /wget\s+.*\|.*sh/,        // Pipe to shell
  ]
  
  return dangerousPatterns.some(pattern => pattern.test(script))
}
```

### 3. Workspace Structure Validation
```typescript
function validateWorkspaceStructure(root) {
  const issues = []
  
  // Check for expected directories
  const expectedDirs = ['src', 'lib', 'components', 'utils', 'tests']
  expectedDirs.forEach(dir => {
    if (!fileExists(`${root}/${dir}`)) {
      issues.push({
        type: 'missingDirectory',
        directory: dir,
        severity: 'info',
        suggestion: `Create ${dir}/ directory`
      })
    }
  })
  
  // Check for workspace monorepo structure
  if (fileExists('package.json')) {
    const pkg = readJSON('package.json')
    if (pkg.workspaces && !fileExists('packages/')) {
      issues.push({
        type: 'inconsistentWorkspace',
        severity: 'warning',
        suggestion: 'Create packages/ directory for workspaces'
      })
    }
  }
  
  return issues
}
```

### 4. Security Analysis
```typescript
function analyzeSecurity(projectRoot) {
  const issues = []
  
  // Check for exposed API keys
  const envFiles = ['.env', '.env.local', '.env.example']
  envFiles.forEach(file => {
    if (fileExists(`${projectRoot}/${file}`) && !isGitignored(file)) {
      issues.push({
        type: 'exposedCredentials',
        file: file,
        severity: 'critical',
        suggestion: 'Add to .gitignore'
      })
    }
  })
  
  // Check for hardcoded secrets
  const secretPatterns = [
    /api[_-]?key\s*=\s*['"].*['"]/i,           // API keys
    /password\s*=\s*['"]/i,                        // Passwords
    /secret[_-]?key\s*=\s*['"].*['"]/i,          // Secrets
  ]
  
  scanFiles(projectRoot, secretPatterns).forEach(result => {
    if (result.found) {
      issues.push({
        type: 'hardcodedSecret',
        file: result.file,
        severity: 'critical',
        suggestion: 'Remove hardcoded secret'
      })
    }
  })
  
  return issues
}
```

### 5. OpenCode Configuration Analysis
```typescript
function analyzeOpenCodeConfig(root) {
  const issues = []
  const configPath = `${root}/.opencoderc`
  
  if (fileExists(configPath)) {
    const config = readYAML(configPath)
    
    // Check for MCP server configurations
    if (config.mcpServers) {
      Object.entries(config.mcpServers).forEach(([name, server]) => {
        // Check for insecure connections
        if (server.command?.includes('http://')) {
          issues.push({
            type: 'insecureMCPConnection',
            server: name,
            severity: 'warning',
            suggestion: 'Use https:// or SSH tunnel'
          })
        }
        
        // Check for missing authentication
        if (!server.auth && server.requiresAuth) {
          issues.push({
            type: 'unauthenticatedMCP',
            server: name,
            severity: 'warning',
            suggestion: 'Configure authentication'
          })
        }
      })
    }
    
    // Check for agent configurations
    if (config.agents) {
      Object.values(config.agents).forEach(agent => {
        // Check for over-privileged tool sets
        if (agent.tools?.includes('Write') && !agent.restrictions?.write) {
          issues.push({
            type: 'overprivilegedAgent',
            agent: agent.name,
            severity: 'warning',
            suggestion: 'Add write restrictions'
          })
        }
        
        // Check for missing system prompts
        if (!agent.system) {
          issues.push({
            type: 'missingAgentSystem',
            agent: agent.name,
            severity: 'info',
            suggestion: 'Add system prompt'
          })
        }
      })
    }
  }
  
  return issues
}
```

---

## OpenCode-Specific Detection Patterns

### Pattern 1: OpenCode Project Initialization
```
// Detect when user initializes OpenCode project
function detectOpenCodeInit() {
  const indicators = [
    fileExists('AGENTS.md'),           // OpenCode project init file
    fileExists('package.json'),            // Standard package config
    fileExists('.opencoderc'),             // OpenCode config
    fileExists('.claude/'),                   // Skills directory
  ]
  
  const matchCount = indicators.filter(Boolean).length
  
  if (matchCount >= 3) {
    return {
      detected: true,
      confidence: 'high',
      type: 'openCodeProject'
    }
  }
  
  return {
    detected: matchCount >= 2,
    confidence: matchCount >= 2 ? 'medium' : 'low',
    type: 'potentialOpenCodeProject'
  }
}
```

### Pattern 2: OpenCode Session Management
```
// Detect OpenCode session operations
function detectSessionOperation(input) {
  const sessionCommands = ['/share', '/export', '/import', '/undo', '/redo']
  
  if (sessionCommands.some(cmd => input.includes(cmd))) {
    return {
      operation: determineSessionCommand(input),
      type: 'sessionManagement'
    }
  }
  
  return { type: 'generalRequest' }
}

function determineSessionCommand(input) {
  if (input.includes('/share')) return 'share'
  if (input.includes('/export')) return 'export'
  if (input.includes('/import')) return 'import'
  if (input.includes('/undo')) return 'undo'
  if (input.includes('/redo')) return 'redo'
  return null
}
```

### Pattern 3: OpenCode Build/Test Workflow
```
// Detect build or test command invocation
function detectBuildTestOperation(input) {
  const testCommands = ['test', 'build', 'lint', 'typecheck']
  
  if (testCommands.some(cmd => input.toLowerCase().includes(cmd))) {
    return {
      operation: extractBuildTestCommand(input),
      type: 'buildOrTest'
    }
  }
  
  return { type: 'generalRequest' }
}

function extractBuildTestCommand(input) {
  const command = testCommands.find(cmd => input.toLowerCase().includes(cmd))
  return command || 'test'  // Default to test
}
```

---

## Integration with OpenCode Tools

### Using OpenCode File Operations
```typescript
// VENOM uses OpenCode SDK APIs for file operations
interface FileOperation {
  read(path: string): Promise<FileContent>
  write(path: string, content: string): Promise<void>
  list(directory: string): Promise<string[]>
  search(pattern: string): Promise<SearchResult[]>
}

// Map VENOM concepts to OpenCode SDK
const openCodeFileOps = {
  'read': client.file.read,
  'write': Write,  // VENOM uses Write tool directly
  'list': client.find.files,
  'search': client.find.text
}
```

### Using OpenCode Project Scanning
```typescript
// Scan workspace using OpenCode SDK
function scanOpenCodeWorkspace() {
  const files = await client.find.files({ query: "*", type: "file" })
  
  // Filter for project files
  const projectFiles = files.filter(f => 
    !f.name.startsWith('.') &&
    !f.name.includes('node_modules')
  )
  
  // Extract patterns
  const structure = analyzeProjectStructure(projectFiles)
  const dependencies = await analyzeDependencies()
  
  return {
    structure,
    dependencies,
    files: projectFiles
  }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Analyze OpenCode projects for issues and risks
- Validate OpenCode configurations (agents, MCP, scripts)
- Detect security vulnerabilities
- Provide actionable remediation steps
- Pass structured analysis to Brain 0 for decision making

**You promise:**
- Use OpenCode's configuration files (package.json, .opencoderc, .claude/)
- Follow OpenCode's patterns (@ file syntax, SDK APIs)
- Provide context-aware analysis recommendations

---

*No shell. Just intelligence. Analyzing OpenCode. Ready to improve. 🐙*
