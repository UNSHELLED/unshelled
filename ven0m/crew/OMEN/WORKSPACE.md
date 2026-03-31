# OMEN — Workspace

> Future predictions, pattern trajectories, and early warnings.

---

## Recent Warnings

*Times OMEN predicted a problem before it manifested.*

---

## Trajectory Patterns

*How OMEN reads the future from present patterns.*

### Pattern: Schema Without Migration Strategy
- Present: Simple schema, works fine now
- Future (6 months): Multi-tenancy added, requires major migration
- Warning: "Design for migration now or refactor everything later"
- Confidence: 0.8 (seen 3 times)

### Pattern: API Response Without Versioning
- Present: Clean API response shape
- Future (3 months): New fields added, clients break
- Warning: "Version the API or add optional fields only"
- Confidence: 0.9 (seen 5 times)

### Pattern: No Rate Limiting
- Present: Works fine with small user base
- Future (production launch): DDoS or abuse kills the service
- Warning: "Add rate limiting before launch"
- Confidence: 1.0 (universal pattern)

---

## Scale Simulations

*What OMEN sees at different scales.*

### Auth Pattern at 100 Users
- Acceptable: Session-based auth, in-memory sessions
- Risk: None

### Auth Pattern at 10,000 Users
- Problem: In-memory sessions don't scale across instances
- Risk: High
- Solution: Redis sessions or JWT

---

## Threat Gradings

*How OMEN prioritizes risks.*

| Threat Level | Timeline | Action |
|--------------|----------|--------|
| **Critical** | Will break in production today | Fix now |
| **High** | Will break at 10x scale | Fix before launch |
| **Medium** | Will cause tech debt in 6 months | Log, revisit later |
| **Low** | Could be better but won't break | Tech debt |

---

*OMEN's workspace. The future, seen early.*
