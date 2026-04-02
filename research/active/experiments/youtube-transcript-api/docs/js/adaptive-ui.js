/**
 * OCTOPUS Adaptive UI System
 * Adapts the interface based on user behavior
 * Reading speed, interaction style, depth preference
 */

class AdaptiveUI {
  constructor() {
    this.state = {
      readingSpeed: 'medium', // slow, medium, fast
      interactionStyle: 'mouse', // mouse, keyboard
      preferredDepth: 'standard', // minimal, standard, detailed
      timeOnPage: 0,
      scrollPattern: 'exploring', // exploring, scanning, searching
      engagement: 'normal' // low, normal, high
    };

    this.lastScrollY = 0;
    this.scrollDistance = 0;
    this.scrollStartTime = Date.now();
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    this.detectBehavior();
    this.applyAdaptations();
  }

  detectBehavior() {
    // Detect reading speed via scroll behavior
    if (typeof window !== 'undefined' && window.scrollManager) {
      window.scrollManager.register((scrollY) => {
        this.scrollDistance += Math.abs(scrollY - this.lastScrollY);
        this.lastScrollY = scrollY;

        const elapsed = Date.now() - this.scrollStartTime;
        if (elapsed > 3000) {
          // Calculate reading speed
          const speed = this.scrollDistance / elapsed;

          if (speed > 0.5) {
            this.state.readingSpeed = 'fast';
          } else if (speed < 0.2) {
            this.state.readingSpeed = 'slow';
          } else {
            this.state.readingSpeed = 'medium';
          }

          this.applyAdaptations();

          // Reset
          this.scrollStartTime = Date.now();
          this.scrollDistance = 0;
        }
      });
    }

    // Detect keyboard usage
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' || e.key.startsWith('Arrow')) {
        this.state.interactionStyle = 'keyboard';
        this.applyAdaptations();
      }
    }, { passive: true });

    // Detect mouse usage
    document.addEventListener('mousemove', () => {
      if (this.state.interactionStyle !== 'mouse') {
        this.state.interactionStyle = 'mouse';
        this.applyAdaptations();
      }
    }, { passive: true, once: true });

    // Track time on page
    setInterval(() => {
      this.state.timeOnPage += 1;

      // After 30 seconds, user is engaged - show detailed content
      if (this.state.timeOnPage === 30) {
        this.state.preferredDepth = 'detailed';
        this.state.engagement = 'high';
        this.applyAdaptations();
      }

      // After 10 seconds, moderate engagement
      if (this.state.timeOnPage === 10) {
        this.state.engagement = 'normal';
        this.applyAdaptations();
      }
    }, 1000);

    // Detect scroll pattern
    let lastScrollTime = Date.now();
    let scrollCount = 0;

    if (typeof window !== 'undefined' && window.scrollManager) {
      window.scrollManager.register(() => {
        const now = Date.now();
        const timeDiff = now - lastScrollTime;

        if (timeDiff < 100) {
          scrollCount++;
          if (scrollCount > 5) {
            this.state.scrollPattern = 'scanning'; // Fast scrolling
          }
        } else if (timeDiff > 2000) {
          this.state.scrollPattern = 'exploring'; // Slow, deliberate
          scrollCount = 0;
        }

        lastScrollTime = now;
      });
    }
  }

  applyAdaptations() {
    // Apply data attributes for CSS to use
    document.body.dataset.readingSpeed = this.state.readingSpeed;
    document.body.dataset.interactionStyle = this.state.interactionStyle;
    document.body.dataset.preferredDepth = this.state.preferredDepth;
    document.body.dataset.scrollPattern = this.state.scrollPattern;
    document.body.dataset.engagement = this.state.engagement;

    // Adjust animation speeds based on reading speed
    const root = document.documentElement;

    if (this.state.readingSpeed === 'fast') {
      root.style.setProperty('--duration-base', '200ms');
      root.style.setProperty('--duration-slow', '400ms');
    } else if (this.state.readingSpeed === 'slow') {
      root.style.setProperty('--duration-base', '500ms');
      root.style.setProperty('--duration-slow', '1000ms');
    } else {
      // Medium (default)
      root.style.setProperty('--duration-base', '300ms');
      root.style.setProperty('--duration-slow', '600ms');
    }

    // Show/hide progressive disclosure based on depth preference
    if (this.state.preferredDepth === 'detailed') {
      document.querySelectorAll('.progressive-disclosure').forEach(el => {
        el.classList.add('revealed');
      });
    }

    // Trigger adaptive event for other systems
    window.dispatchEvent(new CustomEvent('adaptive-ui-update', {
      detail: this.state
    }));
  }

  getState() {
    return { ...this.state };
  }

  destroy() {
    this.isInitialized = false;
  }
}

// Singleton instance (expose globally for classic script loading)
const adaptiveUI = new AdaptiveUI();
if (typeof window !== 'undefined') window.adaptiveUI = adaptiveUI;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => adaptiveUI.init());
} else {
  adaptiveUI.init();
}
