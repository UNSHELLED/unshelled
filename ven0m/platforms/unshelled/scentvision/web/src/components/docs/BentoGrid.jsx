import { T, F } from "../../theme/tokens.js";

export function BentoGrid({ children, columns = 2 }) {
    const gtc = columns === 3 ? "repeat(auto-fit, minmax(240px, 1fr))" : "repeat(auto-fit, minmax(300px, 1fr))";

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: gtc,
            gap: 16,
            marginBottom: 32,
        }}>
            {children}
        </div>
    );
}
