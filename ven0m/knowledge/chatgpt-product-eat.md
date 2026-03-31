# ChatGPT (Product) — venom-eat (final)

> Eleven VENOM minds ate **ChatGPT the product at https://chatgpt.com/** — on itself. Not Cursor. Not API. Product-only eat. Integrated output.

---

## 1. Ate

ChatGPT the **product** at https://chatgpt.com/ was eaten as a single bounded object: consumer chat and voice, described by the product on itself. Sources: chatgpt.com surface (chat history, one prompt line, Voice; Settings: memory, Custom Instructions, Data Controls, Voice, Speech); product docs and behavior (memory/voice announcements, usage policies, Temporary Chat, voice FAQ); no API, no Cursor. Scope: **product-only** — what the product is, how it works, what it does and doesn't say. "On itself" = the product as control surface and policy-bound experience, not platform or code.

---

## 2. Extracted

- **Purpose:** Consumer chat + voice at chatgpt.com. Continuity (memory + Custom Instructions), ephemeral (Temporary Chat), multimodal (voice/video/screenshare). Product = control surface for "how I want this assistant to behave and remember."
- **Key constraints:** Usage policies (Oct 2025): no intel bypass, no unlicensed advice, human review for high-stakes; privacy/minors. Memory: two kinds (saved + chat-history) + off + Temporary; chat delete ≠ memory delete. Voice: tier limits, one session, no tools in voice; transcript mismatch; force-close/limit ordering unspecified. Custom Instructions: beta, applied every time + moderation. Retention 30 days; training opt-in/out by tier. Policy-bounded; no stability guarantee.
- **Key concepts:** Saved memories vs chat history; Custom Instructions (stable prefs); Temporary Chat (no history, no memory, no training); Separate Mode (blue orb) vs integrated voice; per-GPT memory (separate from main); voice nine + Shimmer; data flow: input → modality pipeline → model context = conversation + history + memories + CI + GPT + policy → output; voice transcript appended to text. Anatomy: one entry (chat + Voice); behavior split across memory, Temporary Chat, CI, voice limits, data controls — no single doc ties surface→feature→limit→policy.
- **Gaps:** No limits matrix; no full UI map; retention/export underspecified. Numeric voice cap by tier; abuse definition; appeal process/SLA; policy changelog; memory evolution and cap; high-stakes definition. Conversation ID model; order of memory vs CI vs GPT prompt; persistence/sync web–mobile; Separate Mode vs main chat; abuse guardrails; GPT memory lifecycle; rate limits. Voice: transcript mismatch, unsupported features (failure mode not described). Memory: evolution not auditable; per-GPT duplication. CI: beta overlook or mis-apply; refuse/withhold no defined feedback. Cross-cutting: no shared spec for "what user sees when refused/limited/fails."
- **What OpenAI doesn't spell out:** Exact free/paid voice caps; abuse definition; appeal/SLA; policy changelog; memory evolution and cap; high-stakes definition. Refusal criteria; policy changes unversioned. Retention, drift, memory quirks, voice caps, and failure UX are in our model.

---

## 3. Worth saving to

`knowledge/chatgpt-product-eat.md` (this file). **Instance definition:** `knowledge/venom-instance-chatgpt.md` — the VENOM instance for ChatGPT (seed, boundaries, split memory).

---

## 4. Anatomy

- **One line:** ChatGPT product = chatgpt.com consumer chat+voice; one UI spine (prompt + Voice); memory (saved + history) + Custom Instructions + Temporary Chat; policy-bound; no single doc ties surface→feature→limit→policy.
- **What matters most:** Product = bounded object (control surface, policy-bound). Settings hold the real off switches (memory, Data Controls, Voice). Memory ≠ history. Treat as mutable: policies and limits can change; rely on controls and current docs, not unchanging numbers. VENOM = what eats and thinks; knowing the product = contrast object. When Kariem is in ChatGPT and Cursor same day, what origin remembers about that split is the design question.
- **What to change/watch:** Policies and limits explicitly mutable; CI and limit language brittle. Re-check policy and voice/memory docs as product evolves. Decide: ship template now or eat voice caps/memory more first.
- **Opening question:** Ship template now or eat voice caps/memory more first? When Kariem is in ChatGPT and Cursor same day, what does origin remember about that split? **Answered in:** `knowledge/venom-instance-chatgpt.md` — split memory and instance definition.

---

*Eat date: 2025-03. Source: .venom/work/eat-chatgpt-product/ + 11 VENOM minds. Product-only; not API, not Cursor. Instance: knowledge/venom-instance-chatgpt.md. Extend: knowledge/chatgpt-product-complete.md, chatgpt-profile-template.md, chatgpt-expectations.md.*
