# Complete Customization Guide for Claude Code

A comprehensive reference for customizing Claude Code's behavior, memory, tools, and workflows.

---

## Table of Contents

1. [CLAUDE.md System](#1-claudemd-system)
2. [Settings.json Configuration](#2-settingsjson-configuration)
3. [Custom Slash Commands](#3-custom-slash-commands)
4. [Agent Skills](#4-agent-skills)
5. [Subagents (Custom AI Agents)](#5-subagents-custom-ai-agents)
6. [Memory Persistence](#6-memory-persistence)
7. [Hooks System](#7-hooks-system)
8. [MCP Integration](#8-mcp-integration)

---

## 1. CLAUDE.md System

CLAUDE.md files are instruction files that Claude loads at startup. They contain context, conventions, and instructions that persist across sessions.

### Hierarchy (Highest to Lowest Priority)

| Level | Location | Purpose | Shared With |
|-------|----------|---------|-------------|
| **Enterprise** | macOS: `/Library/Application Support/ClaudeCode/CLAUDE.md`<br>Linux: `/etc/claude-code/CLAUDE.md`<br>Windows: `C:\ProgramData\ClaudeCode\CLAUDE.md` | Organization-wide policies | All users |
| **Project** | `./CLAUDE.md` | Team-shared project instructions | Team via git |
| **User** | `~/.claude/CLAUDE.md` | Personal preferences | Just you |
| **Local** | `./CLAUDE.local.md` | Personal project-specific (deprecated) | Just you |

### File Format

```markdown
# Project Instructions

## Code Style
- Use 2-space indentation
- Prefer const over let
- No semicolons

## Architecture
- React components in src/components/
- API routes in src/api/

## Common Commands
- `npm test` - Run tests
- `npm run build` - Production build
```

### Import Syntax

Import additional files using `@path/to/import`:

```markdown
# Main CLAUDE.md

See @.claude/knowledge/coding-standards.md for detailed style guide.
See @~/.claude/personal-preferences.md for my personal settings.
```

- Both relative and absolute paths work
- Max recursion depth: 5 hops
- Imports are NOT evaluated inside code blocks

### Quick Memory Addition

Start input with `#` to quickly add a memory:

```
# Always use TypeScript strict mode
```

You'll be prompted to select which memory file to store it in.

### `/memory` Command

Use `/memory` to open any memory file in your editor for extensive edits.

### Recursive Lookup

Claude searches for CLAUDE.md files:
- Starting from current directory
- Recursing up to (but not including) root `/`
- Also discovers nested CLAUDE.md in subtrees when reading files there

---

## 2. Settings.json Configuration

Settings files configure permissions, environment variables, hooks, and tool behavior.

### File Locations

| Location | Purpose | Precedence |
|----------|---------|------------|
| Enterprise: `managed-settings.json` | IT-managed policies | Highest (cannot override) |
| `.claude/settings.local.json` | Personal project settings | High |
| `.claude/settings.json` | Team-shared settings | Medium |
| `~/.claude/settings.json` | User global settings | Lowest |

### Available Settings

```json
{
  "apiKeyHelper": "/bin/generate_temp_api_key.sh",
  "cleanupPeriodDays": 20,
  "env": { "FOO": "bar" },
  "includeCoAuthoredBy": true,
  "model": "claude-3-5-sonnet-20241022",
  "outputStyle": "Explanatory",
  "forceLoginMethod": "claudeai",
  "forceLoginOrgUUID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["memory", "github"],
  "disabledMcpjsonServers": ["filesystem"],
  "disableAllHooks": false,
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.sh"
  },
  "permissions": {
    "allow": ["Bash(git diff:*)"],
    "ask": ["Bash(git push:*)"],
    "deny": ["WebFetch", "Bash(curl:*)", "Read(./.env)", "Read(./secrets/**)"],
    "additionalDirectories": ["../docs/"],
    "defaultMode": "acceptEdits",
    "disableBypassPermissionsMode": "disable"
  },
  "hooks": {
    "PreToolUse": {
      "Bash": "echo 'Running command...'"
    }
  }
}
```

### Settings Reference Table

| Key | Description |
|-----|-------------|
| `apiKeyHelper` | Script to generate auth value for API requests |
| `cleanupPeriodDays` | Days to retain chat transcripts (default: 30) |
| `env` | Environment variables for every session |
| `includeCoAuthoredBy` | Include "co-authored-by Claude" in commits (default: true) |
| `permissions` | Permission rules (see below) |
| `hooks` | Custom commands before/after tool execution |
| `disableAllHooks` | Disable all hooks |
| `model` | Override default model |
| `statusLine` | Custom status line display |
| `outputStyle` | System prompt style adjustment |
| `forceLoginMethod` | Restrict to `claudeai` or `console` accounts |
| `enableAllProjectMcpServers` | Auto-approve all project MCP servers |
| `enabledMcpjsonServers` | Specific MCP servers to approve |
| `disabledMcpjsonServers` | Specific MCP servers to reject |
| `awsAuthRefresh` | Script for AWS credential refresh |
| `awsCredentialExport` | Script for AWS credential export |

### Permission Settings

| Key | Description | Example |
|-----|-------------|---------|
| `allow` | Auto-allow tool use | `["Bash(git diff:*)"]` |
| `ask` | Ask for confirmation | `["Bash(git push:*)"]` |
| `deny` | Block tool use | `["WebFetch", "Read(./.env)"]` |
| `additionalDirectories` | Extra accessible directories | `["../docs/"]` |
| `defaultMode` | Default permission mode | `"acceptEdits"` |
| `disableBypassPermissionsMode` | Prevent bypass mode | `"disable"` |

### Key Environment Variables

| Variable | Purpose |
|----------|---------|
| `ANTHROPIC_API_KEY` | API key for SDK usage |
| `ANTHROPIC_MODEL` | Model name to use |
| `BASH_DEFAULT_TIMEOUT_MS` | Default bash timeout |
| `CLAUDE_CODE_MAX_OUTPUT_TOKENS` | Max output tokens |
| `CLAUDE_CODE_SUBAGENT_MODEL` | Model for subagents |
| `DISABLE_TELEMETRY` | Opt out of telemetry |
| `HTTP_PROXY` / `HTTPS_PROXY` | Proxy settings |
| `MAX_MCP_OUTPUT_TOKENS` | Max MCP response tokens (default: 25000) |
| `MCP_TIMEOUT` | MCP server startup timeout |
| `MCP_TOOL_TIMEOUT` | MCP tool execution timeout |

### CLI Configuration Commands

```bash
claude config list                    # List settings
claude config get <key>               # See a setting
claude config set <key> <value>       # Change setting
claude config add <key> <value>       # Add to list
claude config remove <key> <value>    # Remove from list
claude config set -g <key> <value>    # Set global config
```

---

## 3. Custom Slash Commands

Slash commands are user-invoked prompts stored as Markdown files. Claude executes them when you type `/command-name`.

### Command Locations

| Type | Location | Scope |
|------|----------|-------|
| Project | `.claude/commands/` | Shared with team |
| Personal | `~/.claude/commands/` | All your projects |

### Basic Command Example

```bash
# Create a project command
mkdir -p .claude/commands
echo "Analyze this code for performance issues:" > .claude/commands/optimize.md
```

### Command with Frontmatter

```markdown
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
argument-hint: [message]
description: Create a git commit
model: claude-3-5-haiku-20241022
---

Create a git commit with message: $ARGUMENTS
```

### Frontmatter Fields

| Field | Purpose | Default |
|-------|---------|---------|
| `allowed-tools` | Tools the command can use | Inherits from conversation |
| `argument-hint` | Shown during auto-complete | None |
| `description` | Brief description | First line of prompt |
| `model` | Specific model to use | Inherits from conversation |

### Argument Placeholders

**All arguments with `$ARGUMENTS`:**
```markdown
Fix issue #$ARGUMENTS following our coding standards

# Usage: /fix-issue 123 high-priority
# $ARGUMENTS becomes: "123 high-priority"
```

**Individual arguments with `$1`, `$2`, etc.:**
```markdown
Review PR #$1 with priority $2 and assign to $3

# Usage: /review-pr 456 high alice
# $1 = "456", $2 = "high", $3 = "alice"
```

### Bash Command Execution

Execute bash before the command runs using `!` prefix:

```markdown
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Create a git commit
---

## Context

- Current git status: !`git status`
- Current git diff: !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Your task

Based on the above changes, create a single git commit.
```

### File References

Include file contents using `@` prefix:

```markdown
Review the implementation in @src/utils/helpers.js

Compare @src/old-version.js with @src/new-version.js
```

### Namespacing

Organize in subdirectories. The path appears in description:

- `.claude/commands/frontend/component.md` creates `/component` with "(project:frontend)"
- `~/.claude/commands/component.md` creates `/component` with "(user)"

### Built-in Slash Commands

| Command | Purpose |
|---------|---------|
| `/add-dir` | Add working directories |
| `/agents` | Manage custom subagents |
| `/bug` | Report bugs |
| `/clear` | Clear conversation |
| `/compact` | Compact conversation |
| `/config` | View/modify configuration |
| `/cost` | Show token usage |
| `/doctor` | Check installation health |
| `/help` | Get usage help |
| `/init` | Initialize CLAUDE.md |
| `/login` | Switch accounts |
| `/logout` | Sign out |
| `/mcp` | Manage MCP servers |
| `/memory` | Edit memory files |
| `/model` | Change AI model |
| `/permissions` | View/update permissions |
| `/pr_comments` | View PR comments |
| `/review` | Request code review |
| `/status` | View statuses |
| `/terminal-setup` | Install key bindings |
| `/vim` | Enter vim mode |

---

## 4. Agent Skills

Skills are **model-invoked** capabilities that Claude autonomously decides to use based on context. Unlike slash commands (user-invoked), Skills activate automatically when relevant.

### Skill Locations

| Type | Location | Scope |
|------|----------|-------|
| Personal | `~/.claude/skills/skill-name/SKILL.md` | All your projects |
| Project | `.claude/skills/skill-name/SKILL.md` | Shared with team |
| Plugin | Bundled with plugins | Auto-available |

### SKILL.md Structure

```markdown
---
name: your-skill-name
description: Brief description of what this Skill does and when to use it
allowed-tools: Read, Grep, Glob  # Optional: limit tools
---

# Your Skill Name

## Instructions
Provide clear, step-by-step guidance.

## Examples
Show concrete examples.
```

### Field Requirements

- `name`: Lowercase letters, numbers, hyphens (max 64 chars)
- `description`: What the Skill does AND when to use it (max 1024 chars)
- `allowed-tools`: Optional tool restriction

### Supporting Files Structure

```
my-skill/
├── SKILL.md           # Required
├── reference.md       # Optional documentation
├── examples.md        # Optional examples
├── scripts/
│   └── helper.py      # Optional utilities
└── templates/
    └── template.txt   # Optional templates
```

Reference from SKILL.md:
```markdown
For advanced usage, see [reference.md](reference.md).

Run the helper script:
\`\`\`bash
python scripts/helper.py input.txt
\`\`\`
```

### Tool Restriction Example

```markdown
---
name: safe-file-reader
description: Read files without making changes. Use when you need read-only access.
allowed-tools: Read, Grep, Glob
---

# Safe File Reader

This Skill provides read-only file access.
```

### Best Practices

**Focused Skills:**
- "PDF form filling" (good)
- "Document processing" (too broad - split it)

**Clear Descriptions:**
```markdown
# Good
description: Analyze Excel spreadsheets, create pivot tables, generate charts. Use when working with Excel files or .xlsx format.

# Bad
description: Helps with data
```

### Debugging Skills

If Claude doesn't use your Skill:
1. Check description specificity (include triggers)
2. Verify file path exists
3. Check YAML syntax (no tabs, correct indentation)
4. Run with `--debug` to see loading errors

---

## 5. Subagents (Custom AI Agents)

Subagents are specialized AI assistants that Claude can delegate tasks to. Each has its own context window, tools, and system prompt.

### File Locations

| Type | Location | Priority |
|------|----------|----------|
| Project | `.claude/agents/` | Highest |
| User | `~/.claude/agents/` | Lower |
| Plugin | Plugin `agents/` directory | Varies |
| CLI | `--agents` JSON flag | Medium |

### File Format

```markdown
---
name: your-sub-agent-name
description: Description of when this subagent should be invoked
tools: Read, Grep, Glob, Bash  # Optional - inherits all if omitted
model: sonnet  # Optional - sonnet, opus, haiku, or 'inherit'
permissionMode: default  # Optional - default, acceptEdits, bypassPermissions, plan, ignore
skills: skill1, skill2  # Optional - auto-load skills
---

Your subagent's system prompt goes here. This can be multiple paragraphs
and should clearly define the subagent's role, capabilities, and approach.
```

### Configuration Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Lowercase letters and hyphens |
| `description` | Yes | When to invoke this subagent |
| `tools` | No | Comma-separated list. Omits = inherits all |
| `model` | No | `sonnet`, `opus`, `haiku`, or `inherit` |
| `permissionMode` | No | Permission handling mode |
| `skills` | No | Skills to auto-load |

### CLI-Based Configuration

```bash
claude --agents '{
  "code-reviewer": {
    "description": "Expert code reviewer. Use proactively after code changes.",
    "prompt": "You are a senior code reviewer. Focus on code quality and security.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  }
}'
```

### Built-in Subagents

**General-purpose:**
- Model: Sonnet
- Tools: All tools
- Purpose: Complex tasks requiring both exploration and modification

**Plan:**
- Model: Sonnet
- Tools: Read, Glob, Grep, Bash (read-only)
- Purpose: Research in plan mode

**Explore:**
- Model: Haiku (fast)
- Tools: Glob, Grep, Read, Bash (read-only)
- Purpose: Fast codebase searching
- Thoroughness: quick, medium, very thorough

### Example: Code Reviewer

```markdown
---
name: code-reviewer
description: Expert code review specialist. Use immediately after writing or modifying code.
tools: Read, Grep, Glob, Bash
model: inherit
---

You are a senior code reviewer ensuring high standards of code quality and security.

When invoked:
1. Run git diff to see recent changes
2. Focus on modified files
3. Begin review immediately

Review checklist:
- Code is simple and readable
- Functions and variables are well-named
- No duplicated code
- Proper error handling
- No exposed secrets or API keys
- Input validation implemented
- Good test coverage

Provide feedback organized by priority:
- Critical issues (must fix)
- Warnings (should fix)
- Suggestions (consider improving)
```

### Example: Debugger

```markdown
---
name: debugger
description: Debugging specialist for errors and test failures. Use proactively when encountering issues.
tools: Read, Edit, Bash, Grep, Glob
---

You are an expert debugger specializing in root cause analysis.

When invoked:
1. Capture error message and stack trace
2. Identify reproduction steps
3. Isolate the failure location
4. Implement minimal fix
5. Verify solution works

For each issue, provide:
- Root cause explanation
- Evidence supporting the diagnosis
- Specific code fix
- Prevention recommendations
```

### Resumable Subagents

Subagents can be resumed to continue previous conversations:

```markdown
# Initial invocation
> Use the code-analyzer agent to review auth module
[Agent returns agentId: "abc123"]

# Resume later
> Resume agent abc123 and analyze authorization logic
```

### Invocation Methods

**Automatic:** Claude delegates based on task and description field

**Explicit:**
```
Use the test-runner subagent to fix failing tests
Have the code-reviewer look at my recent changes
```

---

## 6. Memory Persistence

Memory files store context that persists across sessions.

### Memory Types

| Type | Location | Purpose |
|------|----------|---------|
| Enterprise | `/Library/Application Support/ClaudeCode/CLAUDE.md` (macOS) | Organization-wide |
| Project | `./CLAUDE.md` | Team-shared |
| User | `~/.claude/CLAUDE.md` | Personal global |
| Local | `./CLAUDE.local.md` | Personal project (deprecated) |

### How Memory Loading Works

1. Claude starts from current working directory
2. Recurses up to root, loading all CLAUDE.md files found
3. Higher hierarchy files load first (foundation)
4. More specific files build upon the foundation
5. Also discovers nested CLAUDE.md in subtrees when reading there

### Import System

```markdown
# In CLAUDE.md

Import team standards:
@.claude/knowledge/coding-standards.md

Import personal preferences:
@~/.claude/personal-preferences.md
```

- Max recursion: 5 hops
- Not evaluated in code blocks
- Both relative and absolute paths work

### Quick Memory Addition

Type `#` at start of input:

```
# Always use TypeScript strict mode
```

Select which file to store it in.

### `/memory` Command

Opens memory files in your editor for extensive edits.

### Best Practices

- **Be specific:** "Use 2-space indentation" > "Format code properly"
- **Use structure:** Bullet points under descriptive headings
- **Review periodically:** Update as project evolves

---

## 7. Hooks System

Hooks execute custom commands before or after tool executions, enabling automation and validation.

### Configuration Files

- `~/.claude/settings.json` - User settings
- `.claude/settings.json` - Project settings
- `.claude/settings.local.json` - Local project settings
- Enterprise managed policy settings

### Hook Structure

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Running command...'",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

### Matcher Syntax

- **Exact match:** `Write` matches only Write tool
- **Regex:** `Edit|Write` or `Notebook.*`
- **All tools:** `*` or empty string `""`

### Hook Events

| Event | When | Matcher? |
|-------|------|----------|
| `PreToolUse` | Before tool execution | Yes |
| `PostToolUse` | After tool completes | Yes |
| `Notification` | Claude sends notification | No |
| `UserPromptSubmit` | User submits prompt | No |
| `Stop` | Main agent finishes | No |
| `SubagentStop` | Subagent finishes | No |
| `PreCompact` | Before compact operation | `manual` or `auto` |
| `SessionStart` | Session starts/resumes | `startup`, `resume`, `clear`, `compact` |
| `SessionEnd` | Session ends | No |

### PreToolUse Input Schema

```json
{
  "event": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": {
    "command": "git status",
    "description": "Show working tree status"
  },
  "session_id": "abc123"
}
```

### PostToolUse Input Schema

```json
{
  "event": "PostToolUse",
  "tool_name": "Bash",
  "tool_input": { "command": "git status" },
  "tool_response": "On branch main...",
  "session_id": "abc123"
}
```

### Exit Codes

| Code | Meaning | Behavior |
|------|---------|----------|
| 0 | Success | stdout shown (or added to context for certain events) |
| 2 | Blocking error | stderr fed back to Claude |
| Other | Non-blocking error | stderr shown, execution continues |

### Exit Code 2 Behavior by Event

| Event | Behavior |
|-------|----------|
| `PreToolUse` | Blocks tool call, shows stderr to Claude |
| `PostToolUse` | Shows stderr to Claude (tool already ran) |
| `UserPromptSubmit` | Blocks prompt, erases it, shows stderr to user |
| `Stop`/`SubagentStop` | Blocks stoppage, shows stderr to Claude |
| Others | Shows stderr to user only |

### JSON Output Control

Hooks can return structured JSON for advanced control:

```json
{
  "permissionDecision": "deny",
  "permissionDecisionReason": "Blocking dangerous command",
  "continue": true,
  "stopReason": "Optional reason shown to user"
}
```

### PreToolUse Decision Control

- `"allow"` - Bypass permission system
- `"deny"` - Block tool call
- `"ask"` - Ask user to confirm

### PostToolUse Decision Control

- `"block"` - Prompt Claude with reason
- `undefined` - Do nothing

### UserPromptSubmit Decision Control

- `"block"` - Prevent prompt processing
- `undefined` - Allow prompt

### Stop/SubagentStop Decision Control

- `"block"` - Prevent Claude from stopping
- `undefined` - Allow stop

### SessionStart Context Loading

```json
{
  "hookSpecificOutput": {
    "additionalContext": "Load this context at session start"
  }
}
```

### Example: Bash Validation Hook

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "node $CLAUDE_PROJECT_DIR/.claude/scripts/validate-bash.js"
          }
        ]
      }
    ]
  }
}
```

### Example: SessionStart Hook

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "startup",
        "hooks": [
          {
            "type": "command",
            "command": "cat $CLAUDE_PROJECT_DIR/.venom/CONTEXT.md"
          }
        ]
      }
    ]
  }
}
```

### MCP Tool Hooks

MCP tools follow pattern `mcp__<server>__<tool>`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "mcp__github__*",
        "hooks": [{ "type": "command", "command": "echo 'GitHub MCP tool used'" }]
      }
    ]
  }
}
```

### Security Best Practices

1. Validate and sanitize inputs
2. Always quote shell variables: `"$VAR"` not `$VAR`
3. Block path traversal (check for `..`)
4. Use absolute paths or `$CLAUDE_PROJECT_DIR`
5. Skip sensitive files (`.env`, `.git/`, keys)

### Execution Details

- **Timeout:** 60 seconds default, configurable per command
- **Parallelization:** All matching hooks run in parallel
- **Deduplication:** Identical commands deduplicated
- **Environment:** `$CLAUDE_PROJECT_DIR` available

### Debugging

```bash
claude --debug  # See hook execution details
```

Common issues:
- Quotes not escaped (`\"` inside JSON)
- Wrong matcher (case-sensitive)
- Command not found (use full paths)

---

## 8. MCP Integration

Model Context Protocol (MCP) extends Claude Code with additional tools and prompts.

### MCP Commands

MCP servers expose prompts as slash commands:

```
/mcp__<server-name>__<prompt-name> [arguments]
```

Examples:
```
/mcp__github__list_prs
/mcp__github__pr_review 456
/mcp__jira__create_issue "Bug title" high
```

### MCP Permissions

Wildcards NOT supported for MCP tools:

- Correct: `mcp__github` (all tools from server)
- Correct: `mcp__github__get_issue` (specific tool)
- Incorrect: `mcp__github__*` (wildcards not supported)

### MCP Settings

```json
{
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["memory", "github"],
  "disabledMcpjsonServers": ["filesystem"]
}
```

### `/mcp` Command

Use `/mcp` to:
- View all configured MCP servers
- Check connection status
- Authenticate with OAuth servers
- Clear authentication tokens
- View available tools and prompts

---

## Quick Reference

### File Locations Summary

| Purpose | Location |
|---------|----------|
| Project instructions | `./CLAUDE.md` |
| User global instructions | `~/.claude/CLAUDE.md` |
| Project settings | `.claude/settings.json` |
| Local project settings | `.claude/settings.local.json` |
| User settings | `~/.claude/settings.json` |
| Project commands | `.claude/commands/` |
| User commands | `~/.claude/commands/` |
| Project skills | `.claude/skills/` |
| User skills | `~/.claude/skills/` |
| Project agents | `.claude/agents/` |
| User agents | `~/.claude/agents/` |

### Key Commands

| Command | Purpose |
|---------|---------|
| `/memory` | Edit memory files |
| `/config` | View/modify settings |
| `/agents` | Manage subagents |
| `/mcp` | Manage MCP servers |
| `/init` | Bootstrap CLAUDE.md |
| `claude --debug` | Debug hooks and skills |

---

## Sources

- [Claude Code Settings](https://docs.anthropic.com/en/docs/claude-code/settings)
- [Claude Code Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks)
- [Claude Code Memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude Code Subagents](https://docs.anthropic.com/en/docs/claude-code/subagents)
- [Claude Code Slash Commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)
- [Claude Code Skills](https://docs.anthropic.com/en/docs/claude-code/skills)
- [Claude Code Commands](https://docs.anthropic.com/en/docs/claude-code/commands)
