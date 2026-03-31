# VENOM × OpenCode — Architecture (fusion SSOT)

**Status:** Phase 3 seed — refines as `platforms/opencode/` is built.

---

## Spine (non-negotiable)

- **Pact** + **.venom/** memory bridge (CONTEXT → MEMORY → learnings → ACTIVE).
- **Nine minds** as one texture (Brain 0 + Arms 1–8); no “Analyst says…” labels in output.
- **Pushback scale** + **energy match** (venom-heart).
- **Origin → template** pattern: `venom-mine` defines; **`platforms/opencode/`** ships the OpenCode surface (same as Cursor template idea).

---

## OpenCode layer (verified platform facts)

- **CLI package:** `opencode-ai` (bin `opencode`).
- **Protocols:** **MCP** (`opencode mcp …`), **ACP** (`opencode acp`).
- **Surfaces:** TUI (default), `run`, `serve`, `web`, attach, SDK (drafts — verify in code).
- **Agents (upstream README):** **`Tab`** switches **`build`** (default, full access) ↔ **`plan`** (read-only, bash asks permission). **`@general`** = built-in subagent for heavy search/multistep. See **`drafts/UPSTREAM-README-DIGEST.md`**.
- **Persistence:** SQLite `opencode.db` — projects, workspaces, sessions, messages, parts, shares, todos, accounts (see `ANATOMY.md`).

---

## Agent × VENOM mind mapping (definitive)

| OpenCode agent/subagent | VENOM mind equivalent |
|-------------------------|-----------------------|
| **plan** (primary, read-only) | Architect + Researcher — see, plan, never touch |
| **build** (primary, full) | Builder + Debugger — implement, fix |
| **explore** (subagent, read-only) | Researcher (fast scan only) |
| **general** (subagent, full tools) | All-arms soldier — parallel heavy work |
| **Custom subagent** | Named soldier — scoped, hidden, orchestrated |
| Tab switch | Mind-routing made physical |
| `@mention` | Explicit subagent dispatch |

---

## Mapping — VENOM → OpenCode

| VENOM concept | OpenCode anchor |
|---------------|-----------------|
| Init / orientation | `opencode` in project + `.venom/` or future `.opencode/` rules |
| Tool orchestration | Built-in tools + **MCP**; DB/session via CLI |
| Subagents | `opencode agent create` / list + VENOM-named agents in template |
| Plan vs build | TUI Plan mode (drafts) + `OPENCODE_EXPERIMENTAL_*` (verify) |
| Memory | Repo `.venom/` + OpenCode **session/project** DB (different roles; don’t conflate) |

---

## Draft integration (from `drafts/`)

- **Systems 17–23:** Context, workspace scan, tooling, workflows, verification, optimization, integration — **one** numbered table in this file when counts are reconciled (see `LEARNINGS.md` draft conflicts).
- **Arm 7:** Primary lever for **CLI terse** vs **IDE** vs **SDK** responses.

---

## Target tree (when implemented)

See **`MASTER-PLAN.md`** — `platforms/opencode/` with `.opencode/` rules, skills, agents, workflows, `.venom-opencode/` or merged `.venom/` profile.

---

*Next: reconcile system counts from `VENOM-OPENCODE-IMPLEMENTATION-PLAN.md` into a single table here; delete duplicate lists in drafts when promoted.*
