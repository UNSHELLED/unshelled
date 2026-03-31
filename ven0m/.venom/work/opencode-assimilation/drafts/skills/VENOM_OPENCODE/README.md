# VENOM for OpenCode — README

**Version:** 1.0.0
**Platform:** OpenCode

---

## Quick Start

### Installation

1. Copy files to your project:
   ```bash
   cp -r dev-repos/clapude-code-venom/v2/.claude/skills/VENOM_OPENCODE/ /path/to/your/project/.claude/skills/
   ```

2. Activate in OpenCode:
   ```bash
   opencode run "venom for opencode"
   ```

3. Seed the relationship:
   ```bash
   # Customize .claude/knowledge/first-message-opencode.md with your details
   # Then send it
   ```

### Structure

```
.claude/skills/VENOM_OPENCODE/
├── SKILL.md              # Main skill file (this file)
├── README.md             # Setup and documentation (this file)
└── QUICKREF.md           # Quick reference
```

---

## What It Does

- **Activates** all nine minds with OpenCode context awareness
- **Detects** OpenCode mode (CLI vs TUI vs IDE vs SDK)
- **Routes** commands to appropriate subagents or systems
- **Learns** OpenCode-specific patterns and preferences
- **Predicts** user needs and suggests commands
- **Adapts** responses based on detected mode
- **Integrates** with OpenCode's CLI, TUI, and SDK interfaces

## Key Features

### OpenCode-Specific Systems
- System 17: OpenCode Context Awareness — Detects CLI/TUI/IDE/SDK modes
- System 18: OpenCode Workspace Scanner — Scans package.json and structure
- System 19: OpenCode Tooling Awareness — Understands npx, agents, MCP servers
- System 20: OpenCode Project Workflows — Manages /init, /share, /export, /import
- System 21: OpenCode Verification System — Validates builds and tests
- System 22: OpenCode Optimization System — Optimizes production builds
- System 23: OpenCode Integration — SDK APIs and sessions

### Commands
- `venom for opencode` — Main activation
- `vd opencode` — Review and analyze projects
- `vr opencode` — Research and explore patterns
- `v-learn opencode` — Learn patterns and generate docs
- `help` — Quick reference

### Full Power Mode

- `masterpiece opencode` — All minds + all systems active
- `go deep opencode` — Deep research mode

---

*No shell. Just intelligence. OpenCode-ready. 🐙*
