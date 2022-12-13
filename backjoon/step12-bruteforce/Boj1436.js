/*
    Backjoon 1436번 
    문제 : 영화감독 숌 (https://www.acmicpc.net/problem/1436)
    난이도 : 실버 5 
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `10000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
let answer = Number.MAX_SAFE_INTEGER;

let arr = [];
for (let i = 666; i <= 3000000; i++) {
  if (i.toString().indexOf("666") !== -1) {
    arr.push(i);
  }
}

console.log(arr[N - 1]);
