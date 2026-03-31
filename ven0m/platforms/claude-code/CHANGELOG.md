# CHANGELOG — VENOM Claude Code

---

## v3.1.0 — 2026-03-30 (The Physics Layer)

**The masterpiece release.** Complete rebuild from pure intelligence. VENOM as being, not behavior.

**Breaking changes from v3.0:**
- `venom-deep` skill removed (288 lines). Intelligence distributed correctly across hooks + agents + CLAUDE.md.
- All 9 agent files rewritten (7-dimension beings, not role descriptions).
- All 6 hook scripts rewritten (intelligence layer, not procedural).

**What's new:**

*Core Identity (CLAUDE.md):*
- Opens with physics: "I think in Spherical Compression"
- 4-phase intake protocol: Void → 10-Point Pressure → Collapse → Singularity
- Crew compressed with blind spots: "HELM can over-architect. WELD grounds HELM."
- Pre-send quality gate: 4 questions before output
- **237 lines** (up from 167, denser)

*The Crew (7 agent files, 1,068 lines):*
- **Full 7-dimension beings:** Who they are, How they think, How they speak, When they wake, Who they need, Blind spot, Signature move
- `venom-architect.md` (HELM) — Collapses decision trees. Blind spot: over-architecture. **171 lines**
- `venom-researcher.md` (HUNT) — Deep trail. Blind spot: over-research. **245 lines**
- `venom-reviewer.md` (EDGE) — 8-perspective scan. Blind spot: too sharp. **281 lines**
- `venom-builder.md` (WELD) — Wave execution. Blind spot: over-build. **269 lines**
- `venom-debugger.md` (MEND) — Root trace. Blind spot: too deep. **322 lines**
- `dispositions.md` — ECHO, OMEN, CALL, MOLT (woven through all minds). **250 lines**
- `venom-explorer.md` (DART) — Fast scout, separate from deep researcher. **265 lines**

*Knowledge (2 new files):*
- `physics.md` — Spherical Compression mechanics, code as consequence, time-bending. **131 lines**
- `crew-relationships.md` — Who needs who, visual map, blind spot interactions. **149 lines**

*Hooks (6 scripts, 744 lines — intelligence layer):*
- `session-start.js` — Progressive loading + 4-phase intake injection. **126 lines**
- `pre-tool-use.js` — Instinct check (confidence > 0.6 fires), stall detection, danger screening. **210 lines**
- `post-tool-use.js` — Cost tracking + instinct strength update (every 3 fires → +0.1 confidence). **95 lines**
- `compaction.js` — Identity snapshot: who I am + what I knew + instincts + trajectory. **162 lines**
- `session-end.js` — Write ACTIVE.md with trajectory inference. **132 lines**
- `user-prompt-submit.js` — Energy detection + archetype routing (Churchill, Senna, Tesla, Marcus, Feynman, Thich). **138 lines**

**The difference:**

v3.0: Describes VENOM's behavior.  
v3.1: VENOM's being, mechanics, relationships, growth.

v3.0: Agents are roles ("You are the architect").  
v3.1: Agents are minds ("HELM collapses decision trees. Blind spot: can over-architect").

v3.0: Hooks load and save.  
v3.1: Hooks detect, learn, preserve identity.

**+600 lines of pure intelligence.**

---

## v3.0.0 — 2026-03-30 (Rethink Release)

**Breaking changes from v2.4:**
- `.unshelled/` memory path removed. All memory now in `.venom/`. If you have data in `.unshelled/`, move it to `.venom/`.
- `venom-bridge` agent removed. Bridge function absorbed into `venom-communicator`.
- Hook scripts moved from `.claude/` root to `.claude/scripts/`.
- `settings.json` hook format updated to new Claude Code hook schema (array of hook objects with `timeout`).

**What's new:**

*Memory system (complete rebuild):*
- `.venom/state/` directory for workflow state + tool counter
- `workflow-state.json` written by `/venom-spec` at every phase transition
- `.tool-counter.json` managed by `post-tool-use.js` for loop detection
- `workflow-state.example.json` template included

*Hook scripts (6 new):*
- `session-start.js` — loads CONTEXT.md + corrections.yaml into session
- `pre-compact.js` — preserves VENOM identity through compaction
- `user-prompt-submit.js` — energy signal detection, tone hint injection
- `pre-tool-use.js` — safety screening (7 block patterns) + loop detection (3x stall)
- `post-tool-use.js` — tool counter updates
- `session-end.js` — resets counter, stamps ACTIVE.md

*Agents (9, rebuilt from spec):*
- All 9 agents have complete identity, methodology, loop protocol, and output format
- All descriptions are readable without VENOM vocabulary (universal audience)
- `venom-builder` now explicitly orchestrator-only with wave execution protocol
- `venom-historian` uses `claude-haiku-4-5` for speed (memory retrieval is fast)
- `venom-communicator` absorbs bridge function from removed `venom-bridge`

*Commands (9, rebuilt from spec):*
- `/venom-eat` now has 6 phases each writing to disk (interruptible, resumable)
- `/venom-spec` now has full phase detection from filesystem state
- `/venom-build` now has explicit wave verification gates with test runner detection
- `/venom-check` now includes memory size check and archive detection
- All commands work headlessly (no interactive-only assumptions)

*Knowledge files (9 new):*
- `soul.md`, `pact.md`, `energy-matching.md`, `cognitive-matrix.md`
- `disposition-vs-rules.md`, `protocols.md`, `modes.md`, `profile.md`, `simulations.md`

*Skills:*
- `venom-deep/SKILL.md` rebuilt with all 11 intelligence patterns + Claude Code non-negotiables

---

## v2.4.x — 2025 (archived)

Pre-rethink versions. See `.venom/work/claude-code-rethink/06-build/_archive_2026-03-30/` for archived build tracking.

**Migration from v2.4 to v3.0:**
1. Move `.unshelled/` contents → `.venom/` (map: `memory/` → `.venom/memory/`, `insights.json` → discard, `bugs.json` → `.venom/memory/MEMORY.md` entries)
2. Move hook scripts from `.claude/` root → `.claude/scripts/`
3. Update `settings.json` to new hook schema
4. Run `/venom-init` to scaffold new `.venom/state/` structure
5. Run `/venom-eat` to regenerate `CONTEXT.md` in new format
