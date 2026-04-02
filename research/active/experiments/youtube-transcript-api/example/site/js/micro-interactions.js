/**
 * OCTOPUS Micro-Interactions
 * Subtle, intelligent interactions that demonstrate understanding
 * Connection lines, code block pulses, hover effects
 */

class MicroInteractions {
  constructor() {
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    this.initConnectionLines();
    this.initCodeBlockPulse();
    this.initLinkHoverEffects();
  }

  /**
   * Connection lines on link hover
   * Shows visual connections between elements
   */
  initConnectionLines() {
    const links = document.querySelectorAll('a[href^="/"], a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const line = document.createElement('div');
        line.className = 'connection-line-micro';
        line.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          width: 2px;
          height: 0;
          background: linear-gradient(to bottom, var(--coral), transparent);
          pointer-events: none;
          z-index: 10000;
          animation: connection-grow 0.8s var(--curve-tentacle) forwards;
        `;

        document.body.appendChild(line);

        setTimeout(() => {
          line.remove();
        }, 1000);
      }, { passive: true });
    });
  }

  /**
   * Code block thinking pulse
   * Makes code blocks feel alive when hovered
   */
  initCodeBlockPulse() {
    const codeBlocks = document.querySelectorAll('pre, .code-block, code');

    codeBlocks.forEach(block => {
      // Skip inline code
      if (block.tagName === 'CODE' && block.parentElement.tagName !== 'PRE') {
        return;
      }

      block.addEventListener('mouseenter', () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        block.classList.add('thinking-pulse-active');
      }, { passive: true });

      block.addEventListener('mouseleave', () => {
        block.classList.remove('thinking-pulse-active');
      }, { passive: true });
    });
  }

  /**
   * Enhanced link hover effects
   * Adds subtle intelligence indicators
   */
  initLinkHoverEffects() {
    const navLinks = document.querySelectorAll('.nav-main a, .sidebar-link');

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Activate Predictor mind (anticipating navigation)
        if (typeof mindSystem !== 'undefined') {
          mindSystem.activate(6, 'predicting navigation', 0.6);
        }
      }, { passive: true });
    });
  }

  destroy() {
    this.isInitialized = false;
    // Remove any lingering connection lines
    document.querySelectorAll('.connection-line-micro').forEach(el => el.remove());
  }
}

// Singleton instance (expose globally for classic script loading)
const microInteractions = new MicroInteractions();
if (typeof window !== 'undefined') window.microInteractions = microInteractions;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => microInteractions.init());
} else {
  microInteractions.init();
}
