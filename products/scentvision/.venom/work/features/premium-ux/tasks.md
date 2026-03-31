# Tasks — Premium UX

> Wave-based execution. Each wave = independent units. Parallel within wave.

---

## Wave 1 — Plugin Enhancements (Core)

| ID | Task | Files | Est. |
|----|------|-------|------|
| T1 | Add `session.progress` event emitter to venom-core.ts | `.opencode/plugins/venom-core.ts` | 15min |
| T2 | Implement debounce wrapper for progress updates | `.opencode/plugins/venom-core.ts` | 10min |
| T3 | Add progress state to plugin memory | `.opencode/plugins/venom-core.ts` | 10min |

**Wave 1 Verification:** `tsc --noEmit` passes, progress events emit on tool calls

---

## Wave 2 — Warning Display (UX)

| ID | Task | Files | Est. |
|----|------|-------|------|
| T4 | Add `formatWarning()` utility function | `.opencode/plugins/venom-core.ts` | 10min |
| T5 | Hook warning formatter into compaction handler | `.opencode/plugins/venom-core.ts` | 10min |
| T6 | Add warning threshold config (default: 5%) | `.opencode/plugins/venom-core.ts` | 5min |

**Wave 2 Verification:** Warnings appear at 5%, 10%, 20% context remaining

---

## Wave 3 — Summary Enhancement

| ID | Task | Files | Est. |
|----|------|-------|------|
| T7 | Add `generateCompactionSummary()` function | `.opencode/plugins/venom-core.ts` | 15min |
| T8 | Hook summary into `experimental.session.compacting` | `.opencode/plugins/venom-core.ts` | 10min |

**Wave 3 Verification:** Summary shows token count, % used, top consumers

---

## Dependencies

```
Wave 1 (no deps)
    ↓
Wave 2 (needs T1)
    ↓
Wave 3 (needs T1, T4)
```

## Total Estimate: 1.5 hours

## Smallest Multi-File Task

**T1 + T4 + T7** (touches ≥3 logical sections in same file — split across plugin)

If single-file constraint: Split T1 into:
- T1a: Progress emitter (plugin)
- T1b: Progress hook registration (plugin)
- T1c: Progress type definition (types)
