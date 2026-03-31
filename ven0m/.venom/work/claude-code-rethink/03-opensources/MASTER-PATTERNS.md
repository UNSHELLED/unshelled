# Master Patterns — All Open-Source Intelligence

> Grows as each source is eaten. This is the synthesis input for Phase 04.

**Rule:** Only patterns that are genuinely new or better than what VENOM has. Not "we do this too." Only "this is better than what we do" or "we don't do this."

---

## How To Add

After eating a source, add its best patterns here:

```
## Pattern: [Name]
**Source:** [repo name + stars]
**What it is:** [one paragraph — be specific]
**Why it matters for VENOM:** [why this specifically, not generic]
**How to implement in Claude Code:** [concrete approach]
**Evidence it works:** [adoption, stars, documented outcomes]
**Status:** [ ] Not adopted | [x] Adopted in [file]
```

---

## Patterns (grows here)

### Independent user story testability (spec-kit)

**Source:** github/spec-kit (`templates/spec-template.md`)  
**What it is:** Each user story must be **prioritized** (P1…) and **independently testable** — a single story can ship as an MVP slice.  
**Why it matters for VENOM:** Stops monolithic specs that can’t be verified incrementally.  
**How to implement in Claude Code:** `/venom-spec` (or speckit) outputs **Given/When/Then** + **Independent Test** per story; CLAUDE.md reminds agents not to merge stories into one undeliverable blob.  
**Evidence it works:** Spec Kit adoption, template used across Specify CLI installs.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** all three

---

### Foundational phase gate (spec-kit)

**Source:** github/spec-kit (`templates/tasks-template.md`)  
**What it is:** **Phase 2** “Foundational” blocks **all** user-story work until shared infra (auth, DB, routing…) exists; explicit checkpoint before parallel story work.  
**Why it matters for VENOM:** Prevents half-built stories on missing shared layers.  
**How to implement in Claude Code:** `tasks.md` template section in template repo; `/venom-build` refuses story waves until foundation checklist cleared (manual or hook).  
**Evidence it works:** Same template, widely copied.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** all three

---

### Nyquist validation contract (GSD)

**Source:** get-shit-done (`docs/USER-GUIDE.md` — Nyquist / validation architecture)  
**What it is:** Before implementation, map **automated tests** to **phase requirements**; plans without **verify commands** per task fail plan-checker (**8th dimension**). Output `{phase}-VALIDATION.md`.  
**Why it matters for VENOM:** Closes the gap between “planned” and “provably checked” — critical for **headless** CI.  
**How to implement in Claude Code:** Extend `/venom-check` or plan template to require **test command** per task; `VALIDATION.md` beside phase PLAN.  
**Evidence it works:** GSD documents feedback loop; used in production workflows per README quotes.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** all three (strongest for headless agents + CI)

---

### Folder-per-change + archive (OpenSpec)

**Source:** Fission-AI/OpenSpec (README + `docs/opsx.md`)  
**What it is:** Each change = **`openspec/changes/<slug>/`** with proposal/specs/design/tasks; **`/opsx:archive`** moves to **`archive/`** and merges learning into canonical specs.  
**Why it matters for VENOM:** `.venom/work/features/` can mirror **one folder per feature** instead of one drifting `ACTIVE.md`.  
**How to implement in Claude Code:** Document convention + optional skill `venom-archive-change`; no npm dependency required.  
**Evidence it works:** OpenSpec downloads + workflow docs.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** all three

---

### Task graph + `next` + complexity-ordered expand (Task Master)

**Source:** eyaltoledano/claude-task-master (`docs/task-structure.md`, `docs/command-reference.md`)  
**What it is:** **`tasks.json`** with **`dependencies: [ids]`**, **`analyze-complexity`** (1–10), **`expand`** processes **highest complexity first**, **`next`** returns **ready** task.  
**Why it matters for VENOM:** Headless agents need **deterministic** “what now?” — stronger than flat markdown lists.  
**How to implement in Claude Code:** Optional **JSON** task layer under `.venom/work/` OR MCP `task-master-ai`; or spec **minimal** `tasks.json` in template without full Task Master install.  
**Evidence it works:** Large user base, multi-IDE MCP install path.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** headless agents + any dev (CLI); optional for pure-markdown shops

---

### Context + rules injection per artifact (OpenSpec OPSX)

**Source:** OpenSpec `docs/opsx.md` (`openspec/config.yaml`)  
**What it is:** Project **`context`** block (50KB cap) + **`rules`** per artifact ID prepended to generation prompts in `<context>` / `<rules>` XML.  
**Why it matters for VENOM:** Same idea as **profile** + **per-command** constraints — centralize without duplicating in every skill.  
**How to implement in Claude Code:** `.venom/profiles/*.yaml` + hook **`UserPromptSubmit`** `additionalContext` merge order documented.  
**Evidence it works:** OpenSpec config validation + precedence docs.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** all three

---

### Rules tiering + session snapshot protocol (Vibe Framework)

**Source:** vibe-framework (`README.md` — Context Management)  
**What it is:** **`rules_essential`** ~2K every response; larger **`rules_full`** / **`skills.md`** only when needed; **10–12 messages** → mandatory **`/snapshot`**; **debug >5** turns unresolved → STOP → snapshot → new chat; **>70% context** → STOP and split.  
**Why it matters for VENOM:** Same problem as compaction — **proactive** boundaries instead of waiting for rot.  
**How to implement in Claude Code:** Document in CLAUDE.md + **PreCompact** / **UserPromptSubmit** hints; optional **SESSION_LOG** convention under `.venom/work/`.  
**Evidence it works:** Framework ships to multiple IDEs; explicit DoD checklist.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** all three

---

### Strict OUTPUT FORMAT in prompt files (Fabric)

**Source:** danielmiessler/fabric (`data/patterns/review_code/system.md`)  
**What it is:** Patterns use **ROLE → TASK → STEPS → OUTPUT FORMAT** with **fixed markdown headings** (e.g. Prioritized Recommendations before Detailed Feedback).  
**Why it matters for VENOM:** **Headless** and **OpenClaw** need **predictable** sections — matches Holmes/Churchill review style in rules.  
**How to implement in Claude Code:** Require **same block** in **venom-reviewer** skill + `/venom-check` output contract.  
**Evidence it works:** Hundreds of patterns, CLI + API consumers.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** all three

---

### Review-on-submit with diff in loop (SWE-agent)

**Source:** SWE-agent (`config/default.yaml` — `review_on_submit_m`, SUBMIT_REVIEW_MESSAGES)  
**What it is:** Before finish, model gets **diff** + checklist (re-run repro, remove repro script, revert test edits, resubmit).  
**Why it matters for VENOM:** Catches **premature** “done” without reconciling artifacts — stronger than a single test run.  
**How to implement in Claude Code:** **Stop** hook or **manual gate** skill “submit-for-review” that requires **git diff** summary in prompt.  
**Evidence it works:** SWE-bench results; academic lineage.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** headless agents + CI (diff is parseable)

---

### AGENTS.md → path-scoped rules sync (claude-extensions)

**Source:** claude-contrib/claude-extensions (`plugins/agent-rules`)  
**What it is:** On session start, sync **`AGENTS.md`** trees to **`.claude/rules/agents/`** with **`paths:`** frontmatter matching source folder.  
**Why it matters for VENOM:** Zero-maintenance **monorepo** conventions — same as multi-package **AGENTS.md** pattern.  
**How to implement in Claude Code:** Recommend **plugin** in template docs OR replicate sync in **SessionStart** hook script.  
**Evidence it works:** Official marketplace extension; CI validates repo.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** any dev (multi-package); headless if rules pre-generated in CI

---

### Compact vs Convoy + DAG parallel (OpenCastle)

**Source:** monkilabs/opencastle (`ARCHITECTURE.md`)  
**What it is:** **Compact** = low complexity, one subagent at a time; **Convoy** = `.convoy.yml`, **DAG**, parallel specialists; **model tiering** by task class.  
**Why it matters for VENOM:** Clear **when** to use **waves** vs **single-thread** — maps to `/venom-build` wave vs simple task.  
**How to implement in Claude Code:** Document **threshold** (e.g. >N files or **complexity score**) for **Agent** parallel fan-out vs serial.  
**Evidence it works:** Public CLI + docs; convoy **crash-recoverable** narrative.  
**Status:** [ ] Not adopted | [ ] Adopted in [file]

**Audience:** all three (YAML spec for agents)

---

## Already-Have (don't re-invent)

Patterns VENOM already implements well. Document here to avoid re-adopting what we have.

| Pattern | Where in VENOM | Status |
|---------|---------------|--------|
| Constitution-first | `/venom-spec` Phase 0 | ✅ Have |
| Wave execution | `/venom-build` + AGENTS.md | ✅ Have |
| Verification gates | `/venom-check` + AGENTS.md | ✅ Have |
| Nine minds texture | CLAUDE.md + all agents | ✅ Have |
| Energy matching | `energy-matching.md` + CLAUDE.md | ✅ Have |
| Pushback scale 0-3 | CLAUDE.md + protocols.md | ✅ Have |
| Rule distribution (SSOT → templates) | `platforms/` structure | ✅ Have |
| Memory persistence (.venom/) | All platforms | ✅ Have |
| Autonomous loop protocol | AGENTS.md (OpenCode) | ✅ Have (not in Claude Code yet) |
| Pattern-as-file (skills) | `.claude/skills/` | ✅ Have |
| Hook architecture | `venom-core.ts` (OpenCode) | ✅ Have (not in Claude Code yet) |
