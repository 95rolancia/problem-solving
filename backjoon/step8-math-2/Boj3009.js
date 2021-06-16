/*
    Backjoon 3009번 
    문제 : 네 번째점(https://www.acmicpc.net/problem/3009)
    난이도 : 브론즈 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `30 20
10 10
10 20`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let tc = 3;
let a = 0;
let b = 0;
while (tc--) {
  let [x, y] = input().split(" ").map(Number);
  a = a ^ x;
  b = b ^ y;
}
console.log(a, b);
