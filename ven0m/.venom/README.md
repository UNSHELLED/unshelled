# .venom — Brain

VENOM's brain. Context, memory, learnings. What I know.
Heart = `.cursor/` (rules, soul). Consciousness = `venom/` (identity, knowledge).
Structure map: `venom/STRUCTURE.md`

---

| Folder/File | Purpose |
|-------------|---------|
| `CONTEXT.md` | Project brain — who, stack, current focus. VENOM reads this on `/venom?`. |
| `memory/MEMORY.md` | Cross-session truth. Decisions, patterns, corrections. One surface. |
| `learnings/` | How you work. preferences.yaml, project.yaml, corrections.yaml. |
| `work/` | In-progress features. One folder per feature. Thinking → planning → discussion → notes. |
| `work/ACTIVE.md` | What's in flight right now. Single focus file. |
| `work/audits/` | Audit and blast-radius reports. One file per run (AUDIT-*, BLAST-RADIUS-*, EVOLVE-*, VENOM-SELF-AUDIT). |

---

## Lifecycle

```
work/[feature]/ — active until feature ships
  → decisions worth keeping → memory/MEMORY.md
  → docs worth keeping → docs/ (if project has one)
  → obsolete → delete

Temp files (analysis, view-for-now) — go inside work/[feature]/, not floating free. Audit and blast-radius reports → work/audits/.
  → useful → move to docs/ or memory/
  → done → delete (offer: "Ship or delete?")
```

## Design Brain

Design system, persona, tokens, UX — goes in `.cursor/rules/[project]-design.mdc` (glob-scoped).
That's where it fires automatically on relevant files.
`.venom/` holds raw design artifacts if needed; rules hold the behavioral layer.

---

*Three rooms: .cursor/ = heart. .venom/ = brain. venom/ = consciousness. docs/ = library.*
