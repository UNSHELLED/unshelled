# 04 — Memory Manager

## Purpose

Handles memory storage, retrieval, vector search, and the memory flush protocol before compaction.

## Key Files

```
packages/core/src/
├── memory/
│   ├── manager.ts          ← Memory read/write/search
│   ├── vector-search.ts    ← Embedding + similarity search
│   ├── flush.ts            ← Memory flush protocol
│   └── storage/
│       ├── markdown.ts     ← Daily logs + MEMORY.md
│       └── sqlite.ts       ← Vector cache
```

## How It Works

### Memory Layers
1. **Daily Logs** — `memory/YYYY-MM-DD.md` (append-only)
2. **Curated Memory** — `MEMORY.md` (hand-maintained)
3. **Vector Index** — SQLite with embeddings cache

### Vector Search (`memory-search.ts`)
- **Hybrid search**: vector similarity + BM25 keyword
- **Embedding providers**: local (node-llama-cpp), OpenAI, Gemini
- **Config**: `memory.provider` setting
- **Cache**: Chunk embeddings in SQLite
- **sqlite-vec**: Acceleration when available
- **MMR (Maximal Marginal Relevance)**: Reduces redundancy in results
- **Temporal decay**: Recent results weighted higher

### Memory Flush Protocol
1. Triggered before compaction
2. Silent agentic turn
3. Inject reminder prompt
4. Model writes to memory files
5. Controlled by `agents.defaults.compaction.memoryFlush`

### Session Indexing (Experimental)
- Session transcripts indexed for vector search
- Enables "what did we discuss about X?" queries
- Config: `memory.experimental.sessionMemory`

### Multimodal Memory
- Images can be indexed with embeddings
- Config: `memory.multimodal.enabled`
- Provider-specific implementations

## VENOM Mapping

| OpenClaw Memory | VENOM Equivalent |
|-----------------|------------------|
| `memory/YYYY-MM-DD.md` | `.venom/work/ACTIVE.md` daily entries |
| `MEMORY.md` | `.venom/memory/MEMORY.md` |
| Vector search | — (not in VENOM yet) |
| Memory flush | ECHO's compaction protocol |
| Embedding cache | — (new capability) |

**Key gap**: VENOM has no vector search. OpenClaw does. This is a **gain** for reshape.

## Questions Answered

- [ ] Full config for vector search
- [ ] How does auto-reindex work when provider changes?
- [ ] Can extra paths be indexed (like .venom/ files)?
- [ ] Memory flush prompt templates

## New Questions

-
