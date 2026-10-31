# Track A — Agentic Engineering Foundations

**Duration:** ~3.5 hours hands-on  
**Product slice:** Environmental Monitor signal conditioning (software-verifiable; no PCB tools required)

## Learning objectives

- Differentiate models, assistants, agents, and harnessed workflows
- Use memory/state, tools, and context in a simple loop
- See where autonomy helps and where human review is essential
- Run a structured validation loop (`Gate_Circuit_lite`)
- Keep an auditable trail of decisions

## Phases

| # | Exercise | Focus |
|---|----------|--------|
| 0 | [`exercises/00-setup.md`](exercises/00-setup.md) | Templates and requirements |
| 1 | [`exercises/01-model-vs-agent.md`](exercises/01-model-vs-agent.md) | Raw model vs tool-aware agent |
| 2 | [`exercises/02-run-harness-loop.md`](exercises/02-run-harness-loop.md) | Plan → act → observe with the agent pack |
| 3 | [`exercises/03-validation-gate.md`](exercises/03-validation-gate.md) | Deterministic checks; known-bad inject |
| 4 | [`exercises/04-human-review.md`](exercises/04-human-review.md) | Approve / reject |
| 5 | [`exercises/05-capstone-release.md`](exercises/05-capstone-release.md) | End-to-end to RELEASED |

## Agent pack

[`agents/circuit-lite/`](agents/circuit-lite/) — portable system prompt, tools, and workflow (no Cursor required).

## Artifacts you will produce

Copy from [`templates/`](templates/):

- `requirements.md`
- `design.json`
- `validation_report.md`
- `bom.csv`
- `audit_log.jsonl`
