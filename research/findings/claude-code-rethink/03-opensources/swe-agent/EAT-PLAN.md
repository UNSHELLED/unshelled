# EAT-PLAN: SWE-agent (swe-agent/SWE-agent, 19k★)

**Local clone:** `draft/research-sdd-vendors/swe-agent/`  
**Time to eat:** ~1.5 hours  
**Priority:** P7 — debugging loop focus

---

## What SWE-Agent Is

GitHub issue → autonomous fix pipeline.  
SOTA on SWE-bench (77.6% solve rate).  
Single YAML config.  
Research-focused but methodology is gold.

---

## What To Read

```
1. README.md — architecture, how it works
2. Any config.yaml examples — how tasks are defined
3. Any agent loop definition — the observe → hypothesize → test cycle
4. Any tool definitions — what tools the agent has
5. Any evaluation/verification patterns
6. Any failure handling — what happens when stuck
```

---

## Questions To Answer

**The loop:**
- Exactly how is the observe → hypothesize → test loop implemented?
- What triggers a new hypothesis?
- What constitutes "new information"?
- How is stall detected? (same hypothesis X times? no new info Y times?)

**Tool design:**
- What tools does SWE-agent give to the debugging agent?
- How granular are they? (bash_run? read_file? both?)
- How is tool use structured? (schemas? format?)

**Single YAML config:**
- What does the YAML config contain?
- How is a debugging task defined?
- What makes a good task spec for SWE-agent?

**Performance:**
- Why 77.6% solve rate on SWE-bench?
- What specifically makes it better than generic agents?
- Is it the loop? The tools? The prompting?

**Failure handling:**
- What happens when SWE-agent is stuck?
- Does it ask for help? Give up? Change strategy?

---

## What To Extract

1. The exact loop implementation (observe → hypothesize → test → evaluate format)
2. Stall detection patterns
3. Tool design principles for debugging agents
4. Task spec format for debugging tasks
5. What makes their prompt better for debugging

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

**Our `venom-debugger` uses loop-engine patterns. Does SWE-agent's loop improve on ours?**  
Specifically: is their stall detection better? Their hypothesis formulation cleaner?
