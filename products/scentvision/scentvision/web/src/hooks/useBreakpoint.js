import { useEffect, useState } from "react";

const LANDSCAPE_COMPACT = "(max-height: 500px) and (orientation: landscape) and (max-width: 896px)";

/** mobile <640, tablet 640–1023, desktop ≥1024; compact <390 for narrow phones */
export function useBreakpoint() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  const [landscapeCompact, setLandscapeCompact] = useState(false);

  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(LANDSCAPE_COMPACT);
    const onChange = () => setLandscapeCompact(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const mobile = w < 640;
  const tablet = w >= 640 && w < 1024;
  const desktop = w >= 1024;
  const compact = w < 390;

  return { w, mobile, tablet, desktop, compact, landscapeCompact };
}
