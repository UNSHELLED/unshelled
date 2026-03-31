## Risks — 2026-03-28

**Risk 1: No tests**
- `venom-core.ts` (581 lines) has no test coverage. Loop detection, danger patterns, resource limits all untested.
- Consequence: silent regressions in safety-critical code.

**Risk 2: Plugin disabled by default**
- `opencode.json:68-70` — plugin array is commented out: `// ".opencode/plugins/venom-core.ts"`
- Consequence: VENOM context injection, loop detection, compaction survival all OFF unless manually activated.

**Risk 3: ScentVision backend not built**
- `PRODUCT-SPEC-v0.1.md` defines API endpoints (`/v1/analyze`, `/v1/graph/:material_id`) but no implementation exists.
- Only marketing site (`web/`) is live. No actual inference pipeline.

**Risk 4: Web has no type safety**
- `scentvision/web/` uses JSX without TypeScript. No propTypes, no runtime validation.
- `tokens.js` re-exports JSON but no type enforcement.

**TODOs in critical paths:** None found. Only documentation references to "no TODOs" policy.

**Deprecated deps:** Not checked (no package-lock.json analysis done).
