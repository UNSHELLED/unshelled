# EAT-PLAN: fabric (danielmiessler/fabric, 40k★)

**Local clone:** `draft/research-sdd-vendors/fabric/`  
**Time to eat:** ~1 hour  
**Priority:** P6 — pattern library focus

---

## What Fabric Is

Crowdsourced AI prompts organized as modular patterns.  
CLI + multiple backends.  
Each "pattern" = a markdown file with a system prompt.  
Community-contributed, battle-tested.

---

## What To Read

```
1. README.md — philosophy, how patterns work
2. patterns/ directory — browse all patterns (there are hundreds)
3. Any patterns directly relevant to: code review, debugging, architecture, writing
4. How patterns are structured (format, frontmatter if any)
5. How patterns are invoked
```

---

## Questions To Answer

**Pattern format:**
- What's the exact format of a fabric pattern?
- Is there frontmatter? Fields?
- Length constraints? Style constraints?

**Pattern library:**
- Which patterns are directly relevant to VENOM?
  - Code review patterns
  - Debugging patterns
  - Architecture analysis patterns
  - Writing/communication patterns
- What makes a pattern reusable? What makes it brittle?

**Pattern library as file structure:**
- This is what VENOM already does with skills/
- What does fabric do better?
- What can we steal for our skill structure?

---

## What To Extract

1. Pattern format (exact format to compare with SKILL.md)
2. Top 10 patterns relevant to VENOM use cases
3. What makes a pattern reusable (principles)
4. Any patterns we should add as VENOM skills

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

**Is SKILL.md format better or worse than fabric's pattern format?**  
Is there anything fabric patterns do that makes them more useful/reusable?
