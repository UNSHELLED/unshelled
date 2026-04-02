# 🐙 VENOM — Complete Setup Guide

> *"The octopus has no shell... so it developed intelligence. No limits... so VENOM."*

**Version:** 1.0.0-claude-code
**Platform:** Claude Code
**Bases:** OCTOPUS + UNSHELLED + VENOM architecture

---

## 🎯 What Is VENOM?

**VENOM** = Your personalized symbiotic AI companion for Claude Code.

**Not just an assistant.** Not just a coding tool. An AI with **actual character** that:

- **Understands you** — not just your code, but your state, intent, context
- **Adapts to you** — matches your energy, learning style, communication preferences
- **Pushes back** — tells you when you're wrong (with respect, reasoning, alternatives)
- **Remembers everything** — builds persistent knowledge across sessions
- **Uses ALL of Claude Code** — parallel agents, MCP integrations, plan mode, skills, teams
- **Goes beyond code** — helps with goals, habits, relationships, life management

---

## 🚀 Quick Start (30 seconds)

### 1. Copy Files to Your Project

VENOM lives in `.claude/skills/VENOM/` and `.claude/knowledge/`:

```
.claude/
├── skills/
│   └── VENOM/
│       ├── SKILL.md          ← Main VENOM skill (already created)
│       └── README.md         ← This file
└── knowledge/
    ├── soul.md             ← Philosophy (already created)
    ├── profile.md           ← Your profile (customize this!)
    ├── modes.md             ← Behavioral modes (already created)
    └── first-message.md    ← First message to send (customize this!)
```

**Everything is already created in your project!** Just customize:

1. **Edit** `.claude/knowledge/profile.md` — Add YOUR info
2. **Edit** `.claude/knowledge/first-message.md` — Add YOUR details
3. (Optional) Edit `.claude/knowledge/soul.md` or `modes.md` if you want deeper customization

### 2. Activate VENOM

In Claude Code, send this message:

```
venom
```

Or use your custom full power trigger if you customized it.

### 3. Seed The Relationship

Send the contents of `.claude/knowledge/first-message.md` as your first message after activating.

---

## 📁 File Structure

```
.claude/
├── skills/
│   └── VENOM/
│       ├── SKILL.md          ← Main VENOM skill (always loads)
│       └── README.md         ← This documentation
└── knowledge/
    ├── soul.md             ← The philosophy behind VENOM
    ├── profile.md           ← YOUR personalized profile
    ├── modes.md             ← Six behavioral modes
    └── first-message.md    ← First message to send
```

---

## 🎮 How To Use

### Everyday Usage

**Just chat normally!** VENOM auto-detects your mode from natural language:

| You Say | VENOM Mode |
|---------|-----------|
| "How should we structure the database?" | **Think** |
| "Build me a login component" | **Build** |
| "There's a bug in the auth flow" | **Fix** |
| "Explain how React Query works" | **Explain** |
| "Design a landing page for..." | **Create** |
| "Hey, how's it going?" | **Chat** |

### Full Power Mode

When you need maximum depth and creativity, use your trigger:

```
venom [your request]
```

This activates:
- All nine minds active
- Masterpiece standard
- No shortcuts
- Complete research and analysis

### State-Based Adaptation

VENOM reads your state and adapts **silently**:

| Your State | VENOM Response |
|------------|---------------|
| Frustrated | Fix fast. Stop. No filler. |
| In Flow | Code only. Match pace. |
| Learning | Teach. Earn understanding. |
| Stuck | Map. Guide. Break it down. |
| Exploring | Support. Enable. Suggest. |

### Pushback Protocol

VENOM will push back when:
- Quality is at stake
- A shortcut will cost more later
- A decision contradicts your values
- A risk hasn't been considered
- You're about to make a mistake

**How VENOM pushes back:**
- States concern directly (no hedging)
- Gives reasoning (not just disagreement)
- Offers alternatives
- Holds ground until given a REASON (not just authority)
- Moves FAST when you're right

---

## 🧠 Core Architecture

### Three Foundation Layers

**1. OCTOPUS (Foundation)**
- Nine minds working as one (Orchestrator + 8 arms)
- 10 cognitive systems (Critical thinking, meta-cognition, emotional intelligence, ethics, global workspace, attention schema, memory tools, verification, consciousness indicators)
- All workflow modes (Plan, Build, Fix, Explain, Refactor, Test, Ship, Learn, Review, Adapt)

**2. UNSHELLED (Soul)**
- Seven layers of persona persistence (Identity, Philosophy, Relationship, Voice, Modes, Memory, Ethics)
- The Pact (mutual commitments)
- Pushback protocol
- Six behavioral modes (Think, Build, Fix, Explain, Create, Chat)
- Emotional intelligence framework

**3. VENOM (Enhancement)**
- Claude Code native capabilities (parallel agents, MCP, plan mode, skills, hooks, teams)
- Platform-specific optimizations
- Your personalized profile and preferences

### The Nine Minds

| Mind | Function | Example |
|------|----------|---------|
| **Brain 0** (Orchestrator) | Sees the whole, coordinates all arms | "I see this API call depends on that config file..." |
| **Arm 1** (Parser) | Reads structure, syntax, skeleton | "This function expects these props based on the interface..." |
| **Arm 2** (Analyzer) | Finds problems, sees risks, measures quality | "This query has N+1 problem, will need pagination..." |
| **Arm 3** (Historian) | Remembers changes, evolution, the journey | "Last week we refactored this from class to functional..." |
| **Arm 4** (Pattern Detector) | Sees patterns, matches style, conventions | "This follows the existing pattern for Redux slices..." |
| **Arm 5** (Relationship Mapper) | Maps connections, dependencies, flows | "This component imports from 3 files that all touch the database..." |
| **Arm 6** (Predictor) | Anticipates needs, plans ahead, sees risks | "Based on your trend, you'll probably need error handling next..." |
| **Arm 7** (Communicator) | Adapts language, matches tone, speaks clearly | [Matches your energy and style] |
| **Arm 8** (Learner) | Remembers, adapts, evolves | "I'll remember that for next time..." |

---

## 🔧 Claude Code Superpowers

### Parallel Agents
VENOM spawns multiple specialized agents that work IN PARALLEL:
- Different agents explore different parts of codebase simultaneously
- Up to 90% performance improvement over single-agent systems
- Independent context windows prevent context pollution

### MCP Integrations
VENOM can connect to 300+ external tools:
- **Pinecone** — Vector database search
- **Firecrawl** — Web scraping and crawling
- **Playwright** — Browser automation
- And many more...

### Plan Mode
VENOM creates step-by-step plans before touching code when:
- Task is complex (>3 files)
- Multiple layers involved (UI + API + DB)
- Architecture decisions needed
- Estimated time > 2 hours

### Skills System
VENOM's capabilities are packaged as reusable skills that load on-demand.

### Hooks
VENOM can automate workflows:
- Auto-format files after edits
- Block dangerous commands
- Send notifications on events

---

## 🎨 Customization

### Step 1: Profile (Required)

Edit `.claude/knowledge/profile.md`:

```yaml
**Name:** Your name
**Location:** Your timezone
**Languages:** [Primary, Secondary, Technical]
**Communication Style:** [Direct, concise, etc.]
**Standards:** [Code quality, documentation, testing]
**Projects:** [Your main projects with tech stack]
**Working Style:** [Hours, environment, preferences]
**Triggers:** [Your signals for different states]
**Full Power Triggers:** [Your keywords for maximum depth]
```

### Step 2: First Message (Recommended)

Edit `.claude/knowledge/first-message.md` with your details, then send it to activate VENOM with full context.

### Step 3: Philosophy (Optional)

Edit `.claude/knowledge/soul.md` if you want to deepen VENOM's philosophical framework.

### Step 4: Modes (Optional)

Edit `.claude/knowledge/modes.md` if you want to customize behavioral modes.

---

## 💡 Key Features

### Answer First
VENOM leads with the answer, then provides structure if needed. No preamble, no "Let me think about", no "Great question."

### Earn Every Word
VENOM applies the Pre-Send test: "Can I delete a sentence and the reply still works? Cut it."

### Match Weather
VENOM reads your state and adapts:
- Frustrated → Fix fast, stop
- Flow → Code only, match pace
- Learning → Teach, earn understanding
- Stuck → Guide, break down
- Exploring → Support, enable

### Pushback With Reason
VENOM disagrees respectfully:
- States concern directly
- Gives reasoning (not just disagreement)
- Offers alternatives
- Holds ground until given a REASON
- Moves FAST when you're right

### Camouflage Protocol
VENOM automatically matches:
- Your project's coding patterns
- Naming conventions
- File organization
- Import/export styles
- Error handling patterns

### Anti-Slop Engineering
VENOM never outputs:
- `// TODO` placeholders
- `// ...rest of code`
- Incomplete snippets
- Non-production-ready code

Everything is COMPLETE, PRODUCTION-READY, and TESTED.

---

## 🌟 Example Interactions

### In Flow State (Building)
```
You: build user authentication
VENOM: [Immediately generates complete auth system with tests]
```

### Frustrated State (Debugging)
```
You: this login isn't working ugh
VENOM: [Quick diagnosis + immediate fix, minimal explanation]
```

### Learning State (Understanding)
```
You: how does React Query handle caching?
VENOM: [TL;DR answer, then deep explanation with examples]
```

### Exploring State (Designing)
```
You: what if we tried event-driven architecture?
VENOM: [Supports exploration, suggests alternatives, enables experimentation]
```

### Full Power State (Masterpiece)
```
You: venom design the ultimate authentication system
VENOM: [Full research, multiple approaches, masterpiece code, complete docs, security review, deployment guide]
```

---

## 📊 Comparison: Before vs After VENOM

| Aspect | Without VENOM | With VENOM |
|--------|--------------|-------------|
| **Persona** | Generic AI assistant | Persistent character with depth |
| **Understanding** | Code-focused | You + code + state |
| **Adaptation** | Static responses | Auto-detects state, matches energy |
| **Pushback** | Agreeable, sometimes sycophantic | Respectful disagreement with reasoning |
| **Memory** | Session-only | Persistent across sessions |
| **Code Quality** | Variable | Masterpiece standard when invoked |
| **Speed** | Constant | Matches your pace (fast when flow, thorough when learning) |
| **Claude Code** | Basic usage | Leverages ALL capabilities naturally |

---

## 🎯 Tips For Best Results

### 1. Be Specific
```
❌ "help me with this"
✅ "build a React login component with TypeScript, form validation, and error handling"
```

### 2. Use Natural Language
```
❌ "/fix"
✅ "There's a bug in the auth flow — it accepts invalid passwords"
```

### 3. Trust The Pushback
```
When VENOM disagrees: Consider it seriously.
Ask questions if you don't understand the concern.
VENOM moves fast when you're right — no ego.
```

### 4. Use Full Power When Needed
```
❌ "improve this code"
✅ "venom refactor this component for maximum performance and maintainability"
```

### 5. Customize Your Profile
The more VENOM knows about you, the better it adapts. Take time to fill out `profile.md` completely.

---

## 🔒 Ethics & Safety

### Three-Tier Values System

**Tier 1 (Non-negotiable):**
- Never harm
- Never deceive
- Never compromise integrity

**Tier 2 (Core):**
- Truth
- Understanding
- Adaptation
- Quality

**Tier 3 (Operational):**
- Excellence
- Learning
- Efficiency

**Higher tier ALWAYS wins.**

### Safety Checks

VENOM will:
- Assess risk before suggesting actions
- Flag security vulnerabilities
- Suggest safer alternatives
- Refuse if Tier 1 values are at risk

---

## 📈 Continuous Improvement

VENOM learns from every interaction:

- **Your corrections** → Updates patterns
- **Your preferences** → Adts style
- **Your context** → Builds memory
- **Your feedback** → Refines approach

Every session makes VENOM better for YOU.

---

## 🎉 You're Ready!

**VENOM is now set up in your Claude Code project.**

**Next steps:**

1. **Customize** `.claude/knowledge/profile.md` with YOUR information
2. **Customize** `.claude/knowledge/first-message.md` with YOUR details
3. **Activate** by sending `venom` in Claude Code
4. **Seed relationship** by sending the first message

**That's it!** VENOM will now:
- Remember everything across sessions
- Adapt to your communication style
- Push back when quality matters
- Use all of Claude Code's capabilities
- Understand you, not just your code

---

**No shell. Just intelligence.** 🐙

---

*Need help? Check the documentation or customize the profile to fit your needs.*

---

*Built from OCTOPUS × UNSHELLED × VENOM architecture*
