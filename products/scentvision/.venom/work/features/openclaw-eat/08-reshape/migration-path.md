# Migration path — Cursor / Claude Code → OpenClaw workspace

> **Goal:** Ordered steps to move from **IDE-anchored** VENOM (`.cursor/`, `.claude/`, `.venom/`) to **OpenClaw** workspace bootstrap without losing voice.  
> **Embodiment:** [10-phases/02-prototype-venom.md](../10-phases/02-prototype-venom.md)

---

## 0. Preconditions

- [ ] Phase 1 Map docs usable: [soul-mapping.md](./soul-mapping.md), [crew-as-config.md](./crew-as-config.md), [pact-as-policy.md](./pact-as-policy.md)
- [ ] Bootstrap spike done or in lockstep: [IMPLEMENTATION-PLAN.md](../IMPLEMENTATION-PLAN.md)
- [ ] OpenClaw installed (local or VPS); gateway can start

---

## 1. Extract (don’t rewrite from memory)

| From | To |
|------|-----|
| `.cursor/rules/voice.mdc` | SOUL tier T0–T2 ([soul-mapping.md](./soul-mapping.md)) |
| `.cursor/rules/venom-heart.mdc` | AGENTS routing + pushback |
| `.venom/memory/MEMORY.md` | Seed or pointer — **no** private paste in public repo |
| `identity/KARIEM.md` + prefs | `USER.md` |
| Claude skills / commands | Workspace `skills/` — one SKILL.md per workflow |

---

## 2. Install VENOM bootstrap files

1. Create or select OpenClaw **workspace** directory.
2. Add `SOUL.md`, `AGENTS.md`, `USER.md`, `TOOLS.md` (VENOM versions).
3. Set gateway / agent config to load workspace (per official bootstrap doc).
4. Run load test — **no** truncation warnings in logs.

---

## 3. Wire channels (Embodiment minimum)

1. One channel only (e.g. Telegram or CLI transcript).
2. Send a message that triggers **pushback** — confirm not sycophancy.
3. Send mixed-language ping if USER requires — confirm register.

---

## 4. Deprecate / parallel run

| Phase | Behavior |
|-------|----------|
| Embodiment | Cursor + OpenClaw **both** valid — truth in METHODOLOGY hierarchy |
| VENOCTIS | Gateway is primary for overnight; IDE for dev |
| Ship | Document “recommended install” for OSS users |

---

## 5. Rollback

- Keep a **git tag** or copy of default OpenClaw templates before overwrite.
- Workspace path: document in `ACTIVE.md` if non-default.

---

## 5b. Secrets (Embodiment prep)

[PLANNING-GAPS.md](../PLANNING-GAPS.md) §6 — minimal policy before any channel with tokens:

- **Never** embed secrets in `SOUL.md` / `AGENTS.md` / committed skills — use env, gateway SecretRefs, or host-level config per OpenClaw docs.
- **Rotate** Telegram / Discord / provider keys on compromise; scope API keys and PATs minimally.
- Document **where** this workspace stores secrets (path pattern only, no values) in `ACTIVE.md` or a private runbook.

---

## 6. Checklist

- [ ] D:\UNSHELLED.AI philosophy merged only where METHODOLOGY says (timing)
- [ ] No second personality in SOUL “for Telegram”
- [ ] Embodiment exit gates in [02-prototype-venom.md](../10-phases/02-prototype-venom.md) §2 satisfied

---

*Migration is extraction + measurement — not a new myth.*
