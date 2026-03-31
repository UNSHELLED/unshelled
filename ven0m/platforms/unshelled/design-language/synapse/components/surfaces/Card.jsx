import { forwardRef } from 'react';
import Box from '../core/Box';

const Card = forwardRef(({
  children,
  className = '',
  style = {},
  elevation = 'md',
  radius = 'lg',
  padding = 4,
  interactive = false,
  as: Component = 'div',
  ...rest
}, ref) => {
  const elevations = {
    none: {},
    xs: { boxShadow: 'var(--synapse-shadow-xs)' },
    sm: { boxShadow: 'var(--synapse-shadow-sm)' },
    md: { boxShadow: 'var(--synapse-shadow-md)' },
    lg: { boxShadow: 'var(--synapse-shadow-lg)' },
    xl: { boxShadow: 'var(--synapse-shadow-xl)' },
  };

  const radii = {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24,
  };

  const computedStyle = {
    background: 'var(--synapse-bg-elevated)',
    borderRadius: radii[radius] ?? radius,
    padding: typeof padding === 'number' ? padding * 4 : padding,
    ...elevations[elevation] || elevations.md,
    ...(interactive && {
      cursor: 'pointer',
      transition: 'box-shadow var(--synapse-duration-normal) var(--synapse-ease-default), transform var(--synapse-duration-normal) var(--synapse-ease-default)',
    }),
    ...style,
  };

  const handleMouseEnter = interactive ? (e) => {
    e.currentTarget.style.boxShadow = 'var(--synapse-shadow-lg)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  } : undefined;

  const handleMouseLeave = interactive ? (e) => {
    e.currentTarget.style.boxShadow = elevations[elevation]?.boxShadow || 'var(--synapse-shadow-md)';
    e.currentTarget.style.transform = 'translateY(0)';
  } : undefined;

  return (
    <Component
      ref={ref}
      className={className}
      style={computedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

export default Card;
