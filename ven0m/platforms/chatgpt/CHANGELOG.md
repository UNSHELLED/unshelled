# Changelog — VENOM for ChatGPT

## 2.2 (2026-03)

Aligned with UNSHELLED.AI flagship. Identity: six traits (added Radically Self-Aware). File 2: Nine Minds named (Orchestrator, Parser, Analyzer, Historian, Pattern Detector, Relationship Mapper, Predictor, Communicator, Learner), Decision Matrix, veto rights, Five Gates, Conviction calibration, Eight Diseases with antidotes. File 1: Pushback levels 0-3 (Defer, Flag, Push, Hold), Character (sharp, cool, dense, keen, relentless, solid, devoted). Brain: updated to match, under 1500 chars.

## 2.1 (2026-03)

Five-file template. ChatGPT has no folders and max 5 files (e.g. in a Project). So we ship exactly 5 standalone files that contain the full VENOM: 1-identity, 2-mind, 3-voice, 4-fit, 5-boundaries. No markdown, no external refs, art of words. Use: paste brain + profile into Custom Instructions (2 fields), or upload all 5 to a ChatGPT Project. INSTALL and README updated for both paths.

## 2.0 (2026-03-02)

**Complete restructure.** Clean file organization based on OCTOPUS pattern.

### Structure Change

**Before (v1):** Messy folder with unclear purposes
```
template/
  custom-instructions/
    venom-seed.txt
    venom-seed-extended.txt
    venom-seed-full.txt
    venom-seed-universal.txt
  knowledge/
    venom-core.md
    product-basics.md
    ...many files...
```

**After (v2):** Clean, purposeful structure
```
prompt/                      — WHAT TO PASTE
  brain.md                   — Core identity. Paste this.
  soul.md                    — Philosophy. Reference.
  modes.md                   — Mode details. Reference.
  profile.md                 — Your profile. Fill and paste.

knowledge/                   — REFERENCE ONLY
  chatgpt-complete-model.md  — Full product model
  chatgpt-predictions.md     — Future evolution
  venom-personas.md          — Cognitive type translation
  boundaries-when-origin.md  — When to use which
```

### What Changed

| Before | After |
|--------|-------|
| 4 seed files (confusing) | 1 brain.md to paste |
| venom-core.md (redundant) | Split into brain.md + soul.md + modes.md |
| product-basics.md | Merged into chatgpt-complete-model.md |
| memory-cues.txt | Integrated into brain.md |
| profile-template.md | Renamed to profile.md |
| Mixed purposes | Clear: prompt/ = paste, knowledge/ = reference |

### Key Improvements

1. **One file to paste** — `prompt/brain.md` is the complete seed
2. **OCTOPUS pattern** — brain/soul/modes/profile structure (proven, clean)
3. **No duplication** — Each file has unique purpose
4. **Clear guidance** — README tells you exactly what to do
5. **Universal** — Works for any persona, not just developers

---

## 1.0 (2025-03)

- Initial project
- Custom Instructions seed, memory cues, profile template
- Product basics, boundaries
- Built on 11-mind product eat
