/** Standard section shell — responsive padding + short-landscape compaction */
export function sectionStyle(bp) {
  const px = bp.compact ? 14 : bp.mobile ? 16 : bp.tablet ? 24 : 32;
  const py = bp.landscapeCompact ? 36 : bp.mobile ? 48 : 64;

  return {
    position: "relative",
    zIndex: 2,
    padding: `${py}px ${px}px`,
    maxWidth: "min(960px, 100%)",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  };
}

/** Inner routes: clears fixed nav overlap while keeping horizontal rhythm */
export function interiorSectionStyle(bp) {
  const base = sectionStyle(bp);
  const topExtra = bp.landscapeCompact ? 20 : bp.mobile ? 28 : 40;
  return {
    ...base,
    paddingTop: `calc(var(--sv-nav-h, 56px) + ${topExtra}px)`,
  };
}
