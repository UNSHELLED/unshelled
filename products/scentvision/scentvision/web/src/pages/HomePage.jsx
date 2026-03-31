import { useCallback, useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { SCENES } from "../data/scenes.js";
import { Hero } from "../components/sections/Hero.jsx";
import { Gap } from "../components/sections/Gap.jsx";
import { Pipeline } from "../components/sections/Pipeline.jsx";
import { Demo } from "../components/sections/Demo.jsx";
import { ApiSection } from "../components/sections/ApiSection.jsx";
import { Contribute } from "../components/sections/Contribute.jsx";
import { Roadmap } from "../components/sections/Roadmap.jsx";
import { Guardrails } from "../components/sections/Guardrails.jsx";
import { Footer } from "../components/sections/Footer.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function HomePage() {
  const bp = useBreakpoint();
  const [scene, setScene] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const s = SCENES[scene];

  usePageTitle(null);

  const switchScene = useCallback((i) => {
    if (i === scene) return;
    setAnalyzing(true);
    setScene(i);
    setTimeout(() => setAnalyzing(false), 900);
  }, [scene]);

  return (
    <>
      <Hero bp={bp} />
      <Gap bp={bp} />
      <Pipeline bp={bp} />
      <Demo bp={bp} scene={scene} analyzing={analyzing} switchScene={switchScene} s={s} />
      <ApiSection bp={bp} />
      <Contribute bp={bp} />
      <Roadmap bp={bp} />
      <Guardrails bp={bp} />
      <Footer bp={bp} />
      <div style={{ height: bp.mobile ? 20 : 28 }} />
    </>
  );
}
