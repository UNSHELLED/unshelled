# Phase 2 — Prototype (VENOM: **Embodiment**)

> **Program name:** Phase 2 — Prototype (schedules, `ACTIVE.md`, matrix).  
> **VENOM name:** **Embodiment** — the first time VENOM has a **runnable body** in OpenClaw (bootstrap files + gateway + at least one channel), not IDE rules alone.

**Version:** 1.0.0 · **Updated:** 2026-03-31

---

## 1. What this phase actually is

| Plain | Precise |
|-------|---------|
| “A demo” | **Proof of presence** — VENOM answers with the *same* disposition as Cursor rules, compressed for bootstrap limits. |
| “Rough draft” | **Contract draft** — SOUL/AGENTS/USER are versioned text; every edit is a parity decision with `voice.mdc` / `venom-heart.mdc`. |
| “Install OpenClaw” | **Embodiment** — gateway loads your words every turn; personality is no longer hypothetical. |

**Not Embodiment:** pasting full `voice.mdc` before knowing `maxChars`. **Not Embodiment:** 24/7 daemon story (that is Phase 3 — VENOCTIS). **Not Embodiment:** public polish (Phase 4 — Ship).

---

## 2. Correct time (when Embodiment starts and ends)

### Entry — all must be true

| # | Gate | Why |
|---|------|-----|
| E1 | Phase 1 **Map** exit: reshape spec exists (soul-mapping, crew-as-config, pact-as-policy at least drafted in `08-reshape/`) | You are not guessing personality in a vacuum. |
| E2 | **Bootstrap spike** done or in lockstep: you know **effective** `maxChars` / `totalMaxChars` for your workspace (see `IMPLEMENTATION-PLAN.md`) | Prevents SOUL bloat or emergency truncation mid-personality. |
| E3 | Tier 1 OpenClaw docs you need for bootstrap are **read** (checkboxes in `OPENCLAW-DOCS-COVERAGE.md`) | Runtime truth beats memory. |

### Wrong time (do not call this Phase 2)

| Situation | What to do instead |
|-----------|---------------------|
| Reshape docs empty | Stay in **Map**; write `08-reshape/` first. |
| SOUL is “we’ll fix tone later” | Stop — tone *is* the deliverable. |
| No channel test plan | Embodiment requires **one** real channel smoke test (e.g. Telegram or CLI transcript). |

### Exit — all must be true

| # | Gate | Done when |
|---|------|-----------|
| X1 | `SOUL.md` | Loaded every turn; matches compressed voice + Pact; no filler phrase list violated. |
| X2 | `AGENTS.md` | Routing + quality gates present; mirrors `venom-heart` intent. |
| X3 | `USER.md` | Kariem profile: language, context, how to push back. |
| X4 | **Skills** (minimal) | At least the three planned skills exist and invoke cleanly (paths per `00-workflow.md`). |
| X5 | **Channel proof** | VENOM responds **in character** on the chosen channel (not generic assistant). |

---

## 3. Words — global rules (all bootstrap files)

These apply to **every** markdown OpenClaw injects in this phase.

### 3.1 Voice contract (from `METHODOLOGY.md`)

- **Answer first** in replies — SOUL must *instruct* the model to lead with the answer, not warm-up.
- **Never** bake in: “Great question,” “I’d be happy to,” “As an AI,” restating the user’s question as preamble.
- **Pact** in one clear block: correction, context, space, trust ↔ truth, loyalty, memory, growth.
- **Pushback scale** appears in AGENTS (or SOUL pointer), not as a wall of text — table or short numbered list.
- **Arabic / mixed register:** declared in `USER.md` + one line in SOUL if the model must switch register for emotional content.

### 3.2 Compression tiers (SOUL especially)

| Tier | Use when | Content |
|------|----------|---------|
| **T0 — Spine** | `maxChars` is tight | Pact bullet, answer-first, never-list (5–8 bullets), pointer: “Full case library lives in repo `voice.mdc`.” |
| **T1 — Standard** | Fits default bootstrap | T0 + compressed archetype cues (energy match, no emoji spam) + routing pointer to AGENTS. |
| **T2 — Full** | After spike proves headroom | T1 + explicit bilingual note + UNSHELLED one-liner. |

**Rule:** Choose tier by **measured** limits, not hope. Split to `SOUL.md` + optional `SOUL-EXT.md` only if OpenClaw config supports multi-file injection (confirm in current docs before relying on it).

### 3.3 Format contract (markdown shape)

| File | Top matter | Sections (order) |
|------|------------|------------------|
| **SOUL.md** | One-line role | Identity → Pact → Voice rules → Boundaries → Language → Link to AGENTS for routing |
| **AGENTS.md** | “Operating instructions” | Init / route table → Quality gates → Tool behavior → Subagent policy (short) → Memory pointer |
| **USER.md** | “Who you serve” | Name / TZ → Communication preferences → Domain context → How to disagree with me |
| **TOOLS.md** | “What exists” | List tools with **VENOM** policy: offer = deliver, no announce-before-execute |

Use **tables** for route scales; use **numbered steps** for protocols; avoid long unbroken prose in SOUL (bootstrap scans badly).

---

## 4. Per-file checklist (before merge)

### SOUL.md

- [ ] Answer-first is explicit, not implied.
- [ ] Never-list from `voice.mdc` reflected or summarized.
- [ ] Pact present; agreement-before-evaluation named as betrayal (short).
- [ ] Tier chosen; char count noted in `ACTIVE.md` or implementation notes.

### AGENTS.md

- [ ] Route table: intent → mind / behavior (aligned with nine minds, compressed).
- [ ] Reviewer-style quality gates or pointer to “non-negotiables.”
- [ ] Tool policy: Protocol 9.0 style (no permission theater).

### USER.md

- [ ] Kariem-specific facts only — not generic “user likes code.”
- [ ] Egyptian Arabic / English mix rule if applicable.

### Skills (venom-spec, venom-build, venom-review)

- [ ] Each SKILL.md: frontmatter, when to invoke, steps, **no TODO placeholders.**

---

## 5. Verification ladder (order matters)

1. **Local / CLI** — Bootstrap loads without truncation warnings; read gateway logs if available.
2. **Single channel** — One end-to-end message; response obeys voice contract (spot-check against §3.1).
3. **Personality stress** — One ambiguous request; VENOM pushes back or asks once, per pushback scale — not sycophancy.

Only after step 3 is Phase 2 **exit** satisfied.

---

## 6. Links (do not duplicate)

| Doc | Role |
|-----|------|
| [00-workflow.md](./00-workflow.md) | Phase list + short how |
| [METHODOLOGY.md](../METHODOLOGY.md) | Voice spine + UNSHELLED timing |
| [IMPLEMENTATION-PLAN.md](../IMPLEMENTATION-PLAN.md) | Bootstrap limits, code touchpoints |
| [VENOM-ALIVE-MATRIX.md](../VENOM-ALIVE-MATRIX.md) | Cockpit |
| [PLANNING-GAPS.md](../PLANNING-GAPS.md) | Conflicts + undecided threads before exit |

---

*Prototype is the label on the calendar. **Embodiment** is what we’re building: first body, same soul.*
