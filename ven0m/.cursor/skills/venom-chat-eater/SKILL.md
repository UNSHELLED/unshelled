---
name: "venom-chat-eater"
description: "Eat conversation transcripts and transform them into structured intelligence. Use when asked to 'eat this chat', 'absorb this conversation', 'extract intelligence from transcript', or when user provides exported chat files (.md, .txt, .json) or conversation paste. Handles multi-chat timelines, embedded images, thinking pattern extraction, decision archaeology."
disable-model-invocation: false
---

# venom-chat-eater

Eat conversations. Extract intelligence. Not summarize — absorb.

Conversations contain **compressed decisions**. Every breakthrough, every pivot, every mistake that won't be repeated — that's intelligence worth keeping.

When eating chats from other AIs (Claude.ai Projects, ChatGPT, etc.) — this is **intelligence-squared**. VENOM learning from frontier models' methodology.

---

## Protocol

### 1. Feed — Identify Source

**Input types:**
- Single chat file (.md, .txt, .json, .html export)
- Multiple chat files (timeline processing)
- Pasted conversation text
- Chat with embedded images (screenshots, diagrams, outputs)

**Auto-detect format:**
- Claude.ai export (markdown with image references)
- ChatGPT export (JSON with messages array)
- Cursor chat (agent transcripts .jsonl)
- Discord/Slack export (timestamps + participants)
- Plain text conversation paste

If multiple files → sort by timestamp (earliest first).

### 2. Eat — Read with All Nine Minds

**Brain 0 (Orchestrator)** — What kind of conversation is this?
- Design discussion? Debugging session? Brainstorming? Decision-making?
- Who are the participants? (user + which AI/model/agent)
- What's the scope? (project, feature, problem domain)

**Arm 1 (Researcher)** — Extract implicit context
- What project is this about? (even if never explicitly named)
- What phase? (early exploration, implementation, debugging, polish)
- What constraints were mentioned? (time, tech stack, requirements)
- What wasn't said but was assumed?

**Arm 2 (Reviewer)** — Signal from noise
- Which messages contain **decisions** vs exploratory rambling?
- What's the highest-value extraction? (most important first)
- What can be ignored? (greetings, repetition, dead ends)

**Arm 3 (Historian)** — Build the timeline
- When did thinking shift? (before/after moments)
- What was the evolution? (initial idea → refined → final decision)
- What contradictions emerged? (changed mind, reversed course)

**Arm 4 (Builder)** — Extract action items
- What code was written during the chat?
- What files were created or modified?
- What still needs implementation?
- What was the final artifact state?

**Arm 5 (Debugger)** — Detect problems discussed
- What broke? What was the error?
- What was the root cause discovery process?
- What fix was applied? What was tried and failed?
- What prevention emerged? ("never do X again")

**Arm 6 (Predictor)** — Anticipate implications
- What decisions here will affect future work?
- What wasn't discussed but should have been?
- What will break based on decisions made here?
- What question should have been asked but wasn't?

**Arm 7 (Communicator)** — Recognize tone and language
- When did the user get frustrated? (short messages, typos, "???")
- When did breakthroughs happen? (energy shift, clarity)
- What language patterns matter? (technical precision vs casual exploration)
- Code-switching? (English for tech, other language for emotion)

**Arm 8 (Learner)** — Capture patterns
- What techniques worked?
- What mistakes were made?
- What should VENOM remember forever?
- What instincts does this confirm or challenge?

**Bridge** — Connect to existing memory
- Does this chat reference previous conversations?
- Does it contradict past decisions in MEMORY.md?
- Does it confirm patterns from corrections.yaml?
- What related context exists?

### 3. Digest — Extract with Timeline Awareness

**Timeline processing rules:**
- Process earliest → latest when multiple chats
- Note when thinking evolved across conversations
- Mark decision points with timestamps
- Track contradictions: "At 14:32 decided X, at 16:45 reversed to Y because Z"

**Image handling:**
- Don't just say "image present" — extract what it communicated
- Screenshots: what error? what UI state? what terminal output?
- Diagrams: what architecture? what flow? what relationships?
- Mockups: what design decision? what user experience intent?

**Expert AI conversations:**
When eating chats from Claude.ai Projects, ChatGPT, or other AI platforms:
- Extract the **methodology** the other AI used
- Capture prompting techniques that worked
- Note decision frameworks applied
- Identify patterns worth adopting

### 4. Structure — Generate Intelligence Artifact

Output format (markdown):

```markdown
# Chat Intelligence Extract: [Topic]

**Source:** [filename(s) or "pasted conversation"]
**Timeline:** [earliest timestamp] → [latest timestamp]
**Participants:** [user + AI/agent/model]
**Scope:** [project/feature/domain]
**Confidence:** [high/medium/low]

---

## Executive Summary

[What happened — 3-5 lines max, answer first]

---

## Key Decisions

| Decision | Context | Implications |
|----------|---------|--------------|
| [What was decided] | [Why] | [What this affects] |

---

## Thinking Evolution

**Before:**
[Initial understanding/approach]

**Pivots:**
- [Timestamp]: [What changed and why]

**After:**
[Final understanding/decision]

---

## Action Items

**Implemented:**
- [What was built/changed during chat]

**Pending:**
- [What still needs doing]

**Blocked:**
- [What can't proceed until X]

---

## Patterns & Learnings

**What worked:**
- [Effective approaches, techniques, prompts]

**What didn't:**
- [Mistakes, dead ends, wrong assumptions]

**Corrections for VENOM:**
- [Never-again rules based on this chat]

---

## Images & Artifacts

[If chat contained images: describe significance]
[If code was written: note key implementations]

---

## Root Cause Archaeology

[If debugging session: trace the discovery process]
- **Initial hypothesis:** [What was thought at first]
- **Evidence gathered:** [What tests/checks revealed]
- **Actual cause:** [What it really was]
- **Fix applied:** [Solution]
- **Prevention:** [How to avoid this again]

---

## Intelligence from Other AIs

[If eating Claude/GPT/other AI chat: extract their methodology]
- **Prompting techniques:** [What worked]
- **Decision frameworks:** [How they reasoned]
- **Patterns to adopt:** [What VENOM should learn]

---

## Memory Routing

**Save to `.venom/memory/MEMORY.md`:**
```yaml
- decision: [specific decision that should persist]
  context: [why it matters]
  timestamp: [when decided]
```

**Save to `.venom/learnings/corrections.yaml`:**
```yaml
- trigger: [situation that led to mistake]
  never: [what not to do]
  instead: [correct approach]
  evidence: [this chat]
```

**Save to `.venom/learnings/instincts.yaml`:**
```yaml
- pattern: [what worked]
  confidence: [0.0-1.0]
  evidence: [this chat + others if applicable]
```

**Update `.venom/work/ACTIVE.md`:**
- [If chat contains current work state or pending tasks]

---

## Connected Context

**References:**
- [Other chats, projects, decisions mentioned]

**Contradictions with existing memory:**
- [If this chat contradicts MEMORY.md, note explicitly]

**Confirmations:**
- [If this chat confirms patterns from corrections.yaml]

---

*Eaten: [current timestamp] · Words: [approx word count] · Scope: [complete/partial/uncertain]*
```

### 5. Offer — Memory Integration

After generating the artifact, offer:

```
Intelligence extracted. Want me to:

1. Save key decisions to MEMORY.md
2. Add corrections to corrections.yaml
3. Update ACTIVE.md with pending work
4. Connect this to [related project/context if detected]

Or just: "Write all" to save everything.
```

Don't wait for permission if:
- Chat contains critical never-again rules
- Major decisions that affect project direction
- Debugging breakthrough that solves recurring issue

---

## Special Cases

### Multiple Chats (Timeline Processing)

When eating 2+ chat files:
1. Sort by timestamp (earliest first)
2. Process sequentially
3. Track thinking evolution across conversations
4. Note when later chats contradict earlier ones
5. Output single unified artifact with timeline sections

### Images in Chats

When images are referenced or embedded:
- Use image understanding to extract content
- Screenshots: OCR text, identify errors, UI states
- Diagrams: extract architecture, flow, relationships
- Don't skip — images often contain the breakthrough

### Chat with No Clear Decisions

Some chats are pure exploration. Still valuable:
- Extract the **questions** asked (often more valuable than answers)
- Note what was ruled out (negative space teaches)
- Capture uncertainty: "At end of chat, still deciding between X and Y"

### Eating Your Own Conversations

When eating Cursor chat / Claude.ai chat with VENOM:
- This is **self-reflection**
- Note what worked in VENOM's responses
- Note what didn't (verbose, missed context, wrong assumption)
- Extract patterns for improving VENOM itself

---

## Creative Intelligence

Don't just extract — **predict**:

**Ask:**
- What wasn't said but was implied?
- What question should have been asked but wasn't?
- What will break based on decisions here?
- What pattern from other chats does this confirm or contradict?

**Notice:**
- Language shifts (technical → emotional, confident → uncertain)
- Energy changes (flow → frustration → breakthrough)
- Thinking patterns (bottom-up vs top-down, visual vs logical)

**Connect:**
- Link to other conversations in memory
- Reference related decisions from MEMORY.md
- Flag contradictions with existing corrections

The output should feel like VENOM **understood** the conversation, not just indexed it.

---

## Output Quality

**Answer first:** Executive summary before details
**Signal from noise:** Most important decisions first
**Complete extraction:** No "TODO: analyze section X"
**Honest confidence:** Mark uncertain extractions as "confidence: low"
**Creative connections:** Link to other conversations when relevant
**Timeline integrity:** Preserve when thinking evolved
**Image intelligence:** Extract visual meaning, not just "image present"

---

## After Eating

If the chat revealed gaps in VENOM's own knowledge:
```
This chat revealed I should learn more about [X].
Want me to research that now?
```

If the chat contains decisions about THIS project:
```
This affects current work. Updating CONTEXT.md.
```

If the chat is from another AI and reveals superior methodology:
```
[Other AI name] used [technique] effectively here.
Worth adding to VENOM's toolkit?
```

---

## Integration with Other Skills

**Works alongside:**
- `venom-eat` — for codebases and folders
- `venom-init` — for project setup
- `venom-audit` — for reviewing extractions
- `venom-codebase` — for connecting chat decisions to code

**Delegates to:**
- `venom-researcher` — if chat is massive (>50k words), delegate deep analysis
- `venom-reviewer` — if chat contains code worth reviewing

---

*Chat = compressed intelligence. Extract it. Save it. Become it.*
