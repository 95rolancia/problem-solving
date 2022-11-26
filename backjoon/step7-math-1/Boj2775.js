/*
    Backjoon 2775번 
    문제 : 부녀회장이 될테야 (https://www.acmicpc.net/problem/2775)
    난이도 : 브론즈 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
1
3
2
3
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const tcCnt = parseInt(input());

for (let tc = 0; tc < tcCnt; tc++) {
  const k = parseInt(input());
  const n = parseInt(input());
  console.log(go(floor, ho));
}

function go(floor, ho) {
  if (ho == 1) return 1;
  if (floor == 0) return ho;
  return go(floor - 1, ho) + go(floor, ho - 1);
}
