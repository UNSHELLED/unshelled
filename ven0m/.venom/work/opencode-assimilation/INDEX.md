# VENOM × OpenCode — Work Area Index

**Purpose:** Navigation for all assimilation assets.
**Last updated:** 2026-03-27 (bundle consolidated + template synced)

**GitHub:** `REMOTE.md` — canonical fork `https://github.com/Unshelled/venom-opencode` (upstream `anomalyco/opencode`).

---

## Phase Status

- **Phase 1 — Deep Discovery:** ✅ COMPLETE
- **Phase 2 — Runnable bundle:** ✅ `venom-opencode-full/venom-opencode/` + sync to `platforms/opencode/template/`
- **Next:** Push to fork `Unshelled/venom-opencode` when ready; optional polish on `venom-core.ts` types against live SDK

---

## Canonical package (read this first)

| File | Purpose |
|------|---------|
| **PACKAGE-MAP.md** | SSOT paths: bundle vs template vs drafts — **no duplicate roots** |
| **venom-opencode-full/venom-opencode/** | Full AGENTS + opencode.json + `.opencode/` (agents, commands, plugin, skill) + docs |

---

## Work Files

| File | Purpose | Status |
|------|---------|--------|
| **INDEX.md** (this) | Navigation | ✅ EAT-2026-03-27e |
| **PACKAGE-MAP.md** | Single source of truth map + copy commands | ✅ 2026-03-27 |
| **ANATOMY.md** | Install + DB schema + config paths + active config + paths | ✅ EAT-2026-03-27e |
| **CAPABILITIES.md** | COMPLETE — 20 sections; CLI, agents, config, plugin, TUI | ✅ EAT-2026-03-27e |
| **PATTERNS.md** | 9-section: agents, surfaces, persistence, config, plugin, snapshot, cognitive | ✅ EAT-2026-03-27e |
| **ARCHITECTURE.md** | VENOM×OpenCode fusion design + agent-mind map | ✅ EAT-2026-03-27e |
| **LEARNINGS.md** | Digest log (a–e) + draft defects + never-again rules | ✅ EAT-2026-03-27e |
| **WORKFLOW-JOB.md** | Lanes A–G job spec (used during Phase 1) | ✅ reference |
| **MASTER-PLAN.md** | Eight phases, full vision | ✅ reference |
| **DRAFTS-INVENTORY.md** | All 44 drafts + merge order | ✅ reference |
| **SESSION-LEGACY-DIGEST.md** | How to use `session-ses_2cf8.md` | ✅ reference |
| **REMOTE.md** | GitHub remote doc | ✅ |
| **CLAUDE-MASTERPIECE-PROMPT.md** | Head-VENOM prompt: OpenCode + intelligence study + **VENOM DNA** (naming, soul, surfaces) + 24-file attach list + Output 5 naming | ✅ 2026-03-27 |
| **drafts/UPSTREAM-README-DIGEST.md** | Verified README facts (dev branch) | ✅ |
| **drafts/CORPUS-DIGEST.md** | Full drafts corpus + defect registry | ✅ EAT-2026-03-27d |

---

## Platform Output

| Location | Status |
|----------|--------|
| `platforms/opencode/README.md` | ✅ System map |
| `platforms/opencode/knowledge/*.md` | ✅ Anatomy + tools (also under `template/.opencode/knowledge/`) |
| `platforms/opencode/template/` | ✅ Synced from `venom-opencode-full/venom-opencode/` — **AGENTS.md**, **opencode.json**, **NAMING.md**, **BUILD-ORDER.md**, **docs/**, **README-VENOM-OPENCODE.md**, `.opencode/agents/`, `.opencode/commands/` (`/venom-*`), `.opencode/plugins/venom-core.ts`, `.opencode/skills/VENOM_OPENCODE/` |

---

## External System Study (GSD · OpenBrowser · ECC)

These files synthesize intelligence patterns from three masterpiece open-source systems.  
**Purpose:** Study before designing VENOM-OpenCode integration.

| File | What it studies |
|------|-----------------|
| **STUDY-INDEX.md** | Navigation + philosophy of the three systems |
| **INTELLIGENCE-STUDY.md** | 11 patterns synthesized: context engineering, loops, learning, hooks, waves, gates, memory, sandboxing, XML, orchestration, cross-platform |
| **LEARNING-PATTERNS-STUDY.md** | Auto-capture, instinct evolution, confidence scoring (from ECC) |
| **LOOP-PATTERNS-STUDY.md** | Autonomous loops, stall detection, checkpointing (from OpenBrowser) |
| **SAFETY-PATTERNS-STUDY.md** | 5 verification gates, resource limits, danger zones (from GSD + ECC) |
| **STUDY-SUMMARY.md** | What was extracted and why |

**Status:** ✅ Study complete. Ready to apply patterns to OpenCode integration design.

---

## What VENOM now knows (full)

### OpenCode Platform
1. All CLI subcommands (22 commands, all flags)
2. Agent architecture: 2 primaries + 2 subagents + hidden system agents + custom
3. Permission model: tool + bash glob + task + last-wins rule
4. Config: 6-layer merge, variable substitution, all top-level keys
5. Plugin system: `~/.config/opencode/` as npm project, SDK API
6. TUI: all slash commands including `/connect`
7. DB schema: 11 tables, SQL query patterns
8. Disk paths: Windows-exact (this machine)
9. Active state: VENOM skill already loaded via `opencode debug skill`
10. Snapshot/undo system
11. PR + GitHub agent workflow
12. LSP built-in
13. Draft corpus defects: 7 identified + documented

### External Intelligence Patterns (studied)
14. Context engineering (GSD): size limits, progressive layering, state files
15. Autonomous loops (OpenBrowser): observe → hypothesize → test → evaluate
16. Instinct learning (ECC): confidence-scored auto-capture → evolution
17. Hook architecture (ECC): interception points for intelligence injection
18. Wave execution (GSD): dependency-aware parallel orchestration
19. Verification gates (GSD + ECC): 5 quality checkpoints
20. Safety patterns (all 3): resource limits, danger zones, cost tracking

**Shipped:** Patterns applied in `venom-opencode-full/venom-opencode/` (see PACKAGE-MAP.md).

🐙
