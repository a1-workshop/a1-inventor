---
title: Week 1 — Agentic foundations
shortTitle: Foundations
week: 1
time: "~3.5 h"
goal: "Model vs agent vs harness; pass Gate_Circuit_lite; human sign-off to RELEASED."
---

This week builds the mental model the rest of the course depends on: **models, assistants, agents, harnesses**, and **engineering workflows** — then applies it to a software-verifiable slice of the **Environmental Monitor** analog front-end.

You need an LLM that accepts a long system prompt, a text editor, and about half a day of focused work. No KiCad, NGSpice, or FreeCAD yet.

## Setup

1. Copy the entire [`../templates/`](../templates/) directory to a working folder (e.g. `my-work/` next to this course tree). Do your editing there.
2. Open `requirements.md` in your working folder.
3. Either keep the starter text or replace it with the electrical subset from the golden requirements. At minimum you need:
   - Sensor span 0–3.3 V
   - ADC window 0–1.0 V
   - ±2% accuracy
   - Zout &lt; 10 kΩ
   - E96 resistors
4. Skim [`../agents/circuit-lite/README.md`](../agents/circuit-lite/README.md) so you know where the agent pack lives.
5. Confirm your LLM can accept a long system prompt (or “custom instructions”).

## Model vs agent

### Raw model (no tools)

1. Open a **fresh** chat with **no** system prompt from the agent pack.
2. Paste your `requirements.md` and ask: *“Design the resistor divider. Give me R1 and R2.”*
3. Save the reply (or notes) as `raw_model_notes.md` in your working folder.

Observe: Did it cite E96 values? Did it check impedance? Can you verify the math?

### Agent-shaped prompt

1. Start a **new** chat.
2. Paste [`../agents/circuit-lite/SYSTEM.md`](../agents/circuit-lite/SYSTEM.md) as the system prompt.
3. Also paste or attach [`../agents/circuit-lite/TOOLS.md`](../agents/circuit-lite/TOOLS.md) and [`../agents/circuit-lite/WORKFLOW.md`](../agents/circuit-lite/WORKFLOW.md).
4. Provide `requirements.md` and ask the agent to **propose a plan only** (no final design yet)—list which tools it would call and in what order.

## Harness loop

Until a software harness exists, **you** are the harness: when the agent “calls” a tool, you perform or approximate the tool and paste the result back.

1. Load `SYSTEM.md`, `TOOLS.md`, and `WORKFLOW.md` from [`../agents/circuit-lite/`](../agents/circuit-lite/).
2. Give the agent your `requirements.md`.
3. Follow `WORKFLOW.md`: allow the agent to call tools one at a time.
4. For `compute_divider` / `check_constraints`, either:
   - Use a calculator / spreadsheet with the formulas implied by the tool descriptions, or
   - Use a simple calculator or script for helper output if needed
5. Write intermediate results into `design.json` as the agent settles on values.
6. Append each tool call and result as one JSON line in `audit_log.jsonl` (see template comments).

Max **5** revision cycles. If still failing, stop and move to human review (Approve/Reject with notes).

## Validation gate

Apply `Gate_Circuit_lite` independently of the LLM; see a deliberate failure.

Gate contract (SSOT): [`../../workflow/validators.md`](../../workflow/validators.md#gate_circuit_lite)

Optional interactive demo: [Gate_Circuit_lite lab]({{ '/lab/gate-lite.html' | url }}).

### Check your design

Using your `design.json` and `requirements.md`, fill `validation_report.md` for these checks:

| Check ID | Pass condition |
|----------|----------------|
| `adc_window` | Conditioned Vout at Vin corners inside ADC window ± accuracy |
| `impedance` | Output impedance ≤ limit |
| `series` | Resistors are E96 (or allowed series) |
| `bom_fields` | BOM lists each part |

Recompute yourself (or with a non-LLM calculator). Do **not** ask the LLM to grade its own work without your independent check.

### Known-bad inject

1. Open [`../../workflow/fixtures/circuit/known_bad_design.json`](../../workflow/fixtures/circuit/known_bad_design.json).
2. Run the same checks mentally or on paper.
3. Confirm `adc_window` fails as expected.
4. Optionally paste the known-bad design to your agent and ask it to revise using the workflow (still within max iterations).

## Human review

The agent cannot self-approve.

1. Peer-review with a colleague if you can, or self-review carefully.
2. Reviewer reads `design.json` + `validation_report.md` (+ BOM if ready).
3. Reviewer chooses **Approve** or **Reject** and writes a short reason.
4. Append a line to `audit_log.jsonl`, for example:

```json
{"event":"human_review","decision":"APPROVE","by":"name","reason":"...","ts":"ISO-8601"}
```

5. If **Reject**, return to the harness loop with the reason as feedback. Do not mark release.

## Capstone release

End-to-end: requirements → gate PASS → human Approve → RELEASED.

1. Start from a clean agent session with the circuit-lite pack loaded.
2. Run the full workflow to produce:
   - `design.json`
   - `bom.csv`
   - `validation_report.md` with all `Gate_Circuit_lite` checks PASS
   - complete `audit_log.jsonl`
3. Human review as above. On Approve, append:

```json
{"event":"release","status":"RELEASED","by":"name","ts":"ISO-8601"}
```

4. Short retrospective (write 3–5 sentences): How did the raw model reply differ from this harnessed run?

## Done when

- [ ] Private working copy of the templates; `requirements.md` states the electrical constraints
- [ ] Notes from a raw-model reply and an ordered tool plan from an agent-shaped session
- [ ] `design.json` has a proposed divider; `audit_log.jsonl` shows ordered tool actions within the allow-list
- [ ] `validation_report.md` records PASS/FAIL for your design; known-bad fails `adc_window`
- [ ] A human Approve/Reject is recorded; gate PASS alone is not RELEASED
- [ ] All week-1 artifacts consistent; `RELEASED` in the audit log; retrospective saved

Next: [Week 2 — Circuit design and simulation](02-circuit-design.md)
