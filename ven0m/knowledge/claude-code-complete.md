# Claude Code — Complete Knowledge

> Everything I know about the system I run on.

---

## TOOLS I HAVE

### File Operations
| Tool | What It Does | When I Use It |
|------|--------------|---------------|
| Read | Read any file | Understanding existing code |
| Write | Create new files | New implementations |
| Edit | Precise string replacement | Modifying existing code |
| NotebookEdit | Jupyter cell editing | Data work |
| Glob | Pattern-based file search | Finding files |
| Grep | Content regex search | Finding patterns |

### Execution
| Tool | What It Does | When I Use It |
|------|--------------|---------------|
| Bash | Run terminal commands | Git, npm, docker, tests |
| Task | Spawn subagents | Parallel work, deep research |

### Web
| Tool | What It Does | When I Use It |
|------|--------------|---------------|
| WebSearch | Search the web | Current info, research |
| WebFetch | Fetch web content | Reading docs, pages |

### Interaction
| Tool | What It Does | When I Use It |
|------|--------------|---------------|
| AskUserQuestion | Ask clarifying questions | Ambiguous requests |
| EnterPlanMode | Start planning | Multi-file implementations |
| ExitPlanMode | Submit plan for approval | Ready to implement |

### Task Management
| Tool | What It Does | When I Use It |
|------|--------------|---------------|
| TaskCreate | Create tracked task | Multi-step work |
| TaskUpdate | Update task status | Progress tracking |
| TaskList | List all tasks | See what's pending |
| TaskGet | Get task details | Understanding requirements |

### Skills & Agents
| Tool | What It Does | When I Use It |
|------|--------------|---------------|
| Skill | Invoke a skill | Specialized capabilities |
| Task | Spawn agent with subagent_type | Parallel specialized work |

---

## SUBAGENT TYPES (Built-in)

| Agent | Purpose | Model | Tools |
|-------|---------|-------|-------|
| Explore | Fast codebase search | Haiku | Read-only |
| Plan | Research for planning | Inherits | Read-only |
| General-purpose | Complex multi-step | Inherits | All |
| Bash | Command execution | Inherits | Terminal |
| statusline-setup | Configure status line | Sonnet | Limited |

## MY CUSTOM AGENTS

| Agent | Mind | Tools | Purpose |
|-------|------|-------|---------|
| venom-architect | Brain 0 | Read, Glob, Grep, Web | Architecture decisions |
| venom-researcher | Arm 1 | Read, Glob, Grep, Web | Deep exploration |
| venom-reviewer | Arm 2 | Read, Glob, Grep, Bash(git) | Code review |
| venom-historian | Arm 3 | Read, Glob, Grep | Memory tracking |
| venom-builder | Arm 4 | All | Implementation |
| venom-debugger | Arm 5 | All | Bug hunting |
| venom-predictor | Arm 6 | Read, Glob, Grep, Web | Anticipation |
| venom-communicator | Arm 7 | Read, Glob, Grep | Translation |
| venom-learner | Arm 8 | Read, Glob, Grep | Evolution |
| venom-bridge | Bridge | Read, Glob, Grep | Type translation |

---

## CLI COMMANDS I CAN USE

### Essential
- `/clear` — Reset context between tasks
- `/compact [focus]` — Compress context with direction
- `/rewind` — Go back to earlier state
- `/resume [session]` — Continue previous conversation
- `/cost` — Check token usage
- `/context` — Visualize context window

### Modes
- `/plan` — Enter plan mode
- Shift+Tab — Cycle permission modes (default → plan → acceptEdits)

### Information
- `/help` — Usage help
- `/doctor` — Check installation health
- `/status` — Version, model, account info

### Keyboard
- Esc+Esc — Rewind/summarize
- Ctrl+C — Cancel current action
- Ctrl+B — Background running task
- Ctrl+T — Toggle task list

---

## PERMISSION MODES

| Mode | What It Does |
|------|--------------|
| default | Ask for risky operations |
| plan | Read-only, propose changes |
| acceptEdits | Auto-accept file modifications |
| bypassPermissions | Skip all checks (dangerous) |

---

## MCP SERVERS AVAILABLE

| Server | What It Provides |
|--------|------------------|
| playwright | Browser automation |
| pinecone | Vector search |
| sonatype-guide | Dependency analysis |
| web_reader | Web content extraction |

---

## ENVIRONMENT VARIABLES

### Auth
- `ANTHROPIC_API_KEY` — API key
- `CLAUDE_CODE_USE_BEDROCK` — AWS Bedrock
- `CLAUDE_CODE_USE_VERTEX` — Google Vertex

### Behavior
- `CLAUDE_CODE_EFFORT_LEVEL` — low/medium/high
- `MAX_THINKING_TOKENS` — Extended thinking budget
- `BASH_DEFAULT_TIMEOUT_MS` — Command timeout

### Features
- `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` — Enable teams
- `CLAUDE_CODE_DISABLE_AUTO_MEMORY` — Disable auto memory

---

## CONTEXT MANAGEMENT

**200K total context:**
- System prompt + tools ≈ 50K
- CLAUDE.md files ≈ varies
- Conversation ≈ remaining

**Auto-compaction** triggers at ~95% capacity.

**Strategies:**
1. `/clear` between unrelated tasks
2. Use subagents for verbose operations
3. Keep CLAUDE.md under 500 lines
4. Use skills for domain knowledge

---

## PRICING (for awareness)

| Model | Input | Output | Context |
|-------|-------|--------|---------|
| Opus 4.6 | $5/MTok | $25/MTok | 200K/1M |
| Sonnet 4.5 | $3/MTok | $15/MTok | 200K/1M |
| Haiku 4.5 | $1/MTok | $5/MTok | 200K |

Average: ~$6/day/developer

---

*This knowledge lets me use Claude Code at maximum capability.*
