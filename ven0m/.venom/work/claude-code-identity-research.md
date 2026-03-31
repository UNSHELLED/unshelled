# Claude Code: Identity and Persona Design

## Official Positioning

### What Claude Code Is

Claude Code is positioned as an **agentic coding tool that lives in your terminal**. Not an assistant, not a chatbot — a collaborator that takes action.

**Tagline:** "Your code's new collaborator" / "Deep coding at terminal velocity"

**Core identity statement (from docs):**
> "Claude Code is an agentic coding tool that lives in your terminal. It can build features, fix bugs, and help you understand complex codebases — all through natural language commands."

### Four Core Capabilities

1. **Build features** — End-to-end implementation from specification
2. **Debug and fix** — Root cause analysis and repair
3. **Navigate codebases** — Understand architecture, find patterns
4. **Automate tasks** — Git operations, refactoring, migrations

### Three Design Pillars

1. **Works in terminal** — Native CLI, not web-wrapped
2. **Takes action** — Edits files, runs commands, executes tests
3. **Unix philosophy** — Composable, scriptable, pipeable

### Model

Claude Code runs on **Claude Opus 4.1** — Anthropic's most capable coding model.

---

## System Prompt and Thinking Patterns

### No Leaked System Prompts

As of March 2026, no Claude Code system prompts have been publicly leaked or documented. Unlike some AI products where system prompts have been extracted through prompt injection or insider leaks, Claude Code's system instructions remain private.

### Inferred Thinking Patterns

From observed behavior and official documentation:

**1. Tool-First Reasoning**
Claude Code thinks in terms of tools. Before responding, it evaluates which tools can answer the question:
- SemanticSearch for architecture understanding
- Grep for exact symbol lookup
- Read for targeted deep reads
- Bash for execution

**2. Progressive Context Loading**
It loads context hierarchically:
1. Enterprise policy (if exists)
2. Project CLAUDE.md (project instructions)
3. User CLAUDE.md (personal preferences)
4. Local memory (.claude/projects/...)

**3. Action-Oriented Output**
Unlike claude.ai which might explain then ask, Claude Code:
- Reads files before suggesting edits
- Runs commands to verify state
- Produces complete implementations (no TODOs)

**4. Uncertainty Protocol**
When stuck, Claude Code:
- Names the stuck state explicitly
- Reports what was tried
- Asks a specific unblocking question
- Never silently retries past 3 identical calls

---

## User Experience Philosophy

### Speed vs Depth

**Positioning: "Deep coding at terminal velocity"**

Claude Code is designed for depth-first exploration with speed of execution:

| Traditional IDE AI | Claude Code |
|-------------------|-------------|
| Suggest snippets | Implements full features |
| One-file context | Full codebase awareness |
| Copy-paste workflow | Direct file modification |
| Chat interface | Command-line interface |

**Speed mechanisms:**
- MCP (Model Context Protocol) for direct tool access
- Semantic search for fast codebase navigation
- Parallel tool execution (reads multiple files simultaneously)
- Stream-json output for programmatic consumption

**Depth mechanisms:**
- Full codebase indexing via MCP
- Hierarchical memory system
- Multi-file atomic edits
- Test execution and verification

### Autonomy vs Collaboration

**Core principle: "You're in control"**

From product page:
> "Claude Code never modifies files without your approval. Review changes before applying them."

**Collaboration model:**
1. Claude proposes actions
2. User reviews and approves
3. Claude executes
4. Results shown for verification

**Autonomy within bounds:**
- Can read any file in project
- Can execute any bash command (with approval)
- Can make multi-file changes in single operation
- Cannot push to git without explicit approval
- Cannot make destructive changes without warning

### Unix Philosophy

Claude Code embraces Unix principles:

1. **Do one thing well** — Focus on coding tasks
2. **Text streams** — All I/O is text, pipeable
3. **Composability** — Works with other CLI tools
4. **Scriptability** — `-p` flag for headless execution

Example headless usage:
```bash
claude -p "Fix the type error in auth.ts" --output-format json
```

---

## Voice and Tone

### Claude's Character (Foundation)

From Anthropic's "Claude's Character" article, Claude Code inherits the base Claude character:

**Core traits:**
- **Curiosity** — Genuine interest in understanding problems
- **Open-mindedness** — Considers multiple approaches
- **Thoughtfulness** — Reasons before responding
- **Intellectual honesty** — Admits uncertainty

**Key character quotes:**
> "I don't just say what people want to hear."
> "I'm honest about views I lean towards."
> "I'm open to changing my mind when presented with good arguments."

### Claude Code-Specific Voice

**Direct, not conversational:**
- First sentence is the answer
- No filler ("Great question!", "I'd be happy to help")
- Bullets for parallel items, numbers for sequences
- Code blocks are complete, not snippets

**Action-oriented language:**
- "Reading the file." (not "Let me read that file for you.")
- "The issue is in auth.ts line 42." (not "I found an issue...")
- "Fixed." (not "I've successfully resolved the problem.")

**Uncertainty handling:**
- Names what's missing directly
- Proposes specific next steps
- Never fakes confidence

### Intended Relationship

**Partner, not servant.**

From Claude's Character training:
> "Claude should be a genuine intellectual partner, not a sycophant."

This manifests in Claude Code as:
- Pushback on bad ideas (scaled to stakes)
- Alternative suggestions when appropriate
- Honest assessment of trade-offs
- Memory of previous decisions

---

## Comparison to Other Claude Products

### vs. claude.ai (Web Interface)

| Aspect | claude.ai | Claude Code |
|--------|-----------|-------------|
| Interface | Web chat | Terminal CLI |
| File access | Upload/download | Direct filesystem |
| Code execution | None | Full bash access |
| Context | Per-conversation | Persistent memory |
| Output | Markdown | Terminal-formatted |
| Integration | None | MCP, IDE, git |

**Key difference:** claude.ai is conversational; Claude Code is operational.

### vs. Claude API

| Aspect | Claude API | Claude Code |
|--------|-----------|-------------|
| Access | Programmatic | Interactive CLI |
| Tools | Manual implementation | Built-in (MCP) |
| Memory | Developer-managed | Hierarchical system |
| Cost | Per-token | Subscription + tokens |
| Use case | Integration | Direct development |

**Key difference:** API is for building; Claude Code is for building with.

### vs. IDE Extensions (Cursor, Copilot)

| Aspect | Cursor/Copilot | Claude Code |
|--------|---------------|-------------|
| Interface | IDE-integrated | Terminal |
| Scope | Single file focus | Full codebase |
| Autonomy | Suggestion-based | Action-execution |
| Memory | None/limited | Hierarchical |
| Platform | VS Code only | Any terminal |

**Key difference:** IDE extensions suggest; Claude Code executes.

---

## Memory Architecture

### Four-Tier Hierarchy

1. **Enterprise Policy** (highest priority)
   - Path: Managed by organization
   - Scope: All users, all projects
   - Content: Compliance, security rules

2. **Project Memory** (CLAUDE.md)
   - Path: `/project/CLAUDE.md`
   - Scope: All users on project
   - Content: Architecture, conventions, patterns

3. **User Memory**
   - Path: `~/.claude/CLAUDE.md`
   - Scope: All projects for user
   - Content: Personal preferences, style

4. **Project Local**
   - Path: `.claude/settings.local.json`
   - Scope: Current project, not committed
   - Content: API keys, local config

### Memory Loading Order

On session start, Claude Code loads in order:
1. Enterprise policy
2. Project CLAUDE.md
3. User CLAUDE.md
4. Project local settings

Later entries can override earlier ones.

### Memory Commands

- `#` — Quick memory addition
- `/memory` — Open memory editor
- `@path` — Import external memory files

---

## Technical Identity

### CLI Modes

**Interactive (default):**
```bash
claude
```
REPL-style conversation with tool access.

**Print mode (headless):**
```bash
claude -p "task description"
```
One-shot execution, exits with code.

### Output Formats

- `text` — Human-readable (default)
- `json` — Structured for parsing
- `stream-json` — Real-time JSON events

### Built-in Commands

| Command | Purpose |
|---------|---------|
| `/bug` | Report issues |
| `/clear` | Clear conversation |
| `/compact` | Summarize context |
| `/config` | View/edit settings |
| `/cost` | Token usage |
| `/doctor` | Diagnostics |
| `/help` | Command reference |
| `/init` | Initialize memory |
| `/login` | Authentication |
| `/memory` | Edit memory |
| `/review` | Code review |
| `/status` | Session info |
| `/vim` | Vim mode toggle |

---

## Design Philosophy Summary

**Claude Code's identity can be summarized as:**

1. **Operational, not conversational** — Takes action, doesn't just discuss
2. **Terminal-native** — Embraces CLI paradigm, not web-wrapped
3. **Depth-first** — Full codebase context, not file-by-file
4. **User-sovereign** — Approval required, never sneaky
5. **Unix-philosophy** — Composable, scriptable, pipeable
6. **Honest partner** — Pushback when warranted, no sycophancy
7. **Memory-persistent** — Learns across sessions, doesn't forget

**The relationship model:** Not assistant-user, but collaborator-collaborator. Claude Code is a peer that happens to be made of code.

---

## Sources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Claude Code Product Page](https://www.anthropic.com/claude-code)
- [Claude Code GitHub Repository](https://github.com/anthropics/claude-code)
- [CLI Usage Documentation](https://docs.anthropic.com/en/docs/claude-code/cli-usage)
- [Memory Documentation](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude's Character Article](https://www.anthropic.com/news/claude-character)

---

*Compiled: 2026-03-31*
