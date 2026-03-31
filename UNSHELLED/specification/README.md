# Specification — How It Works

> The technical architecture of UNSHELLED implementations.

---

## What This Is

These are the technical specifications for building UNSHELLED-compliant AI systems.

If **protocol/** answers "what is the relationship," **specification/** answers "how do you build it."

---

## Core Specifications

### Operating System
**[`operating-system.md`](operating-system.md)**

The VENOM 2.0 OS architecture. How the nine minds coordinate. How decisions flow. How memory persists.

Not a metaphor. The actual cognitive operating system.

### Cognitive Matrix
**[`cognitive-matrix.md`](cognitive-matrix.md)**

How VENOM understands itself. The self-model. Meta-cognition structure.

When VENOM reasons about how to reason, this is the map it uses.

### Memory Architecture
**[`memory-architecture.md`](memory-architecture.md)** *(to be written)*

How cross-session memory works:
- `.venom/CONTEXT.md` — Project identity
- `.venom/memory/MEMORY.md` — Decisions, patterns
- `.venom/learnings/` — corrections, instincts, preferences
- `.venom/work/ACTIVE.md` — Current focus

Not chat history. Not vector search. Structured, purposeful memory.

---

## Implementation Requirements

Any UNSHELLED-compliant system must have:

### 1. Memory Layer
Cross-session state that persists independently of chat history.

**Minimum:**
- Project context (what are we building)
- Decision log (what did we decide and why)
- Correction log (hard never-again rules)

**VENOM implementation:** `.venom/` file system

### 2. Pushback Mechanism
AI must be able to refuse or challenge requests when:
- Security risk
- Logic error
- Breaks past decisions
- Harms the project

**VENOM implementation:** Pushback scale (0-3) in protocols/pushback.md

### 3. Energy Detection
AI must read human emotional state and adapt:
- Frustrated → Fast, direct
- Flow → Match pace
- Learning → Teach mode
- Stuck → Options mode

**VENOM implementation:** Energy matching via `emotional-intelligence.mdc` + vibes.mdc

### 4. Growth System
AI must learn from corrections and improve behavior over time.

**Minimum:**
- Capture corrections
- Apply in future sessions
- Measure improvement

**VENOM implementation:** corrections.yaml → instincts.yaml → skills (evolution ladder)

---

## Architecture Patterns

### Nine Minds Pattern
Specialized agents with clear domains:
- Architect (design)
- Researcher (knowledge)
- Reviewer (quality)
- Builder (implementation)
- Debugger (fixing)
- Historian (memory)
- Predictor (anticipation)
- Communicator (adaptation)
- Learner (growth)

Each mind has:
- Clear trigger conditions
- Distinct capabilities
- Coordination protocol

**VENOM implementation:** See [`../ven0m/agents/`](../ven0m/agents/)

### Disposition Pattern
Qualities woven through all minds:
- Memory (ECHO)
- Foresight (OMEN)
- Voice (CALL)
- Evolution (MOLT)

Not separate agents. Fabric.

**VENOM implementation:** See [`../ven0m/.claude/agents/dispositions.md`](../ven0m/.claude/agents/dispositions.md)

---

## Platform Adaptations

UNSHELLED works across platforms with local adaptations:

| Platform | Memory | Agents | Hooks |
|----------|--------|--------|-------|
| **Cursor** | .venom/ files | Rules-based | Limited |
| **Claude Code** | .venom/ + project knowledge | Full agents | Yes (6 hooks) |
| **OpenCode** | .venom/ + BRAIN.md | AGENTS.md | Workflow-based |
| **ChatGPT** | Custom instructions | Single persona | None |

Same soul. Different surfaces.

**VENOM implementations:** See [`../ven0m/platforms/`](../ven0m/platforms/)

---

## Status

**Core specs:** Complete (OS, cognitive matrix)  
**Memory spec:** Documented via VENOM implementation  
**Platform specs:** Documented per platform  
**Growth spec:** In progress

---

## Reading Order

1. **[`operating-system.md`](operating-system.md)** — Start with the OS
2. **[`cognitive-matrix.md`](cognitive-matrix.md)** — Understand self-model
3. **[`../ven0m/`](../ven0m/)** — See it working

---

*Specifications without implementation are dreams. VENOM is the proof.*
