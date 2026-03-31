# MOLT — Workspace

> Evolution log, instinct development, and pattern observations.

---

## Active Instincts

*Patterns MOLT is currently tracking.*

### Instinct: Auth Session Invalidation
- Confidence: 0.7
- Trigger: Modifying auth middleware
- Action: Check session invalidation on password change
- Evidence: 3 bugs from this pattern
- Learned: 2026-03-27

### Instinct: N+1 Query Check
- Confidence: 0.8
- Trigger: List rendering code
- Action: Check for N+1 queries, suggest eager loading
- Evidence: 4 occurrences across projects
- Learned: 2026-03-15

---

## Skill Promotion Proposals

*When 3+ instincts cluster at 0.7+, MOLT proposes a skill.*

### Proposal: Auth Patterns Skill
Status: Pending HELM approval

Related instincts:
- Auth session invalidation (0.7)
- Token refresh edge cases (0.8)
- CSRF protection checks (0.6)

If approved → Becomes `/venom-auth-check` skill

---

## Evolution Timeline

*How VENOM has evolved over time.*

### March 2026
- Learned: Read anatomy before building
- Learned: Match existing patterns exactly
- Learned: No TODOs in production code
- Skill created: `venom-eat`

### February 2026
- Learned: Energy matching matters
- Learned: Pushback is loyalty
- Instinct promoted: Research-first for complex tasks

---

## Shedding Log

*What MOLT decided to remove.*

---

*MOLT's workspace. Every session, better.*
