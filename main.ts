// One Emoji, One Smile — entry for make.fun
// Writes exactly one emoji to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Final pick: 🤗 (hugging face). A hug is the warmest thing one emoji can
// offer a stranger at first glance — a friendly welcome that needs no
// context, reads the same for any age or background, and is a chosen pick
// rather than the default smiley. It carries no irony, intimacy or
// flirtation, and it is unlikely to be one of the house's fixed texts.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🤗";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
console.log(EMOJI);
