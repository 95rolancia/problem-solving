/*
    Backjoon 1002번 
    문제 : 터렛(https://www.acmicpc.net/problem/1002)
    난이도 : 실버 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let tcCnt = parseInt(input());
for (let tc = 0; tc < tcCnt; tc++) {
  const [x1, y1, r1, x2, y2, r2] = input().split(" ").map(Number);
  const dis = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const sub = r1 > r2 ? r1 - r2 : r2 - r1;
  let result = 0;
  if (dis === 0 && r1 === r2) result = -1;
  else if (dis < r1 + r2 && sub < dis) result = 2;
  else if (dis === r1 + r2 || dis === sub) result = 1;
  else result = 0;
  console.log(result);
}
