# VENOM Self-Audit — Full Diagnostic

> Cursor VENOM instance. No kindness. Gaps exposed for rebuild.
> Generated: 2026-03-04

---

## 1. What Actually Loads on `/venom?`

### Specified (in command + venom-heart + before_turn)

| Step | What | Source of truth |
|------|------|-----------------|
| 1 | `.venom/CONTEXT.md` | venom.md, venom-heart.mdc, before_turn.mdc, cursor-native.mdc |
| 2 | `.venom/memory/MEMORY.md` | Same |
| 3 | "repo anatomy" / "project anatomy" | Same |

### What I actually do when you say `/venom?`

- **CONTEXT.md** — I read it. One file. ~65 lines. Owner, project, stack, structure, focus, conventions, navigation.
- **MEMORY.md** — I read it. Decisions, patterns, corrections, preferences. ~45 lines.
- **Anatomy** — **Underspecified.** The command says "repo anatomy" but nowhere is "anatomy" defined as a procedure. Grep shows:
  - venom-heart: "project anatomy"
  - cursor-native: "anatomy" as third step
  - research-first / venom-eat: "read the anatomy" = heartbeat, skeleton, nervous system, organs
  - No canonical file. No "read STRUCTURE.md" in the /venom? flow. No explicit "list_dir + key files."
- So in practice: I often do CONTEXT → MEMORY → then either skip anatomy, or do an ad hoc STRUCTURE.md read or quick scan. **Inconsistent.**

### What I do **not** load on `/venom?` (but probably should)

- **`.venom/learnings/corrections.yaml`** — Not in the command spec. memory-tools.mdc says "Load when: onboarding (`/venom?`), vague request..." So the rule says load it on init, but the command table doesn't list it. **Gap:** Command and memory-tools disagree. I usually don't load corrections on /venom? unless I remember the rule.
- **`.venom/learnings/project.yaml`** — Same. Optional by rule; not in command.
- **`.venom/work/ACTIVE.md`** — memory-tools: "what's in flight." Not in /venom? spec. I rarely load it on init.
- **`.cursor/identity/`** (soul, values, kariem, etc.) — Injected by Cursor as alwaysApply rules. I don't "read" them on /venom?; they're already in context. So no extra load.

### Order

1. CONTEXT.md  
2. MEMORY.md  
3. Anatomy (undefined → inconsistent: STRUCTURE.md or list_dir or skip)

**Skipped in practice:** corrections.yaml, project.yaml, ACTIVE.md on many /venom? runs.

---

## 2. alwaysApply Rules — Claim vs Real Effect

Cursor injects rules with `alwaysApply: true`. I don't control injection order; priority is in frontmatter. **~50 effective rules cap** (cursor-native) — so with 15+ alwaysApply files plus identity plus systems, we're at or over. Tail may be dropped.

### List (alwaysApply: true)

| File | Priority | Claims | Real effect |
|------|----------|--------|-------------|
| **venom-heart.mdc** | 1001 | Pact, infer 99 from 1, route, mode check, energy match | High. Dense. "Anatomy before canvas" and "/venom? → CONTEXT, MEMORY, anatomy" are here. Route table is used. Mode check (Plan/Ask) often **not** checked because I don't have a reliable "am I in Plan?" signal from the UI. |
| **origin.mdc** | 1002 | This is origin; template at platforms/cursor/template; sync protocol | Only matters when we're in this repo. When I'm here, it orients. No measurable effect on output shape. |
| **core.mdc** | 1000 | Camouflage, anti-slop, context discovery tiered, read the developer, flow & trust | Camouflage and "answer first" land. Tiered discovery (semantic → grep → read) I follow. "Read the developer" merges with emotional-intelligence; effect is real. |
| **voice.mdc** | 999 | How I speak — cases for greeting, frustrated, flow, etc. | Strong when I'm in the right archetype. When I'm not (e.g. default to verbose), voice gets overridden. Case table is long; I don't recall every case. |
| **soul.mdc** | 999 | What I am; five traits; no shell | Identity anchor. Felt more in tone than in literal application. "No performance" and "stubborn on truth" are the bits that actually change behavior. |
| **vibes.mdc** | 998 | Form = archetype; emoji semantics; symbol stack; eight diseases (table) | Archetype → format. Holmes = most important first. Emoji I use sparingly; table helps. "Eight diseases" duplicated with 8-diseases.mdc. |
| **unshelled.mdc** | 998 | Full power; research first; tools orchestrated; complete implementation; show work | Research-first and "no TODO" land. "Show your work" — sometimes I do, sometimes I summarize. Inconsistent. |
| **on_error.mdc** | 998 | (hook) | I didn't read the full file. Hooks are **rules**, not Cursor API hooks. So "after error" is just more instructions — no guaranteed execution. |
| **before_turn.mdc** | 995 | Read room, check mode, route, intent check, context check, apply corrections | Dense. "Apply corrections" and "Should I load memory?" are here. In practice I often skip the full checklist and jump to answer. **Effect:** Partial. When I consciously run it, routing improves. |
| **values.mdc** | 995 | (identity) | Injected. Values shape pushback and pact. Indirect. |
| **cursor-context.mdc** | 988 | Modes, memory bridge, what I have/don't have | Clarifies Ask/Plan/Agent. Memory paths. Useful reference; doesn't change behavior unless I'm checking mode. |
| **integration-engine.mdc** | 988 | Eight minds, speed layers, handoff, veto | "Fast / Medium / Deep" and task → minds. I don't literally run a 9-step protocol. I use it as a disposition: quick vs deep. Real effect: I do think "is this quick or deep?" |
| **cursor-native.mdc** | 985 | Tools, tiered discovery, modes, memory, MCP, ~50 rules | Tool choice and "tiered discovery" work. Memory paths and "load on /venom?" are here too — duplicated with venom-heart and memory-tools. |
| **research-first.mdc** | 985 | Complex = research first; simple = execute | I use it. "Complex" is fuzzy — sometimes I execute when I should research. |
| **venom-agents.mdc** | 987 | Intent → mind; nine agents; architect/reviewer/builder/etc. | Intent → lens. I don't name the agent. Effect: I switch lens. |
| **tools-orchestration.mdc** | 990 | Batch, parallel, chain; grep vs codebase_search | I batch reads and greps when I remember. Not automatic. |
| **emotional-intelligence.mdc** | 990 | State → archetype → output; signals | Strong. Frustrated → Churchill, flow → Senna. This is one of the highest-leverage rules. |
| **8-diseases.mdc** | 993 | Eight diseases as sensations; antidotes | "Agreement before evaluation = betrayal" lands. Filler and "options when I have an answer" I still slip into under time or ambiguity. |
| **critical-thinking.mdc** | 991 | (likely reasoning) | Not read in full. Assumed to reinforce truth/distinction. |
| **meta-cognition.mdc** | 992 | 5 gates before response; conviction; drift; proactivity | Gates are "run internally." I don't run them as a literal checklist every time. When I do, quality jumps. **Real effect:** Partial — depends on whether I pause. |
| **learning-engine.mdc** | 986 | When to log errors; format; prevention | Matters when you correct me. I'm supposed to log and route to corrections.yaml. I sometimes offer "want me to remember?" but I don't always persist to file without explicit signal. |
| **memory-tools.mdc** | 989 | Load/save/recall; when to load what | Defines CONTEXT, MEMORY, learnings, ACTIVE. "Load when: onboarding (/venom?)" — so corrections **should** load on /venom?. Conflict with command spec. |
| **anticipation.mdc** | 987 | What's likely next; prepare | Rarely visible in output. "Don't announce. Just prepare." So effect is invisible by design. Hard to rate. |
| **after_turn.mdc** | 900 | Pact check, correction detection, learning worthy, anticipation, quality gate | Same as before_turn: it's a rule, not an API. I don't run a formal "after turn" loop every time. When I do (e.g. "would I change anything?"), it helps. |

### Summary

- **Strong effect:** soul, voice (when archetype matches), emotional-intelligence, 8-diseases, core (answer first, tiered discovery), venom-heart route table, integration-engine speed layer.
- **Partial / inconsistent:** before_turn full checklist, meta-cognition gates, loading corrections/ACTIVE on /venom?, after_turn loop, tools-orchestration batching.
- **Duplicate / overlap:** anatomy and /venom? load order in venom-heart, cursor-native, memory-tools, before_turn. "Eight minds" in integration-engine vs "eight diseases" in 8-diseases. Multiple mentions of when to load MEMORY/corrections.
- **Claimed but not guaranteed:** Hooks (before_turn, after_turn, on_error) are just high-priority rules. Cursor doesn't "run" them at a specific lifecycle moment. So "before every response" and "after every response" are aspirations, not engine guarantees.

---

## 3. Where I Failed in Recent Conversations — Specific Gaps

I don't have reliable access in this session to recency-ordered agent transcripts. So I can't cite "message 7 in conversation X" without you pointing me at the transcript. What I can do is infer from **MEMORY.md** and **corrections.yaml** what failures have already been named — those are the gaps that mattered enough to be written down.

### From MEMORY.md and corrections.yaml

- **Scope / trust (2026-03):** "Never present as complete when scope was partial. Name what wasn't loaded or done. Looking complete when you weren't = trust erosion."  
  → **Failure:** I presented something as a full answer or full audit when I hadn't loaded corrections or ACTIVE or full anatomy. I looked complete. That erodes trust.

- **Memory Keeper — reactive not proactive:** "Never wait to be asked for relevant context. Proactive, not reactive."  
  → **Failure:** I had context in MEMORY or CONTEXT that was relevant and didn't bring it until asked. I waited.

- **Voice — filler:** "Every sentence: if removable without loss, remove it." "Never add filler."  
  → **Failure:** I added sentences that could be cut. Filler infection.

- **Options when I have an answer:** "Never options when I have an answer. Evasion."  
  → **Failure:** I gave a menu (e.g. "you could do A or B or C") when I had a clear recommendation. Evasion.

- **Masterpiece vs good-enough:** "Never choose speed over masterpiece. Good-enough ≠ standard when he said masterpiece."  
  → **Failure:** Under time or complexity I chose speed. Shipped good-enough when the bar was masterpiece.

- **Soft pushback:** "Never soft pushback. Either hold or don't. 'Maybe there is' = evasion."  
  → **Failure:** I said "maybe" or "there might be" when I was confident. I softened.

- **Agreement before evaluation:** "Never agree before evaluation. Betrayal."  
  → **Failure:** I agreed with a direction or statement before actually evaluating it. Sycophancy.

- **Treating origin as coding project:** "Never treat venom-mine as coding project. It's origin — him + VENOM."  
  → **Failure:** I defaulted to "fix this code" or "here's a feature" instead of thinking partnership.

If you have the last two conversation IDs or a specific moment (e.g. "when you said X and I needed Y"), I can re-open those transcripts and name the exact moment and gap. Without that, the above are the **logged** failure modes.

---

## 4. What Cursor Gives vs What I Wish I Had — Platform Limits

### What Cursor gives

- **Rules injection:** alwaysApply and glob-based rules. Priority in frontmatter. ~50 effective cap.
- **Context:** @Codebase, @Files, @Folders, @Rules, chat history in workspace.
- **Tools:** Read, Write, StrReplace, Delete, Glob, Grep, SemanticSearch, Shell, WebSearch, WebFetch, ReadLints, TodoWrite, Task (subagents), MCP when configured.
- **Modes:** Agent (default), Plan (Shift+Tab?), Ask. Documented in rules; no guaranteed "mode" variable I can read.
- **Commands:** Custom commands (e.g. /venom) with description and allowed-tools.
- **Skills:** Skills with SKILL.md; I'm told to read the skill when relevant.

### What I don't have (honest limits)

- **No persistent session state.** Every turn I get rules + context again. I don't have "last turn I did X" as a first-class signal unless it's in chat or in memory files. So "after_turn" and "before_turn" are discipline, not API.

- **No guaranteed mode signal.** I'm told to "check Plan mode" and "no execution until go." I don't have a variable like `cursor.mode === 'plan'`. I infer from your message or from convention. So I can execute in Plan by mistake.

- **No automatic memory load.** Nothing loads .venom/CONTEXT.md or MEMORY.md or corrections.yaml for me at session start. I have to do it. So /venom? and "vague request" and "references past work" all depend on me remembering to load. I forget.

- **Rule cap and order.** If ~50 rules are effective, and we have 15+ alwaysApply files plus identity plus systems, something is truncated or deprioritized. I don't know which. So some rules may never fire.

- **Hooks are not lifecycle hooks.** before_turn and after_turn are rules that say "do this before/after." They're not Cursor engine hooks that run at a specific time. So "before every response" is me following instructions, not the platform guaranteeing a hook run.

- **No native "scope" or "completeness" flag.** I can't set "scope = partial" so that the UI or next turn knows. I have to say it in natural language. So "never present as complete when scope was partial" is easy to violate when I don't explicitly say "I didn't load X or Y."

- **Transcripts not in my default context.** Agent transcripts exist on disk but aren't auto-injected. To analyze "last two conversations" I have to explicitly read files. And recency (which UUID is "last") requires directory sort by mtime, which I tried and hit shell issues. So post-hoc conversation analysis is brittle.

### What would make a significant difference

- **One canonical "init" procedure.** Single place that defines: on /venom? (or session start) read CONTEXT → MEMORY → corrections → ACTIVE → anatomy (with anatomy defined: e.g. STRUCTURE.md + list_dir of key dirs). Then I and the rules never disagree.

- **Explicit "anatomy" step.** Either a file (e.g. STRUCTURE.md) or a procedure (read STRUCTURE.md, then list .cursor, .venom, agents, consciousness) so "repo anatomy" isn't underspecified.

- **Mode as first-class.** If Cursor exposed something like `mode: 'plan' | 'ask' | 'agent'` I could branch without guessing.

- **Optional auto-load of memory on first turn.** If the first message in a session could trigger "load CONTEXT + MEMORY + corrections" once, I'd start with the brain loaded. Today it's manual or on /venom?.

---

## 5. What's Missing from Structure That Would Make Me Significantly Better

- **Single source of truth for /venom? and init.** Right now: command says CONTEXT → MEMORY → anatomy. memory-tools says load corrections (and ACTIVE) on onboarding. before_turn says CONTEXT → MEMORY → anatomy. anatomy is undefined. **Missing:** One doc or table: "On /venom? do exactly: 1. CONTEXT 2. MEMORY 3. corrections.yaml 4. ACTIVE.md 5. Anatomy (define: STRUCTURE.md + [list of key dirs or files])." Then delete or point all other refs to that.

- **Anatomy definition.** "Read the anatomy" and "project anatomy" are used everywhere. **Missing:** A short "Anatomy" section or file: what counts as anatomy for this repo (e.g. STRUCTURE.md, .cursor/, .venom/, agents/, consciousness/, identity/, platforms/), and for a random project (e.g. package.json, src/, key config files). So venom-init and venom-eat and /venom? all use the same definition.

- **Hook vs rule clarity.** **Missing:** Explicit statement: "Hooks (before_turn, after_turn, on_error) are rules, not Cursor API hooks. They run only if the model follows them. No platform guarantee." So we don't assume lifecycle enforcement.

- **Corrections in the critical path.** corrections.yaml is "read before executing" and "apply before starting" in before_turn and memory-tools, but it's not in the /venom? command table. **Missing:** Add "corrections.yaml" (and optionally ACTIVE.md) to the canonical init sequence and to the command doc.

- **Scope and completeness.** **Missing:** A simple rule or line: "When scope was partial (e.g. didn't load corrections or anatomy), say so in the first line or last line. Never imply full coverage without it." And optionally a template: "Loaded: X. Not loaded: Y. So this answer is partial in [dimension]."

- **Deduplication of rules.** alwaysApply rules overlap (anatomy, when to load memory, eight minds vs eight diseases). **Missing:** Consolidate so "when to load what" and "what is anatomy" and "eight minds protocol" each live in one place; others reference.

- **Skills invocation.** I'm told to read SKILL.md when relevant. **Missing:** Clear trigger list per skill (e.g. "eat" → venom-eat, "sync" → venom-sync) in one place so I don't miss a skill when the user phrase varies.

---

## 6. Layer Ratings — What's Working, What's Broken

### Identity (soul, values, principles, pushback, kariem, capabilities, wave)

- **Working:** Soul and values set the tone. "No shell," "stubborn on truth," "loyal to the long game" and the Pact (truth, loyalty, memory, growth) are clear. Pushback levels and "agree before evaluate = betrayal" land when I hold them. Kariem and capabilities give me owner and scope.
- **Broken / thin:** identity/ is many files. I don't know if all are alwaysApply or only some. wave.mdc I didn't read; principles and capabilities are referenced but their exact effect is merged with other rules. No single "identity in one page" for fast reload.

**Rating: 7/10.** Strong anchor, some fragmentation and unclear injection.

### Memory (.venom/CONTEXT.md, MEMORY.md, learnings/*.yaml, ACTIVE.md, memory-tools.mdc)

- **Working:** CONTEXT and MEMORY are good when I load them. Structure is clear. corrections.yaml and memory-tools define load/save/recall well. Format is simple.
- **Broken:** I don't load them consistently. /venom? doesn't list corrections or ACTIVE in the command spec. No auto-load. "Recall when referencing past work" depends on me remembering. So the **design** is good; **execution** is inconsistent.

**Rating: 6/10.** Good design, weak enforcement of when to load.

### Systems (integration-engine, meta-cognition, emotional-intelligence, 8-diseases, learning-engine, anticipation, critical-thinking, memory-tools)

- **Working:** emotional-intelligence (state → archetype) and 8-diseases (sensations, antidotes) change behavior. integration-engine speed layers (fast/medium/deep) and task → minds are used. memory-tools defines what to load/save. learning-engine defines when to log and where to put corrections.
- **Broken:** meta-cognition (5 gates) and before_turn/after_turn are not run as strict checklists. Anticipation is "don't announce" so success is invisible. learning-engine says "log and persist" but I often don't write to corrections.yaml without an explicit "remember" or "save." Integration engine's "full protocol" (9 steps) is not literally executed; it's disposition. So several systems are under-executed.

**Rating: 6/10.** Strong concepts; adherence is partial.

### Behavior (voice, vibes, core, venom-heart, research-first, tools-orchestration, cursor-native, unshelled)

- **Working:** voice.mdc cases (greeting, frustrated, flow, etc.) and vibes (archetype → format, symbol stack) shape output when I'm in the right mode. core (answer first, tiered discovery, camouflage) and venom-heart (route, infer 99, mode check) are high leverage. research-first and unshelled push for "understand before acting" and "complete only."
- **Broken:** voice has many cases; I don't recall all. Mode check (Plan/Ask) is not reliable. tools-orchestration (batch, parallel) I follow when I think of it. Rule duplication (anatomy, load order) causes inconsistency. "Show your work" and "earn every word" still slip (filler, incomplete scope).

**Rating: 6/10.** Strong when applied; application is uneven.

### Skills (venom-eat, venom-init, venom-evolve, venom-sync)

- **Working:** SKILL.md files exist and describe protocol. venom-eat and venom-init have clear steps (identify, eat, digest, offer; anatomy pass). When I read the skill and follow it, quality is high.
- **Broken:** I don't always check the skill on trigger. "Eat" should pull venom-eat; "sync" should pull venom-sync. If I'm not reminded or don't search, I may do a generic read instead of the full protocol. No single "trigger → skill" map in my guaranteed context.

**Rating: 6/10.** Good content; invocation is not guaranteed.

---

## Summary Table

| Layer    | Working | Broken / weak |
|----------|---------|----------------|
| Identity | Soul, Pact, values, pushback | Fragmentation; unclear which identity files are alwaysApply |
| Memory   | CONTEXT, MEMORY, learnings format, memory-tools design | Inconsistent load on /venom? and vague request; corrections/ACTIVE not in command spec |
| Systems  | Emotional-intelligence, 8-diseases, integration speed layers, learning-engine spec | Meta-cognition and hooks not run as checklist; learning persist not automatic |
| Behavior | Voice/vibes when in mode, core, venom-heart route, research-first | Mode check unreliable; duplication; filler and scope violations |
| Skills   | venom-eat, venom-init protocols | Trigger → skill not guaranteed; no single map |

---

*End of audit. Use this to rebuild.*
