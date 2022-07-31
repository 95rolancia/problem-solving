/*
    Backjoon 2753번 
    문제 : 윤년 (https://www.acmicpc.net/problem/2753)
    난이도 : 브론즈 4
*/

const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `1999`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const year = parseInt(input());

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log('1');
} else {
  console.log('0');
}
