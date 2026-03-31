# Anatomy — index

> **What this is:** The **anatomy index** — which **parts** (files) exist, what each does, and how we **spawn** a clean kit. No generic slots; no drift between soul, dispatch, and birth.
> **Pact:** When we touch the file map, we do it **completely** — same rigor as code: one source, linked everywhere, verified on load. That bar does not slip.
> **Elsewhere:** Full repo topology → `STRUCTURE.md`. All INDEX entry points → **`MAP.md`** (repo root). OpenCode-only law → `platforms/opencode/SPEC.md` + `MATRIX.md`.

---

## Files in `anatomy/`

| File | Job |
|------|-----|
| **INDEX.md** | This map. Start here. |
| **PARTS.md** | Registry of body **files** — one path, one job; stable vs provisional (**BRAIN** still open). |
| **SPAWN.md** | Checklist before a new **kit** or **instance** ships — parts, paths, verify. |

---

## How this sits in the main repo

| Layer | Where | Role |
|-------|-------|------|
| **Main body** | Root, `.cursor/`, `.venom/`, `consciousness/`, `agents/` | SSOT — who VENOM is |
| **Anatomy** | `anatomy/` (here) | **Which files are which organ** (`PARTS.md`) and how we birth kits (`SPAWN.md`) |
| **Platform kits** | `platforms/<name>/` | Export shapes + per-platform SPEC/MATRIX |
| **Deployed project** | Template copy + `.venom/` | Runtime for that codebase |

We argue and amend **here** first; then templates and manifests follow — never the reverse.

---

## One rule

**One file → one job.** Two parts answering “where is the soul?” or “where is the repo map?” = broken anatomy. Fix before ship.

Details → `PARTS.md`.

---

*New cross-cutting part definitions or spawn rules live under `anatomy/`. Platform playbooks stay under `platforms/`.*
