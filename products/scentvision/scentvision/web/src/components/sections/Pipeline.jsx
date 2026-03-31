import { T, F } from "../../theme/tokens.js";
import { sectionStyle } from "../../layout/sectionStyle.js";
import { Reveal } from "../Reveal.jsx";
import { Tag } from "../Tag.jsx";

const STEPS = [
  {
    n: "01",
    title: "Decompose",
    desc: "Vision model identifies objects, materials, spatial relationships, temperature cues, state of matter.",
    tech: "Pluggable: GPT-4V / Claude / Gemini / local",
    color: T.teal,
  },
  {
    n: "02",
    title: "Map",
    desc: "Materials resolved against the Scent Knowledge Graph — curated, versioned, community-maintained.",
    tech: "JSONL · ~500 entries at v0.1",
    color: T.pulse,
  },
  {
    n: "03",
    title: "Synthesize",
    desc: "Contextual blending: temperature, enclosure, humidity, interactions modify individual scent notes.",
    tech: "Structured prompt → constrained JSON",
    color: T.amber,
  },
  {
    n: "04",
    title: "Validate",
    desc: "Schema validation, confidence bounds, evidence tagging. Limits field always populated.",
    tech: "olfactory_profile.v1 schema",
    color: T.rose,
  },
];

export function Pipeline({ bp }) {
  const sec = sectionStyle(bp);

  return (
    <section style={sec}>
      <Reveal>
        <Tag label="PIPELINE" />
        <h2 className="sv-display-lg" style={{ marginBottom: 24 }}>
          Four layers. <span style={{ fontStyle: "italic", color: T.amber }}>Explicit at every step.</span>
        </h2>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: bp.mobile ? "1fr" : bp.tablet ? "1fr 1fr" : "repeat(4,1fr)",
          gap: 10,
        }}
      >
        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={i * 60}>
            <div
              style={{
                padding: bp.mobile ? 16 : 18,
                borderRadius: 8,
                border: `1px solid ${T.mute}`,
                background: T.abyss,
                minHeight: bp.mobile ? "auto" : 190,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: F.mono,
                  fontSize: 9,
                  color: step.color,
                  letterSpacing: "0.12em",
                  marginBottom: 8,
                }}
              >
                LAYER {step.n}
              </div>
              <div style={{ fontFamily: F.display, fontSize: 16, fontWeight: 500, color: T.bone, marginBottom: 6 }}>
                {step.title}
              </div>
              <div style={{ fontSize: 12, color: T.ghost, lineHeight: 1.55, marginBottom: 10, flex: 1 }}>{step.desc}</div>
              <div
                style={{
                  fontFamily: F.mono,
                  fontSize: 9,
                  color: T.dim,
                  borderTop: `1px solid ${T.mute}`,
                  paddingTop: 8,
                }}
              >
                {step.tech}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
