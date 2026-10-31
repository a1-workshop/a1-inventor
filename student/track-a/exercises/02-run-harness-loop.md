# Exercise 02 — Run the harness loop

**Time:** ~45 min  
**Goal:** Execute plan → act → observe using the circuit-lite agent pack (manually simulating the harness).

Until a software harness exists, **you** are the harness: when the agent “calls” a tool, you perform or approximate the tool and paste the result back.

## Steps

1. Load `SYSTEM.md`, `TOOLS.md`, and `WORKFLOW.md` from [`../agents/circuit-lite/`](../agents/circuit-lite/).
2. Give the agent your `requirements.md`.
3. Follow `WORKFLOW.md`: allow the agent to call tools one at a time.
4. For `compute_divider` / `check_constraints`, either:
   - Use a calculator / spreadsheet with the formulas implied by the tool descriptions, or
   - Use instructor-provided helper output if offered
5. Write intermediate results into `design.json` as the agent settles on values.
6. Append each tool call and result as one JSON line in `audit_log.jsonl` (see template comments).

Max **5** revision cycles. If still failing, stop and escalate to your instructor (human review).

## Done when

- [ ] `design.json` has a proposed divider (R1, R2, series)
- [ ] `audit_log.jsonl` shows an ordered sequence of actions
- [ ] You stayed within the tool allow-list (no invented shell/network tools)
