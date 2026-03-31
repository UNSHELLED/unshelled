import { useMemo } from "react";
import { T } from "../theme/tokens.js";

export function ParticleField({ mobile }) {
  const particles = useMemo(
    () =>
      Array.from({ length: mobile ? 8 : 14 }, () => ({
        x: Math.random() * 100,
        d: Math.random() * 10,
        dur: 12 + Math.random() * 16,
        sz: 3 + Math.random() * 5,
        c: [T.amber, T.teal, T.rose][Math.floor(Math.random() * 3)],
      })),
    [mobile]
  );

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {particles.map((p, i) => (
        <div
          className="scent-particle"
          key={i}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: -8,
            width: p.sz,
            height: p.sz,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.c}25 0%, transparent 70%)`,
            animation: `drift ${p.dur}s ease-out ${p.d}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
