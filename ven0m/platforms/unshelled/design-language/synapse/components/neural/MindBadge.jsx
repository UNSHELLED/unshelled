import { forwardRef } from 'react';
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

const MIND_NAMES = {
  architect: 'Architect',
  researcher: 'Researcher',
  reviewer: 'Reviewer',
  historian: 'Historian',
  builder: 'Builder',
  debugger: 'Debugger',
  predictor: 'Predictor',
  communicator: 'Communicator',
  learner: 'Learner',
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

const MindBadge = forwardRef(({
  mind = 'architect',
  pulse = false,
  showName = false,
  size = 'md',
  className = '',
  style = {},
  ...rest
}, ref) => {
  const mindColor = MIND_COLORS[mind] || MIND_COLORS.architect;
  const mindName = MIND_NAMES[mind] || 'Unknown';
  const initial = MIND_INITIALS[mind] || '?';

  const sizes = {
    sm: { badge: 24, fontSize: 11 },
    md: { badge: 32, fontSize: 13 },
    lg: { badge: 40, fontSize: 16 },
  };

  const sizeConfig = sizes[size] || sizes.md;

  return (
    <Box
      ref={ref}
      as="div"
      display="inline-flex"
      alignItems="center"
      gap={2}
      className={className}
      style={style}
      {...rest}
    >
      <Box
        as="span"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={sizeConfig.badge}
        h={sizeConfig.badge}
        borderRadius="full"
        style={{
          background: mindColor,
          color: '#06060B',
          fontWeight: 600,
          fontSize: sizeConfig.fontSize,
          boxShadow: pulse ? `0 0 20px ${mindColor}40, 0 0 40px ${mindColor}20` : undefined,
          animation: pulse ? 'synapse-pulse 2s ease-in-out infinite' : undefined,
        }}
        role="img"
        aria-label={`${mindName} mind active`}
      >
        {initial}
      </Box>
      {showName && (
        <Text
          size="sm"
          weight="medium"
          style={{ color: mindColor }}
        >
          {mindName}
        </Text>
      )}
    </Box>
  );
});

MindBadge.displayName = 'MindBadge';

export default MindBadge;
