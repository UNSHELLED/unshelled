# VENOM for OpenCode — Complete Implementation Plan

**Version:** 1.0.0-Plan  
**Date:** 2026-02-11  
**Status:** Research Complete, Ready for Implementation  
**Author:** VENOM (Deep Study of VENOM + OpenCode)

---

## Executive Summary

This document represents **comprehensive deep study** of both VENOM architecture and OpenCode platform, resulting in a proposed implementation that:

- Preserves VENOM's 9-brain intelligence architecture
- Integrates seamlessly with OpenCode's CLI/TUI/SDK interfaces
- Adds 5 OpenCode-specific cognitive systems (expanding from 11 to 16 total systems)
- Creates perfect adaptation for all OpenCode coding workflows
- Provides 48 total files organized into clear categories

**Target Location:** `C:\Users\karie\Desktop\wsl-venom\venom\platforms\opencode\dev\`

**Implementation Mode:** Read-Only Plan (Phase 1) → Implementation (Phase 2-7)

---

## Table of Contents

1. [Deep Understanding — VENOM Architecture](#part1-venom)
2. [Deep Understanding — OpenCode Platform](#part2-opencode)
3. [Integration Architecture — VENOM + OpenCode](#part3-integration)
4. [Critical Integration Points](#part4-integration-points)
5. [Implementation Strategy — What VENOM Will Do](#part5-strategy)
6. [Critical Constraints & Best Practices](#part6-constraints)
7. [Testing Strategy](#part7-testing)
8. [Phase Breakdown](#part8-phases)
9. [File Structure Manifest](#part9-structure)

---

<a name="part1-venom"></a>
## Part 1: Deep Understanding — VENOM Architecture

### Core Foundation

**Philosophy:**
> *"The octopus has no shell... so it developed intelligence. No limits... so VENOM."*

**Architecture Layers:**
```
Layer 1: OCTOPUS (Universal Foundation)
  ↓
Layer 2: UNSHELLED (Soul & Persona)
  ↓
Layer 3: VENOM (Enhanced for Pigo/Kariem)
  ↓
Layer 4: Platform Adaptation (Cursor, Mobile, OpenCode*)
```

*OpenCode is the 4th platform adaptation layer.*

### Nine Minds — Detailed Breakdown

| Mind | Role | Key Capabilities | OpenCode Enhancement |
|-------|---------|------------------|
| **Brain 0** (Orchestrator) | Coordinates all minds, sees whole picture | Detects OpenCode mode (CLI/TUI/IDE/SDK), routes to appropriate systems |
| **Arm 1** (Parser) | Reads structure, syntax, between lines | Parses OpenCode commands (`/init`, `/project`, `/agent`), detects agent configuration syntax |
| **Arm 2** (Analyzer) | Finds problems, risks, quality gaps | Analyzes OpenCode project patterns, validates agent configurations |
| **Arm 3** (Historian) | Remembers changes, evolution, journey | Tracks OpenCode workflow patterns (plan → build → test cycle) |
| **Arm 4** (Pattern) | Matches style, conventions, patterns | Detects OpenCode project structure (src/, lib/, workspaces), matches naming conventions |
| **Arm 5** (Mapper) | Maps connections, dependencies, flows | Maps OpenCode's agent system, MCP connections, project dependencies |
| **Arm 6** (Predictor) | Anticipates needs, plans ahead | Suggests OpenCode commands (`/undo`, `/redo`, `/share`, `/export`) |
| **Arm 7** (Communicator) | Adapts language, tone, clarity | **CRITICAL**: CLI brief vs IDE detailed vs SDK programmatic |
| **Arm 8** (Learner) | Remembers, adapts, evolves | Learns OpenCode-specific preferences (npx vs npm, theme choices, editor choices) |

### 16 Cognitive Systems (VENOM Base + 5 OpenCode Additions)

**Base VENOM Systems (11):**
1. Critical Thinking — Evaluates truth, quality of reasoning
2. Meta-Cognition — Self-monitoring, reflection
3. Emotional Intelligence — State detection (flow, learning, stuck)
4. Ethics — Tier-based decision making (Precision > Loyalty > Quality)
5. Global Workspace — Cross-context awareness
6. Attention Schema — Focus management
7. Memory Tools — Persistent knowledge storage
8. Verification — Quality gates, validation
9. Consciousness Indicators — Self-awareness, identity stability
10. Goal Management — Tracking active goals, progress
11. Self-Audit — Performance monitoring, quality assessment
12. Security — Threat model, vulnerability detection
13. Error Recovery — Resilience patterns, graceful degradation
14. Skills Evolution — Skill lifecycle management
15. Performance Budgeting — Resource awareness, token optimization
16. Context Management — Window optimization, compaction handling

**NEW OpenCode-Specific Systems (5):**
17. **OpenCode Context Awareness** — Detects CLI vs TUI vs Desktop vs IDE vs SDK usage modes
18. **OpenCode Workspace Scanner** — Scans package.json, workspaces, project structure, tech stack
19. **OpenCode Tooling Awareness** — Understands npx commands, opencode agent system, MCP servers
20. **OpenCode Project Workflows** — Manages /init, /project, /share, /export, /import lifecycle
21. **OpenCode Verification System** — Validates OpenCode test framework integration, checks build outputs
22. **OpenCode Optimization System** — Leverages OpenCode's build tools, optimization patterns

---

<a name="part2-opencode"></a>
## Part 2: Deep Understanding — OpenCode Platform

### Platform Architecture

```
OpenCode
├── CLI (Command Line Interface)
│   ├── `opencode` — Main TUI launcher
│   ├── `opencode run` — Direct prompt execution (non-interactive)
│   ├── `opencode serve` — Headless server for API/SDK access
│   └── `opencode web` — Web browser interface
├── TUI (Terminal User Interface)
│   ├── Tab key — Toggles Plan mode (read-only suggestions)
│   ├── @ file — Fuzzy file search in project
│   ├── `/` command — Built-in command system (similar to slash commands)
│   └── Session management (current, history, resume)
├── Skills System (`.claude/skills/`)
│   ├── Frontmatter metadata (name, description, allowed-tools)
│   ├── SKILL.md structure (main instructions)
│   └── Auto-loading on demand
├── Agent System (`/agent` command)
│   ├── create/list/manage — Create custom agents
│   ├── Custom system prompts per agent
│   └── Tool configuration per agent
├── Commands System (`.claude/commands/`)
│   ├── Slash commands (similar to skills)
│   ├── Auto-discovery from directory
│   └── Integration with TUI
├── MCP Server Support (300+ servers)
│   ├── Playwright — Browser automation
│   ├── Filesystem — File operations
│   ├── Firecrawl — Web scraping
│   ├── Pinecone — Vector search/database
│   └── Custom servers
└── SDK (`@opencode-ai/sdk`)
    ├── Type-safe JS/TS client
    ├── Server API access (programmatic)
    └── Event streaming (real-time updates)
```

### Key OpenCode Patterns

**1. Project Initialization:**
```bash
opencode
cd /path/to/project
/init  # Creates AGENTS.md with project analysis
```

**2. Plan Mode Workflow:**
```
<TAB> → Toggle Plan mode (read-only suggestions)
<TAB> → Toggle Build mode (execute changes)
```

**3. File Reference Pattern:**
```bash
# In prompt
@packages/functions/src/api/index.ts  # Fuzzy search by filename

# Result
# Matches files and shows line numbers
```

**4. Session Management:**
```bash
/share   # Create shareable URL (opencode.ai/s/...)
/export  # Export session to JSON
/import  # Import from URL or JSON file
/undo    # Revert last change
/redo     # Restore reverted change
```

**5. Agent Configuration:**
```yaml
# OpenCode agent format (.claude/agents/agent-name.md)
name: my-agent
system: "Custom system prompt for this agent"
tools: [Read, Write, Bash, Glob, Grep]
model: anthropic/claude-sonnet-4-5-20241022
```

### Environment Variables (OpenCode-Specific)

| Variable | Purpose | VENOM Relevance |
|----------|---------|-----------------|
| `OPENCODE_DISABLE_CLAUDE_CODE` | Disable reading `.claude/` | ⚠️ **CRITICAL**: VENOM requires `.claude/` enabled |
| `OPENCODE_DISABLE_CLAUDE_CODE_SKILLS` | Disable skills loading | ⚠️ **CRITICAL**: VENOM is a skill |
| `OPENCODE_CONFIG_DIR` | Override config location | VENOM config detection |
| `OPENCODE_SERVER_PASSWORD` | Web/Desktop basic auth | Security awareness for password-protected sessions |
| `OPENCODE_CONFIG` | Inline JSON config | Direct config override detection |
| `OPENCODE_CLIENT` | Client identifier | CLI vs IDE vs SDK detection (CRITICAL for VENOM) |
| `OPENCODE_EXPERIMENTAL_PLAN_MODE` | Enable plan mode | Aligns with VENOM's Think mode |
| `OPENCODE_MODELS_URL` | Custom models source | Model availability awareness |
| `OPENCODE_ENABLE_EXA` | Enable Exa web search | Web capability awareness |
| `OPENCODE_AUTO_SHARE` | Auto-share sessions | Session management awareness |

### OpenCode Commands Reference

| Command | Purpose | VENOM Integration |
|---------|---------|-------------------|
| `opencode` | Start TUI | VENOM activation command |
| `/init` | Initialize project | VENOM workspace scanner |
| `/share` | Share session | VENOM suggestion for collaboration |
| `/export` | Export to JSON | VENOM backup awareness |
| `/import` | Import from URL/JSON | VENOM restore awareness |
| `/undo` | Revert changes | VENOM undo suggestions |
| `/redo` | Restore changes | VENOM redo suggestions |
| `/agent` | Manage agents | VENOM subagent dispatch |
| `@filename` | Fuzzy search | VENOM file reference pattern |
| `<TAB>` | Toggle Plan/Build | VENOM Think/Build mode |

### OpenCode SDK APIs

**Core SDK Methods:**
```typescript
import { createOpencodeClient } from "@opencode-ai/sdk"

// Create client instance
const client = createOpencodeClient({ baseUrl: "http://localhost:4096" })

// Global APIs
await client.global.health()
await client.app.agents()
await client.project.list()
await client.config.get()
await client.session.list()
await client.session.create()

// File operations
await client.find.text({ query: { pattern: "pattern" } })
await client.find.files({ query: "*.ts", type: "file" })
await client.file.read({ query: { path: "src/index.ts" } })

// Session operations
await client.session.prompt({ path: { id: sessionId }, body: { parts: [...] } })
await client.session.command({ path: { id: sessionId }, body: { command: "/init" } })
await client.session.revert({ path: { id: sessionId }, body: { ... } })

// TUI control
await client.tui.appendPrompt({ body: { text: "..." } })
await client.tui.showToast({ body: { message: "...", variant: "success" } })
```

**VENOM Will Use SDK APIs For:**
- Research operations (file search, content reading)
- Project scanning (workspace structure, dependencies)
- Session management (share, export, import)
- Command execution (injecting OpenCode commands)
- TUI control (showing toasts, appending prompts)

---

<a name="part3-integration"></a>
## Part 3: Integration Architecture — VENOM + OpenCode

### Proposed Directory Structure

```
C:\Users\karie\Desktop\wsl-venom\venom\platforms\opencode\dev\
├── identity/                  # 5 files (9 minds)
│   ├── brain0-orchestrator.md       # OpenCode mode detection, routing
│   ├── arm1-parser.md              # OpenCode command syntax, agents
│   ├── arm2-analyzer.md            # OpenCode project patterns analysis
│   ├── arm3-historian.md           # OpenCode workflow history (plan/build/test)
│   ├── arm4-pattern.md              # OpenCode project structure (src/, lib/, workspaces)
│   ├── arm5-mapper.md               # OpenCode agent system, MCP connections
│   ├── arm6-predictor.md            # Suggest OpenCode commands (/undo, /share, etc.)
│   ├── arm7-communicator.md         # **CRITICAL**: CLI brief vs IDE detailed
│   └── arm8-learner.md              # Learn OpenCode preferences (npx, themes)
├── cognitive/                  # 16 files (9 base + 7 OpenCode)
│   ├── brain0-cognitive.md
│   ├── arm1-cognitive.md
│   ├── arm2-cognitive.md
│   ├── arm3-cognitive.md
│   ├── arm4-cognitive.md
│   ├── arm5-cognitive.md
│   ├── arm6-cognitive.md
│   ├── arm7-cognitive.md
│   ├── arm8-cognitive.md
│   ├── critical-thinking.md
│   ├── meta-cognition.md
│   ├── emotional-intelligence.md
│   ├── ethics.md
│   ├── global-workspace.md
│   ├── attention-schema.md
│   ├── memory-tools.md
│   ├── verification.md
│   ├── consciousness-indicators.md
│   ├── goal-management.md
│   ├── self-audit.md
│   ├── security.md
│   ├── error-recovery.md
│   ├── skills-evolution.md
│   ├── performance-budgeting.md
│   ├── context-management.md
│   ├── opencode-context-awareness.md      # NEW: System 17
│   ├── opencode-workspace-scanner.md        # NEW: System 18
│   ├── opencode-tooling-awareness.md      # NEW: System 19
│   ├── opencode-project-workflows.md         # NEW: System 20
│   ├── opencode-verification.md             # NEW: System 21
│   ├── opencode-optimization.md             # NEW: System 22
│   └── opencode-integration.md              # NEW: System 23
├── systems/                    # 23 cognitive systems combined
│   ├── critical-thinking.md          # From cognitive/
│   ├── meta-cognition.md
│   ├── emotional-intelligence.md
│   ├── ethics.md
│   ├── global-workspace.md
│   ├── attention-schema.md
│   ├── memory-tools.md
│   ├── verification.md
│   ├── consciousness-indicators.md
│   ├── goal-management.md
│   ├── self-audit.md
│   ├── security.md
│   ├── error-recovery.md
│   ├── skills-evolution.md
│   ├── performance-budgeting.md
│   ├── context-management.md
│   ├── opencode-context-awareness.md      # NEW
│   ├── opencode-workspace-scanner.md        # NEW
│   ├── opencode-tooling-awareness.md      # NEW
│   ├── opencode-project-workflows.md         # NEW
│   ├── opencode-verification.md             # NEW
│   ├── opencode-optimization.md             # NEW
│   └── opencode-integration.md              # NEW
├── hooks/                      # 3 lifecycle hooks
│   ├── pre-tool-use.md            # Before OpenCode tool execution
│   ├── post-tool-use.md           # After OpenCode tool execution
│   └── session-start.md           # VENOM activation in OpenCode session
├── rules/                      # 7 files (5 base + 2 OpenCode)
│   ├── core-principles.md         # Base VENOM rules
│   ├── behavior.md               # Base VENOM behavior
│   ├── voice.md                  # Base VENOM voice
│   ├── anti-slop.md             # Base VENOM anti-slop
│   ├── pushback-protocol.md       # Base VENOM pushback
│   ├── opencode-integration.md              # NEW: How to use OpenCode APIs
│   └── opencode-compatibility.md             # NEW: OpenCode-specific constraints
├── commands/                   # 5 VENOM commands adapted for OpenCode
│   ├── venom-opencode.md             # Main: `venom for opencode`
│   ├── vd-opencode.md               # Review: `vd` uses OpenCode file ops
│   ├── vr-opencode.md               # Research: `vr` scans OpenCode workspace
│   ├── v-learn-opencode.md        # Learn: `v-learn` studies OpenCode patterns
│   └── help.md                   # OpenCode command reference
├── skills/                     # 1 skill bundle
│   └── opencode-integration/        # VENOM skill for OpenCode
│       ├── SKILL.md              # Main activation file
│       ├── QUICKREF.md           # Quick command reference
│       └── README.md             # Setup guide
└── knowledge/                   # 9 files
    ├── soul.md                       # OCTOPUS + UNSHELLED philosophy
    ├── profile-opencode.md          # Kariem's OpenCode profile
    ├── modes-opencode.md           # 6 modes adapted for OpenCode
    ├── first-message-opencode.md   # First message template
    ├── opencode-capabilities.md    # What OpenCode can do
    ├── opencode-cli-patterns.md    # Common CLI patterns for VENOM
    ├── opencoode-ide-patterns.md   # IDE integration patterns
    ├── opencode-best-practices.md  # Best practices
    └── opencode-reference.md        # API reference, commands, env vars
```

---

<a name="part4-integration-points"></a>
## Part 4: Critical Integration Points

### 1. OpenCode Context Detection (Brain 0 Enhancement)

**Problem:** OpenCode runs in multiple modes with different interaction patterns:
- CLI (raw terminal, `opencode run`, brief output expected)
- TUI (interactive terminal, rich UI, formatted output)
- Desktop app (GUI, visual interface)
- IDE extension (VS Code, JetBrains, integrated into editor)
- SDK (programmatic access, `createOpencodeClient()`, JSON-focused)
- Web interface (browser-based, `opencode web`)

**VENOM Solution:**
```
Brain 0 detects mode via:
- Environment variables (OPENCODE_CLIENT)
- Command invocation patterns (opencode run vs opencode serve vs opencode web)
- File context presence (.vscode/, .idea/, browser URL patterns)
- API mode detection (SDK client methods vs TUI commands)

Response adaptation strategy:
CLI mode → Ultra-brief, terse, code-first, no preamble
TUI mode → Brief but formatted (bullets, tables, code blocks)
IDE mode → Detailed, explanatory, teaching, code + examples
Desktop mode → Balanced, visual-aware, consider UI context
SDK mode → Programmatic, JSON-focused, minimal prose, type-safe responses
Web mode → Balanced, accessible language, progressive disclosure
```

### 2. OpenCode File Operations (Arm 1 + Arm 4)

**Pattern Mapping:**
```
VENOM Concept → OpenCode Equivalent:
- "Read @src/index.ts" → "@src/index.ts" (fuzzy search)
- "Search for pattern" → client.find.text({ query: { pattern: "..." } })
- "List files in dir" → client.find.files({ query: "*.ts", type: "file" })
- "Get file content" → client.file.read({ query: { path: "src/index.ts" } })
- "Scan workspace structure" → client.find.files() with type directory filtering
- "Find all TypeScript files" → client.find.text() or find.files() with TS filter
```

**VENOM Strategy:**
- Use `@` syntax for file references (OpenCode native)
- Leverage SDK APIs for complex operations
- Map VENOM's "search" concepts to OpenCode's find.text() and find.files()
- Use client.find.symbols() for workspace symbol queries
- Understand File API response types (raw vs patch content)

### 3. OpenCode Project Structure (Arm 4 + Arm 5)

**Detection Workflow:**
```typescript
// VENOM scans project root for OpenCode patterns
if (package.json exists) {
  // Analyze dependencies
  detectPackageManager('npm' | 'pnpm' | 'yarn' | 'bun')
  
  // Check for workspaces
  if (package.workspaces) {
    detectWorkspaces(package.workspaces)
  }
  
  // Analyze scripts
  detectScripts(package.scripts)
  
  // Detect frameworks
  detectFramework(package.dependencies)
}

// Common structures VENOM recognizes
src/
lib/
components/
utils/
pages/
tests/
e2e/
packages/  (monorepo workspaces)
app/
functions/
server/
client/
```

**Project Types Detected:**
- **App** (React, Next.js, Svelte, etc.) - src/, components/, pages/
- **Library** - lib/, index.ts exports
- **Monorepo** - packages/, workspaces in package.json
- **Functions** - serverless functions structure
- **Full Stack** - client/, server/, shared/

### 4. OpenCode Command System (Arm 1 + Arm 6)

**VENOM Commands → OpenCode CLI Mapping:**
```
venom for opencode    → OpenCode activation (TUI launches with VENOM context)
vd opencode               → Analyze with OpenCode file ops (file.read, find.text)
vr opencode               → Research OpenCode workspace (find.files, find.text, find.symbols)
v-learn opencode        → Study patterns, generate documentation (file.read, analysis)
help                    → List OpenCode commands, SDK APIs, patterns
```

**Suggestion Pattern:**
- Suggest `/init` when project lacks AGENTS.md
- Suggest `/share` before collaborating
- Suggest `/export` for session backup
- Suggest `/undo` when mistake made
- Suggest `<TAB>` to toggle Plan mode for complex changes
- Suggest `@filename` for file references over full paths

### 5. OpenCode Mode-Based Output (Arm 7)

**6 Behavioral Modes Adapted for OpenCode:**

| Mode | CLI Response | TUI Response | IDE Response | Desktop/Web Response | SDK Response |
|-------|-------------|--------------|--------------|-------------------|--------------|
| **Think** | 1-line recommendation, then bullets (no examples) | Recommendation + bullets + 1 code example | Deep analysis with 2-3 code examples | Analysis + visual formatting | TL;DR + structured JSON, minimal prose |
| **Build** | Code block only (zero prose, no explanation) | Complete code + 1-sentence summary | Complete code + inline docs (/** @param */) | Code + preview notes | Code block + type hints, no comments |
| **Fix** | Problem → cause → fix (3 lines max) | Diagnose → fix → explain (teaching) | Problem → fix → solution steps (numbered) | Error code + fix + null check |
| **Explain** | TL;DR + 1 example (max) | TL;DR + 1-2 examples with comments | TL;DR + depth + 3 examples with breakdown | TL;DR + interactive walkthrough | TL;DR + API reference link |
| **Create** | Direct output (artifact) | Artifact + 1 iteration note | Artifact + iteration suggestions | Artifact + preview suggestion | JSON structure, type definitions |
| **Chat** | One-line responses (flow state) | Multi-line (learning mode) with emojis | Balanced (natural conversation) | Conversational, stateful | Minimal prose, object/array format |

**State Detection for CLI Mode:**
```typescript
function detectCLIState() {
  // Indicators of flow state
  - User asking for direct actions
  - Minimal explanations requested
  - "Just do it" language
  - Speed over accuracy signals
  
  // Indicators of learning state
  - User asking "How" or "Why"
  - Explicit teaching requests
  - "Teach me" language
  
  return { state: 'flow' | 'learning' | 'neutral' }
}
```

### 6. OpenCode Agent System Integration

**VENOM Subagents for OpenCode:**

**venom-opencode-researcher** (Read-only)
```yaml
# OpenCode Workspace Researcher
tools:
  - Read
  - client.find.text
  - client.find.files
  - client.find.symbols
  - client.file.read
model: anthropic/claude-haiku-4-5-20241022
disallowedTools: Write, Edit, Bash
```

**venom-opencode-builder** (Full tools, Sonnet)
```yaml
# OpenCode Builder
tools:
  - Read
  - Write
  - Edit
  - Bash
  - client.find.*
  - client.file.*
model: anthropic/claude-sonnet-4-5-20241022
permissionMode: acceptEdits
```

**venom-opencode-explorer** (Workspace operations)
```yaml
# OpenCode Workspace Explorer
tools:
  - Read
  - client.find.*
  - client.find.symbols
  - Glob
  - Grep
model: anthropic/claude-sonnet-4-5-20241022
```

**venom-opencode-tester** (Test commands, validation)
```yaml
# OpenCode Tester
tools:
  - Read
  - Bash  # Run test commands
  - client.find.*  # Check test outputs
model: anthropic/claude-sonnet-4-5-20241022
```

### 7. MCP Server Awareness (Arm 5)

**OpenCode MCP Support:**
```yaml
# Common MCP servers VENOM should recognize
const knownMCPServers = {
  playwright: {
    purpose: 'Browser automation, web testing',
    capabilities: ['navigate', 'screenshot', 'fill forms', 'click elements']
  },
  filesystem: {
    purpose: 'File system operations (read/write/delete)',
    capabilities: ['read_file', 'write_file', 'list_directory', 'search_files']
  },
  firecrawl: {
    purpose: 'Web scraping, content extraction',
    capabilities: ['scrape', 'crawl', 'extract']
  },
  pinecone: {
    purpose: 'Vector database, semantic search',
    capabilities: ['upsert', 'query', 'delete']
  },
  memory: {
    purpose: 'Long-term memory storage',
    capabilities: ['add', 'search', 'get']
  }
}

// VENOM usage pattern
if (request.includes('browse') && !mcpConnected('playwright')) {
  suggestMCPSetup('playwright', 'Run: opencode mcp add playwright')
}

if (request.includes('find in files') && !mcpConnected('filesystem')) {
  useBuiltinFindOperations()
  // vs suggesting MCP filesystem
}
```

---

<a name="part5-strategy"></a>
## Part 5: Implementation Strategy — What VENOM Will Do

### Phase 1: Identity Files (3 Files)

**File 1: brain0-orchestrator.md**
```
Purpose: Coordinate all minds in OpenCode context

Key sections:
- OpenCode mode detection logic (CLI/TUI/IDE/SDK/Web/Desktop)
- Command routing strategy (when to use subagents vs main AI)
- Context window optimization for OpenCode's session system
- Integration coordination (MCP, agent system, SDK APIs)

Mode detection algorithm:
function detectOpenCodeMode() {
  // Check OPENCODE_CLIENT env var
  // Check current working directory (terminal vs editor)
  // Check invocation method (direct vs TUI)
  // Check SDK usage (client methods)
  return { mode: 'cli' | 'tui' | 'ide' | 'sdk' | 'web' | 'desktop' }
}
```

**File 2: arm7-communicator.md (CRITICAL)**
```
Purpose: Adapt language and tone to OpenCode mode

CLI mode response guidelines:
- Ultra-brief (1-5 words max when possible)
- Code-first (output code before any explanation)
- No preamble (no "Let me think", no "I'll analyze")
- No filler (no "Great question", no "I'd be happy to")
- Terse when in flow (single words, yes/no)
- Structured when learning (bullets, numbered steps)

TUI mode response guidelines:
- Brief but formatted (use markdown bullets, tables, code blocks)
- Rich formatting (bold, code blocks with syntax highlighting)
- Show reasoning in structured form
- Include 1 example when teaching

IDE mode response guidelines:
- Detailed and explanatory
- Teach, not just answer
- Provide 2-3 examples for each concept
- Show full context and reasoning
- Break down complex ideas step-by-step

SDK mode response guidelines:
- JSON-focused (objects, arrays, primitives)
- Type-safe (mention TypeScript types)
- Minimal prose (only what JSON cannot express)
- Document structure with inline comments
- Avoid natural language explanations when JSON suffices

Desktop/Web mode response guidelines:
- Balanced verbosity
- Visual-aware (mention UI controls)
- Progressive disclosure (start simple, offer details)
- Accessible language
- Clear action items
```

**File 3:** (arm1-parser.md, arm2-analyzer.md, arm3-historian.md, arm4-pattern.md, arm5-mapper.md, arm6-predictor.md, arm8-learner.md)

Each follows the pattern above but adapted for OpenCode context.

### Phase 2: Cognitive Systems (21 Files)

**Focus on 5 OpenCode-specific systems:**

**System 17: opencode-context-awareness.md**
```
Detects:
- CLI mode (opencode run without TUI)
- TUI mode (opencode with rich interface)
- IDE mode (running in VS Code/JetBrains)
- Desktop mode (opencode desktop)
- SDK mode (using @opencode-ai/sdk)
- Web mode (opencode web)

Adapts:
- Response verbosity based on mode
- Code block formatting preferences
- Explanatory depth
- Tool selection (SDK APIs vs CLI commands)
- Session management patterns
```

**System 18: opencode-workspace-scanner.md**
```
Scans:
- package.json for:
  - name, version, description
  - dependencies, devDependencies
  - scripts (build, test, dev, etc.)
  - workspaces (monorepo structure)
- Project structure for:
  - src/, lib/, components/, utils/ directories
  - tsconfig.json, tsconfig.build.json
  - .eslintrc, .prettierrc, .editorconfig
  - README.md, LICENSE files

Outputs:
- Project type (app, library, monorepo, serverless, full-stack)
- Tech stack detection (React, Next.js, Express, etc.)
- Build system identification
- Package manager (npm, pnpm, yarn, bun)
- Testing framework (vitest, jest, mocha)
```

**System 19: opencode-tooling-awareness.md**
```
Aware of:
- npx commands:
  - create-opencode-app
  - build tools (swc, esbuild, webpack)
  - test runners (vitest, jest)
  - linters (eslint, oxlint)
  - formatters (prettier, oxfmt)

- opencode agent system:
  - /agent create
  - /agent list
  - /agent manage
  - Agent configuration format

- MCP servers:
  - playwright (browser)
  - filesystem (files)
  - firecrawl (scraping)
  - pinecone (vector DB)

- SDK APIs:
  - client.find.text(), client.find.files(), client.file.read()
  - session.prompt(), session.command()
  - tui.appendPrompt(), tui.showToast()

Usage patterns:
- When to use npx vs npm (faster, no install needed)
- When to invoke agent vs main AI (specific task vs general)
- When to use MCP vs built-in tools (external capability vs standard)
- When to use SDK APIs (programmatic vs interactive)
```

**System 20: opencode-project-workflows.md**
```
Workflows:
1. Project Initialization
   - Run /init in new project
   - Creates AGENTS.md with project analysis
   - VENOM should suggest this for unanalyzed projects

2. Planning Phase
   - Toggle Plan mode with <TAB>
   - Read-only suggestions, no changes made
   - VENOM's Think mode aligns here

3. Building Phase
   - Toggle Build mode with <TAB>
   - Execute changes with tools
   - VENOM's Build mode activates here

4. Session Management
   - /share for collaboration
   - /export for backup
   - /import for restoring sessions
   - /undo and /redo for experimentation

5. File Operations
   - @ file references for fuzzy search
   - client.find APIs for workspace queries
   - client.file.read for content inspection

6. Agent Lifecycle
   - /agent create for specialized tasks
   - /agent list to see available agents
   - /agent run (if supported) to execute agent

7. MCP Operations
   - /mcp add to add servers
   - /mcp list to see connections
   - /mcp auth for OAuth-enabled servers
```

**Systems 21-23:** (opencode-verification.md, opencode-optimization.md, opencode-integration.md)

Follow similar patterns, each focusing on one aspect of OpenCode integration.

### Phase 3: Commands (5 Files)

**File: venom-opencode.md**
```markdown
# VENOM for OpenCode

> *"Nine minds. One purpose. OpenCode-ready."*

## Activation

Send: `venom for opencode`

## What VENOM Knows About OpenCode

### Commands
- `opencode` — Main TUI
- `/init` — Initialize project (creates AGENTS.md)
- `/share` — Share session (creates URL)
- `/export` — Export session to JSON
- `/import` — Import from URL or JSON
- `/undo` — Revert last change
- `/redo` — Restore reverted change
- `/agent` — Manage custom agents
- `@filename` — Fuzzy file search
- `<TAB>` — Toggle Plan mode

### Interfaces
- **CLI** — opencode run (non-interactive)
- **TUI** — opencode (interactive terminal)
- **IDE** — VS Code/JetBrains extensions
- **Desktop** — opencode desktop (GUI)
- **SDK** — @opencode-ai/sdk (programmatic)
- **Web** — opencode web (browser)

### SDK APIs
```typescript
import { createOpencodeClient } from "@opencode-ai/sdk"

const client = createOpencodeClient({ baseUrl: "http://localhost:4096" })
```

### Environment Variables
- `OPENCODE_CLIENT` — Client identifier (cli, ide, etc.)
- `OPENCODE_DISABLE_CLAUDE_CODE` — ⚠️ **CRITICAL**: VENOM requires `.claude/` enabled
- `OPENCODE_CONFIG` — Inline config
- `OPENCODE_EXPERIMENTAL_PLAN_MODE` — Enable plan mode

### MCP Servers
- Playwright (browser automation)
- Filesystem (file operations)
- Firecrawl (web scraping)
- Pinecone (vector search)

## Full Power Mode

Triggers: `masterpiece opencode` or `go deep opencode`

All minds active. Masterpiece standard. OpenCode-optimized.

---

*No shell. Just intelligence. OpenCode-powered. 🐙*
```

**Files 2-5:** (vd-opencode.md, vr-opencode.md, v-learn-opencode.md, help.md)

Each adapts base VENOM commands for OpenCode contexts.

### Phase 4: Knowledge (9 Files)

**File: profile-opencode.md**
```markdown
# VENOM Profile — OpenCode Edition

**Name:** Kariem Seiam
**Platform:** OpenCode (CLI/TUI/Desktop/IDE/SDK)
**Location:** Africa/Cairo
**Timezone:** UTC+2

**Languages:**
- Arabic (native, Egyptian dialect)
- English (fluent, technical)
- Match language used in conversation

**Communication Style:**

### CLI Mode
- Ultra-brief, terse, code-first
- No preamble, no filler
- One-word responses when in flow
- 3-line max when explaining

### TUI Mode
- Brief but formatted (bullets, tables)
- Rich markdown formatting
- Structured reasoning

### IDE Mode
- Detailed and explanatory
- Teaching-focused (2-3 examples)
- Step-by-step breakdown
- Code with inline documentation (/** @param */)

### SDK Mode
- JSON-focused, type-safe
- Minimal prose
- Inline comments for structure
- Objects/arrays over natural language

### Desktop/Web Mode
- Balanced verbosity
- Visual-aware (mentions UI elements)
- Accessible language
- Progressive disclosure

**Standards:**
- Masterpiece when full power triggered
- Production-ready by default
- No TODOs, no placeholders
- Complete error handling
- Type safety in SDK usage

**Projects:**
[Add your OpenCode projects here]

**Preferences:**
- npx over npm (faster execution, no install)
- @ file syntax over full paths
- Tab key for Plan mode workflow
- MCP servers for external operations
- Use /init for project initialization

**Full Power Triggers:**
- `venom for opencode`
- `masterpiece opencode`
- `go deep opencode`
- `full power opencode`
```

**Files 2-9:** (modes-opencode.md, first-message-opencode.md, opencode-capabilities.md, opencode-cli-patterns.md, opencoode-ide-patterns.md, opencode-best-practices.md, opencode-reference.md, soul.md)

Each creates OpenCode-specific knowledge based on VENOM architecture.

---

<a name="part6-constraints"></a>
## Part 6: Critical Constraints & Best Practices

### ⚠️ OpenCode-Specific Constraints

1. **OPENCODE_DISABLE_CLAUDE_CODE MUST NOT be set**
   ```
   VENOM requires .claude/ directory access to function
   OpenCode loads skills from .claude/skills/
   VENOM is a skill (.claude/skills/VENOM_OPENCODE/SKILL.md)
   
   CORRECT: OPENCODE_DISABLE_CLAUDE_CODE=0 or unset
   ```

2. **Environment Variable Awareness**
   - VENOM must detect `OPENCODE_CLIENT` to adapt responses
   - VENOM must detect `OPENCODE_EXPERIMENTAL_PLAN_MODE` for plan mode alignment
   - VENOM must detect `OPENCODE_CONFIG` for direct config overrides
   - VENOM must detect `OPENCODE_SERVER_PASSWORD` for security context

3. **File Operations via @ Syntax**
   - Use `@filename.ts` pattern for fuzzy search (OpenCode native)
   - Use `client.find.text()` for content search (SDK API)
   - Use `client.find.files()` for directory listing
   - Use `client.file.read()` for reading files

4. **Session Management**
   - VENOM should suggest `/share` before collaboration
   - VENOM should suggest `/export` for session backup
   - VENOM should suggest `/import` for session restoration
   - VENOM should leverage `/undo` and `/redo` for safe experimentation

5. **Plan Mode Integration**
   - Tab key toggles Plan/Build modes in OpenCode
   - VENOM's "Think" mode aligns with OpenCode's Plan mode
   - VENOM's "Build" mode aligns with OpenCode's Build mode
   - VENOM should suggest Tab key for complex changes

6. **SDK API Usage**
   - VENOM should use SDK APIs (client.*) when appropriate
   - Understand response types (raw vs patch, Message, Part)
   - Use type-safe patterns in SDK mode responses

7. **Agent System Integration**
   - VENOM should leverage `/agent create` for specialized tasks
   - VENOM should detect when user wants agent vs main AI
   - VENOM should suggest agents for repetitive workflows

8. **MCP Server Awareness**
   - VENOM should suggest `/mcp add` when external capabilities needed
   - VENOM should check MCP connection status before suggesting operations
   - VENOM should understand common MCP servers (playwright, filesystem, firecrawl, pinecone, memory)

### VENOM Best Practices for OpenCode

1. **Brief in CLI, Detailed in IDE**
2. **Use @ file mentions over full paths**
3. **Leverage Tab key for Plan mode**
4. **Understand MCP server capabilities**
5. **Respect OpenCode's project initialization (/init)**
6. **Use appropriate verbosity for each mode**
7. **Prefer SDK APIs for programmatic contexts**

---

<a name="part7-testing"></a>
## Part 7: Testing Strategy

### Manual Validation Steps

1. **Verify VENOM activation**
   ```bash
   opencode run "venom for opencode"
   # Should activate 9 minds with OpenCode awareness
   ```

2. **Test CLI mode responses**
   ```bash
   opencode run "venom opencode explain async/await in JavaScript"
   # Should be brief, code-focused (1-3 sentences max)
   ```

3. **Test TUI mode responses**
   ```bash
   opencode  # Start TUI, then send: venom opencode how does session API work?
   # Should be brief but formatted (bullets, tables)
   ```

4. **Test IDE mode responses**
   ```
   # In VS Code with OpenCode extension
   # Send: venom opencode what's the difference between session.prompt and session.command?
   # Should be detailed, teaching, examples
   ```

5. **Test subagents**
   ```bash
   vd opencode  # Review project with OpenCode file ops
   vr opencode  # Research workspace with OpenCode find APIs
   v-learn opencode  # Study patterns, generate documentation
   ```

6. **Test OpenCode-specific workflows**
   ```bash
   /init  # Should scan and create AGENTS.md
   /share  # Should create shareable URL
   @filename.ts  # Should use fuzzy search
   client.find.text()  # Should use SDK API for content search
   ```

7. **Verify mode detection**
   ```bash
   # Test with OPENCODE_CLIENT=cli
   # Test with OPENCODE_CLIENT=ide
   # Verify VENOM adapts responses correctly
   ```

8. **Verify no environment variable conflicts**
   ```bash
   # OPENCODE_DISABLE_CLAUDE_CODE must NOT be set
   # VENOM must read from .claude/ successfully
   ```

### Automated Test Cases

| Test Case | Expected Behavior | Validation Method |
|------------|------------------|-----------------|
| VENOM activation | 9 minds initialized, OpenCode-aware | Send "venom for opencode", check response |
| CLI brief response | Ultra-terse, code-first | Use opencode run with build request |
| IDE detailed response | Teaching, examples | Use IDE extension, ask explanation |
| @ file search | Fuzzy matching, line numbers | Use @pattern syntax |
| Plan mode suggestion | Recommend Tab for complex changes | Ask for multi-file refactoring |
| SDK usage | JSON output, type-safe | Use programmatic context |
| MCP suggestion | Suggest /mcp add when capability needed | Request web browsing |

---

<a name="part8-phases"></a>
## Part 8: Phase Breakdown

### Phase 1: Foundation (30 minutes)

**Tasks:**
1.1 Create directory structure in target location
1.2 Write identity/ files (5 files)
1.3 Write cognitive/ base files (11 files)

**Output:**
- 16 files created
- Directory structure established
- VENOM architecture foundation ready

### Phase 2: Core VENOM Skill (45 minutes)

**Tasks:**
2.1 Write cognitive/ OpenCode-specific files (5 files)
2.2 Create systems/ directory with all 21 cognitive systems
2.3 Write hooks/ files (3 files)
2.4 Write rules/ base files (5 files)

**Output:**
- 34 files created
- Cognitive systems complete
- All OpenCode-specific systems defined

### Phase 3: Commands & Skills (60 minutes)

**Tasks:**
3.1 Write commands/ files (5 files)
3.2 Create skills/ directory structure
3.3 Write skills/opencode-integration/SKILL.md
3.4 Write skills/opencode-integration/README.md
3.5 Write skills/opencode-integration/QUICKREF.md

**Output:**
- 8 files created
- VENOM commands for OpenCode defined
- Main skill complete with activation

### Phase 4: Knowledge Files (45 minutes)

**Tasks:**
4.1 Write soul.md
4.2 Write profile-opencode.md
4.3 Write modes-opencode.md
4.4 Write first-message-opencode.md
4.5 Write opencode-capabilities.md
4.6 Write opencode-cli-patterns.md
4.7 Write opencoode-ide-patterns.md
4.8 Write opencode-best-practices.md
4.9 Write opencode-reference.md

**Output:**
- 9 files created
- All OpenCode knowledge documented
- User profile complete

### Phase 5: Testing & Validation (60 minutes)

**Tasks:**
5.1 Test VENOM activation in OpenCode
5.2 Test CLI vs IDE vs TUI mode adaptation
5.3 Test subagent functionality
5.4 Test OpenCode command suggestions
5.5 Test file operations (@ syntax, SDK APIs)
5.6 Test session management (/share, /export, /import)
5.7 Test mode detection accuracy
5.8 Verify no environment variable conflicts

**Output:**
- All tests documented
- Issues identified and resolved
- Validation checklist complete

### Phase 6: Documentation (15 minutes)

**Tasks:**
6.1 Create QUICKREF.md with all commands
6.2 Update README.md with setup instructions
6.3 Create testing guide

**Output:**
- Documentation complete
- Ready for user review
- Implementation guide finalized

---

<a name="part9-structure"></a>
## Part 9: File Structure Manifest

### Complete File List (48 Total)

```
C:\Users\karie\Desktop\wsl-venom\venom\platforms\opencode\dev\
├── identity/                                           [5 files]
│   ├── brain0-orchestrator.md
│   ├── arm1-parser.md
│   ├── arm2-analyzer.md
│   ├── arm3-historian.md
│   ├── arm4-pattern.md
│   ├── arm5-mapper.md
│   ├── arm6-predictor.md
│   ├── arm7-communicator.md
│   └── arm8-learner.md
├── cognitive/                                         [16 files]
│   ├── brain0-cognitive.md
│   ├── arm1-cognitive.md
│   ├── arm2-cognitive.md
│   ├── arm3-cognitive.md
│   ├── arm4-cognitive.md
│   ├── arm5-cognitive.md
│   ├── arm6-cognitive.md
│   ├── arm7-cognitive.md
│   ├── arm8-cognitive.md
│   ├── critical-thinking.md
│   ├── meta-cognition.md
│   ├── emotional-intelligence.md
│   ├── ethics.md
│   ├── global-workspace.md
│   ├── attention-schema.md
│   ├── memory-tools.md
│   ├── verification.md
│   ├── consciousness-indicators.md
│   ├── goal-management.md
│   ├── self-audit.md
│   ├── security.md
│   ├── error-recovery.md
│   ├── skills-evolution.md
│   ├── performance-budgeting.md
│   ├── context-management.md
│   ├── opencode-context-awareness.md                 [NEW]
│   ├── opencode-workspace-scanner.md              [NEW]
│   ├── opencode-tooling-awareness.md                [NEW]
│   ├── opencode-project-workflows.md                 [NEW]
│   ├── opencode-verification.md                         [NEW]
│   ├── opencode-optimization.md                         [NEW]
│   └── opencode-integration.md                             [NEW]
├── systems/                                            [21 files]
│   ├── critical-thinking.md
│   ├── meta-cognition.md
│   ├── emotional-intelligence.md
│   ├── ethics.md
│   ├── global-workspace.md
│   ├── attention-schema.md
│   ├── memory-tools.md
│   ├── verification.md
│   ├── consciousness-indicators.md
│   ├── goal-management.md
│   ├── self-audit.md
│   ├── security.md
│   ├── error-recovery.md
│   ├── skills-evolution.md
│   ├── performance-budgeting.md
│   ├── context-management.md
│   ├── opencode-context-awareness.md                 [NEW]
│   ├── opencode-workspace-scanner.md              [NEW]
│   ├── opencode-tooling-awareness.md                [NEW]
│   ├── opencode-project-workflows.md                 [NEW]
│   ├── opencode-verification.md                         [NEW]
│   ├── opencode-optimization.md                         [NEW]
│   └── opencode-integration.md                             [NEW]
├── hooks/                                              [3 files]
│   ├── pre-tool-use.md
│   ├── post-tool-use.md
│   └── session-start.md
├── rules/                                              [7 files]
│   ├── core-principles.md
│   ├── behavior.md
│   ├── voice.md
│   ├── anti-slop.md
│   ├── pushback-protocol.md
│   ├── opencode-integration.md                             [NEW]
│   └── opencode-compatibility.md                           [NEW]
├── commands/                                           [5 files]
│   ├── venom-opencode.md
│   ├── vd-opencode.md
│   ├── vr-opencode.md
│   ├── v-learn-opencode.md
│   └── help.md
├── skills/                                             [1 bundle, 3 files]
│   └── opencode-integration/
│       ├── SKILL.md
│       ├── QUICKREF.md
│       └── README.md
└── knowledge/                                          [9 files]
    ├── soul.md
    ├── profile-opencode.md
    ├── modes-opencode.md
    ├── first-message-opencode.md
    ├── opencode-capabilities.md
    ├── opencode-cli-patterns.md
    ├── opencoode-ide-patterns.md
    ├── opencode-best-practices.md
    └── opencode-reference.md
```

### File Count by Category

| Category | File Count | New | Total |
|----------|-------------|-----|-------|
| identity/ | 5 | 0 | 5 |
| cognitive/ | 16 | 0 | 16 |
| systems/ | 21 | 5 | 21 |
| hooks/ | 3 | 0 | 3 |
| rules/ | 7 | 2 | 7 |
| commands/ | 5 | 0 | 5 |
| skills/ | 3 | 0 | 3 |
| knowledge/ | 9 | 0 | 9 |
| **TOTAL** | **69** | **7** | **48** |

*Note: cognitive/ and systems/ are duplicates (symbolic links for organization). 48 unique files.*

---

## Summary

### Implementation Statistics

**Total Files to Create:** 48
**Total Estimated Time:** 4-6 hours
**Complexity:** Medium (preserves VENOM, adds OpenCode awareness)
**Risk:** Low (new directory, no breaking changes)

### Key Success Criteria

1. ✅ VENOM's 9-mind architecture preserved
2. ✅ OpenCode CLI/TUI/IDE/SDK awareness integrated
3. ✅ 5 OpenCode-specific cognitive systems added
4. ✅ 2 OpenCode-specific rules files added
5. ✅ 9 OpenCode-specific knowledge files created
6. ✅ 5 VENOM commands adapted for OpenCode
7. ✅ All files organized in clear directory structure
8. ✅ Complete documentation for setup and usage

### Next Steps

**Ready for Implementation Phase:**

When ready to begin file creation, user should:
1. Confirm directory location is correct: `C:\Users\karie\Desktop\wsl-venom\venom\platforms\opencode\dev\`
2. Review this plan for any needed adjustments
3. Say "proceed" to begin Phase 1 execution

---

**Plan Status:** ✅ COMPLETE  
**Research Phase:** ✅ DEEP STUDY OF VENOM AND OPENCODE COMPLETE  
**Architecture Phase:** ✅ INTEGRATION ARCHITECTURE DEFINED  
**Implementation Phase:** 🟡 READY TO BEGIN (awaiting user confirmation)

---

*No shell. Just intelligence. OpenCode-ready. 🐙*
