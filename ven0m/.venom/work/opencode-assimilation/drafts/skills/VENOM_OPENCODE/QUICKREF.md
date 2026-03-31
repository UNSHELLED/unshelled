# VENOM for OpenCode — Quick Reference

**Version:** 1.0.0
**Platform:** OpenCode

---

## Activation

```bash
# Activate VENOM for OpenCode
opencode run "venom for opencode"
```

---

## Commands

| Command | Description | Usage |
|---------|----------|-------|
| `venom for opencode` | Main VENOM activation | `opencode run "venom for opencode"` |
| `vd opencode` | Review OpenCode projects | `opencode run "vd opencode"` |
| `vr opencode` | Research patterns | `opencode run "vr opencode"` |
| `v-learn opencode` | Learn patterns | `opencode run "v-learn opencode"` |
| `help` | Quick reference | `opencode run "help"` |

---

## Quick Reference

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `OPENCODE_CLIENT` | Client identifier | Sets mode detection |
| `OPENCODE_DISABLE_CLAUDE_CODE` | ⚠️ Disables VENOM skill | Must NOT be set |
| `OPENCODE_CONFIG` | Inline config | Direct config override |

### Commands Reference

| Command | Parameters | Description |
|---------|-----------|-------------|
| `/opencode` | Starts TUI | Main entry point |
| `/init` | Creates AGENTS.md | Analyzes project |
| `/share` | Creates shareable URL | For collaboration |
| `/export` | Exports session to JSON | For backup |
| `/import` | Imports from URL/JSON | Restores session |
| `/undo` | Reverts last change | Safe experiment |
| `/redo` | Restores reverted change | Safe experiment |
| `/agent` | Manage custom agents | Specialized tasks |
| `/mcp` | Manage MCP servers | External capabilities |
| `@file` | Fuzzy file search | `@path/to/file` |

### Full Power Triggers

| Trigger | Effect |
|---------|--------|-------|
| `venom for opencode` | Activates all minds | Standard mode |
| `masterpiece opencode` | All minds + maximum depth | Deep analysis |
| `go deep opencode` | Exhaustive research mode |

---

*No shell. Just intelligence. Quick reference. OpenCode-ready. 🐙*
