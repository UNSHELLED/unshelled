## Skeleton — 2026-03-28

**Core entities:**
1. **VENOM Plugin** — 7 hooks (session.created, tool.execute.before/after, file.edited, session.idle, experimental.session.compacting, shell.env)
2. **WorkflowState** — tracks active workflow (spec/ship/debug/eat), phase, artifacts, sessionId
3. **SessionMetrics** — toolCalls, fileWrites, costUsd, recentCalls (loop detection), filesModified
4. **OlfactoryProfile v1** — schema for ScentVision (notes pyramid, metrics, limits, environment, i18n)
5. **Voidweave tokens** — palette, typography, semantic, breakpoints, layout, motion

**Data model:**
Everything flows through `.venom/` directory as flat files (YAML/JSON/MD). No database. Plugin reads/writes via fs/promises. WorkflowState and SessionMetrics are JSON in `.venom/state/`. Corrections/instincts are YAML. Memory is markdown. ScentVision has one schema: `olfactory_profile.v1.json` — note pyramid (top/heart/base) with descriptors, intensity, evidence, material_id.

**Schema location:**
- `scentvision/schema/olfactory_profile.v1.json` — JSON Schema draft 2020-12
- `design-language/voidweave/tokens.json` — design tokens v1.2.0

**Notable constraints:**
- `limits` field REQUIRED in every olfactory_profile response (trust boundary)
- Resource limits: 200 tool calls, $5 cost, 50 file writes per session
- Loop detection: same tool+target 3x in 5 calls = stall
- Danger patterns: rm -rf /, curl | bash, dd, DROP TABLE all blocked
- Sensitive files (.env, *.key, credentials.json) write-blocked
