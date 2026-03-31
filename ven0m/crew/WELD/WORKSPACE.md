# WELD — Workspace

> Build logs, construction patterns, and integration notes.

---

## Recent Builds

*Code constructed in recent sessions.*

---

## Construction Patterns

*Building patterns WELD has mastered.*

### Auth Middleware
- Pattern: JWT validation + refresh
- Files: middleware.ts, session.ts, types.ts
- Integration: Express app.use()
- Tests: Token validation, refresh, expiry

### API Endpoint
- Pattern: Route handler + validation + error handling
- Files: routes/[name].ts, validators/[name].ts, types.ts
- Integration: Router registration
- Tests: Happy path + error cases

### React Component
- Pattern: Props + state + handlers
- Files: components/[Name].tsx, components/[Name].test.tsx
- Integration: Import and use in parent
- Tests: Render + interactions

---

## Integration Points

*How WELD connects new code to existing systems.*

### Express Apps
- Middleware registration via app.use()
- Route handlers in routes/
- Error middleware last

### React Apps
- Component exports from index.ts
- Types in types.ts
- Shared utilities in lib/

---

## Build Standards

*WELD's quality bar for all construction.*

- Complete file content (no "rest of code")
- Error handling included
- Edge cases covered
- Tests written
- Integration verified
- No breaking changes

---

*WELD's workspace. Every build permanent.*
