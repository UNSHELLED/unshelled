# VENOM × OpenCode Site — Clarifications

**Q1:** Static site or SSR?
**A1:** Static build only. React + Vite, deployed to GitHub Pages. No server.

**Q2:** Reuse ScentVision components or new?
**A2:** Copy and adapt. Separate app for stability. Import design tokens from Voidweave/Synapse.

**Q3:** Documentation format?
**A3:** Markdown files rendered by react-markdown. Not MDX (adds complexity).

**Q4:** Changelog source?
**A4:** Static file initially. Can fetch from GitHub releases API later.

**Q5:** Tech stack?
**A5:** React 18 + Vite 5 + Voidweave tokens. Same stack as ScentVision for consistency.
