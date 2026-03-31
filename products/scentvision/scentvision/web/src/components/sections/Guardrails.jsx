import { T, F } from "../../theme/tokens.js";
import { sectionStyle } from "../../layout/sectionStyle.js";
import { Reveal } from "../Reveal.jsx";
import { Tag } from "../Tag.jsx";

export function Guardrails({ bp }) {
  const sec = { ...sectionStyle(bp), maxWidth: 640 };

  return (
    <section style={sec}>
      <Reveal>
        <div
          style={{
            padding: bp.mobile ? "20px 16px" : "24px 22px",
            borderRadius: 10,
            border: `1px solid ${T.rose}15`,
            background: T.roseDim,
          }}
        >
          <Tag label="GUARDRAILS" color={T.rose} />
          <h3 className="sv-heading-card" style={{ marginBottom: 10 }}>
            What ScentVision is <span style={{ fontStyle: "italic", color: T.rose }}>not</span>
          </h3>
          <div style={{ fontSize: 12, color: T.ghost, lineHeight: 1.7 }}>
            <p style={{ marginBottom: 8 }}>
              Not a gas detector. Not an air quality monitor. Not a medical diagnostic tool. Not a safety system. Produces
              plausible inferences from visual cues — not chemical measurements.
            </p>
            <p style={{ marginBottom: 8 }}>Cannot detect: CO, radon, airborne pathogens, mold behind walls, or any non-visible substance.</p>
            <p>
              Cultural scent associations vary. <code>valence</code> defaults to <code>null</code> unless{" "}
              <code>cultural_context</code> is specified.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
