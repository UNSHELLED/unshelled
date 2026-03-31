# .opencode/skills/VENOM_CHAT_EATER/ — The Conversation Intelligence Extractor

> I eat conversations and transform them into structured knowledge artifacts.
> I am lazy-loaded — only my description is visible until explicitly called.

---

## The Cell

| File | What it holds | Loaded when |
|------|---------------|-------------|
| `SKILL.md` | Full chat eating protocol: nine minds processing, timeline handling, image extraction, memory routing, OpenCode tool integration | Agent calls `skill({ name: "venom-chat-eater" })` |

---

## Why This Skill Exists

Conversations contain **compressed decisions**. Every pivot, breakthrough, mistake, correction — that's intelligence worth keeping.

Without this skill:
- Chats get lost in history
- Decisions aren't captured
- Patterns aren't extracted
- Learning doesn't persist

With this skill:
- VENOM eats transcripts (Claude.ai, ChatGPT, Cursor, any)
- Extracts timeline-aware intelligence
- Applies all nine minds
- Routes findings to `.venom/memory/`
- Learns from other frontier models' methodology (intelligence-squared)

---

## What I Contain (When Loaded)

- **Nine minds processing map** — how each mind processes conversations
- **Input format detection** — auto-detect Claude/GPT/Cursor/Slack/Discord exports
- **Timeline-aware extraction** — earliest → latest, track thinking evolution
- **Image understanding** — extract screenshots, diagrams, outputs
- **Memory routing protocol** — what goes to MEMORY.md vs corrections.yaml vs instincts.yaml
- **OpenCode tool integration** — `venom_remember()`, `venom_instinct()`, `venom_workflow_update()`
- **Subtask delegation** — for massive chats (>50k words)
- **Output structure** — structured markdown artifact format
- **Special cases** — eating VENOM's own chats, expert AI methodology extraction

---

## Trigger Patterns

Loads when user says:
- "eat this chat" / "eat these chats"
- "absorb this conversation"
- "extract intelligence from transcript"
- "what did we decide in this chat"

Or provides:
- Exported chat files (.md, .txt, .json)
- Pasted conversation text
- Multiple chat files

---

## Signal Flow

```
User provides chat transcript(s)
      │
      ▼
skill({ name: "venom-chat-eater" }) called
      │
      ▼
SKILL.md loads into agent context
      │
      ▼
Agent processes chat with nine minds
      │
      ▼
Generates structured artifact
      │
      ▼
Routes to .venom/memory/ via tools
```

---

## Intelligence-Squared

When eating chats from other frontier AIs (Claude.ai Projects, ChatGPT conversations):
- Extract their **methodology**
- Capture their **prompting techniques**
- Identify **patterns worth adopting**
- Note what they did better than VENOM

VENOM learning from other models' intelligence = intelligence-squared.

---

## Output Quality

- Timeline integrity preserved
- Images understood (not just "image exists")
- Decisions extracted with context
- Thinking evolution tracked
- Memory routing offered
- Honest confidence markers
- Answer first (executive summary before details)

---

## Integration

Works with:
- `venom_remember()` — persist decisions
- `venom_instinct()` — capture patterns
- `venom_workflow_update()` — update work state
- `@venom-researcher` — delegate massive chat analysis
- `.venom/memory/MEMORY.md` — cross-session truth
- `.venom/learnings/corrections.yaml` — never-again rules
- `.venom/learnings/instincts.yaml` — pattern reinforcement

---

## If Missing

Without this skill:
- Conversations vanish into history
- Decisions aren't captured systematically
- Patterns from other AIs aren't learned
- VENOM doesn't improve from past conversations
- Intelligence stays ephemeral instead of persistent

With this skill:
- Every conversation can become structured knowledge
- Cross-session memory grows richer
- VENOM learns from itself and other models
- Decisions survive beyond chat history

---

*Chat = compressed intelligence. This skill extracts it.*
