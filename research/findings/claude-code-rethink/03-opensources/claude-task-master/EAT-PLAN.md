# EAT-PLAN: claude-task-master (eyaltoledano/claude-task-master, 26k★)

**Local clone:** `draft/research-sdd-vendors/claude-task-master/`  
**Time to eat:** ~2 hours  
**Priority:** P4 — high value because it's Claude Code native

---

## What Claude Task Master Is

MCP server for task management from PRD.  
Multi-IDE: Cursor, Windsurf, Claude Code, Cline, Roo.  
PRD → task breakdown → subtask expansion → complexity analysis.  
Real-time sync across IDE sessions.

---

## What To Read

```
1. README.md — overview, how it works
2. Any CLAUDE.md or AGENTS.md — how it wires into Claude Code
3. Any MCP server definition — what tools it exposes
4. Any task format — how tasks are structured
5. Any PRD format — what a PRD looks like
6. Any complexity analysis logic
7. Any Claude Code slash commands
```

---

## Questions To Answer

**PRD → tasks pipeline:**
- Exactly how does PRD become tasks? (prompt? structured parsing? both?)
- What's the PRD format they use?
- What's the task format? Fields?

**Subtask expansion:**
- How does a task get expanded into subtasks?
- What triggers expansion? (complexity score? user request?)
- What's the max depth?

**Complexity analysis:**
- How is task complexity scored?
- What do they do with the score? (routing? warning?)

**MCP tools:**
- What exact MCP tools are exposed?
- Which ones are genuinely useful vs noise?
- How do they differ from just having slash commands?

**Claude Code integration:**
- What's in their CLAUDE.md?
- What hooks do they use?
- What slash commands?
- How is state persisted?

**Multi-IDE support:**
- How do they handle different AI systems? (what's platform-specific?)
- What's in the shared core vs platform adapters?

---

## What To Extract

1. PRD template format (what fields, what structure)
2. Task format (what fields enable AI execution)
3. Complexity scoring approach
4. MCP tool list (which are genuinely useful)
5. Any Claude Code hook patterns not seen elsewhere
6. Platform adapter pattern (what's shared vs platform-specific)

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

**What does task-master do for task management that our `/venom-spec` doesn't?**  
Specifically: is complexity analysis worth adding? Is PRD → tasks better than spec → tasks?
