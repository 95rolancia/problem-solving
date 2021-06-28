/*
    문제 : 나이순 정렬 (https://www.acmicpc.net/problem/10814)
    난이도 : 실버 5
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

let result = "";
const N = parseInt(input());
const arr = [];
for (let i = 0; i < N; i++) {
  const [age, name] = input().split(" ");
  arr.push([parseInt(age), name, i]);
}

arr
  .sort((a, b) => {
    if (a[0] === b[0]) return a[2] - b[2];
    return a[0] - b[0];
  })
  .forEach((a) => (result += `${a[0]} ${a[1]}\n`));

console.log(result);
