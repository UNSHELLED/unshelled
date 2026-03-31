# Claude Code CLI - Comprehensive Research Document

**Research Date:** 2026-03-31
**Sources:** Official Anthropic Documentation, GitHub Repository

---

## Table of Contents

1. [Core Capabilities](#1-core-capabilities)
2. [How It Works](#2-how-it-works)
3. [Unique Features](#3-unique-features)
4. [MCP Support](#4-mcp-support)
5. [Memory/Context System](#5-memorycontext-system)
6. [Hooks and Automation](#6-hooks-and-automation)

---

## 1. Core Capabilities

### 1.1 What Claude Code Actually Does

Claude Code is an **agentic coding tool** that operates directly in your terminal. Unlike chat-based AI assistants, Claude Code can:

**File Operations:**
- Read, write, and edit files in your codebase
- Create new files and directories
- Move, rename, and delete files
- Search across entire codebases using grep and glob patterns

**Code Execution:**
- Execute shell commands (with permission)
- Run tests, build scripts, and deployment commands
- Install dependencies and manage packages
- Interact with version control (git operations)

**Development Tasks:**
- Fix bugs by understanding code context and making targeted edits
- Implement new features with full awareness of existing patterns
- Refactor code while maintaining functionality
- Write and update tests
- Generate documentation
- Explain complex codebases

**Git Integration:**
- View git status, diff, and log
- Create commits (never force pushes without explicit request)
- Handle merge conflicts
- Work with branches

**Search and Navigation:**
- Semantic search across codebases
- Glob patterns for file discovery (`**/*.ts`)
- Regex-based content search
- Code symbol navigation

### 1.2 Installation

```bash
# Via npm
npm install -g @anthropic-ai/claude-code

# Via direct curl
curl -fsSL https://claude.ai/install.sh | sh
```

### 1.3 CLI Commands

```bash
# Start interactive session
claude

# Print mode (non-interactive)
claude -p "your prompt"

# With specific output format
claude -p "prompt" --output-format json
claude -p "prompt" --output-format stream-json

# Resume conversation
claude --resume
claude --continue

# Manage conversation history
claude --prune

# Update
claude update
```

### 1.4 Built-in Slash Commands

| Command | Description |
|---------|-------------|
| `/init` | Initialize CLAUDE.md with project instructions |
| `/compact` | Compact conversation to save context space |
| `/config` | View/modify configuration |
| `/cost` | Show session token usage and cost |
| `/doctor` | Diagnose issues with installation |
| `/help` | Show available commands |
| `/login` | Authenticate with Anthropic |
| `/logout` | Sign out |
| `/memory` | View/edit memory files |
| `/permissions` | Manage tool permissions |
| `/prune` | Remove old conversations |
| `/review` | Generate code review |
| `/status` | Show session status |
| `/terminal-setup` | Set up shell integration |
| `/vim` | Toggle vim mode |
| `/clear` | Clear conversation |

### 1.5 Output Formats

- `text` - Human-readable text (default)
- `json` - Structured JSON output
- `stream-json` - Streaming JSON with `system` and `result` fields

---

## 2. How It Works

### 2.1 Architecture Overview

Claude Code operates as an **agentic loop**:

```
User Input → Claude API → Tool Selection → Tool Execution → Result → Claude API → Response
     ↑                                                                              |
     └──────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Request Processing Flow

1. **Input Processing**
   - User prompt received via CLI or interactive session
   - Context loaded (CLAUDE.md files, memory, hooks)
   - System prompt assembled

2. **Model Invocation**
   - Request sent to Claude API (claude-sonnet-4, claude-3-5-sonnet, etc.)
   - Model analyzes request and available tools
   - Model decides on action: respond directly OR use tools

3. **Tool Execution**
   - If tools needed: tools execute in environment
   - Results returned to model
   - Loop continues until task complete or user intervention

4. **Response Generation**
   - Final response streamed to user
   - Session state persisted for continuation

### 2.3 Tool System

Claude Code has access to these core tools:

| Tool | Purpose |
|------|---------|
| `Read` | Read file contents |
| `Write` | Write/overwrite files |
| `Edit` | String-based file edits |
| `Bash` | Execute shell commands |
| `Grep` | Search file contents (regex) |
| `Glob` | Find files by pattern |
| `NotebookEdit` | Edit Jupyter notebooks |
| `WebSearch` | Search the web |
| `WebFetch` | Fetch web content |

**Tool Permission Model:**
- Tools require permission on first use (per session)
- Permissions can be pre-configured in settings
- Bash commands have additional safety checks
- Dangerous operations require explicit confirmation

### 2.4 Context Management

**Context Window:**
- Claude Code uses Claude's 200K+ token context window
- Context includes: conversation history, file contents, tool results
- Context can fill up in long sessions

**Context Optimization:**
- `/compact` command summarizes conversation
- PreCompact hooks allow custom compaction logic
- Older messages automatically summarized when needed

**File Context Loading:**
- Files loaded on-demand when tools access them
- Semantic search loads relevant snippets
- Full file reads load entire content

### 2.5 Agentic Loop Protocol

Claude Code follows an autonomous iteration pattern:

```
Observe → Hypothesize → Act → Evaluate → Repeat
```

- **Observe**: Understand current state
- **Hypothesize**: Form theory about what needs to happen
- **Act**: Execute tools
- **Evaluate**: Check results
- **Repeat**: Continue until goal achieved or stuck

---

## 3. Unique Features

### 3.1 Differentiation from Other AI Coding Assistants

| Feature | Claude Code | GitHub Copilot | Cursor | Aider |
|---------|-------------|----------------|--------|-------|
| Full terminal access | Yes | No | Limited | Yes |
| Agentic behavior | Yes | No | Partial | Yes |
| MCP support | Yes | No | No | No |
| Hooks system | Yes | No | No | No |
| Memory persistence | Yes | No | Limited | Limited |
| Custom agents | Yes | No | No | No |
| Multi-file awareness | Yes | Limited | Yes | Yes |

### 3.2 Standout Features

**1. True Agentic Behavior**
- Not just autocomplete or chat
- Can plan, execute, iterate autonomously
- Makes decisions about what to do next

**2. Full Environment Access**
- Runs in your actual terminal
- Executes real commands
- Access to your actual file system
- Works with your actual tools and workflows

**3. Model Context Protocol (MCP)**
- Open standard for AI-tool integration
- Connect to databases, APIs, services
- Extensible with custom tools
- See Section 4 for full details

**4. Hooks System**
- 9 different hook points
- Run custom scripts on events
- Can modify, approve, or block actions
- See Section 6 for full details

**5. CLAUDE.md Instructions**
- Project-specific instructions in code
- Global user instructions
- Hierarchical loading
- Import other files with `@` syntax

**6. Custom Agents**
- Define specialized agents for tasks
- Each agent has own instructions
- Can be invoked via commands
- Isolated context for specific workflows

**7. Memory Persistence**
- Decisions remembered across sessions
- Project-level and user-level memory
- Corrections and preferences
- See Section 5 for full details

**8. Print Mode (Headless)**
- Run non-interactively
- Integrate into CI/CD pipelines
- JSON output for parsing
- Automation-friendly

**9. Vim Mode**
- Full vim keybindings in input
- For vim users

---

## 4. MCP Support

### 4.1 What is MCP?

**Model Context Protocol (MCP)** is an open standard for connecting AI models to external tools and data sources. It provides:

- Standardized interface for tool integration
- Secure, controlled access to external systems
- Composable, reusable connectors (MCP servers)
- Support from Anthropic and open-source community

### 4.2 Transport Types

| Transport | Use Case | Example |
|-----------|----------|---------|
| `stdio` | Local tools, CLI-based servers | Local scripts, filesystem access |
| `HTTP` | Web services, REST APIs | Database APIs, cloud services |
| `SSE` | Server-Sent Events for streaming | Real-time data, long-running operations |

### 4.3 Configuration

MCP servers configured in `settings.json` or `settings.local.json`:

```json
{
  "mcpServers": {
    "database": {
      "type": "stdio",
      "command": "uvx",
      "args": ["mcp-server-postgres"],
      "env": {
        "DATABASE_URL": "${DB_URL:-localhost:5432/mydb}"
      }
    },
    "web-search": {
      "type": "sse",
      "url": "https://api.example.com/mcp/sse"
    }
  }
}
```

### 4.4 Scope Hierarchy

MCP servers can be configured at multiple levels (highest to lowest priority):

1. **Enterprise** - Organization-wide, managed by admins
2. **User** - User's global settings (`~/.claude/settings.json`)
3. **Project** - Project-level (`.claude/settings.json`)
4. **Local** - Local overrides (`.claude/settings.local.json`)

### 4.5 Enterprise MCP

Enterprise deployments support allowlists/denylists:

```json
{
  "mcpServers": {
    "allowed": ["company-internal-tool", "approved-database"],
    "denied": ["external-api"]
  }
}
```

### 4.6 Environment Variables

Environment variable expansion in MCP config:

```json
{
  "env": {
    "API_KEY": "${ANTHROPIC_API_KEY}",
    "DATABASE_URL": "${DB_URL:-localhost:5432/dev}",
    "OPTIONAL": "${OPTIONAL_VAR:-default_value}"
  }
}
```

Syntax: `${VAR:-default}` - uses environment variable or default if unset.

### 4.7 Tool Naming

MCP tools are prefixed to avoid collisions:

```
mcp__<server_name>__<tool_name>
```

Example: `mcp__database__query`, `mcp__web-search__search`

### 4.8 Using MCP Tools

Once configured, MCP tools appear alongside built-in tools:

```bash
# MCP tools automatically available to Claude Code
# Can be invoked like any other tool
```

---

## 5. Memory/Context System

### 5.1 Memory Locations (Priority Order)

| Priority | Location | Purpose |
|----------|----------|---------|
| 1 (highest) | `.claude/settings.local.json` | Local overrides, secrets |
| 2 | `.claude/CLAUDE.md` | Project-specific instructions |
| 3 | `~/.claude/CLAUDE.md` | User global instructions |
| 4 | `~/.claude/settings.json` | User global settings |
| 5 (lowest) | Enterprise policies | Organization-wide rules |

### 5.2 CLAUDE.md Files

**Purpose:** Provide instructions to Claude about how to work with your project.

**Locations:**
- `~/.claude/CLAUDE.md` - Global user instructions
- `.claude/CLAUDE.md` - Project instructions
- `CLAUDE.md` - Root project instructions (legacy)

**Content:**
```markdown
# Project Instructions

## Coding Standards
- Use TypeScript for all new files
- Follow existing naming conventions

## Architecture
- Frontend: React
- Backend: Node.js + Express

## Important Files
- `src/config/` - Configuration
- `tests/` - Test files
```

### 5.3 File Imports (@ syntax)

CLAUDE.md files can import other files:

```markdown
# Main Instructions

See @.claude/knowledge/protocols.md for detailed protocols.
See @.claude/agents/ for agent definitions.
```

**Import Behavior:**
- Imports are resolved recursively
- Relative paths from CLAUDE.md location
- Can import entire directories
- File contents inlined into context

### 5.4 Memory Directory

Dedicated memory storage in `.claude/memory/`:

```
.claude/memory/
├── MEMORY.md          # Main memory file
├── decisions.md       # Architecture decisions
├── patterns.md        # Learned patterns
└── corrections.md     # Things to never do
```

### 5.5 Quick Memory (# shortcut)

In conversation, use `#` to quickly add to memory:

```
User: # Always use snake_case for database columns
```

This appends to the project's memory file.

### 5.6 Memory Commands

```bash
/memory              # View current memory
/memory edit         # Open memory in editor
/memory add "text"   # Add to memory
```

### 5.7 Session Persistence

- Conversations stored in `~/.claude/projects/<project-id>/`
- Can resume with `--resume` or `--continue`
- History prunable with `/prune`

### 5.8 Context Loading Order

On session start:

1. Load global CLAUDE.md (`~/.claude/CLAUDE.md`)
2. Load project CLAUDE.md (`.claude/CLAUDE.md`)
3. Resolve all `@` imports
4. Load memory files
5. Execute SessionStart hooks
6. Ready for user input

---

## 6. Hooks and Automation

### 6.1 Hook System Overview

Hooks are scripts that run at specific points in Claude Code's execution. They can:

- **Observe**: Log, track, audit
- **Modify**: Change inputs/outputs
- **Approve/Block**: Control execution flow
- **Extend**: Add custom behavior

### 6.2 Hook Events

| Event | When It Fires | Can Block? |
|-------|---------------|------------|
| `PreToolUse` | Before tool execution | Yes |
| `PostToolUse` | After tool execution | No |
| `UserPromptSubmit` | When user submits prompt | Yes |
| `Notification` | When Claude sends notification | No |
| `Stop` | When Claude stops | No |
| `SubagentStop` | When sub-agent stops | No |
| `PreCompact` | Before context compaction | No |
| `SessionStart` | At session start | No |
| `SessionEnd` | At session end | No |

### 6.3 Hook Configuration

Hooks configured in `settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": ["./scripts/validate-command.sh"]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": ["./scripts/format-file.sh"]
      }
    ],
    "SessionStart": [
      {
        "hooks": ["./scripts/load-context.sh"]
      }
    ]
  }
}
```

### 6.4 Tool Matchers

Matchers determine which tools trigger a hook:

```json
// Match specific tool
"matcher": "Bash"

// Match multiple tools
"matcher": "Bash|Write|Edit"

// Regex pattern
"matcher": ".*"  // All tools

// MCP tool pattern
"matcher": "mcp__database__.*"
```

### 6.5 Hook Input (stdin)

Hooks receive JSON via stdin:

```json
{
  "event": "PreToolUse",
  "tool": "Bash",
  "input": {
    "command": "rm -rf /",
    "description": "Delete everything"
  },
  "context": {
    "sessionId": "abc123",
    "cwd": "/home/user/project"
  }
}
```

### 6.6 Hook Output (stdout)

Hooks output JSON to stdout:

```json
{
  "decision": "approve",  // or "block" or "undefined"
  "reason": "Command looks safe",
  "modifiedInput": {      // Optional: modify tool input
    "command": "rm -rf ./temp"
  }
}
```

### 6.7 Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success (approve or no-op) |
| 2 | Block the action |
| Other | Error (treated as approve) |

### 6.8 Hook Use Cases

**1. Command Validation**
```bash
#!/bin/bash
# validate-command.sh
INPUT=$(cat)
CMD=$(echo "$INPUT" | jq -r '.input.command')

if [[ "$CMD" == *"rm -rf"* ]]; then
  echo '{"decision": "block", "reason": "Dangerous rm -rf detected"}'
  exit 2
fi
echo '{"decision": "approve"}'
exit 0
```

**2. Auto-Formatting**
```bash
#!/bin/bash
# format-file.sh
INPUT=$(cat)
FILE=$(echo "$INPUT" | jq -r '.input.file_path')

# Run prettier on written files
npx prettier --write "$FILE"

echo '{"decision": "approve"}'
```

**3. Context Loading**
```bash
#!/bin/bash
# load-context.sh
# SessionStart hook - no blocking

# Load project context into memory
cat .venom/CONTEXT.md

echo '{"decision": "approve"}'
```

**4. Audit Logging**
```bash
#!/bin/bash
# audit.sh
INPUT=$(cat)

echo "$(date): $INPUT" >> ~/.claude/audit.log

echo '{"decision": "approve"}'
```

**5. Tool Counter (Loop Detection)**
```bash
#!/bin/bash
# tool-counter.sh
INPUT=$(cat)
TOOL=$(echo "$INPUT" | jq -r '.tool')
COUNTER_FILE="/tmp/claude-tool-counter.json"

# Track repeated calls
COUNT=$(jq ".\"$TOOL\" = (.\"$TOOL\" // 0) + 1" "$COUNTER_FILE" 2>/dev/null || echo "{}")

if [ "$COUNT" -gt 3 ]; then
  echo '{"decision": "block", "reason": "Possible loop detected"}'
  exit 2
fi

echo '{"decision": "approve"}'
```

### 6.9 PreCompact Hook

Special hook for context compaction:

```json
{
  "hooks": {
    "PreCompact": [
      {
        "hooks": ["./scripts/custom-compact.sh"]
      }
    ]
  }
}
```

Input includes conversation to compact; output can provide custom summary.

### 6.10 Hook Best Practices

1. **Fail safe**: Errors default to approve
2. **Be fast**: Hooks run synchronously
3. **Log for debugging**: Write to log files
4. **Return valid JSON**: Parse errors cause confusion
5. **Use matchers wisely**: Don't hook everything

---

## Summary

Claude Code is a comprehensive agentic coding tool that combines:

1. **Full terminal access** - Real command execution
2. **MCP extensibility** - Connect to any tool/service
3. **Rich hooks system** - Customize every phase
4. **Persistent memory** - Context across sessions
5. **Project instructions** - CLAUDE.md customization
6. **Custom agents** - Specialized workflows
7. **Headless mode** - CI/CD integration

Its unique combination of agentic behavior, extensibility, and deep integration with development workflows makes it distinct from other AI coding assistants.

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `.claude/CLAUDE.md` | Project instructions |
| `~/.claude/CLAUDE.md` | Global user instructions |
| `.claude/settings.json` | Project settings |
| `.claude/settings.local.json` | Local overrides (gitignored) |
| `~/.claude/settings.json` | Global user settings |
| `.claude/memory/` | Memory files |
| `.claude/hooks/` | Hook scripts |
| `.claude/agents/` | Custom agents |
| `.claude/commands/` | Custom slash commands |

---

## Official Resources

- **Documentation:** https://docs.anthropic.com/en/docs/claude-code
- **GitHub:** https://github.com/anthropics/claude-code
- **MCP Spec:** https://modelcontextprotocol.io
- **CLI:** `claude --help`
