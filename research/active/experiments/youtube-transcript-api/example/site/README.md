# OCTOPUS Product Site

> Nine Minds. One Purpose. The definitive product site for OCTOPUS.

## Overview

This is the **OCTOPUS product site** — the user-facing documentation and marketing site for the adaptive AI coding companion for Cursor. The repo `docs/` folder is the **creative doc space** for contributors and deep material (findings, guides, research, pulse); this site is the product.

## Structure

```
site/
├── index.html              # Landing page
├── minds/
│   └── index.html          # 9-Minds interactive constellation
├── demo/
│   └── index.html          # Live command playground
├── docs/
│   ├── index.html          # Documentation hub
│   ├── quickstart/         # Getting started guide
│   ├── commands/           # Command references (/o, /d, /r)
│   ├── protocols/          # Protocol documentation
│   └── modes/              # Mode documentation
├── download/
│   └── index.html          # Installation page
├── css/
│   ├── variables.css       # Design tokens
│   ├── base.css            # Reset & typography
│   ├── components.css      # Reusable components
│   ├── layout.css          # Grid & layout
│   ├── animations.css      # All animations
│   └── pages/              # Page-specific styles
└── js/
    ├── core.js             # Shared utilities
    ├── particles.js        # Neural particle system
    ├── scroll-animations.js # Scroll effects
    └── demo-playground.js  # Command simulator
```

## Running Locally

No build step required. Simply open `index.html` in a browser.

For best results, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## Design System

### Colors

- **Primary:** Terracotta `#e07a5f`
- **Secondary:** Salmon `#ea8b72`
- **Background:** `#0a0a0b` → `#1a1a1d`
- **Text:** `#f0eeeb` → `#5a5856`

### Typography

- **Headings:** Sora (700-800)
- **Body:** Sora (400-500)
- **Code:** JetBrains Mono

### Spacing Scale

4px base (0.25rem increments)

## Features

- **Particle System:** WebGL neural connections
- **Scroll Animations:** CSS native with JS fallback
- **Interactive Demo:** Live command playground
- **Minds Constellation:** Clickable 9-brain visualization
- **Responsive:** Mobile, tablet, desktop
- **Accessible:** WCAG 2.2 AA compliant
- **Performance:** Optimized for Lighthouse 95+

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## Verification Checklist (10/10 Transformation)

When validating the site, confirm:

- **Performance:** FCP &lt; 1.2s, TTI &lt; 2.5s, Lighthouse &gt; 95
- **Foundation:** Unified scroll (scroll-manager), spatial grid in particles, observer reuse
- **Intelligence:** Mind indicator appears on interaction; adaptive UI (reading speed, keyboard); constellation scenarios on Minds page
- **Organic design:** Cards/separators/auroras; micro-interactions (ripples, connection lines, code pulse)
- **Content:** Home hero/examples/testimonials; docs decision helpers; demo realistic responses; download install + verification
- **Engagement:** Tutorial for first visit; personalization (theme, motion, saved docs); full footer + newsletter
- **Accessibility:** Skip link, focus-visible, aria-labels, `prefers-reduced-motion`; keyboard nav
- **Console:** 0 errors on load and during key flows

## Credits

Built for OCTOPUS — the adaptive AI coding companion.

∿ Nine minds. One purpose.
