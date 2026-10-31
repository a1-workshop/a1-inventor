# Workflow fixtures

Golden requirements and known-good / known-bad examples for deterministic gates.

| Path | Gate | Role |
|------|------|------|
| [`requirements.golden.md`](requirements.golden.md) | All | Canonical Environmental Monitor requirements |
| [`circuit/known_good_design.json`](circuit/known_good_design.json) | `Gate_Circuit_lite` | Expected PASS |
| [`circuit/known_bad_design.json`](circuit/known_bad_design.json) | `Gate_Circuit_lite` | Expected FAIL (`adc_window`) |
| [`circuit/full_gate.stub.json`](circuit/full_gate.stub.json) | `Gate_Circuit_full` | Stub until sim toolchain wired |
| [`pcb/known_good_meta.json`](pcb/known_good_meta.json) | `Gate_PCB` | Expected PASS |
| [`pcb/known_bad_meta.json`](pcb/known_bad_meta.json) | `Gate_PCB` | Expected FAIL |
| [`enclosure/known_good_params.json`](enclosure/known_good_params.json) | `Gate_Enclosure` | Expected PASS |
| [`enclosure/known_bad_params.json`](enclosure/known_bad_params.json) | `Gate_Enclosure` | Expected FAIL |
| [`system_report.schema.stub.json`](system_report.schema.stub.json) | `Gate_System` | Stub report schema |

See [`../validators.md`](../validators.md) for pass/fail contracts.
