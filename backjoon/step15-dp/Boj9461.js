/*
    문제 : 파도반 수열 (https://www.acmicpc.net/problem/9461)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
6
12`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const tcCnt = +input();
const memo = Array(101).fill(0);
memo[0] = 0;
memo[1] = 1;
memo[2] = 1;
memo[3] = 1;
memo[4] = 2;
memo[5] = 2;
for (let i = 6; i < 101; i++) {
  memo[i] = memo[i - 1] + memo[i - 5];
}

for (let tc = 0; tc < tcCnt; tc++) {
  const N = +input();
  console.log(memo[N]);
}
