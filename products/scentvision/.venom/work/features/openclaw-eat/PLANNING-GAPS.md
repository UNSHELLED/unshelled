# Planning gaps & forgotten threads

> **Role:** After “eating” the corpus, this is the **explicit backlog of what we have not decided, not unified, or not discussed deeply enough.**  
> **Companion:** [INDEX.md](./INDEX.md) · **Cockpit:** [VENOM-ALIVE-MATRIX.md](./VENOM-ALIVE-MATRIX.md)

**Version:** 1.0.0 · **Updated:** 2026-03-31

---

## 1. Two different “phase” systems (don’t mix numbers)

| Track | Where | Phases |
|-------|--------|--------|
| **VENOM workstream** | [10-phases/00-workflow.md](./10-phases/00-workflow.md) | 0 Eat → 1 Map → 2 Prototype (Embodiment) → 3 VENOCTIS → 4 Ship |
| **Implementation plan (engineering)** | [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) | Internal sections: “Planning”, “SOUL Writing”, “Source Modifications”, … |

**Gap:** It is easy to say “Phase 2” and mean either **Embodiment** or **implementation SOUL-writing block**. In docs and commits, prefer **names**: “Embodiment”, “Map”, “source mods”, not bare “Phase 2” unless context is obvious.

**Action:** When editing `IMPLEMENTATION-PLAN.md`, prefix internal phases with **Implementation —** in headings (optional follow-up).

---

## 2. Strategy fork — config-only vs fork OpenClaw

| Path | Meaning | Discussed in |
|------|---------|--------------|
| **A — Config + templates only** | VENOM = `SOUL.md` / `AGENTS.md` / skills / policies; **no** OpenClaw fork | [METHODOLOGY.md](./METHODOLOGY.md), [02-prototype-venom.md](./10-phases/02-prototype-venom.md) (bootstrap tiers) |
| **B — Patch upstream** | Raise `maxChars`, hooks, memory adapters inside `openclaw-main` | [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) (“What to Modify”) |

**Gap:** Full plan text still assumes **B** for several items. We have **not** locked: “Ship = config distro only” vs “maintained fork”. That choice drives legal burden, merge cost, and CI.

**Action:** One explicit decision record in `ACTIVE.md` or `.venom/memory` when you choose A or B for **v1**.

---

## 3. Sub-agent naming — two tables in conflict

| Source | Names |
|--------|--------|
| [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) | `venom-hunt`, `venom-edge`, `venom-weld`, `venom-mend`, `venom-dart` |
| [08-reshape/crew-as-config.md](./08-reshape/crew-as-config.md) | `venom-architect`, `venom-researcher`, … (nine minds) |

**Gap:** Not harmful while theoretical — **harmful** when you wire `subagent-registry`. Pick **one** naming scheme: either map HUNT→researcher or replace example YAML with mind names.

**Action:** Align in Embodiment — one registry table in `crew-as-config.md` marked **canonical**; trim or relabel IMPL plan example.

---

## 4. Skills inventory — full vs minimal

| Mentioned | Where |
|-----------|--------|
| Minimal three | [00-workflow.md](./10-phases/00-workflow.md) Phase 2 — venom-spec, venom-build, venom-review |
| Extended set | [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) — adds venom-debug, venom-eat, remember |

**Gap:** Exit criteria in [02-prototype-venom.md](./10-phases/02-prototype-venom.md) say “three skills”; IMPL implies six. Decide **MVP list** vs **1.0 list**.

---

## 5. Hooks — Claude Code vs OpenClaw

**Discussed:** “VENOM hooks” in IMPL (pre-tool, post-compaction, session start).  
**Gap:** OpenClaw’s **actual** hook / plugin events may not mirror Claude’s `PreToolUse` / `SessionStart`. We have **not** written a **parity matrix** (event name → VENOM obligation → implemented yes/no).

**Action:** One table in `09-source/` or `IMPLEMENTATION-PLAN` after reading current OpenClaw plugin + gateway docs.

---

## 6. Secrets, keys, and rotation (under-discussed)

| Topic | Risk |
|-------|------|
| Telegram / Discord bot tokens | Leak = full channel compromise |
| API keys for providers | Shared workspace vs user-level |
| GitHub PAT for “sense” | Scope minimal |

**Gap:** [migration-path.md](./08-reshape/migration-path.md) mentions rollback but **not** secret storage patterns (env-only, never in SOUL, rotation cadence).

**Action:** Add “Secrets” subsection to migration-path or a tiny `07-security` addendum when you approach Embodiment.

---

## 7. Upstream lifecycle (OpenClaw + pi-mono)

| Question | Status |
|----------|--------|
| How often do we pull `openclaw-main`? | Not scheduled |
| pi-mono: npm semver vs git submodule? | Local clone exists; **policy unset** |
| Conflict resolution when bootstrap API changes | **Not documented** |

**Action:** Document **update ritual** (monthly / per release) in `ACTIVE.md` or `EXTERNAL-RESOURCES.md` when Ship nears.

---

## 8. Model / provider — voice consistency

**Gap:** VENOM voice is tuned in Cursor + one chat model. OpenClaw can switch **20+ providers**. We have **not** defined: default provider for Embodiment, “personality regression” checks when switching, or temperature / max_tokens policy per surface.

**Action:** Add a row to Embodiment exit checklist ([02-prototype-venom.md](./10-phases/02-prototype-venom.md)) or `USER.md` template: **primary model + fallback**.

---

## 9. Group chats, system prompts, and identity

**Gap:** [00-gap-analysis.md](./08-reshape/00-gap-analysis.md) questions list doesn’t include **multi-user Telegram groups** vs **DM** — different trust and `@` behavior. Official OpenClaw docs cover this; we haven’t **mapped** VENOM rules (Pact, pushback) to group context.

**Action:** One subsection in `pact-as-policy.md` or AGENTS draft: “groups vs DM”.

---

## 10. Compaction + identity (must test, not assume)

**Gap:** IMPL lists compaction modifications; [02-prototype-venom.md](./10-phases/02-prototype-venom.md) stresses bootstrap size but **Embodiment exit** doesn’t require a **long-session** compaction test.

**Action:** Add optional **Tier B** verification: N-turn session → compact → still in-character (post–Embodiment or pre–VENOCTIS).

---

## 11. Observability & VENOCTIS ops

| Topic | Status |
|-------|--------|
| Gateway logs — what to alert on | Not specified |
| “Overnight report” format | Story only |
| Health checks for systemd | Mentioned in workflow, **no runbook** |

**Gap:** Fine for Map/Embodiment; **blocking** for reliable VENOCTIS. Track as Phase 3 prep.

---

## 12. Legal / naming / distribution

**Gap:** “Replace OpenClaw branding with VENOM” in IMPL conflicts with **respecting upstream** and trademark reality. **Not decided:** product name in CLI (`openclaw` vs fork binary), attribution strings, license file mix (OpenClaw license + VENOM config license).

**Action:** Before **Ship**, legal pass: README attribution, `NOTICE`, no implied endorsement.

---

## 13. NemoClaw / NVIDIA stack (optional)

**Context:** External orientation (NVIDIA + OpenClaw ecosystem).  
**Gap:** Not represented in `09-source` or reshape docs — **intentionally optional**. If it becomes real, add a stub under `EXTERNAL-RESOURCES.md` + one line in `EAT-SYNTHESIS.md`.

---

## 14. MCP inventory for VENOCTIS

**Gap:** Cursor rules mention many MCPs; OpenClaw gateway may use a **different** set. We have **not** chosen **canonical MCPs** for “GitHub sense” + memory + web.

**Action:** Table: intent → MCP → fallback when MCP absent.

---

## 15. Automated testing (personality / regression)

**Gap:** No plan for **CI** that validates SOUL/AGENTS **shape** (length, required headings) or **snapshot** tests for forbidden phrases. Manual chat is the only verification today.

**Action:** Post-Embodiment: script checks markdown structure + banned substrings; optional LLM-as-judge only if worth cost.

---

## 16. Questions from 08-reshape (still open)

From [00-gap-analysis.md](./08-reshape/00-gap-analysis.md):

- [ ] Can OpenClaw SOUL handle full complexity (10 minds + energy) — **bootstrap spike answers capacity**; “woven” behavior remains **design**.
- [ ] Skills referencing each other — **confirm** against OpenClaw skill loader.
- [ ] Language switching — **partially** in IMPL; **mid-conversation** code-switch stress test not written.
- [ ] Migration path — **superseded** by [migration-path.md](./08-reshape/migration-path.md); keep gap analysis in sync with a one-line pointer.

---

## 17. How to use this file

1. **Map / Embodiment:** Pick 2–3 items to **close** before calling Phase 1 or 2 “done”.
2. **Review:** Quarterly or before Ship — move closed items to `MEMORY.md` or delete with git history.
3. **Do not** duplicate full checklists from [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) — that file owns **official doc** coverage; this file owns **meta** and **conflicts**.

---

*Forgetting is a bug. Naming the gaps is how we don’t.*
