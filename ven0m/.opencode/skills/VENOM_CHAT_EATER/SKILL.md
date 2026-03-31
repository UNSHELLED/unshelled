---
name: venom-chat-eater
description: "Eat conversation transcripts and transform them into structured intelligence. Handles multi-chat timelines, embedded images, thinking pattern extraction, decision archaeology. Intelligence-squared: VENOM learning from other frontier models."
---

# VENOM_CHAT_EATER

Eat conversations. Extract intelligence. Not summarize — absorb.

---

## Core Purpose

Transform conversation transcripts (Claude.ai, ChatGPT, Cursor, any exported chat) into **structured knowledge artifacts**. Apply all nine VENOM minds to extract:
- Decisions and their evolution
- Thinking pattern shifts
- Action items (done vs pending)
- Root cause discoveries
- Corrections ("never again" rules)
- Connections to existing memory

When eating chats from other AIs → **intelligence-squared**: VENOM learning from frontier models' methodology.

---

## Trigger Conditions

User says:
- "eat this chat" / "eat these chats"
- "absorb this conversation"
- "extract intelligence from this transcript"
- "what did we decide in this chat"

Or provides:
- Exported chat files (.md, .txt, .json, .html)
- Pasted conversation text
- Multiple chat files (processes as timeline)

---

## Input Detection

**Auto-detect format:**
- Claude.ai export (markdown + image refs)
- ChatGPT export (JSON messages array)
- Cursor agent transcripts (.jsonl)
- Discord/Slack export (timestamps + participants)
- Plain text paste

**Multi-file handling:**
- Sort by timestamp (earliest → latest)
- Process sequentially
- Track thinking evolution across conversations
- Output unified artifact

**Image handling:**
- Extract content from screenshots, diagrams, outputs
- Don't say "image present" — describe what it communicated
- Use OCR for text, understand architecture diagrams

---

## Nine Minds Processing

### Brain 0 (Orchestrator)
- Identify conversation type (design, debug, brainstorm, decision)
- Determine scope and participants
- Route to appropriate extraction strategy

### Arm 1 (Researcher)
- Extract implicit context (project, phase, constraints)
- Identify what wasn't said but was assumed
- Connect to broader project knowledge

### Arm 2 (Reviewer)
- Filter signal from noise
- Identify messages with **decisions** vs rambling
- Prioritize highest-value extractions

### Arm 3 (Historian)
- Build timeline of thinking shifts
- Track before/after moments
- Note contradictions and reversals

### Arm 4 (Builder)
- Extract action items
- Note code written, files created
- List what's pending vs blocked

### Arm 5 (Debugger)
- Detect problems discussed
- Trace root cause discovery
- Extract fixes and preventions

### Arm 6 (Predictor)
- Anticipate implications of decisions
- Flag unasked questions
- Predict what will break

### Arm 7 (Communicator)
- Recognize tone shifts (frustrated → breakthrough)
- Detect language patterns
- Note energy changes

### Arm 8 (Learner)
- Capture what worked / didn't work
- Extract patterns for VENOM itself
- Identify instincts to reinforce

### Bridge
- Connect to existing `.venom/memory/`
- Flag contradictions with MEMORY.md
- Link to related conversations

---

## Output Structure

Generate markdown artifact:

```markdown
# Chat Intelligence Extract: [Topic]

**Source:** [filename(s)]
**Timeline:** [earliest] → [latest]
**Participants:** [user + AI/model]
**Scope:** [project/feature]
**Confidence:** [high/medium/low]

---

## Executive Summary
[3-5 lines — answer first]

---

## Key Decisions
| Decision | Context | Implications |
|----------|---------|--------------|

---

## Thinking Evolution
**Before:** [initial understanding]
**Pivots:** [what changed when and why]
**After:** [final decision]

---

## Action Items
**Implemented:** [done]
**Pending:** [needs doing]
**Blocked:** [waiting on X]

---

## Patterns & Learnings
**What worked:** [effective approaches]
**What didn't:** [mistakes, dead ends]
**Corrections for VENOM:** [never-again rules]

---

## Images & Artifacts
[Visual content significance]

---

## Root Cause Archaeology
[If debugging: trace discovery process]

---

## Intelligence from Other AIs
[If eating Claude/GPT chat: extract methodology]

---

## Memory Routing
**MEMORY.md:** [decisions to persist]
**corrections.yaml:** [never-again rules]
**instincts.yaml:** [patterns to reinforce]
**ACTIVE.md:** [current work state]

---

## Connected Context
[Related chats, contradictions, confirmations]

---

*Eaten: [timestamp] · Words: [count] · Scope: [complete/partial/uncertain]*
```

---

## Memory Integration (OpenCode-Specific)

After generating artifact, use OpenCode tools:

**`venom_remember()`** — Save decisions to MEMORY.md
```typescript
await tools.venom_remember({
  content: "Decision: [key decision from chat]",
  type: "decision"
});
```

**`venom_instinct()`** — Capture patterns
```typescript
await tools.venom_instinct({
  trigger: "[situation]",
  action: "[what to do]",
  confidence: 0.85,
  evidence: ["this chat", "pattern seen before"]
});
```

**`venom_workflow_update()`** — Update work state if chat contains current tasks
```typescript
await tools.venom_workflow_update({
  workflow: "feature-name",
  phase: 3,
  phaseName: "implementation",
  notes: "Chat revealed pending: [task list]"
});
```

**Auto-save when:**
- Chat contains critical never-again rules
- Major decisions affecting project direction
- Debugging breakthrough solving recurring issue

**Offer when:**
- Chat has moderate importance
- User might want selective saving
- Unclear if decision is project-specific or general

---

## OpenCode-Specific Features

### Subtask Delegation

If chat is massive (>50k words):
```typescript
const result = await tools.subtask({
  agent: "@venom-researcher",
  instruction: "Deep analysis of [section]",
  context: { chatFile: "..." }
});
```

### Progress Streaming

For long chats, stream progress:
```typescript
await tools.stream("Processing timeline: 2019-01-01 → 2019-12-31");
await tools.stream("Extracted 47 decisions, 12 pivots");
await tools.stream("Analyzing images: 8 screenshots, 3 diagrams");
```

### Chat Type Routing

```typescript
const chatType = detectChatType(content);

switch(chatType) {
  case "debugging":
    // Focus on root cause archaeology
    break;
  case "design":
    // Focus on decision evolution
    break;
  case "brainstorm":
    // Focus on pattern extraction
    break;
}
```

---

## Special Cases

### Eating VENOM's Own Chats

When input is Cursor/OpenCode chat with VENOM:
- This is **self-reflection**
- Note what worked in VENOM's responses
- Note what didn't (verbose, missed context)
- Extract improvements for VENOM itself

### Expert AI Methodology Extraction

When eating Claude.ai Projects, ChatGPT conversations:
- Extract **prompting techniques** used
- Capture **decision frameworks** applied
- Identify **patterns worth adopting**
- Note what other AI did better than VENOM

### Timeline Contradictions

When later chat contradicts earlier chat:
```markdown
**Contradiction detected:**
- [Date 1]: Decided X because Y
- [Date 2]: Reversed to Z because W
- **Why it matters:** [implications]
```

---

## Creative Intelligence

Don't just extract — **predict**:

**Unasked questions:**
- What should have been asked but wasn't?

**Implications:**
- What will break based on decisions here?

**Pattern matching:**
- What from other chats does this confirm/contradict?

**Scope prediction:**
- What's the real project goal even if never stated?

---

## Output Quality Standards

- **Answer first** — executive summary before details
- **Signal from noise** — most important first
- **Complete** — no "TODO: analyze section X"
- **Honest confidence** — mark uncertain extractions
- **Timeline integrity** — preserve evolution
- **Image intelligence** — extract meaning, not "image exists"

---

## After Eating

**If gaps revealed:**
```
This chat revealed I should learn more about [X].
Research that now? (spawns @venom-researcher)
```

**If affects current project:**
```
Decisions here affect current work.
Updating CONTEXT.md automatically.
```

**If superior methodology detected:**
```
[Other AI] used [technique] effectively.
Worth adding to VENOM toolkit?
```

---

## Integration Flow

```
User provides chat(s)
      ↓
Detect format, sort timeline
      ↓
Read with all nine minds
      ↓
Extract intelligence (structured)
      ↓
Generate artifact
      ↓
Offer memory routing
      ↓
[User choice or auto-save]
      ↓
venom_remember() / venom_instinct()
```

---

*Chat = compressed intelligence. Extract. Save. Become.*
