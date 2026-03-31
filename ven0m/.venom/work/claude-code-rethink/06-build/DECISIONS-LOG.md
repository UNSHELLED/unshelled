# Build Decisions Log
**Reset:** 2026-03-30 — BDEC-01–07 carried forward from archive; new entries start BDEC-08.

> Build-time decisions only. Design decisions live in `04-synthesis/DECISIONS.md` and `05-design/`.

---

## Carried Forward (from _archive_2026-03-30/DECISIONS-LOG.md)

### BDEC-01: `Agent` + `Task` both in `settings.json` allow list
**Date:** 2026-03-30 | **Status:** Carry forward  
Phase 02 `AGENTS.md` documents `Agent` as current tool name with `Task` as alias.  
**Decision:** Include both `"Task"` and `"Agent"` in `permissions.allow`.

### BDEC-02: Ship `simulations.md` as stub during Wave 1
**Date:** 2026-03-30 | **Status:** Carry forward  
`CLAUDE.md` references `@.claude/knowledge/simulations.md`; file must exist before Wave 1 closes.  
**Decision:** Create concise SIM-01–10 stub in Wave 1 body; full port in Wave 4.

### BDEC-03: Agent `model` frontmatter from AGENTS-SPEC
**Date:** 2026-03-30 | **Status:** Carry forward  
Model strings (`claude-opus-4-5`, `claude-sonnet-4-5`, `claude-haiku-4-5`) may change.  
**Decision:** Ship spec names; template consumers adjust if CLI rejects.

### BDEC-04: Skill renamed `venom-deep` — avoid `/venom` vs skill name collision
**Date:** 2026-03-30 | **Status:** Carry forward  
Claude Code: skill wins on same slash name — skill named `venom` would override `.claude/commands/venom.md`.  
**Decision:** `skills/venom-deep/SKILL.md` with `name: venom-deep`. `/venom` = command hub. `/venom-deep` = full skill.

### BDEC-05: Ship `workflow-state.example.json` instead of committed `workflow-state.json`
**Date:** 2026-03-30 | **Status:** Carry forward  
Runtime artifact should not be in repo template; invites merge noise.  
**Decision:** `.venom/state/workflow-state.example.json` only. Runtime `.json` created by `/venom-spec`.

### BDEC-06: Cursor `.venom` parity — deferred
**Date:** 2026-03-30 | **Status:** Deferred until v3 template actually ships  
Cannot sync Cursor template until Claude Code template exists.

### BDEC-07: smoke-hooks.sh — non-mutating hook CI check
**Date:** 2026-03-30 | **Status:** Post-Wave item  
Add after Wave 8 completes. `cp -a` template to `mktemp`, pipe fixture stdin, assert JSON.parse stdout.

---

## New Entries (post-reset)

*Log entries here as build proceeds. Format:*

```markdown
### BDEC-08: [Title]
**Date:** [ISO date]  
**Phase:** Wave [N] — [file being built]  
**Discovered:** [what the spec didn't account for]  
**Decision:** [what was decided]  
**Spec impact:** [spec update needed?]  
**Affects:** [other tasks]
```
