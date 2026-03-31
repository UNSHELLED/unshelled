# EAT-PLAN: get-shit-done (gsd-build/get-shit-done, 32k★)

**Already cloned at:** `draft/research-sdd-vendors/get-shit-done/`  
**Time to eat:** ~2 hours  
**Priority:** P2 — eat after spec-kit

---

## What GSD Is

Meta-prompting + context engineering framework.  
Solves context rot: fresh subagent context per task.  
Atomic task execution with verification.  
Wave/parallel execution with dependency awareness.

---

## What To Read (in order)

```
1. README.md — the pitch, the problem, the solution
2. Any .md files in root — philosophy docs
3. The actual prompt templates — how they structure prompts
4. Any workflow definitions — how tasks are sequenced
5. Any XML schemas — their structured prompting format
6. Any state management — how they track progress
7. Any verification patterns — how they check work
```

---

## Questions To Answer

**Context engineering:**
- Exactly how do they prevent context rot?
- What's the max size per file type in their system?
- How do they decide what to load vs leave out?

**Wave execution:**
- How is dependency ordering expressed? (explicit deps, topological sort, or convention?)
- How are independent tasks identified?
- How do subagents communicate results back?
- What's the exact format for spawning a wave?

**Verification gates:**
- How many gates? When do they fire?
- What exactly does each gate check?
- What's the failure behavior? (stop, retry, escalate?)

**Fresh context per task:**
- How do they ensure each subagent starts clean?
- What do they pass to the subagent? (full context or just task?)
- How does the orchestrator stay lean?

**XML prompting:**
- What's the XML schema they use?
- Is it shown to the user or internal?
- How complex? Example?

**State files:**
- What state files do they maintain? (PROJECT, ROADMAP, STATE equivalents)
- What format? What size limits?
- How are they loaded?

---

## What To Extract

Fill `EXTRACTED.md` with:
1. Wave execution format (exact syntax for expressing task deps)
2. Verification gate checklist (exact structure)
3. Fresh-context-per-task pattern (how orchestrator → subagent handoff works)
4. XML prompting schema (if any)
5. State file format and loading strategy
6. Context size limits (what they found works)

---

## What To Ignore

- JavaScript tooling/CLI (we don't need it)
- Any non-Claude-Code specific integrations
- Installation/CI patterns
- Star-chasing features (focus on methodology)

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

We already adopted GSD patterns in the OpenCode template (wave execution, verification gates).  
**The question is: what did we adopt incorrectly or incompletely?**  
Specifically: is our wave execution format as clean as GSD's? Are our verification gates as complete?
