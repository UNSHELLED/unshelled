# OpenClaw Eat — Active State

**Spine:** [`OPENCLAW-EAT-CANON.md`](./OPENCLAW-EAT-CANON.md) (§1.1 — **`openclaw-main/`** is authoritative; not global npm) · **Planning hub:** [`INDEX.md`](./INDEX.md) · **Cockpit (surfaces × MD × phase):** [`VENOM-ALIVE-MATRIX.md`](./VENOM-ALIVE-MATRIX.md)

**CLI (non-negotiable):** `cd` to **`venom-mine/.venom/work/openclaw-eat/openclaw-main`**, then **`pnpm openclaw …`**. Never bare `openclaw` on PATH for this folder.

## Current Phase: **2 — EMBODIMENT (draft in repo)** — gateway + channel proof still **you** (see What’s Next)

## What's Done
- [x] **VENOM bundle in `openclaw-main/` (2026-04-01)** — `docs/reference/templates/venom/` (SOUL/AGENTS/USER/TOOLS + skills), `scripts/apply-venom-workspace.mjs`, `pnpm apply-venom-workspace`, `VENOM.md`, hubs + AGENTS.default links
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
- [x] **08-reshape gap pass (2026-04-01)** — [00-gap-analysis.md](./08-reshape/00-gap-analysis.md) **Questions to Answer:** **woven** → single-turn vs sub-agents + depth (resolved); **skills cross-reference** → prose / co-loaded skills, no loader DAG (resolved); **EN↔EG Arabic** still Embodiment operator; [crew-as-config.md](./08-reshape/crew-as-config.md) §4 sub-agent spawn note aligned
- [x] **IMPL ↔ crew naming (2026-04-01)** — [crew-as-config.md](./08-reshape/crew-as-config.md) §5.1 mapping table (HUNT→researcher …); [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) §2 Sub-Agent YAML → canonical ids; [PLANNING-GAPS.md](./PLANNING-GAPS.md) §1b + §3 pointer
- [x] **PLANNING-GAPS closure pass (2026-04-01)** — [09-source/13-hooks-parity.md](./09-source/13-hooks-parity.md) (Claude ↔ OpenClaw hooks); [PLANNING-GAPS.md](./PLANNING-GAPS.md) §5 + §6 pointers; **fork vs config** working default **A** recorded under §2; [09-source/INDEX.md](./09-source/INDEX.md) row 13
- [x] **08-reshape — language switch (repo, 2026-04-01)** — [migration-path.md](./08-reshape/migration-path.md) §3b verification ladder (EN↔EG); [00-gap-analysis.md](./08-reshape/00-gap-analysis.md) question points to §3b; **live §3b pass** still operator
- [x] **Tier 1 docs (coverage)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 1 checkboxes (18/19); `openapi.json` left open — see coverage file (placeholder URL / optional upstream)
- [x] **Tier 1 — openapi audit (agent, 2026-04-01)** — No `openapi.json` in `openclaw-main` clone; live docs URL returns Mintlify **sample**, not OpenClaw. **Gateway contract** = WebSocket JSON — [Gateway Protocol](https://docs.openclaw.ai/gateway/protocol.md) / `openclaw-main/docs/gateway/protocol.md` / [`09-source/11-protocol.md`](./09-source/11-protocol.md) (already Tier 1 ✓). [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 1 note + [EXTERNAL-RESOURCES.md](./EXTERNAL-RESOURCES.md) caveat updated.
- [x] **Agent doc queue — idle (verified 2026-04-01)** — §What’s Next item **1** executed: re-fetched `openapi.json` → still **Plant Store** sample; Tier 1 `openapi` row **stays [ ]**; no further agent doc actions until operator advances embodiment or upstream ships real OpenAPI.
- [x] **Tier 2 docs (coverage, 2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 2 (12/12); local verify `openclaw-main/docs/`
- [x] **Tier 3 partial (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Root/misc** (10) + **Automation** (12) ticked from `openclaw-main/docs/` clone paths
- [x] **Tier 3 Channels (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Channels** (30/30); `openclaw-main/docs/channels/*.md`
- [x] **Tier 3 CLI (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **CLI** (49/49); `openclaw-main/docs/cli/*.md`
- [x] **Tier 3 Concepts (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Concepts** (33/33); `openclaw-main/docs/concepts/*.md`
- [x] **Tier 3 Gateway (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Gateway** (34/34); `openclaw-main/docs/gateway/**/*.md`
- [x] **Tier 3 Help (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Help** (7/7); `openclaw-main/docs/help/*.md`
- [x] **Tier 3 Install (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Install** **25/28** local; `northflank` / `railway` / `render` absent from repo snapshot — see coverage note
- [x] **Tier 3 Nodes (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Nodes** (9/9); `openclaw-main/docs/nodes/*.md`
- [x] **Tier 3 Pi (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Pi** (2/2); `openclaw-main/docs/pi.md`, `pi-dev.md`
- [x] **Tier 3 Platforms (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Platforms** (23/23 checklist); `openclaw-main/docs/platforms/**`; +3 extra root `.md` — see coverage note
- [x] **Tier 3 Plugins (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Plugins** (14/14 checklist); `openclaw-main/docs/plugins/*.md`; +3 extra — see coverage note
- [x] **Tier 3 Providers (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Providers** (38/38); `openclaw-main/docs/providers/*.md`
- [x] **Tier 3 Reference (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Reference** (22/22 checklist); `openclaw-main/docs/reference/**`; +6 `templates/*.dev.md` + `CLAUDE.md` — see coverage note
- [x] **Tier 3 Security (2026-04-01)** — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 3 **Security** (3/3); `openclaw-main/docs/security/*.md`
- [x] **Embodiment workspace draft** — [embodiment/README.md](./embodiment/README.md) + `embodiment/workspace/` (`SOUL.md`, `AGENTS.md`, `USER.md`, `TOOLS.md`, `skills/venom-{spec,build,review}/`) — T1 tier; ~6.1k chars across four bootstrap files (well under 20k/file)
- [x] **`agents.defaults.workspace` → embodiment** — OpenClaw config on this machine now points at `embodiment\workspace` (restart gateway to apply)
- [x] **Embodiment §2 — gateway reachability** — `openclaw status`: `ws://127.0.0.1:18789` **reachable** (~60ms), RPC probe ok (2026-04-01). *(Started/held by existing global gateway process; duplicate `openclaw gateway` correctly refused — port in use.)*
- [x] **What's Next item 1 — operator order (repo, 2026-04-01)** — After §2: **[EMBODIMENT-RUN.md](./embodiment/EMBODIMENT-RUN.md) §3** (truncation / logs) → **§4** (one channel) → **§5** (voice ladder); then [migration-path.md](./08-reshape/migration-path.md) **§3b** (EN↔EG) in live session; record in [CHECKLIST.md](./embodiment/CHECKLIST.md) + ACTIVE. Agent cannot run gateway/logs/channel proof here.
- [x] **EMBODIMENT-RUN §3 — preflight (repo, agent, 2026-04-01)** — Byte sizes `embodiment/workspace`: SOUL 1901 / AGENTS 2600 / USER 1288 / TOOLS 718; **6507 total** — **well under** per-file **20k** and total **150k** ([BOOTSTRAP-SPIKE.md](./BOOTSTRAP-SPIKE.md)). Truncation from oversize is **unlikely**; **operator still** runs §3 live (`pnpm openclaw logs --follow` / stdio) to confirm **no** truncation warnings in session.

## What's Next
**Operator (machine — not runnable in agent):** [migration-path.md](./08-reshape/migration-path.md) **§3b** (EN↔EG) → [EMBODIMENT-RUN.md](./embodiment/EMBODIMENT-RUN.md) §3–5 → [CHECKLIST.md](./embodiment/CHECKLIST.md) + [02-prototype-venom.md](./10-phases/02-prototype-venom.md) (409 / single poller: [EMBODIMENT-RUN](./embodiment/EMBODIMENT-RUN.md)).

**Skip in agent / Cursor:** raw gateway logs + Telegram in-character proof without your session.

1. **Operator — do next:** [EMBODIMENT-RUN.md](./embodiment/EMBODIMENT-RUN.md) **§4** (one channel / `pnpm openclaw channels status --probe` + test message) → **§5** (voice ladder) → **§3b** EN↔EG ([migration-path.md](./08-reshape/migration-path.md)). **§3 logs:** confirm no truncation warnings (preflight: workspace **6.5k** bytes total — safe vs caps). **Agent doc queue:** none; `openapi.json` in [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) still optional/open.

## Key Findings So Far
- **Critical**: OpenClaw uses ACP (`@mariozechner/pi-agent-core` + `@mariozechner/pi-ai`) as its agent runtime — local reference: `09-source/pi-mono/`, doc: `09-source/12-pi-agent-core.md`
- **Bootstrap system**: AGENTS.md, SOUL.md, TOOLS.md, USER.md injected every turn
- **Vector search**: Hybrid (vector + BM25) with MMR and temporal decay
- **Subagents**: Background ACP sessions with announce chain for results
- **Compaction**: Identifier-preserving summaries with safety margin

## Blocked By
- **Repo / docs:** nothing
- **Phase 2 exit (gateway + channel proof):** operator-only until you run [EMBODIMENT-RUN.md](./embodiment/EMBODIMENT-RUN.md) on box with working `pnpm openclaw` from [`openclaw-main/`](./openclaw-main)

## Notes
- **2026-04-01 — openapi URL re-check (agent):** `https://docs.openclaw.ai/api-reference/openapi.json` returns **200** but **Mintlify sample** (Plant Store), not OpenClaw — Tier 1 checkbox **open**; see [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) Tier 1.
- **2026-04-01 — Embodiment run:** §2 **done** — gateway **reachable** on loopback:18789. **Clone CLI:** `pnpm openclaw` from [`openclaw-main/`](./openclaw-main) can fail **EPERM** on symlinks under `dist-runtime/` (Windows — **Developer Mode** or copy-fallback in `scripts/stage-bundled-plugin-runtime.mjs`). **§3–§5** = **operator**; agents **skip** live execution (see What’s Next). **Telegram:** **409 getUpdates conflict** if two pollers — one gateway instance. **Canon:** only **`pnpm openclaw`** from `openclaw-main` — never PATH `openclaw` for this folder.
- **2026-04-01 — operator check (PATH CLI ≠ spine):** global `openclaw --version` once reported 2026.2.3; **authoritative release line for this folder** is [`openclaw-main/package.json`](./openclaw-main/package.json) `version` (sync `openclaw-main` to latest `main` when comparing to npm). `agents.defaults.workspace` → `...\openclaw-eat\embodiment\workspace` ✓.
- **Eat → inject:** [OPENCLAW-INJECTION.md](./OPENCLAW-INJECTION.md) — `openclaw-main/` is for anatomy + optional patches; VENOM/UNSHELLED layer is workspace + config first.
- **OpenClaw runtime for venom-mine** — **`openclaw-main/`** latest; run `pnpm openclaw …` after `pnpm install` there. **`agents.defaults.workspace`** → this tree’s `embodiment\workspace` — restart gateway after config changes, then channel + [CHECKLIST.md](./embodiment/CHECKLIST.md).
- **Voice + UNSHELLED universe + when to merge:** `METHODOLOGY.md` (spine: `voice.mdc` ↔ `D:\UNSHELLED.AI` ↔ SOUL/AGENTS)
- **Latest VENOM naming / creative lines on disk:** `UNSHELLED-VOICE-FEED.md` → `D:\UNSHELLED.AI\` (authoritative for copy before inventing in embodiment)
- **External bookmarks:** `EXTERNAL-RESOURCES.md` (OpenClaw docs, OpenAPI, pi-mono, templates)
- **Eat synthesis:** `EAT-SYNTHESIS.md` + `09-source/INDEX.md` (pipeline + pairings)
- **OpenClaw official docs — full coverage checklist:** `OPENCLAW-DOCS-COVERAGE.md` (Tier 1–2 + Tier 3 through **Security**; Tier 3 **Start**+ optional)
- **Planning gaps / forgotten threads:** `PLANNING-GAPS.md` (phase naming, fork vs config, sub-agent naming, secrets, …)
- OpenClaw docs are extensive but some pages may be stubs
- OpenClaw + pi-mono clones present under `openclaw-eat/` for full anatomy
- VENOM's 10 minds map to sub-agents but OpenClaw sub-agents are simpler
- Key insight: AGENTS.md / SOUL.md / USER.md / TOOLS.md ≈ VENOM's .venom/ brain
