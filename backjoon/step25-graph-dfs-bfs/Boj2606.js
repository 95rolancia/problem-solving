/*
    문제 : 바이러스 (https://www.acmicpc.net/problem/2606)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7
6
1 2
2 3
1 5
5 2
5 6
4 7`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const edgeCnt = +input();
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < edgeCnt; i++) {
  const [from, to] = input().split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

/* DFS */
let visited = Array(N + 1).fill(false);
let answer = -1;
dfs(1);
console.log(answer);
function dfs(start) {
  visited[start] = true;
  answer++;
  if (graph[start] === undefined) return;
  for (let i = 0; i < graph[start].length; i++) {
    if (!visited[graph[start][i]]) dfs(graph[start][i]);
  }
}

/* BFS */
bfs(1);
function bfs(V) {
  let result = 0;
  const q = [];
  const visited2 = Array(N + 1).fill(false);

  q.push(V);
  visited2[V] = true;

  while (q.length > 0) {
    const cur = q.shift();
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (next && !visited2[next]) {
        q.push(next);
        result++;
        visited2[next] = true;
      }
    }
  }
  console.log(result);
}
