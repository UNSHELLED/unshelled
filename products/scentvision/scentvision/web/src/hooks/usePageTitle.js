import { useEffect } from "react";

const BASE = "ScentVision — UNSHELLED.AI";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : BASE;
    return () => {
      document.title = BASE;
    };
  }, [title]);
}
