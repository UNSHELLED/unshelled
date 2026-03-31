import { T, F } from "../theme/tokens.js";

export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=JetBrains+Mono:wght@300;400;500&display=swap');

      :root {
        --sv-focus: ${T.amber};
        --sv-void: ${T.void};
        --sv-bone: ${T.bone};
        --sv-nav-h-top: 70px; /* pill height 56 + padding 14 top */
        --sv-nav-h: var(--sv-nav-h-top);
        --sv-sidebar-w: 240px;
        --sv-spine-w: 220px;
        --sv-glass-bg: rgba(17, 17, 20, 0.85); /* T.void is #111114. This is an 85% opacity version */
        --sv-glass-blur: blur(24px);
        
        /* Typography overrides */
        --sv-font-sans: 'DM Sans', system-ui, -apple-system, sans-serif;
        --sv-font-mono: 'JetBrains Mono', ui-monospace, monospace;
      }

      @keyframes drift {
        0% { opacity: 0; transform: translateY(0) scale(0.5); }
        10% { opacity: 0.12; }
        90% { opacity: 0.04; }
        100% { opacity: 0; transform: translateY(-100vh) scale(1.6); }
      }
      @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }

      * { box-sizing: border-box; margin: 0; padding: 0; }
      html {
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
        height: 100%;
        background-color: var(--sv-void);
      }
      body {
        min-height: 100vh;
        min-height: 100dvh;
        overflow-x: hidden;
        background-color: var(--sv-void);
        color: var(--sv-ghost);
        font-family: var(--sv-font-sans);
        padding-left: env(safe-area-inset-left, 0px);
        padding-right: env(safe-area-inset-right, 0px);
        padding-bottom: env(safe-area-inset-bottom, 0px);
        margin: 0;
      }
      #root { min-height: 100%; overflow-x: hidden; }

      *::-webkit-scrollbar { width: 4px; height: 4px; }
      *::-webkit-scrollbar-track { background: transparent; }
      *::-webkit-scrollbar-thumb { background: ${T.mute}; border-radius: 2px; }
      ::selection { background: ${T.amber}25; color: ${T.bone}; }

      button {
        font-family: inherit;
        border: none;
        background: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }

      a {
        color: inherit;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
      }

      a:focus-visible,
      button:focus-visible,
      [role="button"]:focus-visible {
        outline: 2px solid var(--sv-focus);
        outline-offset: 2px;
      }

      code {
        font-family: var(--sv-font-mono);
        font-size: 11px;
        background: ${T.abyss};
        padding: 2px 6px;
        border-radius: 4px;
        color: ${T.amber};
        word-break: break-word;
        overflow-wrap: anywhere;
      }

      /* Fluid display / section headings */
      .sv-display-xl {
        font-family: var(--sv-font-sans);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.04em;
        font-size: clamp(2rem, 4.2vw + 1rem, 3.5rem);
        color: ${T.bone};
        margin: 0;
      }
      .sv-display-lg {
        font-family: var(--sv-font-sans);
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: -0.03em;
        font-size: clamp(1.5rem, 2.5vw + 0.85rem, 2rem);
        color: ${T.bone};
        margin: 0;
      }
      .sv-heading-card {
        font-family: var(--sv-font-sans);
        font-weight: 600;
        line-height: 1.3;
        font-size: clamp(1.05rem, 2.2vw + 0.6rem, 1.25rem);
      }

      .sv-chip-scroll {
        display: flex;
        gap: 6px;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        padding-bottom: 4px;
      }
      .sv-chip-scroll::-webkit-scrollbar { display: none; }
      .sv-chip-scroll > * { scroll-snap-align: start; flex-shrink: 0; }

      @media (hover: hover) {
        .hvr:hover { transform: translateY(-2px) !important; }
      }

      @media (prefers-reduced-motion: no-preference) {
        .hvr-touch:active { transform: scale(0.98); }
      }

      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        .scent-particle { animation: none !important; }
        .scent-pulse-anim { animation: none !important; }
        @media (hover: hover) {
          .hvr:hover { transform: none !important; }
        }
      }
    `}</style>
  );
}
