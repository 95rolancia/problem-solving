/*
    문제 : 운동 (https://www.acmicpc.net/problem/1956)
    난이도 : 골드 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 4
1 2 1
3 2 1
1 3 5
2 3 2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const INF = Number.MAX_SAFE_INTEGER;

const [V, E] = input().split(' ').map(Number);

const graph = Array.from({ length: V + 1 }, () => new Array(V + 1).fill(INF));

for (let i = 0; i < E; i++) {
  const [from, to, cost] = input().split(' ').map(Number);
  graph[from][to] = cost;
}

// for (let i = 1; i <= V; i++) {
//   graph[i][i] = 0;
// }

for (let stopover = 1; stopover <= V; stopover++) {
  for (let from = 1; from <= V; from++) {
    for (let to = 1; to <= V; to++) {
      if (from === to) continue;

      if (graph[from][to] > graph[from][stopover] + graph[stopover][to]) {
        graph[from][to] = graph[from][stopover] + graph[stopover][to];
      }
    }
  }
}

let answer = INF;

for (let from = 1; from <= V; from++) {
  for (let to = 1; to <= V; to++) {
    if (from === to) {
      continue;
    }

    if (graph[from][to] !== INF && graph[to][from] !== INF) {
      answer = Math.min(answer, graph[from][to] + graph[to][from]);
    }
  }
}

if (answer === INF) {
  console.log(-1);
} else {
  console.log(answer);
}
