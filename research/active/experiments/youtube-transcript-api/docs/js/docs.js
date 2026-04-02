/**
 * OCTOPUS Documentation System
 * Sidebar, Search, Table of Contents
 */

(function () {
  'use strict';

  // ============================================
  // PATH COMPATIBILITY (file:// vs http://)
  // ============================================
  const isFileProtocol = window.location.protocol === 'file:';

  // Calculate base path for local file browsing
  function getBasePath() {
    if (!isFileProtocol) return '';

    // Find the site root by looking for /site/ in the path
    const path = window.location.pathname;
    const siteIndex = path.indexOf('/site/');
    if (siteIndex !== -1) {
      return path.substring(0, siteIndex + 5); // Include /site
    }
    // Fallback: go up from docs
    const docsIndex = path.indexOf('/docs/');
    if (docsIndex !== -1) {
      return path.substring(0, docsIndex);
    }
    return '';
  }

  const basePath = getBasePath();

  // Make href work for both file:// and http://
  function resolveHref(href) {
    if (!isFileProtocol) return href;
    if (href.startsWith('#')) return href;
    if (href.startsWith('http')) return href;

    // For file protocol, make paths relative to site root
    return basePath + href;
  }

  // ============================================
  // SIDEBAR DATA STRUCTURE
  // ============================================
  /* Art of OCTOPUS: Start → Commands → Modes → Protocols → Deep */
  const sidebarData = {
    sections: [
      {
        title: 'Start',
        items: [
          { title: 'Overview', href: '/docs/index.html' },
          { title: 'Quick Start', href: '/docs/quickstart/index.html' },
          { title: 'Installation', href: '/download/index.html' }
        ]
      },
      {
        title: 'Commands',
        items: [
          { title: '/o — Workflow', href: '/docs/commands/o.html' },
          { title: '/d — Design', href: '/docs/commands/d.html' },
          { title: '/r — Review', href: '/docs/commands/r.html' }
        ]
      },
      {
        title: 'Modes',
        items: [
          { title: 'Plan, Build, Fix, Explain…', href: '/docs/modes/index.html' }
        ]
      },
      {
        title: 'Protocols',
        items: [
          { title: 'Core Protocols', href: '/docs/protocols/index.html' }
        ]
      },
      {
        title: 'Deep',
        items: [
          { title: 'Unshelled (all arms active)', href: '/docs/protocols/index.html#unshelled' },
          { title: 'Nine Minds', href: '/minds/index.html' },
          { title: 'Identity & Soul', href: '/docs/index.html#identity' }
        ]
      }
    ]
  };

  // ============================================
  // SEARCH INDEX (will be populated)
  // ============================================
  let searchIndex = [];

  // ============================================
  // STATE
  // ============================================
  const state = {
    sidebarOpen: false,
    searchOpen: false,
    selectedSearchIndex: 0
  };

  // ============================================
  // SIDEBAR
  // ============================================
  function initSidebar() {
    const sidebar = document.querySelector('.docs-sidebar');
    const toggle = document.querySelector('.docs-sidebar-toggle');
    const overlay = document.querySelector('.docs-sidebar-overlay');

    if (!sidebar) return;

    // Generate sidebar content if empty
    const sidebarInner = sidebar.querySelector('.sidebar-inner');
    if (sidebarInner && !sidebarInner.querySelector('.sidebar-nav')) {
      renderSidebar(sidebarInner);
    }

    // Mark current page as active
    markActiveLink();

    // Toggle button
    if (toggle) {
      toggle.addEventListener('click', () => toggleSidebar());
    }

    // Overlay click to close
    if (overlay) {
      overlay.addEventListener('click', () => closeSidebar());
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.sidebarOpen) {
        closeSidebar();
      }
    });

    // Section collapse toggles with keyboard support
    sidebar.querySelectorAll('.sidebar-section-title').forEach(title => {
      // Make focusable
      title.setAttribute('tabindex', '0');
      title.setAttribute('role', 'button');
      title.setAttribute('aria-expanded', 'true');

      const toggleSection = () => {
        const section = title.closest('.sidebar-section');
        const isCollapsed = section.classList.toggle('collapsed');
        title.setAttribute('aria-expanded', String(!isCollapsed));
      };

      title.addEventListener('click', toggleSection);

      // Keyboard support
      title.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSection();
        }
      });
    });
  }

  function renderSidebar(container) {
    const nav = document.createElement('nav');
    nav.className = 'sidebar-nav';

    // Search trigger
    const searchTrigger = document.createElement('button');
    searchTrigger.className = 'sidebar-search';
    searchTrigger.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <span>Search docs...</span>
      <kbd>${navigator.platform.includes('Mac') ? '⌘' : 'Ctrl+'}K</kbd>
    `;
    searchTrigger.addEventListener('click', openSearch);
    container.insertBefore(searchTrigger, container.firstChild);

    // Render sections
    sidebarData.sections.forEach(section => {
      const sectionEl = document.createElement('div');
      sectionEl.className = 'sidebar-section';

      sectionEl.innerHTML = `
        <div class="sidebar-section-title">
          <span>${section.title}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div class="sidebar-section-items">
          ${section.items.map(item => `
            <a href="${resolveHref(item.href)}" class="sidebar-link">${item.title}</a>
          `).join('')}
        </div>
      `;

      nav.appendChild(sectionEl);
    });

    container.appendChild(nav);
  }

  function markActiveLink() {
    const pathname = window.location.pathname;
    // Normalize: doc path after /site/ (dev server) or full path; strip index.html, .html, trailing slash
    const afterSite = pathname.match(/[/\\]site[/\\](.*)/i);
    const docPath = afterSite ? afterSite[1] : pathname.replace(/^\/+/, '');
    const pathNorm = docPath
      .replace(/\/index\.html?$/i, '')
      .replace(/\.html?$/i, '')
      .replace(/[/\\]+$/, '')
      .replace(/\\/g, '/')
      .toLowerCase();
    const links = document.querySelectorAll('.sidebar-link');

    links.forEach(link => {
      const href = link.getAttribute('href');
      const hrefPath = (href.split('#')[0] || href).replace(/^\//, '').replace(/\/$/, '');
      const hrefNorm = hrefPath
        .replace(/\/index\.html?$/i, '')
        .replace(/\.html?$/i, '')
        .replace(/\/?$/, '')
        .toLowerCase();
      const pathMatches = pathNorm === hrefNorm || pathname === href || pathname.endsWith(hrefPath) || pathname.endsWith(hrefPath + '.html') || docPath === hrefPath || docPath === hrefPath + '.html';
      const isPageLink = !href.includes('#');
      const isActive = pathMatches && isPageLink;
      if (isActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  function toggleSidebar() {
    state.sidebarOpen ? closeSidebar() : openSidebar();
  }

  function openSidebar() {
    const sidebar = document.querySelector('.docs-sidebar');
    const overlay = document.querySelector('.docs-sidebar-overlay');

    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
    state.sidebarOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    const sidebar = document.querySelector('.docs-sidebar');
    const overlay = document.querySelector('.docs-sidebar-overlay');

    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    state.sidebarOpen = false;
    document.body.style.overflow = '';
  }

  // ============================================
  // TABLE OF CONTENTS
  // ============================================
  function initTOC() {
    const content = document.querySelector('.docs-content');
    const tocContainer = document.querySelector('.docs-toc');

    if (!content || !tocContainer) return;

    const headings = content.querySelectorAll('h2, h3');
    if (headings.length < 2) {
      tocContainer.style.display = 'none';
      return;
    }

    // Ensure headings have IDs
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = slugify(heading.textContent) || `section-${index}`;
      }
    });

    // Build TOC
    const tocList = document.createElement('ul');
    tocList.className = 'docs-toc-list';

    headings.forEach(heading => {
      const li = document.createElement('li');
      li.className = 'docs-toc-item';

      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.className = 'docs-toc-link';
      link.dataset.level = heading.tagName.toLowerCase().replace('h', '');
      link.textContent = heading.textContent;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', `#${heading.id}`);
      });

      li.appendChild(link);
      tocList.appendChild(li);
    });

    // Clear and add new content
    const existingList = tocContainer.querySelector('.docs-toc-list');
    if (existingList) {
      existingList.replaceWith(tocList);
    } else {
      tocContainer.appendChild(tocList);
    }

    // Scroll spy
    initScrollSpy(headings);

    // "On this page" block for viewports where TOC is hidden (< 1280px)
    initOnThisPage(content, headings);
  }

  function initOnThisPage(content, headings) {
    if (!content || !headings || headings.length === 0) return;

    const header = content.querySelector('.docs-header');
    if (!header) return;

    const nav = document.createElement('nav');
    nav.className = 'docs-on-this-page';
    nav.setAttribute('aria-label', 'On this page');

    const title = document.createElement('h2');
    title.className = 'docs-on-this-page-title';
    title.textContent = 'On this page';
    title.id = 'on-this-page-heading';
    nav.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'docs-toc-list';
    list.setAttribute('aria-labelledby', 'on-this-page-heading');

    headings.forEach(function (heading) {
      const li = document.createElement('li');
      li.className = 'docs-toc-item';
      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.className = 'docs-toc-link';
      link.dataset.level = heading.tagName.toLowerCase().replace('h', '');
      link.textContent = heading.textContent;
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        heading.scrollIntoView({ behavior });
        history.pushState(null, '', '#' + heading.id);
      });
      li.appendChild(link);
      list.appendChild(li);
    });

    nav.appendChild(list);
    header.after(nav);
  }

  function initScrollSpy(headings) {
    if (!headings.length) return;

    const tocLinks = document.querySelectorAll('.docs-toc-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          tocLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, {
      rootMargin: '-100px 0px -66%',
      threshold: 0
    });

    headings.forEach(heading => observer.observe(heading));
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  // ============================================
  // SEARCH
  // ============================================
  function initSearch() {
    // Build search index from current page content
    buildSearchIndex();

    // Hero search bar (docs landing): click opens modal
    const heroSearch = document.querySelector('.docs-search');
    if (heroSearch) {
      heroSearch.addEventListener('click', openSearch);
    }

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && state.searchOpen) {
        closeSearch();
      }
    });

    // Search modal events
    const modal = document.querySelector('.search-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSearch();
      });

      const input = modal.querySelector('.search-input');
      if (input) {
        input.addEventListener('input', (e) => handleSearch(e.target.value));
        input.addEventListener('keydown', handleSearchKeydown);
      }

      const closeBtn = modal.querySelector('.search-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeSearch);
      }
    }
  }

  function buildSearchIndex() {
    // Build index from sidebar + current page headings. For cross-page search,
    // production can fetch site/js/search-index.json and merge or replace with it.
    searchIndex = [];

    sidebarData.sections.forEach(section => {
      section.items.forEach(item => {
        searchIndex.push({
          title: item.title,
          section: section.title,
          href: item.href,
          content: '' // Would contain page content
        });
      });
    });

    // Also index current page headings
    const content = document.querySelector('.docs-content');
    if (content) {
      const headings = content.querySelectorAll('h2, h3');
      const currentTitle = document.querySelector('.docs-title')?.textContent || document.title;

      headings.forEach(heading => {
        if (heading.id) {
          searchIndex.push({
            title: heading.textContent,
            section: currentTitle,
            href: `#${heading.id}`,
            content: getNextParagraph(heading)
          });
        }
      });
    }
  }

  function getNextParagraph(heading) {
    let next = heading.nextElementSibling;
    while (next) {
      if (next.tagName === 'P') {
        return next.textContent.slice(0, 150);
      }
      if (/^H[1-6]$/.test(next.tagName)) break;
      next = next.nextElementSibling;
    }
    return '';
  }

  function openSearch() {
    const modal = document.querySelector('.search-modal');
    if (!modal) {
      createSearchModal();
      return openSearch();
    }

    modal.classList.add('active');
    state.searchOpen = true;
    document.body.style.overflow = 'hidden';

    const input = modal.querySelector('.search-input');
    if (input) {
      input.value = '';
      input.focus();
    }

    // Show recent or all items initially
    showSearchResults(searchIndex.slice(0, 8));
  }

  function closeSearch() {
    const modal = document.querySelector('.search-modal');
    if (modal) {
      modal.classList.remove('active');
    }
    state.searchOpen = false;
    state.selectedSearchIndex = 0;
    document.body.style.overflow = '';
  }

  function createSearchModal() {
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
      <div class="search-modal-content">
        <div class="search-input-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input type="text" class="search-input" placeholder="Search docs..." autocomplete="off">
          <button class="search-close">ESC</button>
        </div>
        <div class="search-results"></div>
        <div class="search-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
          <span><kbd>↵</kbd> to select</span>
          <span><kbd>esc</kbd> to close</span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    initSearch();
  }

  function handleSearch(query) {
    if (!query.trim()) {
      showSearchResults(searchIndex.slice(0, 8));
      return;
    }

    const results = fuzzySearch(query, searchIndex);
    showSearchResults(results);
  }

  function fuzzySearch(query, items) {
    const lowerQuery = query.toLowerCase();

    return items
      .map(item => {
        const titleScore = scoreMatch(item.title.toLowerCase(), lowerQuery);
        const contentScore = scoreMatch((item.content || '').toLowerCase(), lowerQuery) * 0.5;
        const sectionScore = scoreMatch(item.section.toLowerCase(), lowerQuery) * 0.3;

        return {
          ...item,
          score: titleScore + contentScore + sectionScore
        };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }

  function scoreMatch(text, query) {
    if (text.includes(query)) return 10;

    // Check for word starts matching
    const words = text.split(/\s+/);
    let score = 0;

    for (const word of words) {
      if (word.startsWith(query)) score += 5;
      else if (word.includes(query)) score += 2;
    }

    return score;
  }

  function showSearchResults(results) {
    const container = document.querySelector('.search-results');
    if (!container) return;

    state.selectedSearchIndex = 0;

    if (results.length === 0) {
      container.innerHTML = `
        <div class="search-empty">
          <p>No results found</p>
        </div>
      `;
      return;
    }

    // Get search query safely with null checks
    const modal = container?.closest('.search-modal');
    const input = modal?.querySelector('.search-input');
    const query = input?.value || '';

    container.innerHTML = results.map((result, index) => `
      <div class="search-result-item ${index === 0 ? 'selected' : ''}" data-href="${resolveHref(result.href)}" tabindex="0" role="option" aria-selected="${index === 0}">
        <span class="search-result-title">${highlightMatch(result.title, query)}</span>
        <span class="search-result-section">${result.section}</span>
        ${result.content ? `<span class="search-result-content">${result.content}</span>` : ''}
      </div>
    `).join('');

    // Click handlers
    container.querySelectorAll('.search-result-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        navigateToResult(results[index].href);
      });
      item.addEventListener('mouseenter', () => {
        updateSelectedResult(index);
      });
    });
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function handleSearchKeydown(e) {
    const results = document.querySelectorAll('.search-result-item');
    if (!results.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        updateSelectedResult(Math.min(state.selectedSearchIndex + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        updateSelectedResult(Math.max(state.selectedSearchIndex - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        const selected = results[state.selectedSearchIndex];
        if (selected) {
          navigateToResult(selected.dataset.href);
        }
        break;
    }
  }

  function updateSelectedResult(index) {
    const results = document.querySelectorAll('.search-result-item');
    results.forEach((r, i) => {
      r.classList.toggle('selected', i === index);
    });
    state.selectedSearchIndex = index;

    // Scroll into view
    results[index]?.scrollIntoView({ block: 'nearest' });
  }

  function navigateToResult(href) {
    closeSearch();
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', href);
      }
    } else {
      window.location.href = href;
    }
  }

  // ============================================
  // INIT
  // ============================================
  function init() {
    initSidebar();
    initTOC();
    initSearch();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.OctopusDocs = {
    openSearch,
    closeSearch,
    openSidebar,
    closeSidebar
  };
})();
