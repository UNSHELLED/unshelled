import { forwardRef, useState, useCallback } from 'react';
import Box from '../core/Box';

const MINDS = [
  { id: 'architect', color: '#00FF88', name: 'Architect', role: 'Coordinates' },
  { id: 'researcher', color: '#00D4FF', name: 'Researcher', role: 'Reads first' },
  { id: 'reviewer', color: '#FFB800', name: 'Reviewer', role: 'Critical eye' },
  { id: 'historian', color: '#FF8844', name: 'Historian', role: 'Memory' },
  { id: 'builder', color: '#00FF88', name: 'Builder', role: 'Creates' },
  { id: 'debugger', color: '#FF3366', name: 'Debugger', role: 'Root cause' },
  { id: 'predictor', color: '#8855FF', name: 'Predictor', role: 'Proactive' },
  { id: 'communicator', color: '#00D4FF', name: 'Communicator', role: 'Language' },
  { id: 'learner', color: '#FFB800', name: 'Learner', role: 'Evolves' },
];

const NineOrbit = forwardRef(({
  activeMind = 'architect',
  onMindChange,
  size = 300,
  showLabels = false,
  className = '',
  style = {},
  ...rest
}, ref) => {
  const [hoveredMind, setHoveredMind] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useState(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const centerX = size / 2;
  const centerY = size / 2;
  const orbitRadius = size * 0.38;
  const nodeRadius = size * 0.06;
  const coreRadius = size * 0.08;

  const getMindPosition = useCallback((index) => {
    const angle = (index / 9) * 2 * Math.PI - Math.PI / 2;
    return {
      x: centerX + orbitRadius * Math.cos(angle),
      y: centerY + orbitRadius * Math.sin(angle),
    };
  }, [centerX, centerY, orbitRadius]);

  const handleMindClick = useCallback((mindId) => {
    if (onMindChange) {
      onMindChange(mindId);
    }
  }, [onMindChange]);

  return (
    <Box
      ref={ref}
      as="div"
      className={className}
      style={{
        width: size,
        height: size,
        position: 'relative',
        ...style,
      }}
      role="img"
      aria-label="Nine minds orbit visualization"
      {...rest}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}
      >
        <defs>
          <filter id="orbit-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="core-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx={centerX}
          cy={centerY}
          r={orbitRadius}
          fill="none"
          stroke="var(--synapse-border)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        <g
          style={{
            transformOrigin: `${centerX}px ${centerY}px`,
            animation: prefersReducedMotion ? 'none' : 'synapse-orbit 60s linear infinite',
          }}
        >
          {MINDS.map((mind, index) => {
            const pos = getMindPosition(index);
            const isActive = activeMind === mind.id;
            const isHovered = hoveredMind === mind.id;
            const nodeSize = nodeRadius * (isActive ? 1.3 : isHovered ? 1.15 : 1);

            return (
              <g
                key={mind.id}
                style={{
                  cursor: onMindChange ? 'pointer' : 'default',
                  transformOrigin: `${pos.x}px ${pos.y}px`,
                  transform: `rotate(${-index * 40}deg)`,
                  animation: prefersReducedMotion ? 'none' : `synapse-orbit 60s linear infinite reverse`,
                }}
                onClick={() => handleMindClick(mind.id)}
                onMouseEnter={() => setHoveredMind(mind.id)}
                onMouseLeave={() => setHoveredMind(null)}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeSize}
                  fill={mind.color}
                  filter={isActive ? 'url(#orbit-glow)' : undefined}
                  style={{
                    opacity: isActive ? 1 : isHovered ? 0.8 : 0.6,
                    boxShadow: isActive ? `0 0 20px ${mind.color}50` : undefined,
                    animation: isActive && !prefersReducedMotion ? 'synapse-pulse 2s ease-in-out infinite' : undefined,
                  }}
                />
                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#06060B"
                  fontSize={nodeSize * 0.9}
                  fontWeight="600"
                  style={{ pointerEvents: 'none' }}
                >
                  {mind.name[0]}
                </text>
              </g>
            );
          })}
        </g>

        <circle
          cx={centerX}
          cy={centerY}
          r={coreRadius}
          fill="var(--synapse-mind-architect)"
          filter="url(#core-glow)"
          style={{
            animation: !prefersReducedMotion ? 'synapse-pulse 3s ease-in-out infinite' : undefined,
          }}
        />
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#06060B"
          fontSize={coreRadius * 0.7}
          fontWeight="700"
          style={{ pointerEvents: 'none' }}
        >
          V
        </text>
      </svg>

      {showLabels && hoveredMind && (
        <Box
          as="div"
          style={{
            position: 'absolute',
            bottom: -30,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--synapse-bg-elevated)',
            padding: '4px 12px',
            borderRadius: 4,
            fontSize: 12,
            whiteSpace: 'nowrap',
            color: 'var(--synapse-fg)',
            boxShadow: 'var(--synapse-shadow-md)',
          }}
        >
          {MINDS.find(m => m.id === hoveredMind)?.name}
        </Box>
      )}
    </Box>
  );
});

NineOrbit.displayName = 'NineOrbit';

export default NineOrbit;
