/**
 * OCTOPUS Interactive Tutorial
 * Step-by-step onboarding for first-time users
 * Guides through key features with highlights and tooltips
 */

class InteractiveTutorial {
  constructor() {
    this.steps = [
      {
        target: '.logo',
        title: 'Welcome to OCTOPUS',
        content: 'OCTOPUS is adaptive AI with 9 specialized minds. Let me show you around.',
        position: 'bottom',
        highlight: true
      },
      {
        target: '.nav-main a[href="/minds"]',
        title: 'Nine Minds Working Together',
        content: 'Each mind handles a different aspect: Parser reads structure, Analyzer finds issues, Orchestrator coordinates everything.',
        position: 'bottom',
        highlight: true
      },
      {
        target: '.nav-main a[href="/demo"]',
        title: 'Try the Interactive Demo',
        content: 'See OCTOPUS in action. Watch minds activate as you interact.',
        position: 'bottom',
        highlight: true
      },
      {
        target: '.nav-main a[href="/docs"]',
        title: 'Learn the Commands',
        content: '/o for workflow, /d for design, /r for review. Simple, powerful.',
        position: 'bottom',
        highlight: true
      },
      {
        target: '.btn-primary',
        title: 'Ready to Install?',
        content: 'Install OCTOPUS in your Cursor workspace and experience adaptive intelligence.',
        position: 'top',
        highlight: true
      }
    ];

    this.currentStep = 0;
    this.isActive = false;
    this.tooltip = null;
    this.overlay = null;
  }

  checkFirstVisit() {
    const hasVisited = localStorage.getItem('octopus_tutorial_completed');
    if (!hasVisited) {
      // Wait a bit before starting tutorial
      setTimeout(() => this.start(), 1000);
    }
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.currentStep = 0;

    this.createOverlay();
    this.showStep(0);
  }

  createOverlay() {
    // Create dark overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'tutorial-overlay';
    this.overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 9998;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(this.overlay);

    // Fade in
    requestAnimationFrame(() => {
      this.overlay.style.opacity = '1';
    });
  }

  showStep(index) {
    if (index < 0 || index >= this.steps.length) {
      this.complete();
      return;
    }

    const step = this.steps[index];
    const target = document.querySelector(step.target);

    if (!target) {
      // Skip if target not found
      this.showStep(index + 1);
      return;
    }

    // Remove previous highlight
    document.querySelectorAll('.tutorial-highlight').forEach(el => {
      el.classList.remove('tutorial-highlight');
    });

    // Highlight target
    if (step.highlight) {
      target.classList.add('tutorial-highlight');
      target.style.position = 'relative';
      target.style.zIndex = '9999';
    }

    // Create tooltip
    this.createTooltip(step, target);

    this.currentStep = index;
  }

  createTooltip(step, target) {
    // Remove existing tooltip
    if (this.tooltip) {
      this.tooltip.remove();
    }

    this.tooltip = document.createElement('div');
    this.tooltip.className = 'tutorial-tooltip';
    this.tooltip.innerHTML = `
      <div class="tutorial-tooltip-header">
        <h4>${step.title}</h4>
        <button class="tutorial-skip" aria-label="Skip tutorial">×</button>
      </div>
      <div class="tutorial-tooltip-content">
        <p>${step.content}</p>
      </div>
      <div class="tutorial-tooltip-footer">
        <div class="tutorial-progress">${this.currentStep + 1} / ${this.steps.length}</div>
        <div class="tutorial-actions">
          ${this.currentStep > 0 ? '<button class="tutorial-prev btn btn-ghost btn-sm">Previous</button>' : ''}
          <button class="tutorial-next btn btn-primary btn-sm">
            ${this.currentStep === this.steps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    `;

    // Position tooltip
    this.positionTooltip(this.tooltip, target, step.position);

    // Add event listeners
    const skipBtn = this.tooltip.querySelector('.tutorial-skip');
    const nextBtn = this.tooltip.querySelector('.tutorial-next');
    const prevBtn = this.tooltip.querySelector('.tutorial-prev');

    skipBtn.addEventListener('click', () => this.skip());
    nextBtn.addEventListener('click', () => this.next());
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.previous());
    }

    document.body.appendChild(this.tooltip);

    // Fade in
    requestAnimationFrame(() => {
      this.tooltip.style.opacity = '1';
      this.tooltip.style.transform = 'translateY(0)';
    });
  }

  positionTooltip(tooltip, target, position = 'bottom') {
    tooltip.style.cssText = `
      position: fixed;
      z-index: 10000;
      background: var(--bg-elevated);
      border: 1px solid var(--border-accent);
      border-radius: var(--radius-lg);
      padding: var(--space-4);
      max-width: 320px;
      box-shadow: var(--shadow-xl);
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s var(--curve-tentacle);
    `;

    const rect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    if (position === 'bottom') {
      tooltip.style.top = `${rect.bottom + 16}px`;
      tooltip.style.left = `${rect.left + rect.width / 2 - tooltipRect.width / 2}px`;
    } else if (position === 'top') {
      tooltip.style.bottom = `${window.innerHeight - rect.top + 16}px`;
      tooltip.style.left = `${rect.left + rect.width / 2 - tooltipRect.width / 2}px`;
    }

    // Ensure tooltip is visible
    const tooltipLeft = parseFloat(tooltip.style.left);
    if (tooltipLeft < 16) {
      tooltip.style.left = '16px';
    } else if (tooltipLeft + tooltipRect.width > window.innerWidth - 16) {
      tooltip.style.left = `${window.innerWidth - tooltipRect.width - 16}px`;
    }
  }

  next() {
    this.showStep(this.currentStep + 1);
  }

  previous() {
    this.showStep(this.currentStep - 1);
  }

  skip() {
    this.complete();
  }

  complete() {
    this.isActive = false;

    // Remove highlight
    document.querySelectorAll('.tutorial-highlight').forEach(el => {
      el.classList.remove('tutorial-highlight');
      el.style.position = '';
      el.style.zIndex = '';
    });

    // Remove tooltip
    if (this.tooltip) {
      this.tooltip.style.opacity = '0';
      setTimeout(() => this.tooltip.remove(), 300);
    }

    // Remove overlay
    if (this.overlay) {
      this.overlay.style.opacity = '0';
      setTimeout(() => this.overlay.remove(), 300);
    }

    // Mark as completed
    localStorage.setItem('octopus_tutorial_completed', 'true');
  }

  reset() {
    localStorage.removeItem('octopus_tutorial_completed');
  }
}

// Singleton instance (expose globally for classic script loading)
const tutorial = new InteractiveTutorial();
if (typeof window !== 'undefined') window.tutorial = tutorial;

// Auto-check on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => tutorial.checkFirstVisit());
} else {
  tutorial.checkFirstVisit();
}
