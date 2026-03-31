# OpenCode Platform Audit

**Date audited:** 2026-03-30
**Template path:** `platforms/opencode/template/`
**Status:** Most modern VENOM body — reference implementation

---

## What OpenCode Has That Claude Code v2.4 Doesn't

1. **Autonomous Loop Protocol in AGENTS.md** — `Observe → Hypothesize → Test → Evaluate → Repeat` with exact stall detection conditions (same hypothesis 3x, 5 iterations, cost >$1, circular tool pattern). Claude Code has none of this.

2. **Situation Matching with named SIMs** — 10 proven edge-case playbooks. AGENTS.md references `docs/SIMULATIONS.md` with `SIM-01` through `SIM-10`. Claude Code CLAUDE.md has no situational playbook.

3. **Surface Awareness** — AGENTS.md explicitly lists TUI vs headless vs SDK vs PR mode with exact behavior differences. Claude Code CLAUDE.md says nothing about surfaces.

4. **Specialist delegation threshold** — "When to delegate — work that would consume >30% of primary context. Keep the orchestrator lean." Claude Code has no delegation guidance.

5. **7 commands, full lifecycle** — `init → eat → spec → build → review → check + research`. Each command is a complete phase-aware workflow. Claude Code has 2 commands.

6. **`venom-eat` as a multi-phase absorption workflow** — 6 phases: Orient, Shape, Skeleton, Heartbeat, Nervous System, Risks → synthesize CONTEXT.md. Each phase writes an intermediate artifact that survives context resets. Claude Code `/venom-eat` doesn't exist.

7. **`venom-spec` with phase detection** — reads `workflow-state.json`, detects which phase to resume from (0-7), runs automatically. No user has to say "we were on Phase 3." Claude Code has nothing equivalent.

8. **`venom-build` with wave execution** — reads `tasks.md`, finds unchecked tasks, executes per wave, marks `[x]` on completion, runs tests after each wave, stops on failure. Claude Code has nothing equivalent.

9. **`venom-check` as Gate 5** — tests + types + lint + deps + VENOM state + archive readiness. One command that surfaces all project health. Claude Code has nothing equivalent.

10. **`!` inline shell commands in commands** — `!cat .venom/state/workflow-state.json` inside command files. No plugin required. This is how phase detection works without MCP. Claude Code commands don't have this.

11. **`venom-builder` as hidden wave soldier** — `hidden: true` flag, `mode: subagent`, `steps: 50`. Orchestrator spawns it, user never sees it. Claude Code v2.4 `venom-builder` is user-visible and has no scope boundary.

12. **SKILL.md as full intelligence** — 350 lines: init sequence, surface detection, agent routing, 11 intelligence patterns, memory bridge, energy matching, platform non-negotiables. Claude Code SKILL.md is 8 lines.

13. **`venom_workflow_update()` pattern** — plugin tool that writes workflow state atomically. Claude Code equivalent: direct file writes in command body.

14. **Archive pattern** — completed features archived to `.venom/work/archive/[slug]-[date]/`. Keeps work directory clean. Claude Code has no archive pattern.

---

## Port Decisions

| Component | Port decision | Adaptation needed |
|-----------|--------------|-------------------|
| AGENTS.md loop protocol | ✅ Port verbatim | Same principle, same format |
| AGENTS.md surface awareness | ✅ Port + adapt | Replace OpenCode surfaces with Claude Code surfaces |
| AGENTS.md situation matching | ✅ Port verbatim | Same SIM references |
| AGENTS.md delegation threshold (30%) | ✅ Port verbatim | Platform-agnostic |
| SIMULATIONS.md (all 10) | ✅ Port + adapt | Replace `@venom-explorer` → Task + researcher, `venom_remember()` → `/remember` |
| `venom-eat` full 6-phase structure | ✅ Port + adapt | Replace `!` inline bash with Bash tool, replace `venom_workflow_update()` with file writes |
| `venom-spec` 8-phase workflow | ✅ Port + adapt | Replace plugin calls with file writes, adapt for no `@` in non-TUI |
| `venom-build` wave execution | ✅ Port + adapt | Same logic, no `!` shorthand — use Bash tool |
| `venom-check` Gate 5 | ✅ Port + adapt | Same checks, `!` → Bash tool |
| `venom-review` | ✅ Port verbatim | Identical structure |
| `venom-research` | ✅ Port + adapt | Replace `@explore` → Task + researcher |
| `venom-init` | ✅ Port + adapt | Same scaffold, adapt for no `!` shorthand |
| SKILL.md full intelligence | ✅ Port + adapt | Replace all OpenCode refs with Claude Code equivalents |
| `venom-builder` hidden mode | ⚠️ Partial port | Claude Code has no `hidden: true` — handle behaviorally via CLAUDE.md instruction |
| `venom_workflow_update()` calls | ❌ Replace | Use file writes via Bash tool |
| `venom_remember()` calls | ❌ Replace | Use `/remember` command routing |
| `venom_instinct()` calls | ❌ Replace | Use `post-tool-use.js` file write |
| `!` inline bash syntax | ❌ Replace | Use `Bash(cmd:*)` tool calls in command bodies |
| `subtask: true` frontmatter | ❌ Replace | Behavioral equivalent via CLAUDE.md instruction |
| OpenCode non-negotiables section | ❌ Replace | Write Claude Code non-negotiables instead |

---

## Platform Translation Map

| OpenCode | Claude Code equivalent |
|---------|----------------------|
| `session.created` hook | `SessionStart` hook |
| `tool.execute.before` | `PreToolUse` hook |
| `tool.execute.after` | `PostToolUse` hook |
| `session.idle` | `Stop` hook |
| `experimental.session.compacting` | `PreCompact` hook |
| `shell.env` hook | env vars in `settings.json` |
| `venom_workflow_update()` tool | Write `.venom/state/workflow-state.json` via Bash |
| `venom_remember()` tool | Write to `.venom/memory/MEMORY.md` via `/remember` |
| `venom_instinct()` tool | Write to `.venom/learnings/instincts.yaml` via `post-tool-use.js` |
| `!command` inline shell | `Bash(cmd:*)` tool call in command body |
| `@explore` agent | `Task` tool → `venom-researcher` |
| `@venom-*` @mention | `@venom-*` @mention (same in Claude Code TUI) |
| `subtask: true` in commands | Behavioral: CLAUDE.md says "keep orchestrator lean" |
| `hidden: true` in agents | Behavioral: CLAUDE.md says builder is orchestrator-only |
| `mode: subagent` in agents | Behavioral: Task tool invocation |
| Plugin TypeScript API | Node.js scripts in `.claude/scripts/` |
| `opencode.json instructions` | `CLAUDE.md` + `settings.json` |

---

## AGENTS.md vs CLAUDE.md: Gap Table

| Section in AGENTS.md | In CLAUDE.md v2.4? | Priority to add |
|---------------------|-------------------|----------------|
| Nine minds (numbered, Brain 0 / Arm 1-8) | Yes (table) | — |
| Answer first | Yes | — |
| Energy matching (5 states) | Partial (via @) | low |
| Truth over comfort | Yes (pushback scale) | — |
| Anatomy first | Partial | medium |
| Autonomous loop protocol | **NO** | **P1** |
| Specialists delegation (>30%) | **NO** | **P1** |
| Memory loading sequence | **NO** | **P1** |
| Surface awareness (TUI vs headless) | **NO** | **P1** |
| Situation matching + SIM references | **NO** | **P1** |
| Command lifecycle (init→eat→spec→build) | **NO** | **P1** |
| "What you never do" list | Partial (8 diseases) | low |
| The Pact | Yes | — |

---

## Critical Port: venom-eat Phase Structure

The most valuable thing in all of OpenCode. Must port exactly. The 6-phase absorption:

```
Phase 1: Shape  → identify lang/framework/deps/scripts/entry points → eat-shape.md
Phase 2: Skeleton → find data model/core types/schema → eat-skeleton.md  
Phase 3: Heartbeat → trace hot path/entry point → eat-heartbeat.md
Phase 4: Nervous System → map API/events/integrations → eat-nerves.md
Phase 5: Risks → TODO/FIXME/large files/missing tests → eat-risks.md
Phase 6: Synthesize → write CONTEXT.md from all 5 phases
```

**Why this is brilliant:**
- Each phase writes an intermediate artifact that survives context resets
- If context resets mid-eat, resume from the first missing file
- CONTEXT.md is generated from real discovery, not from assumptions
- Any developer can run this. Any agent can run this headlessly.

**Claude Code adaptation:**
- Replace `!command` with `Bash(cmd:*)` tool calls
- Replace `venom_workflow_update()` with file writes via Bash
- Same phase structure, same artifacts, same output format

---

## Rethink Lens

OpenCode AGENTS.md is 200 lines of living intelligence. Claude Code CLAUDE.md is 104 lines with dead memory references.

The gap is not incremental — it's architectural. OpenCode VENOM *is alive*. Claude Code VENOM *describes aliveness*.

**If building from OpenCode quality for Claude Code today:**

1. CLAUDE.md absorbs AGENTS.md's loop protocol, delegation threshold, surface awareness, situation matching, command lifecycle — making it 180 lines of real intelligence
2. Every command gets the full OpenCode phase structure, adapted without `!` syntax
3. Every agent gets 40-60 lines with full methodology, not 15 lines with a job description
4. SKILL.md becomes the intelligence surface (350 lines) that loads on demand
5. The `.venom/` memory system is exactly the same — it's already platform-agnostic
