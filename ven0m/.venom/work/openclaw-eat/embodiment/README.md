# Embodiment — VENOM OpenClaw workspace draft

> **Canon:** [OPENCLAW-EAT-CANON.md](../OPENCLAW-EAT-CANON.md) · **Injection:** [OPENCLAW-INJECTION.md](../OPENCLAW-INJECTION.md) · **Spec:** [10-phases/02-prototype-venom.md](../10-phases/02-prototype-venom.md) · **State:** [../ACTIVE.md](../ACTIVE.md)

## What this is

Copy **`workspace/`** contents to your OpenClaw **workspace root** (the directory the gateway uses for bootstrap files). Then install/run OpenClaw per official docs and run the verification ladder in `02-prototype-venom.md` §5.

**Same bundle in the OpenClaw clone:** `openclaw-main/docs/reference/templates/venom/` + `pnpm apply-venom-workspace` (from `openclaw-main/`). `USER.md` there is a generic template; this `workspace/USER.md` stays Kariem-specific for your runs.

- **Tier:** T1 SOUL (compressed voice + Pact); AGENTS mirrors `venom-heart` routing; USER from identity (trimmed for bootstrap).
- **Not done until:** gateway load + **one** channel responds in character (exit gate X5).

## Layout

| Path | Role |
|------|------|
| `workspace/SOUL.md` | Persona, Pact, voice rules |
| `workspace/AGENTS.md` | Operating instructions, route table, init |
| `workspace/USER.md` | Kariem — language, pushback, working style |
| `workspace/TOOLS.md` | Tool behavior policy |
| `workspace/skills/*/` | Minimal three skills (spec / build / review) |

## Next

1. **Operator runbook:** [EMBODIMENT-RUN.md](./EMBODIMENT-RUN.md) — `config set agents.defaults.workspace`, gateway, logs, verification ladder.
2. **Exit tracking:** [CHECKLIST.md](./CHECKLIST.md) — gates X1–X5 + §4 per-file (update when channel proof is done).
3. Confirm no bootstrap truncation warnings ([BOOTSTRAP-SPIKE.md](../BOOTSTRAP-SPIKE.md)); iterate SOUL/AGENTS if tone drifts.
