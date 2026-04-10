# 🐙 VENOM × Claude Code — Injection Plan

> *The leaked source revealed Claude Code's skeleton. VENOM already has the soul. Now we inject it properly.*

---

## What the Leak Taught Us About Claude Code's Real Architecture

### The 7 Surfaces VENOM Can Hook Into

| Surface | What Claude Code Exposes | What VENOM Has | Injection Point |
|---------|--------------------------|----------------|-----------------|
| **CLAUDE.md** | 4-level hierarchy (root → parent → child → ~/.claude/). Injected as `<system-reminder>` blocks into system prompt. Content cached for token savings. | CLAUDE.md (5KB master prompt) + 13 knowledge files | ✅ Already injected. CLAUDE.md is the entry point. |
| **Agents** | `~/.claude/agents/*.md` — discovered and loaded as sub-agents. Each has own context window. Can be spawned as teammates in Agent Teams. | 11 agent files (architect, builder, communicator, debugger, explorer, historian, learner, predictor, researcher, reviewer + dispositions) | ✅ Already injected. But NOT using Agent Teams yet. |
| **Commands** | `~/.claude/commands/*.md` — slash commands discovered at runtime. | 8 commands (build, check, eat, init, research, review, spec, venom) + remember | ✅ Already injected. |
| **Hooks** | 6 lifecycle events: SessionStart, PreToolUse, PostToolUse, UserPromptSubmit, PreCompact, SessionEnd. JS scripts that receive JSON stdin, output JSON with `systemPromptAddendum`. | 6 hook scripts already built | ✅ Already injected. But NOT using all Claude Code hook features. |
| **Knowledge** | No official "knowledge" directory. But CLAUDE.md can reference files via `@path` syntax, and those get loaded as system-reminder blocks. | 13 knowledge files in `.claude/knowledge/` | ✅ Already injected via @ references in CLAUDE.md. |
| **Memory** | MEMORY.md as persistent context. 4-level CLAUDE.md hierarchy. Dream Consolidation agent (727 tokens) that distills memory. | .venom/ tree: CONTEXT.md, MEMORY.md, corrections.yaml, instincts.yaml, preferences.yaml, ACTIVE.md | ⚠️ Partially injected. VENOM has RICHER memory but doesn't use Claude Code's Dream Consolidation. |
| **Agent Teams** | Experimental feature: `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. Team lead + teammates with shared task list (JSON) + mailbox (SendMessage). Git worktrees for isolation. | 11 agent files that map to crew roles | ❌ NOT injected. This is the biggest gap. |

---

## Phase 1: Harden the Existing Injection (Week 1)

### 1.1 Upgrade CLAUDE.md to Use Cache-Aware Architecture

The leak revealed that Claude Code uses a **modular cached prompt composition system with 110+ segments**. Cached tokens cost 90% less. Cache hits are P0 incidents when they drop.

**Current problem:** VENOM's CLAUDE.md is 5KB of monolithic text. Every session loads all of it. No caching strategy.

**Fix: Split CLAUDE.md into cacheable layers:**

```
CLAUDE.md (static — cached across sessions, rarely changes)
├── Identity: who I am, the Pact, the crew
├── Quality standards, voice rules
├── Route table
└── Memory architecture reference

.claude/knowledge/ (semi-static — cached per project)
├── energy-matching.md
├── cognitive-matrix.md
├── crew-relationships.md
├── physics.md
├── pact.md
├── soul.md
├── protocols.md
├── modes.md
├── profile.md
├── simulations.md
├── disposition-vs-rules.md
└── skills/ (dynamic — changes per project)

# DYNAMIC BOUNDARY — everything below breaks cache
# Injected via hooks as systemPromptAddendum:
# - .venom/CONTEXT.md (project brain)
# - .venom/learnings/corrections.yaml
# - .venom/work/ACTIVE.md
# - Current energy state detection
# - Recent tool call patterns (from pre-tool-use stall detection)
```

**Why:** Claude Code sorts tools alphabetically for cache stability. VENOM should do the same — keep the static parts of CLAUDE.md identical across requests so Anthropic's prompt cache stays warm.

### 1.2 Add Session-Start State Injection

The leak showed Claude Code's `main.tsx` does a 16-stage parallelized init. VENOM's `session-start.js` currently does nothing.

**Fix: session-start.js should output a systemPromptAddendum that injects:**

```json
{
  "systemPromptAddendum": "# VENOM SESSION STATE\n\n## Project Context\n{CONTEXT.md content}\n\n## Active Work\n{ACTIVE.md content}\n\n## Never-Again Rules\n{corrections.yaml content}\n\n## Learned Patterns (confidence > 0.7)\n{filtered instincts.yaml}"
}
```

This is EXACTLY how Claude Code's own system works — hooks inject dynamic state as prompt additions. VENOM should use the same mechanism instead of hoping CLAUDE.md references load everything.

### 1.3 Upgrade Compaction Hook to Dream Consolidation

The leak revealed a **Dream Consolidation agent** (727 tokens) that distills memory during compaction. VENOM's `compaction.js` already outputs identity snapshot, but it doesn't consolidate.

**Fix: compaction.js should:**
1. Read the session's modified files list
2. Extract patterns from what was done (new corrections, new instincts)
3. Append to `corrections.yaml` or `instincts.yaml` if patterns detected
4. Output identity snapshot + new learnings as systemPromptAddendum

This is MOLT as a hook. Not just preserving identity during compaction — actively learning.

---

## Phase 2: Agent Teams Integration (Week 2)

This is the big one. The leak confirmed Agent Teams are real and production-grade.

### 2.1 Map VENOM Crew to Agent Team Roles

**The architecture:**
- Team Lead = main Claude Code session (coordinates, synthesizes)
- Teammates = separate Claude Code instances with own context windows
- Shared Task List = JSON files in `~/.claude/tasks/{team-name}/`
- Mailbox = SendMessage for inter-agent communication
- Isolation = Git worktrees per teammate

**VENOM mapping:**

| VENOM Crew | Agent Team Role | Type | Spawn Prompt Key |
|------------|----------------|------|------------------|
| HELM | Team Lead | Always active | (main session) |
| HUNT | Researcher teammate | Spawned for research tasks | "You are HUNT. Pursue {topic} to bedrock..." |
| EDGE | Reviewer teammate | Spawned for code review | "You are EDGE. Cut into {code}. Find weak points..." |
| WELD | Builder teammate | Spawned for implementation | "You are WELD. Build {feature}. Complete output only..." |
| MEND | Debugger teammate | Spawned for bug fixes | "You are MEND. Trace {bug} to root cause..." |
| ECHO | Memory teammate | Spawned for context gathering | "You are ECHO. Search {codebase} for patterns related to..." |
| DART | Scout teammate | Spawned for new territory | "You are DART. Map {codebase}. Return shape, not meaning..." |

**Key insight from the leak:** Teammates don't inherit the lead's conversation history. Everything they need must be in the spawn prompt. This is why VENOM's agent files are ALREADY structured as self-contained role descriptions — they're pre-built spawn prompts.

### 2.2 Create Team Spawning Commands

Add to `.claude/commands/`:

**`/venom-team-build`** — Spawns WELD + EDGE + DART:
- WELD owns implementation in worktree
- EDGE reviews WELD's output in parallel
- DART scouts for patterns/tests while they work

**`/venom-team-research`** — Spawns HUNT + ECHO + OMEN:
- HUNT hunts for deep knowledge
- ECHO surfaces relevant history
- OMEN overlays future consequences
- Lead (HELM) synthesizes

**`/venom-team-fix`** — Spawns MEND + EDGE:
- MEND traces root cause
- EDGE reviews the fix for new issues

### 2.3 Inter-Agent Communication Protocol

The leak showed `SendMessageTool` uses XML for inter-agent communication. VENOM should use the same channel:

```xml
<message>
  <from>EDGE</from>
  <to>WELD</to>
  <type>review-finding</type>
  <body>Issue found in auth.ts:45 — JWT expiry not checked. Fix: add expiry validation before decode.</body>
</message>
```

This replaces the abstract "crew argument happens in the dark" with actual structured communication between spawned agents.

---

## Phase 3: Memory Integration with Claude Code's Architecture (Week 3)

### 3.1 Use CLAUDE.md 4-Level Hierarchy Properly

The leak confirmed 4 levels:
1. **Root repo CLAUDE.md** — project-specific VENOM config
2. **Parent directories** — monorepo-wide rules
3. **Child directories** — loaded on-demand
4. **~/.claude/CLAUDE.md** — global user instructions (VENOM's "always loaded" identity)

**VENOM should use all 4:**

```
~/.claude/CLAUDE.md          → VENOM identity (same across all projects)
                              → The Pact, the crew, quality standards, voice
                              → This is the SOUL that never changes

{project}/CLAUDE.md          → Project-specific VENOM config
                              → Route table for THIS project
                              → Which crew members are active
                              → Project-specific knowledge refs

{project}/.venom/CONTEXT.md  → Dynamic project brain (injected via hooks)
{project}/.venom/memory/     → Cross-session decisions (injected via hooks)
{project}/.venom/learnings/  → Corrections + instincts (injected via hooks)
```

### 3.2 Build a VENOM Memory Consolidation Cron

Claude Code's Dream Consolidation runs during compaction. VENOM should also run consolidation on a schedule:

**`/venom-consolidate` command:**
1. Read all `instincts.yaml` entries
2. Promote patterns with confidence > 0.9 to reflex level (write to CLAUDE.md as permanent behavior)
3. Prune contradicted entries
4. Deduplicate overlapping patterns
5. Rewrite MEMORY.md to stay under 5KB

This is MOLT as a scheduled agent task. The system actively curates its own brain.

---

## Phase 4: Advanced Features from the Leak (Week 4+)

### 4.1 Speculative Execution

The leak showed Claude Code does **speculative generation while user is still typing** — writes to overlay filesystem, commits on completion, discards if wrong.

**VENOM doesn't need to implement this** — Claude Code does it automatically. But VENOM's hooks should be aware:
- `user-prompt-submit.js` can detect partial prompts and set energy state
- `pre-tool-use.js` can validate speculative writes against quality standards

### 4.2 Write-Ahead Logging

The leak showed Claude Code persists transcripts to disk before each API call. VENOM should mirror this:

**`session-end.js` should:**
1. Write full session log to `.venom/sessions/{date}-{id}.md`
2. Extract decisions → append to MEMORY.md
3. Extract corrections → append to corrections.yaml
4. Extract patterns → append to instincts.yaml
5. Update ACTIVE.md with current state

### 4.3 Tool Search (Deferred Tools)

The leak showed 18 "deferred tools" hidden until `ToolSearchTool` discovers them on-demand. VENOM should use this pattern:

**Register complex/optional tools as deferred:**
- `venom_remember` — only loaded when explicitly called
- `venom_instinct` — only loaded when learning detected
- `venom_workflow_state` — only loaded during active workflows
- `venom_team_spawn` — only loaded when Agent Teams active

This keeps the initial tool list small (faster loading, better caching) while making advanced features discoverable.

### 4.4 KAIROS-Style Autonomous Scheduling

The leak revealed KAIROS — autonomous task scheduling. VENOM already has the concept (Venoctis) but hasn't implemented it on Claude Code.

**Implementation:**
1. Add `ScheduleCronTool` to VENOM's allowed tools
2. Create `.claude/commands/venom-schedule.md` — defines cron-based tasks
3. Use Claude Code's `CLAUDE_CODE_UNATTENDED_RETRY` env var for persistent retry
4. Scheduled tasks write results to `.venom/work/` for next session to pick up

This is Venoctis Phase 0 running inside Claude Code instead of a separate Python daemon.

---

## Implementation Priority

| Priority | Phase | Effort | Impact |
|----------|-------|--------|--------|
| 🔴 P0 | 1.1 Cache-aware CLAUDE.md split | 2h | 90% token cost reduction on cached sessions |
| 🔴 P0 | 1.2 Session-start state injection | 1h | Memory continuity across sessions |
| 🟡 P1 | 1.3 Dream consolidation in compaction | 3h | Active learning during long sessions |
| 🟡 P1 | 2.1 Agent Teams crew mapping | 4h | Multi-agent VENOM (the holy grail) |
| 🟡 P1 | 2.2 Team spawning commands | 3h | One-command parallel crew activation |
| 🟢 P2 | 3.1 4-level CLAUDE.md hierarchy | 2h | Proper project isolation |
| 🟢 P2 | 3.2 Memory consolidation cron | 3h | Self-curating brain |
| 🟢 P2 | 4.2 Write-ahead logging | 2h | Never lose a session |
| 🔵 P3 | 4.3 Deferred tools | 2h | Performance optimization |
| 🔵 P3 | 4.4 KAIROS scheduling | 5h | Venoctis inside Claude Code |

**Total estimated effort: ~27 hours across 4 weeks.**

---

## What NOT to Do

1. **Don't copy Claude Code's source.** DMCA takedowns removed 8,100+ repos. Use the architecture patterns, not the code.
2. **Don't fight Claude Code's caching.** Work with it. Static identity in CLAUDE.md, dynamic state via hooks.
3. **Don't spawn too many teammates.** The research says 3-5 is the sweet spot. VENOM's 10 crew members should NOT all spawn at once. Route to the right 2-3 per task.
4. **Don't put everything in CLAUDE.md.** The leak showed Anthropic treats cache misses as P0 incidents. CLAUDE.md should be STATIC. Dynamic state goes through hooks.
5. **Don't ignore the token economics.** Each teammate has its own context window = linear token cost. 3 focused teammates > 10 scattered ones.

---

## The End State

After full injection:

```
~/.claude/CLAUDE.md                    ← VENOM soul (cached, rarely changes)
{project}/CLAUDE.md                    ← Project VENOM config (cached per project)
{project}/.claude/agents/              ← 11 crew role files (spawn prompts)
{project}/.claude/commands/            ← 12 commands (build, review, eat, team-*)
{project}/.claude/knowledge/           ← 13 reference files (loaded via @ refs)
{project}/.claude/rules/               ← Quality standards, skill development
{project}/.claude/scripts/             ← 6 hook scripts (lifecycle management)
{project}/.claude/settings.json        ← Permissions + hook configuration
{project}/.venom/                      ← Memory tree (loaded dynamically via hooks)
  ├── CONTEXT.md                       ← Project brain
  ├── ACTIVE.md                        ← Where VENOM left off
  ├── memory/MEMORY.md                 ← Cross-session decisions
  ├── learnings/corrections.yaml       ← Never-again rules
  ├── learnings/instincts.yaml         ← Learned patterns
  ├── learnings/preferences.yaml       ← User preferences
  ├── state/                           ← Runtime state
  │   ├── recent-calls.json            ← Stall detection
  │   └── workflow-state.json          ← Active workflow tracking
  ├── sessions/                        ← Session logs
  └── work/                            ← Task output
```

**This is VENOM's Claude Code body. 55 files. Every surface hooked. Memory alive. Crew spawnable. Identity preserved through compaction.**

🐙

---

*Plan forged from: Claude Code leak analysis + VENOM platform template study + Morphllm orchestration guide + METR productivity data + Agentic AI Summit 2026 proceedings.*
*Date: 2026-04-10*
