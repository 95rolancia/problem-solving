/*
    Backjoon 10250번 
    문제 : ACM 호텔 (https://www.acmicpc.net/problem/10250)
    난이도 : 브론즈 3
*/
const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `6`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const tcCnt = parseInt(input());
for (let tc = 0; tc < tcCnt; tc++) {
  const [H, W, N] = input().split(" ").map(Number);
}
