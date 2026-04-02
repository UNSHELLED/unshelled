/**
 * OCTOPUS Search Engine
 * Fuzzy search with ranking, learning, and keyboard shortcuts
 */

class SearchEngine {
  constructor() {
    this.index = [];
    this.isLoaded = false;
    this.searchHistory = this.loadSearchHistory();
    this.resultClicks = this.loadResultClicks();
  }

  async init() {
    if (this.isLoaded) return;
    
    try {
      const response = await fetch('/js/search-index.json');
      this.index = await response.json();
      this.isLoaded = true;
    } catch (error) {
      console.error('Failed to load search index:', error);
      this.index = [];
    }
  }

  search(query) {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const normalizedQuery = query.toLowerCase().trim();
    const results = [];

    // Search through index
    this.index.forEach(item => {
      const score = this.calculateScore(normalizedQuery, item);
      if (score > 0) {
        results.push({
          ...item,
          score,
          relevance: this.getRelevanceBoost(item)
        });
      }
    });

    // Sort by combined score (fuzzy match + relevance + user behavior)
    results.sort((a, b) => {
      const scoreA = a.score + a.relevance + this.getUserBehaviorBoost(a);
      const scoreB = b.score + b.relevance + this.getUserBehaviorBoost(b);
      return scoreB - scoreA;
    });

    return results.slice(0, 10); // Top 10 results
  }

  calculateScore(query, item) {
    let score = 0;
    const queryWords = query.split(/\s+/);

    // Title matching (highest weight)
    if (item.title) {
      const titleLower = item.title.toLowerCase();
      if (titleLower === query) {
        score += 100; // Exact match
      } else if (titleLower.includes(query)) {
        score += 50; // Contains query
      } else {
        // Fuzzy match on title
        queryWords.forEach(word => {
          if (titleLower.includes(word)) {
            score += 20;
          }
        });
      }
    }

    // Content matching (medium weight)
    if (item.content) {
      const contentLower = item.content.toLowerCase();
      if (contentLower.includes(query)) {
        score += 30;
      } else {
        queryWords.forEach(word => {
          if (contentLower.includes(word)) {
            score += 10;
          }
        });
      }
    }

    // Keywords matching (high weight)
    if (item.keywords && Array.isArray(item.keywords)) {
      item.keywords.forEach(keyword => {
        const keywordLower = keyword.toLowerCase();
        if (keywordLower === query) {
          score += 80;
        } else if (keywordLower.includes(query)) {
          score += 40;
        } else {
          queryWords.forEach(word => {
            if (keywordLower.includes(word)) {
              score += 15;
            }
          });
        }
      });
    }

    // Category boost
    if (item.category) {
      const categoryLower = item.category.toLowerCase();
      if (categoryLower.includes(query)) {
        score += 25;
      }
    }

    return score;
  }

  getRelevanceBoost(item) {
    let boost = 0;

    // Boost important pages
    if (item.category === 'command') boost += 10;
    if (item.category === 'quickstart') boost += 15;
    if (item.title && item.title.includes('OCTOPUS')) boost += 5;

    // Boost by page importance
    if (item.url === '/docs' || item.url === '/docs/quickstart') boost += 20;

    return boost;
  }

  getUserBehaviorBoost(item) {
    let boost = 0;

    // Boost frequently clicked results
    const clicks = this.resultClicks[item.url] || 0;
    boost += Math.min(clicks * 2, 20); // Max 20 points from clicks

    return boost;
  }

  trackQuery(query, clickedResult) {
    // Save to search history
    this.searchHistory.unshift({
      query,
      timestamp: Date.now(),
      result: clickedResult ? clickedResult.url : null
    });

    // Keep only last 50 searches
    this.searchHistory = this.searchHistory.slice(0, 50);
    localStorage.setItem('octopus_search_history', JSON.stringify(this.searchHistory));

    // Track result clicks for ranking
    if (clickedResult && clickedResult.url) {
      this.resultClicks[clickedResult.url] = (this.resultClicks[clickedResult.url] || 0) + 1;
      localStorage.setItem('octopus_result_clicks', JSON.stringify(this.resultClicks));
    }
  }

  loadSearchHistory() {
    try {
      const stored = localStorage.getItem('octopus_search_history');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  loadResultClicks() {
    try {
      const stored = localStorage.getItem('octopus_result_clicks');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  getRecentSearches(limit = 5) {
    return this.searchHistory.slice(0, limit);
  }

  clearHistory() {
    this.searchHistory = [];
    this.resultClicks = {};
    localStorage.removeItem('octopus_search_history');
    localStorage.removeItem('octopus_result_clicks');
  }
}

// Export singleton instance
export const searchEngine = new SearchEngine();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => searchEngine.init());
} else {
  searchEngine.init();
}
