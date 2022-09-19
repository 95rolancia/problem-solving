/*
    문제 : 킹, 퀸, 룩, 비숍, 나이트, 폰 (https://www.acmicpc.net/problem/3003)
    난이도 : 브론즈 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [a, b, c, d, e, f] = input().split(" ").map(Number);

const CHESS = [1, 1, 2, 2, 2, 8];

console.log(
  CHESS[0] - a,
  CHESS[1] - b,
  CHESS[2] - c,
  CHESS[3] - d,
  CHESS[4] - e,
  CHESS[5] - f,
  CHESS[6] - g
);
