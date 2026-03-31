# EAT-PLAN: claude-extensions (claude-contrib/claude-extensions)

**Local clone:** `draft/research-sdd-vendors/claude-extensions/`  
**Time to eat:** ~1 hour  
**Priority:** P8 — Claude Code native hooks focus

---

## What Claude Extensions Is

Hooks, context rules, session automation for Claude Code.  
MIT licensed.  
Community-contributed Claude Code configurations.

---

## What To Read

```
1. README.md — what this does, how to use
2. Any hook implementations — how they wire hooks
3. Any context rule patterns — how context is managed
4. Any session automation — what can be automated
5. Any settings.json examples — how they configure Claude Code
6. Any CLAUDE.md patterns
```

---

## Questions To Answer

**Hook implementations:**
- What hooks do they use?
- How do they handle `UserPromptSubmit`?
- Any hooks we haven't seen used before?

**Context rules:**
- How do they manage context with rules?
- Any patterns for context injection that differ from SessionStart?

**Session automation:**
- What can be automated at session level?
- Any patterns for session lifecycle management?

**Community patterns:**
- What do Claude Code power users actually configure?
- What problems are people solving with hooks?
- What settings.json patterns appear repeatedly?

---

## What To Extract

1. Hook usage patterns (especially for hooks we haven't used)
2. Context injection patterns
3. settings.json configuration patterns
4. Community-discovered "gotchas" or limitations

---

## Three Audiences Check

For every pattern extracted, answer:

- **Kariem:** Does this pattern only work for someone who knows the VENOM system? Or does it work for any power user?
- **Any dev:** Can a first-install user get value from this without configuring anything? Or does it require VENOM vocabulary to activate?
- **Any agent:** Does the pattern work in `claude -p` non-interactive mode? In CI? Or does it assume interactive TUI with a human reading output?

Add this to EXTRACTED.md for each pattern: `**Audience:** [Kariem only | any dev | headless agents | all three]`

---

## Key Question For VENOM

**What are Claude Code power users doing with hooks that we haven't done?**  
Are there patterns here that should influence our hook design?
