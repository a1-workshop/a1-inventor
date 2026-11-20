# Agent guide — a1-inventor

**Org:** A1 Workshop (independent). Remotes stay independent; local siblings under `~/src/a1-workshop/` are not a monorepo.

Public learner materials (`course/`, README) are not Cursor instructions. Standing policy lives here and in `.cursor/rules/`.

## Course law

- Open self-paced **15-week** spine. Student UI says Week, not Track.
- Curriculum SSOT is markdown under `course/`.
- Do **not** reintroduce instructor-only, spoiler-gated, or student/teacher split trees.
- Student LLM agent packs live under `course/agents/` (Eleventy build-ignored). Do not confuse them with this file or `.cursor/`.
- Templates under `course/templates/` are also build-ignored.
- Gates and fixtures SSOT: `workflow/` (validators, stages, fixtures).

## Site

- Eleventy builds from `course/**/*.md` → `site/_site/` with pathPrefix `/a1-inventor/`.
- Do not hand-mirror lessons into HTML.
- Gate demo SSOT: `site/lab/gate-lite.html` on this course’s Pages (hub only redirects).

## CI / lockfile

- Pages CI runs on Linux. Keep `package-lock.json` free of darwin-only optional deps that break `npm ci` (e.g. stray `fsevents` entries).

## Commands

```bash
npm install
npm run dev
npm run build
```

## Scoped rules

Week/site authoring details: [`.cursor/rules/a1-inventor.mdc`](.cursor/rules/a1-inventor.mdc).
