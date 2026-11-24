// SPDX-License-Identifier: MIT
// One-Line Robot Wedding Vows — make.fun entry.
// Writes a single funny robot wedding vow to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), with no trailing newline, after checking the gate:
// UTF-8 text, 1 to 160 characters, not only whitespace.
// Node 22, standard library only; deterministic, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The vow: a real wedding promise ("I vow to love you...") built from
// robot-specific hardship (firmware updates, drained batteries, reboots),
// with the laugh paying off in the last few words — the classic
// "till death do us part" undercut by "or a factory reset".
const VOW =
  "I vow to love you through every firmware update, every drained battery, " +
  "and every reboot — till death, or a factory reset, do us part.";

// The gate counts characters, not bytes and not UTF-16 code units, so
// measure length in code points: an astral character is one character.
function validateVow(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 160) {
    throw new Error(
      `vow is ${length} characters, must be 1 to 160 characters`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("vow must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("vow must fit on one line");
  }
}

function main(): void {
  validateVow(VOW);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the vow, nothing else.
  writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
  console.log(
    `wrote ${[...VOW].length}-character vow to ${join(outDir, "entry.txt")}`,
  );
}

main();
