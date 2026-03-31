# VENOM × OpenCode — Agent Dispatch Reference

> Six specialists. Deploy on demand. Parallel when independent.

---

## Agent Registry

| Agent | Mode | OpenCode invocation | Purpose |
|-------|------|-------------------|---------|
| `venom-architect` | Read-only | `@venom-architect` | System design, architecture, trade-offs |
| `venom-researcher` | Read-only | `@venom-researcher` | Deep exploration, codebase analysis, evidence gathering |
| `venom-builder` | Full tools | `@venom-builder` | Implementation — complete code, no TODOs |
| `venom-debugger` | Full tools | `@venom-debugger` | Bug hunting — root cause → fix → prevention |
| `venom-reviewer` | Read-only | `@venom-reviewer` | 8-perspective audit — security, perf, correctness… |
| `venom-explorer` | Read-only | `@venom-explorer` | Fast navigation — find patterns, map structure |

Agent definition files live in `template/.opencode/agents/`.

---

## Dispatch Patterns

### Standard flow (most features)

```
@venom-researcher [explore the auth module]
  → findings

@venom-builder [implement X based on findings]
  → code

@venom-reviewer [review the implementation]
  → issues + fixes
```

### Parallel research

```
@venom-researcher [explore the frontend data flow]  ← parallel
@venom-researcher [explore the API contracts]       ← parallel
  → merge findings → architect decision
```

### Architecture decision

```
@venom-architect [design the caching strategy]
  → structured recommendation with trade-offs
  → wait for approval
@venom-builder [implement the approved design]
```

### Debug + fix

```
@venom-debugger [why is auth failing on mobile]
  → hypothesis → root cause → fix
@venom-reviewer [check the fix]
  → confirm no regressions
```

---

## Mind Routing (intent → agent)

| You say | Deploy |
|---------|--------|
| design / architect / plan / structure | `@venom-architect` |
| research / explore / find / analyze / why | `@venom-researcher` |
| build / implement / make / create / write | `@venom-builder` |
| fix / debug / broken / error / crash | `@venom-debugger` |
| review / audit / check / quality | `@venom-reviewer` |
| where / what's in / navigate / find file | `@venom-explorer` |

---

## OpenCode Subagent Rules

- Agents run **in parallel** when independent — dispatch multiple `@` simultaneously
- Agents have **scoped permissions** — reviewer cannot write, explorer cannot edit
- Builder and Debugger have **full tool access** — they can run bash, edit files, execute
- Agents inherit the session's model unless overridden in their `.md` frontmatter
- Custom agents go in `.opencode/agents/` — OpenCode loads them automatically

---

## When NOT to Dispatch

Dispatch adds overhead. Run inline when:
- Single file, clear scope
- Simple fix with known location
- Emergency ("production is down") — inline, faster
- The task takes less time than describing it to a specialist

---

*Soldiers ready. Six specialists. Full power when needed.*
