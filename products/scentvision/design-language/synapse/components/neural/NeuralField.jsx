import { useEffect, useRef, useState } from 'react';
import Box from '../core/Box';

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

const NeuralField = ({
  intensity = 'idle',
  mind = 'architect',
  particleCount = 50,
  connectionCount = 30,
  className = '',
  style = {},
}) => {
  const svgRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [connections, setConnections] = useState([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.4,
      speed: 0.02 + Math.random() * 0.08,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  useEffect(() => {
    const newConnections = Array.from({ length: connectionCount }, (_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setConnections(newConnections);
  }, [connectionCount]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let animationFrame;
    const animate = () => {
      setParticles(prev => prev.map(p => {
        let newY = p.y - p.speed;
        if (newY < 0) {
          newY = 100;
        }
        return { ...p, y: newY };
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [prefersReducedMotion]);

  const mindColor = MIND_COLORS[mind] || MIND_COLORS.architect;
  
  const intensityConfig = {
    idle: { particleOpacity: 0.3, connectionOpacity: 0.1, glowRadius: 2 },
    thinking: { particleOpacity: 0.6, connectionOpacity: 0.3, glowRadius: 4 },
    deep: { particleOpacity: 0.9, connectionOpacity: 0.5, glowRadius: 6 },
  };

  const config = intensityConfig[intensity] || intensityConfig.idle;

  return (
    <Box
      as="div"
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'transparent',
        ...style,
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <defs>
          <filter id="neural-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={config.glowRadius} result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="connections">
          {connections.map(conn => (
            <line
              key={conn.id}
              x1={`${conn.x1}%`}
              y1={`${conn.y1}%`}
              x2={`${conn.x2}%`}
              y2={`${conn.y2}%`}
              stroke={mindColor}
              strokeWidth="0.1"
              strokeOpacity={conn.opacity * (config.connectionOpacity / 0.3)}
              filter="url(#neural-glow)"
            />
          ))}
        </g>

        <g className="particles">
          {particles.map(particle => (
            <circle
              key={particle.id}
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r={particle.size}
              fill={mindColor}
              opacity={particle.opacity * (config.particleOpacity / 0.5)}
              filter="url(#neural-glow)"
            />
          ))}
        </g>
      </svg>
    </Box>
  );
};

NeuralField.displayName = 'NeuralField';

export default NeuralField;
