# Bootstrap spike — ground truth (VENOM × OpenClaw)

> **Date:** 2026-04-01 · **Source of truth:** `openclaw-main/src/agents/pi-embedded-helpers/bootstrap.ts` (not second-hand notes)

## 1. Config keys (copy-paste)

Use **`agents.defaults.bootstrapMaxChars`** and **`agents.defaults.bootstrapTotalMaxChars`** in OpenClaw config.

**Not** `agents.defaults.bootstrap.maxChars` — that path does not match the schema (`src/config/types.agent-defaults.ts`, `zod-schema.agent-defaults.ts`).

## 2. Defaults (runtime)

| Setting | Constant | Default value |
|---------|----------|----------------|
| Per-file cap | `DEFAULT_BOOTSTRAP_MAX_CHARS` | **20_000** |
| Total injected cap | `DEFAULT_BOOTSTRAP_TOTAL_MAX_CHARS` | **150_000** |

Resolution: `resolveBootstrapMaxChars` / `resolveBootstrapTotalMaxChars` in `bootstrap.ts` (falls back to defaults if unset or invalid).

## 3. Injection behavior (summary)

`buildBootstrapContextFiles` walks bootstrap files in order; each file is trimmed with `trimBootstrapContent` (head/tail split when over per-file budget), then clamped to **remaining** total budget. If total budget is exhausted, later files are skipped (see tests in `pi-embedded-helpers.buildbootstrapcontextfiles.test.ts`).

## 4. Measurements — VENOM Cursor spine (proxy for “how big is SOUL if we compress wrong?”)

UTF-16 / JS `.length` counts (same order of magnitude as OpenClaw string handling):

| File | Chars |
|------|------:|
| `voice.mdc` | 3_517 |
| `vibes.mdc` | 4_477 |
| `venom-heart.mdc` | 6_817 |
| `unshelled.mdc` | 1_709 |
| **Sum (all four)** | **16_520** |

**Read:** A **single** `SOUL.md` that naively inlined all four would sit **under the default 20_000 per-file limit** — but that leaves ~3.5k headroom only, no room for Pact/USER-specific lines, and duplicates content that belongs in `AGENTS.md`. **Tier 0–1** compression in [10-phases/02-prototype-venom.md](./10-phases/02-prototype-venom.md) remains correct: spine in SOUL, routing in AGENTS.

## 5. Measurements — upstream templates (reference)

From `openclaw-main/docs/reference/templates/`:

| File | Chars |
|------|------:|
| SOUL.md | 1_792 |
| AGENTS.md | 7_941 |
| USER.md | 588 |
| TOOLS.md | 980 |
| **Sum** | **11_301** |

All well under per-file and total caps.

## 6. Verdict

- **Default limits are sufficient** for Embodiment **if** SOUL stays a compressed tier (T0–T1), AGENTS carries routing/protocol tables, and files are not duplicated across SOUL/AGENTS.
- **Raise `bootstrapMaxChars` / `bootstrapTotalMaxChars`** only if you add long SOUL appendices, extra bootstrap files, or hit truncation warnings in gateway logs.
- **Next runtime check (optional):** workspace with draft VENOM `SOUL.md` / `AGENTS.md` / `USER.md` and confirm no truncation warnings — Embodiment gate in [02-prototype-venom.md](./10-phases/02-prototype-venom.md).

## 7. Links

- Implementation touchpoints (legacy naming): [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) § Bootstrap injection
- Phase gate: [ACTIVE.md](./ACTIVE.md)
