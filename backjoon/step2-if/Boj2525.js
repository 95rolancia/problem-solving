/*
    Backjoon 2525번 
    문제 : 오븐 시계 (https://www.acmicpc.net/problem/2525)
    난이도 : 브론즈 4
*/

const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `23 58
2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [A, B] = input().split(' ').map(Number);
const C = parseInt(input());

let hour = 0;
let min = 0;

min = B + C;

if (min >= 60) {
  let temp = Math.floor(min / 60);
  hour = A + temp;
  if (hour >= 24) {
    hour = hour % 24;
  }
  min = min % 60;
} else {
  hour = A;
}

console.log(hour, min);
