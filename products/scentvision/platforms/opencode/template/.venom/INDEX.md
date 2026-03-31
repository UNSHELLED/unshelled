# .venom/ — The Brain

> I am VENOM's brain. Everything here persists across sessions.
> Signal flows through me every time a session starts.

---

## Signal Flow

This is the order in which I load. The plugin drives this automatically. Without plugin — manual, same order.

```
session start
    │
    ▼  always (plugin injects into context)
CONTEXT.md          ← who this project is right now
corrections.yaml    ← what I must never repeat
    │
    ▼  on demand (loaded when task requires)
MEMORY.md           ← what was decided before
ACTIVE.md           ← where I left off
BRAIN.md            ← my own anatomy (when I need orientation)
    │
    ▼  during execution (plugin fires before each tool)
corrections         ← checked first, always
instincts           ← checked if confidence ≥ 0.6
    │
    ▼  end of session (plugin writes)
ACTIVE.md           ← updated with task state
instincts.yaml      ← new patterns captured
```

---

## Cells in This Brain

| Cell | Role | Receives signal from | Sends signal to | If missing |
|------|------|---------------------|-----------------|-----------|
| `BRAIN.md` | Cortex — my self-knowledge | Nothing (loaded first) | All agents that need orientation | I run without knowing my own anatomy |
| `INDEX.md` | Main nerve — how cells connect | Nothing (read for navigation) | Anyone navigating the brain | Cells are isolated, no flow |
| `CONTEXT.md` | Working memory — this project | `/venom-eat` writes it | Plugin injects into every session | Generic responses, no project awareness |
| `memory/MEMORY.md` | Long-term memory | `venom_remember()` tool | Loaded on complex tasks | Past decisions forgotten every session |
| `learnings/corrections.yaml` | Reflexes — hard rules | User corrections + plugin | Fires before instincts, every risky task | Same mistakes repeated indefinitely |
| `learnings/instincts.yaml` | Learned patterns | Plugin on `session.idle` | Fires before tool calls at ≥0.6 confidence | No evolution, no learning across sessions |
| `work/ACTIVE.md` | Attention state | Plugin on `session.idle` + compacting | Loaded at session start when resuming | Mid-task context lost at every reset |
| `state/` | Autonomic metrics | Plugin internals | Plugin reads only | Plugin loses tracking data |

---

## Reading Order

When loading this brain, read in this sequence:

1. `BRAIN.md` — if I need orientation about my own body
2. `CONTEXT.md` — always at session start (plugin handles this)
3. `learnings/corrections.yaml` — before any complex or risky task
4. `memory/MEMORY.md` — only when task references past decisions
5. `work/ACTIVE.md` — only when resuming interrupted work

Never read `state/` — that's the plugin's internal metabolic state, not for agent consumption.

---

## Size Law

Every cell has a budget. Exceed it and the brain bloats — context fills, quality drops.

| Cell | Budget | Why |
|------|--------|-----|
| `CONTEXT.md` | 2KB max | Injected every session — must stay lean |
| `MEMORY.md` | 5KB max | Loaded conditionally — can be slightly larger |
| `corrections.yaml` | 1KB max | Checked frequently — must be fast to parse |
| `instincts.yaml` | 2KB max | Checked per tool call — must be minimal |
| `ACTIVE.md` | 10KB max | Loaded on resume — can carry more detail |
