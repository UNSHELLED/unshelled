/**
 * OCTOPUS Scroll-Driven Animations
 * Progressive enhancement for scroll-based animations
 * Optimized with single scroll listener
 */

class ScrollAnimations {
  constructor() {
    // Check for reduced motion preference
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check for native scroll-driven animations support
    this.hasNativeSupport = CSS.supports('animation-timeline', 'view()');

    if (this.prefersReducedMotion) {
      this.revealAllImmediately();
      return;
    }

    // Cache DOM elements
    this.header = document.querySelector('.header');
    this.progressBar = document.querySelector('.reading-progress');
    this.parallaxElements = document.querySelectorAll('[data-parallax]');

    // Scroll state
    this.ticking = false;
    this.isDestroyed = false;

    // Bind methods for cleanup
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);

    // If no native support, use IntersectionObserver fallback
    this.observer = null;
    if (!this.hasNativeSupport) {
      this.initFallback();
    }

    // Initialize single scroll handler
    this.initScrollHandler();

    // Initial update
    this.updateAll();
  }

  /**
   * Reveal all animated elements immediately for reduced motion
   */
  revealAllImmediately() {
    document.querySelectorAll('[data-reveal], [data-hero-reveal], .scroll-fade-in, .scroll-fade-left, .scroll-fade-right, .scroll-scale').forEach(el => {
      el.classList.add('revealed');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  /**
   * Fallback using IntersectionObserver for browsers without native support
   */
  initFallback() {
    const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-left, .scroll-fade-right, .scroll-scale');

    if (animatedElements.length === 0) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
      }
    );

    animatedElements.forEach(el => this.observer.observe(el));
  }

  /**
   * Single unified scroll handler for all scroll-based effects
   * Uses scrollManager when available to avoid multiple scroll listeners
   */
  initScrollHandler() {
    if (window.scrollManager) {
      window.scrollManager.register(() => this.handleScroll());
    } else {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    }
    window.addEventListener('resize', this.handleResize, { passive: true });
  }

  handleScroll() {
    if (!this.ticking && !this.isDestroyed) {
      requestAnimationFrame(() => {
        this.updateAll();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  handleResize() {
    // Update cached values on resize
    this.updateAll();
  }

  /**
   * Update all scroll-driven effects in a single pass
   */
  updateAll() {
    if (this.isDestroyed) return;

    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Update parallax elements
    if (this.parallaxElements.length > 0) {
      this.parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.5;
        const offset = scrollY * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    }

    // Update header background
    if (this.header) {
      const opacity = Math.min(scrollY / 100, 0.95);
      this.header.style.setProperty('--header-bg-opacity', opacity);

      if (scrollY > 50) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }

    // Update progress indicator
    if (this.progressBar && docHeight > 0) {
      const progress = (scrollY / docHeight) * 100;
      this.progressBar.style.width = `${progress}%`;
    }
  }

  /**
   * Cleanup method to remove event listeners and observers
   */
  destroy() {
    this.isDestroyed = true;

    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);

    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

/**
 * Smooth counter animation for statistics
 */
class CounterAnimation {
  constructor(element, target, duration = 2000) {
    this.element = element;
    this.target = target;
    this.duration = duration;
    this.start = 0;
    this.startTime = null;
    this.observer = null;

    this.observe();
  }

  observe() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animate();
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.element);
  }

  animate() {
    const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const step = (timestamp) => {
      if (!this.startTime) this.startTime = timestamp;

      const elapsed = timestamp - this.startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      const easedProgress = easeOutExpo(progress);

      const current = Math.floor(easedProgress * this.target);
      this.element.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.element.textContent = this.target.toLocaleString();
      }
    };

    requestAnimationFrame(step);
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

/**
 * Staggered reveal for grid items
 */
class StaggeredReveal {
  constructor(containerSelector, itemSelector, stagger = 50) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;

    this.items = this.container.querySelectorAll(itemSelector);
    this.stagger = stagger;
    this.observer = null;
    this.timeouts = [];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.items.forEach(item => item.classList.add('revealed'));
      return;
    }

    this.observe();
  }

  observe() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.revealItems();
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    this.observer.observe(this.container);
  }

  revealItems() {
    this.items.forEach((item, index) => {
      const timeout = setTimeout(() => {
        item.classList.add('revealed');
      }, index * this.stagger);
      this.timeouts.push(timeout);
    });
  }

  destroy() {
    // Clear all pending timeouts
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.timeouts = [];

    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

// Track instances for cleanup
let scrollAnimationsInstance = null;
const staggeredReveals = [];
const counterAnimations = [];

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    scrollAnimationsInstance = new ScrollAnimations();
    window.scrollAnimations = scrollAnimationsInstance;

    // Initialize staggered reveals for common patterns
    staggeredReveals.push(new StaggeredReveal('.features-grid', '.feature-card', 80));
    staggeredReveals.push(new StaggeredReveal('.protocols-stack', '.protocol-item', 100));
    staggeredReveals.push(new StaggeredReveal('.unshelled-hub', '.unshelled-core, .unshelled-item', 120));
    staggeredReveals.push(new StaggeredReveal('.docs-grid', '.docs-card', 60));

    // Initialize counters if present
    document.querySelectorAll('[data-counter]').forEach(el => {
      const target = parseInt(el.dataset.counter, 10);
      counterAnimations.push(new CounterAnimation(el, target));
    });
  });
} else {
  scrollAnimationsInstance = new ScrollAnimations();
  window.scrollAnimations = scrollAnimationsInstance;
}

// Expose cleanup function
window.cleanupScrollAnimations = function () {
  if (scrollAnimationsInstance) {
    scrollAnimationsInstance.destroy();
  }
  staggeredReveals.forEach(sr => sr.destroy?.());
  counterAnimations.forEach(ca => ca.destroy?.());
};
