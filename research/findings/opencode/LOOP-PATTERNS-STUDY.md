# VENOM Autonomous Loop Engine

> *Observe. Hypothesize. Test. Repeat until done or stuck.*

**Synthesized from:** OpenBrowser agent loop + GSD verification gates + VENOM's nine minds

---

## The Core Loop

```
┌─────────────────────────────────────┐
│  1. OBSERVE                         │
│  Read current state                 │
│  (files, git, linter, test output)  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  2. HYPOTHESIZE                     │
│  What's the issue / next action?    │
│  (one clear theory, testable)       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  3. TEST                            │
│  Execute smallest change that       │
│  validates/invalidates hypothesis   │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  4. EVALUATE                        │
│  Did it work? New information?      │
│  Done | Continue | Stuck            │
└──────────────┬──────────────────────┘
               │
               ▼
        Loop OR Exit
```

---

## Loop State Tracking

```json
// .venom/state/loop-state.json (updated each iteration)
{
  "loop_id": "loop_2026-03-27_150423",
  "task": "Fix auth middleware bug",
  "iterations": [
    {
      "num": 1,
      "hypothesis": "Missing null check on req.user",
      "action": "Add null guard in middleware.ts:45",
      "result": "Tests still fail — error persists",
      "new_info": "Error happens BEFORE middleware runs",
      "status": "continue",
      "cost_usd": 0.023,
      "timestamp": "2026-03-27T15:04:35Z"
    },
    {
      "num": 2,
      "hypothesis": "Route registration order wrong",
      "action": "Move auth middleware before error handler",
      "result": "Tests pass ✓",
      "new_info": "Middleware must run before global handlers",
      "status": "done",
      "cost_usd": 0.018,
      "timestamp": "2026-03-27T15:06:12Z"
    }
  ],
  "total_cost": 0.041,
  "outcome": "success",
  "learning": "Always check middleware registration order before debugging middleware logic"
}
```

---

## Stall Detection (5 Patterns)

### 1. Identical Hypothesis

```
if (current.hypothesis === previous.hypothesis) {
  stall_counter++
}

if (stall_counter >= 3) {
  return {
    status: 'stuck',
    reason: 'Same hypothesis 3 times — not learning from results',
    action: 'Ask user for new information OR try completely different approach'
  }
}
```

### 2. No New Information

```
if (current.new_info === null || current.new_info === '') {
  no_info_counter++
}

if (no_info_counter >= 5) {
  return {
    status: 'stuck',
    reason: 'Five iterations without learning anything new',
    action: 'The current approach cannot yield more info. Need different tool or user input.'
  }
}
```

### 3. Cost Runaway

```
if (loop.total_cost > budget) {
  return {
    status: 'paused',
    reason: `Exceeded budget ($${budget})`,
    action: 'Report progress so far, ask permission to continue'
  }
}
```

### 4. Time Fence

```
if (elapsed_time > 30 * 60 * 1000) {  // 30 minutes
  return {
    status: 'checkpoint',
    reason: 'Loop running >30min',
    action: 'Save state, report progress, offer to continue'
  }
}
```

### 5. Tool Loop

```
if (last_3_tools === ['read', 'grep', 'read']) {
  return {
    status: 'stuck',
    reason: 'Circular tool pattern — searching without narrowing',
    action: 'Change search strategy OR ask user to point to the file'
  }
}
```

---

## Loop Types (Different Patterns)

### Debug Loop

```
Goal: Find root cause of error

State: { error_msg, stack_trace, last_working_commit }

Loop:
  1. Observe: Read error + surrounding code
  2. Hypothesize: "Caused by X because Y"
  3. Test: Minimal change to validate (add log OR revert one line)
  4. Evaluate: Error gone? If no, what new info?
  5. Repeat

Exit: Root cause found + fix verified

Max iterations: 10 (after that, ask user)
```

### Research Loop

```
Goal: Understand codebase area

State: { target_area, questions: [], answers: [] }

Loop:
  1. Observe: SemanticSearch OR Grep + Read
  2. Hypothesize: "This component does X, connects to Y"
  3. Test: Read referenced files to confirm
  4. Evaluate: Questions answered? New questions?
  5. Repeat

Exit: All questions answered OR max depth reached

Max iterations: 15
```

### Refactor Loop

```
Goal: Improve code without breaking it

State: { target_file, tests_before, goal }

Loop:
  1. Observe: Read file + tests
  2. Hypothesize: "Can extract X, simplify Y"
  3. Test: Make change + run tests
  4. Evaluate: Tests pass? Code simpler?
  5. Repeat

Exit: Goal achieved + tests green

Max iterations: 20 (each iteration = one atomic refactor)
```

### Implementation Loop

```
Goal: Build feature from spec

State: { spec, checklist: [], completed: [] }

Loop:
  1. Observe: What's left in checklist
  2. Hypothesize: "Next item is X, requires Y"
  3. Test: Implement item + write test
  4. Evaluate: Test passes? Item complete?
  5. Repeat

Exit: All checklist items complete + verified

Max iterations: 50 (complex features)
```

---

## Loop Escape Hatches

### User Override

**At any iteration, user can:**
- Interrupt (`Ctrl+C` or stop button)
- Provide hint ("Look in auth.ts line 45")
- Change hypothesis ("Actually, try X instead")
- Declare done ("This is good enough")

**VENOM responds:** Immediate. No "but I was going to..." — just incorporate and continue OR stop.

### Emergency Exit

**When loop is clearly failing:**
```
VENOM: "Tried 5 approaches, none worked. Here's what I know:
- Error is in auth flow
- Happens after middleware
- Before database call
- Only on POST requests

Where should I look next?"
```

**Never:** Keep trying random things to avoid asking.

---

## Nested Loops

```
Main loop (orchestrator):
  Research loop (subagent @explore)
  ↓ returns anatomy map
  
  Planning loop (main):
  ↓ generates task graph
  
  Parallel execution loops (subagents @general x3):
    Implementation loop (task A)
    Implementation loop (task B)
    Implementation loop (task C)
  ↓ all complete
  
  Verification loop (main):
  ↓ confirms all tasks met goals
  
Done.
```

**Key:** Each loop = fresh context for subagents. Main context orchestrates only.

---

## Loop Persistence

### Checkpoint on Pause

```json
// .venom/state/loop-checkpoint.json
{
  "loop_id": "loop_2026-03-27_150423",
  "task": "Refactor auth middleware",
  "current_iteration": 7,
  "hypothesis": "Need to extract validation into separate function",
  "files_touched": ["src/auth/middleware.ts"],
  "tests_state": "3 passing, 1 failing",
  "next_action": "Extract validateUser() function",
  "context_window_pct": 45,
  "cost_so_far": 0.12,
  "resume_instruction": "Continue refactor. Next: extract validation. Test currently failing on line 67."
}
```

### Resume from Checkpoint

```
On `/venom resume`:
  1. Read loop-checkpoint.json
  2. Load files_touched (Read tool)
  3. Check tests_state (bash: run tests)
  4. Inject resume_instruction
  5. Continue loop from iteration N+1
```

---

## Loop Quality Metrics

```
Good loop (will finish):
- Each iteration adds new information
- Hypothesis changes based on evidence
- Cost per iteration decreasing (getting closer)
- Clear exit condition

Bad loop (will stall):
- Same hypothesis repeated
- No new information
- Cost per iteration increasing (flailing)
- Exit condition vague ("until it works")
```

**VENOM monitors this internally.** If bad loop detected → pause, report, ask for guidance.

---

## Integration with Nine Minds

| Mind | Role in Loop |
|------|-------------|
| **Orchestrator** | Decides when to loop, when to exit |
| **Researcher** | Observe phase — what's the state |
| **Analyzer** | Hypothesize phase — what's the issue |
| **Historian** | Did we try this before? |
| **Pattern** | Which approach fits this pattern? |
| **Mapper** | What depends on what? |
| **Predictor** | If we do X, what breaks? |
| **Communicator** | Report progress at checkpoints |
| **Learner** | Extract instinct at loop end |

**The loop is the substrate. The minds are the intelligence applied at each step.**

---

*Part of VENOM Intelligence Stack*
