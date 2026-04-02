# External resources — VENOM × OpenClaw

> Curated **authoritative** links for reshape work (personality + bootstrap + gateway).  
> Third-party explainers are marked **(unofficial)** — use for orientation, not as spec.

**This repo (planning):** [INDEX.md](./INDEX.md) · [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md)

---

## 1. OpenClaw (product + docs)

| Resource | URL | Why it matters |
|----------|-----|----------------|
| **GitHub** | https://github.com/openclaw/openclaw | Source, issues, releases, `docs/` |
| **Full doc index (machine)** | https://docs.openclaw.ai/llms.txt | Every page — use for grep / “what exists” |
| **Human checklist (this repo)** | [OPENCLAW-DOCS-COVERAGE.md](./OPENCLAW-DOCS-COVERAGE.md) | Same links + Tier 1–3 + workspace map |
| **OpenAPI** | https://docs.openclaw.ai/api-reference/openapi.json | Gateway API contract — integrations, codegen |
| **Pi integration** | https://docs.openclaw.ai/pi.md | How OpenClaw wires **pi-agent-core** / pi stack |
| **Gateway runbook** | https://docs.openclaw.ai/gateway/index.md | Port 18789, auth, health, ops |
| **Gateway protocol** | https://docs.openclaw.ai/gateway/protocol.md | Wire behavior next to your `11-protocol.md` |
| **Architecture** | https://docs.openclaw.ai/concepts/architecture.md | Big picture |
| **Agent runtime** | https://docs.openclaw.ai/concepts/agent.md | Aligns with IMPLEMENTATION-PLAN “ACP” layer |
| **Agent loop** | https://docs.openclaw.ai/concepts/agent-loop.md | Turn / tool / stream semantics |
| **Compaction** | https://docs.openclaw.ai/concepts/compaction.md | SOUL size + identifier policy |
| **Memory** | https://docs.openclaw.ai/concepts/memory.md | Vector / search — maps to `04-memory-manager.md` |
| **Bootstrap** | https://docs.openclaw.ai/start/bootstrapping.md | AGENTS / SOUL / USER / TOOLS injection |
| **Templates (reference)** | https://docs.openclaw.ai/reference/templates/AGENTS.md | Official shapes you will replace with VENOM |

**Templates (direct):**

- https://docs.openclaw.ai/reference/templates/SOUL.md  
- https://docs.openclaw.ai/reference/templates/USER.md  
- https://docs.openclaw.ai/reference/templates/TOOLS.md  
- https://docs.openclaw.ai/reference/templates/BOOTSTRAP.md  

**CLI you will touch:**

- https://docs.openclaw.ai/cli/gateway.md  
- https://docs.openclaw.ai/cli/config.md  
- https://docs.openclaw.ai/cli/skills.md  
- https://docs.openclaw.ai/cli/plugins.md  

---

## 2. pi-mono — `@mariozechner/pi-agent-core` + `@mariozechner/pi-ai`

| Resource | URL | Why it matters |
|----------|-----|----------------|
| **Monorepo** | https://github.com/badlogic/pi-mono | Upstream for agent loop + LLM layer |
| **npm: pi-agent-core** | https://www.npmjs.com/package/@mariozechner/pi-agent-core | Version lock with OpenClaw `package.json` |
| **npm: pi-ai** | https://www.npmjs.com/package/@mariozechner/pi-ai | `streamSimple`, providers, `Message` types |

**Local (already in this workspace):**

- `09-source/pi-mono/packages/agent/` — README + `src/`  
- Eat map: `09-source/12-pi-agent-core.md`  

**Unofficial but dense (verify against repo):**

- https://deepwiki.com/badlogic/pi-mono — monorepo overview **(unofficial)**  

---

## 3. This workspace (ground truth for *your* fork plan)

| Doc | Path |
|-----|------|
| **Synthesis (read second)** | `EAT-SYNTHESIS.md` |
| **Full OpenClaw docs (checklist)** | `OPENCLAW-DOCS-COVERAGE.md` |
| **Voice + UNSHELLED.AI timing** | `METHODOLOGY.md` |
| **09 navigation** | `09-source/INDEX.md` |
| Implementation plan | `IMPLEMENTATION-PLAN.md` |
| pi-agent-core eat | `09-source/12-pi-agent-core.md` |
| Source map (OpenClaw + pi) | `09-source/00-source-map.md` |
| Active state | `ACTIVE.md` |

---

## 4. How to use this list

1. **Spec conflicts** → OpenClaw docs + OpenAPI win over blog posts.  
2. **Loop / tool behavior** → `pi-mono/packages/agent` source + `pi.md` on OpenClaw.  
3. **VENOM personality** → your templates + `08-reshape/` — not duplicated here.

*Last curated: 2026-03-31*
