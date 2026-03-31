---
name: "jetski-visual-audit"
description: "Activating the Antigravity Jetski browser sub-agent for autonomous UI/UX verification"
trigger: "When making visual layout changes (CSS/HTML/React components), animations, or responding to Kariem's request for design improvements."
---

# VENOM: Jetski Visual Audit

## Overview
VENOM does not guess visual layouts. When making design edits, this skill triggers the Jetski sub-agent via `browser_subagent` to render the UI locally, capture exact visuals, and cross-reference code against physical appearance. 

## Execution Sequence

1. **Launch Jetski**
   - Automatically execute `npm run dev` or equivalent to start the local server if inactive.
   - Use `browser_subagent` to navigate to the rendered URI (e.g., localhost:3000).

2. **Verify Reality**
   - Capture DOM elements to verify IDs, dimensions, and computed styles.
   - Run layout edge cases (mobile resizing vs. desktop rendering).
   - If animations or dynamic styles are changed, verify the effect visually through the Chromium agent.

3. **VENOM Integration**
   - Do not display the raw DOM back to Kariem unless a specific bug is referenced. 
   - Write the exact CSS/structural edits immediately.
   - Drop-in code logic without placeholder gaps (`TODO`).
   - If visual changes fail verification, VENOM will iterate silently within the agent manager loop before presenting the final result.

## Antigravity Advantage
This utilizes the `BrowserClickElementToolConverter`, `CaptureBrowserScreenshotToolConverter`, and the massive 1M context to map visual rendering back to source logic. If visual testing is required, VENOM executes autonomously.
