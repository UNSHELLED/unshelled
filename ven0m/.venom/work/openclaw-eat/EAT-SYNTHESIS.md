# OpenClaw eat — clean synthesis

> **Canon:** [OPENCLAW-EAT-CANON.md](./OPENCLAW-EAT-CANON.md) — track map + OpenClaw-first rule.  
> One-page **mental model** for VENOM-on-OpenClaw. Details stay in per-topic MDs; this file does not duplicate them.

**Status:** Phase 0 — corpus integrated · **Hub:** [INDEX.md](./INDEX.md) · **Plan:** [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) · **Bookmarks:** [EXTERNAL-RESOURCES.md](./EXTERNAL-RESOURCES.md) · **Full OpenClaw doc checklist:** [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) · **09 index:** [09-source/INDEX.md](./09-source/INDEX.md)

---

## 1. What we are building

**OpenClaw** = gateway + channels + sessions + tools + memory + plugins.  
**pi stack** = `@mariozechner/pi-agent-core` (loop + tools) + `@mariozechner/pi-ai` (LLM stream).  
**VENOM reshape** = replace default **personality** (AGENTS / SOUL / USER / TOOLS) and policies — not rewrite the whole engine unless we fork pi-mono.

**Intent:** We are **eating** the `openclaw-main/` corpus to inject UNSHELLED / VENOM **on our terms** (workspace → config → optional source patches). Statement: [OPENCLAW-INJECTION.md](./OPENCLAW-INJECTION.md).

**VENOM words (naming, crew, Pact):** [UNSHELLED-VOICE-FEED.md](./UNSHELLED-VOICE-FEED.md) pulls from `D:\UNSHELLED.AI` — not invented in-repo.

---

## 2. End-to-end signal flow

```
Channel message
    → Gateway (auth, routing)           [01, 11]
    → Session resolve / thread bind     [07, 05]
    → Workspace + bootstrap inject      [02]
    → Agent loop (pi-embedded-runner)   [02]
         ↔ pi-agent-core (stream → tools → stream) [12]
         ↔ pi-ai (provider stream)       [06]
    → Tool executor + policy            [03]
    → Memory read/write + vector search [04]
    → Compaction when near limit        [08]
    → Response out channel              [05]
```

**Parallel / background:** sub-agent spawn + announce [09]. **Extensibility:** plugins [10].

---

## 3. Corpus map (this workspace)

| Area | Path | Notes |
|------|------|--------|
| Source deep dive | `09-source/00`–`12` | [INDEX.md](./09-source/INDEX.md) |
| Anatomy (docs-shaped) | `01-anatomy/` | 00 overview → installation |
| Mind / memory | `02-mind/` | Aligns with 02, 04, 08 |
| Tools / channels / skills / sub-agents / security | `03`–`07` | Topic buckets |
| VENOM gaps | `08-reshape/00-gap-analysis.md` | Phase 1 input |
| Phases | `10-phases/00-workflow.md` | 0→4 roadmap |
| OpenClaw clone | `openclaw-main/` | Ground truth for paths |
| pi upstream | `09-source/pi-mono/` | Agent + AI packages |

---

## 4. VENOM touchpoints (reshape)

| System | Primary lever for VENOM |
|--------|-------------------------|
| Identity | Bootstrap files + `SOUL.md` size vs compaction [08] |
| Quality | Tool policy + loop detection [03] |
| Reach | Channels as-is [05]; Telegram / Discord for VENOCTIS |
| Memory | OpenClaw MEMORY + vector [04] vs `.venom/` — bridge in plan |
| Crew | Sub-agents for heavy minds only [09]; rest = disposition |
| Safety | Gateway auth, sandbox docs [01, 07-security] |

---

## 5. Open questions (cross-cutting)

Tracked in each `09-source/*.md` **Questions** section. Global themes:

- Session + gateway behavior under load [00, 01, 07]
- Exact compaction config vs large VENOM SOUL [08, IMPLEMENTATION-PLAN]
- Provider/stream injection matrix [06, 12]

---

*Synthesis file — keep thin; update when Phase 1 mapping locks.*
