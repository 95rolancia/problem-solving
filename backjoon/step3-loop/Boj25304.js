/*
    Backjoon 25304번 
    문제 : 더하기 사이클 (https://www.acmicpc.net/problem/25304)
    난이도 : 브론즈 5
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let cost = parseInt(input());
let cnt = parseInt(input());
let sum = 0;
for (let i = 0; i < cnt; i++) {
  let [price, number] = input().split(" ").map(Number);
  sum += price * number;
}

if (sum === cost) {
  console.log("Yes");
} else {
  console.log("No");
}
