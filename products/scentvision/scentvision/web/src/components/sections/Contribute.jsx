import { T, F } from "../../theme/tokens.js";
import { sectionStyle } from "../../layout/sectionStyle.js";
import { Reveal } from "../Reveal.jsx";
import { Tag } from "../Tag.jsx";

const CARDS = [
  {
    title: "Add materials",
    desc: "Food, nature, industrial, textile. Needs descriptors, source citation, confidence basis.",
    path: "packages/skg/",
  },
  {
    title: "Improve synthesis",
    desc: "Contextual blending — how environment modifies scent.",
    path: "packages/core/src/",
  },
  {
    title: "Build ScentBench",
    desc: "Scene images + expert annotations. Calibrates confidence.",
    path: "packages/eval/",
  },
];

export function Contribute({ bp }) {
  const sec = sectionStyle(bp);

  return (
    <section style={sec}>
      <Reveal>
        <Tag label="CONTRIBUTE" color={T.pulse} />
        <h2 className="sv-display-lg" style={{ marginBottom: 12 }}>
          The scent graph is the moat. <span style={{ fontStyle: "italic", color: T.teal }}>Help build it.</span>
        </h2>
        <p style={{ fontSize: 13, color: T.ghost, lineHeight: 1.65, maxWidth: 500, marginBottom: 20 }}>
          The SKG maps materials to olfactory descriptors. JSONL, version-controlled, two reviewers per entry. Your expertise is
          the product.
        </p>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: bp.mobile ? "1fr" : "repeat(3,1fr)", gap: 10 }}>
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 50}>
            <div style={{ padding: bp.mobile ? 14 : 16, borderRadius: 8, border: `1px solid ${T.mute}`, background: T.abyss }}>
              <div style={{ fontFamily: F.display, fontSize: 14, fontWeight: 500, marginBottom: 5 }}>{c.title}</div>
              <div style={{ fontSize: 12, color: T.ghost, lineHeight: 1.5, marginBottom: 8 }}>{c.desc}</div>
              <code style={{ fontSize: 9 }}>{c.path}</code>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
