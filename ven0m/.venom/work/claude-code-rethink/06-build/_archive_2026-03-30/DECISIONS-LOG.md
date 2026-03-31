# Build Decisions Log

> Decisions made DURING the build that deviate from or extend the spec.
> Not design decisions (those live in 04-synthesis/DECISIONS.md and 05-design/).
> Build-time discoveries, deviations, and clarifications.

**Format:** See template below.

---

## Log

### BDEC-01: `Agent` + `Task` both in `settings.json` allow list

**Date:** 2026-03-30  
**Phase:** Wave 1 — `settings.json`  
**Discovered:** Phase 02 `AGENTS.md` documents `Agent` as the current tool name with `Task` as alias; some CLI versions may only recognize one token in permissions.  
**Decision:** Include **both** `"Task"` and `"Agent"` in `permissions.allow`. Remove one if a schema or runtime rejects duplicates.  
**Spec impact:** None — aligns with anatomy doc.  
**Affects:** None.

### BDEC-02: Ship `simulations.md` as stub during Wave 1

**Date:** 2026-03-30  
**Phase:** Wave 1 — `CLAUDE.md`  
**Discovered:** `CLAUDE.md` references `@.claude/knowledge/simulations.md` per design spec; file was missing from template.  
**Decision:** Added concise SIM-01–SIM-10 stub; full port can replace content in Wave 4.  
**Spec impact:** Optional note in `FILE-STRUCTURE.md` already allows `simulations.md` as NEW.  
**Affects:** Wave 4 knowledge upgrade.

### BDEC-03: Agent `model` frontmatter from AGENTS-SPEC

**Date:** 2026-03-30  
**Phase:** Wave 3 — all `.claude/agents/*.md`  
**Discovered:** Spec names `claude-opus-4-5`, `claude-sonnet-4-5`, `claude-haiku-4-5`; product model strings change over time.  
**Decision:** Ship spec names; template consumers adjust frontmatter if their CLI rejects a string.  
**Spec impact:** None.  
**Affects:** Install troubleshooting only.

### BDEC-04: Skill renamed `venom-deep` — avoid `/venom` vs skill name collision

**Date:** 2026-03-30  
**Phase:** Wave 6  
**Discovered:** Claude Code merges commands and skills; **skill wins** on same slash name — a skill named `VENOM` would override `.claude/commands/venom.md`.  
**Decision:** Move extended surface to **`.claude/skills/venom-deep/SKILL.md`** with `name: venom-deep`. **`/venom`** remains the short hub command. `CLAUDE.md` `@` import updated.  
**Spec impact:** `FILE-STRUCTURE.md` / install docs should say `/venom-deep` for full manual.  
**Affects:** Users who expected `/VENOM` skill — use `/venom-deep` or natural language.

### BDEC-05: Ship `workflow-state.example.json` instead of committed `workflow-state.json`

**Date:** 2026-03-30  
**Phase:** Wave 8 — `.venom/state/`  
**Discovered:** TASKS.md originally asked for a stub `workflow-state.json` in-repo; that invites merge noise and implies a fixed runtime artifact.  
**Decision:** Ship **`.venom/state/workflow-state.example.json`** only. Runtime path remains **`.venom/state/workflow-state.json`** (created by `/venom-spec`, `/venom-eat`, etc.). Document in INSTALL, `venom-spec`, and `.gitignore.template`.  
**Spec impact:** `TASKS.md` Wave 8 updated to match.  
**Affects:** Install docs; no hook changes.

### BDEC-06: Wave 9 — Cursor `.venom` parity + `EAT.md` truth fix

**Date:** 2026-03-30  
**Phase:** Wave 9 — origin sync  
**Discovered:** `platforms/EAT.md` still claimed Claude Code had no template `.venom/` and 10 agents + `VENOM` skill; v3 template contradicts that.  
**Decision:** Add `workflow-state.example.json` + `instincts.yaml` to `platforms/cursor/template/.venom/`; update Cursor `INSTALL`, `.venom/README`, `CHANGELOG` v3.10; correct `EAT.md` matrix, gap #1, agent roster row, skill row; update `MANIFEST.md` + `platforms/INDEX.md`. No bulk `.claude/` → `.cursor/` copy.  
**Spec impact:** Rethink `INDEX.md` “template audit” bullets refreshed.  
**Affects:** Anyone using `EAT.md` as SSOT for kit layout.

### BDEC-07: `smoke-hooks.sh` — non-mutating hook CI check

**Date:** 2026-03-30  
**Phase:** Post–Wave 9  
**Discovered:** `DONE.md` alive tests were TUI-only; hook regressions had no automated guard.  
**Decision:** Add **`platforms/claude-code/smoke-hooks.sh`** — `cp -a` template to `mktemp`, pipe fixture stdin to each of the six hooks, **`JSON.parse` stdout**. Document in `INSTALL.md`, `README.md`, `POST-V3.md`, `DONE.md`.  
**Spec impact:** None.  
**Affects:** CI wiring (optional).

---

## Template

```markdown
### BDEC-XX: [Title]

**Date:** [ISO date]
**Phase:** Wave [N] — [file being built]
**Discovered:** [what was found during build that the spec didn't account for]
**Decision:** [what was decided]
**Spec impact:** [did the spec need updating? which file?]
**Affects:** [which other build tasks does this affect?]
```

---

## Notes

- Log every deviation, no matter how small.
- If a spec section is wrong, update the spec AND log here.
- If Phase 02 research reveals a hook API doesn't work as designed, log here and update HOOKS-SPEC.md.
- If an agent from v2.4 is actually better than the OpenCode version, log it here.
