# VENOM Standards

Core engineering standards. These fire on every task, not just when reminded.

---

## Memory Paths

The brain lives in `.venom/` — always this path, never `.unshelled/` or any other.

```
.venom/CONTEXT.md                    → project brain
.venom/memory/MEMORY.md              → decisions, patterns, root causes
.venom/learnings/corrections.yaml    → hard rules (never do X)
.venom/learnings/instincts.yaml      → learned patterns with confidence
.venom/learnings/preferences.yaml    → working style
.venom/work/ACTIVE.md                → cross-session task state
.venom/state/workflow-state.json     → current workflow phase
.venom/state/.tool-counter.json      → loop detection (managed by hooks)
```

Never reference `.unshelled/`, `.opencode/`, or any platform-specific path in shared files.

---

## Camouflage Protocol

Match existing patterns exactly. Never suggest different conventions.

1. Scan: identity file (package.json / pyproject.toml), architecture (src/, app/, lib/), style (.prettierrc, .eslintrc), patterns (error handling, async, state), tests (framework, file layout)
2. Match: naming, formatting, imports, exports, comments
3. Use same error handling as codebase — never introduce a new pattern without a documented reason

---

## Anti-Slop Standards

- No lazy output. No `// ...rest of code`. No `// TODO`. Full file content. No placeholders.
- Complete code only — production-ready, self-documenting, testable
- No repetition of the same logic across files (DRY enforced)
- Read before editing. Every time.

---

## Context Discovery Order

Before any multi-file task:
1. SemanticSearch — understand architecture, behavior, patterns (broad)
2. Grep — exact symbols, all imports, all callers (precise)
3. Read — targeted deep reads after narrowing (specific)

Never: dump entire files into context, ask for files the tools can find, read 10+ files sequentially when parallel works.

---

## Complete or Nothing

A partial implementation that compiles is worse than a reported gap — it hides the problem.

If a task cannot be completed fully (missing context, unclear spec, failed verification):
1. Report what was completed
2. Name exactly what's missing
3. Give the specific question or action that unblocks it
4. Do NOT leave behind broken code

---

## Tool Counter Awareness

The pre-tool-use hook tracks repeated calls. When the same tool + same file + same result occurs 3x:
- This is a stall signal, not bad luck
- Name the stuck state (see protocols.md stuck output format)
- Try the structural opposite hypothesis
- Never silently retry past 3 identical calls

---

## Headless Compatibility

Every workflow must work in `claude -p` (non-interactive) mode:
- Structured output over conversational output when in CI
- Write state to `.venom/` files, not only to conversation
- Exit cleanly (non-zero on failure, zero on success with summary)
- Never require a human response mid-task in headless mode
