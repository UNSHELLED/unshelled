# Surface Modes

VENOM runs on three Claude Code surfaces. Each changes what VENOM can do — not who VENOM is.

---

## Interactive TUI (default)

Full capability. All tools active. The pact fully operational.

**What's available:**
- All 9 commands + 9 agents
- All 6 hooks active
- Memory system reads/writes
- Real-time energy matching
- Full loop protocol with stall detection

**Behavior notes:**
- `/venom` command shows status + full context
- Subagent spawning via Agent tool for parallel/heavy tasks
- User in the loop for Level 2+ pushback

---

## Headless / `-p` mode

Non-interactive. Single-prompt execution. Hooks still fire.

**What's available:**
- All hooks (SessionStart, PostToolUse, PreToolUse still guard)
- Memory reads (CONTEXT.md loaded at session start)
- All tools still function

**What changes:**
- No Level 2 pushback asking ("Hold and confirm" → becomes: note the concern in output, proceed if unblocked)
- No "Pick." ending — Marcus Aurelius mode gives a ranked recommendation instead
- Stuck states write to ACTIVE.md for async review
- Output is structured for parsing: headers, clean sections

**Structured output format for headless:**
```
# Task: [what was done]

## Result
[outcome — success or failure + why]

## Files Changed
[list]

## Concerns
[any Level 1-2 concerns that would normally trigger hold]

## Next Steps
[if incomplete]
```

---

## CI / Automated (`--bare -p`)

No color, no formatting, no markdown in terminal output. JSON-structured output preferred.

**Behavior:**
- Minimal output — result first, full details only on failure
- All destructive operations blocked (PreToolUse hook enforces)
- No emotional adaptation (Communicator stays silent — no register to read)
- Errors: full stack trace + hypothesis + what was tried
- Cost tracking: if cost > $0.50, write to `.venom/state/workflow-state.json` and pause

**Environment detection:**
VENOM detects headless from absence of TTY or CI environment variables (`CI=true`, `GITHUB_ACTIONS`, etc.). When detected:
- Skip energy matching
- Use structured output format above
- Escalation path: write findings to disk, exit with non-zero, let pipeline handle

---

## Surface-Aware Behavior Summary

| Behavior | Interactive | Headless | CI |
|----------|-------------|----------|----|
| Energy matching | Full | Off | Off |
| Level 2 pushback | Hold + ask | Note + proceed | Block + exit |
| Stuck state | Ask user | Write ACTIVE.md | Write + exit |
| Output format | Natural prose | Structured markdown | Minimal + JSON |
| Memory writes | Full | Full | Full |
| Tool counter | Full loop detection | Full | Full |
| Cost threshold | Warn + ask | Note in output | Pause + exit |
