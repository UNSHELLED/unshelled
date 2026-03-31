## Heartbeat — 2026-03-28

**Entry point:** 
- Plugin: `.opencode/plugins/venom-core.ts:262` — `venomPlugin` function
- Web: `scentvision/web/src/main.jsx:5` → `App.jsx:13` → `RootLayout.jsx` + route pages

**Hot path:**
1. **OpenCode session start:** `session.created` → `buildVenomContext()` reads `.venom/CONTEXT.md`, corrections, ACTIVE.md, workflow-state.json → injects into session via `noReply` prompt
2. **Every tool call:** `tool.execute.before` → metrics++ → check limits (200 calls, $5, 50 writes) → loop detection → danger pattern scan → sensitive file check → deny or allow
3. **Tool completion:** `tool.execute.after` → accumulate cost → warn at $1
4. **Idle:** `session.idle` → persist metrics to `.venom/state/session-metrics.json`, write ACTIVE.md
5. **Compaction:** `experimental.session.compacting` → `generateVenomSnapshot()` injects VENOM state so identity survives context reset

**Web hot path:** `main.jsx` → `App.jsx` (BrowserRouter/Routes) → `RootLayout.jsx` (GlobalStyles, ParticleField, Nav) → page component → sections (Hero, Demo, Pipeline, etc.)

**Performance-critical code:**
- `venom-core.ts:161-170` — loop detection (runs on every tool call)
- `venom-core.ts:415-505` — tool.execute.before (safety + limits)
- `RootLayout.jsx` — renders on every route change

**Background jobs:** None. All event-driven hooks. No timers, no polling, no queues.
