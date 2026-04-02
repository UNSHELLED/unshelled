# OpenClaw eat — **canon** (how this folder is meant to be read)

> **Product:** [OpenClaw](https://github.com/openclaw/openclaw) — gateway, pi stack, channels, workspace bootstrap, skills.  
> **This folder:** a **purpose-built** study + injection workspace in **venom-mine** — not a generic “AI notes” dump.  
> **Injection intent:** [OPENCLAW-INJECTION.md](./OPENCLAW-INJECTION.md) · **Truth hierarchy:** [METHODOLOGY.md](./METHODOLOGY.md) §1

---

## 1. OpenClaw first — VENOM second

| Layer | What it is |
|-------|------------|
| **OpenClaw** | Runtime, docs, config schema, `openclaw-main/` code paths — **authoritative** for behavior. |
| **VENOM / UNSHELLED** | Personality, Pact, voice, crew mapping — injected via **workspace** + config; see [08-reshape](./08-reshape/). |
| **This repo’s notes** | Maps and decisions — **wrong** if they contradict OpenClaw + `.venom/` locked truth ([METHODOLOGY.md](./METHODOLOGY.md)). |

If a sentence could apply to “any assistant platform,” it belongs in reshape or methodology — **not** in anatomy/source notes without labeling it as VENOM overlay.

### 1.1 Local clone is the runtime spine (not global npm)

For **this** folder, **do not** treat a globally installed `openclaw` on PATH as the source of truth for **version** or **behavior**. Authoritative order:

1. **`openclaw-main/`** — implementation + `package.json` `version` + `CHANGELOG.md`. Pull or sync to latest `main` when you need “current OpenClaw.” In **venom-mine**, that directory is **`venom-mine/.venom/work/openclaw-eat/openclaw-main`** (always this path for CLI — not another clone, not global npm).
2. **Run CLI only from that clone** (after `pnpm install`): `pnpm openclaw …` with cwd = `openclaw-main/` (see upstream `AGENTS.md` — “Run CLI in dev”). **Do not** invoke bare `openclaw` / `npx openclaw` for openclaw-eat work — wrong binary, wrong version, wrong spine.
3. Global `openclaw` on PATH exists elsewhere on some machines — **ignore it** for this workstream; if a doc or habit says `openclaw`, translate to **`cd` → `openclaw-main` → `pnpm openclaw`**.

---

## 2. Ground truth (where to look before arguing)

| Need | Source |
|------|--------|
| **Released version string (for this workspace)** | `openclaw-main/package.json` → `"version"` (not `openclaw --version` from PATH alone) |
| Behavior, APIs, defaults | [https://docs.openclaw.ai](https://docs.openclaw.ai) + [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) |
| Paths, implementations | `openclaw-main/` (clone beside this folder) |
| Agent loop / pi contracts | `09-source/pi-mono/` + [09-source/12-pi-agent-core.md](./09-source/12-pi-agent-core.md) |
| Bootstrap limits | [BOOTSTRAP-SPIKE.md](./BOOTSTRAP-SPIKE.md) (keys + defaults from source) |
| Runnable VENOM workspace | [embodiment/workspace](./embodiment/workspace/) |
| **VENOM words, crew names, Pact, taglines** | `D:\UNSHELLED.AI\` — [UNSHELLED-VOICE-FEED.md](./UNSHELLED-VOICE-FEED.md) (read order + naming hygiene) |

---

## 3. Track map (every folder has one job)

| Folder | **OpenClaw subject** | **VENOM overlay** | **Deep code** |
|--------|----------------------|-------------------|----------------|
| [01-anatomy](./01-anatomy/) | Gateway, CLI, Web UI, workspace, install — **docs-shaped** overview | Pointer only | [09-source/01](./09-source/01-gateway-daemon.md), [00-source-map](./09-source/00-source-map.md) |
| [02-mind](./02-mind/) | Agent loop, memory, providers — concepts | [08-reshape](./08-reshape/) | [09-source/02](./09-source/02-agent-loop.md), [04](./09-source/04-memory-manager.md), [06](./09-source/06-provider-interface.md) |
| [03-tools](./03-tools/) | Tool system, policy | [pact-as-policy](./08-reshape/pact-as-policy.md) | [09-source/03](./09-source/03-tool-executor.md) |
| [04-channels](./04-channels/) | Channel architecture | [migration-path](./08-reshape/migration-path.md), groups | [09-source/05](./09-source/05-channel-base.md) |
| [05-skills-plugins](./05-skills-plugins/) | AgentSkills, plugins, ClawHub | [embodiment/workspace/skills](./embodiment/workspace/skills/) | [09-source/10](./09-source/10-plugin-loader.md) |
| [06-sub-agents](./06-sub-agents/) | Spawn, depth, announce | [crew-as-config](./08-reshape/crew-as-config.md) | [09-source/09](./09-source/09-subagent-spawner.md) |
| [07-security](./07-security/) | Auth, sandbox, secrets | Pact / pushback as policy | `openclaw-main/docs/gateway/` + SECURITY |
| [08-reshape](./08-reshape/) | *(VENOM → OpenClaw mapping — not a second product spec)* | **Primary** | Links back to 09-source |
| [09-source](./09-source/) | **Source eat** — OpenClaw + pi-mono | [EAT-SYNTHESIS](./EAT-SYNTHESIS.md) | `openclaw-main/`, `pi-mono/` |
| [10-phases](./10-phases/) | Workstream phases (Eat → Map → Embodiment → …) | [02-prototype-venom](./10-phases/02-prototype-venom.md) | — |
| [embodiment](./embodiment/) | **Workspace** files the gateway loads | Draft SOUL/AGENTS/USER/TOOLS + skills | [EMBODIMENT-RUN](./embodiment/EMBODIMENT-RUN.md) |

---

## 4. Recommended read order (first time)

1. [EAT-SYNTHESIS.md](./EAT-SYNTHESIS.md) — one-page signal flow  
2. [09-source/INDEX.md](./09-source/INDEX.md) — pipeline order for code eat  
3. [01-anatomy/00-overview.md](./01-anatomy/00-overview.md) — body plan  
4. [08-reshape/INDEX.md](./08-reshape/INDEX.md) — where VENOM lands  
5. [UNSHELLED-VOICE-FEED.md](./UNSHELLED-VOICE-FEED.md) — before authoring SOUL/AGENTS: sync with `D:\UNSHELLED.AI`  
6. [embodiment/README.md](./embodiment/README.md) — first runnable body  
7. [ACTIVE.md](./ACTIVE.md) — what’s actually next  

---

## 5. Naming hygiene

- Say **OpenClaw** for the product/runtime; **VENOM** for the disposition layer we inject.  
- **Embodiment** = Phase 2 workstream name for first real OpenClaw body — not “a demo in Cursor.”  
- **Implementation** sections in [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) ≠ **10-phases** numbering ([PLANNING-GAPS.md](./PLANNING-GAPS.md) §1).

---

*This file is the spine. If a doc fights it, fix the doc or amend the canon with a reason in git history.*
