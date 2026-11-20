# Allow-listed tools (week 1 / circuit-lite)

The agent may request only these tools. The human (or a future harness) executes them and returns results.

## read_file(path)

Read a text file from the student’s working folder.

- `path`: relative path such as `requirements.md`

## write_file(path, content)

Write or overwrite a text file in the working folder.

- `path`: e.g. `design.json`, `bom.csv`, `validation_report.md`
- `content`: full file body

## compute_divider(v_in_max, v_out_target, resistor_series)

Suggest a two-resistor divider (R1 from input to mid, R2 from mid to ground) that approximately maps `v_in_max` to `v_out_target` using the named series (e.g. `E96`).

Returns: proposed `r1_ohms`, `r2_ohms`, ratio, nominal `v_out` at `v_in_max`, and approximate Thevenin impedance `r1||r2`.

## check_constraints(design, requirements_summary)

Independently evaluate `Gate_Circuit_lite` checks:

- `adc_window`
- `impedance`
- `series`
- `bom_fields` (if BOM provided)

Returns: `PASS` or `FAIL` with per-check detail. This check must not be performed by “vibes”—use explicit arithmetic against requirements.

## generate_bom(design)

Emit CSV rows: reference, value, series, notes for each passive in the design.

## generate_report(design, validation_result)

Write a short markdown validation report summarizing checks and metrics.

---

### Tool call format (for chat)

When you want a tool, output exactly:

```text
TOOL_CALL
name: <tool_name>
args:
  <key>: <value>
```

Then wait for `TOOL_RESULT` from the human/harness before continuing.
