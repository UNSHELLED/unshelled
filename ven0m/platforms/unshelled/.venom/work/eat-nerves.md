## Nervous System — 2026-03-28

**API surface (ScentVision — planned):**
- `POST /v1/analyze` — image/video → olfactory_profile.v1
- `GET /v1/graph/:material_id` — SKG lookup
- `WS /v1/stream` — frames → profile timeline (v0.5+)

**Internal events (VENOM plugin hooks):**
| Hook | Fires when | Effect |
|------|-----------|--------|
| `session.created` | OpenCode session start | Inject VENOM context via noReply prompt |
| `tool.execute.before` | Before every tool call | Safety screening, limits, loop detection |
| `tool.execute.after` | After every tool call | Cost tracking, usage stats |
| `file.edited` | User edits file in editor | Track filesModified |
| `session.idle` | Agent goes idle | Persist metrics, write ACTIVE.md |
| `experimental.session.compacting` | Context compaction | Inject VENOM snapshot to survive reset |
| `shell.env` | Shell command runs | Inject VENOM_* env vars |

**External integrations:**
- OpenCode SDK (`@opencode-ai/plugin`) — ctx.tool(), hooks, ctx.client.session.prompt(), ctx.client.tui.toast.show()
- React Router — SPA routing
- No external APIs yet (ScentVision backend not built)

**Async patterns:**
- All hooks are async/await — no queues, no workers, no crons
- File I/O via fs/promises (readFile, writeFile, mkdir, access)
- State persisted to `.venom/state/` as JSON files
- Web: React Suspense boundary at RootLayout level
