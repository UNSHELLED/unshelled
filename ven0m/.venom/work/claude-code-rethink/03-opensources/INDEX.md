# Phase 03 — Open-Source Eating

> We eat open-source systems to extract intelligence, not to copy.
> The goal: take the best methodology from every system, synthesize into VENOM.

**Principle:** We don't fork anything. We don't adopt tools. We extract **patterns** and **methodologies**.

---

## Priority Order

Eat in this sequence. Each one builds on what was extracted before.

| # | Source | Stars | Why This Priority | Clone Path |
|---|--------|-------|-------------------|------------|
| P1 | **spec-kit** (github/spec-kit) | 83k★ | Already locally cloned. Constitution-first philosophy matches VENOM. The `/venom-spec` command is built on this. | `draft/research-sdd-vendors/spec-kit/` |
| P2 | **get-shit-done** (gsd-build/get-shit-done) | 32k★ | Already locally cloned. Wave execution + verification gates = core of `/venom-build`. | `draft/research-sdd-vendors/get-shit-done/` |
| P3 | **openspec** (Fission-AI/OpenSpec) | 35k★ | Artifact-guided workflow + spec deltas. | `draft/research-sdd-vendors/openspec/` |
| P4 | **claude-task-master** (eyaltoledano/claude-task-master) | 26k★ | PRD → tasks pipeline. MCP-native. Directly relevant to Claude Code. | `draft/research-sdd-vendors/claude-task-master/` |
| P5 | **vibe-framework** (nbabderrahmane/vibe-framework) | N/A | Orchestrator + 15 specialists + quality gates. Conceptually closest to VENOM. | `draft/research-sdd-vendors/vibe-framework/` |
| P6 | **fabric** (danielmiessler/fabric) | 40k★ | Pattern library as files. VENOM does this — see what we're missing. | `draft/research-sdd-vendors/fabric/` |
| P7 | **swe-agent** (swe-agent/SWE-agent) | 19k★ | Hypothesis → test → verify loop for debugging. Pure research value. | `draft/research-sdd-vendors/swe-agent/` |
| P8 | **claude-extensions** (claude-contrib) | N/A | Passive hooks + context rules specifically for Claude Code. | `draft/research-sdd-vendors/claude-extensions/` |
| P9 | **opencastle** (monkilabs/opencastle) | N/A | Team Lead + specialist delegation. Relevant for agent design. | `draft/research-sdd-vendors/opencastle/` |

---

## How To Clone (all present as of 2026-03-30)

**Root:** `draft/research-sdd-vendors/` (repo-relative from venom-mine root).

```powershell
Set-Location "draft/research-sdd-vendors"
git clone https://github.com/Fission-AI/OpenSpec openspec
git clone https://github.com/eyaltoledano/claude-task-master claude-task-master
git clone https://github.com/nbabderrahmane/vibe-framework vibe-framework
git clone https://github.com/danielmiessler/fabric fabric
git clone https://github.com/swe-agent/SWE-agent swe-agent
git clone https://github.com/claude-contrib/claude-extensions claude-extensions
git clone https://github.com/monkilabs/opencastle opencastle
```

If a folder already exists, skip or `git pull` inside it.

---

## How To Eat Each Source

Each source folder has two files:
- `EAT-PLAN.md` — what to look at, what questions to answer, what to ignore
- `EXTRACTED.md` — the actual intelligence (filled after eating)

**Eating process for each:**
1. Read `EAT-PLAN.md` first
2. Clone/read the source
3. Answer every question in EAT-PLAN.md
4. Fill `EXTRACTED.md` with extracted patterns
5. Add key patterns to `MASTER-PATTERNS.md`
6. Mark status in this INDEX

---

## MASTER-PATTERNS.md Structure

After each source is eaten, add its best patterns to `MASTER-PATTERNS.md`:
```
## Pattern: [Name]
**Source:** [repo]
**What it is:** [one paragraph]
**Why it matters for VENOM:** [why this specifically]
**How to implement:** [concrete approach]
**Evidence it works:** [stars, adoption, examples]
```

---

## What We're Looking For (cross-cutting)

Across all sources, extract these specifically:

**1. Hook/lifecycle patterns**
- How do they inject context before the model sees a message?
- How do they capture learnings after a session?
- How do they handle state persistence?

**2. Agent orchestration patterns**
- How does the orchestrator stay lean while delegating?
- How do specialists communicate results back?
- How are context boundaries managed?

**3. Verification/quality gate patterns**
- When do gates fire?
- What exactly do they check?
- What happens on failure?

**4. Memory patterns**
- What gets persisted, what gets discarded?
- How is memory loaded progressively?
- How is memory kept from bloating?

**5. Loop/autonomous execution patterns**
- How is stall detected?
- What's the exit condition?
- How is partial progress preserved?

**6. Spec/planning patterns**
- What makes a good spec? (concrete, measurable, excludes scope)
- How are tasks structured for AI execution?
- How is dependency ordering managed?

**7. Two audiences — cross-cutting filter (apply to every pattern)**

Aligned with master `INDEX.md`: **any developer** + **any agent** (headless / `claude -p` / CI).

Add to each pattern:
```
**Audience:** any dev | headless agents | all three
```

---

## Status

| Source | Cloned | Plan Read | EXTRACTED.md | Patterns in Master |
|--------|--------|-----------|--------------|-------------------|
| spec-kit | ✅ | ✅ | ✅ 2026-03-30 | ✅ |
| get-shit-done | ✅ | ✅ | ✅ 2026-03-30 | ✅ |
| openspec | ✅ | ✅ | ✅ 2026-03-30 | ✅ |
| claude-task-master | ✅ | ✅ | ✅ 2026-03-30 | ✅ |
| vibe-framework | ✅ | ✅ | ✅ 2026-03-30 | ✅ |
| fabric | ✅ | ✅ | ✅ 2026-03-30 | ✅ |
| swe-agent | ✅ | ✅ | ✅ 2026-03-30 | ✅ |
| claude-extensions | ✅ | ✅ | ✅ 2026-03-30 | ✅ |
| opencastle | ✅ | ✅ | ✅ 2026-03-30 | ✅ |

**Phase 03 complete** (2026-03-30) — all 9 sources eaten. Next: **04-synthesis** (`GAPS.md`, `INTELLIGENCE-LAYER.md`, `DECISIONS.md`) → **05-design** spec closure.
