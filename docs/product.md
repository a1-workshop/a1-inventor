# Product — Environmental Monitor

**Device:** Battery-powered environmental monitor (temperature + humidity): analog front-end → PCB → enclosure → system validation (Track C).

The same product is used across Tracks A, B, and C so learners never lose the through-line.

| Stage | Engineering target | Primary artifacts |
|-------|--------------------|-------------------|
| Circuit | Sensor interface / signal conditioning into ADC | Requirements, design/netlist, sim or math report, BOM |
| PCB | Board that realizes the circuit | Schematic, PCB, DRC report, fab outputs |
| Enclosure | Housing for board + connectors + battery | Parametric CAD, fit report, STL/DXF |
| System (C) | Firmware / monitoring + HIL | Test suite, system test report |

**Track A** uses a software-verifiable subset of the Circuit stage (resistor-divider / conditioning math) so the workshop needs no KiCad, NGSpice, or FreeCAD. Tracks B and C promote the same requirements into real tools.

**Numeric requirements (SSOT):** [`../workflow/fixtures/requirements.golden.md`](../workflow/fixtures/requirements.golden.md)

**Stage / gate definitions:** [`../workflow/stages.md`](../workflow/stages.md) · [`../workflow/validators.md`](../workflow/validators.md)
