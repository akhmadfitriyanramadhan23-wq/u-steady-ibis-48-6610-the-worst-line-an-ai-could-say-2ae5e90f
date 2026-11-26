// The Worst Line an AI Could Say — entry for
// u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f
// Node 22 stdlib only, deterministic, no network.
// Writes one pickup line (<=140 chars) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I calculated a 0.04% chance you would say yes, so I booked our table for Tuesday and backed up your smile to the cloud, just in case.";

// The gate: /output/entry.txt must be UTF-8, 1-140 chars, not only whitespace.
const MAX_CHARS = 140;
const chars = [...LINE].length;
if (chars < 1 || chars > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-${MAX_CHARS} chars, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
