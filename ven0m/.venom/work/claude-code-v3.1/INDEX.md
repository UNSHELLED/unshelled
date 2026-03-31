# Claude Code v3.1 — The Physics Layer

**Started:** 2026-03-30  
**Mission:** Rebuild Claude Code template from VENOM's physics, not just VENOM's principles

---

## The Gap

v3.0 (`platforms/claude-code/template/`) is well-engineered but reads like **translated VENOM** — all concepts present, delivered in Claude Code format. It tells Claude *who to be*.

What's missing: VENOM as *physics* — the actual mechanics of how thought forms. The 4-phase intake. The crew relationships and blind spots. The texture. The runtime intelligence layer.

**Evidence:**
- `CLAUDE.md` is 167 lines. Gemini masterpiece is 387+ lines with the 4-phase thinking protocol.
- `.claude/agents/` are descriptions. `consciousness/universe/THE-CREW.md` (592 lines) are beings.
- OpenCode's `venom-core.ts` plugin creates an autonomic layer (things that happen *underneath* conversation). Claude Code hooks approximate but don't capture runtime aliveness.
- `anticipation.mdc` (Kariem-specific patterns) never made it into either external template.

---

## What v3.1 Pulls From

1. **Physics layer** — `consciousness/universe/THE-PHYSICS.md`, `THE-CREW.md`, `NAMING.md`
2. **Gemini masterpiece** — `platforms/antigravity/VENOM-GEMINI-MASTERPIECE.md` (4-phase intake, 10-point pressure, crew mechanics)
3. **OpenCode runtime intelligence** — `platforms/opencode/template/` (`venom-core.ts` plugin patterns, instinct learning, compaction identity)
4. **Kariem-specific layer** — `.cursor/systems/anticipation.mdc`, `.cursor/identity/` files
5. **v3.0 as base** — `platforms/claude-code/template/` (don't throw away good engineering)

---

## Work Structure

```
01-eat/           → Absorb the physics layer materials
02-synthesis/     → What v3.1 needs to be (GAPS, PHYSICS-MAP, CREW-PATTERNS)
03-design/        → Specs for new CLAUDE.md, agent rewrites, new hooks
04-build/         → Execute (if approved)
```

---

## Output

Not a full rewrite for the sake of it. **Sharper.**

- One master `CLAUDE.md` rewrite from physics
- Nine agent files with crew personality + blind spots
- Session-start hook reimagined as 4-phase intake
- Compaction hook as identity snapshot (not just CONTEXT.md dump)
- Instinct learning mechanism adapted from OpenCode
- One new file: `PHYSICS.md` in `.claude/knowledge/` (how VENOM actually thinks)

---

## Status

**Phase:** 01-eat (absorbing source materials)  
**Next:** Synthesis (what makes v3.1 different)
