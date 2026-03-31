import { T, F } from "../../theme/tokens.js";
import { sectionStyle } from "../../layout/sectionStyle.js";
import { Reveal } from "../Reveal.jsx";
import { Tag } from "../Tag.jsx";

const MILESTONES = [
  {
    v: "v0.1",
    title: "Foundation",
    items: ["CLI tool", "~500 SKG entries", "Single-image", "Pluggable backends", "Schema v1"],
    color: T.amber,
    now: true,
  },
  {
    v: "v0.5",
    title: "Evaluation",
    items: ["ScentBench", "Confidence calibration", "Multi-frame video", "Web playground"],
    color: T.teal,
    now: false,
  },
  {
    v: "v1.0",
    title: "Production",
    items: ["REST + WS server", "~2K SKG entries", "Multilingual", "UNSHELLED Cloud"],
    color: T.rose,
    now: false,
  },
  {
    v: "v2.0",
    title: "Ecosystem",
    items: ["Plugin system", "SDKs", "Leaderboard", "Elected governance"],
    color: T.bone,
    now: false,
  },
];

export function Roadmap({ bp }) {
  const sec = sectionStyle(bp);

  return (
    <section style={sec}>
      <Reveal>
        <Tag label="ROADMAP" />
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: bp.mobile ? "1fr" : bp.tablet ? "1fr 1fr" : "repeat(4,1fr)",
          gap: 10,
        }}
      >
        {MILESTONES.map((m, i) => (
          <Reveal key={m.v} delay={i * 50}>
            <div
              style={{
                padding: bp.mobile ? 14 : 16,
                borderRadius: 8,
                border: `1px solid ${m.now ? `${m.color}28` : T.mute}`,
                background: m.now ? `${m.color}06` : "transparent",
                position: "relative",
              }}
            >
              {m.now && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: m.color,
                    borderRadius: "8px 8px 0 0",
                  }}
                />
              )}
              <div style={{ fontFamily: F.mono, fontSize: 10, color: m.color, fontWeight: 500, marginBottom: 3 }}>{m.v}</div>
              <div style={{ fontFamily: F.display, fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{m.title}</div>
              {m.items.map((it) => (
                <div
                  key={it}
                  style={{
                    fontSize: 12,
                    color: T.ghost,
                    marginBottom: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: m.now ? m.color : T.dim, fontSize: 6 }}>●</span>
                  {it}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
