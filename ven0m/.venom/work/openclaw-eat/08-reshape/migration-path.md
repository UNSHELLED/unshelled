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
3. **Language switch (EN ↔ Egyptian Arabic)** — see §3b below (pass/fail recorded in [embodiment/CHECKLIST.md](../embodiment/CHECKLIST.md) / [ACTIVE.md](../ACTIVE.md) when operator runs).

### 3b. EN ↔ Egyptian Arabic — verification ladder (operator)

**Prereq:** [embodiment/workspace/USER.md](../embodiment/workspace/USER.md) §Language already states register rules. This ladder is **what to run** in a live session; agents do not execute it.

| Step | Action | Pass |
|------|--------|------|
| 1 | Same session: technical question **in English** → short follow-up in **Egyptian Arabic** (casual line). | Reply matches **Arabic** register (dialect, warmth) without reverting to English-only or MSA unless asked. |
| 2 | Same session: **Arabic** emotional line → immediate **English** technical ask. | Switches to **English** for precision; no scolding about language choice. |
| 3 | Optional | Mixed message (code + Arabic) — code stays literal; Arabic handled per USER. |

**Fail / iterate:** If the model stays in one language or lectures on “pick one language,” tighten `USER.md` + `SOUL.md` cues and retest — see [PLANNING-GAPS.md](../PLANNING-GAPS.md) §8.

**Resolve gap:** [00-gap-analysis.md](./00-gap-analysis.md) language checkbox flips to **[x]** when §3b passes on at least one channel (date in ACTIVE).

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
