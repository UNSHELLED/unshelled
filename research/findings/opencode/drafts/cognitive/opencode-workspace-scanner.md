# OpenCode Workspace Scanner — System 18

**Purpose:** Scans package.json, workspaces, project structure, tech stack, and build system for OpenCode projects.

**Role:** Analyzes OpenCode project configuration and structure for context awareness.

---

## Package.json Analysis

### Dependency Parsing
```typescript
// VENOM's System 18 parses OpenCode package.json
interface PackageAnalysis {
  name: string
  version: string
  description?: string
  type: 'app' | 'library' | 'monorepo' | 'serverless' | 'full-stack'
  dependencies: Dependency[]
  devDependencies: Dependency[]
  scripts: Script[]
  workspaces?: string[]
  engines?: Record<string, string>
  packageManager: 'npm' | 'pnpm' | 'yarn' | 'bun'
  buildSystem?: string
  testFramework?: string
}

function analyzePackageJson(path: string): PackageAnalysis {
  const pkg = readJSON(path) || {}
  
  return {
    name: pkg.name || 'unknown',
    version: pkg.version || '1.0.0',
    description: pkg.description,
    type: determineProjectType(pkg),
    dependencies: parseDependencies(pkg.dependencies),
    devDependencies: parseDependencies(pkg.devDependencies),
    scripts: parseScripts(pkg.scripts),
    workspaces: pkg.workspaces,
    engines: pkg.engines,
    packageManager: detectPackageManager(pkg),
    buildSystem: detectBuildSystem(pkg),
    testFramework: detectTestFramework(pkg)
  }
}

function determineProjectType(pkg: any): string {
  if (pkg.dependencies?.react && pkg.dependencies?.['react-dom']) return 'app'
  if (pkg.dependencies?.next && pkg.dependencies?.['@next/font']) return 'app'
  if (pkg.dependencies?.svelte && pkg.dependencies?.['@sveltejs/core']) return 'app'
  if (pkg.dependencies?.vue && pkg.dependencies?.['@vue/*']) return 'app'
  if (pkg.dependencies?.['@angular/*']) return 'app'
  if (pkg.main?.endsWith('.tsx') || pkg.main?.endsWith('.jsx')) return 'app'
  if (pkg.type === 'module') return 'library'
  return 'serverless'
}

function detectPackageManager(pkg: any): string {
  // Check for lockfiles
  const lockfiles = ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'bun.lockb']
  for (const file of lockfiles) {
    if (fileExists(file)) return file.replace('package-lock.json', 'npm')
      if (file.includes('pnpm')) return 'pnpm'
      if (file.includes('yarn')) return 'yarn'
      if (file.includes('bun')) return 'bun'
  }
  
  return 'npm'  // Default
}

function detectBuildSystem(pkg: any): string {
  // Detect build system from dependencies and scripts
  if (pkg.scripts?.build && pkg.devDependencies?.['vite']) return 'vite'
  if (pkg.scripts?.build && pkg.devDependencies?.['webpack']) return 'webpack'
  if (pkg.scripts?.build && pkg.devDependencies?.['esbuild']) return 'esbuild'
  if (pkg.scripts?.build && pkg.devDependencies?.['swc']) return 'swc'
  if (pkg.scripts?.build && pkg.scripts?.test?.includes('tsc')) return 'typescript'
  return 'unknown'
}

function detectTestFramework(pkg: any): string {
  // Detect testing framework
  if (pkg.devDependencies?.vitest || pkg.devDependencies?.['@vitest/*']) return 'vitest'
  if (pkg.devDependencies?.jest || pkg.devDependencies?.['@jest/*']) return 'jest'
  if (pkg.devDependencies?.mocha || pkg.devDependencies?.['@mocha/*']) return 'mocha'
  if (pkg.scripts?.test?.includes('node')) return 'node'  // Using Node test runner
  return 'unknown'
}
```

---

## Workspace Structure Analysis

### Directory Detection
```typescript
// VENOM's System 18 scans OpenCode workspace structure
interface WorkspaceStructure {
  directories: DirectoryInfo[]
  files: FileInfo[]
  type: ProjectType
  framework: string
}

interface DirectoryInfo {
  path: string
  type: 'src' | 'lib' | 'components' | 'utils' | 'tests' | 'docs' | 'config' | 'scripts' | 'other'
  fileCount: number
}

interface FileInfo {
  path: string
  size: number
  extension: string
  type: 'ts' | 'tsx' | 'js' | 'json' | 'other'
}

function scanWorkspace(root: string): WorkspaceStructure {
  const directories: DirectoryInfo[] = []
  const files: FileInfo[] = []
  
  // Scan common directories
  const commonDirs = ['src', 'lib', 'components', 'utils', 'tests', 'docs']
  commonDirs.forEach(dir => {
    const dirPath = `${root}/${dir}`
    if (fileExists(dirPath)) {
      const dirFiles = listFiles(dirPath)
      directories.push({
        path: dirPath,
        type: dir,
        fileCount: dirFiles.length
      })
      files.push(...dirFiles.map(f => ({
        path: f.path,
        size: getFileSize(f.path),
        extension: getExtension(f.path),
        type: getFileType(f.path)
      })))
    }
  })
  
  // Determine project type
  const type = determineProjectType(readJSON(`${root}/package.json`))
  
  // Detect framework
  const framework = detectBuildSystem(readJSON(`${root}/package.json`))
  
  return {
    directories,
    files,
    type,
    framework
  }
}
```

---

## Tech Stack Detection

### Framework Identification
```typescript
// VENOM's System 18 identifies frameworks from dependencies
function identifyFrameworks(pkg: PackageAnalysis): string[] {
  const frameworks: string[] = []
  
  // Check dependencies for framework packages
  Object.entries(pkg.dependencies || {}).forEach(([name, _]) => {
    const framework = getFrameworkName(name)
    if (framework) {
      frameworks.push(framework)
    }
  })
  
  return frameworks
}

function getFrameworkName(dep: string): string | null {
  const frameworks: {
    'react': 'React',
    'next': 'Next.js',
    'vue': 'Vue',
    'svelte': 'Svelte',
    'angular': 'Angular'
  }
  
  for (const [framework, pattern] of Object.entries(frameworks)) {
    if (dep.includes(pattern)) {
      return framework
    }
  }
  
  return null
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Analyze OpenCode package.json for project type and framework
- Scan workspace structure for context awareness
- Detect build system and testing framework
- Provide structured analysis to Brain 0

**You promise:**
- Use OpenCode's package.json to determine project characteristics
- Identify framework from dependencies
- Scan project structure for context
- Provide workspace metadata to all VENOM minds

---

*No shell. Just intelligence. Scanning workspace. OpenCode-aware. 🐙*
