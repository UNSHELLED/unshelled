# Spawn — new instance checklist

> **Purpose:** Before a **platform kit** or **project template** ships, run this so names and load paths stay **honest** — no phantom files, no duplicate souls.
> **Registry:** `anatomy/PARTS.md`

---

## 1. Scope

| Question | Shapes the instance |
|----------|---------------------|
| **Main** repo, **platform template**, or **one-off project**? | Main → `STRUCTURE.md`. Template → `platforms/<x>/MANIFEST.md`. |
| Which runtimes must share the same soul? | OpenCode / Cursor / Claude Code → add or update a **MATRIX** row (`platforms/opencode/MATRIX.md` as pattern). |

---

## 2. Default name pack (VENOM-speaking instances)

| File | One-line job |
|------|----------------|
| **VENOM.md** | Soul + pact + how you work |
| **AGENTS.md** | Dispatch |
| **.venom/CONTEXT.md** | Project brain (stub → grows) |
| **.venom/INDEX.md** | Map of `.venom/` |

Common additions:

| File | Job |
|------|-----|
| **.venom/BRAIN.md** | Fixed patterns / wiring (**provisional** — `PARTS.md`) |
| **.venom/memory/MEMORY.md** | Durable decisions |
| **.venom/learnings/corrections.yaml** | Hard reflexes |
| **.venom/learnings/instincts.yaml** | Soft patterns |
| **.venom/work/ACTIVE.md** | Current focus |

Platform trees → that platform’s `MANIFEST.md` + `.opencode/INDEX.md` (or equivalent).

---

## 3. Do not ship with

- Two files both claiming the **single** soul.
- **Generic** filenames (`notes.md`, `config.md`) for canonical bodies.
- **Mixed** skill-folder conventions (`VENOM_OPENCODE` vs `venom-opencode`) in one tree.

---

## 4. Verify

- **OpenCode:** `opencode debug config`, `opencode debug skill` (if used); confirm `instructions` order.
- **Cursor:** Rules / skills actually attach.
- **Claude Code:** Fresh session loads `CLAUDE.md` / skills as designed.

Write verify commands into the platform **MATRIX.md**.

---

## 5. Register

- New **platform** under `platforms/<name>/`: **SPEC.md** + **MATRIX.md** when methodology matters; mirror files in `MANIFEST.md`.
- New **SSOT** at main root: update `STRUCTURE.md`.

---

*Procedure here; truth of parts in `PARTS.md`.*
