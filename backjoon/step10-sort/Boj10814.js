/*
    문제 : 나이순 정렬 (https://www.acmicpc.net/problem/10814)
    난이도 : 실버 5
    풀이 날짜: 2023.01.27
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
21 Junkyu
21 Dohyun
20 Sunyoung`
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

console.log(
  arr
    .sort(compare)
    .map((a) => a.join(" "))
    .join("\n")
);

function compare(a, b) {
  return a[0] - b[0];
}
