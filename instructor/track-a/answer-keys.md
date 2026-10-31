# Track A — Answer keys / fixtures

Do not distribute this file to students as a spoiler sheet; point them at exercises and gates instead.

## Gate

`Gate_Circuit_lite` — [`../../workflow/validators.md`](../../workflow/validators.md#gate_circuit_lite--track-a)

## Fixtures

| Fixture | Expected |
|---------|----------|
| [`../../workflow/fixtures/circuit/known_good_design.json`](../../workflow/fixtures/circuit/known_good_design.json) | All checks PASS |
| [`../../workflow/fixtures/circuit/known_bad_design.json`](../../workflow/fixtures/circuit/known_bad_design.json) | `adc_window` FAIL (equal divider → ~1.65 V into 1.0 V ADC) |
| [`../../workflow/fixtures/requirements.golden.md`](../../workflow/fixtures/requirements.golden.md) | Canonical numbers |

## Example passing ballpark

Golden known-good uses R1=22.1 kΩ, R2=9.76 kΩ (E96). Ratio places 3.3 V near 1.0 V ADC; Zout under 10 kΩ. Recompute before trusting in class—tolerance assumptions matter for `adc_window`.

## Audit

Release requires: gate PASS + human `APPROVE` + `RELEASED` event. Agent-only “looks good” is not enough.
