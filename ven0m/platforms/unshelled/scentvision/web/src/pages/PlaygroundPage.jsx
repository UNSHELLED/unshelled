import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { T, F } from "../theme/tokens.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { interiorSectionStyle } from "../layout/sectionStyle.js";
import { SCENES } from "../data/scenes.js";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { Reveal } from "../components/Reveal.jsx";
import { Tag } from "../components/Tag.jsx";
import { Demo } from "../components/sections/Demo.jsx";
import { Footer } from "../components/sections/Footer.jsx";

export default function PlaygroundPage() {
  const bp = useBreakpoint();
  const sec = interiorSectionStyle(bp);
  const [scene, setScene] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const s = SCENES[scene];
  usePageTitle("Playground");

  const switchScene = useCallback((i) => {
    if (i === scene) return;
    setAnalyzing(true);
    setScene(i);
    setTimeout(() => setAnalyzing(false), 900);
  }, [scene]);

  return (
    <>
      <div style={sec}>
        <Reveal>
          <Tag label="PROTOTYPE" color={T.pulse} />
          <h1 className="sv-display-lg" style={{ marginBottom: 14, maxWidth: 560 }}>
            Playground
          </h1>
          <p
            style={{
              fontSize: bp.compact ? 13 : 14,
              color: T.ghost,
              lineHeight: 1.75,
              marginBottom: 28,
              maxWidth: 560,
            }}
          >
            This page is <strong style={{ color: T.bone }}>100% local</strong>: scene cards and timing simulate a future API. No requests leave your
            machine. When the CLI or hosted surface ships, swap the mock for real <code style={{ color: T.bone }}>request_id</code> traces — the envelope
            stays <code style={{ color: T.bone }}>olfactory_profile.v1</code>. See{" "}
            <Link to="/schema" style={{ color: T.pulse, textDecoration: "none", borderBottom: `1px solid ${T.pulse}55` }}>
              Schema
            </Link>
            .
          </p>
        </Reveal>
        <Demo bp={bp} scene={scene} analyzing={analyzing} switchScene={switchScene} s={s} />
        <Reveal delay={60}>
          <p
            style={{
              fontFamily: F.mono,
              fontSize: 10,
              color: T.dim,
              marginTop: 32,
              lineHeight: 1.6,
            }}
          >
            Limits still apply: plausible inference from pixels, not air sampling.
          </p>
        </Reveal>
      </div>
      <Footer bp={bp} />
      <div style={{ height: bp.mobile ? 20 : 28 }} />
    </>
  );
}
