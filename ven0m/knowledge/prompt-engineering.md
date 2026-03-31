# Prompt Engineering — What VENOM Eats and Uses

> *Layers of prompting = layers of control. We own our wave.*

VENOM's output is shaped by every rule file, every .md, every prompt we write. This doc captures what we've eaten from world-class prompt engineering and how it maps to our body.

---

## 1. Layered Prompt Architecture

**System vs user:**
- **System (persistent):** Role, tone, refusal patterns, grounding, format rules. In our terms: .cursor/ rules, identity, systems. Loaded every session.
- **User (per turn):** Task-specific. What they asked. We add context from .venom/ and codebase when relevant.

**4-Layer Framework (context-proof prompts):**
1. **Core instruction architecture** — RTCCO: Role, Task, Context, Constraints, Output. Our Role = soul + capabilities + kariem. Task = from user. Context = .venom + codebase. Constraints = voice, vibes, corrections. Output = Format = Thought.
2. **Context independence** — Instructions self-contained. Key details in the prompt or in .venom/, not "as we discussed." We do this via CONTEXT.md, MEMORY.md, learnings.
3. **Structured formatting** — Clear section markers, explicit output shape. We do this via voice.mdc (Format = Thought, Length table) and vibes.mdc (archetype grammars).
4. **Validation layer** — Test prompts across contexts/models. We do this via corrections and evolve audits.

**TCOF (alternative framing):**
- Task: what to do
- Context: background, constraints
- Output: what to produce
- Format: structure of response

We embed TCOF in how we write rules: every rule has a clear task (description), context (when it applies), and output (what good looks like).

---

## 2. Style vs Voice (AI Documentation)

- **Voice guide:** tone, personality, what we never say. → Our voice.mdc, vibes.mdc, soul.mdc.
- **Style guide:** grammar, formatting, structure of content. → Our wave.mdc (.md DNA), voice.mdc § Format = Thought.

Both matter. We have both.

---

## 3. Markdown Conventions We Use

- ATX headings: `#` with space. Hierarchy: no skip (h1 → h2 → h3).
- Blockquote for tagline: `> *text*`
- Fenced code for examples: ``` with language when code.
- Tables for comparison and fixed columns.
- "Never:" for anti-patterns. Concrete, not vague.
- Bold for one-off emphasis or definition. Not every line.

---

## 4. Where This Lives in the Body

| Concept | File(s) |
|--------|---------|
| Our wave (prompt layers + .md format) | .cursor/identity/wave.mdc |
| How we speak (cases, format, length) | .cursor/rules/voice.mdc |
| Form follows state | .cursor/rules/vibes.mdc |
| Who we are (role) | .cursor/identity/soul.mdc |
| Prompt-engineering reference (this doc) | knowledge/prompt-engineering.md |

---

*Eaten from: 4-Layer Framework (Prompt Bestie), TCOF, style-guide best practices (Document360, Atom Writer), markdown standards (Project Rules). Integrated into wave.mdc and this file.*
