import { forwardRef } from 'react';
import Box from '../core/Box';
import Text from '../core/Text';
import Stack from '../core/Stack';

const MemoryHealth = forwardRef(({
  decisionsCount = 0,
  correctionsCount = 0,
  lastUpdated = null,
  className = '',
  style = {},
  ...rest
}, ref) => {
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
      <Stack gap={4}>
        <Text weight="semibold" style={{ color: 'var(--synapse-fg)' }}>
          Memory Health
        </Text>

        <Stack direction="row" gap={3}>
          <Box as="div" flex={1}>
            <Text size="sm" style={{ color: 'var(--synapse-fg-muted)', marginBottom: 4 }}>
              Decisions
            </Text>
            <Text weight="medium" style={{ color: 'var(--synapse-mind-architect)' }}>
              {decisionsCount ?? 0}
            </Text>
          </Box>
          <Box as="div" flex={1}>
            <Text size="sm" style={{ color: 'var(--synapse-fg-muted)', marginBottom: 4 }}>
              Corrections
            </Text>
            <Text weight="medium" style={{ color: 'var(--synapse-mind-debugger)' }}>
              {correctionsCount ?? 0}
            </Text>
          </Box>
        </Stack>

        {lastUpdated && (
          <Text size="xs" style={{ color: 'var(--synapse-fg-dim)' }}>
            Last updated: {new Date(lastUpdated).toLocaleString()}
          </Text>
        )}
      </Stack>
    </Box>
  );
});

MemoryHealth.displayName = 'MemoryHealth';

export default MemoryHealth;
