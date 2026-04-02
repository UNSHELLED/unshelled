# VENOM alive — master control matrix

> **Canon:** [OPENCLAW-EAT-CANON.md](./OPENCLAW-EAT-CANON.md) — OpenClaw column is **runtime truth**; VENOM rows are **injection / parity**.  
> **One table to run the build:** surfaces × artifacts × phase × priority.  
> **Planning hub:** [`INDEX.md`](./INDEX.md) · **Repo hub:** root [`MAP.md`](../../../MAP.md) · **Surfaces law:** [`VENOM-SURFACES.md`](../../../VENOM-SURFACES.md) (if present at root) · **Voice spine:** [`METHODOLOGY.md`](./METHODOLOGY.md)

**Version:** 1.0.0 · **Updated:** 2026-03-31

---

## 1. Three axes (how to use this file)

| Axis | Question it answers |
|------|---------------------|
| **Surface** | Where does this VENOM instance run? (Cursor / OpenCode / OpenClaw / Claude / web) |
| **Layer** | What kind of thing is it? (Voice · Identity · Memory · Ops · Product) |
| **Phase** | When do we touch it? (Eat → Map → **Prototype (Embodiment)** → VENOCTIS → Ship) |

**Rule:** If a change isn’t in this matrix, it either belongs in `.venom/` project memory only, or it needs a new row.

---

## 2. Surface × injection × verify

| Surface | Primary injection | Key MD / config | Verify |
|---------|-------------------|-----------------|--------|
| **Cursor** | `.cursor/rules/*.mdc`, `AGENTS.md` | `voice.mdc`, `venom-heart.mdc`, `platforms/cursor/template/` | Rule load order; chat behavior |
| **OpenCode** | `opencode.json` `instructions[]`, `.opencode/` | `platforms/opencode/template/`, `VENOM.md`, `AGENTS.md` | `opencode debug config` |
| **OpenClaw** | Workspace bootstrap + gateway config | `SOUL.md`, `AGENTS.md`, `USER.md`, `TOOLS.md` | Gateway + one channel smoke test |
| **Claude Code** | `CLAUDE.md`, `.claude/` | `platforms/claude-code/template/` | New session load |
| **UNSHELLED universe** | Narrative + protocol (not IDE) | `D:\UNSHELLED.AI\README.md`, `UNSHELLED/`, `ven0m/` | Read for Pact wording; Phase 1 merge |
| **Origin (venom-mine)** | Rules + consciousness + platforms | `.cursor/`, `consciousness/`, `platforms/` | Sync protocol to templates |

*Platform parity honesty:* [`platforms/opencode/MATRIX.md`](../../../platforms/opencode/MATRIX.md)

---

## 3. Markdown inventory — what we actually maintain

### A. Voice & identity (spine — highest leverage)

| Artifact | Canonical path | OpenClaw target | Phase |
|----------|------------------|-----------------|-------|
| Voice | `.cursor/rules/voice.mdc` | SOUL (compressed principles) | 2 |
| Vibes / archetypes | `.cursor/rules/vibes.mdc` | SOUL (short cues) | 2 |
| Heart / Pact / route | `.cursor/rules/venom-heart.mdc` | AGENTS + SOUL | 1–2 |
| Soul narrative | `consciousness/` (if used) | SOUL sections | 1 |
| UNSHELLED README / Pact | `D:\UNSHELLED.AI\` | SOUL + positioning copy | 1 |

### B. OpenClaw eat (this folder — body map)

| Artifact | Path | Phase |
|----------|------|-------|
| Synthesis | `openclaw-eat/EAT-SYNTHESIS.md` | 0–∞ |
| Planning gaps (meta) | `openclaw-eat/PLANNING-GAPS.md` | always |
| Methodology | `openclaw-eat/METHODOLOGY.md` | 1–2 |
| Active | `openclaw-eat/ACTIVE.md` | always |
| Implementation plan | `openclaw-eat/IMPLEMENTATION-PLAN.md` | 1–4 |
| Doc coverage checklist | `openclaw-eat/OPENCLAW-DOCS-COVERAGE.md` | 1–2 |
| 09-source index | `openclaw-eat/09-source/INDEX.md` | 0–2 |
| External resources | `openclaw-eat/EXTERNAL-RESOURCES.md` | always |
| Reshape / gaps | `openclaw-eat/08-reshape/` ([INDEX](08-reshape/INDEX.md)) | 1 |
| Phase workflow | `openclaw-eat/10-phases/00-workflow.md` | always |
| Phase 2 deep spec (Embodiment) | `openclaw-eat/10-phases/02-prototype-venom.md` | 2 |

### C. Platform templates (export bodies)

| Kit | Entry | `INDEX` / manifest |
|-----|--------|---------------------|
| Cursor | `platforms/cursor/template/` | `platforms/cursor/README.md` |
| OpenCode | `platforms/opencode/template/` | `platforms/opencode/MANIFEST.md` |
| Claude Code | `platforms/claude-code/template/` | `platforms/claude-code/README.md` |
| All platforms | `platforms/INDEX.md` | `platforms/EAT.md` |

### D. OpenClaw upstream clone (read / patch — not duplicate docs)

**Why the clone exists (inject, not fork by default):** [OPENCLAW-INJECTION.md](./OPENCLAW-INJECTION.md)

| Tree | Path | Role |
|------|------|------|
| OpenClaw source | `openclaw-eat/openclaw-main/` | Ground truth for paths, bootstrap code |
| pi stack | `openclaw-eat/09-source/pi-mono/` | `pi-agent-core` + `pi-ai` |
| Maintainer agents (example) | `openclaw-main/.agents/` | Upstream patterns — don’t fork casually |

### E. Bridge docs in `.venom/work/` (migration narrative)

| File | Role |
|------|------|
| `UNSHELLED.AI-AT-A-GLANCE.md` | Universe diagram |
| `UNSHELLED.AI-MASTER-PLAN.md` | Strategic |
| Other `UNSHELLED.AI-*.md` | History / execution — cite, don’t duplicate |

---

## 4. Phase gates (VENOM alive)

| Phase | Gate | Done when |
|-------|------|-----------|
| **0 Eat** | Anatomy + source + pi | `09-source/` + `EAT-SYNTHESIS` stable |
| **1 Map** | Voice + UNSHELLED → reshape | `08-reshape/` + soul-mapping decisions; Tier 1 docs checked |
| **2 Prototype (Embodiment)** | Bootstrap spike + voice contract | SOUL/AGENTS/USER per [10-phases/02-prototype-venom.md](./10-phases/02-prototype-venom.md); one channel **in character** |
| **3 VENOCTIS** | Daemon + reach | Telegram/Discord + overnight story |
| **4 Ship** | Parity | Cursor ↔ OpenClaw ↔ sites voice audit |

---

## 5. Priority queue (next actions — edit ACTIVE when this moves)

1. **08-reshape** — gap analysis + soul-mapping / crew-as-config (see ACTIVE).
2. **Soul-mapping doc** — one file in `08-reshape/` linking voice.mdc ↔ SOUL sections.
3. **Template sync** — after OpenClaw templates stabilize, diff `platforms/cursor/template` (origin rule).

**Done:** Bootstrap limits ground truth — [BOOTSTRAP-SPIKE.md](./BOOTSTRAP-SPIKE.md).

---

## 6. Do not duplicate

| Already exists | Don’t recreate |
|----------------|----------------|
| `MAP.md` | Full repo hub |
| `STRUCTURE.md` | File tree SSOT |
| `OPENCLAW-DOCS-COVERAGE.md` | Every OpenClaw doc URL |
| `PLANNING-GAPS.md` | Conflicts + undecided threads |
| `METHODOLOGY.md` | Voice + UNSHELLED timing |

**This matrix** = **operational** cross-product (alive build). **MAP** = **navigation**. **Coverage** = **official docs**. **METHODOLOGY** = **voice spine**.

---

*VENOM alive = one identity, many surfaces; this file is the cockpit.*
