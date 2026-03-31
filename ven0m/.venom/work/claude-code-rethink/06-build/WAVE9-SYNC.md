# Wave 9 — Sync to Origin (checklist)

> **Do not** bulk-copy `platforms/claude-code/template/.claude/` into `platforms/cursor/template/`. Cursor and Claude Code differ: rules format, hooks surface, commands/skills naming. Sync **by intent**, file by file, after diff review.

## Preconditions

- [x] Waves 0–8 verified (`06-build/DONE.md` alive tests as applicable — manual QA still optional).
- [x] `platforms/claude-code/CHANGELOG.md` v3.0 entry present.

## Claude Code (this repo)

- [ ] Tag or release note when ready: `v3.0.0` (optional git tag — maintainer).
- [x] `platforms/INDEX.md` — claude-code row notes v3 + `.venom/`.
- [x] `MANIFEST.md` — Platforms paragraph mentions Claude Code template v3.0.

## Cursor template (`platforms/cursor/template/`)

For each candidate port, ask: *Does Cursor support this primitive?* If no, document in Cursor `INSTALL.md` or `CHANGELOG` as “Claude Code only.”

- [x] **`.venom/`** — `state/workflow-state.example.json`, `learnings/instincts.yaml`; README + INSTALL updated (`CHANGELOG` v3.10).
- [ ] **Knowledge / soul / protocols** — deferred (already differ by product; no file copy this wave).
- [ ] **Agents** — deferred (Cursor = rules + Task tool; no `.claude/agents` mirror).
- [ ] **Hooks** — deferred (do not copy `settings.json` hooks verbatim).
- [ ] **Commands** — deferred (Cursor `/venom` hub already; lifecycle commands are Claude Code slash files).

## Root / digest

- [x] **`platforms/EAT.md`** — Claude Code row + L7 matrix + gap #1 corrected for v3 (`.venom/`, 9 agents, `venom-deep`, no bridge).
- [x] **`platforms/cursor/CHANGELOG.md`** — v3.10 entry for template changes.

## Done criteria

Wave 9 is **complete** for this pass: intentional `.venom` parity and documentation drift fixes are merged. **Deferred** items above are explicit non-goals until a future “Cursor commands parity” or “agent doc sync” initiative.
