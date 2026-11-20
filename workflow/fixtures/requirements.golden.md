# Environmental Monitor — Golden Requirements

**Product:** Portable, battery-powered environmental monitor (temperature + humidity).
**Through-line stages:** Circuit → PCB → Enclosure → System.

These requirements are the shared contract across the fifteen-week spine. Week 1 validates a software-verifiable subset (signal conditioning into the ADC). Later weeks realize the same product with simulation, PCB, and mechanical packaging.

---

## 1. Functional

| ID | Requirement |
|----|-------------|
| F-1 | Measure ambient temperature and relative humidity |
| F-2 | Present conditioned analog (or digital-bus equivalent) signals to a microcontroller ADC / interface within specified ranges |
| F-3 | Operate from a single battery supply as defined in Electrical |
| F-4 | Provide a user-visible power indicator (LED or equivalent) |

## 2. Electrical (Circuit gates)

| ID | Requirement | Gate |
|----|-------------|------|
| E-1 | Sensor-side signal span treated as **0–3.3 V** for conditioning math (week 1 lite model) | Circuit lite / full |
| E-2 | ADC input window **0–1.0 V** | Circuit lite / full |
| E-3 | Conditioned output accuracy **±2%** of full scale at DC corners (worst-case resistor tolerance included for lite) | Circuit lite / full |
| E-4 | Output impedance of analog front-end **&lt; 10 kΩ** | Circuit lite |
| E-5 | Discrete resistors selected from **E96** series | Circuit lite |
| E-6 | Required nets present: `VBAT`, `3V3`, `GND`, `TEMP_SIG`, `HUM_SIG` (full circuit) | Circuit full |
| E-7 | Rails within sim limits: `3V3` = 3.3 V ±5% under nominal load (full circuit) | Circuit full |

## 3. PCB

| ID | Requirement | Gate |
|----|-------------|------|
| P-1 | Board outline **≤ 60 mm × 40 mm** | PCB |
| P-2 | DRC: zero unwaived errors for project design rules | PCB |
| P-3 | Keepouts: no copper in connector mating zones as defined in layout checklist | PCB |
| P-4 | BOM includes sensor, regulator (or battery protection as designed), and programming / debug connector if used | PCB |
| P-5 | Fab set present: Gerbers, drill, BOM, CPL (or instructor-defined equivalent) | PCB |

## 4. Mechanical (Enclosure)

| ID | Requirement | Gate |
|----|-------------|------|
| M-1 | Outer envelope **≤ 80 mm × 55 mm × 25 mm** | Enclosure |
| M-2 | Internal cavity clears board outline + **1.0 mm** XY clearance and height stackup + **1.5 mm** Z clearance | Enclosure |
| M-3 | Sensor and connector openings align within **±0.5 mm** of PCB feature positions | Enclosure |
| M-4 | Minimum wall thickness **2.0 mm** (FDM baseline) | Enclosure |
| M-5 | Export STL (and/or DXF for panels) for fabrication | Enclosure |

## 5. System

| ID | Requirement | Gate |
|----|-------------|------|
| S-1 | Automated test / HIL suite exits successfully | System |
| S-2 | Logged temperature and humidity samples cover the operating ranges claimed in the test plan | System |
| S-3 | Measurement error vs reference within accuracy claimed in the test plan | System |
| S-4 | Test report references released circuit, PCB, and enclosure gate ids | System |

## 6. Process / accountability

| ID | Requirement |
|----|-------------|
| A-1 | Every gate pass/fail recorded; human approve/reject recorded in `audit_log.jsonl` |
| A-2 | Agent tools remain allow-listed; validators contain no LLM calls |
| A-3 | No artifact marked `RELEASED` without gate PASS and human Approve |
