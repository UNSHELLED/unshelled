# Antigravity Eat — Work Area Index

**Purpose:** One place to see all refactor assets and how they fit together.
**Last updated:** 2026-03-09 (all files updated with verified platform facts)

---

## Status

- **Old template:** Archived at `platforms/antigravity/archive/template-legacy-2026-03/`
- **New template:** Empty skeleton at `platforms/antigravity/template/` (ready for fresh build)
- **Work area:** `.venom/work/antigravity-eat/` (this folder)
- **Platform facts:** ✅ Verified via deep `.gemini/` anatomy scan (2026-03-09)
- **Naming:** ✅ `session-artifacts` locked everywhere (not session-capture)
- **Pre-phase fixes:** 3 identified, 2 applied in this update batch

---

## Work Files (Read Order)

| File | Purpose | Status |
|------|---------|--------|
| **INDEX.md** (this file) | Navigation. Start here. | ✅ Current |
| **REFACTOR-PLAN.md** | Why fresh build, what was done, source of truth, build order, 3 pre-phase fixes | ✅ Updated |
| **COMPLETE-CASE.md** | The "great eat." Full scope: Antigravity real anatomy, VENOM system, template must-haves, dependencies | ✅ Updated |
| **DRAFT-REQUIREMENTS.md** | What MUST be in the template. 12 components. Enhance vs new. Naming locked. Validation tests. | ✅ Updated |
| **COMPARISON.md** | Cursor vs Antigravity. Real verified facts. Memory, agents, verification, context, artifacts, state, rules, skills. | ✅ Updated |
| **CHECKLIST.md** | Execution: pre-phase fixes + 7 phases, 70+ tasks. From-scratch build order. Read gates for Phase 2. | ✅ Updated |

---

## What Changed in This Update (2026-03-09)

All 6 files updated based on deep `.gemini/` anatomy scan. Key additions across all files:

1. **Pencil MCP decision** — `pencil` server is personal/Cursor-specific. NOT in template. Document in INSTALL.md as optional.
2. **Session-artifacts naming** — `session-artifacts` everywhere. `session-capture` eliminated.
3. **Source read gates** — Phase 2 (systems.md, protocols.md) MUST read `OCTOPUS-UNIVERSAL-MASTER-PLAN.md` (948 lines) + `CURSOR-LEARNINGS.md` (414 chats) before writing.
4. **Global workflows discovery** — `.gemini/jetski*/global_workflows/` exists as native Antigravity path. Documented in COMPARISON + INSTALL plan.
5. **Real `brain/{uuid}/` structure** — `.tempmediaStorage/dom_{timestamp}.txt` path confirmed and added everywhere.
6. **Real `state-log.csv` schema** — `timestamp,state,session_id,duration,trigger` confirmed. Updated in DRAFT-REQUIREMENTS + CHECKLIST.
7. **Real `code_tracker/` file naming** — `{md5hash}_{filename}.{ext}` documented.
8. **Real state thresholds confirmed** — cortisol 45min, adrenaline 25min, flow 120min, etc.
9. **Antigravity version locked** — 1.107.0 (IDE 1.18.4), stable 2026-02-20, Node 22.20.0, Open VSX marketplace.
10. **`session-artifacts` augments, not replaces** — platform already generates task.md, plan, walkthrough; skill adds decisions.md, risks.md, richer walkthrough.

---

## Source of Truth (Do Not Copy From Archive)

- **VENOM identity/systems:** `.cursor/`, `consciousness/`, `protocols/`, `agents/`, `knowledge/neurochemistry.md`
- **Distilled VENOM wisdom:** `code_tracker/active/no_repo/MEMORY.md` (450 lines)
- **Full OCTOPUS analysis:** `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md` (948 lines)
- **Pattern data:** `code_tracker/active/no_repo/CURSOR-LEARNINGS.md` (414 chats, 2584 pairs)
- **Antigravity platform:** Confirmed via `.gemini/` anatomy (see COMPLETE-CASE.md §1)
- **Archive:** `platforms/antigravity/archive/template-legacy-2026-03/` — reference only

---

## Target Template Structure

```
platforms/antigravity/template/
├── GEMINI.md                          # 300+ lines (build first; no file deps)
├── mcp_config.json                    # github + browser-tools (${GITHUB_TOKEN})
├── .agent/
│   ├── rules/
│   │   ├── the-art-of-venom.md       # Enhanced (250-300 lines)
│   │   ├── systems.md                 # 🆕 (400-500 lines; read OCTOPUS first)
│   │   └── protocols.md               # 🆕 (300-350 lines; read pushback.md first)
│   ├── workflows/
│   │   ├── venom.md                   # Enhanced (Jetski + artifacts + memory)
│   │   ├── init.md                    # Enhanced (state baseline + richer artifacts)
│   │   └── eat-with-proof.md         # 🆕
│   ├── skills/
│   │   ├── neurochemistry/            # ✅ Keep as-is
│   │   ├── nine-minds-synthesis/      # ✅ Keep as-is
│   │   ├── jetski-visual-audit/       # Enhanced (.tempmediaStorage/ protocol)
│   │   ├── session-artifacts/         # 🆕 (augments brain/{uuid}/)
│   │   ├── cross-project-memory/      # 🆕 (code_tracker/active/no_repo/)
│   │   └── state-aware/               # 🆕 (real state-log.csv schema)
│   └── learnings/                     # .gitkeep (user fills)
├── INSTALL.md                         # Install steps + optional MCP + global workflows doc
├── VALIDATION.md                      # 10-test suite
└── README.md                          # Overview
```

---

## Three Decisions Made in This Update

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Pencil MCP in template? | ❌ No | Cursor extension path, personal install, not portable |
| Skill name? | `session-artifacts` | Used in majority of files; session-capture was the outlier |
| Global workflows in template? | Project-level `.agent/workflows/` | Portability; global path documented in INSTALL.md |

---

## Next Action

Execute **Phase 1** in CHECKLIST.md:

1. Read `code_tracker/active/no_repo/MEMORY.md` (450 lines) for baseline
2. Build **GEMINI.md** (300+ lines) from origin + COMPLETE-CASE.md §2
3. No content from archive. No Kariem-specific content (use `[Owner]` placeholder).

Phase 2 (systems.md, protocols.md) has mandatory pre-reads: OCTOPUS plan + CURSOR-LEARNINGS. Don't skip.
