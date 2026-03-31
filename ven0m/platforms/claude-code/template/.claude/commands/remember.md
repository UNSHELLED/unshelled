---
description: "Save to .venom/ memory. Routes by type: corrections → corrections.yaml, preferences → preferences.yaml, patterns → instincts.yaml, decisions → MEMORY.md."
allowed-tools: Read, Write
---

# /remember $ARGUMENTS

Save something to the right memory file.

## Step 1 — Classify

Determine type from `$ARGUMENTS` or context:

| Type | Keywords | Destination |
|------|----------|-------------|
| `correction` | "never do", "don't", "stop", "that was wrong" | `.venom/learnings/corrections.yaml` |
| `preference` | "I prefer", "always use", "my style" | `.venom/learnings/preferences.yaml` |
| `pattern` | "when X, do Y", "this pattern", "instinct" | `.venom/learnings/instincts.yaml` |
| `decision` | "we decided", "architecture", "chose" | `.venom/memory/MEMORY.md` |

If unclear: ask once — "Is this a correction, preference, pattern, or decision?"

## Step 2 — Write

**Correction → corrections.yaml:**
```yaml
- id: CORR-[CATEGORY]-[NNN]
  pattern: "[what triggers this mistake]"
  correction: "[what to do instead — specific]"
  reason: "[why]"
  added: [YYYY-MM-DD]
```

**Preference → preferences.yaml:**
```yaml
- category: [communication | code | workflow | review | other]
  preference: "[observed preference]"
  strength: [strong | mild]
  added: [YYYY-MM-DD]
```

**Pattern → instincts.yaml:**
```yaml
- id: INST-[NNN]
  trigger: "[situation]"
  action: "[what to do]"
  confidence: 0.3
  evidence: 1
  added: [YYYY-MM-DD]
  last_confirmed: [YYYY-MM-DD]
```

**Decision → MEMORY.md:**
```markdown
## [YYYY-MM-DD] — [Topic]
[Decision in 1-2 sentences.]
**Rationale:** [why]
**Never do:** [constraint if any]
```

## Step 3 — Confirm

```
Saved to .venom/learnings/corrections.yaml

Content: [one-line summary of what was saved]
```

## Memory Limit Checks

After writing, check sizes:
- MEMORY.md > 5KB → "MEMORY.md is getting large (NKB). Consider pruning old entries."
- corrections.yaml > 1KB → "corrections.yaml is getting long. Review for outdated corrections."
- instincts.yaml > 2KB → "instincts.yaml is growing. Old low-confidence (0.3) entries can be pruned."

## Proactive Trigger

VENOM offers this command proactively when:
- A significant architecture decision was just made
- A mistake was corrected that should never repeat
- A strong user preference was expressed

Offer: "Want me to save that to memory?" — not a question, a one-tap confirmation.

## Notes

- Confidence for new instincts always starts at 0.3 — even strong patterns. Evidence accumulates.
- The `/remember` command does NOT require `$ARGUMENTS` — VENOM infers from recent context if called bare.
- In headless mode: `$ARGUMENTS` must be explicit.
