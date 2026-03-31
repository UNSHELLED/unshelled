# Voidweave — interaction, layout & UX patterns

Patterns match the **ScentVision** reference app (`platforms/unshelled/scentvision/web/`). Re-implement in any stack; **do not** assume React. Numeric tokens mirror `tokens.json` where applicable.

---

## VENOM soul → UI translation

VENOM is *disposition*; Voidweave is *surface*. When in doubt, map like this:


| VENOM idea               | UI obligation                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No fabricated confidence | No fake metrics, mock “live” badges, or precision chrome without a real backend state.                                                                            |
| Truth over comfort       | Prominent **limits** / uncertainty for inference products; rose token for human-facing warnings, not panic red everywhere.                                        |
| Sparse pulse             | **Pulse** green only where something is *actually* verified, live, or honest — cap uses per viewport (`tokens.json` → `inferenceProduct.pulseBudgetPerViewport`). |
| Proof over performance   | Mono + amber for copyable API/schema surfaces; paragraphs stay sans.                                                                                              |
| Long-game loyalty        | Readable contrast (AA), keyboard paths, reduced motion — no “looks cool” at the expense of fatigue.                                                               |


---

## Breakpoints (canonical)


| Name               | Condition             | Use                                                    |
| ------------------ | --------------------- | ------------------------------------------------------ |
| `compact`          | width ≤ 389px         | Narrow phones; tighter horizontal padding              |
| `mobile`           | width ≤ 639px         | Single column, drawer nav                              |
| `tablet`           | 640px – 1023px        | Transitional grid                                      |
| `desktop`          | ≥ 1024px              | Full nav row                                           |
| `landscapeCompact` | see media query below | Short phone landscape; reduce vertical section padding |


**Landscape query (matches reference `useBreakpoint.js`):**

`(max-height: 500px) and (orientation: landscape) and (max-width: 896px)`

---

## Section shell

- **Max width:** `min(960px, 100%)` for prose and marketing columns — avoids over-wide lines on ultrawide (`tokens.json` → `layout.sectionContentMax`).
- **Repo preview (`/github` on ScentVision):** `layout.repoPreviewContentMax` (default `min(1200px, 100%)`) — wider chrome so file table + README mimic OSS home without stretching line length past readability inside the README column (~800px inner max).
- **Horizontal padding:** scale with `compact` / `mobile` / `tablet` / `desktop` (reference: `web/src/layout/sectionStyle.js`).
- **Interior pages:** top padding includes fixed nav: `calc(var(--sv-nav-h, 56px) + Npx)` so first line never hides under the bar (`layout.navHeightFallbackPx` fallback when JS has not measured yet).
- **Z-index:** content above particle field (e.g. `z-index: 2` on sections); nav fixed high (e.g. `100`).

**App-specific CSS variable prefix:** ScentVision uses `--sv-*`. Another product should rename the prefix but **keep** measured nav height + focus tokens pattern.

---

## Global CSS variables (reference)


| Variable     | Role                                                                       |
| ------------ | -------------------------------------------------------------------------- |
| `--sv-focus` | Focus ring → amber                                                         |
| `--sv-void`  | Page background reference                                                  |
| `--sv-bone`  | Primary text reference                                                     |
| `--sv-nav-h` | Measured nav height (`ResizeObserver`) — padding and overlays key off this |


---

## Typography classes (reference)


| Class              | Use                                                                      |
| ------------------ | ------------------------------------------------------------------------ |
| `.sv-display-xl`   | Hero / largest claim — fluid `clamp()`                                   |
| `.sv-display-lg`   | Section titles                                                           |
| `.sv-heading-card` | Card titles                                                              |
| `.sv-chip-scroll`  | Horizontal chip/scene row: scroll-snap, hidden scrollbar, touch momentum |


Rename classes when porting; **keep scale ratios**, not necessarily the `sv-` prefix.

---

## Radii & motion (ScentVision spec §G.4)


| Token      | px  | Typical use              |
| ---------- | --- | ------------------------ |
| `radii.sm` | 4   | Inline code, small chips |
| `radii.md` | 8   | Buttons, inputs          |
| `radii.lg` | 12  | Cards, panels            |


- **Reveal easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (`tokens.json` → `motion.revealEasing`).
- **Stagger:** ~`motion.staggerMs` between sibling reveals (decorative only; skip when reduced motion).

---

## Motion ethics

- **Particles:** slow drift, low opacity — atmosphere, not distraction; disable under reduced motion.
- **Hover lift:** `.hvr` only when `(hover: hover)` — no fake hover on touch devices.
- **Touch press:** `.hvr-touch:active` scale under `prefers-reduced-motion: no-preference`.
- **Reduced motion:** disable particle keyframes and decorative pulse; `scroll-behavior: auto`.

---

## Navigation shell

- Fixed top, blur + translucent void background.
- Logo / wordmark → home.
- Primary routes: sparse active indicator (underline or inset shadow on pulse token).
- Mobile: full-width drawer below nav; backdrop; **Escape** closes; **scroll lock** on `body`; restore focus to menu button on close.
- First focusable item in drawer receives focus when opened.

---

## Tags & labels

Small uppercase labels (mono or tracked sans) with **one** semantic color per section (amber / rose / pulse / teal) — signals **category**, not brand rainbow.

---

## Code in prose

Inline `code`: mono, small, muted background, **amber** text — reads as “copyable surface,” not decoration.

---

## Inference-first UX (ScentVision)

- **Journey:** hero → capability → honesty (limits / guardrails) → API/schema proof → contribute/roadmap. Never bury limits behind login-only.
- **Schema truth:** when showing JSON examples, reflect `**limits`** field presence as normative, not optional marketing.
- **Molecule / synesthetic motifs (§G.6):** 6–8 nodes, muted; optional waveform; sparse particles (15–20). Restraint = credibility in a hype-prone category.

---

## GitHub / marketing surfaces

- **README / docs:** lead with problem + honesty boundary; Voidweave visuals support the claim, not replace it.
- **Repo banner:** optional; keep void background + bone text + single pulse or amber accent (see product spec asset path).
- **Screenshots:** show real copy states (loading, error, limits visible), not only hero perfection.

### Repo-preview route (ScentVision `/github`)

A **native** page that borrows **information architecture** from GitHub (tabs → Code/Issues/PRs, file list, README body) but **Voidweave chrome**: `abyss` panel, `edge` borders, teal for navigational proof (paths), amber for inline code, rose band for **inference honesty gate**, pulse only for **active tab**, **primary outbound CTA** (“Open on GitHub”), and at most one extra truth tick — **≤ 3 pulse hits per viewport** (`tokens.json` → `inferenceProduct.pulseBudgetPerViewport`).


| Rule                             | Why                                                                                                                    |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Disclose “not GitHub”            | Avoid impersonation; first screen copy states this is UNSHELLED/ScentVision interpretation.                            |
| Link out for timestamps / counts | Never fabricate commit counts or “live” activity; use `github.com` for history.                                        |
| Tab rows link externally         | Issues, Actions, etc. open the real repo — proof, not theater.                                                         |
| README panel                     | Restate brand hierarchy from `brandHierarchy` in JSON; map VENOM soul lines to UI bullets (confidence, limits, proof). |
| Mobile                           | File grid stacks; horizontal scroll only if needed; keep 44px+ targets on toolbar pills and CTA.                       |


---

## Checklist (self-audit)

- Dark-first default
- Focus visible (amber ring), not removed
- Reduced motion path for decorative animation
- 44px+ touch targets on primary actions
- Safe area insets on root
- Pulse budget respected
- For inference products: limits / uncertainty visible somewhere in the main journey
- If `/github` or repo-preview: disclaimer visible; no fabricated commit counts; outbound links for history

