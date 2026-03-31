import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  className = '',
  style = {},
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  as: Component = 'button',
  ...rest
}, ref) => {
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 13 },
    md: { padding: '8px 16px', fontSize: 14 },
    lg: { padding: '12px 24px', fontSize: 16 },
  };

  const variants = {
    primary: {
      background: 'var(--synapse-mind-architect)',
      color: '#06060B',
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--synapse-fg)',
      border: '1px solid var(--synapse-border)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--synapse-fg-muted)',
      border: 'none',
    },
    danger: {
      background: 'var(--synapse-mind-debugger)',
      color: '#06060B',
      border: 'none',
    },
  };

  const sizeConfig = sizes[size] || sizes.md;
  const variantConfig = variants[variant] || variants.primary;

  const computedStyle = {
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif",
    fontWeight: 500,
    borderRadius: 4,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'all var(--synapse-duration-fast) var(--synapse-ease-default)',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    outline: 'none',
    ...sizeConfig,
    ...variantConfig,
    ...style,
  };

  const handleFocus = (e) => {
    if (!disabled) {
      e.target.style.boxShadow = 'var(--synapse-focus-ring)';
    }
  };

  const handleBlur = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const handleMouseEnter = (e) => {
    if (!disabled) {
      if (variant === 'primary') {
        e.target.style.filter = 'brightness(1.1)';
      } else if (variant === 'secondary' || variant === 'ghost') {
        e.target.style.background = 'var(--synapse-bg-elevated)';
      }
    }
  };

  const handleMouseLeave = (e) => {
    e.target.style.filter = 'none';
    if (variant === 'secondary' || variant === 'ghost') {
      e.target.style.background = variantConfig.background;
    }
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={computedStyle}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
