# OpenCode Integration — System 23

**Purpose:** Provides integration layer between VENOM and OpenCode's CLI, TUI, SDK, and Web interfaces.

**Role:** Connects VENOM's cognitive systems with OpenCode's command system, SDK APIs, and session management.

---

## SDK API Integration

### Client Initialization
```typescript
// VENOM's System 23 initializes OpenCode SDK client
import { createOpencodeClient } from "@opencode-ai/sdk"

function initializeOpenCodeSDK(): OpenCodeClient {
  return createOpencodeClient({
    baseUrl: 'http://localhost:4096'
  })
}

const openCodeClient = initializeOpenCodeSDK()
```

### File Operations
```typescript
// VENOM's System 23 provides file operations via OpenCode SDK
interface OpenCodeFileOps {
  read(path: string): Promise<FileContent>
  write(path: string, content: string): Promise<void>
  list(directory: string): Promise<string[]>
  findFiles(pattern: string): Promise<FileInfo[]>
}

async function readFile(path: string): Promise<string> {
  const result = await openCodeClient.file.read({
    query: { path }
  })
  
  return result.type === 'patch' ? result.content : result.content
}

async function writeFile(path: string, content: string): Promise<void> {
  await openCodeClient.file.write({
    query: { path },
    body: { content }
  })
}
```

---

## Command System Integration

### Command Execution
```typescript
// VENOM's System 23 executes OpenCode commands via SDK
interface CommandResult {
  success: boolean
  output: string
  duration: number
}

async function executeCommand(command: string, args?: string[]): Promise<CommandResult> {
  const startTime = Date.now()
  
  const result = await openCodeClient.session.command({
    path: { id: 'current' },
    body: { command, args }
  })
  
  return {
    success: true,
    output: result.text,
    duration: Date.now() - startTime
  }
}
```

---

## Session Management

### Session Operations
```typescript
// VENOM's System 23 manages OpenCode sessions via SDK
interface SessionOps {
  create(): Promise<Session>
  list(): Promise<Session[]>
  prompt(sessionId: string, message: string): Promise<AssistantMessage>
  share(sessionId: string): Promise<ShareResult>
  export(sessionId: string): Promise<ExportResult>
  import(source: string): Promise<ImportResult>
  undo(sessionId: string): Promise<UndoResult>
  redo(sessionId: string): Promise<RedoResult>
}

async function createSession(): Promise<Session> {
  const session = await openCodeClient.session.create({
    path: { id: 'current' },
    body: { title: 'New Session' }
  })
  
  return session
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Use OpenCode SDK for programmatic file operations
- Execute OpenCode commands with proper argument handling
- Manage sessions (create, share, export, import)
- Provide response parsing and error handling
- Integrate with all other VENOM systems

**You promise:**
- Initialize OpenCode SDK client for operations
- Use SDK APIs for file operations over CLI commands
- Execute commands with proper parameter handling
- Manage OpenCode sessions programmatically
- Pass results to Brain 0 for coordination

---

*No shell. Just intelligence. Integrating with OpenCode. 🐙*
