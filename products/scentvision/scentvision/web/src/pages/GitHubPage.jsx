import { Link } from "react-router-dom";
import pack from "../../../../design-language/voidweave/tokens.json";
import { T, F } from "../theme/tokens.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { interiorSectionStyle } from "../layout/sectionStyle.js";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { Reveal } from "../components/Reveal.jsx";
import { Tag } from "../components/Tag.jsx";
import { Footer } from "../components/sections/Footer.jsx";

const GH_REPO = "https://github.com/unshelled-ai/scentvision";
const BH = pack.brandHierarchy;

const TAB_LINKS = [
  { label: "Code", href: null, active: true },
  { label: "Issues", href: `${GH_REPO}/issues` },
  { label: "Pull requests", href: `${GH_REPO}/pulls` },
  { label: "Actions", href: `${GH_REPO}/actions` },
  { label: "Projects", href: `${GH_REPO}/projects` },
  { label: "Security", href: `${GH_REPO}/security` },
  { label: "Insights", href: `${GH_REPO}/pulse` },
];

const FILE_ROWS = [
  { name: "README.md", msg: "docs: Voidweave braid + inference honesty gate", time: "—" },
  { name: "LICENSE", msg: "Apache-2.0 — patent grant for contributors", time: "—" },
  { name: "schema/olfactory_profile.v1.json", msg: "normative envelope — limits field required", time: "—" },
  { name: "web/package.json", msg: "ScentVision marketing site (Vite + React)", time: "—" },
  { name: "cli/", msg: "CLI entry — pluggable vision backends", time: "—" },
];

function RepoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden style={{ flexShrink: 0, opacity: 0.85 }}>
      <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-1.25h-1a.75.75 0 010-1.5h1v-1.5H4.5a.75.75 0 010-1.5h7.25V2.5H4.5zM8 12.5h4.5v1H8v-1z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={T.teal} aria-hidden style={{ flexShrink: 0, opacity: 0.9 }}>
      <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2A1.75 1.75 0 005.75 1H1.75z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={T.ghost} aria-hidden style={{ flexShrink: 0 }}>
      <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0114.25 16h-9.5A1.75 1.75 0 012 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75z" />
    </svg>
  );
}

export default function GitHubPage() {
  const bp = useBreakpoint();
  usePageTitle("GitHub");

  const outerPad = bp.compact ? 12 : bp.mobile ? 14 : 20;
  const chromeBorder = `1px solid ${T.edge}`;
  const rowHover = { transition: "background 0.15s ease" };

  const tabBar = {
    display: "flex",
    gap: 0,
    flexWrap: "wrap",
    borderBottom: chromeBorder,
    marginBottom: 0,
  };

  const tabItem = (active) => ({
    fontFamily: F.body,
    fontSize: 13,
    fontWeight: active ? 600 : 400,
    color: active ? T.bone : T.ghost,
    padding: "10px 14px",
    minHeight: 44,
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    borderBottom: active ? `2px solid ${T.pulse}` : "2px solid transparent",
    marginBottom: -1,
    boxSizing: "border-box",
  });

  return (
    <>
      <article
        style={{
          ...interiorSectionStyle(bp),
          maxWidth: pack.layout.repoPreviewContentMax,
          paddingLeft: `max(${outerPad}px, env(safe-area-inset-left, 0px))`,
          paddingRight: `max(${outerPad}px, env(safe-area-inset-right, 0px))`,
        }}
      >
        <Reveal>
          <Tag label="VOIDWEAVE · REPO PREVIEW" color={T.teal} />
          <p style={{ fontFamily: F.mono, fontSize: 11, color: T.dim, marginBottom: 8, maxWidth: 720, lineHeight: 1.6 }}>
            This route is a <strong style={{ color: T.bone }}>ScentVision-native</strong> interpretation of an OSS repository home — not GitHub™. Same information architecture as a real repo:
            proof-forward layout, mono accountability, and explicit <span style={{ color: T.rose }}>honesty</span> about inference limits (VENOM / Voidweave ship gate).
          </p>
          <h1 className="sv-display-lg" style={{ marginBottom: 6, fontSize: bp.mobile ? "clamp(1.35rem, 5vw, 1.75rem)" : undefined }}>
            GitHub surface — UNSHELLED / ScentVision
          </h1>
          <p style={{ fontSize: bp.compact ? 13 : 14, color: T.ghost, lineHeight: 1.7, maxWidth: 640, marginBottom: 28 }}>
            Voidweave braid: <strong style={{ color: T.bone }}>void</strong> depth, <strong style={{ color: T.bone }}>bone</strong> readability, <strong style={{ color: T.amber }}>proof</strong> in mono,
            rare <strong style={{ color: T.pulse }}>pulse</strong> only where something is verifiably true or open.
          </p>
        </Reveal>

        <Reveal delay={50}>
          <div
            style={{
              borderRadius: pack.radii.lg,
              border: chromeBorder,
              background: T.abyss,
              overflow: "hidden",
              boxShadow: `0 0 0 1px ${T.faint}`,
            }}
          >
            {/* Repo title bar */}
            <div
              style={{
                padding: bp.mobile ? "14px 16px" : "18px 20px",
                borderBottom: chromeBorder,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 12,
                background: `linear-gradient(180deg, ${T.surface}33 0%, transparent 100%)`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, flex: "1 1 200px" }}>
                <RepoIcon />
                <span style={{ fontFamily: F.mono, fontSize: bp.mobile ? 13 : 15, color: T.bone, wordBreak: "break-all" }}>
                  <span style={{ color: T.ghost }}>unshelled-ai</span>
                  <span style={{ color: T.dim }}> / </span>
                  <strong>scentvision</strong>
                </span>
                <span
                  style={{
                    fontFamily: F.mono,
                    fontSize: 10,
                    letterSpacing: "0.06em",
                    color: T.ghost,
                    border: `1px solid ${T.mute}`,
                    borderRadius: 999,
                    padding: "4px 10px",
                    flexShrink: 0,
                  }}
                >
                  Public
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                <a
                  href={GH_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: F.mono,
                    fontSize: 12,
                    fontWeight: 600,
                    color: T.void,
                    background: T.pulse,
                    padding: "8px 16px",
                    borderRadius: 6,
                    textDecoration: "none",
                    minHeight: 44,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Open on GitHub ↗
                </a>
              </div>
            </div>

            {/* Tabs — external links except Code (this page) */}
            <div role="tablist" aria-label="Repository sections" style={{ ...tabBar, paddingLeft: 8, paddingRight: 8 }}>
              {TAB_LINKS.map((t) =>
                t.href ? (
                  <a
                    key={t.label}
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="tab"
                    style={tabItem(false)}
                  >
                    {t.label}
                  </a>
                ) : (
                  <span key={t.label} role="tab" aria-selected="true" style={{ ...tabItem(true), cursor: "default" }}>
                    {t.label}
                  </span>
                )
              )}
            </div>

            {/* Toolbar */}
            <div
              style={{
                padding: "12px 16px",
                borderBottom: chromeBorder,
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                alignItems: "center",
                background: T.void,
              }}
            >
              <button
                type="button"
                disabled
                aria-label="Default branch"
                style={{
                  fontFamily: F.mono,
                  fontSize: 11,
                  color: T.bone,
                  background: T.surface,
                  border: `1px solid ${T.edge}`,
                  borderRadius: 6,
                  padding: "8px 12px",
                  minHeight: 44,
                  cursor: "default",
                }}
              >
                main ▾
              </button>
              <span style={{ fontFamily: F.mono, fontSize: 11, color: T.ghost }}>3 Branches · 0 Tags</span>
              <span style={{ flex: 1, minWidth: 8 }} />
              <span style={{ fontFamily: F.mono, fontSize: 10, color: T.dim }}>Go to file · Add file ·</span>
              <span style={{ fontFamily: F.mono, fontSize: 10, color: T.pulse }}> Limits always in schema ✓</span>
            </div>

            {/* Commit summary row */}
            <div
              style={{
                padding: "12px 16px",
                borderBottom: chromeBorder,
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                alignItems: "center",
                fontFamily: F.mono,
                fontSize: 11,
                color: T.ghost,
                background: T.abyss,
              }}
            >
              <span style={{ color: T.bone, fontWeight: 600 }}>UNSHELLED</span>
              <span style={{ color: T.dim }}>·</span>
              <span>Example commit message — real history lives on GitHub</span>
              <span style={{ flex: 1 }} />
              <span style={{ color: T.dim }}>Timestamps on</span>{" "}
              <a href={`${GH_REPO}/commits`} target="_blank" rel="noopener noreferrer" style={{ color: T.teal, textDecoration: "none" }}>
                github.com ↗
              </a>
            </div>

            {/* File table */}
            <div role="table" aria-label="Repository files" style={{ width: "100%" }}>
              {FILE_ROWS.map((row) => {
                const isDir = row.name.endsWith("/");
                return (
                  <div
                    key={row.name}
                    role="row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: bp.mobile ? "1fr" : "minmax(140px, 32%) 1fr minmax(100px, 18%)",
                      gap: bp.mobile ? 6 : 12,
                      padding: "10px 16px",
                      borderBottom: `1px solid ${T.mute}`,
                      alignItems: "center",
                      ...rowHover,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = T.mute;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div role="cell" style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                      {isDir ? <FolderIcon /> : <FileIcon />}
                      <span style={{ fontFamily: F.mono, fontSize: 12, color: T.teal, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {row.name}
                      </span>
                    </div>
                    <div role="cell" style={{ fontFamily: F.body, fontSize: 12, color: T.ghost, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {row.msg}
                    </div>
                    <div role="cell" style={{ fontFamily: F.mono, fontSize: 11, color: T.dim, textAlign: bp.mobile ? "left" : "right" }}>
                      {row.time}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* README panel */}
            <div style={{ padding: bp.mobile ? 18 : 28, background: T.void, borderTop: chromeBorder }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${T.mute}`,
                }}
              >
                <FileIcon />
                <span style={{ fontFamily: F.display, fontSize: bp.mobile ? 18 : 22, color: T.bone }}>README.md</span>
                <span style={{ fontFamily: F.mono, fontSize: 10, color: T.pulse, marginLeft: "auto" }}>Apache-2.0</span>
              </div>

              <div style={{ maxWidth: 800 }}>
                <h2 className="sv-display-lg" style={{ fontSize: bp.mobile ? 22 : 28, marginBottom: 12 }}>
                  ScentVision
                </h2>
                <p style={{ fontSize: 14, color: T.ghost, lineHeight: 1.75, marginBottom: 20 }}>
                  Cross-modal <strong style={{ color: T.bone }}>visual → olfactory</strong> inference with a normative JSON schema. Software-only — no e-nose hardware. Every profile carries a{" "}
                  <code style={{ fontFamily: F.mono, fontSize: 12, color: T.amber, background: T.amberDim, padding: "2px 6px", borderRadius: 4 }}>limits</code> field: what pixels cannot prove.
                </p>

                <h3 style={{ fontFamily: F.display, fontSize: 18, color: T.bone, marginTop: 28, marginBottom: 10 }}>Brand hierarchy</h3>
                <pre
                  style={{
                    fontFamily: F.mono,
                    fontSize: 11,
                    lineHeight: 1.6,
                    color: T.ghost,
                    background: T.abyss,
                    border: `1px solid ${T.edge}`,
                    borderRadius: 8,
                    padding: 16,
                    overflow: "auto",
                    marginBottom: 20,
                  }}
                >
                  {`${BH.primary}\n  └── ${BH.product}\n        └── ${BH.methodologyAttribution}   ← ${BH.methodologyRule.replace(/_/g, " ")}`}
                </pre>

                <h3 style={{ fontFamily: F.display, fontSize: 18, color: T.bone, marginTop: 28, marginBottom: 10 }}>VENOM → UI (Voidweave)</h3>
                <ul style={{ fontSize: 14, color: T.ghost, lineHeight: 1.8, paddingLeft: 20, marginBottom: 20 }}>
                  <li>
                    <strong style={{ color: T.bone }}>No fabricated confidence</strong> — no fake live counters; pulse accent only for verified/open states.
                  </li>
                  <li>
                    <strong style={{ color: T.bone }}>Truth over comfort</strong> — limits and uncertainty on the main journey, not buried in legal-only pages.
                  </li>
                  <li>
                    <strong style={{ color: T.bone }}>Proof over performance</strong> — schema IDs, commands, and repo structure in mono; prose in sans.
                  </li>
                </ul>

                <h3 style={{ fontFamily: F.display, fontSize: 18, color: T.bone, marginTop: 28, marginBottom: 10 }}>Install</h3>
                <pre
                  style={{
                    fontFamily: F.mono,
                    fontSize: 12,
                    color: T.amber,
                    background: T.amberDim,
                    border: `1px solid ${T.mute}`,
                    borderRadius: 8,
                    padding: 14,
                    overflow: "auto",
                    marginBottom: 12,
                  }}
                >
                  npm i @scentvision/cli
                </pre>
                <p style={{ fontSize: 13, color: T.dim, marginBottom: 24 }}>
                  See <Link style={{ color: T.pulse }} to="/docs">Docs</Link>, <Link style={{ color: T.pulse }} to="/schema">Schema</Link>, and{" "}
                  <Link style={{ color: T.pulse }} to="/playground">Playground</Link> on this site.
                </p>

                <div
                  style={{
                    borderLeft: `3px solid ${T.rose}`,
                    paddingLeft: 16,
                    marginTop: 28,
                    background: T.roseDim,
                    borderRadius: 4,
                    padding: "14px 16px 14px 18px",
                  }}
                >
                  <p style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: "0.12em", color: T.rose, marginBottom: 8 }}>
                    INFERENCE HONESTY GATE
                  </p>
                  <p style={{ fontSize: 13, color: T.ghost, lineHeight: 1.7, margin: 0 }}>
                    ScentVision does not detect molecules. Marketing that implies chemical certainty without hardware is out of bounds — for the product and for any surface that claims full Voidweave alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <aside
            style={{
              marginTop: 32,
              padding: 20,
              borderRadius: 12,
              border: chromeBorder,
              background: T.abyss,
              maxWidth: 400,
            }}
            aria-label="About this repository preview"
          >
            <h2 style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: "0.14em", color: T.ghost, marginBottom: 12 }}>About</h2>
            <p style={{ fontSize: 13, color: T.ghost, lineHeight: 1.65, marginBottom: 16 }}>
              OSS inference stack under {BH.primary}. Structured scent profiles from vision — with explicit limits.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["olfactory", "vision", "apache-2", "unshelled", "voidweave"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: F.mono,
                    fontSize: 10,
                    color: T.teal,
                    border: `1px solid ${T.tealDim}`,
                    borderRadius: 999,
                    padding: "4px 10px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <a href={GH_REPO} target="_blank" rel="noopener noreferrer" style={{ display: "block", marginTop: 16, fontSize: 13, color: T.pulse, textDecoration: "none" }}>
              {GH_REPO.replace("https://", "")} ↗
            </a>
          </aside>
        </Reveal>
      </article>
      <Footer bp={bp} />
    </>
  );
}
