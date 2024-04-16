const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `122`).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = input();

const freq = Array.from(n).reduce((acc, cur) => ((acc[cur] += 1), acc), new Array(10).fill(0));

const answer = Math.max(
  ...freq.map((v, idx) => {
    if (idx === 6) return Math.ceil((freq[6] + freq[9]) / 2);
    if (idx === 9) return Math.ceil((freq[6] + freq[9]) / 2);
    return v;
  })
);

console.log(answer);
