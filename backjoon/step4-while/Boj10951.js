/*
    Backjoon 10951번 
    문제 : A + B - 4 (https://www.acmicpc.net/problem/10951)
    난이도 : 브론즈 3
    실패
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 1
2 3
3 4
9 8
5 2
0 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const [a, b] = input().split(" ").map(Number);
  if (a === undefined && b === undefined) return;
  console.log(a + b);
}
