# Internal roadmap

Absorbed from the former root `project_plan.md`. Audience: instructors and curriculum authors—not students.

## Locked

- Tracks A → B → C with Environmental Monitor through-line
- Hybrid delivery; students without Cursor
- Gate SSOT in [`../workflow/`](../workflow/)
- Portable student agent packs under [`../student/`](../student/)

## Build order

1. **Now (done in docs pass):** Audience-separated tree; Track A exercises + circuit-lite agent; proposal draft packet.
2. **Next:** Implement deterministic `Gate_Circuit_lite` checker in Python; wire fixture battery CI or a local script.
3. **Then:** Thin CLI harness that executes allow-listed tools (students still do not need Cursor).
4. **After proposal approval:** Expand Track B student labs (sim → PCB → enclosure) and instructor guides.
5. **Later:** Track C week labs, HIL/`Gate_System`, physical kit BOM.

## Open instructor ops

1. Confirm which student LLMs are supported in the lab (accounts, offline options).
2. Human-review UX: paper/audit template vs future CLI prompt.
3. Track B/C environment: containers vs lab installs for KiCad/NGSpice/FreeCAD.
4. Physical kit / BOM for fabrication cohorts.
5. Dry-run fixture battery + one Track A end-to-end before first workshop.
6. Lock evening (3 h) vs weekend (5 h) calendars against Track A phases.

## Guardrails (remind facilitators)

| Risk | Guardrail |
|------|-----------|
| Hallucinated values | Independent gate checks |
| Tool abuse | Allow-listed tools only |
| Infinite loops | Max iterations → escalate |
| No trace | `audit_log.jsonl` |
| Over-trust | Mandatory human Approve |

## Success bars

| Track | Bar |
|-------|-----|
| A | Lite circuit gate + audit + model/agent/harness distinction |
| B | Full circuit + PCB + enclosure gates |
| C | B gates + system gate + invention package |
