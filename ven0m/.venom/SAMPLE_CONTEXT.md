# Project Context

> VENOM reads this on `/venom?`. One read = full orientation.
> Fill once. Keep current. What matters, not novels.

---

## Identity

- **Owner:** [Your name]. [Timezone]. [Languages spoken].
- **Project:** [Name]. [What it does in one sentence].
- **Domain:** [Industry / problem space].

**Example filled:**
```
- **Owner:** Alex Chen. PST. English, Mandarin.
- **Project:** TradeFlow. B2B wholesale marketplace connecting manufacturers to retailers.
- **Domain:** Wholesale commerce, logistics, B2B payments.
```

---

## Stack

- **Frontend:** [Framework, CSS, build tool]
- **Backend:** [Language, framework]
- **Database:** [Type, name]
- **Key tools:** [APIs, services, anything external]

**Example filled:**
```
- **Frontend:** Next.js 14 (App Router), Tailwind CSS, shadcn/ui components
- **Backend:** Node.js, Express, tRPC for type-safe APIs
- **Database:** PostgreSQL (via Prisma), Redis for sessions/caching
- **Key tools:** Stripe (payments), AWS S3 (file storage), Twilio (SMS), SendGrid (email)
```

---

## Structure

```
[Paste key directory tree here — 5–10 lines. What's where.]
```

**Example filled:**
```
src/
  app/              # Next.js app router (page.tsx, layout.tsx)
  components/       # UI components (ui/ for shadcn, features/ for domain)
  lib/              # Utilities, custom hooks, helpers
  server/           # tRPC routers, middleware, external API clients
  db/               # Prisma schema, migrations, seed scripts
  types/            # Shared TypeScript types
  styles/           # Global CSS, Tailwind config
```

---

## Current Focus

> Update this every time the active work changes.

**What's being built:** [Feature or fix in flight]
**Stage:** [Exploring / Planning / Building / Reviewing / Done]
**Key constraint:** [The one thing that can't be broken]

**Example filled:**
```
**What's being built:** Multi-tenant order management system
**Stage:** Building (core CRUD flows working, polishing edge cases)
**Key constraint:** Never break existing order calculations — customers depend on them for billing.
```

---

## Conventions

- [Code style or naming rule that matters]
- [Testing or deployment convention]
- [Anything the agent should never break]

**Example filled:**
```
- Components use named exports only (no default exports)
- API routes use kebab-case (/api/order-items, not /api/orderItems)
- All database queries go through tRPC routers — never direct Prisma calls from components
- Tests live next to source files (Button.tsx + Button.test.tsx)
- All API errors return structured format: { error: string, code: string }
```

---

## Navigation

> Where to go for what. Fill if project has a docs/ system.

| Need | Go to |
|------|-------|
| [Module A] | [path/to/docs or file] |
| [Module B] | [path/to/docs or file] |
| Design system | `.cursor/rules/[project]-design.mdc` |

**Example filled:**
```
| Need | Go to |
|------|-------|
| Order business logic | src/server/routers/order.ts |
| Payment processing | src/server/routers/payment.ts |
| Inventory sync | src/server/routers/inventory.ts |
| UI components | src/components/ui/ |
| Database schema | src/db/schema.prisma |
| Environment config | .env.example |
```

---

*Keep this under 80 lines. If it grows longer, split navigation to `.venom/work/ACTIVE.md`.*
