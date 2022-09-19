/*
    문제 : 피보나치 함수 (https://www.acmicpc.net/problem/1003)
    난이도 : 골드 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
0
1
2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const tcCnt = +input();
for (let tc = 0; tc < tcCnt; tc++) {
  const n = +input();
  if (n === 0) {
    console.log(1, 0);
    continue;
  }
  let memo = Array(n).fill(0);
  fibo(n);
  console.log(memo[n - 1], memo[n]);

  function fibo(n) {
    if (n === 0) {
      memo[0] = 0;
      return 0;
    } else if (n === 1) {
      memo[1] = 1;
      return 1;
    }
    if (memo[n]) return memo[n];
    else return (memo[n] = fibo(n - 1) + fibo(n - 2));
  }
}
