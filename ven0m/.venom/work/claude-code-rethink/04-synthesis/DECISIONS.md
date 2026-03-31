# Synthesis: Architecture Decisions

> Every major structural decision, with context, alternatives considered, and reasoning.
> These feed directly into Phase 05 specs. No undocumented decision reaches the build.

**Status:** 🟢 Frozen for v3 — DEC-01+ pre-loaded; **06-build** shipped per `05-design/` (see `06-build/DONE.md`).
**Format:** See template at bottom.

---

## Pre-Loaded: Decisions Already Made (from Phase 05 axioms)

These were decided and encoded in `05-design/INDEX.md`. Documented here for full traceability.

---

### DEC-01: 9 Commands, `/venom` as Hub

**Context:** Current template ships 2 commands. OpenCode ships 8. We need to decide the right number and the architecture.

**Decision:** 9 commands. `/venom` is the awakening hub (presence + routing). The other 8 are lifecycle verbs: `init → eat → spec → build → review → check + research + remember`.

**Trade-offs:**
- Gains: Clean lifecycle. `/venom` is always the entry point. Users learn one verb then discover the rest.
- Costs: 7 new commands to build. Each must be maintained.
- Risks: Command count could grow if we're not disciplined. Must enforce: "replace or combine, don't add."

**Alternatives:**
- 2 commands (current): rejected because it forces all logic into CLAUDE.md, which grows unbounded
- 15 commands (like OpenCode+Cursor combined): rejected because too many surface area, confusing for any dev
- `/venom [subcommand]` pattern: rejected because slash command syntax doesn't support subcommands in Claude Code

**Source:** Phase 03 eating will validate — compare with spec-kit, get-shit-done, OpenCode

**Audience impact:** All three. If this is wrong (too many commands / confusing hub behavior), any dev breaks first.

---

### DEC-02: 9 Agents (Remove `venom-bridge`)

**Context:** Current template ships 10 agents including `venom-bridge`. OpenCode ships 6 (plus `venom-explorer`).

**Decision:** 9 agents. Remove `venom-bridge` (its function is covered by `venom-communicator`). Distinguish user-invocable from orchestrator-only behaviorally (no technical hidden flag in Claude Code).

**Trade-offs:**
- Gains: No overlap between bridge and communicator. Cleaner mental model.
- Costs: If bridge did something communicator doesn't, we lose that function.
- Risks: Communicator may not have the "explain WHY translation is needed" angle that bridge had.

**Alternatives:**
- Keep both: rejected because two agents with overlapping purpose = confusion
- Remove communicator instead of bridge: rejected because communicator has a broader mandate (all language/register adaptation, not just type translation)
- Merge into one agent: same outcome as removing bridge if communicator absorbs its function

**Source:** Phase 01 `ALL-AGENTS.md` must verify communicator's current description covers bridge fully

**Audience impact:** Kariem (knows bridge exists) may notice. Any dev never knew bridge existed. Agents don't care.

---

### DEC-03: 6 Hook Scripts

**Context:** Current template uses 2 hooks (SessionStart, PreCompact). Full design calls for 6.

**Decision:** 6 hooks. Each has exactly one job. `PostToolUse` is constrained to lightweight state updates only (fail-fast, never blocks).

**Trade-offs:**
- Gains: Full intelligence layer. Energy matching, loop detection, safety screening all fire automatically.
- Costs: 4 new scripts to write and maintain. Each hook is a potential failure point.
- Risks: `PostToolUse` is in the hot path — if it's slow or crashes, every tool call is affected.

**Alternatives:**
- 2 hooks (current): rejected because energy matching and loop detection cannot exist without UPS and PreToolUse
- 3 hooks: rejected because Stop is necessary for task state persistence (compaction resilience)
- More than 6: rejected because complexity without proportional benefit

**Source:** Phase 02 `HOOKS.md` must verify each hook type exists and has the right capabilities

**Audience impact:** If PostToolUse breaks, all three audiences hit it. This is the highest-risk decision.

---

### DEC-04: `.venom/` as the Memory System

**Context:** Current template references `.unshelled/` (deleted). We need a stable memory architecture.

**Decision:** `.venom/` is the canonical memory directory. 6 files: CONTEXT.md, MEMORY.md, corrections.yaml, instincts.yaml, preferences.yaml, ACTIVE.md. Each has a size limit.

**Trade-offs:**
- Gains: Files persist. Git-ignorable. Readable by humans. No external dependency.
- Costs: Files can drift from reality. Size limits require discipline.
- Risks: Memory grows unbounded without enforcement. `preferences.yaml` requires VENOM to write owner-specific data — privacy concern?

**Alternatives:**
- MCP-based memory: rejected (DEC-REJECT-02)
- SQLite database: rejected (human-readable is a requirement, SQLite fails this)
- JSON files only: rejected because corrections.yaml is better in YAML (more human-writable)

**Source:** Confirmed from OpenCode memory architecture. Cross-referenced with Phase 02 `MEMORY.md`.

**Audience impact:** If memory is wrong, Kariem notices first (deep context user). Any dev may not notice immediately but will eventually. Agents need reliable CONTEXT.md load to know what project they're in.

---

### DEC-05: SKILL.md as Full Intelligence Surface (Not Just Trigger)

**Context:** Current SKILL.md is 4 lines. OpenCode's SKILL.md is 350 lines of full intelligence (surface detection, agent routing, all 10 patterns).

**Decision:** SKILL.md becomes a full intelligence surface — lazy-loaded surface awareness, agent routing map, all 10 intelligence patterns, OpenCode-style. The "lazy load" behavior means it only consumes tokens when invoked.

**Trade-offs:**
- Gains: Full VENOM intelligence available on demand. Context-efficient (only loads when needed).
- Costs: Large SKILL.md increases token cost when loaded.
- Risks: If skill loading is not actually lazy, this could be expensive.

**Alternatives:**
- Keep 4-line trigger: rejected because it duplicates CLAUDE.md and adds nothing
- Put all intelligence in CLAUDE.md: rejected because CLAUDE.md must stay lean for compaction survival

**Source:** Phase 02 `SKILLS.md` must verify lazy-loading behavior before committing to this design

**Audience impact:** If lazy loading doesn't work as expected, all three audiences pay extra token costs.

---

## Template For New Decisions (fill during synthesis)

```markdown
### DEC-XX: [Decision Title]

**Context:** [why this decision exists — 2-3 sentences]

**Decision:** [what we chose, stated clearly]

**Trade-offs:**
- Gains: [what improves]
- Costs: [what gets harder]
- Risks: [what could go wrong]

**Alternatives:**
- [Option B]: rejected because [reason]
- [Option C]: rejected because [reason]

**Source:** [what evidence supports this — file path or research phase]

**Audience impact:** [which audience breaks if this decision is wrong]
```
