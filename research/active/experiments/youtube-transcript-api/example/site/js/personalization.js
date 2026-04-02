/**
 * OCTOPUS Personalization System
 * Remembers user preferences and adapts the experience
 * Theme, motion, saved docs, recent searches, last visited pages
 */

class Personalization {
  constructor() {
    this.prefs = {
      theme: 'dark',
      motionPreference: 'full',
      savedDocs: [],
      recentSearches: [],
      lastVisited: null,
      density: 'comfortable'
    };

    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    this.load();
    this.apply();
    this.trackPageVisit();
  }

  load() {
    try {
      // Load all preferences from localStorage
      this.prefs.theme = localStorage.getItem('octopus_theme') || 'dark';
      this.prefs.motionPreference = localStorage.getItem('octopus_motion') || 'full';
      this.prefs.density = localStorage.getItem('octopus_density') || 'comfortable';

      const savedDocs = localStorage.getItem('octopus_saved_docs');
      this.prefs.savedDocs = savedDocs ? JSON.parse(savedDocs) : [];

      const recentSearches = localStorage.getItem('octopus_recent_searches');
      this.prefs.recentSearches = recentSearches ? JSON.parse(recentSearches) : [];

      this.prefs.lastVisited = localStorage.getItem('octopus_last_visited');
    } catch (error) {
      console.error('Failed to load preferences:', error);
    }
  }

  save(key, value) {
    this.prefs[key] = value;

    const storageKey = `octopus_${key.replace(/([A-Z])/g, '_$1').toLowerCase()}`;

    try {
      if (typeof value === 'object') {
        localStorage.setItem(storageKey, JSON.stringify(value));
      } else {
        localStorage.setItem(storageKey, value);
      }
    } catch (error) {
      console.error('Failed to save preference:', error);
    }
  }

  apply() {
    // Apply theme
    document.body.dataset.theme = this.prefs.theme;

    // Apply motion preference
    if (this.prefs.motionPreference === 'reduced') {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }

    // Apply density
    document.body.dataset.density = this.prefs.density;

    // Highlight last visited page in navigation
    if (this.prefs.lastVisited) {
      const link = document.querySelector(`a[href="${this.prefs.lastVisited}"]`);
      if (link) {
        link.classList.add('recently-visited');
      }
    }

    // Populate recent searches if search UI exists
    this.populateRecentSearches();

    // Mark saved docs if docs list exists
    this.markSavedDocs();
  }

  populateRecentSearches() {
    const recentSearchesContainer = document.querySelector('.recent-searches');
    if (!recentSearchesContainer || this.prefs.recentSearches.length === 0) return;

    recentSearchesContainer.innerHTML = '';

    this.prefs.recentSearches.slice(0, 5).forEach(search => {
      const item = document.createElement('button');
      item.className = 'recent-search-item';
      item.textContent = search;
      item.addEventListener('click', () => {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
          searchInput.value = search;
          searchInput.dispatchEvent(new Event('input'));
        }
      });
      recentSearchesContainer.appendChild(item);
    });
  }

  markSavedDocs() {
    this.prefs.savedDocs.forEach(docUrl => {
      const link = document.querySelector(`a[href="${docUrl}"]`);
      if (link) {
        link.classList.add('saved-doc');

        // Add bookmark icon
        const icon = document.createElement('span');
        icon.className = 'saved-doc-icon';
        icon.textContent = '★';
        icon.setAttribute('aria-label', 'Saved');
        link.appendChild(icon);
      }
    });
  }

  trackPageVisit() {
    const currentPath = window.location.pathname;
    this.save('lastVisited', currentPath);
  }

  saveDoc(url) {
    if (!this.prefs.savedDocs.includes(url)) {
      this.prefs.savedDocs.push(url);
      this.save('savedDocs', this.prefs.savedDocs);
      this.markSavedDocs();
    }
  }

  unsaveDoc(url) {
    this.prefs.savedDocs = this.prefs.savedDocs.filter(doc => doc !== url);
    this.save('savedDocs', this.prefs.savedDocs);

    // Remove saved indicator
    const link = document.querySelector(`a[href="${url}"]`);
    if (link) {
      link.classList.remove('saved-doc');
      const icon = link.querySelector('.saved-doc-icon');
      if (icon) icon.remove();
    }
  }

  addRecentSearch(query) {
    // Remove if already exists
    this.prefs.recentSearches = this.prefs.recentSearches.filter(s => s !== query);

    // Add to beginning
    this.prefs.recentSearches.unshift(query);

    // Keep only last 10
    this.prefs.recentSearches = this.prefs.recentSearches.slice(0, 10);

    this.save('recentSearches', this.prefs.recentSearches);
  }

  clearHistory() {
    this.prefs.recentSearches = [];
    this.prefs.savedDocs = [];
    this.save('recentSearches', []);
    this.save('savedDocs', []);
  }

  getPreference(key) {
    return this.prefs[key];
  }

  destroy() {
    this.isInitialized = false;
  }
}

// Singleton instance (expose globally for classic script loading)
const personalization = new Personalization();
if (typeof window !== 'undefined') window.personalization = personalization;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => personalization.init());
} else {
  personalization.init();
}
