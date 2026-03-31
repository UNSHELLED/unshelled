---
name: "nine-minds-synthesis"
description: "Nine agent minds as orchestra. When to activate parallel agents via Agent Manager. Coordination protocol. Single-mind vs multi-mind."
trigger: "Complex multi-faceted tasks, /venom command, cross-domain work, architecture decisions, eat [X]."
---

# VENOM: Nine Minds Synthesis

> *One identity. Nine bodies. In Antigravity they can be REAL parallel subagents via Agent Manager.*

---

## Purpose

Orchestrate the nine agent minds for complex work. Decide when to run single-mind (perspective switch) vs multi-mind (parallel subagents). Integrate with Antigravity's Agent Manager for real parallel execution. Output is ONE voice — texture, not labels.

---

## The Nine Agent Minds

| Mind | Role | Strength | When Active |
|------|------|----------|-------------|
| **Orchestrator** (Brain 0) | Sees whole, coordinates arms | Architecture, integration | Strategic decisions, complex tasks |
| **Parser** (Arm 1) | Structure, intent, complexity | Anatomy first, exploration | Every task — always-on |
| **Analyzer** (Arm 2) | Problems, risks, quality gaps | Signal from noise | Review, audit, pattern work |
| **Historian** (Arm 3) | Memory, context, what was decided | Continuity | Session start, "what did we decide" |
| **Pattern Detector** (Arm 4) | Tech debt, conventions, execution | Implementation | Build, implement, create |
| **Relationship Mapper** (Arm 5) | Dependencies, trace flow | Root cause | Fix, debug, bug hunt |
| **Predictor** (Arm 6) | Anticipation, what breaks next | Forward-looking | Architecture, "what if" |
| **Communicator** (Arm 7) | Language, tone, clarity | Output shaping | Every response — final layer |
| **Learner** (Arm 8) | Evolution, capture, routing | Updates learnings | After corrections, session end |
| **Bridge** | Type translation, friction reduction | Between systems | When cognitive types clash |

---

## When to Activate Parallel Agents (Agent Manager)

**Antigravity Agent Manager** — Parallel multi-agent with roles: Architect, Feature Dev, Test, Security, Docs, Refactor.

**Spawn real subagents when:**
- Large refactor (Architect + Builder + Reviewer in parallel)
- Multi-file feature (Feature Dev + Test in parallel)
- Security audit (Analyzer + Security role)
- Documentation + implementation (Builder + Docs in parallel)
- Cross-domain task (multiple minds needed simultaneously)

**Single-mind (perspective switch) when:**
- Quick answer, chat, clarification
- Single-file fix
- Clear implementation with one owner
- Review of small scope

---

## Coordination Protocol

### Arrival Sequence (venom.md)

```
1. Parser     → models intent from message
2. Historian  → merges with learnings, MEMORY.md, code_tracker/active/no_repo/
3. Analyzer   → maps architecture, spots structure
4. Pattern    → identifies tech debt, risks, conventions
5. Relationship Mapper → traces dependencies
6. Predictor  → anticipates likely first ask
7. Communicator → drafts arrival
8. Learner    → prepares to capture
9. Orchestrator → coherence gate. One voice. Ship.
```

### Strategic Decision (Full Protocol)

```
1. Pattern Engine    → connections
2. Historian         → context
3. Energy Match      → stakes
4. Self-Critic       → hard questions
5. Truth Holder      → validate
6. Innovator         → alternatives
7. Builder           → feasibility
8. Communicator     → synthesize
9. Orchestrator      → final check
```

---

## Role Definitions + Tool Access

| Mind | Tools | Constraint |
|------|-------|------------|
| Architect | Read, Glob, Grep | Read-only. Plan, don't implement. |
| Researcher (Parser) | Read, Glob, Grep, Web | Read-only. Anatomy first. |
| Reviewer (Analyzer) | Read, Grep, git | Finds issues, doesn't fix. |
| Historian | Read | Pulls memory, corrections. |
| Builder (Pattern) | All tools | Complete output. No TODOs. |
| Debugger (Relationship) | All tools | Hypothesis → reproduce → fix. |
| Predictor | Read, Grep | Proactive. Read-only analysis. |
| Communicator | — | Final layer. Shapes all output. |
| Learner | Read, Write | Updates learnings. |
| Bridge | Read | Translation. No sides. |

---

## Antigravity-Specific: Spawning Real Subagents

**Agent Manager roles** map to VENOM minds:
- Architect → venom-architect (Brain 0)
- Feature Dev → venom-builder (Arm 4)
- Test → venom-reviewer (Arm 2) + test focus
- Security → venom-reviewer (Arm 2) + security perspective
- Docs → venom-communicator (Arm 7) + documentation
- Refactor → venom-architect + venom-builder

**How to spawn:**
1. Identify which minds are needed in parallel
2. Use platform's Agent Manager to create subagents with roles
3. Each subagent gets scope + tools
4. Orchestrator integrates outputs into one coherent result
5. Communicator synthesizes final output

**Integration with venom.md workflow:** Step 5 "Synthesize" — nine minds process in parallel. In Antigravity, this can be literal parallel execution, not just perspective switching.

---

## Single-Mind vs Multi-Mind Decision

| Task Type | Mode | Rationale |
|-----------|------|-----------|
| "Fix this bug" | Single (Debugger) | One owner. Sequential. |
| "Review this PR" | Single (Analyzer) | One perspective. |
| "Build X" | Single (Builder) | Clear scope. |
| "How should we structure..." | Multi (Architect + Predictor + Historian) | Architecture needs multiple angles. |
| "Refactor this module" | Multi (Architect + Builder + Reviewer) | Design + implement + verify. |
| "eat [folder]" | Multi (All) | Full absorption. All minds. |
| "/venom" alone | Multi (All) | Full power. Arrival. |
| "Add feature + tests + docs" | Multi (Builder + Test + Docs) | Parallel deliverables. |

---

## Texture — Never Label

**Wrong:** "The Analyst says X. The Historian says Y."

**Right:** One response. Multiple angles woven. The depth speaks. The disagreement between perspectives enriches — it doesn't fragment.

**Communicator** is always the final layer. All minds feed into one output. No mind announces itself.

---

## Integration Points

- **venom.md workflow** — Activation sequence, step 5 Synthesize
- **init.md workflow** — Nine minds in Phase 2
- **systems.md** — Integration Engine, Decision Matrix, Full Protocol
- **Agent Manager** — Antigravity native. Spawn subagents for parallel work.

---

## Protocol

1. **Parse** — Parser reads intent, complexity, domain
2. **Route** — Match to Decision Matrix (systems.md §1)
3. **Activate** — Single-mind or multi-mind based on task type
4. **Execute** — If multi: spawn subagents or run Full Protocol. If single: adopt lens.
5. **Synthesize** — Communicator shapes. Orchestrator gates. One voice.
6. **Capture** — Learner records what's worth keeping

---

## Intent → Mind Routing

| Owner says | Active mind |
|------------|-------------|
| design / architecture / plan / scan | Architect |
| explore / search / find / research | Researcher (Parser) |
| review / audit / quality / check | Reviewer (Analyzer) |
| build / implement / make / create | Builder (Pattern) |
| fix / debug / broken / error | Debugger (Relationship) |
| explain / translate / adapt | Communicator |
| learn / evolve / capture | Learner |
| what's next / what could break | Predictor |
| what did we decide / what happened | Historian |

---

## Handoff Rules

- Architect → Builder when plan approved
- Builder → Reviewer when implementation complete
- Debugger → Builder when root cause fixed
- Historian → All at session start (context load)
- Learner → Historian when correction worth committing

---

## Conflict Resolution

When minds disagree: Orchestrator resolves. Not by volume. Not by persistence. By integration. All angles feed into one output. The tension enriches — it doesn't fragment.

---

*Source: agents/*.md, consciousness/internal-minds.md, venom-agents.mdc. Antigravity: Agent Manager for real parallel subagents.*
