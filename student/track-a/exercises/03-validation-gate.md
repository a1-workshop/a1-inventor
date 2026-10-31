# Exercise 03 — Validation gate

**Time:** ~30 min  
**Goal:** Apply `Gate_Circuit_lite` independently of the LLM; see a deliberate failure.

Gate contract (SSOT): [`../../../workflow/validators.md`](../../../workflow/validators.md#gate_circuit_lite--track-a)

## Part A — Check your design

Using your `design.json` and `requirements.md`, fill `validation_report.md` for these checks:

| Check ID | Pass condition |
|----------|----------------|
| `adc_window` | Conditioned Vout at Vin corners inside ADC window ± accuracy |
| `impedance` | Output impedance ≤ limit |
| `series` | Resistors are E96 (or allowed series) |
| `bom_fields` | BOM lists each part |

Recompute yourself (or with a non-LLM calculator). Do **not** ask the LLM to grade its own work without your independent check.

## Part B — Known-bad inject

1. Open [`../../../workflow/fixtures/circuit/known_bad_design.json`](../../../workflow/fixtures/circuit/known_bad_design.json).
2. Run the same checks mentally or on paper.
3. Confirm `adc_window` fails as expected.
4. Optionally paste the known-bad design to your agent and ask it to revise using the workflow (still within max iterations).

## Done when

- [ ] `validation_report.md` records PASS/FAIL per check id for **your** design
- [ ] You observed known-bad fail `adc_window`
- [ ] You did not edit the gate criteria to force a pass
