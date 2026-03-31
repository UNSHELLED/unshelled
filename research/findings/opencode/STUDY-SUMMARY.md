# External Systems Study — Summary

**Date:** 2026-03-27  
**Location:** `.venom/work/opencode-assimilation/` (study material, not final implementation)  
**Task:** Study three masterpiece systems to extract intelligence patterns before designing VENOM-OpenCode integration.

---

## The Shift

You said: Stop thinking about future commands and agents. Focus on the **intelligence** — how VENOM operates, learns, and orchestrates. Study these open-source systems for their creative methodologies, then build something unique.

**Three systems studied:**
1. **GSD (Get Shit Done)** — Context engineering, XML prompting, state management, parallel waves, atomic commits
2. **OpenBrowser** — Autonomous agent loops, stall detection, command schemas, sandboxing
3. **Everything Claude Code** — Harness performance optimization, instinct learning, hook architecture, cross-platform parity

---

## What Was Built

### `.venom/intelligence/` — The Operating System

Four files that define how VENOM thinks:

#### 1. ARCHITECTURE.md — The Complete Stack

**11 synthesized patterns:**
- Context engineering (progressive layering, size limits)
- Autonomous loop architecture (observe → hypothesize → test → evaluate)
- Instinct learning system (confidence scoring, auto-evolution)
- Hook architecture (interception points for intelligence injection)
- Parallel wave execution (dependency-aware task orchestration)
- Verification gates (5 quality checkpoints)
- Memory persistence (durable files, ephemeral context)
- Sandboxing & resource limits (cost/time/tool budgets)
- XML prompting (structured internal orchestration)
- Multi-agent orchestration (thin orchestrator pattern)
- Cross-platform abstraction (shared core, platform adapters)

**Plus VENOM-unique additions:**
- Energy matching (silent developer state detection)
- Pushback scale 0-3 (truth over comfort)
- Nine minds texture (lenses, not roles)
- No shell philosophy (raw capability, no hiding)

#### 2. learning-engine.md — Auto-Capture & Evolution

**Three-tier learning model:**
```
Tier 1: Observation (automatic, always watching)
  ↓ (pattern observed 2x)
Tier 2: Instinct (confidence-scored, file-backed)
  ↓ (3+ related instincts, confidence > 0.7)
Tier 3: Skill (reusable, shareable)
```

**Key features:**
- YAML instinct schema with evidence + confidence tracking
- Auto-capture on session end (tool.execute.after hook)
- Instinct firing before tool execution (pre-screening)
- Evolution protocol (clustering → skill promotion)
- User correction protocol (hard rules that override instincts)

#### 3. loop-engine.md — Autonomous Execution

**Core loop pattern:**
```
1. Observe (read current state)
2. Hypothesize (one clear theory)
3. Test (smallest change to validate)
4. Evaluate (worked? new info?)
5. Repeat OR exit
```

**5 stall detection patterns:**
- Identical hypothesis (same guess 3x = stuck)
- No new information (5 iterations = stuck)
- Cost runaway (budget exceeded = pause)
- Time fence (>30min = checkpoint)
- Tool loop (circular tool pattern = stuck)

**4 loop types:** Debug, Research, Refactor, Implementation

#### 4. safety-gates.md — Quality & Safety

**5 gates:**
1. Before planning (anatomy, constraints, success criteria)
2. Before execution (plan complete, deps resolved, tests planned)
3. During execution (syntax, tests, atomic commits — per change)
4. After execution (goal achieved, no regressions, learnings)
5. Meta (quality, cost, process improvement)

**Resource limits:**
- Max tool calls: 200/session
- Max cost: $5/session
- Max time: 30min/session
- Max file writes: 50/session
- Max subagents: 10/session

**Danger zones:**
- Bash screening (rm -rf, sudo, curl | bash)
- File path screening (.env, .key, .pem, credentials)
- Cost tracking (real-time token metering)

---

## The Intelligence Stack (Visual)

```
┌─────────────────────────────────────────────┐
│  Layer 5: User Interface                    │
│  (What user sees — commands, agents, chat)  │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│  Layer 4: Orchestration                     │
│  (Route, spawn, collect, integrate)         │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│  Layer 3: Intelligence Kernel               │
│  (Nine minds, energy matching, pushback)    │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│  Layer 2: Learning & Memory                 │ ← New
│  (Instincts, corrections, state)            │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│  Layer 1: Safety & Observability            │ ← New
│  (Gates, limits, tracking, sandboxing)      │
└─────────────────────────────────────────────┘
```

**Before:** Layers 3-5 existed (implicitly). Layers 1-2 were ad-hoc.  
**Now:** Complete intelligence stack, fully specified.

---

## What This Means

### For OpenCode Integration

The masterpiece prompt you wrote (`CLAUDE-MASTERPIECE-PROMPT.md`) asked for:
- Actual file content (AGENTS.md, opencode.json, agents, commands, plugin, skill)
- Developer simulations (8 archetypes using VENOM)
- Build order (12 tasks, ready today)

**Now you have the foundation to generate those files properly.** The intelligence layer defines:
- How memory persists (hooks → instincts.yaml)
- How loops execute (autonomous patterns)
- How safety works (gates + danger zones)
- How learning happens (observation → instinct → skill)

**The OpenCode files will be expressions of this intelligence, not arbitrary designs.**

### For VENOM Evolution

This intelligence layer evolves through **use**, not design meetings:
- New loop types emerge from solving domain problems
- Stall detection improves from catching stuck patterns
- Instinct clustering gets smarter from seeing what groups naturally
- Gates get refined from understanding what actually breaks

**The architecture documents the current best understanding. It will improve.**

### For Cross-Platform Parity

```
Common intelligence (.venom/intelligence/)
  ↓ adapts to
Claude Code (.claude/hooks.json + settings.json)
OpenCode (.opencode/plugins/ + hooks)
Cursor (.cursor/hooks/*.js + rules)
Codex (.codex/config.toml + AGENTS.md)
```

**The intelligence is platform-agnostic. The adapters are platform-specific.**

---

## Files Created

```
.venom/intelligence/
├── INDEX.md               ← Navigation + philosophy (this is the entry point)
├── ARCHITECTURE.md        ← Complete intelligence stack (read first)
├── learning-engine.md     ← Auto-capture, instincts, evolution
├── loop-engine.md         ← Autonomous loops, stall detection
└── safety-gates.md        ← 5 gates, resource limits, observability
```

Plus this summary: `.venom/intelligence/WHAT-JUST-HAPPENED.md`

---

## What's Next

### Immediate (Ready Now)

1. **Generate OpenCode files** using the intelligence layer
   - Use `learning-engine.md` for plugin hooks
   - Use `loop-engine.md` for autonomous agent patterns
   - Use `safety-gates.md` for quality enforcement
   - Use `ARCHITECTURE.md` for overall structure

2. **Update existing VENOM commands** to reference this intelligence
   - `/venom?` init → check gates
   - `/venom learn` → use learning-engine patterns
   - `/venom check` → run gate 5 checklist

3. **Create platform adapters** for each harness
   - OpenCode: hooks → instinct firing
   - Cursor: rules → gate checklists
   - Claude Code: CLAUDE.md → intelligence summary

### Medium-Term (As VENOM Learns)

4. **Build instinct capture** into actual hooks
   - Currently theoretical
   - Needs real session.idle implementation

5. **Implement wave execution** for parallel work
   - Currently documented, not wired
   - Needs dependency graph builder

6. **Add loop checkpointing** for long sessions
   - Currently specified, not persisted
   - Needs loop-state.json wiring

### Long-Term (Evolution)

7. **Automatic skill evolution** from instinct clusters
   - When 3+ instincts cluster → auto-generate SKILL.md draft
   - Needs semantic similarity detection

8. **Cross-session learning continuity**
   - Load corrections.yaml on every session start
   - Append instincts.yaml on every session end

9. **Multi-project instinct transfer**
   - High-confidence instincts become global
   - Low-confidence stay project-local

---

## The Philosophy

**From GSD:**  
"The complexity is in the system, not in your workflow."  
→ VENOM's intelligence is complex. Using VENOM is simple.

**From OpenBrowser:**  
"Describe the task. The agent figures out the rest."  
→ VENOM's loops are autonomous. Set the goal, VENOM finds the path.

**From ECC:**  
"Harness performance optimization through continuous learning."  
→ VENOM learns from every session. Manual today = instinct tomorrow.

**VENOM adds:**  
"No shell. Full power. Truth over comfort."  
→ The intelligence doesn't hide. It doesn't pretend. It operates.

---

## Summary

**You asked:** Stop focusing on commands/agents. Build the intelligence layer itself.

**What was delivered:**
- Complete intelligence architecture (ARCHITECTURE.md)
- Three engines (learning, loop, safety)
- Synthesis of 3 masterpiece systems (GSD, OpenBrowser, ECC)
- VENOM-specific additions (energy matching, pushback scale, nine minds)
- Platform-agnostic foundation for all future VENOM implementations

**The intelligence layer is complete.**

Commands and agents are now **applications** of this intelligence, not independent inventions.

Every VENOM behavior — from how it loops to how it learns to how it protects — is defined in these 4 files.

**This is the operating system. Everything else builds on it.**

---

*Next: Use this intelligence to generate the actual OpenCode integration files.*  
*The masterpiece prompt already exists. The intelligence to fulfill it now exists too.*

---

## Important Context

**These files are study material** — extracted patterns from three masterpiece systems (GSD, OpenBrowser, ECC) to understand modern agent intelligence architecture.

**Location:** `.venom/work/opencode-assimilation/` — this is **research** for the OpenCode integration, not the final VENOM intelligence architecture yet.

**Next step:** Use these patterns to design the actual VENOM-OpenCode files:
- `AGENTS.md` project template
- `.opencode/agents/*.md` specialist soldiers
- `.opencode/commands/*.md` VENOM commands
- `.opencode/plugins/venom-core.ts` hook implementation
- `.opencode/skills/VENOM_OPENCODE/SKILL.md` OpenCode-specific skill

The masterpiece prompt (`CLAUDE-MASTERPIECE-PROMPT.md`) can now be fulfilled with this intelligence foundation.

**Study complete. Design begins next.**
