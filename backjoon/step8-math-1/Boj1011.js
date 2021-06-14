/*
    Backjoon 1011번 
    문제 :  (https://www.acmicpc.net/problem/1011)
    난이도 : 실버 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
0 3
1 5
45 50`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const tcCnt = parseInt(input());
for (let tc = 0; tc < tcCnt; tc++) {
  const [x, y] = input().split(" ").map(Number);

  let dis = y - x;
  let max = parseInt(Math.sqrt(dis));

  if (max === Math.sqrt(dis)) {
    console.log(max * 2 - 1);
  } else if (dis <= max * max + max) {
    console.log(max * 2);
  } else {
    console.log(max * 2 + 1);
  }
}
