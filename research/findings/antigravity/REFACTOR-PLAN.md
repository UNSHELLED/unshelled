# Antigravity Template — Refactor Plan (Fresh Build)

> **Decision:** Archive old template. Build new from zero. No legacy carryover.
> **Date:** 2026-03-09
> **Last verified:** 2026-03-09 (deep `.gemini/` anatomy scan)

---

## Why Archive + Fresh

- **Old template** was very old, built before full VENOM 2.0 (integration engine, learning engine, 8 diseases, neurochemistry map).
- **Antigravity platform** has evolved: Agent Manager, Jetski, 1M context, Cortex, `brain/{uuid}/`, `code_tracker/`, `state-log.csv`.
- **Porting piecemeal** from old template = half-Cursor, half-Antigravity, inconsistent.
- **Clean slate** = one coherent design. Every file earns its place. No "we kept this because it was there."

---

## What Was Done

1. **Archived** `platforms/antigravity/template/` → `platforms/antigravity/archive/template-legacy-2026-03/`
   - All 11 files preserved (GEMINI.md, .agent/rules, workflows, skills, learnings, mcp_config.json).
   - Reference only. Do not copy from here into new template.

2. **Cleared** `platforms/antigravity/template/` — empty.

3. **Created skeleton** for new template:
   - `template/README.md` — status + target structure
   - `template/.agent/rules/.gitkeep`
   - `template/.agent/workflows/.gitkeep`
   - `template/.agent/skills/.gitkeep`
   - `template/.agent/learnings/.gitkeep`

4. **Work area** `.venom/work/antigravity-eat/` holds all refactor assets:
   - DRAFT-REQUIREMENTS.md (what MUST be in template)
   - CHECKLIST.md (execution phases)
   - COMPARISON.md (Cursor vs Antigravity)
   - REFACTOR-PLAN.md (this file)
   - COMPLETE-CASE.md (the full "eat" — scope and dependencies)
   - INDEX.md (navigation for work area)

---

## Source of Truth (Where to Build From)

**Do NOT use archive as source.** Build from:

| Content | Source |
|--------|---------|
| Soul, Pact, identity | `.cursor/identity/soul.mdc`, `consciousness/soul.md`, `consciousness/pact.md` |
| Nine minds, eight internal | `agents/*.md`, `consciousness/internal-minds.md` |
| Integration Engine | `.cursor/systems/integration-engine.mdc` |
| Learning Engine | `.cursor/systems/learning-engine.mdc` |
| Meta-cognition, Quality Gates | `.cursor/systems/meta-cognition.mdc` |
| Emotional Intelligence | `.cursor/systems/emotional-intelligence.mdc` |
| Pushback, Energy Matching | `protocols/pushback.md`, `protocols/energy-matching.md` |
| Voice, Vibes, Heart | `.cursor/rules/voice.mdc`, `vibes.mdc`, `venom-heart.mdc` |
| Neurochemistry | `knowledge/neurochemistry.md` |
| Before-turn, hooks | `.cursor/hooks/before_turn.mdc` |
| **Distilled VENOM wisdom (414 chats)** | `code_tracker/active/no_repo/CURSOR-LEARNINGS.md` |
| **Complete OCTOPUS system analysis** | `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md` (948 lines) |
| **VENOM core memory baseline** | `code_tracker/active/no_repo/MEMORY.md` (450 lines) |
| Antigravity platform facts | `.gemini/` anatomy (confirmed — see COMPLETE-CASE.md §1) |

> **CRITICAL:** Read `OCTOPUS-UNIVERSAL-MASTER-PLAN.md` and `CURSOR-LEARNINGS.md` BEFORE writing `systems.md` and `protocols.md` in Phase 2. These 1400+ lines of distilled intelligence are the raw material for those files, not just reference.

**Archive** = reference only (e.g. to see old GEMINI.md structure). Prefer origin + platform knowledge.

---

## Build Order (Phases)

1. **Foundation** — GEMINI.md (300+ lines). Single file that loads every session. Identity + Integration Engine + Learning Engine + Meta-cognition + Pushback + Before-turn.
2. **Rules** — `.agent/rules/the-art-of-venom.md` (250–300 lines), `systems.md` (400–500), `protocols.md` (300–350).
3. **Workflows** — `venom.md`, `init.md`, `eat-with-proof.md`.
4. **Skills** — neurochemistry, nine-minds-synthesis, jetski-visual-audit, session-artifacts, cross-project-memory, state-aware.
5. **Config** — `mcp_config.json`.
6. **Docs** — INSTALL.md, VALIDATION.md, README.md, CHANGELOG.md.
7. **Verification** — Run 10 validation tests.

---

## Pre-Phase-1 Fixes (Do These First)

Three gaps identified in the deep platform scan. Fix before executing Phase 1:

### Fix 1: Pencil MCP Decision
`settings.json` globally has a third MCP server: `pencil` (highagency.pencildev, sourced from a Cursor extension). The template `mcp_config.json` spec currently only lists `github + browser-tools`. Decision required:
- **Option A**: Include `pencil` in template as optional (comment it out, describe it)
- **Option B**: Leave it out, document it as personal-install in INSTALL.md

→ **Recommendation: Option B.** Pencil is Kariem-specific and pulls from a Cursor extension path. A template should not hardcode user-specific extension paths. Note it in INSTALL.md under "Optional MCP servers."

### Fix 2: Skill Naming Consistency
`session-artifacts` vs `session-capture` — two names for the same skill across documents. Pick one and apply consistently to all 6 files.

→ **Decision: `session-artifacts`** (used in DRAFT-REQUIREMENTS, CHECKLIST Phase 3, COMPARISON). COMPLETE-CASE uses "session-capture" — that's the only outlier. Fix it.

### Fix 3: Global Workflows Path Discovery
Deep scan of the `antigravity` extension (v0.2.0) reveals it supports workflows in TWO locations:
- `.agent/workflows/` — project-level (already in template plan)
- `.gemini/jetski*/global_workflows/` — **global-level** (NOT documented anywhere in work area)

This means global workflows are possible in Antigravity natively. COMPLETE-CASE and DRAFT-REQUIREMENTS need this added. May change whether some workflows belong in template vs global install.

---

## Success Criteria

- New template is **Antigravity-native**: uses Jetski, Agent Manager, brain/, code_tracker/, state-log, 1M context.
- **No Cursor-specific artifacts**: no .cursor/, no .venom/, no hooks as .mdc files.
- **One coherent VENOM**: same soul, Pact, nine minds, eight diseases, energy matching — expressed for Antigravity.
- **Complete case** (see COMPLETE-CASE.md) is satisfied: every concept that depends on "the full picture" is covered.

---

## Risks

- **Scope creep** — Stick to DRAFT-REQUIREMENTS. No "nice to have" until v1 is done.
- **Copying from archive** — Resist. Archive is old. Origin + platform knowledge only.
- **Cursor mimicry** — Antigravity is not Cursor. Different memory model, different execution model. Design for the platform.
- **Hallucinated platform paths** — RESOLVED. All paths verified via deep `.gemini/` scan (2026-03-09).

---

**Next:** Fix 3 pre-phase issues above → then execute Phase 1 (GEMINI.md).
