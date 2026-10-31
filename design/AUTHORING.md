# Authoring rules

## Audiences

| Path | Ship to students? |
|------|-------------------|
| `student/` | Yes |
| `docs/`, `workflow/` | Yes (reference) |
| `proposal/` | Approval stakeholders; not a lab packet |
| `instructor/` | Facilitators only |
| `design/` | Authors only — **no** |

Students do not use Cursor. Never put Cursor-only instructions, `@`-skills, or IDE setup in `student/`. Portable agent packs use plain markdown (`SYSTEM.md`, `TOOLS.md`, `WORKFLOW.md`).

## Single source of truth

Edit once; link everywhere else.

| Concern | Edit here |
|---------|-----------|
| Track ladder | `docs/tracks.md` |
| Philosophy / terms | `docs/philosophy.md` |
| Architecture diagram | `docs/architecture.md` |
| Product summary | `docs/product.md` |
| Numeric requirements | `workflow/fixtures/requirements.golden.md` |
| Gate contracts | `workflow/validators.md` · `workflow/stages.md` |
| Approval narrative | `proposal/AI-Powered-Inventor.md` |
| Facilitator timing | `instructor/track-*/` |
| Student exercises / agents | `student/` |
| Internal build order | `instructor/roadmap.md` |

## Adding a Track A exercise

1. Add `student/track-a/exercises/NN-name.md` with time, goal, steps, done-when.
2. Link it from `student/track-a/overview.md`.
3. Update `instructor/track-a/facilitator-guide.md` timing/talk track.
4. If new gate checks are needed, update `workflow/validators.md` and fixtures first.

## Syncing the proposal

Keep `proposal/` free of fixture paths and Cursor notes. After curriculum changes that affect weeks or outcomes, update `proposal/AI-Powered-Inventor.md` and the locked/deferred lists in `proposal/README.md`. Program brand: **A1 Workshop** (`a1-workshop`), in partnership with Humanmade ([`../docs/org.md`](../docs/org.md)).

## Publishing to `a1-student` (future sibling)

This repo (`a1-inventor`) is the full public source. The student sibling is a **curated extract** so answer keys do not spoil labs. See [`../docs/org.md`](../docs/org.md).

**May sync**

- `student/`
- `docs/philosophy.md`, `docs/product.md`, `docs/architecture.md`, `docs/tracks.md`
- `workflow/stages.md`, `workflow/validators.md`, fixtures required for labs
- Root student-oriented README (spoiler-safe)

**Must not sync**

- `instructor/**/answer-keys.md` and spoiler-heavy facilitator inject handouts
- `design/` (authoring / Cursor)
- `proposal/` internals as student homework
- Anything that states known-good numeric solutions as “the key” outside exercise-safe fixtures students already use for gate practice

Until `a1-student` exists, tell cohorts to stay in `student/` only.

## Optional later

Project Cursor skills for authors (e.g. “add exercise”) may live under `.cursor/skills/` and be documented here. They must never become a student dependency.
