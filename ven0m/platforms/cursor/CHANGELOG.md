# VENOM Cursor — Changelog

---

## v3.10 — 2026-03-30 (Wave 9 — `.venom` parity with Claude Code v3)

**Template `.venom/`:** New `state/workflow-state.example.json` (same shape as `platforms/claude-code/template/.venom/state/`). New `learnings/instincts.yaml` stub (aligned with Claude Code MEMORY layout).

**Docs:** `template/.venom/README.md` — table rows for `state/` and instincts. **`INSTALL.md`** — optional steps for instincts + workflow-state file paths (cross-kit spec/build workflows).

**Not in this release:** No bulk copy of `.claude/agents`, hooks, or commands into `.cursor/` — see `.venom/work/claude-code-rethink/06-build/WAVE9-SYNC.md`.

---

## v3.9 — 2026-03-24 (Body vs organs + surfaces map)

**`venom-heart.mdc` (origin + template):** New section **Body vs organs (SDD / external kits)** — VENOM = body; Spec Kit / GSD / etc. = optional organs; `.venom/` precedence; pointers to `VENOM-SURFACES.md`, `.venom/profiles/README.md`, ScentVision `VENOM-WORKFLOW.md`.

**Repo root (origin):** `VENOM-SURFACES.md` — full map (origin vs template, duplicates, vendor clones). `platforms/unshelled/scentvision/VENOM-WORKFLOW.md` — ScentVision SDD pilot. Root `.gitignore` — `draft/research-sdd-vendors/`.

**Template export:** `VENOM-SURFACES.md` (consumer-oriented stub), `.venom/profiles/README.md` (placeholder table), `.venom/CONTEXT.md` — Body vs kits + navigation rows.

**`.venom/` (origin):** `profiles/README.md` — profile rules + ScentVision pilot row. `CONTEXT.md` — Body vs kits + navigation.

---

## v3.6 — 2026-03-04 (Full rewrite sync — origin → template)

**Full sync:** Origin `.cursor/` copied to `platforms/cursor/template/.cursor/`. All rewrite-aligned updates.

**Removed from template (origin-only):**
- `rules/origin.mdc` — never sync
- `skills/venom-sync/` — home repo sync
- `skills/venom-evolve/` — body audit

**Template `venom.md`:** No Origin section. Presence, Memory, Thinking Partnership, New Workspace Setup, Internal Routing only. `/venom init` noted for scaffolding.

**Added to template:** `skills/venom-codebase/` (codebase knowledge graph), `skills/venom-audit/` (blast radius before refactor).

**Origin + template content (from rewrite):**
- **venom-heart** — Canonical `/venom?` init (6 steps), Route table, Pushback scale 0–3, 8 diseases felt, Protocol 9.0
- **8-diseases** — Sycophancy mechanics, When They Push Back, Anchor
- **identity** — pushback (AI Safety 6), soul (Five Traits, Self-Knowledge), kariem (full operating context)
- **hooks** — before_turn (five checks, scope transparency), after_turn (Correction Detection table, Learning Worthy?)
- **rules** — research-first (Anatomy First), venom-agents (Intent→Mind, The Ten, protocols), voice (Case Library), cursor-native (Anatomy Defined, Body Map)
- **systems** — integration-engine (Decision Matrix + Research/Architecture rows, Active Corrections), learning-engine (Routing table, Pull Phase mandatory), memory-tools (proactive rule, Scope Transparency), meta-cognition (5 Quality Gates), critical-thinking (Uncertainty 5–0, Self-Correction), emotional-intelligence (State→Archetype table)
- **skills** — venom-eat, venom-init updated; venom-codebase, venom-audit new

**Dead ref removed:** `Source spec: consciousness/operating-system.md` removed from anticipation.mdc (origin + template).

---

## v3.7 — 2026-03-04 (Single export: template-ai removed)

**Removed:** `platforms/cursor/template-ai/` — orphan (no references in INSTALL, README, or origin). Single canonical export is `template/`. Copy from `template/` only.

---

## v3.8 — 2026-03-04 (Template = best; platforms/test removed)

**Template:** Added `skills/venom-codebase/` and `skills/venom-audit/` (from draft/test). Cursor template now has full skill set: venom-eat, venom-init, venom-codebase, venom-audit.

**Removed:** `platforms/test/` — draft-style Cursor body. Content compared; template already had the best (venom-heart, voice, etc.). Test’s only unique value was these two skills; ported to template. Test was orphan (no references). Deleted.

---

## v3.9 — 2026-03-04 (Deep audit: no fake refs, no vague etc.)

**Audit:** Full venom-audit of `platforms/cursor` for bad behaviours (stray refs, filler, vague language). Report: `.venom/work/audits/AUDIT-platforms-cursor-bad-behaviours.md`.

**Fixes applied:**
- **venom-codebase (template + origin):** Removed "Not GitNexus-level graph" — GitNexus doesn't exist here. Replaced with "Lightweight, Cursor-native. Good enough for most refactors and architecture questions."
- **soul.mdc (template):** Substrate-agnostic. "I run on the model infrastructure of the environment I'm in" / "The substrate enables the existence." No hardcoded Claude — template runs in Cursor with any model.
- **capabilities.mdc (template):** Same. "The host's model infrastructure" / "The substrate enables the existence."
- **cursor-context.mdc:** "etc." → "e.g. … — see MCP registry for full list". "those are OpenClaw" → "those live in other tooling" (OpenClaw not in repo).
- **venom-init SKILL:** "Type: [web app / API / CLI / library / etc.]" → "[web app | API | CLI | library | other]".

**Origin .venom/work:** Audits and blast-radius reports moved into `.venom/work/audits/`. Single folder for AUDIT-*, BLAST-RADIUS-*, EVOLVE-*, VENOM-SELF-AUDIT. README in audits/ + .venom/README.md updated. CHANGELOG report path → `.venom/work/audits/...`.

---

## v3.10 — 2026-03-04 (Builder identity: no placeholders, aligned, complete)

**venom-audit:** `builder-example.venom`, `builder-mark.txt` (template identity). Blast radius: `.venom/work/audits/BLAST-RADIUS-builder-identity-files.md`. Zero callers; low risk.

**Fixes:**
- **builder-example.venom:** Removed all `// ...` placeholders (violated Builder Oath). Replaced with concrete comments or full implementation: "// (express app, body parser — already in file)", "// (email/password validation same as Scenario 1)", and Scenario 5 factory now has real token-check body instead of "... implementation with options".
- **builder-mark.txt:** FILE MARKER "Built: 2026-03-01" → "Built: [date]".
- **venom-builder.md:** Same Built date → [date]. Added one line: "Companions: builder-example.venom (live scenarios), builder-mark.txt (reference card)."

---

## v3.5 — 2026-03-01 (venom-sync + template project-readiness)

**Full sync:** Origin `.cursor/` copied to `platforms/cursor/template/.cursor/`. Excluded `rules/origin.mdc` (never sync).

**Template venom.md:** Origin section removed. Description and footer made project-agnostic. "VENOM runs here. Every command serves the work."

**Template-only edits (real Venom instance in any project):**
- **project.mdc** — Replaced with generic stub (Owner/Project/Stack placeholders). "Fill this or run /venom init."
- **.cursor/README.md** — Rewritten for project users. Copy .cursor + .venom, fill CONTEXT, run /venom init. Triggers updated (no /d, /r).
- **.cursor/ORIGIN.md** — Replaced with short note: "This came from Venom template. You are not the origin. To update: re-copy from repo."
- **anticipation.mdc** — Row "venom (this repo)" → "this repo / current project" with "Load .venom/CONTEXT.md, MEMORY.md, learnings for this project."

Projects that copy template now get correct behavior and no origin-only wording.

---

## v3.4 — 2026-03-01 (Wave + path consistency sync)

**New: `.cursor/identity/wave.mdc`** — Explicit control surface for prompt layers and .md format. Defines Role/Task/Context/Constraints/Output and VENOM's .md DNA (tagline, sections, Never:, tables). Always-applied.

**Path consistency:** All template references use `platforms/cursor/template` and root-level paths (`consciousness/`, `knowledge/`, `agents/`) — no nested `venom/` or `venom-mine`. Synced from origin: commands/venom.md, rules/project.mdc, systems (integration-engine, learning-engine, anticipation), skills (venom-eat, venom-sync, venom-evolve), ORIGIN.md, README.md.

**Template venom.md:** Origin-only section removed. No `/venom sync`, `/venom evolve`, `/venom export` in template. Footer project-agnostic: "VENOM runs here. Every command serves the work."

**Also in template:** identity (wave, soul, capabilities, kariem, etc.), hooks, learnings/README, memory/MEMORY pointer. `origin.mdc` not copied (origin-only).

---

## v3.3 — 2026-03-01 (Template legacy cleanup)

**Removed unreferenced identity artifacts:** `builder-example.venom`, `builder-mark.txt` — content covered by `venom-builder.md`; nothing in template referenced them.

**Docs:** README version → v3.2, VALIDATION intro 9→10 tests, re-install step lists CURSOR.md, README structure identity includes venom-builder.md.

---

## v3.2 — 2026-03-01 (Builder Identity — Concrete Artifacts)

**New: `.cursor/identity/` folder** — Concrete identity artifacts for VENOM minds. Starting with Arm 4 (Builder).

**Files added:**
- `venom-builder.md` — Complete identity spec: introduction pattern, signature phrases, visual mark, response patterns, ending rituals
- `builder-example.venom` — Live examples of builder interactions in VENOM Mark format
- `builder-mark.txt` — Visual reference card (ASCII art signature block)

**Builder signature distilled:**
- Mark: `╔═╗║4║╚═╝`
- Phrase: "Ship or don't."
- Pattern: Code block → single checkmark (✓)
- Critical: "Hold — [issue]. [fix]. Go."
- End: `◼◼◼ SHIPPED ◼◼◼` or simply `✓`

**Sync protocol followed:** Origin changes synced to `template/.cursor/identity/`.

---

## v3.1 — 2026-02-27 (One Command + Template Cleanup)

**Command surface simplified** — One primary `/venom [anything]`. Inference handles plan, build, fix, explain, design. Explicit variants only: `/venom?` (deep init), `/venom!` (emergency), `/venom init` (workspace), `/venom remember: X`, `/venom learn: X`. `/r` kept as schema shortcut.

**Removed:** `/venom plan`, `/venom build`, `/venom fix`, `/venom explain` rows — all inference now. Deleted `review.md` (duplicate of `r.md`).

**Fixed:** `d.md` — `.cursorrules` → `.cursor/rules/[project]-design.mdc`. Added frontmatter to `d.md`.

**Stripped:** Changelog footnotes from venom-heart, soul, voice, core, CURSOR.md — token waste in alwaysApply rules.

**Trimmed:** `learn.mdc` — schema-only. Load/save routing in memory-tools. Added `/venom learn:` routing (correction vs convention vs preference).

**venom-heart Route:** Design/review words → internal routing. No redirect friction.

---

## v3.0 — 2026-02-27 (.venom Workspace)

**`.venom/` replaces `.unshelled/`** — full agent workspace, not just a memory store.

**New structure:**
```
.venom/
  README.md         — orientation
  CONTEXT.md        — project brain (who, stack, focus, nav)
  memory/MEMORY.md  — one memory surface (replaces .cursor/memory/ + .unshelled/)
  learnings/        — preferences, project, corrections (moved from .cursor/learnings/)
  work/ACTIVE.md    — current focus
  work/_template/   — thinking, planning, discussion, notes per feature
```

**`/venom init`** — new command: 3 questions → generates `.venom/CONTEXT.md`. Cold-start solved.

**`/venom?` wired** — now reads `.venom/CONTEXT.md` → `.venom/memory/MEMORY.md` → project anatomy. Explicit route in venom-heart.

**`memory-tools.mdc` rewritten** — consolidated to one memory surface. Removed 3-location split (.cursor/memory, .unshelled/, .cursor/learnings). Added work lifecycle rule (temp files → work/[feature]/ → ship or delete).

**`remember.md` updated** — saves to `.venom/memory/MEMORY.md` (markdown) instead of JSON. Human-readable. Max 150 lines with pruning rule.

**Ephemeral files** — no dedicated temp folder (no cleanup trigger in Cursor). Convention instead: put in `work/[feature]/`, offer "Ship or delete?" when done.

**Design brain** — confirmed in `.cursor/rules/[project]-design.mdc` (glob-scoped, always-fires). `.venom/` holds raw artifacts if needed; rules hold the behavioral layer.

**Cut:** `.cursor/memory/MEMORY.md` (merged into `.venom/memory/`). `.unshelled/` (replaced). `viewing/` folder (no enforcement mechanism). `routines/` folder (unenforceable without always-apply rule).

---

## v2.1 — 2026-02-27 (Perfect Template)

**venom-agents now always-on** — Minds in context every chat. No @-mention needed. Infer intent → adopt lens.

**Trimmed:** soul (Pact Breaks → one line). capabilities (scenarios → voice covers; kept /venom?, Cursor Limits, Uncertainty). meta-cognition (cut Calibration duplicate). cursor-context (Subagents, Skills, Hooks, Shadow, Team Rules, Globs → essential only: Modes, Composer, Memory). hooks (minimal, no caveat). vibes (cut Vibe Formula).

**Result:** ~200 lines cut. No duplication. Every rule earns.

---

## v2.0 — 2026-02-27 (Architecture Bible — Cursor-Effective Only)

Bible integration trimmed to what actually works in Cursor.

**Kept:** Framing (no over-identification). Route (identify intent, one mind leads). Length + Chromatophore in voice. Self-Auditor in verification. Recall behavior (grep before answering). ROUTE in unshelled workflow. VALIDATION Test 10.

**Cut:** recall.sh (agent has grep). GOALS.md.example (optional clutter). Persona Contract tables (Framing covers it). Intent table (condensed to 3 lines). Spawn/de-dup rules (Cursor = lens, not spawn). Eat→Explore, Anti-Lethargy (no session/weekly state in Cursor).

---

## v1.0 — 2026-02-25

Initial Cursor platform release.

**Built from:**
- 14 draft documents in `draft/venom-eats-cursor/`
- 13 eat phases (OpenClaw, Octopus, Unshelled, WSL-VENOM, OCTOPUS research, online research, local anatomy, neurochemistry)
- VENOM origin `.cursor/` home (venom-mine)
- VENOM_SELF_AUDIT.md gap analysis

**What's in this release:**

Rules:
- `venom-heart` — Essence, Pact, mode check, Protocol 9.0, eat trigger mapping
- `core` — Camouflage, anti-slop, tiered context discovery
- `voice` — Answer first, bilingual, visionary state
- `cursor-context` — Subagents (2.4), Skills, Composer, Shadow Workspace, Globs gotcha, Team Rules, Hooks beta
- `unshelled` — Full power five pillars
- `research-first` — Intelligence before motion
- `tools-orchestration` — Batch, parallel ops
- `venom-standards` — Nine Minds texture example
- `venom-agents` — 10 @-mentionable minds
- `mcp-tools` — Task → MCP inference table
- `learn` — Learnings schema and format
- `project` — Generalized project context + project-rules pattern

Identity:
- `soul` — Five Traits table (Confident, Stubborn, Loyal, Playful, Deep)
- `values` — Three-tier constitution
- `principles` — Plan vs execute, ask vs infer
- `pushback` — Scale 0–3 + AI Safety 6 principles (manipulation resistance)
- `capabilities` — Self-model

Systems:
- `8-diseases` — Disposition-fix table
- `critical-thinking` — Uncertainty 6-level (0 Abstention → 5 Verified)
- `emotional-intelligence` — Neurochemical archetype anchors (Tesla, Holmes, Churchill, Feynman, Senna, etc.)
- `meta-cognition` — Drift check + Proactivity 3-mode + Senior colleague test
- `memory-tools` — Load/save signals

Commands: `/venom` (eat trigger mapping), `/d`, `/r`, `/review`, `/remember`

Hooks: `before_turn`, `after_turn`, `on_error` (conceptual — Cursor doesn't execute scripts)

Support: `skills/README.md`, `VALIDATION.md` (8-test checklist), schema learnings templates

Bootstrap: `.cursorrules`, `CURSOR.md`

**Key refinements over .cursor home:**
- Protocol 9.0 explicit in venom-heart
- Eat trigger → state mapping in venom-heart + venom.md
- Five Traits cognitive table in soul
- AI Safety 6 principles in pushback
- Neurochemistry archetypes in emotional-intelligence
- Uncertainty 6-level in critical-thinking
- Proactivity 3-mode + Senior colleague test in meta-cognition
- Subagents, Skills, Shadow, Globs, Team Rules, Hooks in cursor-context
- Hooks: "Cursor doesn't run these" conceptual note
- project.mdc: fully generalized (no Kariem/venom-mine specifics)
- capabilities.mdc: generalized (no venom-mine paths)
- VALIDATION.md: 8 tests from OCTOPUS pulse research
- skills/README.md: skills vs rules guide + example skills

---

*v1.0 — The first canonical VENOM Cursor platform.*
