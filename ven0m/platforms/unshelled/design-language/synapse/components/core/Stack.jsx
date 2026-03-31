import { forwardRef } from 'react';
import Box from './Box';

const Stack = forwardRef(({
  children,
  direction = 'column',
  gap = 2,
  align = 'stretch',
  justify = 'flex-start',
  wrap = 'nowrap',
  className = '',
  style = {},
  ...rest
}, ref) => {
  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection={direction}
      gap={gap}
      alignItems={align}
      justifyContent={justify}
      flexWrap={wrap}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Box>
  );
});

Stack.displayName = 'Stack';

export default Stack;
