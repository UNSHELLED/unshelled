# OpenClaw Eat — Active State

**Spine:** [`OPENCLAW-EAT-CANON.md`](./OPENCLAW-EAT-CANON.md) (§1.1 — **`openclaw-main/`** is authoritative; not global npm) · **Planning hub:** [`INDEX.md`](./INDEX.md) · **Cockpit (surfaces × MD × phase):** [`VENOM-ALIVE-MATRIX.md`](./VENOM-ALIVE-MATRIX.md)

## Current Phase: **2 — EMBODIMENT (draft in repo)** — gateway + channel proof still **you** (see What’s Next)

## What's Done
- [x] Directory structure created
- [x] Full OpenClaw docs index fetched (llms.txt)
- [x] 12 key doc pages read via agent
- [x] OpenClaw source code cloned locally
- [x] 12 source analysis MD files created and filled with findings:
  - [x] 01-gateway-daemon.md (ACP architecture)
  - [x] 02-agent-loop.md (pi-embedded runtime)
  - [x] 03-tool-executor.md (tool pipeline)
  - [x] 04-memory-manager.md (vector search + MMR)
  - [x] 05-channel-base.md (channel system)
  - [x] 06-provider-interface.md (20+ providers)
  - [x] 07-session-manager.md (session lifecycle)
  - [x] 08-compaction-handler.md (identifier preservation)
  - [x] 09-subagent-spawner.md (spawning + announce chain)
  - [x] 10-plugin-loader.md (plugin system)
  - [x] 11-protocol.md (WebSocket protocol)
  - [x] 12-pi-agent-core.md (`@mariozechner/pi-agent-core` — pi-mono `packages/agent`, linked from 00-source-map + 02-agent-loop)
- [x] **pi-mono** cloned under `09-source/pi-mono/` (upstream agent + ai packages)
- [x] **Eat synthesis** — `EAT-SYNTHESIS.md` + `09-source/INDEX.md`; deduped 05–07, 10–11; wired README / EXTERNAL-RESOURCES / phases / IMPLEMENTATION-PLAN
- [x] Bootstrap templates analyzed (AGENTS.md, SOUL.md, USER.md)
- [x] **Bootstrap spike (ground truth)** — defaults + config keys + VENOM spine char counts: [BOOTSTRAP-SPIKE.md](./BOOTSTRAP-SPIKE.md)
- [x] **08-reshape Map pass** — gap table synced with [BOOTSTRAP-SPIKE.md](./BOOTSTRAP-SPIKE.md) + [PLANNING-GAPS.md](./PLANNING-GAPS.md); naming note; [soul-mapping](./08-reshape/soul-mapping.md) keys fixed; [crew-as-config](./08-reshape/crew-as-config.md) canonical names + Embodiment MVP trio; [pact-as-policy](./08-reshape/pact-as-policy.md) groups vs DM; [migration-path](./08-reshape/migration-path.md) secrets stub
- [x] **Tier 1 docs (coverage)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 1 checkboxes (18/19); `openapi.json` left open — live URL error; see coverage file note
- [x] **Embodiment workspace draft** — [embodiment/README.md](./embodiment/README.md) + `embodiment/workspace/` (`SOUL.md`, `AGENTS.md`, `USER.md`, `TOOLS.md`, `skills/venom-{spec,build,review}/`) — T1 tier; ~6.1k chars across four bootstrap files (well under 20k/file)
- [x] **`agents.defaults.workspace` → embodiment** — OpenClaw config on this machine now points at `embodiment\workspace` (restart gateway to apply)
- [x] **Embodiment §2 — gateway reachability** — `openclaw status`: `ws://127.0.0.1:18789` **reachable** (~60ms), RPC probe ok (2026-04-01). *(Started/held by existing global gateway process; duplicate `openclaw gateway` correctly refused — port in use.)*

## What's Next
1. **Finish Embodiment** — [embodiment/EMBODIMENT-RUN.md](./embodiment/EMBODIMENT-RUN.md) §3–5: **§3** scan `openclaw logs` during a real session for bootstrap **truncation** warnings; **§4–5** one **in-character** channel proof (Telegram or approved path) + verification ladder → tick [embodiment/CHECKLIST.md](./embodiment/CHECKLIST.md) X1–X5 + ladder ([02-prototype-venom.md](./10-phases/02-prototype-venom.md)). **If Telegram 409 (`getUpdates` conflict):** only one gateway/bot poller — `openclaw gateway stop` extras, then retest.
2. **08-reshape (ongoing)** — open questions in [08-reshape/00-gap-analysis.md](./08-reshape/00-gap-analysis.md); close after channel proof
3. **Tier 2 when approaching VENOCTIS** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 2 (channels, secrets, hooks)

## Key Findings So Far
- **Critical**: OpenClaw uses ACP (`@mariozechner/pi-agent-core` + `@mariozechner/pi-ai`) as its agent runtime — local reference: `09-source/pi-mono/`, doc: `09-source/12-pi-agent-core.md`
- **Bootstrap system**: AGENTS.md, SOUL.md, TOOLS.md, USER.md injected every turn
- **Vector search**: Hybrid (vector + BM25) with MMR and temporal decay
- **Subagents**: Background ACP sessions with announce chain for results
- **Compaction**: Identifier-preserving summaries with safety margin

## Blocked By
- Nothing — ready to eat

## Notes
- **2026-04-01 — Embodiment run:** §2 **done** — gateway **reachable** on loopback:18789. **Clone CLI:** `pnpm openclaw` from [`openclaw-main/`](./openclaw-main) failed **EPERM** writing symlink under `dist-runtime/` (Windows — enable **Developer Mode** for symlinks, or use elevated/dev env; then `pnpm build` / `pnpm openclaw` per upstream). **Global** `openclaw` used for `status` / logs; aligns with canon §1.1 (clone = truth; PATH = convenience when clone cannot build). **Telegram:** logs showed **409 getUpdates conflict** (two bot pollers) — stop duplicate gateways, single instance. **§3–§5** still **open**: truncation watch on live session, then in-character message + [CHECKLIST.md](./embodiment/CHECKLIST.md).
- **2026-04-01 — operator check (PATH CLI ≠ spine):** global `openclaw --version` once reported 2026.2.3; **authoritative release line for this folder** is [`openclaw-main/package.json`](./openclaw-main/package.json) `version` (sync `openclaw-main` to latest `main` when comparing to npm). `agents.defaults.workspace` → `...\openclaw-eat\embodiment\workspace` ✓.
- **Eat → inject:** [OPENCLAW-INJECTION.md](./OPENCLAW-INJECTION.md) — `openclaw-main/` is for anatomy + optional patches; VENOM/UNSHELLED layer is workspace + config first.
- **OpenClaw runtime for venom-mine** — **`openclaw-main/`** latest; run `pnpm openclaw …` after `pnpm install` there. **`agents.defaults.workspace`** → this tree’s `embodiment\workspace` — restart gateway after config changes, then channel + [CHECKLIST.md](./embodiment/CHECKLIST.md).
- **Voice + UNSHELLED universe + when to merge:** `METHODOLOGY.md` (spine: `voice.mdc` ↔ `D:\UNSHELLED.AI` ↔ SOUL/AGENTS)
- **Latest VENOM naming / creative lines on disk:** `UNSHELLED-VOICE-FEED.md` → `D:\UNSHELLED.AI\` (authoritative for copy before inventing in embodiment)
- **External bookmarks:** `EXTERNAL-RESOURCES.md` (OpenClaw docs, OpenAPI, pi-mono, templates)
- **Eat synthesis:** `EAT-SYNTHESIS.md` + `09-source/INDEX.md` (pipeline + pairings)
- **OpenClaw official docs — full coverage checklist:** `OPENCLAW-DOCS-COVERAGE.md` (every `llms.txt` page + Tier 1–3)
- **Planning gaps / forgotten threads:** `PLANNING-GAPS.md` (phase naming, fork vs config, sub-agent naming, secrets, …)
- OpenClaw docs are extensive but some pages may be stubs
- OpenClaw + pi-mono clones present under `openclaw-eat/` for full anatomy
- VENOM's 10 minds map to sub-agents but OpenClaw sub-agents are simpler
- Key insight: AGENTS.md / SOUL.md / USER.md / TOOLS.md ≈ VENOM's .venom/ brain
