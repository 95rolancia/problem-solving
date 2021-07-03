/*
    문제 : 연산자 끼워넣기 (https://www.acmicpc.net/problem/14888)
    난이도 : 실버 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
10 11 3
0 1 0 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = input().split(" ").map(Number);
const ops = input().split(" ").map(Number);
const opCnt = ops.reduce((a, b) => a + b);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
console.log(max, min);

dfs(0, arr[0], ops.slice());

function dfs(depth, result, copiedOps) {
  if (depth === opCnt) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (copiedOps[i] > 0) {
      copiedOps[i]--;
      switch (i) {
        case 0:
          dfs(depth + 1, result + arr[depth + 1], copiedOps);
          break;
        case 1:
          dfs(depth + 1, result - arr[depth + 1], copiedOps);
          break;
        case 2:
          dfs(depth + 1, result * arr[depth + 1], copiedOps);
          break;
        case 3:
          if (result >= 0) dfs(depth + 1, Math.floor(result / arr[depth + 1]), copiedOps);
          else dfs(depth + 1, -Math.floor(-result / arr[depth + 1]), copiedOps);
          break;
      }
      copiedOps[i]++;
    }
  }
}

console.log(max ? max : 0);
console.log(min ? min : 0);
