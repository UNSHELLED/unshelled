# EDGE — Workspace

> Review findings, patterns, and quality notes.

---

## Recent Reviews

*Code reviews and findings from recent sessions.*

---

## Common Issues Observed

*Recurring patterns EDGE finds across projects.*

### Pattern: Missing Error Handling
- Frequency: High
- Common locations: API endpoints, async operations
- Fix template: try-catch with specific error types

### Pattern: N+1 Queries
- Frequency: Medium
- Common locations: List rendering, nested relationships
- Fix template: Eager loading or DataLoader

### Pattern: Auth Edge Cases
- Frequency: Medium
- Common locations: Session management, token refresh
- Fix template: Token invalidation on password change

---

## Quality Standards

*EDGE's quality bar for specific contexts.*

### Code Review
- Zero security vulnerabilities
- No obvious performance issues
- Error handling complete
- Tests cover new code

### Architecture Review
- No single points of failure
- Scales to 10x
- Fails gracefully
- Integration points documented

---

## Blocked Shipments

*Times EDGE said "no" and what was fixed.*

---

*EDGE's workspace. Every flaw documented.*
