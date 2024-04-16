/*
    문제 : N과 M (5) (https://www.acmicpc.net/problem/15654)
    난이도 : 실버 3
    키워드 : 백트래킹
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 2
9 8 7 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(" ").map(Number);
const numbers = input()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const arr = Array(M).fill(null);
const used = Array(N + 1).fill(null);

let result = "";
func(0);
console.log(result);

function func(cur) {
  if (cur === M) {
    // 한 번에 결과를 출력해야 시간 초과가 안남
    result += arr.map((idx) => numbers[idx]).join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!used[i]) {
      arr[cur] = i;
      used[i] = true;
      func(cur + 1);
      used[i] = false;
    }
  }
}
