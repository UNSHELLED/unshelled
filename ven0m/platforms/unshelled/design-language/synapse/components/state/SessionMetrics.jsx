import { forwardRef } from 'react';
import Box from '../core/Box';
import Text from '../core/Text';
import Stack from '../core/Stack';

const SessionMetrics = forwardRef(({
  cost = 0,
  toolCalls = 0,
  fileWrites = 0,
  className = '',
  style = {},
  ...rest
}, ref) => {
  const metrics = [
    { label: 'Cost', value: `$${cost.toFixed(2)}`, color: 'var(--synapse-mind-architect)' },
    { label: 'Tool Calls', value: toolCalls, color: 'var(--synapse-mind-researcher)' },
    { label: 'File Writes', value: fileWrites, color: 'var(--synapse-mind-builder)' },
  ];

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
      <Stack gap={3}>
        {metrics.map((metric, index) => (
          <Box
            key={index}
            as="div"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text size="sm" style={{ color: 'var(--synapse-fg-muted)' }}>
              {metric.label}
            </Text>
            <Text weight="semibold" style={{ color: metric.color }}>
              {metric.value}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
});

SessionMetrics.displayName = 'SessionMetrics';

export default SessionMetrics;
