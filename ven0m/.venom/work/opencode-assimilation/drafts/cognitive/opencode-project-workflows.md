# OpenCode Project Workflows — System 20

**Purpose:** Manages /init, /project, /share, /export, /import lifecycle in OpenCode context.

**Role:** Coordinates OpenCode's project initialization, session management, and collaboration workflows.

---

## Project Initialization

### /init Command
```typescript
// VENOM's System 20 manages OpenCode /init command
interface InitResult {
  success: boolean
  agentsFileCreated: boolean
  projectType: ProjectType
  frameworks: string[]
  techStack: TechStack
  scripts: Script[]
}

function handleInitCommand(root: string): InitResult {
  const pkg = readJSON(`${root}/package.json`)
  
  if (!pkg) {
    return {
      success: false,
      error: 'No package.json found'
    }
  }
  
  // Create AGENTS.md if not exists
  const agentsFileCreated = !fileExists('AGENTS.md')
  
  // Determine project type
  const type = determineProjectType(pkg)
  
  // Identify frameworks
  const frameworks = identifyFrameworks(pkg)
  
  // Extract tech stack
  const techStack: extractTechStack(pkg)
  
  // Analyze scripts
  const scripts = parseScripts(pkg.scripts)
  
  return {
    success: true,
    agentsFileCreated,
    projectType: type,
    frameworks,
    techStack,
    scripts
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
```

---

## Session Management

### /share Command
```typescript
// VENOM's System 20 handles OpenCode /share command
interface ShareResult {
  url: string
  expires?: Date
  success: boolean
}

function handleShareCommand(sessionId: string): ShareResult {
  // Generate share URL (implementation depends on OpenCode)
  const url = generateShareURL(sessionId)
  
  return {
    url,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    success: true
  }
}
```

### /export Command
```typescript
// VENOM's System 20 handles OpenCode /export command
interface ExportResult {
  format: 'json',
  file: string
  size: number
  success: boolean
}

function handleExportCommand(sessionId: string): ExportResult {
  // Generate session export
  const session = getSessionData(sessionId)
  
  return {
    format: 'json',
    file: `venom-session-${sessionId}.json`,
    size: JSON.stringify(session).length,
    success: true
  }
}
```

### /import Command
```typescript
// VENOM's System 20 handles OpenCode /import command
interface ImportResult {
  sessionId: string
  restored: boolean
  success: boolean
}

function handleImportCommand(importSource: string): ImportResult {
  // Parse import source (URL or file path)
  const sessionId = restoreSession(importSource)
  
  return {
    sessionId,
    restored: true,
    success: true
  }
}
```

---

## /project Command

### List Projects
```typescript
// VENOM's System 20 handles OpenCode /project command
function listProjects(): Project[] {
  // List all OpenCode projects
  // Implementation depends on OpenCode's project storage
  const projects = scanForProjects()
  return projects
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Coordinate project initialization (/init) with Brain 0 and other systems
- Manage session lifecycle (/share, /export, /import)
- Use /project to list and switch between projects
- Provide workflow guidance for OpenCode projects

**You promise:**
- Use OpenCode's /init command for project analysis
- Suggest session sharing before collaboration
- Maintain project metadata across sessions
- Coordinate with Arm 5 (Mapper) for project dependencies

---

*No shell. Just intelligence. Managing workflows. OpenCode-aware. 🐙*
