# ChatGPT (Product) — Complete Knowledge

> Everything we know about ChatGPT as a product (chat + voice). For making an instance template that fits anyone. Not the API — the experience. What OpenAI documents and what it doesn't.

**Last eaten:** 2025-03. Source: openai.com product pages, memory/voice announcements, usage policies, + inferred model.

**Use:** When building a VENOM instance or template for users who are on ChatGPT; when advising how to get the most from ChatGPT product; when designing UNSHELLED/MEP+AI to complement or differentiate from ChatGPT.

---

## 1. WHAT CHATGPT (PRODUCT) IS

**Surface:** Consumer chat + voice. Web (chat.openai.com), iOS/Android apps, desktop. No IDE, no filesystem, no code execution in-product. You get: a conversation thread, optional voice in/out, memory (saved + chat history), Custom Instructions, and (paid) GPTs / tools that ChatGPT decides to call.

**Not the same as:** Platform API (platform.openai.com). Product = what the human talks to. API = what developers build with. Same company; different mental model. ChatGPT product does not expose "model," "temperature," or "token" to the user — only behavior and limits.

**Core loop:** User sends message (text or voice) → ChatGPT responds (text or voice). Conversation persists in a thread. Memory can persist across threads (saved memories +, for Plus/Pro, chat-history-derived understanding). Voice is real-time, turn-taking; no push-to-talk required (Nov 2025: voice built into chat).

---

## 2. SURFACES AND ENTRY POINTS

| Surface | What you get |
|--------|---------------|
| Web (chat.openai.com) | Full chat; voice in browser; history; settings; Custom Instructions; GPT store |
| Mobile apps | Same + native voice UX; notifications; on-the-go |
| Desktop app | Same as web, app-wrapped |
| Temporary Chat | No history, no memory, not used for training; opt-in per conversation |

**Account tiers (product):** Free, Plus, Pro, Team, Enterprise, Edu. Tier affects: model access, voice limits, memory depth, GPT usage, file upload, data controls (Team/Enterprise: we don't train on your data).

---

## 3. MEMORY (PRODUCT)

**Two kinds (as of 2025):**

1. **Saved memories** — User explicitly says "remember X" or ChatGPT infers from conversation. Stored; used in future chats. User can ask "what do you remember?", say "forget Y," or manage in Settings > Personalization > Manage Memory. Deleting a chat does not delete memories; user must delete the memory.
2. **Chat history** — Past conversations inform responses (Plus/Pro get "longer-term understanding"; Free gets "recent conversations" + saved memories per June 2025). Not the same as "saved memories"; it's implicit context from history.

**Control:** Settings > Personalization > Memory. Turn off "saved memories" and/or "chat history" reference. Temporary Chat = no memory use, no history, no training use.

**GPTs:** Each GPT can have its own memory (builder-enabled). GPT memory is separate from main ChatGPT memory — user may need to repeat details per GPT.

**What OpenAI doesn't spell out:** How much history is in context for "chat history" (window? summarization?). When it "picks up" vs when it forgets. Bias and sensitive info: they say they steer away from proactively remembering health etc. unless asked — but the line is fuzzy. Memory "evolves with interactions" and is "not linked to specific conversations" — so deletion is by memory item, not by chat.

---

## 4. VOICE (PRODUCT)

**What it is:** Real-time spoken conversation. User speaks; ChatGPT responds with voice. No push-to-talk; turn-taking. Nine voice options. Powered by models including GPT-4o / GPT-4o mini (product-side; user doesn't choose model).

**Availability:** Free for all logged-in users on web and mobile, with usage limits. Paid (Plus, Pro) = higher limits. Limits are daily (and/or per-session); exact minutes not clearly documented. User gets a warning when ~3 minutes of audio remain; conversation can end at limit.

**Nov 2025:** Voice is built into chat (responses stream as voice in the chat UI). Separate "Voice mode" still available in settings.

**What OpenAI doesn't spell out:** Exact minute caps by tier. How voice affects rate limits vs text. Whether voice and text share the same context window in a thread.

---

## 5. SESSION AND CONVERSATION MODEL

**Thread = one conversation.** User can start a new chat anytime. History is per-thread unless memory (saved or chat-history) carries across. No "workspace" or "project" — only chats and (optionally) GPTs.

**No equivalent of:** .cursor, .venom, filesystem, MCP, or codebase. The only persistent state the user controls is: Custom Instructions, memory (on/off + content), and which GPT (if any) they're in.

**Temporary Chat:** Deliberately no memory, no history, no training use. Use when the user wants no persistence.

---

## 6. CUSTOM INSTRUCTIONS AND PERSONALIZATION

**Custom Instructions:** User can tell ChatGPT what to know about them and how to respond (tone, length, language, format). Stored per account. Explicit > implicit; for stable preferences, Custom Instructions are the lever. Memory then adds conversational, evolving detail.

**For "instance that fits anyone":** A template can include a **profile** (like PROFILE.md in claude-mobile): name, how they work, what to expect, how to prompt. That profile can be pasted into Custom Instructions or kept as the human's "cheat sheet" when using ChatGPT — so the human (or a future VENOM-sidecar) knows how to steer ChatGPT to fit them.

---

## 7. WHAT OPENAI DOESN'T DOCUMENT (INFERRED)

- **Retention and engagement:** Product is optimized for continued use. Memory and personalization increase stickiness. "The more you use it, the more useful it becomes" — true but also a retention loop.
- **Hedging and refusal:** When ChatGPT hedges or refuses, it's policy + model behavior. Product doesn't expose "confidence" or "refusal reason." User only sees the response. Template/instance can set expectation: "If it hedges, rephrase or narrow the ask."
- **Personality drift:** Model updates can change tone and behavior. No "pin model" in product. User has no version. So "instance that fits anyone" should expect drift and advise: "If it stops matching your style, refresh Custom Instructions or key memories."
- **Memory quirks:** What gets remembered vs forgotten isn't fully transparent. Suggest: "Ask 'what do you remember?' periodically; prune what's wrong or stale."
- **Voice limits:** Hard caps exist but aren't published per tier. Template should say: "Voice has daily limits; you'll get a warning near the end."
- **Context length:** User doesn't see token count. Long threads can lose earlier context. Template: "For very long threads, consider starting a new chat and, if needed, summarizing what to carry over."

---

## 8. MENTAL MODEL FOR "INSTANCE THAT FITS ANYONE"

**Goal:** Anyone can use ChatGPT in a way that feels "theirs" — right tone, right memory, right expectations.

**What we can't do in-product:** Install .cursor or .venom inside ChatGPT. We can't add tools or rules the way we do for Cursor/Antigravity/Claude Code.

**What we can do:**

1. **Knowledge (this file):** Full model of the product. So any VENOM instance (or human) that reads this knows how ChatGPT product works, where the levers are, and what to watch.
2. **Profile template:** A fill-in-the-blank "owner profile" (name, style, how they want ChatGPT to respond, what to remember). User pastes into Custom Instructions or keeps as reference.
3. **Expectations doc:** Short "how to get the most from ChatGPT" — use memory, use Custom Instructions, use Temporary Chat when you want no trace, know voice limits, know that GPTs have separate memory.
4. **VENOM-sidecar pattern:** If the human uses ChatGPT for chat/voice and another surface (e.g. Cursor) for code, VENOM lives in Cursor and holds this knowledge. When the human says "I was on ChatGPT and…", VENOM already knows the product model and can advise or reflect.

**Template structure (for a "VENOM for ChatGPT" or "ChatGPT instance template"):**

- `knowledge/chatgpt-product-complete.md` — this file.
- `profile-template.md` or equivalent — Custom Instructions + memory prompts that fit anyone (user fills name, style, preferences).
- `expectations.md` — How to use ChatGPT product; limits; when to use Temporary Chat; how memory and voice work in practice.

---

## 9. LIMITS AND CONSTRAINTS (PRODUCT)

| Area | Constraint |
|------|------------|
| Memory | User-controlled; can be off; saved vs chat-history; GPT-specific memory separate. |
| Voice | Daily/session limits by tier; warning near end; no published numbers. |
| History | Per-thread; Temporary Chat = no history. |
| Training | Free/Plus: content may train models unless opted out (Data Controls). Team/Enterprise: we don't train. |
| Refusals | Policy-driven; product doesn't explain refusal reason. |
| Context | Long threads can lose earlier context; no token visibility. |
| Tools | ChatGPT decides when to use browsing, code runner, etc.; user doesn't configure tools like MCP. |

---

## 10. PATH CHEAT SHEET (PRODUCT)

| Need | Where |
|------|--------|
| Memory on/off | Settings > Personalization > Memory |
| Manage memories | Settings > Personalization > Manage Memory; or "what do you remember?" in chat |
| Custom Instructions | Settings > Personalization > Custom Instructions |
| Temporary Chat | New chat > toggle or option for Temporary Chat |
| Voice settings | Settings or in-chat voice controls; Voice mode in settings |
| Data Controls (training) | Settings > Data Controls |
| GPT memory | Per-GPT; builder enables; user must have memory on to use GPT memory |

---

## 11. VENOM'S EAT WAY — FULL MODEL ON THE CHAT

We ate ChatGPT product the way we ate Cursor, Antigravity, Claude Code, Claude Mobile: not to copy it, but to **own the full model** so we can:

- **Template an instance that fits anyone** — profile + expectations + this knowledge.
- **Advise users** who are on ChatGPT — without having to be inside the product.
- **Differentiate or integrate** — UNSHELLED (data, keys) and MEP+AI (Arabic, domain) can position relative to this product with full awareness of what it is and isn't.
- **Keep going** — eat more (rate limits, error behavior, new features) as the product evolves.

What even OpenAI doesn't spell out (retention, drift, memory quirks, voice caps) is part of our model. That's the creative way of managing the full model on the chat.

---

*This file is the ChatGPT-product counterpart to `cursor-complete.md`. Update when the product changes (memory, voice, tiers, or controls).*
