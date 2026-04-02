/**
 * VENOM Enhancements JavaScript
 * Search modal, copy buttons, TOC, sidebar functionality
 */

// ============================================
// SEARCH MODAL
// ============================================
const SearchModal = {
  isOpen: false,
  selectedIndex: 0,
  searchResults: [],
  searchIndex: [
    { title: 'Getting Started', desc: 'Installation and quick start guide', href: '/docs/#installation', group: 'Documentation' },
    { title: 'Installation', desc: 'Install via pip or Poetry', href: '/docs/#installation', group: 'Getting Started' },
    { title: 'Quick Start', desc: 'Get your first transcript', href: '/docs/#quickstart', group: 'Getting Started' },
    { title: 'Fetching Transcripts', desc: 'YouTubeTranscriptApi.fetch() reference', href: '/docs/#fetching', group: 'Core API' },
    { title: 'Language Selection', desc: 'Multi-language transcript support', href: '/docs/#languages', group: 'Core API' },
    { title: 'Translation', desc: 'Translate transcripts to any language', href: '/docs/#translating', group: 'Core API' },
    { title: 'Output Formatters', desc: 'JSON, SRT, WebVTT, plain text', href: '/docs/#formatters', group: 'Advanced' },
    { title: 'Proxy Support', desc: 'Handle IP blocking with proxies', href: '/docs/#proxies', group: 'Advanced' },
    { title: 'Error Handling', desc: 'Exception types and handling', href: '/docs/#errors', group: 'Advanced' },
    { title: 'Live Demo', desc: 'Try the API in your browser', href: '/demo/', group: 'Tools' },
    { title: 'How It Works', desc: 'Under the hood explanation', href: '/minds/', group: 'About' },
    { title: 'Home', desc: 'Project overview and features', href: '/', group: 'General' },
  ],

  init() {
    this.modal = document.querySelector('.search-modal');
    if (!this.modal) return;

    this.input = this.modal.querySelector('.search-input');
    this.resultsContainer = this.modal.querySelector('.search-results');
    this.closeBtn = this.modal.querySelector('.search-close');

    this.bindEvents();
  },

  bindEvents() {
    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.toggle();
      }
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
      if (this.isOpen) {
        this.handleKeyNav(e);
      }
    });

    // Click triggers
    document.querySelectorAll('.search-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => this.open());
    });

    // Close on backdrop click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal || e.target.classList.contains('search-modal-backdrop')) {
        this.close();
      }
    });

    // Close button
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Search input
    if (this.input) {
      this.input.addEventListener('input', (e) => this.search(e.target.value));
    }
  },

  toggle() {
    this.isOpen ? this.close() : this.open();
  },

  open() {
    this.isOpen = true;
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (this.input) {
      this.input.focus();
      this.input.value = '';
      this.search('');
    }
  },

  close() {
    this.isOpen = false;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    this.selectedIndex = 0;
  },

  search(query) {
    const q = query.toLowerCase().trim();

    if (!q) {
      this.renderResults(this.searchIndex.slice(0, 6));
      return;
    }

    // Fuzzy search
    const results = this.searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const descMatch = item.desc.toLowerCase().includes(q);
      return titleMatch || descMatch;
    });

    this.renderResults(results);
  },

  renderResults(results) {
    this.searchResults = results;
    this.selectedIndex = 0;

    if (!results.length) {
      this.resultsContainer.innerHTML = `
        <div class="search-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <p>No results found</p>
        </div>
      `;
      return;
    }

    // Group by category
    const groups = {};
    results.forEach(item => {
      if (!groups[item.group]) groups[item.group] = [];
      groups[item.group].push(item);
    });

    let html = '';
    for (const [group, items] of Object.entries(groups)) {
      html += `
        <div class="search-result-group">
          <div class="search-result-group-title">${group}</div>
          ${items.map((item, idx) => `
            <div class="search-result-item" data-index="${results.indexOf(item)}" tabindex="0">
              <div class="search-result-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
              <div class="search-result-text">
                <div class="search-result-title">${this.highlightMatch(item.title)}</div>
                <div class="search-result-desc">${item.desc}</div>
              </div>
              <div class="search-result-shortcut">
                <kbd>↵</kbd>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    this.resultsContainer.innerHTML = html;

    // Add click handlers
    this.resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.index);
        this.navigateTo(this.searchResults[idx]);
      });
    });
  },

  highlightMatch(text) {
    const query = this.input?.value?.toLowerCase().trim() || '';
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  },

  handleKeyNav(e) {
    const items = this.resultsContainer.querySelectorAll('.search-result-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
      this.updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
      this.updateSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = items[this.selectedIndex];
      if (selected) {
        const idx = parseInt(selected.dataset.index);
        this.navigateTo(this.searchResults[idx]);
      }
    }
  },

  updateSelection(items) {
    items.forEach((item, idx) => {
      item.classList.toggle('selected', idx === this.selectedIndex);
      if (idx === this.selectedIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  },

  navigateTo(item) {
    this.close();
    window.location.href = item.href;
  }
};

// ============================================
// COPY BUTTONS — Auto-add to code blocks
// ============================================
const CopyButtons = {
  init() {
    // Add copy buttons to all pre elements
    document.querySelectorAll('pre').forEach(pre => {
      // Skip if already has a button
      if (pre.querySelector('.copy-code-btn')) return;

      const button = document.createElement('button');
      button.className = 'copy-code-btn';
      button.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <span>Copy</span>
      `;

      button.addEventListener('click', () => this.copy(pre, button));
      pre.appendChild(button);
    });
  },

  async copy(pre, button) {
    const code = pre.querySelector('code') || pre;
    const text = code.textContent;

    try {
      await navigator.clipboard.writeText(text);

      // Update button state
      button.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>Copied!</span>
      `;
      button.classList.add('copied');

      setTimeout(() => {
        button.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span>Copy</span>
        `;
        button.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
};

// ============================================
// TABLE OF CONTENTS — Auto-generate from headings
// ============================================
const TableOfContents = {
  init() {
    this.container = document.querySelector('.docs-toc');
    this.content = document.querySelector('.docs-content');

    if (!this.container || !this.content) return;

    this.generate();
    this.initScrollSpy();
  },

  generate() {
    const headings = this.content.querySelectorAll('h2, h3');
    if (!headings.length) return;

    const list = document.createElement('ul');
    list.className = 'docs-toc-list';

    let currentSublist = null;

    headings.forEach((heading, idx) => {
      const id = heading.id || `heading-${idx}`;
      heading.id = id;

      const item = document.createElement('li');
      item.className = 'docs-toc-item';

      const link = document.createElement('a');
      link.href = `#${id}`;
      link.className = 'docs-toc-link';
      link.textContent = heading.textContent;
      link.dataset.target = id;

      if (heading.tagName === 'H3') {
        if (!currentSublist) {
          currentSublist = document.createElement('ul');
          currentSublist.className = 'docs-toc-list docs-toc-sub';
          list.appendChild(currentSublist);
        }
        currentSublist.appendChild(item);
      } else {
        currentSublist = null;
        list.appendChild(item);
      }

      item.appendChild(link);
    });

    this.container.innerHTML = `
      <div class="docs-toc-title">On This Page</div>
    `;
    this.container.appendChild(list);
  },

  initScrollSpy() {
    const headings = this.content.querySelectorAll('h2, h3');
    const links = this.container.querySelectorAll('.docs-toc-link');

    if (!headings.length || !links.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            link.classList.toggle('active', link.dataset.target === id);
          });
        }
      });
    }, {
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0
    });

    headings.forEach(h => observer.observe(h));
  }
};

// ============================================
// COLLAPSIBLE SIDEBAR SECTIONS
// ============================================
const SidebarSections = {
  init() {
    document.querySelectorAll('.sidebar-section').forEach(section => {
      const header = section.querySelector('.sidebar-section-header');
      if (!header) return;

      header.addEventListener('click', () => {
        section.classList.toggle('expanded');
        const isExpanded = section.classList.contains('expanded');
        header.setAttribute('aria-expanded', isExpanded);
      });
    });
  }
};

// ============================================
// MOBILE MENU — Enhanced with aria-expanded
// ============================================
const MobileMenu = {
  init() {
    const toggles = document.querySelectorAll('[data-menu-toggle]');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => this.toggle(toggle));
    });

    // Close menu on link click
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
        const menuId = link.closest('.mobile-nav')?.id;
        const toggle = menuId ? document.querySelector(`[data-menu-target="${menuId}"]`) : null;
        if (toggle) this.close(toggle);
      });
    });
  },

  toggle(toggle) {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    const targetId = toggle.dataset.menuTarget;

    if (isOpen) {
      this.close(toggle);
    } else {
      this.open(toggle);
    }
  },

  open(toggle) {
    toggle.setAttribute('aria-expanded', 'true');
    const targetId = toggle.dataset.menuTarget;
    const target = document.getElementById(targetId) || document.querySelector('.mobile-nav');
    if (target) {
      target.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  close(toggle) {
    toggle.setAttribute('aria-expanded', 'false');
    const targetId = toggle.dataset.menuTarget;
    const target = document.getElementById(targetId) || document.querySelector('.mobile-nav.active');
    if (target) {
      target.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
};

// ============================================
// INITIALIZE ALL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  SearchModal.init();
  CopyButtons.init();
  TableOfContents.init();
  SidebarSections.init();
  MobileMenu.init();
});

// Export for use in other modules
window.VENOMEnhancements = {
  SearchModal,
  CopyButtons,
  TableOfContents,
  SidebarSections,
  MobileMenu
};
