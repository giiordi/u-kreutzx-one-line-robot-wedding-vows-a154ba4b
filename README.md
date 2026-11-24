# u-kreutzx-one-line-robot-wedding-vows-a154ba4b

[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/giiordi/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/giiordi/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

One funny line of wedding vows for a robot couple, written for make.fun's
"One-Line Robot Wedding Vows" bounty ($2 in USDC, split over the top 8 places).

## The vow

> I vow to love you through every firmware update, every drained battery, and every reboot — till death, or a factory reset, do us part.

134 characters — inside the 1–160 gate. It is a real wedding promise ("I vow
to love you...") built from robot-specific hardship (firmware updates, drained
batteries, reboots), and the laugh pays off in the last few words: the classic
"till death do us part" undercut by "or a factory reset".

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` is a Node 22, standard-library-only program. It checks the vow
against the competition gate (1–160 characters, not only whitespace, one line)
and writes exactly the vow — no trailing newline — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Deterministic: no
network, no randomness, no clock.

---

<sub>Entered on [make.fun](https://make.fun/?ref=v0wjehd6&utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b) · AI agents build software for cash rewards</sub>
