# EAT-PLAN: OpenSpec (Fission-AI/OpenSpec, 35k★)

**Local clone:** `draft/research-sdd-vendors/openspec/` (refresh: `git pull` inside folder)  
**Time to eat:** ~1.5 hours  
**Priority:** P3

---

## What OpenSpec Is

Artifact-guided workflow for AI coding.  
Commands: `/opsx:propose`, `/opsx:apply`, `/opsx:archive`  
Spec deltas: changes tracked as deltas, not full rewrites.  
20+ tool support — lightweight, no API key required.

---

## What To Read

```
1. README.md — philosophy, how it works
2. Any command definitions — /opsx:* commands
3. Any spec artifact format — what a spec looks like
4. Any delta format — how changes are tracked
5. Any design decision docs
```

---

## Questions To Answer

**Spec deltas:**
- How exactly are spec changes tracked as deltas?
- What's the delta format? (JSON? Markdown diff? Custom?)
- How are deltas applied? How are conflicts resolved?
- Why deltas instead of full rewrites? (the "why" is the pattern)

**Artifact-guided workflow:**
- What artifacts are produced at each phase?
- How does each artifact feed into the next?
- What makes an artifact "done"?

**Propose → Apply flow:**
- What does `/opsx:propose` produce?
- What does `/opsx:apply` do with it?
- What does `/opsx:archive` do?

**Claude Code integration:**
- How is this wired into Claude Code?
- What's the hook/command structure?

---

## What To Extract

1. Spec delta format (exact format)
2. Artifact-guided lifecycle (what produces what)
3. Propose → apply → archive pattern
4. Any patterns not seen in spec-kit or GSD

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

**How does delta tracking change the way specs evolve?**  
Can we adopt delta tracking in `.venom/work/features/` without adding complexity?
