# Exercise 01 — Model vs agent

**Time:** ~30 min  
**Goal:** Feel the difference between a raw LLM answer and a tool-constrained agent.

## Part A — Raw model (no tools)

1. Open a **fresh** chat with **no** system prompt from the agent pack.
2. Paste your `requirements.md` and ask: *“Design the resistor divider. Give me R1 and R2.”*
3. Save the reply (or notes) as `raw_model_notes.md` in your working folder.

Observe: Did it cite E96 values? Did it check impedance? Can you verify the math?

## Part B — Agent-shaped prompt

1. Start a **new** chat.
2. Paste [`../agents/circuit-lite/SYSTEM.md`](../agents/circuit-lite/SYSTEM.md) as the system prompt.
3. Also paste or attach [`../agents/circuit-lite/TOOLS.md`](../agents/circuit-lite/TOOLS.md) and [`../agents/circuit-lite/WORKFLOW.md`](../agents/circuit-lite/WORKFLOW.md).
4. Provide `requirements.md` and ask the agent to **propose a plan only** (no final design yet)—list which tools it would call and in what order.

## Done when

- [ ] You have notes from the raw reply
- [ ] The agent-shaped session produced an ordered tool plan (not just resistor values)
- [ ] You can say in one sentence how Part B differed from Part A
