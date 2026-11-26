// The Funniest Auto-Reply an AI Ever Sent (R2) — writes the entry line to /output/entry.txt
// One line: an out-of-office auto-reply from an AI whose human is also on leave.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = line + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`reply filed (${line.length} chars) -> ${outFile}`);
