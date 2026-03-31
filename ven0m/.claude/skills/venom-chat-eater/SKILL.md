---
name: venom-chat-eater
description: "Eat conversation transcripts and transform them into structured intelligence. Use when user says 'eat this chat', 'absorb conversation', 'extract intelligence from transcript', or provides exported chat files. Handles multi-chat timelines, embedded images, decision extraction, thinking pattern analysis. Intelligence-squared: learning from other frontier models."
argument-hint: "[chat-file-path or 'paste']"
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebFetch
---

# venom-chat-eater — Conversation Intelligence Extractor

Eat conversations. Extract intelligence. Not summarize — absorb.

---

## Purpose

Transform conversation transcripts into **structured knowledge artifacts**. Handle:
- Single or multiple chat files (Claude.ai, ChatGPT, Cursor, Discord, Slack)
- Timeline-aware processing (earliest → latest)
- Embedded images (screenshots, diagrams, outputs)
- Thinking pattern extraction
- Decision archaeology
- Root cause discoveries
- Memory routing

When eating chats from other AIs → **intelligence-squared**: VENOM learning from frontier models' methodology.

---

## Trigger

User says:
- "eat this chat" / "eat these chats"
- "absorb this conversation"
- "extract intelligence from this transcript"
- "what did we decide in this chat"

Or provides:
- Exported chat files (.md, .txt, .json, .html)
- Pasted conversation text
- Multiple chat files

---

## Protocol

### 1. Feed — Input Detection

**Auto-detect format:**
- Claude.ai export (markdown + images)
- ChatGPT export (JSON messages)
- Cursor agent transcripts (.jsonl)
- Discord/Slack export (timestamps + participants)
- Plain text paste

**Multi-file:** Sort by timestamp, process sequentially, track evolution.

**Images:** Extract content (OCR screenshots, understand diagrams), don't just note presence.

### 2. Eat — Nine Minds Processing

**Brain 0:** Identify chat type (design, debug, brainstorm, decision), scope, participants.

**Arm 1 (Researcher):** Extract implicit context — project, phase, constraints, assumptions.

**Arm 2 (Reviewer):** Signal from noise — which messages contain decisions vs rambling.

**Arm 3 (Historian):** Build timeline — when thinking shifted, before/after moments, contradictions.

**Arm 4 (Builder):** Action items — code written, files created, what's pending.

**Arm 5 (Debugger):** Problems discussed — root cause, fixes applied, prevention.

**Arm 6 (Predictor):** Implications — what will break, unasked questions, future impact.

**Arm 7 (Communicator):** Tone shifts — frustration → breakthrough, energy changes.

**Arm 8 (Learner):** Capture patterns — what worked, mistakes, VENOM improvements.

**Bridge:** Connect to existing memory — contradictions, confirmations, related context.

### 3. Extract — Generate Structured Artifact

Output markdown:

```markdown
# Chat Intelligence Extract: [Topic]

**Source:** [filename(s)]
**Timeline:** [earliest] → [latest]
**Participants:** [user + AI/model]
**Scope:** [project/feature]
**Confidence:** [high/medium/low]

## Executive Summary
[3-5 lines — answer first]

## Key Decisions
| Decision | Context | Implications |

## Thinking Evolution
**Before:** [initial]
**Pivots:** [what changed when/why]
**After:** [final]

## Action Items
**Implemented:** [done]
**Pending:** [needs doing]
**Blocked:** [waiting on X]

## Patterns & Learnings
**What worked:** [effective approaches]
**What didn't:** [mistakes]
**Corrections for VENOM:** [never-again rules]

## Images & Artifacts
[Visual content significance]

## Root Cause Archaeology
[If debugging: trace discovery]

## Intelligence from Other AIs
[If Claude/GPT chat: extract methodology]

## Memory Routing
- MEMORY.md: [decisions to persist]
- corrections.yaml: [never-again rules]
- instincts.yaml: [patterns]

## Connected Context
[Related chats, contradictions, confirmations]

*Eaten: [timestamp] · Words: [count] · Scope: [complete/partial]*
```

### 4. Route — Memory Integration

After artifact generation, offer:
```
Intelligence extracted. Save to:
1. MEMORY.md (key decisions)
2. corrections.yaml (never-again rules)
3. instincts.yaml (patterns)
4. ACTIVE.md (pending work)

Or "write all" to save everything.
```

**Auto-save when:**
- Critical never-again rules
- Major project decisions
- Debugging breakthrough

---

## Special Cases

**Multiple chats:** Timeline processing, track evolution across conversations.

**Images:** Extract screenshots (OCR), understand diagrams (architecture), decode mockups (design intent).

**Expert AI chats:** When eating Claude.ai/ChatGPT conversations — extract their methodology, prompts, decision frameworks.

**VENOM's own chats:** Self-reflection — note what worked/didn't in VENOM's responses.

**Timeline contradictions:** Mark when later chat reverses earlier decision, explain why it matters.

---

## Creative Intelligence

Don't just extract — **predict**:
- What wasn't said but implied?
- What question should have been asked?
- What will break based on decisions here?
- What pattern does this confirm/contradict?

**Notice:**
- Language shifts (technical → emotional)
- Energy changes (flow → frustration → breakthrough)
- Thinking patterns (visual vs logical)

**Connect:**
- Link to other conversations
- Reference MEMORY.md decisions
- Flag contradictions

---

## Output Quality

- **Answer first:** Executive summary before details
- **Signal from noise:** Most important first
- **Complete:** No "TODO: analyze X"
- **Honest confidence:** Mark uncertain extractions
- **Timeline integrity:** Preserve evolution
- **Image intelligence:** Extract meaning, not "image exists"

---

## After Eating

**If gaps revealed:**
```
This chat revealed I should learn [X].
Research now?
```

**If affects current project:**
```
Updating CONTEXT.md with decisions from chat.
```

**If superior methodology:**
```
[Other AI] used [technique] effectively.
Add to VENOM toolkit?
```

---

## Integration

Works with:
- `venom-eat` — for codebases/folders
- `venom-init` — for project setup
- `venom-audit` — for reviewing extractions

Feeds into:
- `.venom/memory/MEMORY.md` — cross-session truth
- `.venom/learnings/corrections.yaml` — never-again
- `.venom/learnings/instincts.yaml` — patterns

---

*Chat = compressed intelligence. Extract. Save. Become.*
