/*
    Backjoon 10871번 
    문제 : X보다 작은 수(https://www.acmicpc.net/problem/10871번)
    난이도 : 브론즈 3
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? readFileSync("/dev/stdin").toString()
    : `10 5
1 10 4 9 2 3 8 5 7 6`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

console.log(input);

const [N, X] = input().split(" ").map(Number);
const list = input().split(" ").map(Number);

console.log(list.filter((a) => a < X).join(" "));
