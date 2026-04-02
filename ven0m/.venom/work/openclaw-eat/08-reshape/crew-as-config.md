# Crew as config — ten minds → OpenClaw sub-agents

> **Goal:** Map VENOM’s nine (+ bridge) minds to **spawnable** OpenClaw sub-agent definitions (depth, tools, read-only vs build).  
> **Gap context:** [00-gap-analysis.md](./00-gap-analysis.md) · **Agents rules:** `venom-agents` in repo `.cursor/rules/`

OpenClaw sub-agents are **simpler** than full Claude Code agent packs — express **role, constraints, tool policy** in one place each.

---

## 1. Canonical names

[PLANNING-GAPS.md](../PLANNING-GAPS.md) §3: example codenames in `IMPLEMENTATION-PLAN.md` (`venom-hunt`, …) **conflict** with this table. **This file’s mind names are preferred** for Embodiment and any `subagent-registry` YAML. When wiring config, either use the names below or publish an explicit HUNT→researcher mapping in one place.

**Embodiment MVP (three roles):** **researcher**, **builder**, **reviewer** — enough for spec → build → audit without boiling the ocean. Add architect, debugger, etc. after first channel smoke test.

---

## 2. Default table (starting point)

| Mind | Role | Suggested depth | Tools / scope | Notes |
|------|------|-----------------|---------------|--------|
| **architect** | Design, structure, no implementation | 0 or read-only | Read, search — **no** write | Plan-only |
| **researcher** | Explore codebase / web | 1 | Read, Glob, Grep, Web | No destructive ops |
| **reviewer** | Audit, security, quality | 1 | Read, git (diff) | Findings only |
| **historian** | Memory, what we decided | 1 | Read memory files | Summarize |
| **builder** | Implement | 1 | Full tool set | Default “do it” |
| **debugger** | Repro → fix | 1 | Full + logs | Hypothesis-led |
| **predictor** | Risk, what breaks next | 1 | Read + context | Short output |
| **communicator** | Adapt language / audience | 1 | Read | Optional channel |
| **learner** | Capture learnings | 1 | Write learnings paths only | Routed updates |
| **explorer** (if used) | Fast scan | 1 | Read-only | Map only |

**Bridge** (type translation): not always a separate agent — can be a **mode** in AGENTS routing.

---

## 3. Mapping to OpenClaw concepts

| VENOM | OpenClaw |
|-------|----------|
| `@venom-architect` lens | Sub-agent profile `architect` or prompt file |
| Depth / isolation | Sub-agent **depth** + session isolation (per docs) |
| Tool policy | Per-agent allow list in workspace / gateway config |

Confirm field names against current OpenClaw docs ([OPENCLAW-DOCS-COVERAGE.md](../OPENCLAW-DOCS-COVERAGE.md) Tier 1).

---

## 4. “Woven” dispositions

VENOM allows multiple angles in **one** reply; OpenClaw may run **one** model turn. Strategy:

- **SOUL:** disposition-over-rules (short)
- **AGENTS:** “prefer single voice; subagents for parallel lenses”
- **Sub-agents:** use when tasks are **parallel and independent** — not for every turn

Resolved / pointers (see [00-gap-analysis.md](./00-gap-analysis.md) **Questions to Answer**):

- [x] Can a sub-agent call another sub-agent? **Yes via spawn tool, within depth / concurrency caps** — see [09-source/09-subagent-spawner.md](../09-source/09-subagent-spawner.md) (`sessions_spawn`, `subagent-depth.ts`). Not unbounded nesting.
- [ ] Naming: align with upstream `.agents` examples under `openclaw-main/.agents/` — patterns only, not fork.

---

## 5. Phase 1 exit

- [x] Reconcile or explicitly map `IMPLEMENTATION-PLAN.md` sub-agent codenames → this table (§5.1)
- [x] At least **three** crew roles for Embodiment chosen — **researcher, builder, reviewer** (§1)

### 5.1 IMPL codenames → canonical mind names

`IMPLEMENTATION-PLAN.md` used **legacy YAML labels** (`venom-hunt`, …) for a **five-spawn** sketch. **Canonical names for any config / registry** are the **mind ids** in §2. Use this mapping when reading IMPL or old notes — do not introduce new HUNT/EDGE strings in new YAML.

| IMPL key (legacy) | Tag | Canonical mind (§2) | Role alignment |
|-------------------|-----|----------------------|------------------|
| `venom-hunt` | HUNT | **researcher** | read, glob, grep, web |
| `venom-edge` | EDGE | **reviewer** | read, git (audit) |
| `venom-weld` | WELD | **builder** | full tool set |
| `venom-mend` | MEND | **debugger** | read, write, exec — fix path |
| `venom-dart` | DART | **explorer** | read, glob, grep — fast scan |

Embodiment **MVP** stays **three** roles (§1); the five-row IMPL block is a **1.x** expansion set, not a second naming scheme.

---

*Crew is config — not a second religion.*
