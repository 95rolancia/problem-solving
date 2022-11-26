/*
    Backjoon 2839번 
    문제 : 설탕 배달(https://www.acmicpc.net/problem/2839)
    난이도 : 실버 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `18`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = parseInt(input());

// 1. 그리디
{
  let five = 0;
  let three = 0;

  while (true) {
    if (N <= 0) break;
    if (N % 5 === 0) {
      five += N / 5;
      N = 0;
      break;
    }
    three++;
    N -= 3;
  }

  if (N !== 0) {
    console.log(-1);
  } else {
    console.log(five + three);
  }
}

{
  // 2. dp 사용
  // 점화식 : d[n] = Math.min(d[n-3], d[n-5])
  const d = Array(N + 5).fill(Number.MAX_SAFE_INTEGER);
  d[3] = d[5] = 1;
  for (let i = 6; i <= N; i++) {
    d[i] = Math.min(d[i - 3], d[i - 5]) + 1;
  }

  console.log(Number.MAX_SAFE_INTEGER >= d[N] ? -1 : d[N]);
}
