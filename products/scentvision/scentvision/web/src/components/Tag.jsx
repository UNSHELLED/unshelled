import { T, F } from "../theme/tokens.js";

export function Tag({ label, color = T.amber }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{ width: 14, height: 1, background: color }} />
      <span style={{ fontFamily: F.mono, fontSize: 9, letterSpacing: "0.2em", color, fontWeight: 500 }}>{label}</span>
    </div>
  );
}
