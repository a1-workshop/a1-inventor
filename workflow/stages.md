# Workflow Stages — Environmental Monitor

**Product through-line:** Battery-powered environmental monitor (temperature + humidity): analog front-end → PCB → enclosure → system validation.

**Course entry:** [`../course/`](../course/) · Product summary → [`../course/docs/product.md`](../course/docs/product.md)

**Canonical loop (all weeks):**

```text
Requirements → Agent → Harness → Tools → Deterministic Validator → Human Review → Next stage
```

A stage is complete only when its **gate** passes *and* a human review decision is recorded in the audit log. Agents may implement stages differently; they must all satisfy the same gate contracts defined in [`validators.md`](validators.md).

**Related fixtures:** [`fixtures/`](fixtures/)

---

## Stage map by week

| Stage | Gate | Weeks |
|-------|------|-------|
| Circuit (lite) | `Gate_Circuit_lite` | 1 |
| Circuit (full) | `Gate_Circuit_full` | 2–3 |
| PCB | `Gate_PCB` | 4 |
| Enclosure | `Gate_Enclosure` | 5 |
| Firmware / data path | (prep) | 6–7 |
| System / HIL | `Gate_System` | 8–9 |
| Packaging, docs, freeze, polish | (supporting) | 10–14 |
| Capstone release | All gates green + presentation | 15 |

---

## 1. Circuit (lite) — Week 1

**Engineering target:** Software-verifiable signal conditioning that scales a sensor output into an ADC input range (resistor divider / front-end math). No KiCad, NGSpice, or FreeCAD required.

### Inputs
- Human-written `requirements.md` (or golden fixture)
- Allowed resistor series and constraint thresholds from requirements

### Primary artifacts
| Artifact | Description |
|----------|-------------|
| `requirements.md` | Parsed / refined engineering requirements |
| `design.json` | Proposed topology and component values |
| `validation_report.md` | Deterministic pass/fail report |
| `bom.csv` | Bill of materials |
| `audit_log.jsonl` | Tool calls, iterations, human decision |

### Gate
`Gate_Circuit_lite` — see [`validators.md`](validators.md#gate_circuit_lite)

### Human review checkpoint
Engineer reviews `design.json` + `validation_report.md`; approve or reject with reason. Reject blocks release; agent may revise within max-iteration cap.

---

## 2. Circuit (full) — Weeks 2–3

**Engineering target:** Complete sensor-interface circuit with simulation-backed verification (netlist → sim → metrics vs thresholds).

### Inputs
- Same product requirements as Circuit (lite), expanded for rails, nets, and sim limits
- Circuit design package from architecture / component selection

### Primary artifacts
| Artifact | Description |
|----------|-------------|
| Schematic source (e.g. KiCad) or structured design export | Circuit realization |
| Netlist | Simulation / connectivity input |
| Simulation script + raw results | NGSpice or equivalent |
| `sim_report.md` (or JSON metrics) | Parsed metrics vs thresholds |
| Updated BOM | Parts for the validated circuit |

### Gate
`Gate_Circuit_full` — see [`validators.md`](validators.md#gate_circuit_full--track-bc)

### Human review checkpoint
Engineer reviews sim report and topology; sign-off required before PCB layout begins.

---

## 3. PCB — Week 4

**Engineering target:** Board that realizes the validated circuit, manufacturable under stated rules.

### Inputs
- Circuit artifacts that passed `Gate_Circuit_full`
- Board outline / connector / keepout constraints from requirements

### Primary artifacts
| Artifact | Description |
|----------|-------------|
| Schematic | Synced to PCB |
| PCB layout | Board design |
| DRC report | Design-rule check output |
| Manufacturing package | Gerbers, drill, BOM, CPL (or project-defined fab set) |
| `pcb_validation_report.md` | Gate summary |

### Gate
`Gate_PCB` — see [`validators.md`](validators.md#gate_pcb)

### Human review checkpoint
Engineer reviews DRC, outline, and fab outputs before enclosure fit work or fab submission.

---

## 4. Enclosure — Week 5

**Engineering target:** Housing that fits the board, connectors, sensors, and battery; suitable for intended fabrication (print / cut / machine).

### Inputs
- PCB outline and height stackup from PCB stage
- Mechanical constraints from requirements (envelope, openings, wall thickness)

### Primary artifacts
| Artifact | Description |
|----------|-------------|
| Parametric CAD project | OpenSCAD / FreeCAD (or equivalent) |
| Fit parameters / export (JSON or script outputs) | Numeric cavity and opening positions |
| `fit_report.md` | Deterministic fit / DFM results |
| Fab files | STL, DXF, or drawings as required |

### Gate
`Gate_Enclosure` — see [`validators.md`](validators.md#gate_enclosure)

### Human review checkpoint
Engineer reviews fit report and manufacturability before fabrication package release.

---

## 5. System — Weeks 8–9

**Engineering target:** Software + hardware-in-the-loop (or scripted device) validation that logged behavior meets requirements.

### Inputs
- Released circuit / PCB / enclosure packages (prior gates green)
- Test plan and harness scripts

### Primary artifacts
| Artifact | Description |
|----------|-------------|
| Software repository | Firmware / host tools / monitors |
| Test / HIL scripts | Automated runners |
| `system_test_report.md` | Results vs accuracy / range claims |
| Audit / log extracts | Traceability for measured samples |

### Gate
`Gate_System` — see [`validators.md`](validators.md#gate_system--track-c)

### Human review checkpoint
Engineer signs off test report; required for week 15 capstone release.

---

## Stage transitions

```text
Gate_Circuit_lite  ──(Week 1 complete)──►  Weeks 2–3 start from same requirements
Gate_Circuit_full  ─────────────────────►  PCB stage may begin (week 4)
Gate_PCB           ─────────────────────►  Enclosure stage may begin (week 5)
Gate_Enclosure     ─────────────────────►  Fab package / System integration
Gate_System        ─────────────────────►  Capstone presentation / RELEASED (week 15)
```

No stage may mark artifacts `RELEASED` without: (1) gate pass, (2) human approve in audit log.
