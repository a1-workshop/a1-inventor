# Deterministic Validators — Gate Contracts

Validators are **deterministic checkers with no LLM in the loop**. The agent proposes artifacts; the harness runs these checks independently and returns pass/fail with reasons. Hand-editing validator math to force a pass is not allowed.

**Pass rule for any agent workflow:** Artifacts clear the gate without modifying the checker; human review is recorded in `audit_log.jsonl`.

**Fixtures:** [`fixtures/`](fixtures/) — golden requirements and known-good / known-bad examples used to prove each gate.

---

## Shared conventions

| Field | Meaning |
|-------|---------|
| `status` | `PASS` or `FAIL` |
| `checks[]` | Ordered list of `{ id, result, detail }` |
| `metrics` | Numeric values recomputed by the validator |
| `waivers` | Explicit human-approved exceptions (empty by default; non-empty requires audit entry) |

On `FAIL`, the harness feeds `checks[].detail` back to the agent. Max iterations (week 1 default: 5) then escalate to human review.

---

## Gate_Circuit_lite

**Purpose:** Validate resistor-divider / signal-conditioning math for the environmental monitor front-end.

**Inputs**
- `requirements.md` (or parsed requirements object)
- `design.json` — expected fields include topology, `r1_ohms`, `r2_ohms`, resistor series, optional buffer flag

**Independent recomputation (examples)**
- Divider ratio and predicted `v_out` at stated `v_in` corners
- Worst-case tolerance band vs accuracy requirement
- Thevenin / output impedance vs limit
- Values membership in allowed series (e.g. E96)

### Pass criteria

| Check ID | Condition |
|----------|-----------|
| `adc_window` | At min/max sensor voltage, predicted conditioned output lies within ADC input window ± stated accuracy |
| `impedance` | Output impedance ≤ requirement (e.g. &lt; 10 kΩ) |
| `series` | All discrete resistors are members of the allowed series |
| `bom_fields` | `bom.csv` lists every design resistor/part with value and reference |

### Fail examples (fixtures)
- Wrong ratio → `adc_window` FAIL ([`fixtures/circuit/known_bad_design.json`](fixtures/circuit/known_bad_design.json))
- High impedance divider → `impedance` FAIL

### Success fixtures
- [`fixtures/circuit/known_good_design.json`](fixtures/circuit/known_good_design.json) → all checks PASS

---

## Gate_Circuit_full

**Purpose:** Simulation-backed verification of the sensor-interface circuit.

**Inputs**
- Netlist (or tool export)
- Simulation script + result files
- Requirements thresholds (rails, DC points, gain, noise, or project-defined metrics)
- Required net / power-domain names

### Pass criteria

| Check ID | Condition |
|----------|-----------|
| `sim_exit` | Simulation process exits 0 |
| `metrics_parse` | Required metric keys present and parseable from sim output |
| `dc_rails` | Supply / bias nodes within stated voltage limits |
| `signal_limits` | Conditioned signal metrics (e.g. gain, Vout range) meet thresholds |
| `required_nets` | All required nets / power domains exist in netlist |
| `bom_sync` | BOM includes critical parts named in requirements (sensor, regulator, connectors as specified) |

Implementation note: metrics comparison is numeric thresholding in a script (Python or shell), not LLM judgment.

### Fixtures
- Known-good netlist + sim metrics under [`fixtures/circuit/`](fixtures/circuit/) (stubs until toolchain is wired)
- Known-bad: missing rail net or out-of-range DC point

---

## Gate_PCB

**Purpose:** Board realizes the circuit under manufacturing and geometric constraints.

**Inputs**
- DRC report (machine-readable preferred)
- Board outline dimensions
- Requirements: max board size, connector/keepout rules
- Schematic BOM vs PCB BOM / symbol list

### Pass criteria

| Check ID | Condition |
|----------|-----------|
| `drc_clean` | Zero unwaived DRC errors (`waivers` empty or each waiver has audit id) |
| `outline` | Board width/height ≤ max dimensions in requirements |
| `keepouts` | Connector / sensor keepouts from requirements satisfied (exported rule check or checklist script) |
| `bom_complete` | Every schematic symbol with a part has a BOM row; critical parts present |
| `fab_set` | Required fab outputs exist (Gerbers, drill, BOM, CPL — or project-defined set) |

### Fixtures
- [`fixtures/pcb/known_good_meta.json`](fixtures/pcb/known_good_meta.json) — outline + DRC summary that should PASS
- [`fixtures/pcb/known_bad_meta.json`](fixtures/pcb/known_bad_meta.json) — oversized board or DRC errors → FAIL

---

## Gate_Enclosure

**Purpose:** Numeric fit and DFM checks for the housing against the PCB and requirements.

**Inputs**
- Parametric model parameters or exported `enclosure_params.json`
- PCB outline and height stackup
- Requirements: envelope, wall thickness, opening tolerances, printability rules

### Pass criteria

| Check ID | Condition |
|----------|-----------|
| `cavity_clearance` | Internal cavity length/width/height ≥ board + stackup + stated clearance |
| `openings_align` | Opening centers within tolerance of connector/sensor positions |
| `wall_thickness` | Walls ≥ minimum thickness for chosen process |
| `envelope` | Outer dimensions ≤ product envelope |
| `fab_export` | Required fab files present (e.g. STL / DXF) |

### Fixtures
- [`fixtures/enclosure/known_good_params.json`](fixtures/enclosure/known_good_params.json)
- [`fixtures/enclosure/known_bad_params.json`](fixtures/enclosure/known_bad_params.json) — cavity too small → `cavity_clearance` FAIL

---

## Gate_System

**Purpose:** Automated / HIL validation that measured behavior matches requirements claims.

**Inputs**
- Test suite or HIL runner output
- Requirements: measurement range, accuracy, sample rate (as applicable)
- Device or simulator under test

### Pass criteria

| Check ID | Condition |
|----------|-----------|
| `suite_exit` | Test runner exits 0 |
| `report_present` | `system_test_report.md` (or JSON) generated |
| `range_claims` | Logged samples cover required input/output ranges |
| `accuracy_claims` | Error vs reference within stated accuracy (scripted comparison) |
| `traceability` | Report references build / gate ids for circuit, PCB, enclosure releases |

### Fixtures
- Stub expected report schema under [`fixtures/`](fixtures/) until HIL harness exists; known-bad: accuracy out of band → FAIL

---

## Proving the pipeline (fixture battery)

Before a workshop cohort, run validators against fixtures only (no agent):

1. Golden requirements load without error — [`fixtures/requirements.golden.md`](fixtures/requirements.golden.md)
2. Circuit lite: known_good → PASS; known_bad → FAIL with expected check ids
3. PCB meta: known_good → PASS; known_bad → FAIL
4. Enclosure params: known_good → PASS; known_bad → FAIL

When agent workflows are introduced, the **same** validators and fixtures remain the acceptance contract.
