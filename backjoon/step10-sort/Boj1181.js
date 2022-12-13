/*
    문제 : 단어 정렬 (https://www.acmicpc.net/problem/1181)
    난이도 : 실버 5
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

let result = "";
const N = parseInt(input());
const arr = new Set();
for (let i = 0; i < N; i++) {
  const word = input();
  arr.add(word);
}

[...arr]
  .sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    return a.length - b.length;
  })
  .forEach((a) => (result += a + "\n"));

console.log(result);
