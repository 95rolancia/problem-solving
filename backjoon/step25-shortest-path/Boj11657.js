/*
    문제 : 타임머신 (https://www.acmicpc.net/problem/11657)
    난이도 : 골드 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 4
1 2 4
1 3 3
2 3 -1
3 1 -2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const INF = Number.MAX_SAFE_INTEGER;

const [N, M] = input().split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [from, to, weight] = input().split(' ').map(Number);
  graph[from].push([to, weight]);
}

const d = Array(N + 1).fill(INF);

let cycle = false;

d[1] = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    for (const next of graph[j]) {
      if (d[j] !== INF && d[next[0]] > next[1] + d[j]) {
        d[next[0]] = next[1] + d[j];
        if (i === N) {
          cycle = true;
          break;
        }
      }
    }
  }
}

if (cycle) console.log(-1);
else {
  for (let i = 2; i <= N; i++) {
    if (d[i] === INF) console.log(-1);
    else console.log(d[i]);
  }
}
