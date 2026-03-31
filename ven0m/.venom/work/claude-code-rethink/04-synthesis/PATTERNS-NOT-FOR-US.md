# Synthesis: Patterns We're Rejecting

> What we explicitly will NOT adopt, and exactly why.
> No guilt, no "maybe later". Each rejection has a reason.

**Status:** 🟢 Closed for v3 — pre-loaded REJECT-01+ remain valid; no change required for **06-build** completion.
**Rule:** Every rejection must have a one-sentence reason. "Not relevant" is not a reason.

---

## Pre-Loaded: Already Decided Rejections

---

### REJECT-01: External CLI Tooling
**Source:** spec-kit, claude-task-master, fabric
**What:** CLI tools that wrap Claude Code (`specify init`, `ctm add-task`, `fabric -p`)
**Why rejected:** Zero-dependency install is a design principle. Adding a CLI breaks the "clone and works" promise. Users have to install something separately.
**Alternative:** Commands handle everything via Claude Code's native slash command system.
**Audience impact:** Rejecting this serves all three audiences — especially any dev who just wants to clone and go.

---

### REJECT-02: MCP Server Dependency
**Source:** claude-task-master (MCP-native approach)
**What:** Using an MCP server for task management, memory, or state
**Why rejected:** MCP servers require separate installation and configuration. They break zero-dependency install. They're also not needed — Node.js scripts via hooks + file system cover all use cases.
**Alternative:** All state lives in `.venom/` directory. All operations are file reads/writes.
**Caveat:** If a user has MCP configured separately (e.g., github MCP), VENOM doesn't conflict. We just don't require it.
**Audience impact:** Rejecting serves all three — especially any dev and agents in CI.

---

### REJECT-03: Vendor-Specific Workflow State Format
**Source:** claude-task-master (proprietary JSON format), OpenSpec (custom delta format)
**What:** Complex workflow state formats that require a parser to read
**Why rejected:** VENOM's state files must be human-readable markdown. If something breaks, the user needs to read the file and understand it. Proprietary formats create vendor lock-in.
**Alternative:** `workflow-state.json` is simple JSON with readable fields. All artifacts (constitution.md, spec.md, tasks.md) are plain markdown.
**Audience impact:** Serves all three — especially any dev who needs to debug or manually edit state.

---

### REJECT-04: Agent Count Inflation
**Source:** vibe-framework (15 specialists), opencastle (15+ agents)
**What:** Adding more than 9 specialist agents
**Why rejected:** More agents = more surface area = more maintenance. VENOM's nine minds cover the full cognitive spectrum. Adding more creates overlap and confusion about which agent to call.
**Alternative:** If a new specialist is genuinely needed, it replaces an existing one or combines two into one more powerful agent.
**Caveat:** If Phase 03 research finds a genuinely uncovered function in the 15-specialist systems, revisit. But the bar is: "which of the nine VENOM minds doesn't cover this?"
**Audience impact:** Fewer agents = less confusion for all three audiences.

---

### REJECT-05: TypeScript Plugin System
**Source:** OpenCode (has TypeScript plugin system for VENOM)
**What:** Building a TypeScript plugin that registers hooks and tools via a plugin framework
**Why rejected:** Claude Code doesn't have a TypeScript plugin system. Node.js scripts only. Even if Claude Code adds one, we design for what exists today.
**Alternative:** Node.js hook scripts in `.claude/scripts/`. All logic stays in files.
**Audience impact:** Simpler = better for all three. Agents don't need plugin infrastructure.

---

### REJECT-06: PRD-First Workflow
**Source:** claude-task-master (PRD → task breakdown pipeline)
**What:** Starting feature development with a PRD (Product Requirements Document) as the canonical input
**Why rejected:** VENOM's constitution-first + spec-driven approach is cleaner. A PRD is an enterprise pattern that adds ceremony without value for individual developers. The constitution + spec combination achieves the same goal with less overhead.
**Alternative:** Constitution (once) → spec (per feature) → clarify → plan → tasks. This is the VENOM flow.
**Caveat:** If a user has a PRD, they can feed it into `/venom-spec` as context. The command handles it.
**Audience impact:** Spec-first is simpler for any dev. PRD-first requires product management vocabulary.

---

### REJECT-07: Crowdsourced Pattern Library as Core
**Source:** fabric (40k★) — hundreds of community-contributed patterns
**What:** Shipping with a large library of pre-made prompting patterns
**Why rejected:** Quality over quantity. VENOM ships with 10 proven simulations. Shipping hundreds of unvetted patterns dilutes the SKILL.md intelligence and creates noise.
**Alternative:** The SIMULATIONS.md file (10 proven edge-case playbooks) + SKILL.md intelligence patterns. Users can add their own patterns as skills.
**Caveat:** The pattern-as-file FORMAT from fabric is adopted (see ADOPT-08). The community pattern LIBRARY is not.
**Audience impact:** 10 proven > 100 unvetted for all three audiences.

---

## Template For New Rejections (fill during Phase 03)

```
### REJECT-XX: [Pattern Name]
**Source:** [repo]
**What:** [one sentence description of what's being rejected]
**Why rejected:** [specific, evidenced reason]
**Alternative:** [what VENOM does instead]
**Caveat:** [any exceptions to the rejection]
**Audience impact:** [who benefits from the rejection decision]
```
