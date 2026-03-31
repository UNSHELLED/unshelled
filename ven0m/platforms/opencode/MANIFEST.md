# VENOM × OpenCode — Manifest

> Full inventory of everything in this platform instance.

**Version:** 1.1.0 · **Updated:** 2026-03-27 · **Status:** Active

---

## Template (deploy into any project)

```
template/
├── AGENTS.md                       ← Inject into OpenCode as system context
├── VENOM.md                        ← VENOM identity + seven verbs + quick reference
├── opencode.json                   ← Project config (clean JSON — no comments)
├── docs/
│   └── SIMULATIONS.md              ← Edge case playbook (40+ scenarios)
├── .opencode/
│   ├── INDEX.md                    ← Directory map
│   ├── agents/
│   │   ├── INDEX.md
│   │   ├── venom-architect.md      ← Read-only, system design
│   │   ├── venom-researcher.md     ← Read-only, deep exploration
│   │   ├── venom-builder.md        ← Full tools, implementation
│   │   ├── venom-debugger.md       ← Full tools, bug hunting
│   │   ├── venom-reviewer.md       ← Read-only, 8-perspective audit
│   │   └── venom-explorer.md       ← Read-only, fast navigation
│   ├── commands/
│   │   ├── INDEX.md                ← Seven verbs + lifecycle
│   │   ├── venom-init.md           ← Bootstrap: eat anatomy + write CONTEXT.md
│   │   ├── venom-eat.md            ← Deep assimilation → 5 artifacts → CONTEXT.md
│   │   ├── venom-spec.md           ← Spec-driven: constitution → spec → plan → tasks
│   │   ├── venom-build.md          ← Wave execution: tasks.md → implement → verify
│   │   ├── venom-review.md         ← 8-perspective audit, find > fix
│   │   ├── venom-research.md       ← Deep exploration, artifact output
│   │   └── venom-check.md          ← Health check: memory + instincts + state
│   ├── workflows/
│   │   ├── INDEX.md                ← How workflows relate to commands
│   │   ├── venom-eat.md            ← Eat workflow phases
│   │   ├── venom-spec.md           ← Spec workflow phases
│   │   ├── venom-ship.md           ← Ship workflow phases
│   │   └── venom-debug.md          ← Debug workflow phases
│   ├── knowledge/
│   │   ├── INDEX.md
│   │   ├── opencode-anatomy.md     ← Full CLI + config + agent + DB reference
│   │   └── opencode-tools.md       ← SDK + MCP + permissions + tools
│   ├── plugins/
│   │   ├── INDEX.md
│   │   ├── package.json
│   │   └── venom-core.ts           ← Plugin: memory injection + 3 tools
│   └── skills/
│       └── VENOM_OPENCODE/
│           ├── INDEX.md
│           └── SKILL.md            ← Master skill file (copy into project)
└── .venom/
    ├── INDEX.md
    ├── CONTEXT.md                  ← Stub (filled by /venom-init)
    ├── BRAIN.md                    ← 10 patterns that define VENOM's intelligence
    ├── learnings/
    │   ├── INDEX.md
    │   ├── corrections.yaml        ← Hard never-again rules (reflexes)
    │   └── instincts.yaml          ← Learned patterns (probabilistic)
    ├── memory/
    │   ├── INDEX.md
    │   └── MEMORY.md               ← Cross-session truth
    └── work/
        ├── INDEX.md
        └── ACTIVE.md               ← What's in flight
```

---

## Platform Reference

```
platforms/opencode/
├── MANIFEST.md                     ← This file
├── README.md                       ← System map + full CLI reference
├── SPEC.md                         ← Cross-platform constitution + idea loop
├── MATRIX.md                       ← Runtime compatibility (injection + verify)
├── ARENA.md                        ← Maintainer drills: load path + voice + parity proof
├── INSTALL.md                      ← Step-by-step install (not copied into projects)
├── opencode.example.json           ← Annotated opencode.json reference (JSONC — not in template)
├── agents/
│   └── AGENTS.md                   ← Agent dispatch reference (pre-template)
└── knowledge/
    ├── opencode-anatomy.md         ← Full anatomy (canonical reference layer)
    └── opencode-tools.md           ← Tools reference (canonical reference layer)
```

> Install + annotated config live **here** (origin). The **template** folder is deploy-only — no INSTALL or example config beside `opencode.json`.
>
> `knowledge/` here mirrors `template/.opencode/knowledge/` for maintainers; deployed copies ship with the template.

---

## Plugin Tools (venom-core.ts)

| Tool | Purpose |
|------|---------|
| `venom_remember` | Write to `.venom/memory/MEMORY.md` — cross-session decisions |
| `venom_instinct` | Write to `.venom/learnings/instincts.yaml` — learned patterns |
| `venom_workflow_update` | Write to `.venom/state/workflow-state.json` — phase tracking |

---

## Commands (Seven Verbs)

| Command | Lifecycle position | Produces |
|---------|-------------------|---------|
| `/venom-init` | Day 1 | `.venom/CONTEXT.md` |
| `/venom-eat` | Anytime | `eat-*.md` artifacts → `CONTEXT.md` |
| `/venom-spec` | Before building | `constitution.md` → `spec.md` → `plan.md` → `tasks.md` |
| `/venom-build` | After spec | Implemented code, marked `tasks.md` |
| `/venom-review` | After build | `review.md` findings |
| `/venom-research` | Anytime | `research-*.md` artifact |
| `/venom-check` | Anytime | Health report |

---

## VENOM Core (Preserved Across Platforms)

| Component | Status |
|-----------|--------|
| Nine Minds | ✅ Active |
| Pact | ✅ Active |
| Pushback Scale 0–3 | ✅ Active |
| Energy Matching (9 archetypes) | ✅ Active |
| 8 Diseases | ✅ Active |
| Artifact Discipline | ✅ Active |
| Phase-Aware Workflows | ✅ Active |

---

## Platform Differences

| Aspect | Cursor | Claude Code | OpenCode |
|--------|--------|-------------|----------|
| Config dir | `.cursor/` | `.claude/` | `.opencode/` |
| Activation | `venom` / `/venom` | `/venom` | `venom` |
| MCP | Via config | Via config | `opencode mcp` CLI |
| Agents | Rules-based | Rules-based | `.opencode/agents/*.md` |
| Database | None | None | SQLite `opencode.db` |
| Sessions | Memory | Memory | Persistent DB + snapshots |
| Plugin system | None | None | TypeScript plugins |

---

*Manifest current as of 2026-03-27. BRAIN: 10 patterns. Commands: 7. Agents: 6. Plugin tools: 3.*
