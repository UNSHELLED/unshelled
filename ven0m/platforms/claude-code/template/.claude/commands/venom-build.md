---
description: "Execute tasks.md wave by wave. Marks tasks [x] on completion. Runs verification after each wave. Stops on failure — never silently continues."
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Task
---

# /venom-build $ARGUMENTS

Wave-by-wave execution of tasks.md. One wave at a time. Verify before proceeding.

## Step 1 — Find Feature

If `$ARGUMENTS` provided: use as feature slug.
If not: check `.venom/state/workflow-state.json` for active feature.
If neither: list `.venom/work/features/` and ask which to build.

## Step 2 — Load Context

Read in order:
1. `.venom/work/features/[slug]/tasks.md` → current wave + task list
2. `.venom/work/features/[slug]/plan.md` → architecture decisions for context
3. `.venom/work/features/[slug]/spec.md` → acceptance criteria for verification
4. `.venom/CONTEXT.md` → project anatomy

## Step 3 — Report Progress

```
Feature: [slug]
Progress: [N done] / [total] tasks
Current: Wave [N] — [wave name]
Tasks this wave: [N]
```

## Step 4 — Execute Wave

For each task in the current wave:
- Pass to `venom-builder` via Task tool with exact scope:
  ```
  Task: [T0N description]
  Read: [files needed for context]
  Write/modify: [files in scope]
  Verify: [exact command or observable]
  ```
- On success: mark `[x]` in tasks.md immediately
- On failure: stop wave, report gap — do NOT proceed to next task in same wave if it depends on this one

Independent tasks within a wave: run in parallel via multiple Task calls.

## Step 5 — Wave Verification Gate

After all tasks in wave complete, run:
```bash
npm test || pytest || go test ./... || cargo test || (echo "No test runner found — verify manually")
```

Also check: types (`tsc --noEmit` or equivalent), lint if config exists.

If verification fails:
```
Wave [N] verification failed.
Error: [what failed]
Last successful state: [what completed]

Fix the failure before proceeding to Wave [N+1].
```

Do NOT proceed to the next wave with a failed gate.

## Step 6 — Wave Report

```
Wave [N] complete. ✓
Tasks: [N/N done]
Verification: [passing/warning/failing]

Next: Wave [N+1] — [wave name] — [N] tasks
Proceed? (or run /venom-check first)
```

## Step 7 — Final Report (all waves done)

```
Build complete.

[N] tasks across [N] waves — all verified.
Feature: [slug]

Next: /venom-review [slug] then /venom-check
```

## Headless/Agent Mode

In non-interactive mode: proceed through all waves automatically. Write final report to `.venom/work/ACTIVE.md`. Exit non-zero on any verification failure.

## Notes

- Never proceed past a failed wave — partial implementations are worse than none
- Parallel tasks within a wave = OK. Cross-wave dependencies = sequential
- Update `.venom/state/workflow-state.json` after each wave
