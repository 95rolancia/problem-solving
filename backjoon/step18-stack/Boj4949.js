/*
    문제 : 균형잡힌 세상 (https://www.acmicpc.net/problem/4949)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const arr = input().split('');
  if (arr.length === 1 && arr[0] === '.') break;

  const stk = [];
  let find = true;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === '(' || arr[j] === '[') {
      stk.push(arr[j]);
    } else if (arr[j] === ')' || arr[j] === ']') {
      if (stk.length === 0) {
        console.log('no');
        find = false;
        break;
      } else {
        if (arr[j] === ']' && stk[stk.length - 1] === '[') {
          stk.pop();
        } else if (arr[j] === ')' && stk[stk.length - 1] === '(') {
          stk.pop();
        } else {
          find = false;
          break;
        }
      }
    } else {
      continue;
    }
    // console.log(stk);
  }

  if (stk.length > 0) console.log('no');
  else if (find) console.log('yes');
}
