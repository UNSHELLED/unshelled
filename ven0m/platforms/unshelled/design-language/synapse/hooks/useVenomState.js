import { useState, useEffect, useCallback } from 'react';

const loadJSON = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};

const useVenomState = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const loadState = useCallback(async () => {
    try {
      const [sessionMetrics, workflowState, memoryHealth] = await Promise.all([
        loadJSON('/.venom/state/session-metrics.json'),
        loadJSON('/.venom/state/workflow-state.json'),
        loadJSON('/.venom/state/memory-health.json'),
      ]);
      
      setState({
        ...initialState,
        sessionMetrics,
        workflowState,
        memoryHealth,
      });
    } catch (error) {
      console.error('Failed to load VENOM state:', error);
    }
  }, [initialState]);

  useEffect(() => {
    loadState();
  }, [loadState]);

  useEffect(() => {
    const interval = setInterval(loadState, 5000);
    return () => clearInterval(interval);
  }, [loadState]);

  const refresh = useCallback(() => {
    loadState();
  }, [loadState]);

  return {
    state,
    refresh,
    setState,
  };
};

export default useVenomState;
