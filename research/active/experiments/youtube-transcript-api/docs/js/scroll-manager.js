/**
 * OCTOPUS Scroll Manager
 * Unified scroll handling for performance optimization
 * Prevents multiple scroll listeners causing performance issues
 */

class ScrollManager {
  constructor() {
    this.handlers = new Set();
    this.ticking = false;
    this.lastScrollY = 0;
    this.bind();
  }

  bind() {
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
  }

  register(callback) {
    if (typeof callback !== 'function') {
      console.warn('ScrollManager: callback must be a function');
      return;
    }
    this.handlers.add(callback);
  }

  unregister(callback) {
    this.handlers.delete(callback);
  }

  handleScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        this.handlers.forEach(cb => {
          try {
            cb(scrollY, this.lastScrollY);
          } catch (error) {
            console.error('ScrollManager: handler error', error);
          }
        });
        this.lastScrollY = scrollY;
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    this.handlers.clear();
  }
}

// Singleton - attach to window for non-module usage
const scrollManager = new ScrollManager();
if (typeof window !== 'undefined') {
  window.scrollManager = scrollManager;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { scrollManager };
}
