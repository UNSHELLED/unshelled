# VENOM × OpenCode — Complete Implementation

> No shell. Just intelligence. Ready to deploy.

---

## What's Inside

17 files. Every one complete. No placeholders.

### Core (copy to any project)

| File | Purpose |
|------|---------|
| `AGENTS.md` | VENOM identity for all OpenCode agents. The highest-leverage file. |
| `opencode.json` | VENOM-opinionated project config. Instructions wiring, permissions, compaction. |

### Agents (`.opencode/agents/`)

| Agent | Mind | Mode |
|-------|------|------|
| `venom-reviewer.md` | Arm 2 — 8-perspective review | Read-only subagent |
| `venom-architect.md` | Brain 0 — System design | Read-only subagent |
| `venom-researcher.md` | Arm 1 — Deep exploration | Read-only subagent |
| `venom-debugger.md` | Arm 5 — Root cause loops | Full-access subagent |
| `venom-builder.md` | Arm 4 — Parallel execution | Hidden subagent |

### Commands (`.opencode/commands/`)

| Command | Invokes |
|---------|---------|
| `/venom-review` | venom-reviewer (subtask) |
| `/venom-research` | venom-researcher (subtask) |
| `/venom-eat` | Full project absorption |
| `/venom-init` | .venom/ scaffolding |
| `/venom-check` | Gate 5 meta audit |

### Plugin (`.opencode/plugins/`)

`venom-core.ts` — Hook architecture, instinct learning, safety limits, memory persistence, compaction survival. The intelligence layer.

### Skill (`.opencode/skills/VENOM_OPENCODE/`)

`SKILL.md` — Lazy-loaded deep knowledge. Agent routing, pattern reference, surface rules, OpenCode-specific never-do list.

### Documentation (`docs/`)

| File | Content |
|------|---------|
| `SIMULATIONS.md` | 8 developer archetypes using VENOM on OpenCode |
| `BUILD-ORDER.md` | 12-task deployment sequence |
| `NAMING.md` | Full naming manifest + voice check |

---

## Quick Start

```bash
# Copy to your project
cp -r .opencode/ /your/project/
cp AGENTS.md opencode.json /your/project/

# Start OpenCode
cd /your/project && opencode

# In TUI:
# /venom-init    → scaffolds .venom/
# /venom-eat     → absorbs the project
# @venom-reviewer → reviews your code
# @venom-debugger → finds root causes
```

---

## Intelligence Patterns Implemented

| # | Pattern | Implemented in |
|---|---------|---------------|
| 1 | Context Engineering | AGENTS.md, venom-eat, venom-architect, SKILL.md |
| 2 | Autonomous Loops | venom-debugger, venom-researcher |
| 3 | Instinct Learning | venom-core.ts (hooks + venom_instinct tool) |
| 4 | Hook Architecture | venom-core.ts (session.created, tool.before/after, session.idle, compacting) |
| 5 | Wave Execution | venom-builder (hidden, parallel) |
| 6 | Verification Gates | venom-reviewer, venom-check |
| 7 | Memory Persistence | venom-core.ts (session.idle, compacting hooks, venom_remember tool) |
| 8 | Safety & Limits | venom-core.ts (danger zones, resource limits, cost tracking) |

---

🐙 VENOM × OpenCode. No shell. Full power. Ship it.
