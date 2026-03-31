import { forwardRef } from 'react';

const Text = forwardRef(({
  as: Component = 'p',
  children,
  className = '',
  style = {},
  size = 'base',
  weight = 'regular',
  family = 'body',
  lineHeight,
  letterSpacing,
  align,
  truncate = false,
  color,
  ...rest
}, ref) => {
  const sizes = {
    '2xs': { fontSize: 10, lineHeight: 1.4 },
    xs: { fontSize: 11, lineHeight: 1.4 },
    sm: { fontSize: 13, lineHeight: 1.5 },
    base: { fontSize: 16, lineHeight: 1.6 },
    lg: { fontSize: 18, lineHeight: 1.5 },
    xl: { fontSize: 22, lineHeight: 1.4 },
    '2xl': { fontSize: 28, lineHeight: 1.3 },
    '3xl': { fontSize: 36, lineHeight: 1.2 },
    '4xl': { fontSize: 48, lineHeight: 1.1 },
    '5xl': { fontSize: 64, lineHeight: 1.0 },
    '6xl': { fontSize: 80, lineHeight: 1.0 },
  };

  const weights = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  };

  const families = {
    display: "'Newsreader', Georgia, 'Times New Roman', serif",
    body: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace",
  };

  const letterSpacingScale = {
    tight: '-0.04em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.1em',
  };

  const sizeConfig = sizes[size] || sizes.base;

  const computedStyle = {
    ...style,
    fontFamily: families[family],
    fontSize: sizeConfig.fontSize,
    fontWeight: weights[weight],
    lineHeight: lineHeight ?? sizeConfig.lineHeight,
    ...(letterSpacing && { letterSpacing: letterSpacingScale[letterSpacing] ?? letterSpacing }),
    ...(align && { textAlign: align }),
    ...(color && { color }),
    ...(truncate && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={computedStyle}
      {...rest}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';

export default Text;
