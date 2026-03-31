# .venom — Agent Workspace

VENOM's desk. Not the library (that's `docs/`). Not the heart (that's `.cursor/`). The **workspace**.

---

## What's Here

| File/Folder | Purpose |
|-------------|---------|
| `CONTEXT.md` | Project brain — who, what, stack, focus. Read on `/venom?`. |
| `memory/MEMORY.md` | Cross-session truth. Decisions, patterns, corrections. |
| `learnings/` | How you work. preferences, project conventions, corrections, instincts. |
| `state/` | Workflow state (optional, for spec/build flows). Sample included. |
| `work/` | Active features. One folder per feature. Thinking → planning → discussion. |
| `work/ACTIVE.md` | Current focus. Single file. |

---

## Initialize

**First time in a project?** Run `/venom init`. I'll ask:
- Project name?
- Stack?
- Current focus?

Then I write `CONTEXT.md` for you. Memory starts empty. Grows as we work.

---

## Lifecycle

```
work/[feature]/ — active until shipped
  → decisions → memory/MEMORY.md
  → docs → docs/ (if project has one)
  → obsolete → delete

Temp files (analysis, view-for-now) — go in work/[feature]/, not floating
  → useful → move to docs/ or memory/
  → done → delete
```

---

## Memory vs Workspace

**.venom/** = workspace (active, evolving, temporary)  
**memory/MEMORY.md** = persistent (decisions, patterns, corrections that matter long-term)  
**.cursor/** = heart (identity, rules, never changes unless VENOM itself evolves)

Three layers. Clear boundaries.

---

## Samples Provided

All files starting with `SAMPLE_` are **examples**, not real memory.

When you run `/venom init`, I create **real** files:
- `CONTEXT.md` (your project)
- `memory/MEMORY.md` (starts empty)
- `learnings/preferences.yaml` (starts with basics)
- `work/ACTIVE.md` (current focus)

Samples stay for reference. Real files grow as we work.

---

*Three rooms: .cursor/ = mind. docs/ = library. .venom/ = desk.*

🐙
