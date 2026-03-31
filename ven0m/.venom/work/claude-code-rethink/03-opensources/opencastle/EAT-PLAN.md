# EAT-PLAN: opencastle (multi-agent orchestration)

**Local clone:** `draft/research-sdd-vendors/opencastle/` — `https://github.com/monkilabs/opencastle`  
**Time to eat:** ~1 hour  
**Priority:** P9

---

## What OpenCastle Is

Multi-agent orchestration for Cursor, Claude, OpenCode.  
15+ specialist agents.  
Team Lead orchestrator pattern.  
Workflow templates.

---

## What To Read

```
1. README.md — how it works
2. Team Lead agent definition — the orchestrator design
3. Specialist agent definitions — what each does
4. Any workflow templates
5. How agents communicate
```

---

## Questions To Answer

**Team Lead / Orchestrator:**
- How does their orchestrator decide which specialist to invoke?
- How does it stay lean?
- How does it integrate results?

**Specialist agents:**
- What are the 15+ specialists?
- Which ones does VENOM not have?
- How are permissions scoped?

**Workflow templates:**
- What workflows are pre-built?
- What can we steal for VENOM's command set?

**Cross-platform:**
- How do they handle Cursor vs Claude Code vs OpenCode differences?
- What's in the shared layer vs platform adapters?

---

## What To Extract

1. Orchestrator design
2. Specialist agent list (find what VENOM is missing)
3. Workflow templates
4. Any Claude Code-specific patterns

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

**Is there a specialist here that VENOM should have but doesn't?**  
Or does it confirm VENOM's nine minds are the right set?
