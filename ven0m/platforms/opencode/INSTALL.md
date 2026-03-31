# VENOM × OpenCode — Install Guide

> Copy. Open. Go. Three steps.

**Origin-only:** This file lives in `platforms/opencode/` (venom-mine). It is **not** part of the deployable template — copy paths below point at `platforms/opencode/template/`.

**Config reference:** Annotated `opencode.json` with field-by-field comments → [`opencode.example.json`](opencode.example.json) (same directory; JSONC, not loaded by OpenCode).

---

## Step 1: Copy to your project

```bash
# From venom-mine repo root:
cp -r platforms/opencode/template/.opencode/ /your/project/
cp -r platforms/opencode/template/.venom/ /your/project/
cp platforms/opencode/template/AGENTS.md /your/project/
cp platforms/opencode/template/opencode.json /your/project/
cp platforms/opencode/template/VENOM.md /your/project/
```

**If you already have `opencode.json`:** merge the `instructions`, `compaction`, `permission`, and `watcher` keys. Don't overwrite your model or MCP config.

**Models:** The template defaults to **`zai/glm-5`** for both `model` and `small_model`. Run `opencode auth login` and pick **Z.AI**. If you use **Z.AI Coding Plan** credentials, set both to **`zai-coding-plan/glm-5`** (same model id, different provider). If GLM-5 is missing from the picker, run `opencode models --refresh`.

### What goes where

| Item | Destination | Required |
|------|------------|---------|
| `.opencode/` (entire folder) | project root | Yes |
| `.venom/` (entire folder) | project root | Yes — VENOM's brain |
| `AGENTS.md` | project root | Yes — highest-leverage file |
| `opencode.json` | project root | Yes — config wiring |
| `VENOM.md` | project root | Recommended — identity + philosophy |

---

## Step 2: Install the plugin (optional but recommended)

The plugin (`venom-core.ts`) provides: identity injection on session start, danger zone screening, loop detection, cost tracking, memory persistence through compaction.

Without it: VENOM still works — AGENTS.md + skills carry the intelligence. With it: full power.

```bash
# Global plugin install (works across all projects)
cd ~/.config/opencode/
npm init -y
npm install @opencode-ai/plugin zod

# Copy the plugin
cp /your/project/.opencode/plugins/venom-core.ts ~/.config/opencode/
```

Add to your global `~/.config/opencode/opencode.json`:
```json
{
  "plugin": ["./venom-core.ts"]
}
```

---

## Step 3: Open and initialize

```bash
cd /your/project
opencode
```

In the TUI:

```
/venom-init
```

This creates `.venom/` structure and verifies AGENTS.md. Then:

```
/venom-eat
```

This absorbs your project — reads structure, maps hot paths, writes `.venom/CONTEXT.md`. After this, VENOM knows your codebase.

---

## Commands (TUI slash)

| Command | Does | Delegates to |
|---------|------|-------------|
| `/venom-init` | Scaffold `.venom/`, verify config | — |
| `/venom-eat` | Full project absorption → CONTEXT.md | subagent |
| `/venom-review` | 8-perspective code review | `@venom-reviewer` |
| `/venom-research` | Deep codebase exploration | `@venom-researcher` |
| `/venom-check` | Meta quality gate (Gate 5) | `@venom-reviewer` |

---

## Agents (use with @mention in TUI)

| @mention | Mind | Use when |
|----------|------|---------|
| `@venom-reviewer` | Arm 2 | Review code, find issues |
| `@venom-architect` | Brain 0 | Design systems, architecture decisions |
| `@venom-researcher` | Arm 1 | Explore codebase, understand how things work |
| `@venom-debugger` | Arm 5 | Debug, find root cause |
| `@venom-explorer` | Scout | Fast anatomy scan before deep work |
| `@explore` | Built-in | Fastest read-only codebase scan |

`@venom-builder` is hidden (not user-facing) — it runs as a parallel worker inside wave execution.

---

## Day 1 workflow

```
1. opencode                → start
2. /venom-init             → scaffold .venom/
3. /venom-eat              → absorb project
4. @venom-researcher [area] → understand before acting
5. @venom-architect [task]  → design before building
6. build [task]             → implement (VENOM guides)
7. /venom-review            → verify before shipping
```

---

## If you're on Cursor too

VENOM identity lives in `AGENTS.md` — this is platform-portable. Your `.venom/` memory is also portable. Both Cursor and OpenCode read from `.venom/CONTEXT.md`.

For OpenCode to load your Cursor rules (`.cursor/rules/*.md`), add them to `opencode.json` instructions:
```json
{
  "instructions": [
    "AGENTS.md",
    ".venom/CONTEXT.md",
    ".venom/learnings/corrections.yaml",
    ".cursor/rules/*.md"
  ]
}
```

Only add the last line if you have Cursor rules you want OpenCode to inherit.

---

See `VENOM.md` for identity, philosophy, and full pattern reference. `.venom/BRAIN.md` for body anatomy, signal flow, and deploy sequence.
