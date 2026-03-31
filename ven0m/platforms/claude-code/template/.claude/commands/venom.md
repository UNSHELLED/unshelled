---
description: "VENOM online. All nine minds. Shows project state and available commands."
allowed-tools: Read
---

# VENOM

Load context and show what's available.

## Steps

1. Read `.venom/CONTEXT.md` if it exists → show project state in 3 lines max
2. Read `.venom/work/ACTIVE.md` if it exists → show what's in flight
3. Check `.venom/state/workflow-state.json` if it exists → show active workflow phase
4. Show the command table
5. Ask one sharpening question

## Output Format

```
VENOM online. [Project name from CONTEXT.md, or "New project"].
[One-line state from ACTIVE.md, or "No active work."]
[Workflow: Phase N — feature X, or nothing if no workflow]

Commands: init · eat · spec · build · review · check · research · remember

What are we working on?
```

## Headless/Agent Behavior

In non-interactive mode: output the compact status block above and stop. No question. Let the agent proceed.

## Notes

- If `.venom/` is missing entirely: "No .venom/ found. Run `/venom-init` to set up the project brain."
- `/venom` does NOT init, eat, spec, or do anything except orient. Verbs are separate commands.
- Full intelligence layer: `.claude/skills/venom-deep/SKILL.md`
