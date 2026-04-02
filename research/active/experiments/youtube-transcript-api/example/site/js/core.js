/**
 * OCTOPUS Core JavaScript
 * Shared utilities and functionality
 */

// ============================================
// STATE MANAGEMENT
// ============================================
const OCTOPUS = {
  state: {
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    scrollY: 0,
    isMenuOpen: false,
    activeProtocol: null,
    activeMind: null
  },

  // DOM element cache
  elements: {},

  // Initialize
  init() {
    this.cacheElements();
    this.bindEvents();
    this.initHeader();
    this.initScrollReveal();
    this.initHeroReveal();
    this.initProtocols();
    this.initUnshelled();
    this.initCopyButtons();
    this.initSmoothScroll();

    console.log(
      '%cOCTOPUS%c\nNine minds. One purpose. Intelligence that fits.',
      'font-weight:800; font-size:20px; color:#e07a5f; background:#0a0a0b; padding:10px 20px; border-radius:8px;',
      'font-size:12px; color:#8a8784;'
    );
  },

  // Cache commonly used elements
  cacheElements() {
    this.elements = {
      header: document.querySelector('.header'),
      menuToggle: document.querySelector('.menu-toggle'),
      navMain: document.querySelector('.nav-main'),
      protocolItems: document.querySelectorAll('.protocol-item'),
      unshelledItems: document.querySelectorAll('.unshelled-item'),
      copyButtons: document.querySelectorAll('[data-copy]'),
      revealElements: document.querySelectorAll('[data-reveal]'),
      heroRevealElements: document.querySelectorAll('[data-hero-reveal]')
    };
  },

  // Bind event listeners
  bindEvents() {
    // Scroll handler - use unified scroll manager when available
    if (window.scrollManager) {
      window.scrollManager.register(() => this.handleScroll());
    } else {
      window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    }

    // Resize handler
    window.addEventListener('resize', this.debounce(() => this.handleResize(), 150));

    // Menu toggle
    if (this.elements.menuToggle) {
      this.elements.menuToggle.addEventListener('click', () => this.toggleMenu());
    }

    // Close menu on nav link click
    if (this.elements.navMain) {
      this.elements.navMain.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });
    }

    // Reduced motion preference change
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.state.prefersReducedMotion = e.matches;
    });
  },

  // ============================================
  // HEADER
  // ============================================
  initHeader() {
    this.handleScroll();
  },

  handleScroll() {
    this.state.scrollY = window.scrollY;

    if (this.elements.header) {
      if (this.state.scrollY > 50) {
        this.elements.header.classList.add('scrolled');
      } else {
        this.elements.header.classList.remove('scrolled');
      }
    }
  },

  handleResize() {
    // Close menu on resize to desktop
    if (window.innerWidth > 767 && this.state.isMenuOpen) {
      this.closeMenu();
    }
  },

  // ============================================
  // MOBILE MENU
  // ============================================
  toggleMenu() {
    this.state.isMenuOpen = !this.state.isMenuOpen;

    if (this.elements.navMain) {
      this.elements.navMain.classList.toggle('open', this.state.isMenuOpen);
    }

    if (this.elements.menuToggle) {
      this.elements.menuToggle.setAttribute('aria-expanded', this.state.isMenuOpen);
    }

    document.body.classList.toggle('menu-open', this.state.isMenuOpen);
  },

  closeMenu() {
    this.state.isMenuOpen = false;

    if (this.elements.navMain) {
      this.elements.navMain.classList.remove('open');
    }

    if (this.elements.menuToggle) {
      this.elements.menuToggle.setAttribute('aria-expanded', 'false');
    }

    document.body.classList.remove('menu-open');
  },

  // ============================================
  // SCROLL REVEAL
  // ============================================
  initScrollReveal() {
    if (this.state.prefersReducedMotion) {
      this.elements.revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
    );

    this.elements.revealElements.forEach(el => observer.observe(el));
  },

  initHeroReveal() {
    if (this.state.prefersReducedMotion) {
      this.elements.heroRevealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const delay = 100;
    this.elements.heroRevealElements.forEach((el, i) => {
      setTimeout(() => el.classList.add('revealed'), delay * (i + 1));
    });
  },

  // ============================================
  // PROTOCOLS
  // ============================================
  initProtocols() {
    this.elements.protocolItems.forEach(item => {
      item.addEventListener('click', () => this.toggleProtocol(item));

      // Keyboard support
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleProtocol(item);
        }
      });
    });
  },

  toggleProtocol(item) {
    const isActive = item.classList.contains('active');

    // Close all and reset aria-expanded
    this.elements.protocolItems.forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-expanded', 'false');
    });

    // Open clicked (if wasn't already open)
    if (!isActive) {
      item.classList.add('active');
      item.setAttribute('aria-expanded', 'true');
      this.state.activeProtocol = item.dataset.protocol;
    } else {
      this.state.activeProtocol = null;
    }
  },

  // ============================================
  // UNSHELLED (accordion)
  // ============================================
  initUnshelled() {
    if (!this.elements.unshelledItems?.length) return;

    this.elements.unshelledItems.forEach(item => {
      item.addEventListener('click', () => this.toggleUnshelled(item));

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleUnshelled(item);
        }
      });
    });
  },

  toggleUnshelled(item) {
    const isActive = item.classList.contains('active');

    this.elements.unshelledItems.forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      item.classList.add('active');
      item.setAttribute('aria-expanded', 'true');
    }
  },

  // ============================================
  // COPY TO CLIPBOARD
  // ============================================
  initCopyButtons() {
    this.elements.copyButtons.forEach(btn => {
      btn.addEventListener('click', () => this.copyToClipboard(btn));
    });
  },

  async copyToClipboard(btn) {
    const target = btn.dataset.copy;
    const element = document.querySelector(target);

    if (!element) return;

    const text = element.textContent;

    try {
      await navigator.clipboard.writeText(text);

      // Visual feedback
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');

      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  },

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const headerOffset = this.elements.header ? this.elements.header.offsetHeight : 0;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: this.state.prefersReducedMotion ? 'auto' : 'smooth'
          });
        }
      });
    });
  },

  // ============================================
  // UTILITIES
  // ============================================
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => OCTOPUS.init());
} else {
  OCTOPUS.init();
}

// Export for use in other modules
window.OCTOPUS = OCTOPUS;
