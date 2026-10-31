# Contributing

This repository is **`a1-inventor`** under the **A1 Workshop** (`a1-workshop`) org: the full instructor/admin curriculum source. See [`docs/org.md`](docs/org.md).

## Who contributes here

- **Instructors / maintainers** — curriculum, facilitator guides, keys, roadmap
- **Administration** — proposal review, program alignment
- **Authors** — structure and SSOT edits (often via Cursor); follow [`design/AUTHORING.md`](design/AUTHORING.md)

Students should use the future **`a1-student`** pack (or, until it exists, only the [`student/`](student/) tree). Do not add answer keys or Cursor-only setup under `student/`.

## Guidelines

1. Edit single sources of truth once; link from elsewhere ([`design/AUTHORING.md`](design/AUTHORING.md)).
2. Keep `proposal/` free of fixture paths and authoring tooling notes.
3. Do not commit secrets (`.env`), personal `my-work/` folders, or generated PDFs under `tmp/`.
4. Spoiler paths (`instructor/**/answer-keys.md`, failure injects) stay out of any student extract.

## Pull requests

Prefer small PRs that state which audience they affect (student / instructor / proposal / workflow). Maintainers confirm gate and fixture consistency when changing validation contracts.
