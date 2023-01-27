/*
    문제 : 단어 정렬 (https://www.acmicpc.net/problem/1181)
    난이도 : 실버 5
    풀이 날짜 : 2023.01.27
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input());
}

const unqArr = [...new Set(arr)];
console.log(unqArr.sort(compare).join("\n"));

// 정렬 조건 1. 길이가 짧은 것 부터
// 정렬 조건 2. 길이가 같으면 사전 순으로

function compare(a, b) {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }

  return a.length - b.length;
}
