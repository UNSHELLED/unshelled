# venom (origin) — Spec Kit constitution

Rules below apply to **Spec Kit artifacts** under `specs/` in this repository. They MUST NOT override the VENOM spine (Pact, `.venom/`, `VENOM-SURFACES.md`); if there is a conflict, adjust Spec Kit output — not the spine.

## Core principles

### I. Traceability

Every implementation task MUST map to at least one functional requirement (FR-###) or user story (US#) in `spec.md`, or cite an explicit plan artifact (e.g. phase, file path in `plan.md`).

### II. Independent testability

User stories MUST be independently testable slices. Tasks MUST NOT bundle unrelated stories without a dependency note.

### III. No silent placeholders

Specifications MUST NOT ship with unresolved placeholders (`TODO`, `TKTK`, `???`, `NEEDS CLARIFICATION`) in normative sections (requirements, success criteria, acceptance scenarios). Mark unknowns explicitly in a **Clarifications** subsection or resolve them before `/speckit.tasks`.

## Governance

- Amendments: update this file with version bump and date.
- `/speckit.analyze` treats MUST violations here as **CRITICAL**.

**Version**: 0.1.0 | **Ratified**: 2026-03-29 | **Last amended**: 2026-03-29
