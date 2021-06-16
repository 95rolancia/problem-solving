/*
    Backjoon 4153번 
    문제 : 직각삼각형(https://www.acmicpc.net/problem/4153)
    난이도 : 브론즈 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8 6 10
25 52 60
5 12 13
0 0 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const arr = input().split(" ").map(Number);
  if (arr[0] === 0) break;
  arr.sort((a, b) => a - b);

  if (arr[2] * arr[2] === arr[1] * arr[1] + arr[0] * arr[0]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
