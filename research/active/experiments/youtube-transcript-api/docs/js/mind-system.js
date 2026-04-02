/**
 * OCTOPUS Mind Activation System
 * Shows the 9 minds working in real-time based on user interactions
 * This is the core of making intelligence visible
 */

class MindSystem {
  constructor() {
    // 9 minds state
    this.minds = {
      0: { name: 'Orchestrator', active: false, strength: 0, reason: '' },
      1: { name: 'Parser', active: false, strength: 0, reason: '' },
      2: { name: 'Analyzer', active: false, strength: 0, reason: '' },
      3: { name: 'Historian', active: false, strength: 0, reason: '' },
      4: { name: 'Pattern', active: false, strength: 0, reason: '' },
      5: { name: 'Mapper', active: false, strength: 0, reason: '' },
      6: { name: 'Predictor', active: false, strength: 0, reason: '' },
      7: { name: 'Communicator', active: false, strength: 0, reason: '' },
      8: { name: 'Learner', active: false, strength: 0, reason: '' }
    };

    this.listeners = new Set();
    this.deactivateTimers = new Map();
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.setupDetectors();
  }

  setupDetectors() {
    // Use scrollManager when available (unified scroll handling)
    if (typeof window !== 'undefined' && window.scrollManager) {
      window.scrollManager.register(() => {
        this.activate(1, 'reading page structure', 0.7);
      });
    }

    // Hover code → Activate Analyzer
    document.querySelectorAll('code, pre, .code-block').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.activate(2, 'analyzing code', 0.8);
      }, { passive: true });
    });

    // Search → Activate Mapper + Pattern
    const searchInputs = document.querySelectorAll('.search-input, .sidebar-search, input[type="search"]');
    searchInputs.forEach(input => {
      input.addEventListener('input', () => {
        this.activate(5, 'mapping connections', 0.9);
        this.activate(4, 'pattern matching', 0.6);
      }, { passive: true });
    });

    // Time on page → Activate Learner
    setTimeout(() => {
      this.activate(8, 'learning your preferences', 0.5);
    }, 5000);

    // Navigate links → Activate Historian
    document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach(link => {
      link.addEventListener('click', () => {
        this.activate(3, 'remembering your journey', 0.7);
      }, { passive: true });
    });

    // Hover links → Activate Predictor
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', () => {
        this.activate(6, 'predicting next action', 0.5);
      }, { passive: true });
    });

    // Copy buttons → Activate Communicator
    document.querySelectorAll('.code-block-copy, button[data-copy]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activate(7, 'adapting communication', 0.8);
      }, { passive: true });
    });

    // Mind orbit/constellation hover → Activate specific mind
    document.querySelectorAll('[data-mind]').forEach(node => {
      node.addEventListener('mouseenter', () => {
        const mindId = parseInt(node.dataset.mind);
        if (this.minds[mindId]) {
          this.activate(mindId, `exploring ${this.minds[mindId].name}`, 1);
        }
      }, { passive: true });
    });
  }

  activate(mindId, reason, strength) {
    if (!this.minds[mindId]) return;

    // Clear existing deactivate timer
    if (this.deactivateTimers.has(mindId)) {
      clearTimeout(this.deactivateTimers.get(mindId));
    }

    // Activate mind
    this.minds[mindId].active = true;
    this.minds[mindId].strength = strength;
    this.minds[mindId].reason = reason;

    // Always activate Orchestrator when any mind activates
    if (mindId !== 0) {
      this.minds[0].active = true;
      this.minds[0].strength = Math.max(this.minds[0].strength, 0.5);
      this.minds[0].reason = 'coordinating minds';
    }

    this.notifyListeners();

    // Schedule deactivation
    const timer = setTimeout(() => {
      this.deactivate(mindId);
    }, 3000);

    this.deactivateTimers.set(mindId, timer);
  }

  deactivate(mindId) {
    if (!this.minds[mindId]) return;

    this.minds[mindId].active = false;
    this.minds[mindId].strength = 0;
    this.minds[mindId].reason = '';

    this.deactivateTimers.delete(mindId);
    this.notifyListeners();
  }

  activateMultiple(mindIds, reason, strength) {
    mindIds.forEach(id => this.activate(id, reason, strength));
  }

  notifyListeners() {
    const activeMindIds = Object.keys(this.minds).filter(id => this.minds[id].active);
    this.listeners.forEach(fn => {
      try {
        fn(this.minds, activeMindIds);
      } catch (error) {
        console.error('MindSystem: listener error', error);
      }
    });
  }

  subscribe(callback) {
    if (typeof callback === 'function') {
      this.listeners.add(callback);
    }
  }

  unsubscribe(callback) {
    this.listeners.delete(callback);
  }

  destroy() {
    // Clear all timers
    this.deactivateTimers.forEach(timer => clearTimeout(timer));
    this.deactivateTimers.clear();
    this.listeners.clear();
    this.isInitialized = false;
  }
}

// Singleton instance (expose globally for classic script loading)
const mindSystem = new MindSystem();
if (typeof window !== 'undefined') window.mindSystem = mindSystem;

// Subscribe to update mind indicator UI when present
function updateMindIndicatorUI(minds, activeMindIds) {
  const container = document.querySelector('.mind-indicator');
  if (!container) return;

  container.classList.toggle('active', activeMindIds.length > 0);
  container.querySelectorAll('.mind-dot').forEach(dot => {
    const id = dot.getAttribute('data-mind-id');
    if (id === null) return;
    const mind = minds[id];
    dot.classList.toggle('active', !!mind && mind.active);
    dot.classList.toggle('thinking', !!mind && mind.active);
  });

  const statusEl = container.querySelector('.mind-status-text');
  if (statusEl) {
    statusEl.textContent = activeMindIds.length
      ? activeMindIds.slice(0, 2).map(id => minds[id].name).join(', ')
      : '';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    mindSystem.init();
    mindSystem.subscribe(updateMindIndicatorUI);
  });
} else {
  mindSystem.init();
  mindSystem.subscribe(updateMindIndicatorUI);
}
