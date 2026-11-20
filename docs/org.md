# A1 Workshop — organization and repos

**Org display name:** A1 Workshop  
**GitHub slug:** `a1-workshop`  
**Tagline:** Agentic and harness engineering workshops for inventors and engineers.

A1 Workshop is an **independent** program brand. Cohorts and delivery may run **in partnership with Humanmade**; Humanmade does not own the org.

Repos under the org are **public** at this stage of development. Access control for learning is pedagogical (which repo and paths students use), not GitHub private visibility.

## Repo roles

```text
GitHub org: a1-workshop  (public)
├── a1-workshop.github.io   # Org hub — multi-workshop brochure + Inventor packet under /inventor/
├── a1-inventor             # THIS repo — full Inventor source (instructor maintains; admin access)
├── almost-open             # How To Make (almost) Anything, Open — own Eleventy Pages
├── a1-student              # LATER — Inventor student pack extract (no answer keys)
└── (future workshops…)
```

| Repo | Role |
|------|------|
| **`a1-workshop.github.io`** | Org root GitHub Pages hub ([https://a1-workshop.github.io](https://a1-workshop.github.io)): workshop index. Inventor proposal + `Gate_Circuit_lite` live under [`/inventor/`](https://a1-workshop.github.io/inventor/). Does not vendor other courses’ curriculum trees. |
| **`a1-inventor`** (this project) | Canonical full Inventor curriculum: student materials, instructor guides, answer keys, design/authoring, proposal, workflow SSOT. Instructor maintains; administration gets full access. |
| **`almost-open`** | Open FOSS-first maker course (weeks 1–15). Own repo and project Pages at [https://a1-workshop.github.io/almost-open/](https://a1-workshop.github.io/almost-open/). |
| **`a1-student`** (future) | Curated Inventor extract for learners. No answer keys, no spoiler-heavy facilitator notes, no `design/` authoring internals. |
| Future workshop repos | Additional courses under the same org; hub lists them without merging repos. |

Local working directory may still be named `ai-inventor` until renamed; the GitHub remote name should be **`a1-inventor`**.

## Spoiler boundary

“Private vs public” for learning means: **do not spoil the student experience with answer keys**, not “make the GitHub repo private.”

| In `a1-inventor` | In future `a1-student` |
|--------------------------|------------------------------|
| Full tree: `student/`, `instructor/`, `design/`, `proposal/`, `docs/`, `workflow/` | `student/` + safe `docs/` (philosophy, product, architecture, tracks) + `workflow/` stages, validators, lab fixtures |
| Answer keys, failure injects, facilitator timing | Omitted |
| Proposal package for admin/approval | Not required |
| Authoring rules (`design/`) | Omitted |

### Interim (before `a1-student` exists)

This public repo contains both student and instructor paths. **Students should use only [`../student/`](../student/)** and shared reference under `docs/` / `workflow/` as linked from student docs. Do **not** open [`../instructor/track-a/answer-keys.md`](../instructor/track-a/answer-keys.md) or treat facilitator guides as lab worksheets.

### Future extract rules

When publishing `a1-student`, sync only:

- `student/`
- `docs/philosophy.md`, `docs/product.md`, `docs/architecture.md`, `docs/tracks.md` (not this `org.md` unless a short student-facing pointer is useful)
- `workflow/stages.md`, `workflow/validators.md`, and fixtures required for labs

Never sync: `instructor/**/answer-keys.md`, spoiler-heavy facilitator inject detail as a student handout, `design/`, or proposal internals as course homework.

## Partnership line

Program materials and delivery: **A1 Workshop**, in partnership with **Humanmade**.

## Related

- Authoring / publish rules: [`../design/AUTHORING.md`](../design/AUTHORING.md)
- Proposal status: [`../proposal/README.md`](../proposal/README.md)
- Org hub: [https://a1-workshop.github.io](https://a1-workshop.github.io)
- Inventor web packet: [https://a1-workshop.github.io/inventor/](https://a1-workshop.github.io/inventor/)
- Repo map: [`../README.md`](../README.md)
