/*
    Backjoon 10757번 
    문제 :  (https://www.acmicpc.net/problem/10757)
    난이도 : 브론즈 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `9223372036854775807 9223372036854775808`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [A, B] = input().split(" ").map(BigInt);
console.log((A + B).toString());
