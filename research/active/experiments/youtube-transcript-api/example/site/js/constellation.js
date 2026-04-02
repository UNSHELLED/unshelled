/**
 * OCTOPUS Mind Constellation
 * Scenario-based mind collaboration visualization
 * Shows which minds activate for planning, fixing, learning
 */

(function () {
  'use strict';

  const SCENARIOS = {
    plan: [0, 1, 2, 5, 6], // Orchestrator, Parser, Analyzer, Mapper, Predictor
    fix: [0, 2, 4, 7],     // Orchestrator, Analyzer, Pattern, Communicator
    learn: [0, 3, 4, 8]    // Orchestrator, Historian, Pattern, Learner
  };

  const NODE_INDEX_TO_LINE = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8
  };

  const HASH_TO_MIND = {
    orchestrator: 0, parser: 1, analyzer: 2, historian: 3, pattern: 4,
    mapper: 5, predictor: 6, communicator: 7, learner: 8
  };

  function initConstellation() {
    const container = document.querySelector('.constellation-container');
    if (!container) return;

    const nodes = container.querySelectorAll('.constellation-node, .constellation-center');
    const lines = container.querySelectorAll('.constellation-lines line');
    const scenarioBtns = document.querySelectorAll('.scenario-btn');

    function clearActive() {
      nodes.forEach(node => {
        node.classList.remove('active');
        node.removeAttribute('aria-pressed');
      });
      if (lines.length) {
        lines.forEach(line => line.classList.remove('connection-active'));
      }
      scenarioBtns.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
    }

    function setActiveDetailCard(mindId) {
      const detailsSection = document.querySelector('.mind-details');
      const cards = document.querySelectorAll('[data-mind-detail]');
      if (!detailsSection || !cards.length) return;
      cards.forEach(function (card) {
        card.classList.toggle('active', card.getAttribute('data-mind-detail') === String(mindId));
      });
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function activateScenario(scenarioKey) {
      clearActive();
      const mindIds = SCENARIOS[scenarioKey];
      if (!mindIds) return;

      mindIds.forEach(mindId => {
        const node = container.querySelector(`[data-mind="${mindId}"]`);
        if (node) {
          node.classList.add('active');
          node.setAttribute('aria-pressed', 'true');
        }
        if (mindId > 0 && NODE_INDEX_TO_LINE[mindId] && lines[NODE_INDEX_TO_LINE[mindId] - 1]) {
          lines[NODE_INDEX_TO_LINE[mindId] - 1].classList.add('connection-active');
        }
      });

      scenarioBtns.forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.scenario === scenarioKey ? 'true' : 'false');
      });

      setActiveDetailCard(mindIds[0]);
    }

    scenarioBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const scenario = this.dataset.scenario;
        if (scenario && SCENARIOS[scenario]) {
          const isActive = this.getAttribute('aria-pressed') === 'true';
          if (isActive) {
            clearActive();
          } else {
            activateScenario(scenario);
          }
        }
      });
    });

    nodes.forEach(node => {
      node.addEventListener('click', function () {
        const mindId = this.dataset.mind;
        if (mindId === undefined) return;
        clearActive();
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');
        const lineIndex = NODE_INDEX_TO_LINE[mindId];
        if (lineIndex && lines[lineIndex - 1]) {
          lines[lineIndex - 1].classList.add('connection-active');
        }
        setActiveDetailCard(mindId);
      });
    });

    // Deep link: /minds/#parser etc. — show that mind and highlight its node
    var hash = window.location.hash.slice(1).toLowerCase();
    if (hash && HASH_TO_MIND[hash] !== undefined) {
      var mindId = HASH_TO_MIND[hash];
      var node = container.querySelector('[data-mind="' + mindId + '"]');
      if (node) {
        clearActive();
        node.classList.add('active');
        node.setAttribute('aria-pressed', 'true');
        if (mindId > 0 && NODE_INDEX_TO_LINE[mindId] && lines[NODE_INDEX_TO_LINE[mindId] - 1]) {
          lines[NODE_INDEX_TO_LINE[mindId] - 1].classList.add('connection-active');
        }
        setActiveDetailCard(mindId);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConstellation);
  } else {
    initConstellation();
  }
})();
