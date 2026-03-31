# Build Log — What Shipped

> Completed waves, verified files, deviations from plan.

**Status:** 🟢 Waves 0–9 (2026-03-30): Claude Code v3 template + parent docs; Cursor template `.venom` parity + `EAT.md` / index / MANIFEST. Optional: git tag `v3.0.0`, manual alive-test checklist.

---

## Wave Completion

| Wave | Status | Files | Alive test | Notes |
|------|--------|-------|-----------|-------|
| Wave 0 — Scaffold | 🟢 | `.venom/**` dirs + stubs | dirs exist | `state/` tracked via `workflow-state.example.json` |
| Wave 1 — Core Identity | 🟢 | `CLAUDE.md`, `settings.json`, `.venom/*`, templates | manual in Claude Code | `simulations.md` added; `CLAUDE.local` + `settings.local` templates |
| Wave 2 — Intelligence Layer | 🟢 | six `scripts/*.js` | `node --check` + stdin smoke | SessionStart reads `cwd` from stdin JSON |
| Wave 3 — Agents | 🟢 | `.claude/agents/*.md` (9 files) | @architect / @reviewer in TUI | Spec-aligned frontmatter + output contracts; `Task` disallowed on architect/researcher/historian |
| Wave 4 — Knowledge Files | 🟢 | `energy-matching.md`, `profile.md`, `simulations.md` | SIM refs | Full archetypes + SIM port |
| Wave 5 — Commands | 🟢 | nine `commands/*.md` | `/venom` hub | Plugin-free; Task delegation |
| Wave 6 — Skill | 🟢 | `skills/venom-deep/SKILL.md` | `/venom-deep` | Avoids `/venom` name clash (BDEC-04) |
| Wave 7 — Rules | 🟢 | `venom-standards.md` | — | `.venom` not `.unshelled` |
| Wave 8 — Platform Files | 🟢 | `template/README.md`, `workflow-state.example.json`, `.gitignore.template`; parent `README.md`, `INSTALL.md`, `CHANGELOG.md` v3 | manual | BDEC-05: example workflow state, not committed runtime JSON |
| Wave 9 — Sync | 🟢 | `cursor/template/.venom/state/workflow-state.example.json`, `learnings/instincts.yaml`; `INSTALL`/`README`; `platforms/cursor/CHANGELOG` v3.10; `EAT.md`, `MANIFEST.md`, `platforms/INDEX.md` | — | Agents/hooks/commands explicitly deferred in `WAVE9-SYNC.md` |

---

## Completed Files

- **Removed:** `.claude/agents/venom-bridge.md` (communicator absorbs bridge role per design axiom).
- **Knowledge:** `simulations.md` full SIM-01–10 port; `energy-matching.md` nine archetypes; `profile.md` universal template.
- **Hooks:** `user-prompt-submit.js`, `pre-tool-use.js`, `post-tool-use.js`, `session-end.js`; upgraded `session-start.js`, `pre-compact.js`.
- **Agents (Wave 3):** All nine minds rewritten to `05-design/AGENTS-SPEC.md` — universal descriptions, loop/stuck protocols, machine-parseable outputs (`SHIP|REWORK`, `DONE|FAILED`, context map sections).
- **Wave 4–7:** Knowledge upgraded; all lifecycle commands; `venom-deep` skill; `venom-standards` memory section fixed.
- **Post–Wave 9:** `platforms/claude-code/HEADLESS-PLAYBOOK.md`; `04-synthesis/` status reconciled (v3 closed); master rethink `INDEX.md` updated.
- **CI:** `.github/workflows/claude-code-template.yml` runs `smoke-hooks.sh` on `platforms/claude-code/**` changes.

---

## Final Alive Test Results

**Automated (hooks only):** from repo root, `bash platforms/claude-code/smoke-hooks.sh` — valid JSON stdout from each script against a temp copy of the template.

*(manual QA — TUI / disposition)*

- [ ] Open Claude Code, type "hi" → VENOM responds, not generic Claude
- [ ] Type "fix this its broken" → Churchill mode, 2-3 lines
- [ ] Type "how does this work" → Feynman mode, analogy first
- [ ] Type "/venom" → shows state + commands
- [ ] Type "/venom-spec build login page" → starts Phase 0
- [ ] Trigger context compaction → VENOM survives, knows identity
- [ ] Restart session → resumes from ACTIVE.md if task was in progress
- [ ] Run dangerous command → blocked with explanation
- [ ] Run same command 3x → stall warning fires
- [ ] Run in headless mode (`claude -p`) → concise output, no markdown decorations

---

## v3.0 Release Notes

**Version:** 3.0.0  
**Date:** 2026-03-30 (template + docs; optional git tag `v3.0.0` anytime)

**What's new:** `.venom/` brain in template; six hooks (including UserPromptSubmit, Pre/PostToolUse, SessionEnd); lifecycle commands; `venom-deep` skill; `simulations.md` SIM-01–10; nine agents respecified; `workflow-state.example.json`.

**What changed:** Memory and session-start use `.venom/` only (no `.unshelled/memory`); `venom-bridge` agent removed; `/venom-deep` replaces monolithic `VENOM` skill name collision.

**What's removed:** `.unshelled` paths from hooks/docs; `venom-bridge.md`.

**Migration from v2.4:** Copy `template/.claude`, `template/.venom`, `CLAUDE.md`; merge local settings; run `/venom-eat`; use `/venom-deep` for extended surface. See `platforms/claude-code/CHANGELOG.md`.
