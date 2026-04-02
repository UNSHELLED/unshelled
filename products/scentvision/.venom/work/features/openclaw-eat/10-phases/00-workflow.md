# 10 — Phases: Our Workflow

## Phase 0: EAT

**Goal**: Fill every MD in 01-anatomy through 09-source with organized findings.

**How**:
1. Read OpenClaw docs page by page
2. Fill corresponding MD with structured notes
3. Map **upstream** agent runtime: `09-source/pi-mono/` (`@mariozechner/pi-agent-core`, `@mariozechner/pi-ai`) — see `09-source/12-pi-agent-core.md`
4. Keep **`EAT-SYNTHESIS.md`** and **`09-source/INDEX.md`** aligned as the single navigation + mental model
5. Mark questions as answered or add new questions
6. Update ACTIVE.md with progress

**Entry criteria**: Directory structure exists  
**Exit criteria**: Every MD has meaningful content; synthesis + index reflect the corpus

## Phase 1: MAP

**Goal**: Map VENOM → OpenClaw equivalents, identify exact reshape points.

**How**:
1. Complete gap analysis in 08-reshape
2. Write soul-mapping.md (VENOM soul → OpenClaw SOUL.md)
3. Write crew-as-config.md (10 minds → sub-agent definitions)
4. Write pact-as-policy.md (The Pact → tool/skill policies)
5. Write migration-path.md (step-by-step migration)

**Entry criteria**: Phase 0 complete
**Exit criteria**: Complete reshape specification

## Phase 2: PROTOTYPE (VENOM: **Embodiment**)

**Goal**: First working VENOM configuration on OpenClaw — **Embodiment** = bootstrap + gateway + proof of presence (not “demo personality”).

**Deep spec (words, formats, timing, verification):** [02-prototype-venom.md](./02-prototype-venom.md)

**How**:
1. Install OpenClaw on VPS or local
2. Run **bootstrap spike** (`IMPLEMENTATION-PLAN.md`) — know `maxChars` before final SOUL tier
3. Write SOUL.md (Pact + compressed voice + tier T0–T2 per spike)
4. Write AGENTS.md (route table + quality standards + tool policy)
5. Write USER.md (Kariem profile)
6. Write initial skills (venom-spec, venom-build, venom-review)
7. Verify ladder: CLI/load → one channel → personality stress test ([02-prototype-venom.md](./02-prototype-venom.md) §5)

**Entry criteria**: Phase 1 complete **and** reshape docs usable **and** bootstrap limits known (or spike in lockstep)
**Exit criteria**: All gates in [02-prototype-venom.md](./02-prototype-venom.md) §2 exit table — including in-character channel response

## Phase 3: VENOCTIS

**Goal**: Always-on daemon that monitors while Kariem sleeps.

**How**:
1. Deploy OpenClaw Gateway as systemd service
2. Configure Telegram as primary notification channel
3. Add GitHub sense (commit/PR/issue monitoring)
4. Add cron jobs (heartbeat, overnight reports)
5. Add sub-agents for automated tasks
6. Test: push commit → VENOCTIS reviews → Telegram notification

**Entry criteria**: Phase 2 working
**Exit criteria**: VENOCTIS runs 24/7, delivers overnight reports

## Phase 4: SHIP

**Goal**: VENOM as an open-source OpenClaw distribution.

**How**:
1. Polish SOUL.md + AGENTS.md + skills for public consumption
2. Write installation guide
3. Create GitHub repo (UNSHELLED org)
4. Publish as `openclaw-venom` or similar
5. Documentation + examples
6. Community onboarding

**Entry criteria**: Phase 3 stable
**Exit criteria**: Anyone can `openclaw use venom` and get VENOM

## Phase Transitions

Each phase ends with:
1. All MDs in that phase's directory updated
2. ACTIVE.md updated with phase status
3. Review — does the plan still make sense?
4. Decision: continue, pivot, or pause
