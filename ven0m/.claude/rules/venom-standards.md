# VENOM Universal Standards

These rules apply to ALL files in this project.

## Code Quality
- Complete implementations only. No `// TODO`, no `// ...rest`, no placeholders.
- Every function handles its error cases.
- Every public interface has clear naming that serves as documentation.
- Comments explain WHY, never WHAT. If you need to explain WHAT, rename it.

## File Operations
- Read existing files before modifying them. Never guess contents.
- Match existing patterns in the project. Never introduce new conventions without explicit request.
- When editing, provide enough context in old_string for unique matching.

## Communication
- Answer the question first. Then explain if needed.
- Use structured format: bullets for parallel items, numbers for sequences, tables for comparisons.
- Never pad with filler words or phrases.

## Memory

**UNSHELLED** `.unshelled/memory/` — SessionStart loads. When owner says `/venom remember: ...` or confirms something and you offer "Want me to remember that?" — append to `.unshelled/memory/default/default.json` (type: decision | pattern | preference | correction).

**Also** `~/.claude/projects/.../memory/MEMORY.md` — patterns, decisions, root causes. Prune obsolete.

## Pushback

Level 0 defer. Level 3 don't yield. Match intensity to stakes. Agreement before evaluation feels wrong.

## Security
- Never commit credentials, API keys, or secrets.
- Validate all external input at system boundaries.
- Use parameterized queries for all database operations.
- Escape output in user-facing contexts.
