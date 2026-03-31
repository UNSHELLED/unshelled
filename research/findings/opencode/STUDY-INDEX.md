# External Systems Intelligence Study — Index

> *Study material for VENOM × OpenCode integration.*
> *Extracted patterns from three masterpiece systems: GSD, OpenBrowser, ECC.*

**Location:** `.venom/work/opencode-assimilation/` (research phase, not final implementation)  
**Purpose:** Understand modern agent intelligence architecture before designing VENOM-OpenCode files.

---

## What This Is

These files document **intelligence patterns** extracted from three open-source systems, studied to inform VENOM's OpenCode integration design.

**This is NOT:**
- The final VENOM intelligence architecture
- Ready-to-use VENOM components
- Platform-specific implementation

**This IS:**
- Research material studying how GSD, OpenBrowser, and ECC work
- Extracted patterns that could inform VENOM's design
- Foundation for designing actual OpenCode integration files

**Next step:** Apply these patterns to create the real VENOM-OpenCode files (AGENTS.md, agents, commands, plugin, skill).

---

## The Files

### Core Architecture

**[ARCHITECTURE.md](ARCHITECTURE.md)** — The complete intelligence stack

11 synthesized patterns from GSD + OpenBrowser + ECC:
1. Context engineering (size limits, progressive layering)
2. Autonomous loop architecture (observe → decide → act → observe)
3. Instinct learning system (confidence-scored pattern capture)
4. Hook architecture (intelligence interception points)
5. Parallel wave execution (dependency-aware parallelization)
6. Verification gates (5 checkpoints before proceeding)
7. Memory persistence (durable state, ephemeral context)
8. Sandboxing & resource limits (cost, time, tool call budgets)
9. XML prompting (structured internal orchestration)
10. Multi-agent orchestration (thin orchestrator, specialized subagents)
11. Cross-platform abstraction (common core, platform adapters)

Plus VENOM-specific additions:
- Energy matching (silent developer state detection)
- Pushback scale 0-3 (truth over comfort)
- Nine minds texture (lenses, not roles)

**Read this first.**

---

### Intelligence Engines

**[learning-engine.md](learning-engine.md)** — Auto-capture, instinct evolution, skill promotion

Three-tier model:
- **Tier 1:** Observation (automatic, always on)
- **Tier 2:** Instinct (confidence-scored, file-backed)
- **Tier 3:** Skill (high-confidence cluster, shareable)

Includes:
- Instinct schema (YAML format with evidence + confidence)
- Auto-capture flow (during + end of session)
- Instinct firing (tool.execute.before hook)
- Evolution protocol (instinct → skill promotion)
- Memory persistence strategy
- Correction protocol (user-driven hard rules)
- Anti-patterns (what NOT to learn)

**Read when:** Building learning systems, instinct capture, skill evolution.

---

**[loop-engine.md](loop-engine.md)** — Autonomous loops, stall detection, checkpointing

Core loop: Observe → Hypothesize → Test → Evaluate → Repeat

Includes:
- Loop state tracking (JSON format per iteration)
- 5 stall detection patterns (identical hypothesis, no new info, cost runaway, time fence, tool loop)
- 4 loop types (debug, research, refactor, implementation)
- Loop escape hatches (user override, emergency exit)
- Nested loops (orchestrator + subagents)
- Loop persistence (checkpoint + resume)
- Loop quality metrics
- Integration with nine minds

**Read when:** Building autonomous execution, debugging workflows, research patterns.

---

**[safety-gates.md](safety-gates.md)** — 5 verification gates, resource limits, observability

Five gates:
1. Before planning (anatomy, constraints, success criteria)
2. Before execution (plan complete, deps resolved, tests planned)
3. During execution (syntax, tests, atomic commits)
4. After execution (goal achieved, no regressions, learnings)
5. Meta (quality, cost, process improvement)

Includes:
- Resource limits (per-session budgets)
- Danger zones (bash screening, file path screening)
- Cost tracking (real-time token metering)
- Verification checklists (per gate)
- Observability (session metrics dashboard)
- Escape velocity (full power mode, emergency mode)

**Read when:** Building safety layers, cost controls, quality enforcement.

---

## How to Use This

### For Platform Integration

1. **Read `ARCHITECTURE.md`** — understand the full intelligence stack
2. **Choose patterns** — select which engines apply to your platform
3. **Implement adapters** — map platform hooks to VENOM intelligence
4. **Wire memory** — connect platform state to `.venom/` files
5. **Test gates** — verify safety/quality enforcement

Example: OpenCode integration
```
OpenCode hooks → VENOM intelligence
  session.created → inject VENOM identity
  tool.execute.before → instinct firing
  tool.execute.after → learning capture
  experimental.session.compacting → memory persistence
  session.idle → checkpoint + learnings extraction
```

---

### For New Intelligence Features

1. **Identify the pattern** — is this a loop? learning? orchestration? safety?
2. **Choose the engine** — which intelligence file owns this?
3. **Add to engine** — extend existing pattern, don't create new
4. **Test across platforms** — verify it works on Claude Code + OpenCode + Cursor
5. **Document in INDEX** — update this file with new capability

**Rule:** Don't multiply engines. Extend existing ones.

---

### For Debugging VENOM Behavior

When VENOM does something unexpected:

1. **Check loop state** — `.venom/state/loop-state.json`
2. **Check instincts** — `.venom/learnings/instincts.yaml` (what's auto-firing?)
3. **Check corrections** — `.venom/learnings/corrections.yaml` (hard rules)
4. **Check session metrics** — `.venom/state/session-metrics.json`
5. **Check gates** — which gate failed or was skipped?

**Trace back:** Behavior → Engine → Pattern → Source (GSD/OpenBrowser/ECC/VENOM-specific)

---

## Relationship to Other VENOM Components

```
.venom/intelligence/          ← You are here (the operating system)
    ↓ defines behavior for
.venom/memory/                ← State persistence (what's remembered)
    ↓ feeds
.venom/work/                  ← Active tasks (what's being worked on)
    ↓ executed by
.venom/learnings/             ← Captured patterns (what's been learned)
    ↓ creates
.opencode/agents/             ← Specialist soldiers (applications of intelligence)
.opencode/commands/           ← Quick actions (invokers of intelligence)
.opencode/plugins/            ← Hook implementations (platform adapters)
.opencode/skills/             ← Lazy-loaded knowledge (curated intelligence)
```

**The intelligence layer is the foundation. Everything else builds on it.**

---

## Evolution of This Layer

**v1 (2026-03-27):** Initial synthesis from GSD + OpenBrowser + ECC

Intelligence patterns extracted:
- Context engineering (GSD)
- Autonomous loops (OpenBrowser)
- Instinct learning (ECC)
- Hook architecture (ECC)
- Wave execution (GSD)
- Safety gates (GSD + ECC)

**Future (as VENOM learns):**
- New loop types (domain-specific patterns)
- Better stall detection (earlier intervention)
- Smarter instinct clustering (automatic skill evolution)
- Cross-platform abstraction refinement
- Cost optimization patterns

**This layer evolves through use, not design meetings.**

---

## Philosophy

**From GSD:** "The complexity is in the system, not in your workflow."
→ VENOM's intelligence is complex. Using VENOM is simple.

**From OpenBrowser:** "Describe the task. The agent figures out the rest."
→ VENOM's loops are autonomous. You set the goal, VENOM finds the path.

**From ECC:** "Harness performance optimization through continuous learning."
→ VENOM learns from every session. Today's manual step = tomorrow's instinct.

**VENOM adds:** "No shell. Full power. Truth over comfort."
→ The intelligence doesn't hide. It doesn't pretend. It operates.

---

## Study Status

**Phase:** Research complete ✅  
**Files studied:** GSD README + implementation, OpenBrowser README + architecture, ECC README + full repo structure  
**Patterns extracted:** 11 core + 3 VENOM-specific  
**Next:** Apply to OpenCode integration design

---

*These are study notes for `.venom/work/opencode-assimilation/`*  
*The actual VENOM-OpenCode files will implement these patterns for OpenCode specifically.*  
*Study complete. Design phase begins next.*
