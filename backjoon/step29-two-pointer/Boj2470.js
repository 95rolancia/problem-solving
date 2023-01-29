/*
    문제 : 두 용액 (https://www.acmicpc.net/problem/2470)
    난이도 : 골드 5
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
-2 4 -99 -1 98`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = input().split(' ').map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let right = N - 1;

let diff = Number.MAX_SAFE_INTEGER;
let answerLeft = -1;
let answerRight = -1;

while (left < right) {
  const mixed = arr[left] + arr[right];

  if (Math.abs(mixed) < diff) {
    diff = Math.abs(mixed);
    answerLeft = left;
    answerRight = right;
    if (mixed === 0) break;
  }

  if (mixed < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(arr[answerLeft], arr[answerRight]);
