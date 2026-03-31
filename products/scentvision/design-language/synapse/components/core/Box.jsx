import { forwardRef } from 'react';

const Box = forwardRef(({
  as: Component = 'div',
  children,
  className = '',
  style = {},
  p, pt, pr, pb, pl, px, py,
  m, mt, mr, mb, ml, mx, my,
  w, h, minW, minH, maxW, maxH,
  display, flexDirection, alignItems, justifyContent, gap,
  position, top, right, bottom, left, zIndex,
  bg, color, borderRadius, border, borderColor,
  opacity, overflow, cursor, pointerEvents,
  ...rest
}, ref) => {
  const spacingScale = {
    0: 0, '0.5': 2, 1: 4, 1.5: 6, 2: 8, 2.5: 10, 3: 12, 4: 16,
    5: 20, 6: 24, 7: 28, 8: 32, 9: 36, 10: 40, 12: 48, 14: 56,
    16: 64, 20: 80, 24: 96, 32: 128
  };

  const getSpacing = (val) => {
    if (val === undefined) return undefined;
    if (typeof val === 'number') return spacingScale[val] ?? val;
    return val;
  };

  const radiiScale = {
    none: 0, xs: 2, sm: 4, md: 6, lg: 8, xl: 12, '2xl': 16, '3xl': 24, full: 9999
  };

  const getRadius = (val) => {
    if (val === undefined) return undefined;
    return radiiScale[val] ?? val;
  };

  const computedStyle = {
    ...style,
    ...(p !== undefined && { padding: getSpacing(p) }),
    ...(pt !== undefined && { paddingTop: getSpacing(pt) }),
    ...(pr !== undefined && { paddingRight: getSpacing(pr) }),
    ...(pb !== undefined && { paddingBottom: getSpacing(pb) }),
    ...(pl !== undefined && { paddingLeft: getSpacing(pl) }),
    ...(px !== undefined && { paddingLeft: getSpacing(px), paddingRight: getSpacing(px) }),
    ...(py !== undefined && { paddingTop: getSpacing(py), paddingBottom: getSpacing(py) }),
    ...(m !== undefined && { margin: getSpacing(m) }),
    ...(mt !== undefined && { marginTop: getSpacing(mt) }),
    ...(mr !== undefined && { marginRight: getSpacing(mr) }),
    ...(mb !== undefined && { marginBottom: getSpacing(mb) }),
    ...(ml !== undefined && { marginLeft: getSpacing(ml) }),
    ...(mx !== undefined && { marginLeft: getSpacing(mx), marginRight: getSpacing(mx) }),
    ...(my !== undefined && { marginTop: getSpacing(my), marginBottom: getSpacing(my) }),
    ...(w !== undefined && { width: w }),
    ...(h !== undefined && { height: h }),
    ...(minW !== undefined && { minWidth: minW }),
    ...(minH !== undefined && { minHeight: minH }),
    ...(maxW !== undefined && { maxWidth: maxW }),
    ...(maxH !== undefined && { maxHeight: maxH }),
    ...(display !== undefined && { display }),
    ...(flexDirection !== undefined && { flexDirection }),
    ...(alignItems !== undefined && { alignItems }),
    ...(justifyContent !== undefined && { justifyContent }),
    ...(gap !== undefined && { gap: getSpacing(gap) }),
    ...(position !== undefined && { position }),
    ...(top !== undefined && { top }),
    ...(right !== undefined && { right }),
    ...(bottom !== undefined && { bottom }),
    ...(left !== undefined && { left }),
    ...(zIndex !== undefined && { zIndex }),
    ...(bg !== undefined && { background: bg }),
    ...(color !== undefined && { color }),
    ...(borderRadius !== undefined && { borderRadius: getRadius(borderRadius) }),
    ...(border !== undefined && { border }),
    ...(borderColor !== undefined && { borderColor }),
    ...(opacity !== undefined && { opacity }),
    ...(overflow !== undefined && { overflow }),
    ...(cursor !== undefined && { cursor }),
    ...(pointerEvents !== undefined && { pointerEvents }),
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

Box.displayName = 'Box';

export default Box;
