# Parts — each file, one job

> **Purpose:** A **part** is a canonical **file slot** in the VENOM body: one path, one responsibility. This is not “names” in the abstract (variables, people, brands) — it is **which files exist** and **what each is for**.
> **Status:** Living document. **BRAIN** remains **provisional** (that *filename* still under review).

---

## Status legend

| Tag | Meaning |
|-----|---------|
| **Stable** | Use in new instances; do not repurpose the filename. |
| **Provisional** | Idea locked enough to ship; **name or boundary may change**. |
| **Platform** | Correct meaning; file may exist only under `platforms/<x>/template/`. |
| **Vendor** | The product owns the name — we never overload it. |

---

## Core identity (loaded or human-facing)

| File | Purpose | Typical location | Status |
|------|---------|------------------|--------|
| **VENOM.md** | Full **soul**: identity, minds framing, pact tone, how you work — long-form “who” for a **deployed** project. | Project root (template) | Stable |
| **AGENTS.md** | **Dispatch**: which agent when; short routing; often early in `instructions` stacks. | Project root (template) | Stable |
| **STRUCTURE.md** | **Map of the main repo** — SSOT paths (not per micro-project). | Repository root | Stable |
| **MANIFEST.md** | **Narrative index** — what lives where, quick navigation. | Repository root | Stable |
| **VENOM-SURFACES.md** | **Body vs surfaces** — precedence when kits mount on VENOM. | Repository root | Stable |

---

## Governance & cross-platform (method, not soul)

| File | Purpose | Typical location | Status |
|------|---------|------------------|--------|
| **SPEC.md** | **Constitution** for a platform package: non-negotiables, idea loop, alignment. | e.g. `platforms/opencode/SPEC.md` | Stable (pattern) |
| **MATRIX.md** | **Injection map**: runtime × path × verify. | e.g. `platforms/opencode/MATRIX.md` | Stable (pattern) |
| **EAT.md** | **Assimilated inventory** of every kit under `platforms/` — layers, files, drift. | `platforms/EAT.md` | Stable (living) |
| **PARTS.md** | **This file** — registry of body files for all instances. | `anatomy/` | Stable |
| **SPAWN.md** | **Birth checklist** for new kits/instances. | `anatomy/` | Stable |

---

## Inside `.venom/` (operational brain per project)

| File | Purpose | Status |
|------|---------|--------|
| **CONTEXT.md** | **Assimilated** project truth — small, current, loaded often. | Stable |
| **BRAIN.md** | **Fixed cognitive patterns** / wiring (e.g. ten patterns). | **Provisional** — see below. |
| **memory/MEMORY.md** | **Cross-session** decisions and durable notes. | Stable |
| **learnings/corrections.yaml** | **Hard never-again** reflexes. | Stable |
| **learnings/instincts.yaml** | **Soft** learned patterns. | Stable |
| **work/ACTIVE.md** | **In flight** when context is ambiguous. | Stable |
| **INDEX.md** | **Directory map** for `.venom/` or subtree. | Stable |

### BRAIN.md — provisional

**Works well:** Marks “not CONTEXT, not MEMORY” — stable **wiring** for this instance.

**Friction:** “Brain” collides mentally with all of `.venom/`, `consciousness/`, neurochemistry docs.

**Candidates (choose later):** tighten header only · **PATTERNS.md** · **WIRING.md** · **COGNITION.md** · fold into **VENOM.md** if it stays short.

**Until locked:** Templates may keep **BRAIN.md**; record the final name **here** when you decide.

---

## Inside `.opencode/` and siblings (platform-native)

| File | Purpose | Status |
|------|---------|--------|
| **INDEX.md** | Map of subtree (commands, agents, skills, plugins). | Stable |
| **agents/*.md** | One **named agent** — `venom-<role>.md`. | Stable |
| **commands/*.md** | One **slash command** — `venom-<verb>.md`. | Stable |
| **skills/<ID>/SKILL.md** | **Invocable** skill; folder = skill id (**one** convention: kebab *or* SCREAMING_SNAKE — never both). | Stable |
| **`opencode.json`** | OpenCode config. | Vendor |

---

## Vendor strings we never reuse

`opencode.json`, `CLAUDE.md`, `.cursor/rules/*.mdc`, and `SKILL.md` **inside a skill folder** — reference only; do not assign unrelated VENOM docs those names.

---

## Adding a new part

1. Row here: **Purpose**, **location**, **Status**.
2. Line in `anatomy/SPAWN.md` if new instances must ship it.
3. `STRUCTURE.md` if main-repo SSOT moves.
4. `platforms/*/MANIFEST.md` if templates change.

---

*Renames and scope debates live in the history of this file — that is the audit trail.*
