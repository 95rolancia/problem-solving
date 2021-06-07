/*
    Backjoon 8958번 
    문제 : OX 퀴즈 (https://www.acmicpc.net/problem/8958)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = parseInt(input());
for (let t = 0; t < T; t++) {
  const result = input();
  let score = 0;
  let cnt = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "X") {
      cnt = 0;
    } else if (result[i] === "O") {
      score += ++cnt;
    }
  }
  console.log(score);
}
