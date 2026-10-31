# Delivery model — hybrid

**Instructor opens each phase; students run the lab with their own LLM; instructor owns timing, demos, and keys.**

Students do **not** use Cursor. They use [`../student/`](../student/) agent packs (paste-in system prompts) plus a text editor.

## Per-phase pattern

1. **Open (5–10 min)** — State the goal, why the gate exists, and the done-when checklist.
2. **Lab** — Students follow `student/track-a/exercises/NN-*.md`.
3. **Demo or inject (as needed)** — Show a known-bad failure or a clean gate pass.
4. **Close** — Collect one insight; point to the next exercise.

## Roles

| Role | Does |
|------|------|
| Instructor | Opens phases, demos, grades/review, failure injects, timebox |
| Student | Runs agent pack, produces artifacts, participates in human review |
| Agent (LLM) | Proposes designs and tool calls only; never self-approves release |

## Human review

Prefer peer or instructor review in live sessions. Self-paced cohorts may self-review but must still record Approve/Reject in `audit_log.jsonl`.

## When software harness arrives

Keep the same phase structure. Replace “you are the harness” steps with a CLI runner; do not rewrite learning objectives.
