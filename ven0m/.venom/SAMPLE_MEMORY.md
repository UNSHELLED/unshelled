# Memory

Cross-session truth. Decisions, patterns, corrections.
VENOM reads before answering on topics that reference past work.

---

## Decisions

> Choices made. Why. What they replaced.

<!-- Format: [YYYY-MM-DD] Decision: [what]. Reason: [why]. -->

**Example entries:**

[2025-02-15] Decision: Use Zod for all validation, not class-validator.
Reason: Zod has better TypeScript inference, smaller bundle size, and compiles to JSON schema for OpenAPI docs.
Replaces: class-validator experiments in src/validation/

[2025-02-20] Decision: No React Context for global state.
Reason: Caused 3 separate re-render issues in production. Using Zustand instead with selective subscriptions.
Replaces: contexts/ folder (deprecated, will migrate existing usages).

[2025-02-25] Decision: Use BullMQ for all background jobs, not node-cron.
Reason: Need job persistence, retry logic, and horizontal scaling when we add workers.
Replaces: Cron jobs in src/cron/

[2025-03-01] Decision: Stick with PostgreSQL, don't migrate to MongoDB for product catalog.
Reason: Product data has clear relationships (categories, variants, inventory). JSONB handles flexible attributes fine.
Replaces: MongoDB evaluation in spike/mongodb-test/

---

## Patterns

> Conventions discovered in this codebase or working style.

<!-- Format: [YYYY-MM-DD] Pattern: [what]. Context: [where it applies]. -->

**Example entries:**

[2025-02-18] Pattern: All API errors return { error: string, code: string }.
Context: Standardized error handling across all tRPC routers. Frontend switches on code for user-facing messages.

[2025-02-22] Pattern: Loading states use skeleton components, not spinners.
Context: Better perceived performance in product lists. Skeletons in src/components/ui/skeleton.tsx

[2025-02-28] Pattern: Database queries use transaction wrapper for multi-table writes.
Context: Ensures consistency in order creation (orders + order_items + inventory updates).

[2025-03-02] Pattern: External API calls always implement circuit breaker.
Context: Prevents cascade failures. Implemented with opossum npm package.

---

## Corrections

> "Never do X again" — specific, hard rules.

<!-- Format: [YYYY-MM-DD] Never: [X]. Why: [Y]. -->

**Example entries:**

[2025-02-25] Never: Use dangerouslySetInnerHTML without DOMPurify sanitization.
Why: XSS risk on user-generated content (product descriptions from supplier feeds).

[2025-03-01] Never: Direct database queries outside tRPC routers.
Why: Bypasses auth middleware, audit logging, and error handling. Always use the API layer.

[2025-03-05] Never: Commit .env files, even to private repos.
Why: Keys have been leaked twice. Use 1Password or Doppler for secrets.

[2025-03-10] Never: Use floating point for currency calculations.
Why: Precision loss on large orders. Always use integer cents (stripe pattern).

---

## Preferences

> How the owner likes to work with VENOM on this project.

<!-- Format: [YYYY-MM-DD] Preference: [X]. -->

**Example entries:**

[2025-02-10] Preference: Keep code examples in responses under 60 lines. Break into multiple blocks if needed.

[2025-02-28] Preference: When debugging, always show the fix first, then explanation.

[2025-03-05] Preference: Proactively suggest edge cases I might have missed.

[2025-03-08] Preference: Use TypeScript strict mode patterns — no `any` types even in examples.

---

*Max ~150 lines. When full: summarize oldest entries, keep the signal, drop the noise.*
*Add via `/venom remember: [X]` or proactive offer after key decisions.*
