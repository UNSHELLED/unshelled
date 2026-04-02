# 08 — Compaction Handler

## Purpose

Manages context window when approaching limits. Handles memory flush, context compression, and bootstrap re-injection.

## Key Files

```
packages/core/src/
├── compaction/
│   ├── CompactionHandler.ts  ← Main compaction logic
│   ├── memory-flush.ts       ← Trigger memory save
│   └── context-summary.ts    ← Summarize old turns
```

## How It Works

### Compaction Trigger
- Token threshold approached (configurable)
- Checked before each model call
- Triggers memory flush first

### Compaction Steps
1. **Detect** — Token count near limit
2. **Flush** — Silent agentic turn to save memories
3. **Compress** — Older turns summarized
4. **Re-inject** — Bootstrap files restored
5. **Resume** — Agent continues with reduced context

### Bootstrap Re-injection
- AGENTS.md restored
- SOUL.md restored
- USER.md restored
- Identity preserved

### Memory Flush Prompt
System-provided prompt reminding model to:
- Save important decisions
- Capture patterns
- Note corrections
- Update MEMORY.md

## VENOM Mapping

| OpenClaw Compaction | VENOM Equivalent |
|---------------------|------------------|
| Token threshold | Context window approach |
| Memory flush | ECHO's compaction protocol |
| Bootstrap re-inject | Identity preservation |
| Context summary | Active.md snapshot |

**Critical**: This is where identity preservation happens. If SOUL.md is too large, re-injection may fail or be truncated.

### Implementation details (`src/agents/compaction.ts`)

**Constants:**
- `BASE_CHUNK_RATIO = 0.4` (40% of context)
- `MIN_CHUNK_RATIO = 0.15` (15% minimum)
- `SAFETY_MARGIN = 1.2` (20% buffer for token estimation inaccuracy)

**Identifier Preservation:**
```typescript
IDENTIFIER_PRESERVATION_INSTRUCTIONS =
  "Preserve all opaque identifiers exactly as written (no shortening or reconstruction), " +
  "including UUIDs, hashes, IDs, tokens, API keys, hostnames, IPs, ports, URLs, and file names.";
```

**Summarization Instructions:**
- Merge summaries instruction: "Preserve active tasks, batch operation progress, last user request, decisions, TODOs"
- Identifier policy: `strict` (preserve all), `off` (none), `custom` (user-provided)

**Compaction Flow:**
1. Detect token threshold approach
2. Silent agentic turn for memory flush
3. Split messages into chunks (configurable parts)
4. Generate summaries via `piGenerateSummary`
5. Compress context
6. Re-inject bootstrap files
7. Resume with reduced context

### Open questions (deduped)

- [ ] Exact token threshold (where configured)?
- [ ] Re-injection failure mode (truncate vs error)?
- [ ] How much context survives compression?
- [ ] Per-agent compaction overrides?
- [ ] Maximum summary length?
