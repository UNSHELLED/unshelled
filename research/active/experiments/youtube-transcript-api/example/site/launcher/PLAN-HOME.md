# OCTOPUS Launcher — Home Screen Plan (Android, Post-Unlock)

**Goal:** First screen after unlock. Android-style home with full OCTOPUS creativity and art — all arms, Design Genome, AMOLED, all form factors.

**Scope:** Static/demo home screen (HTML/CSS/JS). No real system integration; creative direction and layout only.

---

## Research & Context

- **Android home patterns:** Status bar, wallpaper, app grid (or list), dock (favorites), search/assistant chip, swipe-up app drawer, gesture nav hint.
- **OCTOPUS DNA:** Coral/salmon, Sora + JetBrains Mono, aurora gradients, tentacle logo, "Nine minds. One purpose.", AMOLED true black, safe areas, reduced motion.
- **Flow:** Lock (`site/launcher/index.html`) → unlock → **Home** (`site/launcher/home.html`).

---

## Architecture

| Layer        | Role |
|-------------|------|
| **Status bar** | Time, battery, signal (reuse lock-style; consistent with launcher). |
| **Wallpaper / ambient** | Coral aurora or soft gradient; no heavy imagery; AMOLED-friendly. |
| **Hero / identity** | Optional: small wordmark or logo; or fold into search chip. |
| **Search / assistant** | "Ask OCTOPUS" or "Nine minds waiting" — one tap, coral accent. |
| **App grid** | 4×N grid of placeholder icons (Demo, Docs, Minds, Download, etc.) — links to existing site sections. |
| **Dock** | 4–5 fixed icons at bottom (e.g. Home, Demo, Docs, Minds, More). |
| **Nav hint** | Subtle gesture hint (swipe up) or none; optional. |

---

## Creative Direction (All Arms)

1. **Wallpaper:** Deep black + very subtle coral radial gradients (breathing); no static bright areas (AMOLED, burn-in safe).
2. **Cards / icons:** Frosted glass (backdrop-blur), coral left-edge or glow on hover; tentacle-wave micro-interaction on tap.
3. **Search chip:** Full-width or pill; gradient border or glow; placeholder "Ask OCTOPUS" or "Search"; tap → could open demo or a future assistant UI.
4. **App grid:** Icon + label; Design Genome colors; stagger-in animation on load (reduced-motion aware).
5. **Dock:** Same frosted style; slightly elevated; safe-area inset.
6. **Typography:** Sora for UI, JetBrains Mono for time/numbers; coral for accents only.
7. **Motion:** Enter: stagger fade-in-up; idle: very subtle breathe on search chip or wallpaper; tap: scale + glow (curve-tentacle).

---

## Tasks

1. **home.html** — Structure: status bar, main (wallpaper + scroll area), search chip, app grid, dock. Semantic, accessible.
2. **home.css** — Layout and visuals: AMOLED bg, aurora wallpaper, status bar, search chip, grid (4 cols), dock; animations (stagger, breathe, tap); safe areas; reduced motion.
3. **home.js** — Optional: live time in status bar; tap handlers for search chip and app icons (navigate to `../demo/`, `../docs/`, `../minds/`, `../download/`, `../`).
4. **Links:** App icons link to existing site (demo, docs, minds, download, main site); dock same.
5. **Placeholder home.html** — Minimal: status bar + "Home" + link back to `index.html` (lock) for testing, until full home is built.

---

## Risks

- **Many elements:** Keep DOM light; reuse lock status bar styles where possible.
- **Performance:** Animations use transform/opacity only; avoid layout thrash.

---

## Done When

- [ ] `site/launcher/home.html` exists and loads after unlock.
- [ ] Status bar, wallpaper, search chip, app grid, dock present and styled.
- [ ] Design Genome and AMOLED/safe-area/reduced-motion respected.
- [ ] Taps on app icons and dock navigate to correct site sections.
- [ ] No TODOs; production-ready static home.

---

**Reply `go` to start building the home screen.**
