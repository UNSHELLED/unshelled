# VENOM on OpenClaw — **eating** the body (UNSHELLED inject)

> **Spine:** [OPENCLAW-EAT-CANON.md](./OPENCLAW-EAT-CANON.md) · **Role:** Why `openclaw-main/` sits next to this folder, and what “inject VENOM our way” means — without duplicating [METHODOLOGY.md](./METHODOLOGY.md) or [PLANNING-GAPS.md](./PLANNING-GAPS.md).

---

## 1. What “eat” means here

**Eat** = absorb OpenClaw until the **anatomy is legible**: gateway, pi stack, bootstrap, tools, channels — so we are not guessing from docs alone.

**Not** “use OpenClaw as a black box.” **Not** replacing upstream for sport.

**End state:** UNSHELLED / VENOM **injected** into OpenClaw — same Pact, same voice spine, same disposition — delivered through OpenClaw’s **runtime** (ACP, gateway, workspace bootstrap, skills).

---

## 2. What `openclaw-main/` is for

| Role | Detail |
|------|--------|
| **Ground truth** | Paths, parsers, defaults (`bootstrapMaxChars`, skill loader, `src/agents/*`) — cite code, not rumor |
| **Patch surface** | Only when config/templates are not enough — see [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) + [PLANNING-GAPS.md](./PLANNING-GAPS.md) §2 (config-only vs fork) |
| **Respect** | Upstream license, attribution, no implied endorsement — [PLANNING-GAPS.md](./PLANNING-GAPS.md) §12 |

The clone is a **lab mirror** of [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw). Refresh it on a schedule you record in [ACTIVE.md](./ACTIVE.md) or [EXTERNAL-RESOURCES.md](./EXTERNAL-RESOURCES.md); do not treat a stale tree as “current.”

**CLI / version for this workspace:** run `pnpm openclaw …` from `openclaw-main/` after `pnpm install`; treat `package.json` `version` as the line — not an unrelated global npm binary ([OPENCLAW-EAT-CANON.md](./OPENCLAW-EAT-CANON.md) §1.1).

---

## 3. “Our way” — injection layers (outside → inside)

1. **Workspace body** — `SOUL.md` / `AGENTS.md` / `USER.md` / `TOOLS.md` + `skills/` (AgentSkills-compatible). This is the **default** path: [embodiment/workspace](./embodiment/workspace/), [08-reshape](./08-reshape/).
2. **Gateway config** — `agents.defaults.*`, channels, auth — truth in OpenClaw docs + [BOOTSTRAP-SPIKE.md](./BOOTSTRAP-SPIKE.md).
3. **Optional fork / patches** — bootstrap limits, hooks, memory adapters — only after A vs B is locked ([PLANNING-GAPS.md](./PLANNING-GAPS.md) §2).

**Truth order** when something conflicts: [.venom/ memory](../memory/) → UNSHELLED Pact → Cursor voice stack → **OpenClaw official behavior** → notes in this folder ([METHODOLOGY.md](./METHODOLOGY.md)).

---

## 4. What this is *not*

- Not vendoring OpenClaw inside `venom-mine` as the product — the **product narrative** stays UNSHELLED / VENOCTIS; OpenClaw is the **engine choice** for this track.
- Not duplicating Mintlify — [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) **links** official pages; we add **mapping + decisions** only.

---

## 5. Links

| Doc | Role |
|-----|------|
| [EAT-SYNTHESIS.md](./EAT-SYNTHESIS.md) | Stack flow |
| [09-source/INDEX.md](./09-source/INDEX.md) | Source eat order |
| [embodiment/README.md](./embodiment/README.md) | First runnable VENOM workspace |
| [ACTIVE.md](./ACTIVE.md) | Phase + next operator step |

---

*Eat until the body has no secrets; inject until the soul is not hypothetical.*
