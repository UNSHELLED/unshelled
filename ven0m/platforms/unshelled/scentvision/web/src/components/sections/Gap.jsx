import { T, F } from "../../theme/tokens.js";
import { sectionStyle } from "../../layout/sectionStyle.js";
import { Reveal } from "../Reveal.jsx";
import { Tag } from "../Tag.jsx";

const ROWS = [
  { name: "Osmo", desc: "Molecule → scent via GNNs", req: "Spectrometer", src: "$130M — BusinessWire Feb 2026", hl: false },
  { name: "Aryballe", desc: "Biochem sensor + ML", req: "NeOse hardware", src: "~€19M — Tracxn", hl: false },
  { name: "ScentVision", desc: "Vision → scent inference", req: "None", src: "Open source · Apache-2.0", hl: true },
];

export function Gap({ bp }) {
  const sec = sectionStyle(bp);
  const srcSize = bp.compact ? 8 : 9;

  return (
    <section style={sec}>
      <Reveal>
        <Tag label="THE GAP" color={T.rose} />
        <h2 className="sv-display-lg" style={{ marginBottom: 14, maxWidth: 540 }}>
          Every digital scent company requires hardware. <span style={{ fontStyle: "italic", color: T.rose }}>We don&apos;t.</span>
        </h2>
        <p style={{ fontSize: 13, color: T.ghost, lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
          Existing players depend on physical sensors, spectrometers, or delivery devices. ScentVision is software-only.
        </p>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {ROWS.map((c, i) => (
          <Reveal key={c.name} delay={i * 50}>
            <div
              style={{
                display: "flex",
                flexDirection: bp.mobile ? "column" : "row",
                gap: bp.mobile ? 4 : 12,
                alignItems: bp.mobile ? "stretch" : "center",
                padding: bp.mobile ? "12px 14px" : "12px 16px",
                borderRadius: 8,
                border: `1px solid ${c.hl ? `${T.amber}25` : T.mute}`,
                background: c.hl ? T.amberDim : "transparent",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: F.mono,
                  fontSize: bp.compact ? 10 : 11,
                  color: c.hl ? T.amber : T.bone,
                  fontWeight: 500,
                  minWidth: bp.mobile ? "auto" : 100,
                }}
              >
                {c.name}
              </span>
              <span style={{ fontSize: 12, color: T.ghost, flex: 1, overflowWrap: "anywhere" }}>{c.desc}</span>
              <span
                style={{
                  fontFamily: F.mono,
                  fontSize: bp.compact ? 9 : 10,
                  color: c.hl ? T.amber : T.dim,
                  minWidth: bp.mobile ? "auto" : 90,
                  overflowWrap: "anywhere",
                }}
              >
                {bp.mobile ? `HW: ${c.req}` : c.req}
              </span>
              <span
                style={{
                  fontFamily: F.mono,
                  fontSize: srcSize,
                  color: T.dim,
                  overflowWrap: "anywhere",
                  lineHeight: 1.4,
                }}
              >
                {c.src}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
