/*
    문제 : 좌표 정렬하기 2 (https://www.acmicpc.net/problem/11650)
    난이도 : 실버 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
0 4
1 2
1 -1
2 2
3 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input().split(" "));
}

const answer = arr
  .sort(([x1, y1], [x2, y2]) => {
    if (y1 === y2) {
      return x1 - x2;
    }
    return y1 - y2;
  })
  .reduce((acc, [x, y]) => (acc += `${x} ${y}\n`), "");

console.log(answer);
