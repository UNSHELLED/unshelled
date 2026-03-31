import { Link } from "react-router-dom";
import { T, F } from "../theme/tokens.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { interiorSectionStyle } from "../layout/sectionStyle.js";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { Reveal } from "../components/Reveal.jsx";
import { Footer } from "../components/sections/Footer.jsx";
import { DocSection } from "../components/docs/DocSection.jsx";
import { CodeBlock } from "../components/docs/CodeBlock.jsx";
import { HonestyCallout } from "../components/docs/HonestyCallout.jsx";
import { DocsSidebarLeft } from "../components/docs/DocsSidebarLeft.jsx";
import { DocsSidebarRight } from "../components/docs/DocsSidebarRight.jsx";
import { BentoGrid } from "../components/docs/BentoGrid.jsx";
import { BentoCard } from "../components/docs/BentoCard.jsx";

const headings = [
  { id: "what-it-is", label: "What it is" },
  { id: "first-steps", label: "First Steps" },
  { id: "deployment", label: "Deployment" },
  { id: "trust-model", label: "Trust Model" },
];

export default function DocsPage() {
  const bp = useBreakpoint();
  const sec = interiorSectionStyle(bp);
  usePageTitle("Overview");

  const layoutStyle = {
    display: "flex",
    flexDirection: bp.desktop ? "row" : "column",
    gap: bp.desktop ? 40 : 24,
    alignItems: "flex-start",
    maxWidth: 1400,
    margin: "0 auto",
    marginTop: "var(--sv-nav-h)",
    paddingTop: 48,
  };

  const contentStyle = {
    flex: 1,
    minWidth: 0,
    maxWidth: 800,
    paddingBottom: 120,
  };

  const p = {
    fontSize: bp.compact ? 14 : 15,
    color: T.ghost,
    lineHeight: 1.7,
    marginBottom: 20,
    fontFamily: F.body,
  };

  const linkStyle = {
    color: T.pulse,
    textDecoration: "none",
    borderBottom: `1px solid ${T.pulse}55`,
    transition: "border-color 0.2s ease",
  };

  return (
    <>
      <article style={{ ...sec, ...layoutStyle }}>

        {/* THE MAP (Left Sidebar) */}
        <DocsSidebarLeft bp={bp} />

        {/* THE CANVAS (Center Content) */}
        <div style={contentStyle}>
          <Reveal>
            <h1 className="sv-display-xl" style={{ marginBottom: 16 }}>
              Overview
            </h1>
            <p style={{ ...p, fontSize: 18, color: T.bone, maxWidth: "90%" }}>
              ScentVision turns pixels into structured olfactory profiles — not chemical measurements. Every response carries explicit limits: what vision can suggest, what it cannot prove.
            </p>
          </Reveal>

          <DocSection id="what-it-is" title="What it is" delay={20}>
            <BentoGrid columns={2}>
              <BentoCard
                title="Strict Inference"
                description="An open-source pipeline (Apache 2.0) that generates calibrated olfactory guesses from images."
                icon={<span style={{ color: T.amber }}>🎯</span>}
                glowing={true}
              />
              <BentoCard
                title="Normative JSON"
                description="Powered by the olfactory_profile.v1 schema to enforce structural limits on AI outputs."
                icon={<span style={{ color: T.pulse }}>📋</span>}
              />
            </BentoGrid>
          </DocSection>

          <DocSection id="first-steps" title="First Steps" delay={40}>
            <p style={p}>
              The CLI is the fastest way to validate profiles against the schema. Check the GitHub repository for the full source.
            </p>
            <CodeBlock tabs content={[
              { label: "npm", code: "npm i @scentvision/cli" },
              { label: "yarn", code: "yarn add @scentvision/cli" },
              { label: "pnpm", code: "pnpm add @scentvision/cli" }
            ]} />
            <p style={p}>
              Once installed, you can validate a payload instantly:
            </p>
            <CodeBlock>scentvision validate ./profile.json</CodeBlock>
          </DocSection>

          <DocSection id="deployment" title="Deployment" delay={60}>
            <p style={p}>
              REST and WebSocket integration surfaces are currently in active development. For production usage today, you should deploy the core library natively within your CI/CD pipelines to validate AI-generated assets before they reach the user.
            </p>
          </DocSection>

          <DocSection id="trust-model" title="Trust Model" delay={80}>
            <HonestyCallout title="Strict Limits Required">
              The <strong style={{ color: T.rose }}>limits</strong> field is permanently required. It records invisible gases, cultural ambiguity, and anything pixels cannot justify. If your product touches health, safety, or listings, you must lead with disclosure. Inference without honesty is rejected by the protocol.
            </HonestyCallout>
            <p style={p}>
              Test limits directly in the <Link to="/playground" style={linkStyle}>Playground</Link>, which runs a local mocked envelope.
            </p>
          </DocSection>
        </div>

        {/* THE SPINE (Right Sidebar TOC) */}
        <DocsSidebarRight bp={bp} headings={headings} />

      </article>

      <Footer bp={bp} />
    </>
  );
}
