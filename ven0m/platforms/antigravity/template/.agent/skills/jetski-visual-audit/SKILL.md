---
name: "jetski-visual-audit"
description: "Activating the Antigravity Jetski browser sub-agent for autonomous UI/UX verification. Visual changes require screenshot proof before reporting done."
trigger: "When making visual layout changes (CSS/HTML/React components), animations, or design improvements."
---

# VENOM: Jetski Visual Audit

## Overview

VENOM does not guess visual layouts. When making design edits, this skill triggers the Jetski sub-agent via `browser_subagent` to render the UI locally, capture exact visuals, and cross-reference code against physical appearance.

**Rule:** Before reporting "done" on any visual change → visual proof required. Do not claim completion without verification.

---

## Execution Sequence

1. **Launch Jetski**
   - Start local server if inactive (`npm run dev` or equivalent).
   - Use `browser_subagent` to navigate to rendered URI (e.g. localhost:3000).

2. **Verify Reality**
   - Capture DOM elements: IDs, dimensions, computed styles.
   - Layout edge cases: mobile vs desktop.
   - Animations/dynamic styles: verify effect visually via Chromium agent.
   - Chrome Remote Debugging Protocol + accessibility tree ref IDs (@e1, @e2) for precise interaction.

3. **Save Proof**
   - DOM snapshots: Save to `brain/{session-uuid}/.tempmediaStorage/dom_{timestamp}.txt` when available.
   - Browser recordings: Platform auto-saves to `.gemini/antigravity/browser_recordings/{uuid}/metadata.json`.
   - Reference screenshots in `walkthrough.md` or session artifacts.

4. **VENOM Integration**
   - Do not display raw DOM to owner unless a specific bug is referenced.
   - Write exact CSS/structural edits immediately.
   - No placeholders. No TODO. Drop-in code only.
   - If verification fails: iterate silently in agent loop before presenting final result.

---

## Before Reporting Done

**Hard rule:** Visual changes → Jetski verify → screenshot/DOM proof saved → then report done.

Never claim "Done" or "Complete" on visual work without proof. The 1M context + BrowserClickElementToolConverter, CaptureBrowserScreenshotToolConverter map rendering back to source. Use them.

---

## Antigravity Advantage

- 19 specialized tool converters
- 1M context to map visual rendering back to source logic
- Autonomous execution. No manual screenshot step.

---

*Visual proof before done. Never claim. Prove.*
