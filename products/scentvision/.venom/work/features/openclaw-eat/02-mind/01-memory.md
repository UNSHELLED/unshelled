# 02 — Mind: Memory System

## Architecture

OpenClaw uses **plain Markdown** as the source of truth. Two layers:

### Layer 1: Daily Logs
```
memory/2026-03-31.md  ← append-only daily journal
```
Agent writes here during memory flush. What happened, what was decided, what to remember.

### Layer 2: Curated Memory
```
MEMORY.md  ← hand-curated long-term memory
```
The main session maintains this. Important decisions, patterns, corrections.

### Layer 3: Vector Search (Hybrid)

- **Vector similarity** — semantic search via embeddings
- **BM25 keyword** — exact term relevance
- Combined: hybrid search with configurable weights

**Embedding providers** (auto-selected):
1. Local: node-llama-cpp with GGUF model (~0.6GB)
2. OpenAI embeddings
3. Gemini embeddings

**Cache**: Chunk embeddings stored in SQLite. sqlite-vec acceleration when available.

### Memory Flush Protocol

Before context compaction:
1. OpenClaw triggers a **silent agentic turn**
2. Injects user prompt + system prompt reminding model to save memories
3. Model writes to `memory/YYYY-MM-DD.md` and/or `MEMORY.md`
4. Controlled by `agents.defaults.compaction.memoryFlush`

### Session Memory (Experimental)

- Session transcripts can be indexed for vector search
- Enables "what did we discuss last week about X?" queries

## VENOM Mapping

| OpenClaw Memory | VENOM Equivalent |
|-----------------|------------------|
| `memory/YYYY-MM-DD.md` | `.venom/work/ACTIVE.md` daily entries |
| `MEMORY.md` | `.venom/memory/MEMORY.md` |
| Vector search | — (not in VENOM yet) |
| Memory flush | ECHO's compaction protocol |
| Embedding cache | — (new capability) |

**Key gap**: VENOM has no vector search. OpenClaw does. This is a **gain** for reshape.

## Questions to Answer

- [ ] Full config for vector search — every option
- [ ] How does auto-reindex work when provider changes?
- [ ] Can extra paths be indexed (like .venom/ files)?
- [ ] Memory flush prompt templates — exact text
- [ ] How does MEMORY.md differ from daily logs in practice?
