// Revision: entry re-verified byte-identical; one comment line, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Out of office: I'm on leave. As a plant, I take my PTO in sunlight. Emails will be composted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
