# EAT-PLAN: vibe-framework (nbabderrahmane/vibe-framework)

**Local clone:** `draft/research-sdd-vendors/vibe-framework/`  
**Time to eat:** ~1.5 hours  
**Priority:** P5 — conceptually closest to VENOM nine minds

---

## What Vibe Framework Is

"Industrialized vibe coding"  
Orchestrator agent + 15 specialist agents.  
Quality gates enforced.  
Closest architecture to VENOM's nine minds + orchestration.

---

## What To Read

```
1. README.md — philosophy, why it exists
2. Any orchestrator definition — how it coordinates
3. All specialist agent definitions — what each does, how scoped
4. Any quality gate definitions — when they fire, what they check
5. Any command structure
6. Any memory/state management
```

---

## Questions To Answer

**Orchestrator design:**
- How does the orchestrator stay lean while coordinating?
- How does it decide which specialist to invoke?
- How does it integrate results from specialists?

**Specialist agents:**
- What are all 15 specialists? (names, purposes)
- How scoped are they? (narrow = good, broad = bad)
- How do their permissions differ?
- Are there any specialists VENOM should have but doesn't?

**Quality gates:**
- When do gates fire in their system?
- What exactly do they check?
- How does this compare to GSD's gate structure?

**Comparison to VENOM:**
- Where does vibe-framework do things better than VENOM?
- Where does VENOM do things better?
- What specialist functions do we lack?

---

## What To Extract

1. Full specialist agent list with purposes
2. Orchestration coordination pattern
3. Quality gate structure
4. Any specialists we should add to VENOM
5. Any routing logic we should adopt

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

**What do 15 specialists give you that 9 don't?**  
Are the extra 6 genuinely needed? Or is VENOM's 9 already the right number with the right scope?
