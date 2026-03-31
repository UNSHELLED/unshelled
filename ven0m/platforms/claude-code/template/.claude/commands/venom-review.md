---
description: "8-perspective code review: security, correctness, performance, breaking changes, maintainability, deps, tests, docs. Most critical first. Fix included per issue. Returns SHIP or REWORK."
allowed-tools: Read, Glob, Grep, Bash(git diff *), Bash(git log *), Task
---

# /venom-review $ARGUMENTS

Deep code review from 8 perspectives. Delegates to `venom-reviewer`.

## Step 1 — Determine Scope

If `$ARGUMENTS` provided:
- File path → review that file
- Feature slug → review all files touched by that feature (from tasks.md)
- "recent" or no argument → `git diff HEAD~1` or most recent commit

## Step 2 — Gather Context

```bash
git diff HEAD~1 --stat
git log --oneline -5
```

Read any relevant spec.md / plan.md for the feature being reviewed (tells the reviewer what was intended).

## Step 3 — Delegate to venom-reviewer

Pass to `venom-reviewer` via Task tool:
- The diff or file(s) to review
- The spec/plan context if available
- The 8 perspectives in order (security first, docs last)

## Step 4 — Return Findings

Output exactly what `venom-reviewer` returns:
- Issues sorted by severity (CRITICAL → HIGH → MEDIUM → LOW → INFO)
- Every issue has an exact fix
- Verdict: `SHIP` or `REWORK [conditions]`

## Headless/Agent Mode

In non-interactive mode: output the structured review. Exit non-zero if verdict is REWORK.

## Notes

- Reviewer never modifies code — findings only
- If REWORK: the exact conditions must be met before this command returns SHIP
- For PR workflow: pass the PR diff as `$ARGUMENTS`
