# VENOM × OpenCode — Developer Simulations

> *Eight developers. Eight workflows. Intelligence patterns firing live.*

---

## 1. Solo Indie Hacker — Senna Archetype (Energy Matching)

**Developer:** Mira, 28. React/TypeScript SaaS. 1:47 AM. Third espresso. Shipping a pricing page before morning.

**Surface:** TUI (`opencode`)

**What she types:**
```
build the pricing toggle component, monthly/annual switch with 20% annual discount, use the existing Card component from src/components/ui
```

**Pattern activation:** Energy matching detects: precise request + late hour + no hesitation = **Senna (flow state)**. Response matches pace — code only, no preamble.

**What VENOM responds:**
```tsx
// src/components/pricing/PricingToggle.tsx
import { useState } from 'react'
import { Card } from '@/components/ui/Card'

type Interval = 'monthly' | 'annual'

const PLANS = [
  { name: 'Starter', monthly: 19 },
  { name: 'Pro', monthly: 49 },
  { name: 'Team', monthly: 99 },
] as const

export function PricingToggle() {
  const [interval, setInterval] = useState<Interval>('monthly')
  const discount = 0.8 // 20% off annual

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center gap-3">
        <span className={interval === 'monthly' ? 'font-semibold' : 'text-muted'}>Monthly</span>
        <button
          onClick={() => setInterval(i => i === 'monthly' ? 'annual' : 'monthly')}
          className="relative h-6 w-11 rounded-full bg-primary transition-colors"
          aria-label="Toggle billing interval"
        >
          <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${interval === 'annual' ? 'translate-x-5' : ''}`} />
        </button>
        <span className={interval === 'annual' ? 'font-semibold' : 'text-muted'}>
          Annual <span className="text-sm text-green-600">Save 20%</span>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {PLANS.map(plan => {
          const price = interval === 'annual'
            ? Math.round(plan.monthly * discount * 12)
            : plan.monthly
          return (
            <Card key={plan.name} className="p-6 text-center">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold">
                ${price}<span className="text-sm font-normal text-muted">/{interval === 'annual' ? 'yr' : 'mo'}</span>
              </p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
```

No explanation. No "here's what I did." Flow state preserved.

**What fires in `.opencode/`:** Nothing written. Short task, no learning needed. Plugin tracks: 1 write, 0 bash, $0.02 cost. Instinct check: clean.

---

## 2. Senior Backend Engineer — Wave Execution (Pattern #5)

**Developer:** Takeshi, 35. Go microservices. Refactoring auth across 4 services simultaneously. Uses CI pipeline.

**Surface:** `opencode run` (headless, `--format json`)

**What he types:**
```bash
opencode run "Refactor auth middleware: extract token validation into shared pkg/auth. Update user-service, order-service, payment-service, gateway-service. Keep backward compat." --agent build --format json
```

**Pattern activation:** Multi-service refactor → **Wave execution fires**. VENOM's `build` agent analyzes imports, maps dependencies:

```
Wave analysis:
  pkg/auth (no deps)           → Wave 1
  user-service (depends auth)  → Wave 2
  order-service (depends auth) → Wave 2
  payment-service (depends auth) → Wave 2
  gateway-service (depends all) → Wave 3
```

**What VENOM does:**
1. Wave 1: Writes `pkg/auth/validator.go` with extracted logic. Runs `go vet`. Commits.
2. Wave 2: Spawns 3 `@general` subagents in parallel — each updates one service's import + removes duplicated validation. Each runs service tests independently.
3. Wave 3: Updates gateway integration tests. Full `go test ./...` across monorepo.
4. Gate 4 fires: all tests green, no regressions, 3 atomic commits.

**JSON event stream includes:**
```json
{"type":"wave","number":1,"tasks":1,"status":"complete"}
{"type":"wave","number":2,"tasks":3,"parallel":true,"status":"complete"}
{"type":"wave","number":3,"tasks":1,"status":"complete"}
{"type":"gate","number":4,"passed":true,"tests":"47/47","regressions":0}
```

**Learning captured:** Instinct appended: `"Go monorepo refactor: always extract shared pkg first, then fan out. Wave execution confirmed faster than sequential."` Confidence: 0.4 (first observation).

---

## 3. Junior Developer — Feynman Archetype (Energy Matching)

**Developer:** Aisha, 22. First week using AI coding tools. Confused by OpenCode's agent model.

**Surface:** TUI (`opencode`)

**What she types:**
```
i dont understand what @explore does vs just asking the build agent to look at my code?? when would i use which
```

**Pattern activation:** Energy matching: question marks, confusion signal, no code context = **Feynman archetype** (learning mode). Analogy before abstraction.

**What VENOM responds:**

Think of it like asking for directions:

**`build` agent** = you ask someone who has a pen and a map. They can look at the map, draw a new route, cross things out, write notes. They can *change* things.

**`@explore`** = you ask someone who can only *look* at the map. Fast. Cheap. They'll scan the whole thing in seconds and tell you what they see. But they can't draw on it.

Use `@explore` when you want to understand code without risking any changes — "show me all the places we handle errors" or "find where the database connection is configured." It's read-only, so nothing can break.

Use `build` when you actually want to modify files.

Quick rule: **look first, touch second.** Start with `@explore` to understand, switch to `build` to implement.

Try it: type `@explore where does this project handle authentication?` and see what comes back.

**What fires:** Energy matching set Feynman mode. No instinct, no gate, no loop — teaching is a single exchange. Plugin logged: surface=TUI, archetype=feynman, tool_calls=0.

---

## 4. DevOps Engineer — Danger Zone Screening (Pattern #8)

**Developer:** Rashid, 31. Terraform + Ansible. Writing a deployment script. Permission anxiety is real.

**Surface:** TUI (`opencode`), `build` agent

**What he types:**
```
write a cleanup script that removes old deployment artifacts from /opt/deploy/releases/ keeping only the last 5
```

**Pattern activation:** Bash command involving `rm` on a system path → **Danger zone screening fires** in `tool.execute.before` hook.

**What happens internally:**
```
venom-core.ts → tool.execute.before:
  tool: "bash"
  command: "rm -rf /opt/deploy/releases/old-*"
  → DANGER_PATTERNS match: rm -rf on non-tmp system path
  → Action: 'ask' (not deny — path is scoped, not root)
```

**What VENOM responds:**

```bash
#!/bin/bash
# cleanup-releases.sh — keep last N releases
set -euo pipefail

DEPLOY_DIR="/opt/deploy/releases"
KEEP=5

if [ ! -d "$DEPLOY_DIR" ]; then
  echo "Error: $DEPLOY_DIR does not exist" >&2
  exit 1
fi

# List by modification time, oldest first
releases=$(ls -1dt "$DEPLOY_DIR"/*/ 2>/dev/null)
count=$(echo "$releases" | wc -l)

if [ "$count" -le "$KEEP" ]; then
  echo "Only $count releases found, keeping all."
  exit 0
fi

echo "$releases" | tail -n +$((KEEP + 1)) | while read -r dir; do
  echo "Removing: $dir"
  rm -rf "$dir"
done

echo "Cleanup complete. Kept $KEEP most recent releases."
```

⚠️ **Danger zone note:** This script uses `rm -rf` on directories under `/opt/deploy/releases/`. I've added `set -euo pipefail`, existence check, and explicit count guard. Run with `--dry-run` first (replace `rm -rf` with `echo` on line 18) to verify it targets the right directories.

**Instinct logged:** `"Deployment cleanup scripts: always add dry-run option and existence checks before rm operations."` Confidence: 0.3.

---

## 5. OSS Maintainer — Verification Gates (Pattern #6)

**Developer:** Clara, 29. Maintains a popular state management library. Reviewing PR #347.

**Surface:** `opencode pr 347` → TUI with PR branch checked out

**What she types:**
```
full review of this PR — security, performance, breaking changes, test coverage. be thorough.
```

**Pattern activation:** PR review request → VENOM routes to `plan` agent (read-only). **Verification gates fire** — specifically the 8-perspective review from `venom-reviewer`.

**What VENOM responds:**

**PR #347: Add middleware pipeline support**

**Security** — 2 issues:
1. Middleware receives raw store reference. Any middleware can call `store.__internal_reset()`. Wrap in proxy or expose read-only view. **Critical.**
2. No timeout on async middleware. Hung middleware blocks entire pipeline. Add 5s default timeout.

**Performance** — 1 concern:
Middleware array is spread-copied on every dispatch (`[...middlewares]`). For hot paths (100+ dispatches/sec), pre-freeze the array once on `applyMiddleware()`. Micro-optimization but this is a library — downstream apps multiply it.

**Breaking changes** — 1 confirmed:
`dispatch()` return type changed from `Action` to `Promise<Action>`. Every consumer using `const result = store.dispatch(action)` synchronously will break. This needs a major version bump or a migration path (`dispatchSync` preserved).

**Tests** — insufficient:
- Happy path covered ✅
- Error in middleware: not tested ❌
- Middleware ordering guarantee: not tested ❌
- Async timeout: not tested (because timeout doesn't exist yet) ❌

**Verdict:** Not ready to merge. Fix security #1 (critical), add timeout, bump major version or provide migration, add 3 missing test cases. Good architectural direction — middleware pipeline is the right pattern.

**Gate 4 check passed:** Review complete, all 8 perspectives evaluated, most critical first, fix included.

---

## 6. Data Scientist — Instinct Learning (Pattern #3)

**Developer:** Priya, 27. Jupyter notebooks → Python scripts migration. Messy project structure.

**Surface:** TUI, `build` agent

**She's been working for 40 minutes. Third time VENOM has seen her restart because of stale kernel state.**

**What she types:**
```
ugh it's doing it again, the dataframe has old columns from like 3 cells ago
```

**Pattern activation:** Third occurrence of same issue → **Instinct learning fires.** Pattern observed 3x → confidence jumps to 0.6.

**What VENOM responds:**

This is stale kernel state — cells ran out of order again. Restart and run all:

```bash
jupyter nbconvert --execute --to notebook --inplace notebooks/analysis.ipynb
```

This is the third time. I'm capturing this as a pattern: **before any notebook modification, restart kernel and run all cells to ensure clean state.** I'll remind you next time you touch a notebook.

**What fires in `.venom/learnings/instincts.yaml`:**
```yaml
- id: notebook-kernel-restart
  confidence: 0.6
  trigger: "About to modify Jupyter notebook"
  action: "Restart kernel and run all cells first to ensure clean state"
  evidence:
    - context: "Stale DataFrame columns from previous cell execution"
      outcome: "Confusion + wasted 10 min debugging phantom data"
    - context: "Old import still loaded after cell deletion"
      outcome: "NameError on removed variable"
    - context: "DataFrame had columns from 3 cells ago"
      outcome: "User frustrated, had to manually trace state"
  fire_count: 0
  learned: "2026-03-27"
```

**Next session:** When Priya opens a notebook, `tool.execute.before` will fire this instinct and inject: "Reminder: restart kernel and run all before modifying."

---

## 7. Security Team Lead — Resource Limits + Observability (Pattern #8)

**Developer:** Marcus, 38. Paranoid (professionally). Wants every bash command logged, every file access tracked, cost ceiling enforced.

**Surface:** TUI, custom config

**His `opencode.json` (VENOM-configured):**
```json
{
  "permission": {
    "bash": "ask",
    "edit": "ask"
  }
}
```

**What he types:**
```
audit this project for hardcoded secrets, exposed API keys, and insecure file permissions. check every file.
```

**Pattern activation:** Security audit → `plan` agent (read-only). **Resource limits active** — capped at 200 tool calls, $5 budget. **Full observability.**

**What VENOM does:**

Uses `@explore` for parallel file scanning. Tracks every tool call:

```
Tools used: read (47), grep (23), glob (8), bash (3 — all `git log --diff-filter`)
Files scanned: 312
Time: 8m 42s
Cost: $0.84
```

**Findings reported with full audit trail:**

Found 4 issues across 312 files:

| Severity | File | Issue |
|----------|------|-------|
| 🔴 Critical | `config/prod.env.example` | Contains actual AWS key (`AKIA...`) — should be placeholder |
| 🔴 Critical | `.github/workflows/deploy.yml` | `secrets.DB_PASSWORD` echoed to stdout on line 47 |
| 🟡 Medium | `src/utils/crypto.ts` | Hardcoded IV for AES encryption (line 12) — use `crypto.randomBytes(16)` |
| 🟢 Low | `docker-compose.yml` | Default PostgreSQL password `postgres` — fine for dev, flag for prod |

Session metrics available via `opencode stats`. Full tool call log in session history.

**Plugin tracked:** 81 total tool calls (41% of budget), $0.84 (17% of $5 ceiling). No danger zone triggers — all read operations.

---

## 8. Power User — Loop Pattern for Autonomous Test-Fix (Pattern #2)

**Developer:** Kai, 33. SDK author. CI is red. 14 failing tests after a dependency upgrade. Wants autonomous fix.

**Surface:** `opencode run` (headless), SDK integration

**What he types:**
```bash
opencode run "Fix all 14 failing tests after the lodash 5.x upgrade. Autonomous mode — loop until all green or you're stuck." --agent build
```

**Pattern activation:** "Loop until done or stuck" → **Debug loop pattern fires.** Stall detection active.

**Loop execution (tracked in state):**

```
Iteration 1: Observe — run tests, capture 14 failures
  Hypothesis: lodash 5.x removed _.pluck (renamed to _.map)
  Test: grep for _.pluck → found in 6 files
  Result: Replace _.pluck → _.map with path. 6 tests fixed. 8 remain.
  New info: Remaining failures are type errors, not API changes.

Iteration 2: Observe — 8 failures, all TypeErrors
  Hypothesis: lodash 5.x types changed — _.groupBy returns Map not Record
  Test: Check lodash 5.x changelog → confirmed Record → Map change
  Result: Update 4 files to use Map API. 4 tests fixed. 4 remain.

Iteration 3: Observe — 4 failures in deep-merge tests
  Hypothesis: _.merge behavior changed for arrays (concat vs replace)
  Test: Read lodash 5.x migration guide → arrays now concat by default
  Result: Add { arrays: 'replace' } option to 3 merge calls. 3 tests fixed. 1 remains.

Iteration 4: Observe — 1 failure in serializer test
  Hypothesis: _.cloneDeep strips Symbol properties in 5.x
  Test: Write minimal repro → confirmed
  Result: Replace _.cloneDeep with structuredClone for Symbol-bearing objects. Last test fixed.

Verification: Full test suite — 247/247 passing ✅
```

**Total:** 4 iterations, 12 tool calls, $0.41, 6 minutes. No stalls detected (each iteration produced new information and reduced failure count).

**Learning captured:** `"lodash major version upgrades: check renamed functions → type changes → behavior changes → edge cases. This order covers failures from most to fewest."` Confidence: 0.5 (first full loop).

---

*Each simulation demonstrates real intelligence — not VENOM talking about itself, but VENOM operating.*
