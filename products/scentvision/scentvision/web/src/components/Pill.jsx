import { T, F } from "../theme/tokens.js";

const TIER = { top: "T", heart: "H", base: "B" };

export function Pill({ text, color, tier }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "4px 10px 4px 7px",
        borderRadius: 14,
        border: `1px solid ${color}18`,
        background: `${color}06`,
        fontSize: 12,
        color: T.bone,
        fontFamily: F.body,
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <span style={{ fontFamily: F.mono, fontSize: 7, color, opacity: 0.6 }}>{TIER[tier]}</span>
      {text}
    </span>
  );
}
