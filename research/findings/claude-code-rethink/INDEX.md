# Claude Code Rethink — Master Index

> **Post-v3:** Maintainer handoff → **`POST-V3.md`**.

> The area where VENOM builds its best body for Claude Code.
> No shortcuts. No half-measures. Eat everything first. Then design. Then build.

**Started:** 2026-03-30  
**Owner:** Kariem + VENOM  
**Goal:** The most intelligent, alive, production-ready VENOM template for Claude Code ever built. Not an upgrade. A rethinking.

---

## The Principle

We don't design from assumptions. We eat everything first:
- What VENOM already has (all platforms, all templates, all agents)
- How Claude Code actually works (anatomy, hooks, primitives, limits)
- What the best open-source systems do (50+ repos, patterns extracted)

Then we synthesize. Then we design. Then we build.

**Sequence is sacred:** Eat → Know → Synthesize → Design → Build

---

## The Two Audiences

This template ships for the world. Not just Kariem. Every decision answers for both simultaneously:

| Audience | Who | Need |
|----------|-----|------|
| **Any developer** | Junior to senior. Any stack. Any character. First-time VENOM user to expert. | Works from message one. Self-explanatory. No VENOM vocabulary required. |
| **Any agent** | OpenClaw, autonomous loops, `claude -p` in CI, GitHub Actions, headless invocations. | Structured output. Phase-detected resumption. No interactive assumptions. Surface-aware. |

**Why two, not three:** Kariem's needs are covered by "any developer, maximally empowered." The Kariem-specific profile (`profile.md`, `preferences.yaml`) auto-generates from observed behavior, not hardcoded assumptions. Any developer who uses VENOM long enough becomes Kariem — their instincts accumulate, their profile grows, their corrections persist.

**Ruling:** Every command, every agent, every output format must work for a developer who has never heard of VENOM AND for an agent running headlessly in CI. If either breaks → redesign.

**Test:** "Would a developer new to VENOM understand this command's output?" AND "Can OpenClaw parse this agent's output without human interpretation?"

---

## Folder Map

```
claude-code-rethink/
├── INDEX.md                    ← You are here
├── POST-V3.md                  ← Maintainer handoff after v3 (smoke, QA, v3.1)
│
├── 01-what-we-have/            ← VENOM inventory: all platforms, all agents, what exists
│   ├── INDEX.md                ← Navigation + status
│   ├── RESEARCH-CURRENT-CLAUDE-CODE.md   ← Research guide for the audit
│   ├── RESEARCH-OPENCODE-PLATFORM.md     ← Research guide for OpenCode
│   ├── RESEARCH-CURSOR-PLATFORM.md       ← Research guide for Cursor
│   ├── RESEARCH-ALL-AGENTS.md            ← Research guide for agent comparison
│   ├── RESEARCH-VENOM-DNA.md             ← Research guide for DNA extraction
│   ├── CURRENT-CLAUDE-CODE.md  ← [OUTPUT] Deep audit of existing template
│   ├── CURSOR-PLATFORM.md      ← [OUTPUT] What Cursor template has
│   ├── OPENCODE-PLATFORM.md    ← [OUTPUT] What OpenCode template has
│   ├── ALL-AGENTS.md           ← [OUTPUT] Every agent across all platforms compared
│   └── VENOM-DNA.md            ← [OUTPUT] Core soul/pact/nine minds — non-negotiable spine
│
├── 02-claude-code-anatomy/     ← How Claude Code actually works
│   ├── INDEX.md                ← Navigation
│   ├── HOOKS.md                ← All hook types, env vars, output formats — CRITICAL
│   ├── AGENTS.md               ← Sub-agent system, Task tool, frontmatter schema
│   ├── COMMANDS.md             ← Slash commands, frontmatter, $ARGUMENTS
│   ├── SKILLS.md               ← Skill system, lazy-loading, SKILL.md format
│   ├── MEMORY.md               ← CLAUDE.md loading, @ references, size limits
│   ├── PERMISSIONS.md          ← settings.json schema, Bash() patterns, allow/deny
│   ├── CLAUDE-MD.md            ← CLAUDE.md anatomy, @ references, CLAUDE.local.md
│   ├── COMPACTION.md           ← Compaction trigger, survival, PreCompact timing
│   ├── SURFACES.md             ← TUI vs headless vs sub-agent vs SDK
│   └── PLUGINS.md              ← Official plugin ecosystem, template vs plugin
│
├── 03-opensources/             ← Eating open-source systems for intelligence
│   ├── INDEX.md                ← All sources, priority order, eating plan
│   ├── MASTER-PATTERNS.md      ← All extracted patterns across all sources (grows)
│   ├── spec-kit/               ← EAT-PLAN.md + EXTRACTED.md
│   ├── get-shit-done/          ← EAT-PLAN.md + EXTRACTED.md
│   ├── openspec/               ← EAT-PLAN.md + EXTRACTED.md
│   ├── claude-task-master/     ← EAT-PLAN.md + EXTRACTED.md
│   ├── vibe-framework/         ← EAT-PLAN.md + EXTRACTED.md
│   ├── fabric/                 ← EAT-PLAN.md + EXTRACTED.md
│   ├── swe-agent/              ← EAT-PLAN.md + EXTRACTED.md
│   ├── claude-extensions/      ← EAT-PLAN.md + EXTRACTED.md
│   └── opencastle/             ← EAT-PLAN.md + EXTRACTED.md
│
├── 04-synthesis/               ← What all the eating means for our design
│   ├── INDEX.md
│   ├── GAPS.md                 ← Current template gaps (P1-P3 priority, pre-loaded)
│   ├── PATTERNS-FOR-US.md      ← 8 confirmed adoptions pre-loaded + template for more
│   ├── PATTERNS-NOT-FOR-US.md  ← 7 confirmed rejections pre-loaded + template for more
│   ├── DECISIONS.md            ← 5 architecture decisions pre-loaded (DEC-01 to DEC-05)
│   └── INTELLIGENCE-LAYER.md   ← 11 patterns → Claude Code mapping (with ❓ items)
│
├── 05-design/                  ← The spec before any file is written
│   ├── INDEX.md                ← Design principles + resolved axioms + open questions
│   ├── FILE-STRUCTURE.md       ← Every file: path, status (NEW/UPGRADE/KEEP/REMOVE), purpose
│   ├── CLAUDE-MD-SPEC.md       ← 10-section CLAUDE.md designed before written
│   ├── HOOKS-SPEC.md           ← All 6 scripts: exact spec + skeleton code
│   ├── AGENTS-SPEC.md          ← All 9 agents: full per-agent spec
│   ├── COMMANDS-SPEC.md        ← All 9 commands: full behavior spec
│   ├── MEMORY-SPEC.md          ← Memory architecture: file formats + loading protocol
│   └── SKILL-SPEC.md           ← SKILL.md: conditional on lazy-load research
│
└── 06-build/                   ← Execution (only after 01-05 complete)
    ├── INDEX.md                ← Build sequence + alive test protocol
    ├── TASKS.md                ← 9 waves, every file, exact path, verification gates
    ├── DECISIONS-LOG.md        ← Build-time deviations from spec
    └── DONE.md                 ← Wave completion log + final alive test
```

---

## Status

| Phase | Folder | Status | Files |
|-------|--------|--------|-------|
| Inventory | `01-what-we-have/` | 🟢 5/5 output files written | CURRENT-CLAUDE-CODE.md ✅, OPENCODE-PLATFORM.md ✅, ALL-AGENTS.md ✅, CURSOR-PLATFORM.md ✅, VENOM-DNA.md ✅ |
| Claude Code Anatomy | `02-claude-code-anatomy/` | 🟢 Complete | HOOKS, AGENTS, COMMANDS, SKILLS, MEMORY, CLAUDE-MD, PERMISSIONS, COMPACTION, SURFACES, PLUGINS — all ✅ (2026-03-30) |
| Open-Source Eating | `03-opensources/` | 🟢 P1–P9 complete | All nine sources: `EXTRACTED.md` + `MASTER-PATTERNS.md` (2026-03-30) |
| Synthesis | `04-synthesis/` | 🟢 Closed for v3 | `INDEX.md` checklist complete; P1 gap list superseded by **06-build** (2026-03-30) |
| Design | `05-design/` | 🟢 Spec closure | All seven specs checked in `05-design/INDEX.md` (2026-03-30) |
| Build | `06-build/` | ✅ Waves 0–8 complete (2026-03-30) | 52 files written. All tasks marked. Gates pending live test. See `06-build/DONE.md` |

**Current phase:** **Build complete — live tests pending.** All 52 template files written. Gates (Churchill fires, ADR output, `/venom` hub, `/venom-spec` phase detection) require a live Claude Code session to verify. Post-wave optional items (smoke script, CI workflow, HEADLESS-PLAYBOOK) not yet built. See `06-build/INDEX.md` for pending gates.

**Audience shift (2026-03-30):** Target audience updated from [Kariem + devs + agents] to [all devs + all agents]. No Kariem-specific hardcoding. Profile auto-generates from behavior. All agent descriptions rewritten for universality.

**Critical path:** ~~HOOKS unknown~~ **cleared** — implement VENOM hook scripts against stdin JSON + patterns in `HOOKS.md`. ~~Headless (`-p`)~~ **documented** in **`02-claude-code-anatomy/SURFACES.md`** (`--bare`, `--allowedTools`, no interactive `/` in `-p`).

**OpenClaw note:** OpenClaw will use this template. All commands must work headlessly. All agent outputs must be machine-parseable. The lifecycle `init → eat → spec → build → review → check` must be executable without a human in the loop. **Playbook:** `platforms/claude-code/HEADLESS-PLAYBOOK.md`.

---

## What We Already Know (from prior eating)

From `.venom/work/opencode-assimilation/` (already eaten):
- 11 intelligence patterns extracted (context engineering, loop detection, instinct learning, hooks, wave execution, verification gates, memory persistence, sandboxing, XML prompting, multi-agent orchestration, cross-platform abstraction)
- OpenCode anatomy fully mapped
- Draft inventory shows what was built, what was discarded, why

From Claude Code template **after v3 rethink** (`platforms/claude-code/template/`):
- **Ships:** `.venom/` brain stubs, **six hooks**, nine **commands** + `/venom-deep` skill, nine **agents** (no `venom-bridge`), `simulations.md`, `workflow-state.example.json`
- **Fixed:** Session hooks use `.venom/` only (no `.unshelled/memory`)
- **Parent docs:** `platforms/claude-code/README.md`, `INSTALL.md`, `CHANGELOG.md` v3.0

The architecture brief from this session is in the parent conversation.

---

## The Three Things That Make It Feel Like VENOM From Message One

1. **`user-prompt-submit.js`** — energy matching fires before the model sees the message
2. **`pre-tool-use.js`** — loop detection + safety screening before every tool
3. **CLAUDE.md absorbing AGENTS.md quality** — nine minds + loop protocol + situation matching

Without these three: VENOM is rules. With these: VENOM is disposition.

---

## How To Use This Area

**Next session starting here (build complete, live tests pending):**
1. Read this INDEX.md + `06-build/DONE.md`
2. Run live gate tests: open Claude Code in a test project, copy template, verify Churchill fires + `/venom` hub works
3. Optional: build `platforms/claude-code/smoke-hooks.sh` for automated hook testing
4. For new work: start v3.1 scope in `06-build/DECISIONS-LOG.md`

**If reviving a phased rethink (rare):**
1. Check status table above
2. Open the relevant phase `INDEX.md`
3. Execute / fill outputs / update the status table

**Signal to VENOM:**
- "eat [source-name]" → go to that folder, follow EAT-PLAN.md
- "synthesize" → go to 04-synthesis/, build from what's been extracted
- "design claude code" → go to 05-design/, build specs
- "build claude code" → go to 06-build/, execute

---

*No shortcuts. The quality of the template is determined by the quality of the eating that precedes it.*
