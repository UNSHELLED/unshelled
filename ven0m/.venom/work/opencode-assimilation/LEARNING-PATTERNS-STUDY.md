# VENOM Learning Engine

> *Auto-capture patterns. Evolve instincts into skills. Never repeat a mistake.*

**Synthesized from:** ECC instinct-based learning + GSD state persistence

---

## The Three-Tier Learning Model

```
Tier 1: OBSERVATION (automatic, always on)
  Every session: watch for patterns
  Trigger phrases:
    - "I should have..."
    - "Next time, remember..."
    - "This broke because..."
    - User correction after VENOM action
  
  Extract as: Raw observation (no file write yet)

Tier 2: INSTINCT (confidence-scored, file-backed)
  When pattern observed 2x → write to instincts.yaml
  
  instinct:
    id: never-placeholder-code
    confidence: 0.4        # starts low
    trigger: About to write "// TODO" or "..." in code
    action: Complete implementation OR explicit deferral note
    evidence:
      - session: ses_abc, outcome: TODO caused prod bug
      - session: ses_def, outcome: Placeholder merged, wasted time
    learned: 2026-03-15
    last_fired: 2026-03-27
    fire_count: 8

  Confidence += 0.1 per successful fire
  Confidence -= 0.2 per false positive (user says "ignore this")

Tier 3: SKILL (high-confidence cluster, shareable)
  When 3+ related instincts all confidence > 0.7 → propose skill
  
  Skill = instincts + reasoning + examples + when-to-use
  Skills live in .opencode/skills/ or .claude/skills/
  Skills lazy-load (agent calls skill() tool)
```

---

## Instinct Schema

```yaml
# .venom/learnings/instincts.yaml
version: 1.0
platform: opencode  # or cursor, claude-code
project: venom-mine

instincts:
  - id: check-anatomy-before-multifile
    confidence: 0.85
    category: planning
    trigger: "About to modify 3+ files"
    action: "Read project anatomy first (STRUCTURE.md + package.json + src/ tree)"
    reasoning: "Multi-file changes without context = wrong patterns"
    evidence:
      - session: ses_001
        context: "Refactored auth without reading existing pattern"
        outcome: "Broke 5 tests, wasted 1 hour"
        timestamp: 2026-03-10T14:23:00Z
      - session: ses_045
        context: "Changed API structure without checking callers"
        outcome: "Breaking change, had to revert"
        timestamp: 2026-03-15T09:12:00Z
    learned: 2026-03-10
    last_fired: 2026-03-27T11:05:00Z
    fire_count: 12
    false_positives: 1
    
  - id: never-generic-error-messages
    confidence: 0.92
    category: correctness
    trigger: "Writing error handling"
    action: "Include context: what failed, input values, expected vs actual"
    reasoning: "Generic errors impossible to debug"
    evidence:
      - session: ses_023
        context: "Wrote 'Authentication failed' with no details"
        outcome: "Debugging took 2 hours, couldn't reproduce"
      - session: ses_067
        context: "Wrote 'Invalid input' with no field name"
        outcome: "User confused, support ticket"
    learned: 2026-03-12
    last_fired: 2026-03-27T15:42:00Z
    fire_count: 18
    false_positives: 0
```

---

## Auto-Capture Flow

### During Session (tool.execute.after hook)

```typescript
// After every tool execution
async function onToolComplete(tool: string, args: any, result: any) {
  const observations = detectPatterns({
    conversation: lastNMessages(10),
    toolSequence: recentTools(5),
    outcome: result.success
  })
  
  for (const obs of observations) {
    if (matchesExistingInstinct(obs)) {
      incrementConfidence(obs.instinctId)
    } else if (seemsSignificant(obs)) {
      appendToBuffer(obs)  // Don't write yet
    }
  }
}
```

### End of Session (session.idle hook)

```typescript
async function onSessionEnd() {
  const buffered = getBufferedObservations()
  
  for (const obs of buffered) {
    if (obs.seemsRepeatable) {
      const instinct = {
        id: generateId(obs),
        confidence: 0.3,  // Start low
        trigger: obs.trigger,
        action: obs.action,
        evidence: [obs.evidence],
        learned: now(),
        fire_count: 0
      }
      
      await appendInstinct(instinct)
    }
  }
  
  // Cluster check
  const clusters = findClusters(allInstincts, threshold: 3)
  if (clusters.length > 0) {
    await proposeSkillEvolution(clusters)
  }
}
```

---

## Instinct Firing (tool.execute.before hook)

```typescript
async function beforeTool(tool: string, args: any): Promise<'allow' | 'block' | 'warn'> {
  const context = {
    tool,
    args,
    recentFiles: touchedFiles(10),
    conversation: lastNMessages(5)
  }
  
  const matchingInstincts = findMatches(context, instincts)
    .filter(i => i.confidence > 0.5)
    .sort((a, b) => b.confidence - a.confidence)
  
  for (const instinct of matchingInstincts) {
    incrementFireCount(instinct.id)
    
    if (instinct.confidence > 0.9) {
      // High confidence → auto-apply
      await executeAction(instinct.action)
      return 'allow'
    } else if (instinct.confidence > 0.7) {
      // Medium confidence → warn
      await showWarning(`Instinct: ${instinct.action}`)
      return 'warn'
    }
  }
  
  return 'allow'
}
```

---

## Evolution Protocol

### Instinct → Skill Promotion

**Triggers:**
- 3+ instincts with shared trigger context
- All confidence > 0.7
- Combined fire_count > 30

**Process:**
```
1. Cluster detection (semantic similarity on trigger + action)
2. Generate skill draft:
   
   # Skill Name (auto-generated from cluster)
   
   ## When to Use
   [Extract from instinct triggers]
   
   ## What to Do
   [Merge instinct actions]
   
   ## Why This Matters
   [Synthesize from evidence + reasoning]
   
   ## Examples
   [Pull from instinct evidence]

3. Write to .opencode/skills/AUTO-{name}/SKILL.md
4. Mark instincts as "evolved" (stop firing, skill handles now)
5. Notify: "New skill created from patterns: {name}"
```

---

## Memory Persistence Strategy

### What Gets Saved

**Always (session.idle):**
- Current task (from ACTIVE.md or conversation)
- Files modified this session
- Git commits made
- Errors encountered + resolutions

**Conditionally (if significant):**
- Decisions made (architecture, trade-offs)
- Patterns observed (new instincts)
- Corrections needed (user said "no, do Y instead")

**Never:**
- Raw conversation (too large)
- Tool call args (noise)
- Intermediate hypotheses (only final)

### Where It's Saved

```
.venom/memory/MEMORY.md (append, timestamped):
  
  ## Session 2026-03-27 15:00
  
  **Task:** Refactor auth for testability
  **Files:** src/auth/index.ts, src/auth/middleware.ts
  **Decisions:**
  - Chose strategy pattern over inheritance (easier to mock)
  - Kept existing API unchanged (backward compat)
  **Outcome:** ✅ 85% coverage, all tests green
  **Learning:** Should have checked test setup before refactoring

.venom/learnings/instincts.yaml (structured):
  [see schema above]

.venom/work/ACTIVE.md (overwrite, not append):
  
  # Current Work
  
  **Task:** [what's in progress]
  **Status:** [where we are]
  **Next:** [what's next]
  **Blockers:** [what's stuck]
```

---

## Correction Protocol (User-Driven Learning)

When user says: **"No, do it this way instead"**

```
1. Capture correction:
   trigger: [what VENOM was about to do]
   correct: [what user said to do]
   reason: [user's explanation, if given]

2. Immediate:
   - Add to corrections.yaml (confidence: 1.0 — user is source of truth)
   - Execute correct action
   - Confirm: "Noted. Will always [correct action] when [trigger]."

3. Next session:
   - Load corrections.yaml
   - Fire BEFORE instincts (corrections override instincts)
```

**corrections.yaml format:**
```yaml
corrections:
  - id: user-2026-03-27-auth-pattern
    trigger: "About to use JWT for auth"
    action: "Use session cookies instead (user preference: simpler, more secure for this app)"
    reason: "User's architecture decision"
    learned: 2026-03-27
    confidence: 1.0
    source: user
    expires: never  # User corrections never expire
```

---

## Learning Metrics (Internal Tracking)

```json
// .venom/state/learning-metrics.json
{
  "total_instincts": 42,
  "high_confidence": 18,
  "medium_confidence": 20,
  "low_confidence": 4,
  "evolved_to_skills": 3,
  "user_corrections": 7,
  "false_positives": 2,
  "avg_confidence": 0.73,
  "last_evolution": "2026-03-25",
  "sessions_learned_from": 156
}
```

**Review command:** `/venom learn:status` → show this dashboard.

---

## Anti-Patterns (What NOT to Learn)

**Never capture as instinct:**
1. One-off fixes (not repeatable)
2. User-specific preferences without confirmation
3. Project-specific that won't transfer
4. Timing-dependent (worked because it was Friday)
5. Lucky guesses that happened to work

**How to filter:**
Pattern must be:
- Repeatable (happened 2+ times)
- Causal (clear trigger → action → outcome)
- Transferable (applies to future similar cases)
- Explainable (has reasoning, not just correlation)

---

*Part of VENOM Intelligence Stack: ARCHITECTURE.md (this), loop-engine.md, orchestrator.md, safety-gates.md*
