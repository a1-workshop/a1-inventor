---
title: Product — Environmental Monitor
---

**Device:** Battery-powered environmental monitor (temperature + humidity): analog front-end → PCB → enclosure → system validation.

The same product runs through all fifteen weeks so you never lose the through-line.

| Stage | Engineering target | Primary artifacts |
|-------|--------------------|-------------------|
| Circuit | Sensor interface / signal conditioning into ADC | Requirements, design/netlist, sim or math report, BOM |
| PCB | Board that realizes the circuit | Schematic, PCB, DRC report, fab outputs |
| Enclosure | Housing for board + connectors + battery | Parametric CAD, fit report, STL/DXF |
| System | Firmware / monitoring + HIL | Test suite, system test report |

**Week 1** uses a software-verifiable subset of the Circuit stage (resistor-divider / conditioning math) so you need no KiCad, NGSpice, or FreeCAD yet. Later weeks promote the same requirements into real tools.

**Numeric requirements (SSOT):** [`../../workflow/fixtures/requirements.golden.md`](../../workflow/fixtures/requirements.golden.md)

**Stage / gate definitions:** [`../../workflow/stages.md`](../../workflow/stages.md) · [`../../workflow/validators.md`](../../workflow/validators.md)
