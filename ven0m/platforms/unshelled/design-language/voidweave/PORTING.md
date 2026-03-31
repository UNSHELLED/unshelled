# Voidweave — porting to another UI stack

Voidweave is **tokens + patterns**, not a framework. Port = load `tokens.json`, map to your theme layer, re-apply patterns from `PATTERNS.md`, and enforce the **non-negotiables** in `README.md`.

**Version:** pin to `tokens.json` → `version` (currently **1.2.0**). Breaking changes bump major/minor per semver for palette/type.

---

## 1. Load the JSON

- **Bundlers (Vite/Webpack/Next):** `import tokens from './voidweave/tokens.json'` — new keys (`meta`, `breakpoints`, `layout`, …) are safe; only `palette`, `typography`, `semantic` are required for theming.
- **Node / scripts:** `JSON.parse(fs.readFileSync('tokens.json','utf8'))` — useful for CI checks (contrast, token presence).
- **Design handoff:** Figma Variables or Tokens Studio — map `palette` + `radii` + `motion` manually or via export script.

---

## 2. GitHub & static sites

- **GitHub README:** link to this folder or embed a small table of core hex values; keep prose in `README.md` here as the single philosophy source.
- **GitHub Pages / static:** copy `palette` to `:root { --void: ... }`; load Google Fonts matching `typography` or self-host for privacy.
- **Social / Open Graph:** void background, bone headline, **one** accent (amber or pulse) — matches brand restraint (§G.2).
- **In-product “repo home” (ScentVision `/github`):** optional pattern when you want OSS-credible layout on your own domain. Reuse `layout.repoPreviewContentMax`, follow `PATTERNS.md` → *Repo-preview route*; hard-require outbound links for commit history so you never ship fake metrics.

---

## Tailwind CSS

1. Add colors from `palette` → `theme.extend.colors`, e.g. `voidweave.void`, `voidweave.bone`.
2. Add font families from `typography` → `theme.extend.fontFamily` (`voidweave-display`, `voidweave-sans`, `voidweave-mono`).
3. Add `minHeight` / min touch utilities using `layout.touchTargetMinPx` (44px).
4. Encode breakpoints from `breakpoints.*` in `theme.screens` if you want parity with ScentVision.
5. Use `motion-safe:` / `motion-reduce:` for reduced-motion parity with `motion.reducedMotionMedia`.
6. Safe area: `pl-[env(safe-area-inset-left)]` etc. on root layout.

---

## shadcn / Radix

- Map `bone` → foreground, `void` → background, `surface`/`edge` → card/border layers.
- Keep **one** accent slot for `pulse` (success / live) and `amber` for focus rings (`semantic.focusRing`).
- Override default zinc/slate — Voidweave depth is specific; do not accept generic neutrals.

---

## React Native / Expo

- Colors: hex / rgba from `palette`.
- Fonts: embed Newsreader, DM Sans, JetBrains Mono (verify licensing for app bundles).
- Safe area: `SafeAreaView` + insets.
- Particles: lightweight canvas or static gradient — performance gate; respect reduced motion.

---

## Plain HTML + CSS

- Copy palette + radii to `:root` custom properties.
- Reuse fluid heading scale from ScentVision `GlobalStyles` or recreate with same `clamp()` intent.
- Class names (`sv-display-xl`, …) can be renamed — preserve **ratios** and motion rules.

---

## Vue / Svelte / Solid / Astro

Same as React: global style from tokens, composable/store for breakpoints using `breakpoints` object, identical a11y rules.

---

## Next.js (App Router)

- Load tokens in `layout.tsx` theme provider or CSS variables in `globals.css`.
- Prefer self-hosted fonts via `next/font` with families matching `typography`.

---

## Checklist before you call it Voidweave

- [ ] `tokens.json` `version` noted in consuming repo README or package.
- [ ] Dark-first default.
- [ ] Focus visible, not removed.
- [ ] Reduced motion respected for decorative animation.
- [ ] `layout.touchTargetMinPx` respected on primary actions.
- [ ] Inference product: honesty path present (`README.md` non-negotiable #2).

If you skip the last item for a non-inference product, use **“Voidweave-derived”** so the honesty pact is not implied.

---

## Sync strategy (monorepos)

- **Single source:** keep `design-language/voidweave/tokens.json` canonical; apps import relatively (as ScentVision does).
- **Downstream forks:** on Voidweave major bump, grep consuming repos for hard-coded hex duplicates and reconcile.
