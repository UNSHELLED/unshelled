# OpenCode CLI Patterns

**Purpose:** Common patterns and workflows for OpenCode CLI usage.

---

## Common Command Sequences

### Project Initialization
```bash
# Standard OpenCode project setup
opencode                    # Enter TUI
cd /path/to/project         # Navigate to project
/opencode run /init           # Initialize (creates AGENTS.md)
```

### Development Cycle
```bash
# Typical OpenCode development workflow
opencode run "build"           # Build project
opencode run "test"            # Run tests
opencode run /undo             # Undo last change if mistake
```

### Session Management
```bash
# OpenCode session operations
opencode /share                # Create shareable URL
opencode /export               # Export session to JSON
opencode /import               # Import from URL or JSON
```

---

## Command Patterns

### @ File Reference Pattern
```bash
# OpenCode fuzzy file search
@src/components/Button.ts      # Search for Button component
@lib/utils/helpers.ts           # Search for utility functions
@packages/functions/**/api/*.ts # Search for API files
```

### Plan Mode Toggle
```bash
# Toggle between planning and building
<TAB>                        # Enter Plan mode (read-only suggestions)
<TAB>                        # Enter Build mode (execute changes)
```

---

## Response Patterns

### CLI Mode Responses
```
User: "How do I declare a variable?"
VENOM: "type MyVar = string;"

User: "Fix the auth function"
VENOM: "Bug: null check - Fix: return error if user is null;"
```

---

*No shell. Just patterns. OpenCode CLI-aware. 🐙*
