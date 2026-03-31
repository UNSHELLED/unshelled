import { useState, useEffect, useCallback } from 'react';

const MIND_LIST = [
  { id: 'architect', name: 'Architect', color: '#00FF88', role: 'coordinates, routes, sees systems whole' },
  { id: 'researcher', name: 'Researcher', color: '#00D4FF', role: 'reads before acting, anatomy before plan' },
  { id: 'reviewer', name: 'Reviewer', color: '#FFB800', role: 'signal from noise, most critical first' },
  { id: 'historian', name: 'Historian', color: '#FF8844', role: 'what was decided, what we learned' },
  { id: 'builder', name: 'Builder', color: '#00FF88', role: 'complete output, no TODOs, no placeholders' },
  { id: 'debugger', name: 'Debugger', color: '#FF3366', role: 'root cause, proves, never guesses' },
  { id: 'predictor', name: 'Predictor', color: '#8855FF', role: 'what breaks next, proactive' },
  { id: 'communicator', name: 'Communicator', color: '#00D4FF', role: 'language adaptation, register matching' },
  { id: 'learner', name: 'Learner', color: '#FFB800', role: 'captures, evolves, routes learnings' },
];

const MIND_COLORS = {
  architect: '#00FF88',
  researcher: '#00D4FF',
  reviewer: '#FFB800',
  historian: '#FF8844',
  builder: '#00FF88',
  debugger: '#FF3366',
  predictor: '#8855FF',
  communicator: '#00D4FF',
  learner: '#FFB800',
};

const MIND_INITIALS = {
  architect: 'A',
  researcher: 'R',
  reviewer: 'V',
  historian: 'H',
  builder: 'B',
  debugger: 'D',
  predictor: 'P',
  communicator: 'C',
  learner: 'L',
};

const useMind = (initialMindId = null) => {
  const [activeMindId, setActiveMindId] = useState(initialMindId);

  useEffect(() => {
    const stored = localStorage.getItem('venom-active-mind');
    if (stored && MIND_LIST.find(m => m.id === stored)) {
      setActiveMindId(stored);
    } else if (initialMindId) {
      setActiveMindId(initialMindId);
    }
  }, [initialMindId]);

  const setMind = useCallback((mindId) => {
    if (mindId && MIND_LIST.find(m => m.id === mindId)) {
      setActiveMindId(mindId);
      localStorage.setItem('venom-active-mind', mindId);
    }
  }, []);

  const cycleMind = useCallback(() => {
    if (!activeMindId) {
      setMind('architect');
      return;
    }
    const currentIndex = MIND_LIST.findIndex(m => m.id === activeMindId);
    const nextIndex = (currentIndex + 1) % MIND_LIST.length;
    const nextMind = MIND_LIST[nextIndex];
    setActiveMindId(nextMind.id);
    localStorage.setItem('venom-active-mind', nextMind.id);
  }, [activeMindId, setMind]);

  const getMindColor = useCallback((mindId) => {
    return MIND_COLORS[mindId] || MIND_COLORS.architect;
  }, []);

  const activeMind = MIND_LIST.find(m => m.id === activeMindId) || MIND_LIST[0];

  return {
    activeMindId,
    activeMind,
    minds: MIND_LIST,
    setMind,
    cycleMind,
    getMindColor,
    MIND_COLORS,
    MIND_INITIALS,
  };
};

export default useMind;
