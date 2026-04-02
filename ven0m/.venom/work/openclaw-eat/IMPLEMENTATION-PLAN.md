# VENOM on OpenClaw — Implementation Plan

> **Status**: Planning Phase — No Code Changes Yet
> **Date**: 2026-03-31
> **Phase**: 0.5 — Analysis Complete, Planning in Progress

**Naming:** This document uses **implementation-track** sections (planning → SOUL writing → source modifications). The **VENOM workstream** phases (Eat, Map, Embodiment, …) live in [10-phases/00-workflow.md](./10-phases/00-workflow.md). **Do not** merge the two numbering schemes without reading [PLANNING-GAPS.md](./PLANNING-GAPS.md) §1.

---

## Executive Summary

**Living architecture snapshot:** [EAT-SYNTHESIS.md](./EAT-SYNTHESIS.md) · **09-source index:** [09-source/INDEX.md](./09-source/INDEX.md) · **Planning hub:** [INDEX.md](./INDEX.md) · **Reshape (Phase 1):** [08-reshape/INDEX.md](./08-reshape/INDEX.md)

**Goal**: Transform OpenClaw into VENOM — not just workspace config, but deep integration of VENOM's philosophical framework into OpenClaw's architecture.

**Approach**: Source code modifications + workspace templates. We will modify OpenClaw's source to support VENOM's unique needs while maintaining update compatibility.

**Critical Finding**: OpenClaw uses **ACP** (@mariozechner/pi-agent-core) as its agent runtime. VENOM becomes the **configuration and philosophy layer** on top of ACP.

---

## What We Know

### OpenClaw Architecture

```
Gateway Daemon (port 18789)
    ↓
ACP Control Plane (src/acp/)
    ↓
pi-embedded-runner (@mariozechner/pi-agent-core)
    ↓
Model Providers (20+)
```

**Local source (eat workspace):** `openclaw-eat/openclaw-main/src/agents/pi-embedded-runner/` (OpenClaw) · `openclaw-eat/09-source/pi-mono/packages/agent` (npm: `@mariozechner/pi-agent-core`) · `09-source/12-pi-agent-core.md` (map).

**Key insight**: We're not replacing OpenClaw's intelligence. We're replacing its **personality** and **decision-making framework**.

### Bootstrap System

**Every turn**, OpenClaw injects:
- `AGENTS.md` → Operating instructions
- `SOUL.md` → Persona, boundaries, tone
- `USER.md` → User profile
- `TOOLS.md` → Tool documentation

**Current OpenClaw templates** (`docs/reference/templates/`):
- AGENTS.md: 220 lines (session startup, memory, group chat rules)
- SOUL.md: 44 lines ("be helpful, have opinions")
- USER.md: 25 lines (name, timezone, context)

**VENOM replacements needed**:
- AGENTS.md → VENOM route table + quality standards + protocols
- SOUL.md → The Pact + 10 Minds + Pushback + Energy (~500 lines)
- USER.md → Kariem profile (language mix, working patterns)

### Critical Technical Question

**Will VENOM's SOUL.md fit?**

- OpenClaw's SOUL.md: 44 lines
- VENOM's SOUL.md: ~500 lines estimated
- Bootstrap max chars: Configurable via `agents.defaults.bootstrapMaxChars` (default **20_000** — see `openclaw-main/src/agents/pi-embedded-helpers/bootstrap.ts`)
- Total bootstrap max: Configurable via `agents.defaults.bootstrapTotalMaxChars` (default **150_000**)
- Spike record: [BOOTSTRAP-SPIKE.md](./BOOTSTRAP-SPIKE.md)

**Answer**: We need to test this. If it doesn't fit, we split SOUL.md into modules or modify the injection system.

---

## What to Delete

### 1. OpenClaw's Default Personality Templates

**Location**: `docs/reference/templates/`

**Delete**:
- [ ] AGENTS.md (replace with VENOM version)
- [ ] SOUL.md (replace with VENOM version)
- [ ] USER.md (replace with Kariem profile)

**Keep**:
- TOOLS.md (or create VENOM version)

### 2. OpenClaw Branding

**Locations**:
- Root README.md
- Docs headers
- CLI help text

**Delete/Replace**:
- [ ] "OpenClaw" → "VENOM" in user-facing text
- [ ] OpenClaw logo → VENOM branding
- [ ] Default welcome messages

### 3. Features We Don't Need

**Maybe delete** (needs decision):
- [ ] Voice features (TTS) — if not used
- [ ] Canvas/A2UI — if not needed
- [ ] Some channels — keep only Telegram/Discord for VENOCTIS

---

## What to Modify

### 1. Bootstrap Injection System

**Location**: `src/agents/bootstrap-files.ts`, `src/agents/pi-embedded-helpers.ts`

**Modifications**:
- [ ] Increase `maxChars` limit if SOUL.md is too large
- [ ] Add VENOM-specific bootstrap validation
- [ ] Maybe split SOUL.md into modules if needed:
  - `SOUL-core.md` — Pact + 10 Minds
  - `SOUL-pushback.md` — Pushback scale
  - `SOUL-energy.md` — Energy matching

**Implementation complexity**: **Medium**

### 2. Sub-Agent Configuration

**Location**: `src/agents/subagent-spawn.ts`, `src/agents/subagent-registry-*.ts`

**Modifications**:
- [ ] Pre-configure VENOM **five-spawn** sub-agents (depth 1; tools per row). **Registry ids = canonical mind names** — see [08-reshape/crew-as-config.md](./08-reshape/crew-as-config.md) §2 + §5.1 (legacy `venom-hunt` … tags map to **researcher, reviewer, builder, debugger, explorer**).
  ```yaml
  researcher:  # was venom-hunt (HUNT)
    depth: 1
    tools: [read, glob, grep, web_search, web_fetch]
  reviewer:      # was venom-edge (EDGE)
    depth: 1
    tools: [read, git]
  builder:       # was venom-weld (WELD)
    depth: 1
    tools: [all]
  debugger:      # was venom-mend (MEND)
    depth: 1
    tools: [read, write, exec]
  explorer:      # was venom-dart (DART)
    depth: 1
    tools: [read, glob, grep]
  ```

- [ ] Configure announce chain for VENOM's crew model
- [x] Sub-agent naming — **aligned** with [crew-as-config.md](./08-reshape/crew-as-config.md) (§5.1 mapping)

**Implementation complexity**: **Low**

### 3. Tool Policy Framework

**Location**: `src/agents/pi-tools.policy.ts`, `src/agents/tool-policy.ts`

**Modifications**:
- [ ] Map VENOM's 4-level pushback scale to tool policies:
  ```yaml
  Level 0 (defer): All tools allowed
  Level 1 (note once): Warning system
  Level 2 (name + hold): Block dangerous tools, require confirmation
  Level 3 (hard stop): Block all destructive actions
  ```

- [ ] Add VENOM-specific safety rules:
  - No `rm -rf` without explicit approval
  - Protect `.env`, credentials files
  - Git push requires confirmation

**Implementation complexity**: **Low**

### 4. Memory System Integration

**Location**: `src/agents/memory-search.ts`

**Modifications**:
- [ ] Map VENOM's memory types to OpenClaw's memory:
  - `.venom/memory/MEMORY.md` → OpenClaw MEMORY.md
  - `.venom/learnings/corrections.yaml` → Memory tags
  - `.venom/learnings/instincts.yaml` → Patterns with confidence scores
  - `.venom/learnings/preferences.yaml` → User preferences

- [ ] Maybe add VENOM-specific memory search queries

**Implementation complexity**: **Low** (mostly mapping)

### 5. Language Switching Support

**Location**: `src/agents/pi-embedded-runner/system-prompt.ts`

**Modifications**:
- [ ] Add language switching instruction to system prompt
- [ ] Configure model to handle Arabic/English/Egyptian dynamically
- [ ] Test that mid-conversation language switches work

**Implementation complexity**: **Medium** (needs testing)

### 6. Compaction Identity Preservation

**Location**: `src/agents/compaction.ts`

**Modifications**:
- [ ] Ensure VENOM's SOUL.md re-injection works correctly
- [ ] Test that identity survives compaction
- [ ] Maybe add VENOM-specific identifier rules

**Implementation complexity**: **Medium** (critical testing)

---

## What to Add

### 1. VENOM Bootstrap Templates

**Location**: `docs/reference/templates/` → New VENOM versions

**Add**:
- [ ] `AGENTS.md` — VENOM route table + quality standards
- [ ] `SOUL.md` — The Pact + 10 Minds + Pushback + Energy
- [ ] `USER.md` — Kariem profile template
- [ ] Maybe `TOOLS.md` — VENOM tool documentation

**Implementation complexity**: **High** (writing 500-line SOUL.md)

### 2. VENOM Skills

**Location**: New workspace skills: `skills/venom-*.md`

**Add**:
- [ ] `venom-spec.md` — Spec-driven development workflow
- [ ] `venom-build.md` — Wave execution + verification
- [ ] `venom-review.md` — 8-perspective code review
- [ ] `venom-debug.md` — Root cause protocol
- [ ] `venom-eat.md` — Project anatomy (already exists)
- [ ] `remember.md` — Memory write skill

**Implementation complexity**: **Medium**

### 3. VENOM Hooks

**Location**: `src/hooks/` or workspace hooks

**Add**:
- [ ] Pre-tool-call hook — Pushback enforcement
- [ ] Post-compaction hook — Identity verification
- [ ] Memory flush hook — ECHO's protocol
- [ ] Session start hook — 4-phase intake

**Implementation complexity**: **Medium**

### 4. VENOM Configuration Schema

**Location**: Config defaults

**Add**:
- [ ] `agents.defaults.venom.enabled = true`
- [ ] `agents.defaults.venom.pushbackLevel = 2`
- [ ] `agents.defaults.venom.energyMatching = true`
- [ ] `agents.defaults.subagents.venom.*`

**Implementation complexity**: **Low**

---

## Implementation Strategy

### Phase 1: Planning (CURRENT)

**Status**: ✅ Analysis complete, planning in progress

**Tasks**:
- [x] Read all OpenClaw source
- [x] Document architecture
- [x] Identify delete/modify/add targets
- [ ] Write SOUL.md (500 lines)
- [ ] Design sub-agent config
- [ ] Plan testing strategy

### Phase 2: SOUL Writing

**Tasks**:
- [ ] Write complete SOUL.md (The Pact + 10 Minds)
- [ ] Write AGENTS.md (route table + quality standards)
- [ ] Write USER.md (Kariem profile)
- [ ] Review and refine

**Implementation complexity**: **High** (philosophical writing)

### Phase 3: Source Modifications

**Tasks**:
- [ ] Modify bootstrap limits if needed
- [ ] Configure sub-agent defaults
- [ ] Add tool policy mappings
- [ ] Add language switching support
- [ ] Test compaction with large SOUL.md

**Implementation complexity**: **Medium**

### Phase 4: Workspace Templates

**Tasks**:
- [ ] Create VENOM workspace templates
- [ ] Create VENOM skills
- [ ] Create VENOM hooks
- [ ] Package as distributable workspace

**Implementation complexity**: **Medium**

### Phase 5: Testing

**Tasks**:
- [ ] Test bootstrap injection
- [ ] Test sub-agent spawning
- [ ] Test compaction identity preservation
- [ ] Test language switching
- [ ] Test tool policy enforcement
- [ ] Test memory system
- [ ] Test full VENOM personality

**Implementation complexity**: **High** (comprehensive testing)

### Phase 6: VENOCTIS Deployment

**Tasks**:
- [ ] Deploy to VPS (Hostinger KVM 4)
- [ ] Configure Telegram channel
- [ ] Configure GitHub monitoring
- [ ] Configure cron jobs
- [ ] Test always-on daemon

**Implementation complexity**: **Medium**

---

## Risk Analysis

### High Risks

1. **SOUL.md size limit** — If VENOM's SOUL doesn't fit in bootstrap, we need custom injection system
   - **Mitigation**: Test early, be ready to split into modules or modify injection code

2. **Compaction identity preservation** — If SOUL.md gets truncated during re-injection, VENOM loses its soul
   - **Mitigation**: Extensive testing, maybe add identity verification checksum

3. **Language switching** — Mid-conversation Arabic/English switches may confuse models
   - **Mitigation**: Test with multiple providers, maybe add explicit language tags

### Medium Risks

1. **Fork maintenance** — If we modify too much source, keeping up with OpenClaw updates becomes hard
   - **Mitigation**: Minimize source changes, use config/templates where possible

2. **Sub-agent orchestration** — 10 minds weaving as dispositions is complex, may not map cleanly to sub-agents
   - **Mitigation**: 5 minds as sub-agents, 5 as dispositions, test thoroughly

### Low Risks

1. **Performance** — Large SOUL.md may slow down token processing
   - **Mitigation**: Caching, maybe lazy-load some sections

2. **Memory compatibility** — VENOM's memory format may not map cleanly to OpenClaw's
   - **Mitigation**: Adapter layer, conversion utilities

---

## Next Steps

**Immediate** (This session):
1. [ ] Start writing SOUL.md (begin with The Pact)
2. [ ] Map out 10 Minds in detail
3. [ ] Design sub-agent configuration

**Soon** (Next sessions):
1. [ ] Complete SOUL.md writing
2. [ ] Write AGENTS.md
3. [ ] Write USER.md
4. [ ] Create implementation checklist
5. [ ] Begin Phase 3 (source modifications)

**Decision point**: After SOUL.md is written, we need to test if it fits in bootstrap. If not, we pivot to splitting strategy.

---

*This plan will evolve as we learn more. The goal is not a perfect plan, but a complete one.*
