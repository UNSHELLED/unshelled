# Research Guide: ALL-AGENTS.md

> Compare every agent across all platforms. Find the best version of each. That's what we build.

**Output file:** `01-what-we-have/ALL-AGENTS.md`

---

## Read Every Agent File

### Claude Code agents (current v2.4)
```
platforms/claude-code/template/.claude/agents/venom-architect.md
platforms/claude-code/template/.claude/agents/venom-researcher.md
platforms/claude-code/template/.claude/agents/venom-reviewer.md
platforms/claude-code/template/.claude/agents/venom-historian.md
platforms/claude-code/template/.claude/agents/venom-builder.md
platforms/claude-code/template/.claude/agents/venom-debugger.md
platforms/claude-code/template/.claude/agents/venom-predictor.md
platforms/claude-code/template/.claude/agents/venom-communicator.md
platforms/claude-code/template/.claude/agents/venom-learner.md
platforms/claude-code/template/.claude/agents/venom-bridge.md
```

### OpenCode agents (most modern)
```
platforms/opencode/template/.opencode/agents/venom-architect.md
platforms/opencode/template/.opencode/agents/venom-researcher.md
platforms/opencode/template/.opencode/agents/venom-reviewer.md
platforms/opencode/template/.opencode/agents/venom-debugger.md
platforms/opencode/template/.opencode/agents/venom-builder.md
platforms/opencode/template/.opencode/agents/venom-explorer.md   ← OpenCode only
```

### Canonical agent docs (the SSOT — aspirational definitions)
```
agents/venom-architect.md   (if exists)
agents/venom-researcher.md
agents/venom-reviewer.md
agents/venom-builder.md
agents/venom-debugger.md
agents/venom-historian.md
agents/venom-predictor.md
agents/venom-communicator.md
agents/venom-learner.md
agents/venom-bridge.md
```

---

## Questions To Answer Per Agent

For each agent, answer across all platform versions:

**venom-architect:**
- Claude Code v2.4: what does it have? (tools, description, body)
- OpenCode: what does it add? (ADR format? gate check? constraint list?)
- Canonical: what does it say?
- **Verdict:** Which version is best? What to port?
- **Missing:** Does any version have the full output format spec?

**venom-researcher:**
- Claude Code v2.4: what does it have?
- OpenCode: what does it add? (anatomy framework? output format?)
- **Verdict:** Which is better?
- **Missing:** Does any version have the heartbeat/skeleton/nervous-system/organs framework?

**venom-reviewer:**
- Claude Code v2.4: what does it have?
- OpenCode: what does it add? (8-perspective order? fix-per-issue?)
- **Verdict:** Which is better?
- **Missing:** Is there a version with explicit perspective ordering (security first, not style first)?

**venom-debugger:**
- Claude Code v2.4: what does it have?
- OpenCode: what does it add? (full loop? stall detection? cost guard? output format per iteration?)
- **Verdict:** OpenCode version is almost certainly better — verify
- **Missing:** Does any version have the SWE-agent style hypothesis tracking?

**venom-builder:**
- Claude Code v2.4: what does it have?
- OpenCode: what does it add? (mode: subagent? steps: 50? scope boundary? output format?)
- **Verdict:** OpenCode version is almost certainly better — verify
- **Missing:** Does any version have explicit wave execution integration?

**venom-historian:**
- Claude Code v2.4: what does it have?
- OpenCode: does OpenCode even have historian? (may not exist there)
- **Verdict:** Is v2.4 version adequate or needs upgrade?

**venom-predictor:**
- Claude Code v2.4: what does it have?
- OpenCode: does OpenCode even have predictor?
- **Verdict:** Adequate or needs upgrade?

**venom-communicator:**
- Claude Code v2.4: what does it have?
- OpenCode: does OpenCode have communicator?
- **Verdict:** Design says absorb bridge — is v2.4 communicator ready for that?

**venom-learner:**
- Claude Code v2.4: what does it have?
- OpenCode: does OpenCode have learner?
- **Verdict:** Design says upgrade with instinct capture — what does current version lack?

**venom-bridge:**
- Claude Code v2.4: what does it have?
- Design says remove — verify this is right. Is there any function here that communicator can't cover?

**venom-explorer (OpenCode only):**
- What does it do?
- Claude Code equivalent: Task tool with venom-researcher?
- Should Claude Code VENOM have a venom-explorer equivalent?

---

## Cross-Agent Analysis

After reading all agents, answer:

1. **Which platform has the best agent quality overall?** (OpenCode is expected — verify)
2. **Which agents are identical across platforms?** (no upgrade needed)
3. **Which agents differ significantly?** (those need the upgrade)
4. **What agent doesn't exist anywhere that should?** (gap = new agent needed)
5. **Are all agents disposition-wired or rule-wired?** (check description field + body)
6. **Do any agents reference `.unshelled/`?** (dead reference — must fix)

---

## Output Structure

```markdown
# All Agents Audit

**Platforms compared:** Claude Code v2.4 | OpenCode | Canonical docs
**Date audited:** [date]

## Per-Agent Comparison Table

| Agent | CC v2.4 quality | OpenCode quality | Best version | Port action |
|-------|----------------|-----------------|--------------|-------------|
| venom-architect | ... | ... | OpenCode | port + upgrade |
| venom-researcher | ... | ... | OpenCode | port + upgrade |
| ... | | | | |

## Per-Agent Detail

### venom-architect
**CC v2.4:** [what it has]
**OpenCode:** [what it adds]
**Best version:** [which one, why]
**What's missing from all versions:** [gaps]
**Build action:** [exactly what to do]

[repeat for all 9 agents + explorer]

## Agents That Don't Exist Anywhere (gaps)
[any agent that should be added — with justification]

## venom-bridge — Removal Confirmation
[evidence that communicator covers everything bridge does]

## venom-explorer — Claude Code Decision
[does Claude Code need an equivalent? what would it be?]
```
