# After Claude Code rethink v3

> Template build (Waves 0–9) and synthesis closure are **done**. This file is the maintainer handoff.

## Automated check (no Claude UI)

From repo root:

```bash
bash platforms/claude-code/smoke-hooks.sh
```

Copies `platforms/claude-code/template` to a temp directory, runs each hook with minimal stdin JSON, asserts **stdout parses as JSON**. Safe: does not modify the committed template tree.

**CI:** GitHub Actions runs the same script on push/PR when `platforms/claude-code/**` changes — **`.github/workflows/claude-code-template.yml`**.

## Manual QA (disposition / TUI)

See **`06-build/DONE.md`** → **Final Alive Test Results**. Run inside a real project with the template installed.

## Optional release hygiene

- Git tag (example): `claude-code-template-v3.0.0` on the commit that ships v3 — avoids colliding with unrelated repo tags.
- Update **`06-build/WAVE9-SYNC.md`** checkbox if you tag.

## Deferred (not bugs — explicit scope cuts)

**`WAVE9-SYNC.md`:** Cursor parity for agents, hooks, commands — only if you start a **v3.1** or “Cursor lifecycle commands” initiative.

## Historical vs current audit

**`01-what-we-have/CURRENT-CLAUDE-CODE.md`** describes the **pre-v3 (v2.4)** template. Do not treat it as the current product; read the banner at top of that file.

## Starting a v3.1

1. New gap list in **`04-synthesis/GAPS.md`** (or a `V3.1-SCOPE.md` here).
2. Design delta in **`05-design/`** before wide template edits.
3. **`06-build/DECISIONS-LOG.md`** for build-time deviations.
