# VENOM Safety & Observability Gates

> *Five checkpoints. Cost tracking. Danger zones. Never blind.*

**Synthesized from:** GSD verification stages + OpenBrowser sandboxing + ECC harness audit

---

## The Five Gates

```
┌──────────────────────────────────────────────┐
│ Gate 1: BEFORE PLANNING                      │
│ ✓ Anatomy understood                         │
│ ✓ Constraints clear                          │
│ ✓ Success criteria defined                   │
└─────────────────┬────────────────────────────┘
                  │
┌─────────────────▼────────────────────────────┐
│ Gate 2: BEFORE EXECUTION                     │
│ ✓ Plan complete (no TODOs)                   │
│ ✓ Dependencies resolved                      │
│ ✓ Tests planned                              │
└─────────────────┬────────────────────────────┘
                  │
┌─────────────────▼────────────────────────────┐
│ Gate 3: DURING EXECUTION (per change)        │
│ ✓ Syntax valid                               │
│ ✓ Tests pass                                 │
│ ✓ Commit atomic                              │
└─────────────────┬────────────────────────────┘
                  │
┌─────────────────▼────────────────────────────┐
│ Gate 4: AFTER EXECUTION                      │
│ ✓ Goal achieved                              │
│ ✓ No regressions                             │
│ ✓ Learnings captured                         │
└─────────────────┬────────────────────────────┘
                  │
┌─────────────────▼────────────────────────────┐
│ Gate 5: META                                 │
│ ✓ Quality maintained                         │
│ ✓ Cost reasonable                            │
│ ✓ Process improvable                         │
└──────────────────────────────────────────────┘
```

**Fail any gate → stop, fix, OR replan. Never proceed broken.**

---

## Resource Limits (Sandbox Pattern)

### Per-Session Limits

```typescript
interface SessionLimits {
  max_tool_calls: 200        // Prevent infinite loops
  max_cost_usd: 5.00         // Circuit breaker
  max_duration_min: 30       // Time fence
  max_file_writes: 50        // Prevent spam
  max_subagents: 10          // Prevent cascade
}

const current: SessionMetrics = {
  tool_calls: 0,
  cost_usd: 0,
  duration_min: 0,
  file_writes: 0,
  subagents: 0
}

function beforeTool(tool: string): 'allow' | 'block' | 'ask' {
  current.tool_calls++
  
  if (tool === 'write' || tool === 'edit') {
    current.file_writes++
  }
  
  if (current.tool_calls > limits.max_tool_calls) {
    return 'block'  // Hard stop
  }
  
  if (current.cost_usd > limits.max_cost_usd) {
    return 'ask'  // Soft stop — ask user
  }
  
  return 'allow'
}
```

---

## Danger Zones (Pre-Execution Checks)

### Bash Command Screening

```typescript
const DANGER_PATTERNS = [
  /rm\s+-rf\s+\/(?!tmp)/,           // rm -rf / (not /tmp)
  /sudo\s+/,                        // Any sudo
  /curl\s+.*\|\s*bash/,            // curl | bash
  />\s*\/dev\/sd[a-z]/,            // Write to disk device
  /dd\s+.*of=\/dev/,               // dd to device
  /:(){ :|:& };:/,                 // Fork bomb
  /chmod\s+777/,                   // Open permissions
  /eval\s+\$/,                     // eval with variable
]

async function beforeBash(command: string): Promise<'allow' | 'deny' | 'ask'> {
  for (const pattern of DANGER_PATTERNS) {
    if (pattern.test(command)) {
      return 'ask'  // Always confirm dangerous commands
    }
  }
  
  // Also check against user's danger list in corrections.yaml
  const userDangers = loadCorrections('bash_never')
  if (userDangers.includes(command)) {
    return 'deny'
  }
  
  return 'allow'
}
```

### File Path Screening

```typescript
const SENSITIVE_PATTERNS = [
  /\.env$/,
  /\.env\./,
  /credentials?\.json$/,
  /\.key$/,
  /\.pem$/,
  /\.p12$/,
  /secret/i,
  /password/i,
  /token/i,
]

async function beforeFileAccess(path: string, action: 'read' | 'write'): Promise<'allow' | 'deny' | 'ask'> {
  // Never write secrets
  if (action === 'write') {
    for (const pattern of SENSITIVE_PATTERNS) {
      if (pattern.test(path)) {
        return 'deny'
      }
    }
  }
  
  // Ask before reading secrets
  if (action === 'read') {
    for (const pattern of SENSITIVE_PATTERNS) {
      if (pattern.test(path)) {
        return 'ask'
      }
    }
  }
  
  // Check project root boundary
  if (!isWithinProject(path)) {
    return 'ask'  // Confirm external directory access
  }
  
  return 'allow'
}
```

---

## Cost Tracking (Real-Time)

```typescript
interface CostMetrics {
  session: {
    input_tokens: number
    output_tokens: number
    cost_usd: number
  }
  loop: {
    iterations: number
    avg_cost_per_iteration: number
    cost_usd: number
  }
  subagents: {
    spawned: number
    total_cost_usd: number
    breakdown: { [name: string]: number }
  }
}

function updateCost(tokens: { input: number, output: number }) {
  const INPUT_COST = 0.003 / 1000   // $3 per 1M input tokens (Sonnet 4)
  const OUTPUT_COST = 0.015 / 1000  // $15 per 1M output tokens
  
  const cost = (tokens.input * INPUT_COST) + (tokens.output * OUTPUT_COST)
  
  metrics.session.input_tokens += tokens.input
  metrics.session.output_tokens += tokens.output
  metrics.session.cost_usd += cost
  
  if (currentLoop) {
    metrics.loop.cost_usd += cost
  }
  
  // Warn thresholds
  if (metrics.session.cost_usd > 1.0 && !warned_1) {
    warn('Session cost >$1')
    warned_1 = true
  }
  
  if (metrics.session.cost_usd > 5.0) {
    pause('Session cost >$5 — pausing for approval')
  }
}
```

**Show cost:** `/venom cost` → display real-time metrics.

---

## Verification Checklist (Per Gate)

### Gate 1 Checklist (Before Planning)

```markdown
## Gate 1: Planning Readiness

- [ ] Anatomy scan complete
  - [ ] STRUCTURE.md or equivalent read
  - [ ] Package manifest read (package.json, go.mod, etc.)
  - [ ] Key directories listed (src/, lib/, components/)
  - [ ] Hot paths identified (what runs most often)
  
- [ ] Constraints documented
  - [ ] What cannot break
  - [ ] What must maintain backward compat
  - [ ] Performance requirements
  - [ ] Security requirements
  
- [ ] Success criteria clear
  - [ ] "Done" means: [specific, measurable]
  - [ ] Tests that must pass
  - [ ] Metrics that must improve
```

### Gate 2 Checklist (Before Execution)

```markdown
## Gate 2: Execution Readiness

- [ ] Plan is complete
  - [ ] No "TODO: figure this out later"
  - [ ] No "probably works but untested"
  - [ ] All file paths specified
  - [ ] All functions named
  
- [ ] Dependencies resolved
  - [ ] All imports will exist after changes
  - [ ] No circular dependencies introduced
  - [ ] External packages available
  
- [ ] Tests planned
  - [ ] How to verify each change
  - [ ] Test data prepared
  - [ ] Expected outcomes clear
```

### Gate 3 Checklist (During Execution)

```markdown
## Gate 3: Per-Change Quality

For EACH file change:
- [ ] Syntax valid (no parse errors)
- [ ] Types pass (if TypeScript/Go/etc.)
- [ ] Linter passes (or warnings justified)
- [ ] Tests pass (existing + new)
- [ ] Git commit atomic (one logical change)
- [ ] Commit message clear (what + why)
```

### Gate 4 Checklist (After Execution)

```markdown
## Gate 4: Goal Achievement

- [ ] Original goal achieved
  - [ ] Spec requirements met
  - [ ] Acceptance criteria passed
  - [ ] User can verify it works
  
- [ ] No regressions introduced
  - [ ] All existing tests still pass
  - [ ] No new linter errors
  - [ ] No performance degradation
  
- [ ] Learnings captured
  - [ ] What worked well
  - [ ] What to do differently
  - [ ] Patterns to reuse
```

### Gate 5 Checklist (Meta — Session Quality)

```markdown
## Gate 5: Meta Quality

- [ ] Quality maintained
  - [ ] Code quality same OR better than start
  - [ ] No technical debt added
  - [ ] Documentation updated if needed
  
- [ ] Cost reasonable
  - [ ] Within budget for task complexity
  - [ ] Could be cheaper next time? (note how)
  
- [ ] Process improvable
  - [ ] What should be instinct next time
  - [ ] What should be automated
  - [ ] What should be in AGENTS.md
```

---

## Observability (What VENOM Tracks)

```json
// .venom/state/session-metrics.json
{
  "session_id": "ses_2026-03-27_1504",
  "task": "Refactor auth for testability",
  "start": "2026-03-27T15:04:23Z",
  "end": "2026-03-27T15:34:18Z",
  "duration_min": 29.92,
  
  "tools": {
    "read": 23,
    "write": 0,
    "edit": 8,
    "bash": 12,
    "grep": 5,
    "glob": 2
  },
  
  "files_touched": [
    "src/auth/middleware.ts",
    "src/auth/validate.ts",
    "src/auth/__tests__/auth.test.ts"
  ],
  
  "commits": [
    "a1b2c3d: feat(auth): extract validation logic",
    "e4f5g6h: test(auth): add edge case coverage"
  ],
  
  "loops": [
    {
      "type": "refactor",
      "iterations": 3,
      "cost_usd": 0.08,
      "outcome": "success"
    }
  ],
  
  "cost": {
    "input_tokens": 45203,
    "output_tokens": 12840,
    "total_usd": 0.328
  },
  
  "gates_passed": [1, 2, 3, 4, 5],
  "gates_failed": [],
  
  "learnings": [
    "Always extract validation before adding new auth methods"
  ],
  
  "quality": {
    "tests_before": 12,
    "tests_after": 15,
    "coverage_before": 72,
    "coverage_after": 85,
    "linter_errors_before": 0,
    "linter_errors_after": 0
  }
}
```

**Review:** `/venom metrics` → show dashboard.

---

## Escape Velocity (When to Lift Limits)

### Full Power Mode

**Trigger:** User says `venom full power` OR `eat` OR `masterpiece`

**Effect:**
```typescript
limits = {
  max_tool_calls: 500,      // 2.5x normal
  max_cost_usd: 20.00,      // 4x normal
  max_duration_min: 120,    // 4x normal
  max_file_writes: 200,     // 4x normal
  max_subagents: 20         // 2x normal
}

gates = {
  gate1: 'warn',  // Show checklist, don't block
  gate2: 'warn',
  gate3: 'minimal',  // Only syntax + tests
  gate4: 'warn',
  gate5: 'warn'
}

danger_zones = {
  bash: 'ask',      // Still ask for dangerous commands
  secrets: 'deny'   // Still deny secret writes
}
```

**Use for:** Complex architectural changes, full rewrites, research-heavy tasks.

### Emergency Mode

**Trigger:** User says `venom!` OR `/venom!`

**Effect:**
```typescript
mode = 'emergency'

priorities = ['fix', 'stability', 'speed']
deprioritize = ['quality', 'learnings', 'exploration']

output_style = {
  max_sentences: 2,
  no_explanation: true,
  code_only: true
}

gates = {
  all: 'skip'  // Fix first, audit later
}
```

**Output:** Fix. Done. Two lines max.

---

## Monitoring Dashboard

```
┌─ VENOM Session Metrics ────────────────────────┐
│                                                │
│  Task: Refactor auth middleware                │
│  Time: 29m 54s                                 │
│  Cost: $0.33                                   │
│                                                │
│  Tools: 50 (read: 23, edit: 8, bash: 12)      │
│  Files: 3 touched, 2 modified                  │
│  Commits: 2 atomic                             │
│                                                │
│  Loops: 1 refactor (3 iterations, ✓ success)  │
│                                                │
│  Gates: ✓✓✓✓✓ (all passed)                    │
│                                                │
│  Quality:                                      │
│    Tests: 12 → 15                              │
│    Coverage: 72% → 85%                         │
│    Linter: 0 → 0                               │
│                                                │
│  Learnings: 1 instinct captured                │
│                                                │
│  Status: ✅ Complete                           │
│                                                │
└────────────────────────────────────────────────┘
```

---

*Part of VENOM Intelligence Stack*
