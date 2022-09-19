/*
    문제 : 배수와 약수 (https://www.acmicpc.net/problem/5086)
    난이도 : 브론즈 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8 16
32 4
17 5
0 0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const [a, b] = input().split(' ').map(Number);
  if (a === 0 && b === 0) break;

  if (b % a === 0) console.log('factor');
  else if (a % b === 0) console.log('multiple');
  else console.log('neither');
}
