import { forwardRef } from 'react';
import Box from '../core/Box';
import Text from '../core/Text';
import Stack from '../core/Stack';

const WORKFLOW_COLORS = {
  idle: '#00D4FF',
  spec: '#FFB800',
  build: '#00FF88',
  debug: '#FF3366',
  eat: '#FF8844',
};

const PHASE_NAMES = ['Idle', 'Orient', 'Analyze', 'Plan', 'Build', 'Verify', 'Complete'];

const WorkflowPhase = forwardRef(({
  workflow = 'idle',
  phase = 0,
  phaseName,
  className = '',
  style = {},
  ...rest
}, ref) => {
  const workflowColor = WORKFLOW_COLORS[workflow] || WORKFLOW_COLORS.idle;
  const displayPhaseName = phaseName || PHASE_NAMES[phase] || 'Unknown';

  return (
    <Box
      ref={ref}
      as="div"
      className={className}
      style={{
        background: 'var(--synapse-bg-surface)',
        borderRadius: 8,
        padding: 16,
        minWidth: 200,
        ...style,
      }}
      {...rest}
    >
      <Stack gap={2}>
        <Box as="div" display="flex" alignItems="center" gap={2}>
          <Box
            as="span"
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: workflowColor,
              boxShadow: `0 0 8px ${workflowColor}`,
            }}
          />
          <Text
            weight="semibold"
            style={{
              color: workflowColor,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {workflow}
          </Text>
        </Box>
        
        <Box as="div" display="flex" alignItems="baseline" gap={2}>
          <Text size="sm" style={{ color: 'var(--synapse-fg-muted)' }}>
            Phase {phase}:
          </Text>
          <Text weight="medium" style={{ color: 'var(--synapse-fg)' }}>
            {displayPhaseName}
          </Text>
        </Box>

        <Box as="div" display="flex" gap={1} mt={2}>
          {PHASE_NAMES.slice(0, 6).map((_, index) => (
            <Box
              key={index}
              as="span"
              style={{
                flex: 1,
                height: 3,
                borderRadius: 2,
                background: index <= phase ? workflowColor : 'var(--synapse-void-border)',
                transition: 'background var(--synapse-duration-fast) var(--synapse-ease-default)',
              }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
});

WorkflowPhase.displayName = 'WorkflowPhase';

export default WorkflowPhase;
