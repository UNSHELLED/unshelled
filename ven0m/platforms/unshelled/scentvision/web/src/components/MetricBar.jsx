import { useEffect, useState } from "react";
import { T, F } from "../theme/tokens.js";

export function MetricBar({ value, color, label, delay = 0 }) {
  const [widthPct, setWidthPct] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidthPct(Math.abs(value) * 100), 60 + delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
        <span style={{ fontFamily: F.mono, fontSize: 9, color: T.ghost }}>{label}</span>
        <span style={{ fontFamily: F.mono, fontSize: 9, color }}>
          {value >= 0 ? "+" : ""}
          {(value * 100).toFixed(0)}%
        </span>
      </div>
      <div style={{ height: 2, background: T.mute, borderRadius: 1, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${widthPct}%`,
            background: color,
            borderRadius: 1,
            transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
