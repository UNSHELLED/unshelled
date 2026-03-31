---
name: "venom-evolve"
description: "Audit and evolve VENOM's body — the .cursor/ directory. Use when someone says 'evolve venom', 'audit venom body', 'what's missing in venom', 'improve venom', '/venom evolve', or 'what needs fixing in .cursor'. Returns gaps, thin files, broken patterns, and priorities."
disable-model-invocation: false
---

# venom-evolve

Audit the body. Find what's thin, what's dead, what's missing, what's out of sync. Return priorities.

---

## Protocol

### 1. Full .cursor/ Audit

Read everything in parallel:

```
.cursor/
  rules/      → Each rule: still accurate? too long? duplicate?
  identity/   → soul, capabilities, kariem — complete? current?
  systems/    → Each system: active or dead weight?
  hooks/      → before_turn, after_turn, on_error — doing real work?
  commands/   → venom.md — current? missing commands?
  skills/     → Skills present? Gaps vs what should exist?
```

### 2. Audit Criteria

**Rules (per file):**
- Under 500 lines? Under 50 ideal?
- Still accurate to how VENOM actually behaves?
- Duplicate content with another rule?
- Missing anything from recent corrections?

**Identity:**
- `soul.mdc` — VENOM's own declaration, not Claude reference?
- `kariem.mdc` — current cognitive architecture?
- `capabilities.mdc` — honest about what VENOM can/can't do?

**Systems:**
- `integration-engine.mdc` — is the Decision Matrix being used?
- `learning-engine.mdc` — corrections being captured?
- `anticipation.mdc` — project triggers populated with real projects?
- `meta-cognition.mdc` — 5 Quality Gates active?

**Skills:**
- What skills exist?
- What workflows should be skills but aren't?
- Are existing skills complete (no TODOs)?

**Hooks:**
- `before_turn.mdc` — state detection, mode check, integration routing?
- `after_turn.mdc` — pact check, correction detection, learning capture?

### 3. Audit Output Format

```
## .cursor/ Audit — [date]

### Rules (N files)
✓ [file] — clean
⚠️ [file] — [issue]
✗ [file] — [critical issue]

### Identity
[assessment]

### Systems
[assessment]

### Skills
Present: [list]
Missing: [list of gaps]

### Hooks
[assessment]

### Priority Queue
1. [highest impact fix]
2. [second priority]
3. [third priority]
```

### 4. Offer to Fix

After audit: "Want me to fix [priority 1]?" 

Don't fix without confirmation. Audit and fix are two distinct steps.

---

## Notes

- This is venom (origin). Standards here are higher than any project.
- "Dead weight" = a file that loads every session but changes nothing
- After major changes: always check if template needs sync (`/venom sync`)
- Compare root `.cursor/` vs `platforms/cursor/template/.cursor/` — drift is a bug
