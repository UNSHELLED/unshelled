# EAT-PLAN: spec-kit (github/spec-kit, 83k★)

**Already cloned at:** `draft/research-sdd-vendors/spec-kit/`  
**Time to eat:** ~2-3 hours  
**Priority:** P1 — eat this first

---

## What Spec Kit Is

4-phase workflow: Specify → Plan → Tasks → Implement  
Constitution-first: project principles defined before any spec  
CLI-driven: `specify init`, slash commands `/speckit.*`  
Extension system: pluggable workflows

---

## What To Read (in order)

```
1. README.md — overall philosophy, how it works
2. CONSTITUTION.md (if exists) — their constitution format
3. .claude/ or .cursor/ or equivalent — how they wire Claude
4. Any slash command definitions — exact format
5. Any spec template — what a spec looks like
6. Any task template — what tasks look like
7. Any extension examples — how extensions work
8. CHANGELOG or VERSION — what's been updated (signals what matters)
```

---

## Questions To Answer

**Philosophy:**
- What problem does spec-kit solve that ad-hoc prompting doesn't?
- What's the exact definition of "constitution" in their system?
- Why 4 phases? What breaks if you skip one?

**Constitution:**
- What exactly goes in a constitution.md?
- What format? What fields are mandatory?
- How does the AI use it during spec/plan/tasks?

**Spec format:**
- What makes a good spec in their system?
- What fields? What's mandatory vs optional?
- How do they handle ambiguity?

**Task format:**
- How are tasks structured for AI execution?
- How is dependency ordering expressed?
- What's the verify/done criteria format?

**Claude Code integration:**
- How do they wire into Claude Code specifically?
- What hooks do they use?
- What slash commands?

**Extension system:**
- How does the extension system work?
- What can extensions add/override?
- How is this relevant to VENOM profiles?

---

## What To Extract

Fill `EXTRACTED.md` with:
1. Constitution template (exact format)
2. Spec template (exact format)  
3. Task template (exact format)
4. The 4-phase discipline (why each phase, what gates)
5. Any Claude Code hook patterns
6. Any patterns we haven't seen before

---

## What To Ignore

- The CLI tooling itself (we don't need a CLI)
- Any UI components
- Python-specific patterns (87% Python)
- Installation/setup instructions
- CI/CD integration patterns (not our focus)

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

Our `/venom-spec` command already implements a constitution → spec → clarify → plan → tasks lifecycle.  
**The question is: what does spec-kit do better than what we have?**  
Specifically: is their spec format better? Their task format? Their constitution format?
