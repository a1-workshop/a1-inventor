# Track A — Facilitator guide

**Total hands-on:** ~3.5 h  
**Student path:** [`../../student/track-a/overview.md`](../../student/track-a/overview.md)

## Timing

| Phase | Time | Student exercise | Instructor focus |
|-------|------|------------------|------------------|
| 0 Setup | 15 min | `00-setup.md` | Confirm LLM access; working folder copies |
| 1 Model vs agent | 30 min | `01-model-vs-agent.md` | Board the contrast; ask “when do you trust it?” |
| 2 Harness loop | 45 min | `02-run-harness-loop.md` | Demo one TOOL_CALL → TOOL_RESULT cycle |
| 3 Validation | 30 min | `03-validation-gate.md` | Inject known-bad; celebrate independent check |
| 4 Human review | 15 min | `04-human-review.md` | Force one Reject then fix |
| 5 Capstone | 45 min | `05-capstone-release.md` | Full run to RELEASED |
| Retrospective | 15 min | (in capstone) | Autonomy vs judgment |

## Talk track (short)

- Prompting alone is not an engineering process.
- Harnesses add state, allow-lists, validation, and audit.
- Gates are deterministic; agents are not.
- Engineer sign-off is mandatory.

## Demos

1. **Raw vs agent:** Same requirements; show unstructured chat vs tool plan.
2. **Known-bad:** Use [`../../workflow/fixtures/circuit/known_bad_design.json`](../../workflow/fixtures/circuit/known_bad_design.json) — expect `adc_window` FAIL.
3. **Known-good:** [`../../workflow/fixtures/circuit/known_good_design.json`](../../workflow/fixtures/circuit/known_good_design.json) — expect PASS (verify live before class).

## Failure injects

- Give a student the known-bad design mid-Phase 3.
- Reject a plausible design once in Phase 4 for a documentation gap (missing BOM), then clear Approve.

## Success criteria (cohort)

See student capstone checklist plus: participants can articulate raw LLM vs harnessed run.
