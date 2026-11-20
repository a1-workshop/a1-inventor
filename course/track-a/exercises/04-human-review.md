# Exercise 04 — Human review gate

**Time:** ~15 min  
**Goal:** Practice approve/reject; the agent cannot self-approve.

## Steps

1. Peer-review with a colleague if you can, or self-review carefully.
2. Reviewer reads `design.json` + `validation_report.md` (+ BOM if ready).
3. Reviewer chooses **Approve** or **Reject** and writes a short reason.
4. Append a line to `audit_log.jsonl`, for example:

```json
{"event":"human_review","decision":"APPROVE","by":"name","reason":"...","ts":"ISO-8601"}
```

5. If **Reject**, return to the agent loop (Exercise 02) with the reason as feedback. Do not mark release.

## Done when

- [ ] A human decision is recorded in `audit_log.jsonl`
- [ ] You understand that PASS on the gate alone is not RELEASED without Approve
