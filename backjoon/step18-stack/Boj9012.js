/*
    문제 : 괄호 (https://www.acmicpc.net/problem/9012)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
for (let i = 0; i < N; i++) {
  const stk = [];
  const arr = input().split('');
  let find = true;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === '(') {
      stk.push(arr[j]);
    } else {
      if (stk.length === 0) {
        console.log('NO');
        find = false;
        break;
      } else {
        stk.pop();
      }
    }
  }

  if (stk.length > 0) console.log('NO');
  else if (find) console.log('YES');
}
