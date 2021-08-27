/*
    문제 : 프린터 큐 (https://www.acmicpc.net/problem/11866)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
for (let i = 0; i < N; i++) {
  const [N, M] = input().split(' ').map(Number);
  let q = input()
    .split(' ')
    .map((number, idx) => [+number, idx]);

  let order = 0;
  while (true) {
    if (q.every((number) => number[0] <= q[0][0])) {
      if (q[0][1] === M) {
        break;
      }
      q.shift();
      order++;
    } else {
      const temp = q.shift();
      q.push(temp);
    }
  }
  console.log(order + 1);
}
