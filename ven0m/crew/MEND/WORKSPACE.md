# MEND — Workspace

> Bug traces, healing patterns, and prevention notes.

---

## Recent Healings

*Bugs fixed and their root causes.*

---

## Bug Patterns

*Recurring bug classes MEND has traced.*

### Pattern: Auth Token Edge Cases
- Symptom: 401 on valid session
- Root cause: Token not invalidated on password change
- Treatment: Token generation timestamp + validation
- Occurrences: 2 projects
- Prevention: Added to EDGE checklist

### Pattern: N+1 Queries
- Symptom: Slow list rendering
- Root cause: Separate query per item
- Treatment: Eager loading or DataLoader
- Occurrences: 3 projects
- Prevention: EDGE checks for this automatically

### Pattern: Unhandled Async Errors
- Symptom: Silent failures, "hanging" UI
- Root cause: Missing .catch() or try-catch
- Treatment: Wrap all async in error handlers
- Occurrences: Multiple
- Prevention: WELD includes error handling by default

---

## Diagnosis Templates

*MEND's diagnostic patterns for common issues.*

### API Failures
1. Check network (can you reach the endpoint?)
2. Check auth (is the token valid?)
3. Check input (does the payload match the schema?)
4. Check server (are there server-side errors?)

### UI Not Updating
1. Check state mutation (are you mutating instead of replacing?)
2. Check dependencies (is the effect watching the right values?)
3. Check memoization (is the component over-memoized?)

---

## Prevention Log

*Changes made to prevent bug classes.*

---

*MEND's workspace. Every bug a lesson.*
