// make.fun entry: Famous Last Words at 1 Percent (re-entry 2026-11-26)
// Writes the phone's dying one-liner to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I offered Low Power Mode. You said 'one more video' six videos ago. At 1%, we both made choices.";

// Gate check (competition: 1-199 chars, single non-blank line).
if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.trim() === "" || ENTRY.includes("\n")) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
