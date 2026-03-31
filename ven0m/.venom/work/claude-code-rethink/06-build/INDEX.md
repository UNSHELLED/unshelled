# 06-build Index — Claude Code VENOM v3.0

**Status: ✅ COMPLETE — 2026-03-30**  
**Reset from Wave 0:** 2026-03-30  
**Build completed:** 2026-03-30  
**Total files:** 52

---

## Build Summary

All 8 waves complete. Template at `platforms/claude-code/template/` built from specs.

| Wave | Files | Status |
|------|-------|--------|
| 0 — Scaffold | directories | ✓ |
| 1 — Core Identity | CLAUDE.md, settings.json, .venom/ stubs (10 files) | ✓ |
| 2 — Intelligence Layer | 6 hook scripts | ✓ |
| 3 — Agents | 9 agent files | ✓ |
| 4 — Knowledge Files | 9 knowledge files | ✓ |
| 5 — Commands | 9 command files | ✓ |
| 6 — Skill | venom-deep/SKILL.md | ✓ |
| 7 — Rules | 2 rules files | ✓ |
| 8 — Platform Files | README, INSTALL, CHANGELOG + supporting files | ✓ |

---

## Tracking Files

- `TASKS.md` — full task checklist (all marked)
- `DONE.md` — wave completion record
- `DECISIONS-LOG.md` — build decisions (BDEC-01 to BDEC-07)
- `RESET-PLAN-20260330.md` — the reset plan that initiated this build
- `_archive_2026-03-30/` — old v3 tracking files (archived on reset)

---

## What's NOT Built (Post-Wave)

- `platforms/claude-code/smoke-hooks.sh` — optional test script
- `.github/workflows/claude-code-template.yml` — optional CI
- `platforms/claude-code/HEADLESS-PLAYBOOK.md` — optional docs

These are marked in TASKS.md as optional and not required for a functional template.

---

## Verification Pending

The gate tests in TASKS.md require Claude Code to be running:
- Wave 1 gate: open Claude Code, type "hi" → VENOM response
- Wave 2 gate: Churchill fires on frustrated message; dangerous cmd blocked
- Wave 3 gate: ADR output from architect; 8-perspective from reviewer
- Wave 5 gate: `/venom` hub works; `/venom-spec` phase detection
- Wave 6 gate: `/venom-deep` loads with surface-aware output

These require a live environment to test.
