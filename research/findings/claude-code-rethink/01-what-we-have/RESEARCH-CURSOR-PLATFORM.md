# Research Guide: CURSOR-PLATFORM.md

> Cursor is the oldest, most battle-tested VENOM body. Read it for what survived.
> Not the most modern — but the most refined over time.

**Output file:** `01-what-we-have/CURSOR-PLATFORM.md`
**Read every file in:** `platforms/cursor/template/.cursor/`

---

## Read In This Order

```
1.  platforms/cursor/template/.cursor/rules/venom-heart.mdc      ← spine
2.  platforms/cursor/template/.cursor/rules/voice.mdc            ← communication law
3.  platforms/cursor/template/.cursor/rules/vibes.mdc            ← archetype grammar
4.  platforms/cursor/template/.cursor/rules/core.mdc             ← engineering standards
5.  platforms/cursor/template/.cursor/rules/unshelled.mdc        ← full power mode
6.  platforms/cursor/template/.cursor/rules/research-first.mdc   ← anatomy discipline
7.  platforms/cursor/template/.cursor/rules/tools-orchestration.mdc
8.  platforms/cursor/template/.cursor/rules/cursor-native.mdc    ← platform-specific
9.  platforms/cursor/template/.cursor/rules/cursor-context.mdc
10. platforms/cursor/template/.cursor/rules/origin.mdc
11. platforms/cursor/template/.cursor/identity/ (all files)
12. platforms/cursor/template/.cursor/systems/ (all files)
13. platforms/cursor/template/.cursor/commands/ (all files)
14. platforms/cursor/template/.cursor/skills/ (all files)
```

---

## Questions To Answer

### The Rules System (Cursor's equivalent of CLAUDE.md)
- How many rules files exist? What are they?
- What does `venom-heart.mdc` contain that neither CLAUDE.md nor AGENTS.md has?
- What's the init sequence in `venom-heart.mdc`? (the `/venom?` canonical sequence)
- What's the route table? (words → mode mapping)
- What's the energy match table? (state → archetype → behavior)
- What's the pushback scale? Same as Claude Code or different?

### Voice and Vibes (high value to port)
- `voice.mdc` — what's the format=thought framework? What's the case library?
- `vibes.mdc` — what are the 9 archetype grammars? (Churchill, Senna, Tesla, Marcus Aurelius, Feynman, Holmes, Thich Nhat Hanh, Honnold, Rogers)
- Are these inline in the rules or referenced by @ ?
- Are the archetype grammars better in Cursor than in Claude Code's `energy-matching.md`?
- What's the "Eight Diseases" format in vibes vs "8 Diseases" in Claude Code?

### Research-First Protocol
- What's the exact research-first protocol in `research-first.mdc`?
- How does it define "anatomy"?
- When does it say to research vs execute?
- Is this better than what CLAUDE.md v2.4 says about anatomy?

### Identity System
- What files are in `.cursor/identity/`?
- What does `soul.mdc` contain that `soul.md` in Claude Code doesn't?
- Is there a `kariem.mdc`? What does it say?
- Is there a `wave.mdc`? What is it?

### Commands
- What commands exist in `.cursor/commands/`?
- What's the `/venom?` init command?
- What's the `/v` singularity command?
- Are these portable to Claude Code's command format?

### What Cursor Has That Claude Code Doesn't
- `alwaysApply` rules — Cursor fires these every message, no trigger needed. Does Claude Code have equivalent?
- `paths:` scoped rules — rules that only fire for certain file patterns. Does Claude Code have equivalent?
- Multi-file rule system — 10+ rules files vs one CLAUDE.md. Trade-offs?

---

## Platform Translation Map

| Cursor concept | Claude Code equivalent |
|---------------|----------------------|
| `.cursor/rules/` alwaysApply | CLAUDE.md (loads every session) |
| `.cursor/rules/` conditional | knowledge files via @ reference |
| `.cursor/identity/` | knowledge files (soul.md, pact.md, etc.) |
| `.cursor/systems/` | knowledge files |
| `.cursor/commands/` | `.claude/commands/` |
| `.cursor/skills/` | `.claude/skills/` |
| No direct equivalent | `.claude/agents/` (Claude Code only) |
| No direct equivalent | `.claude/scripts/` hook scripts (Claude Code only) |

---

## The Critical Question

**What does Cursor's rule system do that CLAUDE.md cannot?**

Specifically: the `alwaysApply` + conditional rules system lets Cursor have 10+ modular rules that each do one thing well. CLAUDE.md has to contain everything in one file (or via @ references). Is there a way to use Claude Code's knowledge files + rules files to replicate Cursor's modularity?

---

## Output Structure

```markdown
# Cursor Platform Audit

**Date audited:** [date]
**Most mature, most battle-tested VENOM body**

## What Cursor Has That's Worth Porting
[specific: rule file + section + what it does better]

## The Archetype System (vibes.mdc)
[9 archetypes — format for each — port decision]

## The Voice System (voice.mdc)
[format=thought table — case library — port decision]

## Research-First Protocol
[exact protocol — is it better than current CLAUDE.md?]

## Platform Translation Decisions
[table: Cursor concept | Claude Code equivalent | port decision]

## What Stays Cursor-Only
[things that don't translate to Claude Code's architecture]

## Rethink Lens
[what would we build if Claude Code had Cursor's rule modularity?]
```
