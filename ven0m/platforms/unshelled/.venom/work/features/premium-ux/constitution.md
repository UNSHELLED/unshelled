# Constitution — Premium UX

> Constraints. What we will NOT do. Hard boundaries.

## Never

1. **No breaking changes to existing API** — all existing hooks, tool signatures, and plugin interfaces remain backward-compatible
2. **No new runtime dependencies** — performance gains from code, not packages
3. **No UI frameworks** — React only, no Tailwind/MUI/Styled Components
4. **No dark patterns** — no fake loading states, no deceptive progress bars
5. **No premature optimization** — measure first, optimize measured bottlenecks only

## Boundaries

- **Scope:** Plugin + TUI only. ScentVision web is out of scope.
- **Risk tolerance:** Zero. Any change that touches `tool.execute.before` requires 3-file test coverage first.
- **Time budget:** 2 hours max implementation per wave

## Acceptance Gates

- All existing behavior preserved (manual verification checklist)
- No new console errors
- Build succeeds
- Typecheck passes
