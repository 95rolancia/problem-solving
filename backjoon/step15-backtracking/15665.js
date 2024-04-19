/*
    문제 : N과 M (11) (https://www.acmicpc.net/problem/15654)
    난이도 : 실버 3
    키워드 : 백트래킹
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 2
9 7 9 1`
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
const used = Array(N).fill(false);

const arr = Array(M).fill(null);

let answer = "";
func(0);
console.log(answer);

function func(cur) {
  if (cur === M) {
    answer += arr.map((r) => numbers[r]).join(" ") + "\n";
    return;
  }

  let tmp = 0;
  for (let i = 0; i < N; i++) {
    if (tmp !== numbers[i]) {
      arr[cur] = i;
      tmp = numbers[i];
      func(cur + 1);
    }
  }
}
