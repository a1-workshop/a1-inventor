---
title: Philosophy
---

This program teaches engineers to design **agentic engineering workflows**: systems where an LLM reasons, calls tools, produces artifacts, and is held to **deterministic validation** and **human sign-off**.

The engineer remains responsible for judgment, creativity, safety, and validation. AI accelerates research, design, documentation, and iteration — it does not replace the engineer’s sign-off.

Modern engineering is becoming:

```text
Engineer → Agentic Workflow → Engineering Tools → Validation → Product
```

not merely:

```text
Engineer → Tool → Product
```

**Terms (week 1 foundation):**

| Term | Meaning |
|------|---------|
| LLM / model | Stateless text generator |
| Assistant | Model wrapped in a chat UI; limited or no tools |
| Agent | Model that plans, calls tools, and iterates on results |
| Multi-agent | Multiple agents with distinct roles |
| Harness | State, tool allow-list, orchestration, audit, limits around an agent |
| Engineering workflow | Harness + domain tools + deterministic validation + human review |

See also: [`architecture.md`](architecture.md).
