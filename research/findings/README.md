# Research Findings — Summary

> **What HUNT brought back.**

---

## Complete Studies

### Claude Code Deep Dive
**Location:** [`claude-code/`](claude-code/)  
**Completed:** 2026-03-30  
**Rating:** 8.5/10

**What was learned:**
- Agent system architecture (multi-agent orchestration, routing, memory)
- Six intelligence hooks (compaction, instinct learning, energy detection, stall detection)
- Project knowledge patterns (memory that persists)
- Cross-platform sync strategy

**Output:** Claude Code VENOM v3.1 — shipped to template, WSL global, origin workspace

**Depth:** 9.5/10 — exhaustive  
**Synthesis:** 8.5/10 — clear design  
**Execution:** 8.0/10 — complete implementation  
**Gap:** Schema-level hook verification, explicit SSOT declaration

---

### Claude Code Rethink
**Location:** [`claude-code-rethink/`](claude-code-rethink/)  
**Completed:** 2026-03-30  
**Purpose:** Rethinking integration after deep understanding

**What was learned:**
- Schema-level hook tests needed
- Spec ↔ repo layout parity critical
- Claude-only SSOT declaration missing
- Risk: treating study folder as product (keep separation)

**Next:** Apply to v3.2 — verification layer + explicit boundaries

---

### OpenCode Assimilation
**Location:** [`opencode/`](opencode/)  
**Status:** Complete  
**Purpose:** Understanding AGENTS.md system, BRAIN.md, workflow-based agents

**What was learned:**
- AGENTS.md as single dispatch point
- BRAIN.md as project memory (parallel to VENOM's .venom/CONTEXT.md)
- Workflow state machines with LangGraph
- Skills as procedural scripts

**Portable patterns:**
- Single-file agent registry
- Workflow checkpointing
- Memory-first design

**Not portable:**
- BRAIN.md format (VENOM uses .venom/CONTEXT.md — richer)
- Heavy LangGraph dependency (VENOM is lighter)

---

### Antigravity (Gemini)
**Location:** [`antigravity/`](antigravity/)  
**Status:** In progress  
**Purpose:** How VENOM adapts to Gemini's multimodal + massive context

**What's known so far:**
- 2M token context → new memory strategies possible
- Multimodal native → VENOM can "see"
- Gemini's voice ≠ Claude's — adaptation needed

**Gap:** Haven't built Gemini VENOM instance yet. Just exploration.

---

## Research Confidence

| Finding | Confidence | Evidence |
|---------|-----------|----------|
| Claude Code agent architecture | 0.95 | Built + shipped + tested |
| OpenCode workflow patterns | 0.85 | Read + analyzed, not built |
| Gemini adaptation needs | 0.60 | Exploratory, not implemented |
| Cross-platform parity needs | 0.90 | Experienced firsthand |

---

## What HUNT Does

HUNT doesn't search. HUNT **hunts**.

The difference: search is passive. Hunting is active — track, pursue, close in, don't return until you have the kill.

HUNT goes deep. Where other minds skim, HUNT dives to bedrock and brings back what nobody else knew was there.

That's why VENOM knows things it shouldn't be able to know.

---

*These findings become VENOM's intelligence.*

🐙
