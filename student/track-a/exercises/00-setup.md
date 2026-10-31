# Exercise 00 — Setup

**Time:** ~15 min  
**Goal:** Working folder with templates and a clear requirements file.

## Steps

1. Copy the entire [`../templates/`](../templates/) directory to a working folder (e.g. `my-work/` next to these exercises). Do your editing there.
2. Open `requirements.md` in your working folder.
3. Either keep the starter text or replace it with the electrical subset from the golden requirements (ask your instructor which). At minimum you need:
   - Sensor span 0–3.3 V
   - ADC window 0–1.0 V
   - ±2% accuracy
   - Zout &lt; 10 kΩ
   - E96 resistors
4. Skim [`../agents/circuit-lite/README.md`](../agents/circuit-lite/README.md) so you know where the agent pack lives.
5. Confirm your LLM can accept a long system prompt (or “custom instructions”).

## Done when

- [ ] You have a private working copy of the templates
- [ ] `requirements.md` states the electrical constraints above
- [ ] You know how you will paste `SYSTEM.md` into your LLM
