/*
    문제 : 스타트와 링크 (https://www.acmicpc.net/problem/14889)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1000 1 1
999 1000`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M, V] = input().split(' ').map(Number);
const graph = {};

for (let i = 0; i < M; i++) {
  const [from, to] = input().split(' ').map(Number);
  graph[from] ? graph[from].push(to) : (graph[from] = [to]);
  graph[to] ? graph[to].push(from) : (graph[to] = [from]);
}

console.log(graph)

for (const key in graph) {
  graph[key].sort((a, b) => a - b)
}

const visited = Array(N + 1).fill(false);
let result = '';
dfs(0, V);

function dfs(depth, cur) {
  if (depth === N) return;
  visited[cur] = true;
  result += `${cur} `;

  if(graph[cur] == null) return;
  for (const edge of graph[cur]) {
    if (!visited[edge]) {
      dfs(depth + 1, edge);
    }
  }
}

// bfs
const visited2 = Array(N + 1).fill(false);
let q = [V];
visited2[V] = true;
result += '\n' + V + " ";

while(q.length > 0) {
  const cur = q.shift();

  if(graph[cur] == null) break;
  for (const edge of graph[cur]) {
    if (!visited2[edge]) {
      q.push(edge);
      visited2[edge] = true;
      result += `${edge} `
    }
  }
}

console.log(result)

