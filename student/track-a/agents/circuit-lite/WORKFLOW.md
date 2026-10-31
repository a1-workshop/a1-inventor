# Workflow — circuit-lite

Follow this loop. Do not skip validation or human review.

1. **Ingest** — `read_file` on `requirements.md`. Restate constraints (Vin span, ADC window, accuracy, Zout, series).
2. **Plan** — List subtasks and which tools you will call. Wait for human acknowledgment if they ask.
3. **Act** — `compute_divider` (or revise values from prior failure).
4. **Observe** — Read tool results; update your working design fields.
5. **Validate** — `check_constraints`. On FAIL, return to Act (count toward max 5 iterations).
6. **Document** — On PASS: `write_file` design.json, `generate_bom`, `generate_report`.
7. **Human review** — Stop. Ask the human to Approve or Reject. Do not claim RELEASED yourself.
8. **Escalate** — If iteration cap hit, summarize blockers and request human help.

Audit: remind the human to append each tool call and the review decision to `audit_log.jsonl`.
