/*
    Backjoon 5597번 
    문제 : 과제 안 내신 분?.. (https://www.acmicpc.net/problem/5597)
    난이도 : 브론즈 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let total = 0;
const start = new Date().getTime();
for (let i = 0; i < 100000000; i++) {
  total += i;
}
backjoonconst end = new Date().getTime();
console.log(end - start);
const arr = Array(30).fill(false);
for (let i = 0; i < 28; i++) {
  arr[parseInt(input()) - 1] = true;
}

arr.forEach((a, idx) => {
  if (!a) console.log(idx + 1);
});
