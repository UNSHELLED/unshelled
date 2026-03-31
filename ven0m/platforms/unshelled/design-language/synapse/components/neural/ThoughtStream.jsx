import { forwardRef, useEffect, useState } from 'react';
import Box from '../core/Box';
import Text from '../core/Text';

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

const ThoughtStream = forwardRef(({
  lines = [],
  mind = 'architect',
  typingSpeed = 30,
  showMindBadge = true,
  className = '',
  style = {},
  ...rest
}, ref) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const mindColor = MIND_COLORS[mind] || MIND_COLORS.architect;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
  }, [lines]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLines(lines);
      return;
    }

    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    if (!currentLine) return;

    if (currentCharIndex < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = { ...currentLine, text: '' };
          }
          newLines[currentLineIndex] = {
            ...newLines[currentLineIndex],
            text: currentLine.text.slice(0, currentCharIndex + 1),
          };
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentLineIndex(prev => prev + 1);
      setCurrentCharIndex(0);
    }, 100);
    return () => clearTimeout(timeout);
  }, [lines, currentLineIndex, currentCharIndex, typingSpeed, prefersReducedMotion]);

  return (
    <Box
      ref={ref}
      as="div"
      className={className}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        ...style,
      }}
      {...rest}
    >
      {displayedLines.map((line, index) => {
        const lineMind = line.mind || mind;
        const lineColor = MIND_COLORS[lineMind] || mindColor;
        const isComplete = index < currentLineIndex || 
          (index === currentLineIndex && currentCharIndex >= (lines[index]?.text?.length || 0));

        return (
          <Box
            key={index}
            as="div"
            display="flex"
            alignItems="flex-start"
            gap={2}
            mb={1}
            style={{
              opacity: isComplete ? 1 : 0.8,
            }}
          >
            {showMindBadge && (
              <Box
                as="span"
                style={{
                  color: lineColor,
                  fontWeight: 600,
                  minWidth: 24,
                  flexShrink: 0,
                }}
              >
                [{MIND_INITIALS[lineMind]}]
              </Box>
            )}
            <Text
              as="span"
              family="mono"
              size="sm"
              style={{
                color: 'var(--synapse-fg)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {line.text}
              {!isComplete && index === currentLineIndex && (
                <Box
                  as="span"
                  style={{
                    display: 'inline-block',
                    width: 2,
                    height: '1em',
                    background: lineColor,
                    marginLeft: 1,
                    animation: 'synapse-pulse 1s ease-in-out infinite',
                  }}
                />
              )}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
});

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

ThoughtStream.displayName = 'ThoughtStream';

export default ThoughtStream;
