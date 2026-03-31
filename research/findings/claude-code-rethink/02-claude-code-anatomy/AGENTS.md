# Claude Code Anatomy: Agents & Agent Tool

> **Verified against:** Anthropic [Create custom subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents) + [Tools reference](https://docs.anthropic.com/en/docs/claude-code/tools-reference) (2026-03-30).  
> **Naming note:** In **v2.1.63+**, the **Task** tool was renamed **`Agent`**. `Task(...)` in settings and definitions still works as an **alias**.

**Status:** 🟢 Research complete (official docs)

---

## Executive summary

| Topic | Fact |
|-------|------|
| Where agents live | Markdown under **priority locations** (see §Discovery). Project: `.claude/agents/`. |
| What invokes them | **Automatic delegation** (description match), **@-mention**, **natural language**, or the **`Agent` tool** from the orchestrator. |
| Custom vs built-in | **Built-in** names (`Explore`, `Plan`, `general-purpose`, …). **Custom** = any file with `name` + `description` — referenced by **`name`**, not a separate `subagent_type` enum for customs. |
| Nesting | **Subagents cannot spawn subagents.** Use chaining from the **main** conversation or skills. |
| Parallel | Doc pattern: multiple subagents for **independent** work; orchestration is **Claude’s** — not a documented “parallel Agent API” with guaranteed concurrency. |
| Context | **Separate window** per run: subagent gets **its system prompt (file body) + basic env**, **not** the full Claude Code system prompt. |
| Parent `CLAUDE.md` | With **`claude --agent`**, project `CLAUDE.md` / memory still load via normal flow. **Inside** a spawned subagent, it does **not** automatically get the parent chat history—only what the parent passes via the **Agent** invocation + its own tools. |

---

## Agent tool (`Agent`, formerly `Task`)

- **Tool name in permissions / hooks:** `Agent` (see [Tools reference](https://docs.anthropic.com/en/docs/claude-code/tools-reference)).
- **Purpose:** Spawn a subagent with **its own context** to run a task; verbose output stays mostly in the subagent transcript.

**Input shape (from [Hooks → PreToolUse → Agent](https://docs.anthropic.com/en/docs/claude-code/hooks) tool_input):**

| Field | Role |
|-------|------|
| `prompt` | Task for the subagent |
| `description` | Short label for the task |
| `subagent_type` | Which agent to run — **built-in** (`Explore`, `Plan`, …) **or** custom agent **`name`** |
| `model` | Optional override (alias or full ID) |

Resolution order for **model** (per sub-agents doc): `CLAUDE_CODE_SUBAGENT_MODEL` env → per-invocation `model` → agent file `model` frontmatter → main conversation model.

---

## Built-in subagents (official)

| Agent | Model | Tools / notes |
|-------|--------|----------------|
| **Explore** | Haiku | Read-only (Write/Edit denied). Thoroughness: quick / medium / very thorough. |
| **Plan** | Inherits | Read-only; used in **plan mode** for research before a plan. |
| **general-purpose** | Inherits | Full tool access; exploration + modification, multi-step. |
| **Bash** | Inherits | Terminal in separate context |
| **statusline-setup** | Sonnet | `/statusline` |
| **Claude Code Guide** | Haiku | Questions about Claude Code |

Custom agents can mirror these roles with stricter prompts; built-ins are always available unless **denied** (see §Permissions).

---

## Subagent file format

- **Format:** YAML **frontmatter** + Markdown **body** = system prompt.
- **Required frontmatter:** `name`, `description`.
- **`name`:** Unique id — **lowercase letters and hyphens** (e.g. `venom-researcher`).
- **Body:** Becomes the subagent system prompt. Subagent receives **this + basic environment (e.g. cwd)**, not the full Claude Code system prompt.

### Supported frontmatter fields (official)

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Identifier (`lowercase-hyphen`) |
| `description` | Yes | When Claude should delegate — **routing signal** |
| `tools` | No | Allowlist; **omit = inherit all** from parent (including MCP) |
| `disallowedTools` | No | Denylist; applied **first**, then `tools` |
| `model` | No | `sonnet`, `opus`, `haiku`, full model id, or `inherit` (default) |
| `permissionMode` | No | `default`, `acceptEdits`, `dontAsk`, `bypassPermissions`, `plan` |
| `maxTurns` | No | Cap agentic turns |
| `skills` | No | Skill ids — **full content injected** at startup; **subagents do not inherit parent skills** |
| `mcpServers` | No | Scoped MCP (inline or by name) |
| `hooks` | No | Hooks **only while this subagent is active** |
| `memory` | No | `user` \| `project` \| `local` — persistent agent-memory dirs |
| `background` | No | `true` = background task behavior |
| `effort` | No | `low` \| `medium` \| `high` \| `max` (Opus 4.6) |
| `isolation` | No | `worktree` = git worktree isolation |
| `initialPrompt` | No | First user turn when session is `claude --agent <name>` |

**`prompt` in CLI JSON:** For `--agents` JSON, use `prompt` instead of markdown body (same meaning).

**Plugin agents:** From plugins, `hooks`, `mcpServers`, and `permissionMode` in frontmatter are **ignored** — copy to `.claude/agents/` if you need them.

---

## Discovery & precedence

| Priority | Location | Scope |
|----------|----------|--------|
| 1 | `--agents` JSON | Current session only |
| 2 | `.claude/agents/` | Project (commit-friendly) |
| 3 | `~/.claude/agents/` | User, all projects |
| 4 | Plugin `agents/` | Lowest |

Same **name** → higher priority wins. **`claude agents`** lists agents by source and overrides.

Manual file adds: **restart** session or use **`/agents`** to pick up immediately.

---

## Invocation patterns

1. **Automatic** — Claude delegates when user request matches a subagent **`description`** (write clear descriptions; “use proactively” helps).
2. **Natural language** — “Use the `test-runner` subagent …”
3. **@-mention** — `@"code-reviewer (agent)" …` from typeahead; **guarantees** that subagent for the task (message still interpreted by main Claude to form the task prompt).
4. **Session as agent** — `claude --agent code-reviewer` or `"agent": "code-reviewer"` in `.claude/settings.json` — main thread uses that agent’s prompt + tools + model; **`CLAUDE.md` still loads**.

Built-in **plugin** agents: `claude --agent plugin-name:agent-name` (per doc).

---

## Permissions & spawning restrictions

- **Inherit:** Subagents **inherit parent tools** (and MCP) unless `tools` / `disallowedTools` restrict.
- **Both set:** `disallowedTools` first, then `tools` on the remainder. Tool in **both** → removed.
- **Main thread only (`claude --agent`):** Restrict which subagents can be spawned:  
  `tools: Agent(worker, researcher), Read, Bash` — only those **names**.  
  `Agent` alone = any subagent.  
  **Omit** `Agent` from tools → **cannot spawn** subagents.
- **Subagent definitions:** `Agent(worker, researcher)` has **no effect** — subagents **cannot spawn** subagents.
- **Deny globally:** `permissions.deny`: `["Agent(Explore)", "Agent(my-agent)"]` or CLI `--disallowedTools "Agent(Explore)"`.

---

## Foreground vs background

- **Foreground:** Blocks main thread; permission prompts flow to user.
- **Background:** Concurrent; permissions **pre-prompted**; clarifying tools may **fail** non-interactively.  
  Disable all background: `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1`.

---

## Resume, transcripts, compaction

- Each invocation starts a **new** instance unless **resumed** via **`SendMessage`** to **agent id** (shown after runs; also under `~/.claude/projects/{project}/{sessionId}/subagents/` as `agent-{id}.jsonl`).
- **Main** conversation compaction does **not** erase subagent transcripts (separate files).
- Subagents **auto-compact** ~95% context; override with `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE`.

---

## Hooks (subagent-scoped)

- **In agent frontmatter:** All hook events supported; common: `PreToolUse`, `PostToolUse`, `Stop` (runtime → **`SubagentStop`**).
- **In project `settings.json`:** `SubagentStart` / `SubagentStop` with **matcher** on agent type **name**.

See `HOOKS.md` for stdin JSON and exit codes.

---

## Persistent memory (`memory` field)

| Scope | Path idea (per docs) |
|-------|----------------------|
| `user` | `~/.claude/agent-memory/<agent>/` |
| `project` | `.claude/agent-memory/<agent>/` (shareable) |
| `local` | `.claude/agent-memory-local/<agent>/` (not for VCS) |

Enables Read/Write/Edit for memory files; primes **~200 lines or 25KB** of `MEMORY.md` into prompt.

**VENOM note:** This is **agent-local** memory, distinct from **`.venom/memory/MEMORY.md`** project brain — design which store holds what.

---

## Answers to prior checklist

| Question | Answer |
|----------|--------|
| Frontmatter schema | Table above — `name` + `description` required. |
| `Task` vs `Agent` | Same tool; **Agent** is current name. |
| `subagent_type` full list | **Built-ins** as named; **custom** = your **`name`** string. |
| Parallel wave execution | **Pattern** supported (“parallel using separate subagents”); no doc guarantee of OS-parallel **Agent** calls — orchestration-dependent. |
| @mention syntax | `@"name (agent)"` via picker. |
| Nested agents? | **No.** |
| Parent CLAUDE.md inside subagent? | Subagent does **not** get full parent system prompt; project instructions may still be loaded via normal **instruction** mechanisms for the session — see [InstructionsLoaded](https://docs.anthropic.com/en/docs/claude-code/hooks) hook. For strict “orchestrator reads CLAUDE only”, encode in **parent** CLAUDE + Agent **prompt** text. |
| Hooks in subagents? | Yes — scoped; **Stop** → **SubagentStop**. |

---

## VENOM design implications

1. **Nine minds as `.claude/agents/venom-*.md`** — Valid: each **`name`** is the spawn target for `subagent_type` / delegation.
2. **Wave / parallel builders** — Rely on **explicit main-thread instructions** to spawn multiple **independent** Agent calls with non-overlapping scopes; avoid assuming parallel execution order.
3. **“Hidden” builder** — No first-class **hidden** flag. Mitigations: **description** that discourages casual delegation, or **orchestrator-only** workflow in CLAUDE.md (“only main thread spawns builder”). **Cannot** both `deny` Agent(venom-builder) and use it from main without allow rules.
4. **Read-only researcher** — Match **Explore** pattern: `disallowedTools: Write, Edit` or explicit `tools: Read, Grep, Glob, …`.
5. **Rename `Task` in internal docs** — Cursor rules / old templates referencing **Task tool** should say **Agent** for Claude Code ≥ 2.1.63.

---

## References

- [Create custom subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
- [Tools reference](https://docs.anthropic.com/en/docs/claude-code/tools-reference)
- [Agent teams](https://docs.anthropic.com/en/agent-teams) — multi-session parallelism (different from subagents)

---

## Status checklist

- [x] Frontmatter schema captured  
- [x] Built-in vs custom naming  
- [x] Agent tool / Task alias  
- [x] Nesting / parallel / resume  
- [x] Permissions + `Agent(name)` restriction  
- [x] Hooks + Stop → SubagentStop  
