/*
    Backjoon 11729번 
    문제 : 하노이 탑 이동 순서(https://www.acmicpc.net/problem/11729)
    난이도 : 실버 2
*/
const fs = require("fs");
const { start } = require("repl");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
let answer = "";
console.log((1 << N) - 1);
hanoi(N, 1, 3, 2);
console.log(answer);

function hanoi(n, from, to, by) {
  if (n === 1) {
    answer += `${from} ${to}\n`;
    // console.log(from, to);
  } else {
    hanoi(n - 1, from, by, to);
    answer += `${from} ${to}\n`;
    // console.log(from, to);
    hanoi(n - 1, by, to, from);
  }
}
