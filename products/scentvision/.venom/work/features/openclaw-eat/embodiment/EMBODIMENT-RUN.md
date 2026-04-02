# Embodiment — runbook (gateway + verification)

> **Spec:** [10-phases/02-prototype-venom.md](../10-phases/02-prototype-venom.md) §5 · **Official:** [Gateway runbook](https://docs.openclaw.ai/gateway/index.md), [Bootstrapping](https://docs.openclaw.ai/start/bootstrapping.md)

This is the **operator** path for [ACTIVE.md](../ACTIVE.md) “Run Embodiment.” Repo-only work stops here; you run the CLI on your machine.

**Authority:** [OPENCLAW-EAT-CANON.md](../OPENCLAW-EAT-CANON.md) §1.1 — behavior and **version** for this folder follow **`openclaw-main/`** (`package.json` `version`), not an arbitrary global `openclaw` on PATH. Prefer commands from the clone.

---

## 0. Prereqs

1. **OpenClaw from `openclaw-main/`** (beside this folder): `cd openclaw-main && pnpm install`, then `pnpm openclaw --version`. That version should match `openclaw-main/package.json` `"version"`. Optional global `openclaw` on PATH is fine for convenience — if it disagrees with the clone, **use `pnpm openclaw`** for Embodiment.

If `pnpm openclaw config get` hangs, edit config per [CLI config docs](https://docs.openclaw.ai/cli/config.md) or set `agents.defaults.workspace` in your profile JSON instead of blocking on `get`.

2. This repo path to the draft workspace (adjust if your clone differs):

**Windows (PowerShell)**

```powershell
$VENOM_WS = "C:\Users\karie\Desktop\venom-mine\.venom\work\openclaw-eat\embodiment\workspace"
Test-Path $VENOM_WS   # should be True
```

---

## 1. Point OpenClaw at the VENOM workspace

Default agent workspace is `~/.openclaw/workspace`. **Either** copy `embodiment/workspace/*` into that folder **or** set the config path to this repo’s workspace (recommended for iteration).

```bash
# From openclaw-main/ (recommended):
pnpm openclaw config set agents.defaults.workspace "C:\Users\karie\Desktop\venom-mine\.venom\work\openclaw-eat\embodiment\workspace"
```

Use **your** absolute path. On Unix, use single quotes if the path has spaces.

**venom-mine dev machine:** this `config set` is **already applied** (see [ACTIVE.md](../ACTIVE.md)). Restart gateway before continuing.

Confirm:

```bash
pnpm openclaw config get agents.defaults.workspace
```

**Note:** First-run bootstrapping may seed extra files in a *new* workspace — if OpenClaw overwrites templates, merge VENOM files back or disable automatic seeding per [configuration reference](https://docs.openclaw.ai/gateway/configuration-reference.md) (`workspaceBootstrap` / docs for your version).

---

## 2. Start the gateway

From the [gateway runbook](https://docs.openclaw.ai/gateway/index.md). **From `openclaw-main/`:**

```bash
pnpm openclaw gateway --port 18789
# optional: --verbose
```

**Health:**

```bash
pnpm openclaw gateway status
pnpm openclaw status
```

Expect: runtime running, RPC probe ok (exact wording may vary by version).

---

## 3. Truncation check (bootstrap spike)

Watch logs (stdio or `pnpm openclaw logs --follow`). **Bad:** lines about bootstrap files truncated or over `bootstrapMaxChars`. **Good:** session runs with your `SOUL.md` / `AGENTS.md` text intact.

If truncated, raise limits (already documented in [BOOTSTRAP-SPIKE.md](../BOOTSTRAP-SPIKE.md)):

```bash
pnpm openclaw config set agents.defaults.bootstrapMaxChars 20000
pnpm openclaw config set agents.defaults.bootstrapTotalMaxChars 150000
```

(Defaults match spike; only bump if you expanded files.)

---

## 4. One channel (exit gate X5)

Minimum: **one** end-to-end path where the model answers **in character** (answer-first, no filler — spot-check against [02-prototype-venom.md](../10-phases/02-prototype-venom.md) §3.1).

Examples:

- Configure a channel per [channels docs](https://docs.openclaw.ai/channels/index.md) + [EXTERNAL-RESOURCES.md](../EXTERNAL-RESOURCES.md), then send a test message.
- Or use the **CLI / control UI** transcript if that’s your first green path — still verify **voice**, not generic assistant tone.

```bash
pnpm openclaw channels status --probe
```

---

## 5. Verification ladder (order)

| Step | Check |
|------|--------|
| 1 | Bootstrap loads **without** truncation warnings |
| 2 | One message end-to-end; answer-first + never-list spot-check |
| 3 | One ambiguous ask → pushback or single clarifying question, not sycophancy |

When all three pass, tick [CHECKLIST.md](./CHECKLIST.md) and note date + channel in [ACTIVE.md](../ACTIVE.md).

---

## 6. Links (no duplication)

| Doc | Role |
|-----|------|
| [embodiment/README.md](./README.md) | What’s in `workspace/` |
| [BOOTSTRAP-SPIKE.md](../BOOTSTRAP-SPIKE.md) | Char limits + config keys |
| [EXTERNAL-RESOURCES.md](../EXTERNAL-RESOURCES.md) | Official URLs |
