# Architecture

Canonical agentic engineering loop (all tracks):

```text
Requirements
    ↓
Agent
    ↓
Engineering Harness
    ↓
Development Tools
    ↓
Validation
    ↓
Human Review
```

## Layered view

```text
┌─────────────────────────────────────┐
│  Human Review (gatekeeper / sign-off)│
└──────────────▲──────────────────────┘
               │ approve / reject
┌──────────────▼──────────────────────┐
│  Validation Pipeline                │  deterministic gates (no LLM)
└──────────────▲──────────────────────┘
               │ pass / fail + feedback
┌──────────────▼──────────────────────┐
│  Development Tools                  │  Python → KiCad / NGSpice / CAD / HIL
└──────────────▲──────────────────────┘
               │ tool results
┌──────────────▼──────────────────────┐
│  Engineering Harness                │  state, context, allow-list, audit
└──────────────▲──────────────────────┘
               │ plan → act → observe
┌──────────────▼──────────────────────┐
│  Agent (LLM + reasoning loop)       │
└──────────────▲──────────────────────┘
               │ natural-language requirements
┌──────────────▼──────────────────────┐
│  Requirements (human-written input) │
└─────────────────────────────────────┘
```

## Components

| Component | Responsibility |
|-----------|----------------|
| **Agent** | Reads requirements, decomposes tasks, calls tools, revises on validation failure |
| **Harness** | State, tool allow-list, execution, audit log, max-iteration limits |
| **Tools** | Allow-listed only; escalate by track |
| **Validation** | Deterministic checkers — [`../workflow/validators.md`](../workflow/validators.md) |
| **Human Review** | Approve/reject; reason in audit log; blocks `RELEASED` |

Agents may vary. **Gates do not.** A workflow passes when artifacts clear the stage gate without hand-editing validator math, and human review is recorded.

```text
Requirements → Agent → Harness → Tools → Deterministic Validator → Human Review → Next stage
```
