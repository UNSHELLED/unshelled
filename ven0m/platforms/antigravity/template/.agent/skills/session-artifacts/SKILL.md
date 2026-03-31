---
name: "session-artifacts"
description: "Enrich brain/{uuid}/ beyond platform defaults. Add decisions.md, risks.md, richer walkthrough. Screenshot references."
trigger: "Auto after sessions with >50 lines of code, significant decisions, or non-trivial work."
---

# VENOM: Session Artifacts Skill

> *Platform generates task.md, implementation_plan.md, walkthrough.md. VENOM adds what wasn't captured.*

---

## Purpose

Augment `brain/{session-uuid}/` with artifacts that make future sessions start from a richer foundation. Platform creates baseline files — this skill adds decisions, risks, and enhanced walkthrough so the next session (or next person) doesn't start from zero.

---

## What Platform Already Generates

- `task.md` — Task description
- `implementation_plan.md` — Plan outline
- `walkthrough.md` — Session summary
- `{context-specific}.md` — Context files
- `.tempmediaStorage/dom_{timestamp}.txt` — DOM snapshots, screenshots

---

## What This Skill ADDS

### decisions.md (NEW)

**Purpose:** Key choices made + reasoning. Not a checklist — the WHY.

**Format:**
```markdown
# Session Decisions

## [Decision 1]
**What:** [One line]
**Why:** [Reasoning. Trade-off considered.]
**Alternative rejected:** [What we didn't do and why]

## [Decision 2]
...
```

**When:** After any non-trivial session with architectural or implementation choices.

---

### risks.md (NEW)

**Purpose:** What could break. Edge cases. Technical debt accepted.

**Format:**
```markdown
# Session Risks

## [Risk 1]
**What:** [Description]
**Mitigation:** [What we did or should do]
**Severity:** low | medium | high

## [Risk 2]
...
```

**When:** After sessions that introduced complexity, skipped tests, or accepted trade-offs.

---

### Enhanced walkthrough.md

**Purpose:** Richer than platform default. Screenshots embedded or referenced. Code diffs noted.

**Add:**
- References to `.tempmediaStorage/dom_{timestamp}.txt` when visual changes were made
- Key file paths changed
- "To verify: run X, check Y"
- Links to decisions.md and risks.md for context

---

### Richer task.md (when platform output is thin)

**Purpose:** Context + decisions, not just task description.

**Add:**
- What was the actual goal (vs stated)
- Constraints discovered mid-session
- Dependencies on other work

---

## When to Trigger

- **>50 lines of code** changed or added
- **Significant decisions** (architecture, approach, trade-offs)
- **Visual changes** (reference Jetski screenshots)
- **Non-trivial session** (multi-file, refactor, new feature)

**Don't trigger:** Quick fix, single-line change, chat-only, no decisions.

---

## Protocol

1. **Assess** — Did this session meet trigger criteria?
2. **Extract** — What decisions were made? What risks were introduced?
3. **Write decisions.md** — Key choices + reasoning. One section per decision.
4. **Write risks.md** — What could break. Severity. Mitigation.
5. **Enhance walkthrough.md** — Add screenshot refs, verification steps, links to decisions/risks
6. **Optional: context-specific .md** — If session had a distinct theme (e.g. `auth_flow_analysis.md`), create it

---

## Integration with Platform Artifacts

**Augment, don't replace.** Platform generates first. This skill adds. If platform's walkthrough.md exists, append or enhance. Don't overwrite platform content — extend it.

**Screenshot references:** When Jetski verified visual changes, reference the proof:
```markdown
Visual verification: .tempmediaStorage/dom_20260309_140000.txt
```

---

## Integration Points

- **venom.md workflow** — "Session Artifact Enrichment" step after non-trivial sessions
- **jetski-visual-audit** — Screenshot proof goes to .tempmediaStorage; reference in walkthrough
- **brain/{uuid}/** — Confirm path exists. Platform creates it. We enrich.

---

## File Locations

```
brain/{session-uuid}/
├── task.md                    # Platform + optional enhancement
├── implementation_plan.md     # Platform
├── walkthrough.md             # Platform + enhanced
├── decisions.md               # NEW — this skill
├── risks.md                   # NEW — this skill
├── {context-specific}.md       # Optional — this skill
└── .tempmediaStorage/
    └── dom_{timestamp}.txt    # Platform — we reference
```

---

## Example: decisions.md

```markdown
# Session Decisions — 2026-03-09

## Auth: JWT vs Session
**What:** Chose JWT with refresh tokens.
**Why:** Stateless API. Mobile + web. No server-side session store.
**Alternative rejected:** Session cookies — would require Redis for scale. Not needed yet.

## State: Zustand vs Context
**What:** Zustand for global state.
**Why:** DevTools, persistence, no provider hell. Performance.
**Alternative rejected:** Context — re-renders too broad for our tree.
```

---

## Example: risks.md

```markdown
# Session Risks — 2026-03-09

## Auth: JWT in localStorage
**What:** XSS could steal token.
**Mitigation:** HttpOnly cookie for refresh. Short-lived access token. CSP headers.
**Severity:** medium

## No tests for new hook
**What:** useAuth hook untested.
**Mitigation:** Add unit tests before merge. Flag in PR.
**Severity:** low
```

---

## Quality Gate

Before writing: Did this session have decisions worth capturing? Risks worth flagging? If no — skip. Don't create empty files for the sake of it.

---

*Source: COMPLETE-CASE.md §1 brain layout. CHECKLIST Phase 3.1. Name locked: session-artifacts (NOT session-capture).*
