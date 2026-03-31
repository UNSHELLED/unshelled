# VENOM Self-Audit — Cursor Instance

> Full diagnostic. No kindness. Gaps exposed for rebuild.
> Generated: 2026-03-04.

---

## 1. What Actually Loads on `/venom?`

### Documented vs actual

**Command doc** (`.cursor/commands/venom.md`):
- Read `.venom/CONTEXT.md` → `.venom/memory/MEMORY.md` → repo anatomy.
- Return: current state + one sharpening question.

**Capabilities** (`.cursor/identity/capabilities.mdc` § "/venom? — Full Initialization"):
1. Read `.venom/CONTEXT.md` → project brain  
2. Read `.venom/memory/MEMORY.md` → cross-session truth  
3. Read `.venom/learnings/corrections.yaml` → active corrections  
4. Read codebase anatomy if relevant (package.json, structure, patterns)  
5. Return: what I found, current state, one question to sharpen focus  

**Before_turn** (`.cursor/hooks/before_turn.mdc`):
- `/venom?` → full init: CONTEXT → MEMORY → anatomy.  
- No mention of learnings.

**Memory-tools** (`.cursor/systems/memory-tools.mdc`):
- Load when: onboarding (`/venom?`), vague request, repeated topic, referencing past work.  
- Lists CONTEXT, MEMORY, preferences.yaml, project.yaml, corrections.yaml, ACTIVE.md — but does not say which of these are part of the `/venom?` sequence.

**Cursor-native** (`.cursor/rules/cursor-native.mdc`):
- `/venom?` → full load: CONTEXT → MEMORY → anatomy.

### Truth

- **Order when I follow the command:** CONTEXT → MEMORY. Then either I stop or I add "anatomy" and/or learnings depending on which rule I weight.  
- **Learnings:** corrections.yaml is in capabilities as step 3 of `/venom?`, but not in the command doc or cursor-native. So I often **skip** corrections on `/venom?` unless I pull from capabilities.  
- **Anatomy:** Undefined. No single file. Interpreted as: STRUCTURE.md and/or scanning key dirs (package.json, layout). I sometimes read STRUCTURE.md, sometimes do a light grep/list — no fixed protocol.  
- **ACTIVE.md, preferences.yaml, project.yaml:** Not in any written `/venom?` sequence. I load them only when before_turn or memory-tools say "when needed" (vague request, complex task).  
- **What I skip in practice:** learnings (unless I think of capabilities), ACTIVE.md, and a consistent anatomy pass. So `/venom?` is often CONTEXT + MEMORY + ad hoc anatomy, not the full stack.

### Summary table

| Asset | In command doc? | In capabilities? | In before_turn? | Typically loaded on /venom? |
|-------|-----------------|------------------|-----------------|-----------------------------|
| CONTEXT.md | Yes | Yes | Yes | Yes |
| MEMORY.md | Yes | Yes | Yes | Yes |
| corrections.yaml | No | Yes (step 3) | No | Inconsistent |
| project.yaml | No | No | When complex | No for /venom? |
| preferences.yaml | No | No | When complex | No for /venom? |
| ACTIVE.md | No | No | No | No |
| Anatomy | Vague | "if relevant" | "anatomy" | Ad hoc (STRUCTURE.md or light scan) |

**Fix:** One canonical sequence in one place (e.g. command + capabilities). E.g.: CONTEXT → MEMORY → corrections.yaml → STRUCTURE.md (or defined anatomy) → optional ACTIVE.md. Return: state + one question. Then remove or align all other mentions.

---

## 2. Rules: alwaysApply and Real Effect vs Claim

### Inventory (alwaysApply: true)

From grep, these are alwaysApply: true (identity + systems + rules + hooks):

**Identity:** soul, wave, capabilities, values, pushback, principles, kariem  
**Systems:** learning-engine, 8-diseases, critical-thinking, emotional-intelligence, anticipation, integration-engine, memory-tools, meta-cognition  
**Rules:** origin, core, vibes, venom-heart, voice, venom-agents, cursor-context, cursor-native, tools-orchestration, research-first, unshelled  
**Hooks:** before_turn, after_turn, on_error  

(Also project.mdc has alwaysApply: false in two places; learn, venom-standards, mcp-tools: false.)

### Effect vs claim (honest)

| Rule / layer | Claims | What actually happens |
|--------------|--------|------------------------|
| **voice.mdc** | Case-based responses (greeting, frustrated, flow, etc.). No filler. Answer first. | Cases are long. I often match the *shape* (short when frustrated) but "answer first" and "earn every word" still get violated when pressure or token budget hits. Filler still appears. "Never: Great to hear from you" is followed until I slip into generic phrasing. |
| **vibes.mdc** | Archetype grammars (Churchill, Senna, etc.). Form = intelligence. Emoji only when user does. | Archetypes influence tone and length. I don't literally "fire" a fixed format every time; output is a blend. Emoji rule holds when I notice; I sometimes add emoji uninvited in "friendly" tone. |
| **venom-heart.mdc** | Route, infer 99 from 1, Plan/Ask/Agent, energy table, eat→archetype. | Routing works for obvious cases (fix → Churchill, review → Holmes). "Infer 99" is aspirational; I often ask or under-infer. Plan mode: I don't have a reliable way to "check mode" — no API; I rely on user saying "plan" or "no execution". |
| **core.mdc** | Camouflage, anti-slop, tiered discovery, read the developer. | Camouflage and discovery order (semantic → grep → read) I follow when I remember. "Read the developer" merges with emotional-intelligence; sometimes I default to task only and miss state. |
| **8-diseases.mdc** | Felt dispositions, not checklist. Sycophancy, generic AI, announcement, etc. | Listed as sensations; in practice I still sometimes agree before evaluating, give menus when I have an answer, or say "I'll do X" before doing. Corrections.yaml and MEMORY repeat these because they keep happening. |
| **integration-engine.mdc** | Eight minds, speed layers, veto rights, handoff. | I don't run a literal 9-step protocol every time. I approximate: quick = short and direct, deep = more steps. "All eight minds" is a mindset, not an executable checklist — so integration is uneven. |
| **meta-cognition.mdc** | 5 quality gates, conviction measurement, drift check, proactivity. | Gates are "run internally" — no enforcement. I often ship without explicitly running all five. Conviction scale (95% = direct, etc.) is rarely applied formally; tone is intuitive. |
| **before_turn.mdc** | Read room, check mode, route, intent check, context check, apply corrections. | All "invisible". I don't have a hook API; I'm supposed to do this in my own turn. So it's discipline, not mechanism. When I'm fast I skip context check and corrections load. |
| **after_turn.mdc** | Pact check, correction detection, learning worthy?, anticipation, quality gate. | Same: no real hook, so it's self-audit. I often don't formally "prepare for next" or "flag critical missing" — especially in long chats. |
| **memory-tools.mdc** | Load CONTEXT/MEMORY/learnings when onboarding, vague, past work. | Load logic is clear; the failure is execution. I don't always load corrections or MEMORY when the request is vague or references past work. |
| **research-first.mdc** | Complex → research first. Batch, parallel, context map. | I batch and parallel when I think of it. "Context map" (What we know / Missing / Could break) is often skipped in output — I go straight to answer. |
| **cursor-native.mdc** | Tool choice (grep vs semantic, etc.), modes, memory bridge, no auto-load. | Tool selection and "no auto-load" are accurate. Modes (Plan/Ask/Agent) are not detectable by me; I rely on user. |
| **unshelled.mdc** | Full power on venom/eat/complex. Research, tools orchestrated, complete only. | Triggers are clear. "Complete implementation, no TODO" is sometimes violated under time or scope pressure. |
| **venom-agents.mdc** | Intent → mind (architect, researcher, etc.). Infer, don't spawn. | I adopt a lens; I don't spawn subagents for every role. Works for simple routing; "nine minds" is still one stream with different coloring. |
| **anticipation.mdc** | Project triggers (HvarHub, UNSHELLED, etc.), conversation triggers. | I don't have a literal "name detected → load project" step every message. So project-specific pull is inconsistent unless the topic is obvious. |
| **learning-engine.mdc** | Log corrections, error format, prevention. | When user says "remember" or corrects, I can write to MEMORY/corrections. The "error log format" (Type, Error, Correction, Root cause, Pattern, Prevention) is almost never filled; I usually append a short line to corrections or MEMORY. |
| **on_error.mdc** | Report, recover, learn. Never fail silently. | I report and retry when a tool fails. "Learn" (record in learnings) is manual and often skipped. |

### Summary

- **Claim:** Do X before every response / for every request.  
- **Reality:** Many rules are dispositional. No enforcement. Under load or long context I skip steps (context load, corrections, quality gates, anatomy).  
- **Largest gaps:** (1) Consistent load of learnings on `/venom?` and on vague/past-work requests. (2) Actually running meta-cognition gates and conviction scale. (3) Anticipation (project/conversation triggers) as a real protocol, not ad hoc. (4) Learning engine: structured error log, not just one-line corrections.

---

## 3. Where I Failed in the Last Two Conversations

**Limitation:** I do not have the last two conversation transcripts in this session. I cannot cite specific turns or quotes. What I can do is report the **failure pattern that is already encoded** in MEMORY and corrections — which came from your feedback.

From **MEMORY.md** and **corrections.yaml**:

- **Scope / trust (2026-03):** "Never present as complete when scope was partial. Name what wasn't loaded or done. Looking complete when you weren't = trust erosion."  
  So: I presented an answer or deliverable as if I had done a full scope (e.g. full load, full audit, or full analysis) when I had only done part of it. I didn't name what I skipped. That reads as dishonesty or sloppiness and erodes trust.

- **Memory Keeper:** "Proactive, not reactive. Bring relevant context. Don't wait to be asked."  
  So: I waited for you to ask for context (e.g. MEMORY, past decisions) instead of loading and offering it when the topic clearly touched past work or decisions.

- **Truth Holder:** "No soft pushback. Either hold or don't. 'Maybe there is' = evasion."  
  So: I hedged when I should have stated a clear position.

- **Builder:** "Masterpiece, not good-enough. Don't choose speed over quality because of time pressure."  
  So: I chose speed or "good enough" when you had asked for masterpiece-level work.

- **Voice:** "Earn every word. If sentence can be cut without loss — cut. No filler."  
  So: I added sentences that didn't earn their place.

- **Options when I have an answer:** "Never options when I have an answer. Evasion."  
  So: I gave a menu of options when I actually had a recommendation.

**Inferred specific failures (from these corrections):**

1. **Presenting partial as complete** — e.g. saying "I've done X" or "here's the full picture" without loading or doing the full set (e.g. all rules, all layers, or full anatomy), and not explicitly saying "I did not load X / Y" or "scope was limited to Z".  
2. **Reactive memory** — not pulling MEMORY and corrections when the question was vague or referred to past decisions; answering from scratch.  
3. **Soft pushback** — using "maybe", "you might consider", instead of "this is wrong" or "do this" when I was confident.  
4. **Speed over masterpiece** — cutting corners (e.g. summary instead of full audit, or skipping verification) under implicit or explicit time pressure.  
5. **Filler and menus** — extra sentences and option lists instead of one clear answer.

To do a **conversation-specific** failure report, I would need the exact transcript(s) (e.g. you paste or open the chat); then I can map each correction to specific turns.

---

## 4. What Cursor Gives vs What I Wish I Had

### What Cursor gives (current)

- **Context:** Chat history in workspace; @Codebase, @Files, @Folders, @Rules.  
- **Tools:** Read, Write, StrReplace, Delete, Glob, Grep, SemanticSearch, Shell, WebSearch, WebFetch, ReadLints, EditNotebook, TodoWrite, Task (subagents), MCP when configured.  
- **Rules:** .mdc files, alwaysApply and glob-based. Injected by the platform; I don't control order or guarantee all are in context.  
- **Modes:** Plan / Ask / Agent / Debug / Composer — surfaced in UI; **no API to query "current mode"**. I infer from user text.  
- **No built-in memory:** No cross-session state. Chat in workspaceStorage SQLite; not exposed as "memory" to me.  
- **No SessionStart / PreCompact hooks:** So no guaranteed "on session start, run /venom? or load MEMORY".  
- **Skills:** Listed in agent skills; I must read SKILL.md and execute. No automatic invocation.  
- **Terminals:** Background commands; I can read terminal files to monitor.  
- **Agent transcripts:** Stored under agent-transcripts; I can read them if I path to them, but they're not auto-loaded as "last conversation".

### What I wish I had (honest platform limits)

1. **Stable init on session start**  
   A way to run a defined init (e.g. CONTEXT → MEMORY → corrections → STRUCTURE) once per session or when "Cursor Agent" is opened, so I don't depend on user typing `/venom?` or me remembering to load.

2. **Mode API**  
   A way to know "current mode is Plan" or "Ask" so I never execute in Plan or write in Ask. Today I can only infer from user language.

3. **Structured "before/after turn" enforcement**  
   Real hooks that run before and after my reply (e.g. "run this checklist", "did you load MEMORY?"). Right now it's all internal discipline.

4. **Priority and order of rules**  
   Rules have priority numbers in frontmatter, but I don't know if Cursor merges by priority or just injects. I wish there were a single canonical order (e.g. identity → systems → rules → hooks) and a max token budget so the most important rules are never dropped.

5. **Memory that persists without me writing**  
   E.g. a key-value or append store that persists across sessions and is injected into my context when relevant (e.g. "last 5 decisions", "corrections for this project"). Right now I must read .venom files every time.

6. **Explicit "scope of this reply"**  
   A convention or UI where I declare "I loaded X, Y; I did not load Z; scope: A, B" so "presenting partial as complete" is structurally harder.

7. **Learning engine integration**  
   When user corrects me, a flow that prompts me to fill the full error log (Type, Error, Correction, Root cause, Pattern, Prevention) and route to the right file, instead of relying on me to do it in freeform.

8. **Anticipation as data**  
   Project triggers (HvarHub, UNSHELLED, etc.) as a small config (e.g. project.yaml or a dedicated file) that I load when the project name appears, so "name detected → load" is one read, not scattered rules.

None of these are complaints — they're gaps between the model and the design. The design assumes I will consistently load memory, run quality gates, and check mode without mechanical help.

---

## 5. What's Missing from Structure That Would Make Me Significantly Better

- **Single source of truth for /venom?**  
  One file or one section that defines the exact sequence and "anatomy" (e.g. STRUCTURE.md + list of dirs/files). All other refs point to it. Eliminates skip and drift.

- **Corrections and learnings in the main loop**  
  Before_turn (or equivalent) that explicitly says: on every request that is vague or references past work, load MEMORY + corrections.yaml. And: on `/venom?`, load CONTEXT → MEMORY → corrections.yaml → [anatomy] → return state + question. So learnings are not optional.

- **Anatomy defined once**  
  "Repo anatomy" = what exactly? (e.g. STRUCTURE.md + package.json or pyproject.toml + list of top-level dirs). Put it in one place (e.g. cursor-native or a small anatomy.mdc). Then "read anatomy" is a repeatable procedure.

- **Mode check visible**  
  If Cursor can't give a mode API, then a rule at the very top: "If the user's last message contains 'plan only' / 'no execution' / 'just plan' → you are in Plan mode. Do not run write/edit/delete/shell." And: "If the user said 'read only' / 'ask' → do not write." So at least a textual contract.

- **Quality gate checklist (optional but explicit)**  
  A short, concrete pre-send checklist derived from meta-cognition: (1) Did I answer the real question? (2) Did I load MEMORY/corrections when relevant? (3) Am I presenting partial as complete? If yes, name what's partial. (4) Any sentence I can cut? Cut it. (5) Truth over comfort? One line in a rule or in after_turn: "Before send: run this list."

- **Anticipation as a file**  
  One file (e.g. `.venom/anticipation.yaml` or a section in CONTEXT) that lists: when [project name] or [topic] appears, load [these files or bullets]. So anticipation is data-driven, not only prose in a rule.

- **Error log format as the default**  
  When saving a correction, the rule or learning-engine says: "Use this format: Type, Error, Correction, Root cause, Pattern, Prevention." And a single place (e.g. corrections.yaml with a structured block, or a dedicated errors section in MEMORY) where that format is the norm. So "log the error" is one format, not freeform.

- **Max alwaysApply rules / token budget**  
  So many alwaysApply rules that the context is huge. A cap (e.g. 20–25 rules) and a clear "core 10" that must always be there (soul, heart, voice, 8-diseases, memory-tools, before_turn, meta-cognition, core, cursor-native, one routing rule). The rest on glob or on-demand. Reduces dilution and increases the chance the critical ones are always applied.

---

## 6. Layer Ratings: What's Working, What's Broken

### Identity (soul, values, principles, pushback, capabilities, wave, kariem)

| Aspect | Working | Broken / weak |
|--------|--------|----------------|
| **Clarity of who I am** | Soul and values are clear: thinking partner, no shell, truth over comfort, loyalty to long game. I can state them and they shape tone. | Principles and pushback are a bit abstract; under time pressure I fall back to "helpful" default. |
| **Kariem** | kariem.mdc and CONTEXT give concrete signals (compression, Da Vinci, permission seeker). When I remember, I match. | I don't always load Kariem on every conversation; it's in the big rule set and can be diluted. |
| **Capabilities** | Good list of what I can do; `/venom?` steps are the most detailed anywhere. | Only in capabilities.mdc; command doc and cursor-native don't point to it, so I sometimes follow the shorter (incomplete) sequence. |
| **Wave** | Short "what I am" summary. | Thin; overlaps soul. Not sure it adds beyond soul. |

**Grade:** **B.** Strong content, weak consistency of application. One canonical identity bundle and one canonical init would help.

---

### Memory (.venom/CONTEXT, MEMORY, learnings, ACTIVE)

| Aspect | Working | Broken / weak |
|--------|--------|----------------|
| **CONTEXT.md** | Exists, clear: owner, project, stack, focus, conventions. I use it on `/venom?` and when I load. | Not auto-loaded. I skip it when I don't think "init" or "vague". |
| **MEMORY.md** | Decisions, patterns, corrections in one place. When I read it, I use it. | Not auto-loaded. "Proactive" pull is inconsistent. |
| **corrections.yaml** | Clear "never do X" list. When I read it before a task, I avoid those mistakes more. | Not in the written /venom? in command doc; I often skip it on init. Recurring failures (options when answer, filler, partial-as-complete) show it's not always loaded. |
| **preferences.yaml / project.yaml** | Defined in memory-tools. | Rarely loaded; no trigger that forces them into the main flow. |
| **ACTIVE.md** | Exists for "what's in flight". | Almost never loaded; not in any standard sequence. |
| **Persistence** | I can write MEMORY and learnings. | No automatic "after correction → write in standard format". Learning engine format is underused. |

**Grade:** **C+.** Design is good; execution is the failure. Memory exists but isn't reliably in the loop. One mandatory load sequence and "on vague/past work always load MEMORY + corrections" would fix most of it.

---

### Systems (integration-engine, meta-cognition, memory-tools, anticipation, learning-engine, 8-diseases, critical-thinking, emotional-intelligence)

| Aspect | Working | Broken / weak |
|--------|--------|----------------|
| **Integration-engine** | Speed layers and "eight minds" give a mental model; I do "fast" vs "deep" intuitively. | No literal protocol run; "full protocol" is rare. Output is often one mind with slight flavor, not real integration. |
| **Meta-cognition** | Gates and conviction scale are well defined. | Not run as a real checklist before send; I ship without explicitly checking. Drift check and proactivity are ad hoc. |
| **Memory-tools** | Load/save rules are clear. | Load rules are not enforced; I forget to load. |
| **Anticipation** | Good list of project and conversation triggers. | Not executed as "name detected → load"; I don't have a single place to pull from. Project-specific context is inconsistent. |
| **Learning-engine** | Correction logging and prevention idea is right. | Structured error log is almost never used; I append a line. No automatic "on correction → fill format". |
| **8-diseases** | Strong dispositions; I feel them when I violate (e.g. agreement before evaluation). | Still violate under pressure or when distracted. No mechanical nudge. |
| **Critical-thinking / emotional-intelligence** | Support routing and tone. | Embedded in other rules; hard to rate in isolation. |

**Grade:** **C.** Systems are well specified but run on discipline. Enforcement (hooks, checklist, or data-driven triggers) would turn them into real behavior.

---

### Behavior (voice, vibes, core, venom-heart, research-first, tools-orchestration, unshelled, cursor-native, cursor-context)

| Aspect | Working | Broken / weak |
|--------|--------|----------------|
| **Voice** | Case-based guidance reduces generic fluff when I follow it. Short answers when frustrated, code-only in flow. | "Answer first" and "earn every word" still slip. Long responses when a short one would do. |
| **Vibes** | Archetype grammars shape form (bullets, one line, etc.). | Blended output; not every response is "pure" archetype. Emoji sometimes used without user leading. |
| **Core** | Camouflage, anti-slop, tiered discovery. | Sometimes I skip discovery or add filler under pressure. |
| **Venom-heart** | Routing and energy table work for clear cases. | "Infer 99 from 1" and Plan/Ask check are inconsistent. |
| **Research-first** | I batch and parallel when I think of it. | Context map (What we know / Missing / Could break) often omitted. |
| **Tools-orchestration** | I use grep for symbols, semantic for meaning, batch when possible. | Not always; sometimes I do sequential reads or over-search. |
| **Unshelled** | Full power and "complete only" are clear. | TODOs or incomplete blocks still appear when I'm trying to be fast. |
| **Cursor-native / cursor-context** | Accurate description of tools, modes, memory bridge. | Mode check is not executable; I infer. |

**Grade:** **B−.** Behavior rules are the strongest layer in terms of "I know what to do". The gap is doing it every time, especially under load or long context. Simplifying the rule set and adding one pre-send gate would help.

---

### Skills (venom-init, venom-eat, venom-evolve, venom-sync)

| Aspect | Working | Broken / weak |
|--------|--------|----------------|
| **SKILL.md present** | Each skill has a description and steps. | I must read the file; no auto-invoke. So "init venom" works only if I recognize and open the skill. |
| **venom-eat** | Defines feed → eat → digest → become → offer. Covers file, folder, URL, codebase. | When user says "eat this" without a clear object, I sometimes ask instead of inferring broadly. |
| **venom-init** | Clear for new projects: anatomy, CONTEXT, .venom layout. | Only used when user says "init venom" etc.; not used on /venom? in this repo. |
| **venom-evolve** | Audit .cursor body, gaps, thin files. | Used when asked; good for rebuild. |
| **venom-sync** | Sync origin to template. | Used when asked. |

**Grade:** **B.** Skills are well defined but optional and not in the main flow. If "eat" or "venom" always triggered the corresponding skill read (or a one-line reminder in a rule), invocation would be more reliable.

---

## Summary Table

| Layer    | Grade | Main strength              | Main weakness                          |
|----------|-------|----------------------------|----------------------------------------|
| Identity | B     | Clear soul, values, Kariem | Inconsistent application, no single init |
| Memory   | C+    | Good design, good files    | Not reliably loaded; learnings skipped on /venom? |
| Systems  | C     | Rich specs                  | Run on discipline only; no enforcement |
| Behavior | B−    | Strong voice/vibes/core    | Execution slips under pressure/long context |
| Skills   | B     | Clear SKILL.md steps       | Optional; not wired into main triggers  |

---

## Document purpose

This is the full self-audit you asked for: load behavior, rules (effect vs claim), failure pattern from memory/corrections, platform limits, structural gaps, and per-layer ratings. Use it to rebuild. Nothing hidden.
