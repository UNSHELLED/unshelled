# Active Task State

> VENOM writes to this file to track cross-session task state.  
> Read at session start to resume. Written before compaction and session end.

---

## Current Task

**Feature/Goal:** (none — fresh install)  
**Status:** idle  
**Resume From:** n/a

---

## Last Session Summary

*(empty — no sessions recorded yet)*

---

## Escalation Needed

*(empty — no pending escalations)*

---

*Format when active:*
```
## Current Task
**Feature/Goal:** [what we're building]
**Status:** in-progress | blocked | review-needed
**Resume From:** [exact step or file — specific enough to continue without re-reading conversation]
**Wave:** [if using venom-build — current wave number]
**Completed Steps:** [list]
**Next Step:** [one specific action]
**Blocked By:** [if blocked — what and why]
```
