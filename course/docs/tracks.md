---
title: Week → gate map
lead: How the fifteen weeks map onto shared gate contracts.
---

One course spine. Stages unlock when their **gate** passes *and* a human review decision is recorded.

| Weeks | Stage | Gate |
| --- | --- | --- |
| 1 | Circuit (lite) — foundations | `Gate_Circuit_lite` |
| 2–3 | Circuit (full) | `Gate_Circuit_full` |
| 4 | PCB | `Gate_PCB` |
| 5 | Enclosure | `Gate_Enclosure` |
| 6–7 | Firmware / data path | (prep for system) |
| 8–9 | System / HIL | `Gate_System` |
| 10–14 | Packaging, docs, freeze, polish | (supporting) |
| 15 | Presentation & release | All gates green + human Approve |

Canonical stage definitions: [`../../workflow/stages.md`](../../workflow/stages.md) · Validators: [`../../workflow/validators.md`](../../workflow/validators.md).

Start at [week 1](../weeks/01-foundations.md).
