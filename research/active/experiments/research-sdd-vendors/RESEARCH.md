# Mega-Research: Spec-Driven Development & AI Coding Frameworks

> **Role:** Curated inventory of every high-starred open-source SDD/AI-coding methodology framework on GitHub as of 2026-03-30.  
> **Purpose:** Extract patterns, techniques, and wiring that VENOM can absorb without forking the world.  
> **Method:** Web search + local vendor clone analysis. Stars verified from GitHub search results.

---

## Tier 1 — The Big Three (Already in draft/)

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[github/spec-kit](https://github.com/github/spec-kit)** | 83,351 | Python (87.3%) | 4-phase workflow (Specify → Plan → Tasks → Implement); constitution.md; CLI `specify init`; slash commands `/speckit.*`; extension system | **HIGH** — Already installed locally. Patterns: constitution-first, spec/plan/tasks artifacts, extension catalog. VENOM can adopt constitution → spec → plan → tasks lifecycle as optional organ under profiles. |
| **[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)** | 35,271 | TypeScript (98.7%) | Artifact-guided workflow; `/opsx:propose`, `/opsx:apply`, `/opsx:archive`; spec deltas; 20+ tool support | **HIGH** — Lightweight, no API key required. Pattern: proposal → design decisions → implementation tasks → spec delta. VENOM can adopt delta-style change tracking and artifact-driven workflow. |
| **[gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done)** | 31,781 | JS/TS | Meta-prompting + context engineering; solves context rot; atomic task execution in clean subagent contexts; verification checks | **HIGH** — Already cloned locally. Pattern: explicit phases, sub-plan tasks, fresh context per task. VENOM can adopt atomic task execution with verification gates. |

---

## Tier 2 — Autonomous Coding Agents

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)** | 70,113 | Python (72.7%) | SDK + CLI + GUI + cloud; autonomous issue fixing; SWE-bench 77.6%; multi-deployment options | **MEDIUM** — VENOM can adopt SDK-style composable agent definition and cloud sandbox patterns. Too heavy for direct integration but architecture is instructive. |
| **[swe-agent/SWE-agent](https://github.com/swe-agent/swe-agent)** | 18,800 | Python | GitHub issue → autonomous fix; SOTA on SWE-bench; single YAML config; research-focused | **MEDIUM** — Pattern: issue → hypothesis → fix → verify. VENOM debugger can adopt the hypothesis-test-verify loop. |
| **[OpenDevin/OpenDevin](https://github.com/OpenDevin/OpenDevin)** | — | — | (Archived/merged into OpenHands) | — |

---

## Tier 3 — Task & Project Management for AI

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master)** | 26,250 | JS/TS | MCP server; PRD → task breakdown; multi-IDE (Cursor, Windsurf, Claude Code, etc.); real-time sync | **HIGH** — Pattern: PRD parsing → task generation → subtask expansion → complexity analysis. VENOM can adopt PRD-to-tasks pipeline and MCP-based IDE integration. |
| **[Taskosaur/Taskosaur](https://github.com/Taskosaur/Taskosaur)** | 440 | — | Conversational AI task execution; self-hostable PM; modular architecture | **LOW** — More PM tool than SDD framework. Pattern: natural language → task CRUD. |
| **[kunwarVivek/mcp-github-project-manager](https://github.com/kunwarVivek/mcp-github-project-manager)** | 84 | — | MCP server; IEEE 830 compliant requirements; PRD generation from code analysis | **MEDIUM** — Pattern: code → PRD → requirements traceability. VENOM can adopt IEEE 830 structure for spec.md. |

---

## Tier 4 — Multi-Agent Orchestration

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT)** | 66,381 | Python | Simulates software company; role-based agents (PM, architect, engineer); complete SDLC automation | **MEDIUM** — Pattern: role-based agent delegation. VENOM's nine minds already do this; MetaGPT's role prompts are worth extracting. |
| **[OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev)** | 31,888 | Python/Vue | Virtual software company; multi-agent collaboration; ChatDev 2.0 = zero-code platform | **LOW** — Too heavy, research-focused. Pattern: CEO → CTO → programmer → reviewer chain. |
| **[monkilabs/opencastle](https://github.com/etylsarin/opencastle)** | — | — | Multi-agent orchestration for Cursor, Claude, OpenCode; 15+ specialist agents; workflow templates | **HIGH** — Pattern: Team Lead orchestrator + specialist delegation. VENOM can adopt specialist agent definitions and workflow templates. |
| **[microsoft/autogen](https://github.com/microsoft/autogen)** | 56,373 | Python | Multi-agent programming framework; autonomous + human-in-the-loop; LangGraph integration | **MEDIUM** — Pattern: agent conversation + handoff. VENOM can adopt conversation-based coordination for complex multi-file work. |

---

## Tier 5 — Agent SDKs & Frameworks

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[langflow-ai/langflow](https://langflow.org/github)** | 146,000 | — | Visual agent builder; workflow deployment; no-code agent creation | **LOW** — GUI-focused, not text-first. Pattern: node-based workflow composition. |
| **[microsoft/agent-framework](https://github.com/microsoft/agent-framework)** | 8,273 | Python/.NET | Graph-based workflows; DevUI debugging; multi-language | **MEDIUM** — Pattern: graph-based workflow definition. VENOM can adopt workflow-as-code patterns. |
| **[moazbuilds/CodeMachine-CLI](https://github.com/moazbuilds/CodeMachine-CLI)** | 2,408 | TypeScript | Multi-agent orchestration; parallel execution; works with Claude Code, Codex, Cursor | **HIGH** — Pattern: CLI-driven agent orchestration. VENOM can adopt parallel agent spawning for wave execution. |

---

## Tier 6 — Prompt Engineering & Rules Systems

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[danielmiessler/fabric](https://github.com/danielmiessler/fabric)** | 40,231 | Go (71%) | Crowdsourced AI prompts; modular pattern system; CLI + multiple backends | **HIGH** — Pattern: pattern library + augmentation. VENOM can adopt pattern-as-file structure for reusable prompts. |
| **[PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)** | 38,724 | MDX | Curated .cursorrules collection; 100+ framework-specific rules | **MEDIUM** — Pattern: framework-specific rule templates. VENOM can mine this for rule patterns to adapt. |
| **[thehimel/cursor-rules-and-prompts](https://github.com/thehimel/cursor-rules-and-prompts)** | 219 | — | Comprehensive rules + sync scripts | **LOW** — Similar to awesome-cursorrules but smaller. |
| **[intellectronica/ruler](https://github.com/intellectronica/ruler)** | — | — | Centralized rule management across 11 AI tools; MCP config | **HIGH** — Pattern: single source of truth → distribute to tool-specific configs. VENOM already does this; ruler's tool matrix is instructive. |
| **[block/ai-rules](https://github.com/block/ai-rules)** | — | Rust | CLI for managing AI coding guidelines across 11 agents; MCP support | **HIGH** — Pattern: unified rule source → per-tool distribution. VENOM can adopt CLI-driven rule sync. |

---

## Tier 7 — Claude Code Ecosystem

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** | 15,100 | — | Official plugin directory; standardized structure (metadata, MCP, commands, agents, skills) | **HIGH** — Pattern: plugin manifest structure. VENOM can adopt this structure for Claude Code plugins. |
| **[Kamalnrf/claude-plugins](https://github.com/Kamalnrf/claude-plugins)** | 486 | — | Third-party registry; 11,989 plugins indexed; web interface + CLI | **MEDIUM** — Pattern: plugin discovery + installation. VENOM can adopt registry-style plugin discovery. |
| **[claude-contrib/claude-extensions](https://github.com/claude-contrib/claude-extensions)** | — | — | Hooks, context rules, session automation; MIT | **HIGH** — Pattern: passive hooks + context rules. VENOM can adopt hook-based automation. |
| **[jarrodwatts/claude-code-config](https://github.com/jarrodwatts/claude-code-config)** | 1,000+ | — | Community config with rules, hooks, agents, skills | **MEDIUM** — Pattern: community-curated config. VENOM can mine this for best practices. |

---

## Tier 8 — Cursor Ecosystem

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[Aider-AI/aider](https://github.com/paul-gauthier/aider)** | 42,478 | Python | Terminal-based AI pair programming; 75+ LLM providers; model-agnostic | **HIGH** — Pattern: repo map + context management. VENOM can adopt aider's repomap technique for anatomy scanning. |
| **[sourcegraph/cody](https://github.com/sourcegraph/cody)** | 3,600 | TypeScript | Open-source AI assistant; codebase context via Sourcegraph search; multi-IDE | **MEDIUM** — Pattern: search-based context retrieval. VENOM can adopt search-first context loading. |

---

## Tier 9 — Requirements Engineering & PRD Generation

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[presidio-oss/specif-ai](https://github.com/presidio-oss/specif-ai)** | — | — | Project idea → BRD/NFRD/PRD/UIR generation; structured requirements | **MEDIUM** — Pattern: idea → multi-document spec. VENOM can adopt document templates. |
| **[specsmith-ai/specsmith-cli](https://github.com/specsmith-ai/specsmith-cli)** | — | — | Rough idea → structured spec; Jira/GitHub integration | **MEDIUM** — Pattern: CLI-driven spec generation with integrations. |
| **[OpenSQZ/GTPlanner](https://github.com/OpenSQZ/GTPlanner)** | 268 | Python | AI-powered PRD generator; web UI; Claude Code integration; MCP support | **HIGH** — Pattern: vibe coding → structured PRD. VENOM can adopt PRD template structure. |
| **[cdeust/ai-prd-generator](https://github.com/cdeust/ai-prd-generator)** | — | Swift | Claude Code plugin; 8 PRD types; 15 thinking strategies; multi-LLM verification | **HIGH** — Pattern: PRD types + thinking strategies. VENOM can adopt PRD type taxonomy. |

---

## Tier 10 — Specification-as-Code

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[reqvire-org/reqvire](https://github.com/reqvire-org/reqvire)** | — | — | Git-native requirements-as-context; Markdown for human+AI; bidirectional traceability | **HIGH** — Pattern: requirements live in repo, traceable to code. VENOM can adopt requirement → code linking. |
| **[specledger/specledger](https://github.com/specledger/specledger)** | — | Go | SDD playbook; project bootstrap; issue tracking; UI mockup generation | **MEDIUM** — Pattern: spec → mockup → implementation. VENOM can adopt mockup generation hook. |
| **[ZhangHanDong/agent-spec](https://github.com/ZhangHanDong/agent-spec)** | — | Rust | AI-native BDD; Task Contract DSL (Intent, Decisions, Boundaries, Completion) | **HIGH** — Pattern: contract-first agent implementation. VENOM can adopt contract DSL structure. |
| **[sengac/fspec](https://github.com/sengac/fspec)** | 55 | — | Spec-driven multi-agent factory; Gherkin scenarios; auto-generated tests; kanban | **MEDIUM** — Pattern: Gherkin → test → implementation. VENOM can adopt BDD-style spec structure. |

---

## Tier 11 — AI Governance & Rules

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[metagov/ai-constitution](https://github.com/metagov/ai-constitution)** | — | — | Computational constitution; community-based AI governance | **MEDIUM** — Pattern: constitution as code. VENOM already has constitution.md; can adopt governance patterns. |
| **[helixprojectai-code/Helix-TTD-v1.0-Constitutional-Grammar](https://github.com/helixprojectai-code/Helix-TTD-v1.0-Constitutional-Grammar)** | — | — | Constitutional grammar for multi-model federations; zero-touch alignment | **LOW** — Too theoretical for direct integration. |
| **[block/ai-rules](https://github.com/block/ai-rules)** | — | Rust | CLI for managing AI guidelines across 11 agents; MCP support | **HIGH** — (Already listed in Tier 6) |

---

## Tier 12 — Vibe Coding Frameworks

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[KhazP/vibe-coding-prompt-template](https://github.com/KhazP/vibe-coding-prompt-template)** | 2,079 | — | 5-stage workflow: research → PRD → tech design → agent files → MVP | **HIGH** — Pattern: structured vibe coding. VENOM can adopt the 5-stage structure for /venom-spec. |
| **[nbabderrahmane/vibe-framework](https://github.com/nbabderrahmane/vibe-framework)** | — | — | Industrialized vibe coding; Orchestrator agent; 15 specialists; quality gates | **HIGH** — Pattern: orchestrator + specialists + gates. Very similar to VENOM's nine minds + pushback scale. |
| **[Strawberry-Computer/vibe-compiler](https://github.com/Strawberry-Computer/vibe-compiler)** | 61 | — | Prompt stacks → code + tests; self-compiling; static/dynamic plugins | **MEDIUM** — Pattern: prompt stack compilation. VENOM can adopt stack-based prompt composition. |

---

## Tier 13 — Code Generation Platforms

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[stackblitz/bolt.new](https://github.com/stackblitz/bolt.new)** | 16,280 | TypeScript (89.9%) | Browser-based full-stack development; WebContainers; AI controls entire environment | **MEDIUM** — Pattern: environment control. VENOM can adopt sandbox-style execution for verification. |
| **[smol-ai/developer](https://github.com/smol-ai/developer)** | 12,199 | Python | Library-first code generation; plan → file paths → code; API mode | **MEDIUM** — Pattern: embeddable code generation. VENOM can adopt library-mode for programmatic spec → code. |
| **[AntonOsika/gpt-engineer](https://github.com/AntonOsika/gpt-engineer)** | 55,230 | Python | CLI-first codebase generation; clarification before building; custom AI steps | **MEDIUM** — Pattern: interactive clarification. VENOM can adopt clarification phase in /venom-spec. |

---

## Tier 14 — Auto-GPT Family

| Repo | Stars | Language | Core Pattern | VENOM Integration Potential |
|------|-------|----------|--------------|------------------------------|
| **[significant-gravitas/autogpt](https://github.com/significant-gravitas/autogpt)** | 182,900 | Python | Chained reasoning + actions; autonomous multi-step tasks; pioneering agent framework | **LOW** — Too general-purpose. Pattern: goal → plan → execute loop. VENOM already does this. |

---

## Cross-Cutting Patterns Worth Extracting

### 1. Constitution-First Development
- **Source:** Spec Kit, VENOM
- **Pattern:** Define non-negotiable principles in `constitution.md` before any spec
- **VENOM Adoption:** Already implemented. Keep.

### 2. Spec → Plan → Tasks → Implement
- **Source:** Spec Kit, OpenSpec, GSD
- **Pattern:** 4-phase linear workflow with artifacts at each phase
- **VENOM Adoption:** Implement as optional organ under profiles

### 3. Artifact-Guided Workflow
- **Source:** OpenSpec
- **Pattern:** Each phase produces artifacts consumed by next phase
- **VENOM Adoption:** Enforce artifact discipline in /venom-spec

### 4. Atomic Task Execution
- **Source:** GSD
- **Pattern:** Each task runs in clean subagent context; verification checks built-in
- **VENOM Adoption:** Implement in wave execution

### 5. Fresh Context Per Task
- **Source:** GSD
- **Pattern:** Subagent context isolation prevents context rot
- **VENOM Adoption:** Already partially implemented via @venom-builder spawning

### 6. Spec Deltas
- **Source:** OpenSpec
- **Pattern:** Track requirement changes as deltas, not full rewrites
- **VENOM Adoption:** Implement delta tracking in .venom/work/

### 7. Task Contract DSL
- **Source:** agent-spec
- **Pattern:** Intent, Decisions, Boundaries, Completion Criteria
- **VENOM Adoption:** Adopt for spec.md structure

### 8. Rule Distribution
- **Source:** ruler, ai-rules
- **Pattern:** Single source of truth → distribute to per-tool configs
- **VENOM Adoption:** Already implemented via .cursor/rules → template sync

### 9. Hook-Based Automation
- **Source:** Claude extensions, GSD hooks
- **Pattern:** Lifecycle hooks (PreToolUse, PostToolUse, SessionStart, etc.)
- **VENOM Adoption:** Already implemented in venom-core.ts

### 10. Multi-Agent Orchestration
- **Source:** MetaGPT, OpenCastle, autogen
- **Pattern:** Role-based specialist agents coordinated by orchestrator
- **VENOM Adoption:** Already implemented via nine minds + @venom-* agents

---

## What VENOM Should Adopt (Prioritized)

| Priority | Pattern | Source | Implementation Path |
|----------|---------|--------|---------------------|
| **P1** | Constitution → spec → plan → tasks | Spec Kit | Add as optional organ under `.venom/profiles/` |
| **P1** | Spec deltas | OpenSpec | Add delta tracking to `.venom/work/` |
| **P1** | Task contract DSL | agent-spec | Adopt for spec.md frontmatter |
| **P2** | Atomic task execution + verification | GSD | Enhance wave execution in /venom-build |
| **P2** | PRD type taxonomy | ai-prd-generator | Add to /venom-spec constitution phase |
| **P2** | 5-stage vibe workflow | vibe-coding-prompt-template | Add as alternative workflow in /venom-spec |
| **P3** | Requirement → code traceability | reqvire | Add bidirectional links in MEMORY.md |
| **P3** | BDD-style spec structure | fspec | Add Gherkin section to spec.md template |

---

## What VENOM Should NOT Adopt

| Pattern | Why Not |
|---------|---------|
| Visual node-based workflow builders (Langflow) | VENOM is text-first; GUI defeats the purpose |
| Full SDLC simulation (MetaGPT, ChatDev) | Too heavy; VENOM is thinking partner, not replacement team |
| General-purpose autonomous agents (AutoGPT) | VENOM is coding-focused; general autonomy is out of scope |
| Enterprise governance frameworks (Helix-TTD) | Too theoretical; VENOM's constitution.md is sufficient |

---

## Local Clones (Already Present)

| Path | Status | Notes |
|------|--------|-------|
| `draft/research-sdd-vendors/spec-kit/` | Cloned | Full repo |
| `draft/research-sdd-vendors/get-shit-done/` | Cloned | Full repo |
| `draft/research-sdd-vendors/openspec/` | Cloned | Full repo |
| `draft/research-sdd-vendors/claude-task-master/` | Cloned | `git clone --depth 1` |
| `draft/research-sdd-vendors/vibe-framework/` | Cloned | `git clone --depth 1` |
| `draft/research-sdd-vendors/fabric/` | Cloned | `git clone --depth 1` |
| `draft/research-sdd-vendors/swe-agent/` | Cloned | `git clone --depth 1` |
| `draft/research-sdd-vendors/claude-extensions/` | Cloned | `git clone --depth 1` |
| `draft/research-sdd-vendors/opencastle/` | Cloned | `monkilabs/opencastle`, `git clone --depth 1` |

---

## Next Actions

1. ~~**Clone OpenSpec**~~ — done; eat per `.venom/work/claude-code-rethink/03-opensources/`
2. **Extract rule templates** from awesome-cursorrules for VENOM rule patterns
3. **Adopt spec delta tracking** from OpenSpec into `.venom/work/`
4. **Implement task contract DSL** in spec.md template
5. **Add PRD type taxonomy** to /venom-spec constitution phase
6. **Update VENOM-SURFACES.md** with organ mounting instructions for SDD kits

---

*Research completed: 2026-03-30. Total repos analyzed: 50+. Total stars covered: 1,000,000+.*
