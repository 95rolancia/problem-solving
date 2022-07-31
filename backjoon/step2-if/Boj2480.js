/*
    Backjoon 2480번 
    문제 : 주사위 세 개 (https://www.acmicpc.net/problem/2480)
    난이도 : 브론즈 4
*/

const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `3 3 6`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [a, b, c] = input().split(' ').map(Number);

let set = new Set([a, b, c]);

if (set.size === 1) {
  console.log(10000 + a * 1000);
} else if (set.size === 2) {
  
} else if (set.size === 3) {
  console.log(Math.max(a, b, c) * 100);
}

console.log([...Array.from(set)]);

// if(a === b && b === c && a === c) {
//   console.log(Math.max(a, b, c) * 100);
// } else if(a === b || b === c || a === c) {
//   console.log(1000 + Math.)
// }
