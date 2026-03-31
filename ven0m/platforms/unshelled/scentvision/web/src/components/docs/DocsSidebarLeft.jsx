import { NavLink } from "react-router-dom";
import { T, F } from "../../theme/tokens.js";

const DOC_LINKS = [
    {
        section: "Getting Started", links: [
            { label: "Overview", to: "/docs" },
            { label: "Installation", to: "/docs/install" },
        ]
    },
    {
        section: "Core Concepts", links: [
            { label: "Olfactory Profile", to: "/docs/profile" },
            { label: "Limits & Honesty", to: "/docs/honesty" },
        ]
    },
    {
        section: "API Reference", links: [
            { label: "CLI Usage", to: "/docs/cli" },
            { label: "Node.js SDK", to: "/docs/sdk" },
        ]
    }
];

export function DocsSidebarLeft({ bp }) {
    if (bp.mobile) return null;

    const sidebarStyle = {
        position: bp.desktop ? "sticky" : "static",
        top: "calc(var(--sv-nav-h) + 32px)",
        width: "var(--sv-sidebar-w)",
        flexShrink: 0,
        height: "calc(100vh - var(--sv-nav-h) - 64px)",
        overflowY: "auto",
        paddingRight: 24,
        scrollbarWidth: "none",
    };

    const navLinkStyle = {
        display: "block",
        fontFamily: F.body,
        fontSize: 13,
        padding: "6px 12px",
        textDecoration: "none",
        borderRadius: "6px",
        marginBottom: 2,
        transition: "all 0.2s ease",
    };

    const sectionLabelStyle = {
        fontFamily: F.body,
        fontSize: 12,
        color: T.bone,
        fontWeight: 600,
        marginTop: 24,
        marginBottom: 8,
        paddingLeft: 12,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
    };

    return (
        <aside style={sidebarStyle} className="sv-docs-left-sidebar">
            {DOC_LINKS.map((section, sIdx) => (
                <div key={section.section} style={{ marginTop: sIdx === 0 ? 0 : 24 }}>
                    <div style={sectionLabelStyle}>{section.section}</div>
                    {section.links.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === "/docs"}
                            style={({ isActive }) => ({
                                ...navLinkStyle,
                                color: isActive ? T.pulse : T.ghost,
                                background: isActive ? `${T.pulse}1A` : "transparent",
                                fontWeight: isActive ? 600 : 400,
                            })}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            ))}
        </aside>
    );
}
