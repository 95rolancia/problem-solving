/*
    문제 : 팩토리얼 0의 개수 (https://www.acmicpc.net/problem/1676)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `30`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = +input();
let result = 0;
while (N > 0) {
  result += parseInt(N / 5);
  N = parseInt(N / 5);
}
console.log(result);
