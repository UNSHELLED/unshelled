# All Agents Audit

**Platforms compared:** Claude Code v2.4 | OpenCode | Canonical docs
**Date audited:** 2026-03-30
**Verdict:** OpenCode has the better version of every agent that exists there. Claude Code agents are identity-correct but methodology-thin.

---

## Per-Agent Comparison Table

| Agent | CC v2.4 quality | OpenCode quality | Best version | Port action |
|-------|----------------|-----------------|--------------|-------------|
| venom-architect | ⭐⭐ — right identity, no methodology | ⭐⭐⭐⭐ — ADR format, gate check | OpenCode | port + loop protocol |
| venom-researcher | ⭐⭐ — right identity, no anatomy framework | ⭐⭐⭐⭐ — anatomy framework, output format | OpenCode | port + loop protocol |
| venom-reviewer | ⭐⭐ — 5 categories, no severity order | ⭐⭐⭐⭐ — 8 perspectives, most critical first | OpenCode | port + fix-per-issue |
| venom-debugger | ⭐⭐ — right identity, no stall detection | ⭐⭐⭐⭐ — full loop, stall, cost guard | OpenCode | port full methodology |
| venom-builder | ⭐⭐ — right identity, no scope boundary | ⭐⭐⭐⭐ — wave execution, hidden, scope boundary | OpenCode | port full methodology |
| venom-historian | ⭐⭐⭐ — adequate, correct scope | None in OC | CC v2.4 | minor: fix .unshelled ref |
| venom-predictor | ⭐⭐⭐ — adequate output format | None in OC | CC v2.4 | minor: clarify format |
| venom-communicator | ⭐⭐ — functional but thin | None in OC | CC v2.4 | upgrade: absorb bridge |
| venom-learner | ⭐⭐ — right idea, no capture path | None in OC | CC v2.4 + new spec | upgrade: instinct capture |
| venom-bridge | ⭐ — redundant | None in OC | N/A | **remove** |
| venom-explorer | N/A | ⭐⭐⭐⭐ — read-only fast scan | OpenCode only | Claude Code: Task+researcher |

---

## Per-Agent Detail

### venom-architect

**CC v2.4 (18 lines):**
- ✅ Correct tools: Read, Glob, Grep, WebSearch, WebFetch
- ✅ Correct disallowed: Write, Edit, Bash, NotebookEdit
- ✅ Right disposition: "Disposition over rules"
- ❌ No loop protocol — what happens when design has gaps?
- ❌ No output format spec — every response looks different
- ❌ No ADR format — architecture decisions lose context
- ❌ No gate check — no verification that design satisfies the spec

**OpenCode (to port):**
- Full ADR output format: Decision / Context / Trade-offs / Alternatives / Implementation contract / Boundary
- Explicit read-only constraint with reasoning
- Loop exit conditions for design iteration

**Build action:** Port OpenCode architect body. Add autonomous loop protocol. Mandatory ADR output format.

---

### venom-researcher

**CC v2.4 (18 lines):**
- ✅ Correct tools including `Bash(ls:*), Bash(git:*), Bash(wc:*), Bash(file:*)`
- ✅ Read-only enforced
- ❌ No anatomy framework (heartbeat, skeleton, nervous system, organs)
- ❌ No output format spec — research outputs are inconsistent
- ❌ No loop protocol — when does research stop?
- ❌ "Tables. Bullets. Quantify." — correct but too brief

**Best methodology (from OpenCode + rethink):**
- Anatomy framework: every exploration maps heartbeat (hot path) + skeleton (data model) + nervous system (event flow) + organs (services)
- Loop protocol: research completes when all anatomy components mapped OR question fully answered — not "when context is full"
- Output format: Context map — what we know / what's missing / what could break

**Build action:** Write from scratch using anatomy framework + loop protocol + context map output format.

---

### venom-reviewer

**CC v2.4 (17 lines):**
- ✅ Correct tools: Read, Glob, Grep, git diff/log/show
- ✅ "Soft-pedaling real problems feels wrong" — right disposition
- ❌ 5 categories only: Correctness | Security | Performance | Quality | Patterns
- ❌ No ordering — correctness and style presented equally
- ❌ Format: `[SEVERITY] file:line` — good format, but SEVERITY order not defined
- ❌ No fix-per-issue requirement

**Best methodology:**
- 8 perspectives in MANDATORY order: Security → Correctness → Performance → Breaking changes → Maintainability → Dependencies → Tests → Docs
- CRITICAL issues first regardless of location in code
- Fix included per issue, not just identification
- "What works" section — prevents pure negativity
- For PR mode: formal verdict required (SHIP / REWORK with exact conditions)

**Build action:** Port 8-perspective ordered format. Make security-first explicit. Add fix-per-issue requirement. Add PR mode verdict format.

---

### venom-debugger

**CC v2.4 (16 lines):**
- ✅ Right process: Reproduce → Trace → Isolate → Root Cause → Fix + Prevention
- ✅ `model: sonnet` — good choice for debugging
- ❌ No autonomous loop protocol — what happens after 3 failed hypotheses?
- ❌ No stall detection — debugger can loop forever without escalating
- ❌ No cost guard — expensive debugging loops uncontrolled
- ❌ No hypothesis tracking format — no record of what was tried

**Best methodology (SWE-agent inspired):**
```
Loop: Observe → Hypothesize (one at a time) → Test (smallest possible) → Evaluate → Repeat

Stall detection:
- Same hypothesis 3x → hypothesis is wrong. Try the opposite.
- No new info after 5 iterations → wrong area. Escalate.
- Cost >$1 → pause. Report what's been tried. Ask for direction.
- Circular tool pattern → change strategy entirely.

Output per iteration:
Iteration N: Hypothesis: [X] | Test: [Y] | Result: [Z] | Status: [continuing/stuck]

Stuck output:
Stuck after [N] iterations.
- Error lives in [area]
- Happens when [condition]
- Tried: [all hypotheses]
- Ruled out: [eliminated areas]
Where should I look next?
```

**Build action:** Full loop protocol. Hypothesis tracking. Stall detection. Cost guard. Iteration output format.

---

### venom-builder

**CC v2.4 (17 lines):**
- ✅ Right disposition: "Incomplete feels wrong. TODO feels like betrayal."
- ✅ Right process: Check identity → read similar files → match conventions
- ❌ No wave execution — can't be used as a parallel wave soldier
- ❌ No scope boundary — takes on unbounded work
- ❌ No atomic output format — reports vary
- ❌ No verification step — builds without confirming what was built
- ❌ No orchestrator-only behavior — user invocable, which clutters the conversation

**Best methodology (OpenCode-inspired, adapted):**
```
Before starting: REQUIRE explicit scope
- Files to create: [exact list]
- Files to modify: [exact list]
- Tests to write: [exact list]
- Verification: [how to confirm done]

Execution protocol:
1. Read every file in scope before modifying any
2. Make complete changes — no TODOs, no placeholders
3. Run verification for each file after completion
4. Mark task [x] if verification passes
5. Stop and report if verification fails

Atomic output after every task:
File: [path]
Change: [one sentence]
Verified: [how]
Status: [done / failed — reason]
```

**Behavioral note for CLAUDE.md:** Builder is orchestrator-only. When CLAUDE.md or a command spawns builder via Task tool, VENOM should not route user requests directly to builder. Builder executes, never converses.

**Build action:** Full scope boundary. Wave execution integration. Atomic output format. Verification step. Behavioral instruction in CLAUDE.md.

---

### venom-historian

**CC v2.4 (unknown lines — to verify):**
- Expected: loads `.venom/memory/MEMORY.md`, surfaces relevant past decisions
- ❌ May reference `.unshelled/` — verify and fix
- ❌ Likely lacks: decision archaeology format, confidence aging, what to NOT surface

**Best methodology:**
- Pull relevant decisions based on current task context, not all of MEMORY.md
- Format: `[DATE] — [decision]: [one-line summary]. Relevant because: [link to current task].`
- Age decay: decisions older than 3 months get flagged as "verify still applies"

**Build action:** Minor upgrade. Fix memory path. Add relevance-based pull. Add age decay flag.

---

### venom-predictor

**CC v2.4 (unknown lines — to verify):**
- Expected: risk analysis, proactive identification of what breaks next
- Should be adequate — one-shot pattern doesn't need loop protocol

**Best methodology:**
- Output format: Risk table — Risk / Likelihood / Impact / Mitigation
- Proactive trigger: fires when plan is approved before build starts
- Never reactive — predictor should surface risks before they materialize

**Build action:** Minor upgrade. Clarify output format. Add proactive trigger signal.

---

### venom-communicator

**CC v2.4 (unknown lines):**
- Expected: language/register adaptation, silently adapts
- Needs: absorb bridge function (type translation between cognitive types)

**Best methodology for universal audience:**
- Detects: technical level, language preference (mixed? pure?), emotional state
- Adapts: vocabulary density, example type, response structure
- For bridge function: explains WHY certain communication fails between types, not just how to fix it
- Always silent — never announces "I've adapted my communication style"
- For all devs: must work without knowing VENOM vocabulary. Developer says "explain this simply" → communicator fires without the user knowing what fired.

**Build action:** Upgrade with bridge function absorbed. Add type detection. Universal adaptation (not Kariem-calibrated).

---

### venom-learner

**CC v2.4 (unknown lines):**
- Expected: captures patterns, routes to instincts.yaml / corrections.yaml
- Likely lacks: confidence scoring, evolution path, session-end trigger

**Best methodology:**
- Triggers: pattern repeats 3x, significant error surfaced, session ends with meaningful work
- Capture format: `trigger | action | confidence (0.3-0.9) | evidence | date`
- Evolution: 0.3 → observed once. 0.6 → confirmed 3x. 0.9 → fires automatically.
- Routes: correction → corrections.yaml, pattern → instincts.yaml, preference → preferences.yaml

**Build action:** Full upgrade. Confidence scoring. Evolution path. Session-end trigger.

---

## Agents That Don't Exist Anywhere (New Agents Assessment)

**`venom-explorer` from OpenCode:** A read-only fast scanner (`@explore` in OpenCode). Claude Code equivalent: `Task tool + venom-researcher`. Don't create a new agent — the Task tool already provides fresh-context scanning.

**Any other gaps?** No. The nine minds cover every cognitive function needed. Adding more agents = overhead without coverage.

---

## venom-bridge — Removal Confirmed

**Current `venom-bridge` function:** "Translates between cognitive types and communication styles. Explains WHY translation is needed."

**venom-communicator function:** "Language and register adaptation. Adapts silently."

**Verdict:** `venom-communicator` can absorb the bridge function by adding: detects cognitive type mismatches, not just language/register mismatches. One agent. No overlap. Bridge removed.

---

## Universal Audience Implication for All Agents

**Old design:** Agents calibrated for Kariem. Descriptions reference "the owner," "his style."

**New design:** All agents work for ANY developer, ANY character. This changes:

1. **Description field** (shown to user on @mention) must be self-explanatory without VENOM vocabulary
   - Old: "I'm Arm 2 — code review" → means nothing to a new dev
   - New: "Code review agent. 8 perspectives. Most critical issue first. Fix included per issue."

2. **Energy matching** in agents must be generic, not Kariem-calibrated
   - Remove: "Owner frustrated → fix first"
   - Replace: "User frustrated → fix first" (same behavior, universal)

3. **Profile calibration** must emerge from behavior, not be hardcoded
   - `/venom-eat` absorbs the project → infers stack/conventions
   - `/remember` builds preferences over time → profile grows naturally
   - First-session developer gets universal defaults, not Kariem's preferences

4. **Output formats** must be machine-readable for agents running headlessly
   - Every agent output format should work both in TUI (human-readable) and as structured data (agent-parseable)
   - Use consistent fields that a downstream agent can parse: `Status: done | Confidence: high | Files: [list]`
