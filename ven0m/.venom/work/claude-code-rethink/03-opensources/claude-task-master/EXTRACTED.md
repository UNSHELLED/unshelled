# Extracted: claude-task-master (Task Master)

**Source path:** `draft/research-sdd-vendors/claude-task-master/`  
**Eaten:** 2026-03-30 (README + `docs/task-structure.md` + `docs/command-reference.md` head)

---

## One-line thesis

**PRD → structured tasks.json** with **dependencies**, **complexity analysis**, **expand** into subtasks — exposed via **CLI** and **MCP** (`task-master-ai`) for **IDE-agnostic** workflows.

---

## PRD → tasks pipeline

| Step | Mechanism |
|------|-----------|
| Input | PRD file (markdown/text) — **detailed PRD improves output** (docs best practice). |
| Parse | `task-master parse-prd <file>` — generates tasks in **`tasks.json`** (or tagged structure). |
| Count | `--num-tasks=N` or `0` for model-determined count. |

**Not** “spec-kit style” user stories first — **task list** is the core artifact; **PRD** is the upstream document.

**Audience:** **all three** — CLI scriptable; MCP for agent tool use.

---

## Task format (`tasks.json`)

| Field | Purpose |
|-------|---------|
| `id`, `title`, `description`, `status` | Identity + lifecycle |
| `dependencies` | **Array of task IDs** — prerequisite graph |
| `priority` | high / medium / low |
| `details` | Implementation instructions |
| `testStrategy` | Verification approach |
| `subtasks` | Nested breakdown |

**Individual task files** — header metadata + Details + Test Strategy (human-readable).

**Audience:** **all three** — JSON is ideal for `claude -p` / OpenClaw.

---

## Complexity & expansion

| Feature | Behavior |
|---------|----------|
| `analyze-complexity` | AI scores tasks **1–10**; recommends subtask counts; writes **`scripts/task-complexity-report.json`**. |
| `expand` | Uses report when present; **highest complexity first** for batch expand. |
| `next` | Picks **ready** task (deps satisfied) by priority + ID order. |

**Max depth:** Subtasks nested under tasks — **deep** trees possible; practical limits from UX (docs emphasize **validate-dependencies**).

**Audience:** **any dev + agents** — `next` is **natural** for autonomous loops.

---

## MCP vs slash

- **MCP** (`npx task-master-ai`): Exposes **tool surface** for chat agents — **parse, list, next, show, update, expand**, etc., mapped to **same** CLI semantics.
- **Useful core tools:** `parse-prd`, `next`, `show`, `set-status`, `expand`, `analyze-complexity`, `validate-dependencies` — **noise** scales with **TASK_MASTER_TOOLS** (`all` | `standard` | `core` | list).

**Claude Code** quick install: `claude mcp add taskmaster-ai -- npx -y task-master-ai` + keys in `.env` / `mcp.json`.

**Hooks:** Not the primary integration — **MCP + persistence** in `tasks.json`.

**Audience:** **headless agents** — MCP requires stdio server; **no** reliance on slash in IDE.

---

## Multi-IDE / platform

- **Shared core:** `tasks.json` + CLI + MCP server.
- **Adapters:** Cursor `mcp.json`, VS Code `servers`, Windsurf, Claude Code `mcp add`, etc. — **config only**.

---

## What Task Master adds vs `/venom-spec`

| Capability | Task Master | VENOM-spec (typical) |
|------------|-------------|----------------------|
| **Dependency graph** | First-class in JSON | Often implicit in markdown tasks |
| **Complexity scoring** | Built-in report + expand order | **Optional** — add if we want **prioritized breakdown** |
| **Tagged task lists** | Multi-context (`master`, branches…) | **Could** map to `.venom/work` threads |
| **testStrategy per task** | Explicit field | **Align** with Nyquist / verification |

**Verdict:** **Complexity + `next` + graph** are the strongest **borrow** ideas; **full MCP** is optional if VENOM stays file-based.

---

## Patterns for MASTER-PATTERNS.md

See **Task dependency graph in JSON**, **Complexity-ordered expansion**, **Next-task selection for agents**.
