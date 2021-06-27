/*
    Backjoon 11650번 
    문제 : 좌표 (https://www.acmicpc.net/problem/11650)
    난이도 : 실버 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
3 4
1 1
1 -1
2 2
3 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let result = "";
const N = parseInt(input());
const arr = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input().split(" ").map(Number);
  arr.push([x, y]);
}

arr
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  })
  .forEach((a) => (result += a.join(" ") + "\n"));

console.log(result);
