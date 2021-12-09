/*
    문제 : 플로이드 (https://www.acmicpc.net/problem/11404)
    난이도 : 골드 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
14
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
3 5 10
3 1 8
1 4 2
5 1 7
3 4 2
5 2 4`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const INF = Number.MAX_SAFE_INTEGER;

const N = parseInt(input());
const M = parseInt(input());

const graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(99999));

for (let i = 0; i < M; i++) {
  const [from, to, cost] = input().split(' ').map(Number);
  if (graph[from][to] === INF) {
    graph[from][to] = cost;
  } else {
    graph[from][to] = Math.min(graph[from][to], cost);
  }
}

for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

const d = graph.slice();

for (let stopover = 1; stopover <= N; stopover++) {
  for (let from = 1; from <= N; from++) {
    for (let to = 1; to <= N; to++) {
      if (from === to) continue;
      if (d[from][to] > d[from][stopover] + d[stopover][to]) {
        d[from][to] = d[from][stopover] + d[stopover][to];
      }
    }
  }
}

let result = '';
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (d[i][j] === INF) {
      result += `0 `;
    } else {
      result += `${d[i][j]} `;
    }
  }
  result += '\n';
}

console.log(result);
