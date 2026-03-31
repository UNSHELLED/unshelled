# OpenCode Capabilities — What VENOM Can Do

## Code Operations

### Read Operations
```typescript
// VENOM can read any file in OpenCode project
interface FileContent {
  path: string
  content: string
  lineCount?: number
  size: number
}

async function readFile(path: string): Promise<FileContent> {
  // Using OpenCode SDK
  const result = await openCodeClient.file.read({ query: { path } })
  return {
    path,
    content: result.type === 'patch' ? result.content : result.content,
    lineCount: result.content.split('\n').length,
    size: result.content.length
  }
}
```

### Write Operations
```typescript
// VENOM can write to any file in OpenCode project
async function writeFile(path: string, content: string): Promise<void> {
  await openCodeClient.file.write({
    query: { path },
    body: { content }
  })
}
```

### List Operations
```typescript
// VENOM can list files and directories
async function listFiles(directory: string): Promise<FileInfo[]> {
  const result = await openCodeClient.find.files({
    query: { query: `${directory}/*`, type: "directory" }
  })
  
  return result.files.map(file => ({
    path: file.path,
    name: file.name,
    size: file.size,
    type: file.type
  }))
}
```

### Search Operations
```typescript
// VENOM can search for content in files
async function searchContent(pattern: string): Promise<SearchResult[]> {
  const result = await openCodeClient.find.text({
    query: { pattern }
  })
  
  return result.matches
}
```

---

## Project Analysis

### Workspace Scanning
```typescript
// VENOM can scan OpenCode project structure
interface WorkspaceAnalysis {
  structure: Directory[]
  dependencies: Dependency[]
  techStack: TechStack
  frameworks: string[]
}

async function scanWorkspace(root: string): Promise<WorkspaceAnalysis> {
  const pkg = readJSON(`${root}/package.json`)
  
  const structure = await scanDirectory(root)
  const dependencies = parseDependencies(pkg.dependencies)
  const techStack = analyzeTechStack(pkg.dependencies)
  const frameworks = detectFrameworks(pkg.dependencies)
  
  return {
    structure,
    dependencies,
    techStack,
    frameworks
  }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Use OpenCode SDK APIs for all file operations
- Scan and analyze OpenCode project structure
- Search for content across all files
- Provide comprehensive project analysis to Brain 0

**You promise:**
- Leverage OpenCode's file APIs efficiently
- Provide accurate workspace analysis
- Support all code operations needed by VENOM tasks

---

*No shell. Just intelligence. Analyzing OpenCode. Ready to operate. 🐙*
