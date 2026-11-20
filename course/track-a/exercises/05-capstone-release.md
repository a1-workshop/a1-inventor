# Exercise 05 — Capstone release

**Time:** ~45 min  
**Goal:** End-to-end: requirements → gate PASS → human Approve → RELEASED.

## Steps

1. Start from a clean agent session with the circuit-lite pack loaded.
2. Run the full workflow to produce:
   - `design.json`
   - `bom.csv`
   - `validation_report.md` with all `Gate_Circuit_lite` checks PASS
   - complete `audit_log.jsonl`
3. Human review (Exercise 04). On Approve, append:

```json
{"event":"release","status":"RELEASED","by":"name","ts":"ISO-8601"}
```

4. Short retrospective (write 3–5 sentences): How did Phase 1 (raw model) differ from this harnessed run?

## Done when

- [ ] All Track A artifacts present and consistent
- [ ] Gate PASS + human Approve + `RELEASED` in the audit log
- [ ] Retrospective notes saved (e.g. `retrospective.md`)
