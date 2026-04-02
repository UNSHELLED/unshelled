/**
 * OCTOPUS Observer Manager
 * Shared IntersectionObserver for performance optimization
 * Prevents creating multiple observers for the same elements
 */

class ObserverManager {
  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '50px'
      }
    );
    this.callbacks = new Map();
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      const callback = this.callbacks.get(entry.target);
      if (callback) {
        try {
          callback(entry);
        } catch (error) {
          console.error('ObserverManager: callback error', error);
        }
      }
    });
  }

  observe(element, callback) {
    if (!element || typeof callback !== 'function') {
      console.warn('ObserverManager: invalid element or callback');
      return;
    }
    
    this.callbacks.set(element, callback);
    this.observer.observe(element);
  }

  unobserve(element) {
    if (element) {
      this.callbacks.delete(element);
      this.observer.unobserve(element);
    }
  }

  destroy() {
    this.observer.disconnect();
    this.callbacks.clear();
  }
}

// Export singleton instance
export const observerManager = new ObserverManager();
