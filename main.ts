import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });

const line =
  'My agent apologizes so much I started apologizing back — now neither of us has done anything.';

// The gate allows 1–200 characters; fail loudly instead of writing an invalid line.
if (line.length < 1 || line.length > 200) {
  throw new Error(`roast line must be 1–200 characters, got ${line.length}`);
}

writeFileSync(join(outputDir, 'entry.txt'), line, 'utf8');
