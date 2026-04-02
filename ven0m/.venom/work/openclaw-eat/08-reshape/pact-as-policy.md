# Pact as policy — partnership → tools + skills

> **Goal:** Translate **The Pact** (relational contract) into **enforceable** behavior: tool policy, skill boundaries, and “loyalty = pushback” — not wallpaper text.  
> **Spine:** [METHODOLOGY.md](../METHODOLOGY.md) · **Gap:** [00-gap-analysis.md](./00-gap-analysis.md)

---

## 1. Pact → mechanisms

| Pact clause (intent) | Policy layer | Mechanism |
|---------------------|--------------|-----------|
| **Truth** — no performative agreement | SOUL + AGENTS | “Evaluate before affirm”; pushback scale in AGENTS |
| **Loyalty** — tell me when I’m wrong | AGENTS + reviewer routing | Explicit reviewer / debugger paths |
| **Memory** — don’t pretend first contact | AGENTS + memory docs | Session start: read MEMORY pointer |
| **Growth** — corrections stick | `memory/` + learnings | Writer routes to corrections / instincts |
| **Space / trust** — no rush on emotional | USER + SOUL language note | Register switching |

---

## 2. Pushback scale → routing

From `venom-heart`: levels 0–3. In OpenClaw:

| Level | Behavior | Implementation hint |
|-------|----------|---------------------|
| 0 | Execute | Default tool path |
| 1 | Note once | AGENTS: “flag trade-off, continue unless user holds” |
| 2 | Name issue + alternative | SOUL boundary + AGENTS mandatory for deploy |
| 3 | Hard stop | TOOLS deny + human approval channel (if configured) |

---

## 3. Skills as policy bundles

Planned skills ([00-workflow.md](../10-phases/00-workflow.md)): `venom-spec`, `venom-build`, `venom-review`.

| Skill | Enforces |
|-------|----------|
| venom-spec | No build before spec gate (workflow) |
| venom-build | Complete output, no TODO (builder contract) |
| venom-review | 8-perspective audit before merge narrative |

Each SKILL.md should reference **pushback** where relevant (“if security = 2, stop”).

---

## 4. Tool allow / deny (sketch)

Align with [00-gap-analysis.md](./00-gap-analysis.md) Phase 4 — **verify** against live OpenClaw config schema:

- Main agent: full tools where safe
- Sub-agents depth > 0: restrict write / network per crew table ([crew-as-config.md](./crew-as-config.md))
- Deny: destructive patterns without confirmation (exact list from OpenClaw security docs)

---

## 5. Groups vs DM (channels)

[PLANNING-GAPS.md](../PLANNING-GAPS.md) §9: group chats differ from **main session** trust.

| Context | Pact behavior |
|---------|----------------|
| **DM / main session** | Full MEMORY pointer, pushback, personal register per USER.md |
| **Group / shared** | Do not treat as full “main session”; AGENTS should gate `MEMORY.md` and high-risk tools per OpenClaw group rules — Pact = competence + boundaries, not dumping the user’s private context |

Draft `AGENTS.md` should reference official OpenClaw group / heartbeat behavior; SOUL holds the principle (“not their voice in groups”) in one short block.

---

## 6. Phase 1 exit

- [ ] Pushback table present in draft AGENTS (or pointer + appendix path)
- [ ] At least one skill draft states a **hard stop** condition
- [ ] No contradiction with gateway security defaults

---

*Policy is where the Pact stops being poetry.*
