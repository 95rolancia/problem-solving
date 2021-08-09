/*
    문제 : 잃어버린 괄호 (https://www.acmicpc.net/problem/1541)
    난이도 : 실버 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `30-70-20+40-10+100+30-35`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const ex = input().split('-');

let temp = [];
for (i of ex) {
  let cnt = 0;
  let s = i.split('+');
  for (j of s) {
    cnt += parseInt(j);
  }
  temp.push(cnt);
}

let result = temp[0];
if (temp.length > 1) {
  console.log(result - temp.slice(1).reduce((a, b) => a + b));
} else {
  console.log(temp[0]);
}
