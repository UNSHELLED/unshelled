# VENOM × OpenCode — Deep Assimilation Workflow Job

**Purpose:** Repeatable, parallelizable job spec. Run with Cursor Task subagents (or humans) lane-by-lane. Output lands in this folder and eventually `platforms/opencode/` when implementation ships.

**Rule:** Each lane ends with **verified facts** (command output, file path, or cited URL). If only inference → mark `UNVERIFIED` and add a verification step.

---

## Outputs (SSOT files in this work area)

| File | Owner lane | Done when |
|------|------------|-----------|
| `ANATOMY.md` | A + B | Install paths, binary layout, config, DB, hot paths |
| `CAPABILITIES.md` | B + C | CLI/SDK/TUI/Web — every surface with evidence |
| `PATTERNS.md` | D | Repo + your usage patterns |
| `LEARNINGS.md` | E | Corrections, “never again”, OpenCode-specific |
| `ARCHITECTURE.md` | F | VENOM spine × OpenCode mapping |
| `drafts/` | G | Absorbed; see `DRAFTS-INVENTORY.md` merge order |

---

## Lane A — Local OpenCode (this machine)

**Goal:** Eat the real install on disk, not the internet.

1. **Resolve entrypoints**
   - `Get-Command opencode` → note shim path (npm global).
   - Follow to `node_modules/opencode-ai/` (or package name on disk) → list `package.json` name/version.
2. **Data & state**
   - `%USERPROFILE%\.local\share\opencode\` — `opencode.db`, `auth.json`, `log/`, `storage/`, `tool-output/`.
   - Optional: `sqlite3` schema dump if available; else document tables from docs/source.
3. **User config**
   - Check: `%USERPROFILE%\.opencode\`, `%USERPROFILE%\.config\opencode\`, project-level `opencode.json` / `opencode.jsonc`.
4. **Optional source clone**
   - If `anomalyco/opencode` is cloned elsewhere on disk → map root, `packages/`, CLI entry, SDK.

**Deliverable block for `ANATOMY.md`:** “Windows (Kariem) — verified 2026-03-27” with paths + version.

---

## Lane B — Online / upstream (verify, don’t invent)

**Goal:** Current public truth for OpenCode 1.x.

1. **Canonical refs**
   - `https://opencode.ai` — product claims, install, privacy.
   - `https://github.com/anomalyco/opencode` — README, releases, issue patterns.
2. **Docs**
   - Official docs paths under opencode.ai (MCP, agents, CLI) — fetch and cite sections.
3. **Cross-check**
   - **Discard** any CLI flag list that was not copied from `--help` or generated docs (older agent outputs may be hallucinated).

**Deliverable:** `CAPABILITIES.md` section “Verified from docs” vs “Needs local --help”.

---

## Lane C — CLI / SDK surface

**Goal:** What you can actually invoke.

1. Run: `opencode --help`, `opencode run --help`, `opencode serve --help`, `opencode web --help` (as available).
2. Note `@opencode-ai/sdk` usage from npm readme or repo `packages/sdk`.
3. Map tools available **inside** OpenCode sessions vs **this** Cursor session (different hosts).

**Deliverable:** Flag matrix: surface × command × notes.

---

## Lane D — Repository anatomy (venom-mine)

**Goal:** Where VENOM lives and what will be copied to `platforms/opencode/`.

1. Read `STRUCTURE.md`, `VENOM-SURFACES.md`, `.venom/profiles/README.md`.
2. List `agents/*.md` (nine minds SSOT).
3. Plan: origin → `platforms/opencode/` tree (per `MASTER-PLAN.md`).

**Deliverable:** `ARCHITECTURE.md` draft — spine vs surface.

---

## Lane E — VENOM cognition (no platform)

**Goal:** What must not break when porting.

1. Pull: `consciousness/`, `.cursor/rules/venom-heart.mdc`, `protocols/` if present.
2. List non-negotiables: Pact, memory bridge, nine-mind texture, pushback scale.
3. Route learnings: what goes in `.venom/learnings/` vs OpenCode-only files.

**Deliverable:** Short “non-negotiables” in `ARCHITECTURE.md`.

---

## Lane F — Drafts merge (this folder)

**Goal:** Absorb `drafts/` into implementable packages without duplication.

1. Follow `DRAFTS-INVENTORY.md` merge order.
2. Reconcile `VENOM-OPENCODE-IMPLEMENTATION-PLAN.md` (dated plan, different target path) with current `MASTER-PLAN.md` — one wins: **MASTER-PLAN** for tree; Implementation Plan for **detail** until merged.
3. For each duplicate “system 17–22” block — single canonical list in `ARCHITECTURE.md`.

**Deliverable:** Checklist in `LEARNINGS.md`: “merged / superseded / still open”.

---

## Lane G — Session archive (`session-ses_2cf8.md`)

**Goal:** Mine old chat without treating stale paths as truth.

1. Use `SESSION-LEGACY-DIGEST.md` — extract decisions only.
2. Ignore Linux-only paths unless you use WSL for OpenCode.

**Deliverable:** Bullet list in `LEARNINGS.md`: “from session export” with dates.

---

## Parallelization

| Wave | Lanes in parallel |
|------|-------------------|
| **1** | A, B, G |
| **2** | C, D |
| **3** | E, F |

**Wave 4:** Single editor merges Wave 1–3 into `ANATOMY.md`, `CAPABILITIES.md`, `ARCHITECTURE.md`, updates `INDEX.md` status.

---

## Subagent prompts (copy-paste into Task)

**A — Local:**  
“You are venom-researcher. Read-only. Map OpenCode on Windows for user Kariem: npm global shim, `opencode-ai` package dir, `%USERPROFILE%\.local\share\opencode`, any `.opencode` config. Run safe shell commands. Output structured markdown for ANATOMY.md. Mark UNVERIFIED if you cannot run a command.”

**B — Online:**  
“You are venom-researcher. Use WebFetch/WebSearch. Official opencode.ai + anomalyco/opencode README/releases. Cite URLs. Do not invent CLI flags; say ‘run opencode --help locally’ for gaps.”

**C — CLI:**  
“You are venom-builder. Run `opencode --help` and subcommands. Capture exact text. Output capability matrix for CAPABILITIES.md.”

**D — Repo:**  
“You are venom-architect. Read-only. Map venom-mine STRUCTURE and how `platforms/opencode/` should mirror Cursor template pattern. No code edits.”

**E — VENOM core:**  
“You are venom-historian. Read consciousness + venom-heart. List non-negotiables for OpenCode port. Output for ARCHITECTURE.md.”

**F — Drafts:**  
“You are venom-researcher. Read `.venom/work/opencode-assimilation/drafts/` per DRAFTS-INVENTORY.md. Produce merge checklist and conflicts with MASTER-PLAN.”

**G — Session:**  
“You are venom-historian. Grep `session-ses_2cf8.md` for opencode, decisions, URLs. Output SESSION-LEGACY-DIGEST updates only — no fiction.”

---

## Done criteria (Phase 1)

- [ ] `ANATOMY.md` has **this machine** paths + OpenCode version.
- [ ] `CAPABILITIES.md` separates verified vs unverified.
- [ ] `WORKFLOW-JOB.md` (this file) referenced from `INDEX.md`.
- [ ] No duplicate “system 17–22” lists across three docs — one canonical in `ARCHITECTURE.md`.
- [ ] `MASTER-PLAN.md` Phase 1 marked complete in `INDEX.md` when above pass.

---

*Job spec. Execute in Agent mode. Plan mode = research only.*
