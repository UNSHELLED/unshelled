---
description: "Meta quality gate. Tests, types, lint, deps, VENOM state, active workflow, memory health. Verdict: healthy / degraded / needs attention."
allowed-tools: Read, Glob, Grep, Bash, Task
---

# /venom-check

Session-level quality audit. Run before shipping. Run after a long session.

## Checks (in order)

**1. Test health**
```bash
npm test 2>&1 | tail -5
# or: pytest --tb=no -q | tail -3
# or: go test ./... 2>&1 | tail -3
```
Result: passing / failing / no test runner found

**2. Type health**
```bash
npx tsc --noEmit 2>&1 | tail -5
# or: mypy . --ignore-missing-imports 2>&1 | tail -3
```
Result: clean / N errors / not applicable

**3. Lint health**
```bash
npx eslint . --max-warnings 0 2>&1 | tail -3
# or: ruff check . 2>&1 | tail -3
```
Result: clean / N warnings / not configured

**4. Dependency health**
```bash
npm audit --audit-level=moderate 2>&1 | tail -5
# or: pip-audit 2>&1 | tail -3
```
Result: clean / N vulnerabilities

**5. Recent commits**
```bash
git log --oneline -5
```
Check: are commits atomic? Do messages explain what + why?
Result: clean / mixed / missing context

**6. VENOM state**
Read `.venom/CONTEXT.md` → stale if `Last eaten` > 30 days  
Read `.venom/work/ACTIVE.md` → stale if session-end timestamp > 7 days with no resolution  
Check `.venom/state/workflow-state.json` → active workflow phase

**7. Archive check**
```bash
find .venom/work/features -name "tasks.md" 2>/dev/null | head -10
```
For each: are all tasks `[x]`? If yes → flag for archiving.

**8. Memory size**
```bash
wc -c .venom/memory/MEMORY.md .venom/learnings/corrections.yaml .venom/learnings/instincts.yaml 2>/dev/null
```
Warn if MEMORY.md > 5KB, corrections.yaml > 1KB, instincts.yaml > 2KB

## Output Format

```
## Quality Gate — [date]

Tests:       [passing / failing / no runner]
Types:       [clean / N errors / n/a]
Lint:        [clean / N warnings / not configured]
Deps:        [clean / N vulnerabilities]
Commits:     [atomic / mixed / unclear]
VENOM state: [current / stale (last eaten: N days ago) / missing]
Workflow:    [Phase N — feature slug / none active]
Archive:     [features ready / none]
Memory:      [OK / over limit — prune .venom/memory/MEMORY.md]

Verdict: [healthy / degraded / needs attention]
Action items:
1. [most important action if any]
2. [second action if any]
```

## Notes

- Verdict `healthy`: all checks green or informational only
- Verdict `degraded`: tests/types failing or vulnerabilities present — fix before shipping
- Verdict `needs attention`: warnings, stale state, or accumulating memory — address soon
- In CI mode: exit non-zero if verdict is `degraded`
