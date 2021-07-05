/*
    문제 : 스타트와 링크 (https://www.acmicpc.net/problem/14889)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 5 3
5 4
5 2
1 2
3 4
3 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M, V] = input().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [from, to] = input().split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

for (let i = 1; i <= N; i++) {
  if (graph[i] !== undefined) {
    graph[i].sort((a, b) => a - b);
  }
}
/* DFS */
const visited = Array(N + 1).fill(false);
let answer = "";
dfs(V);
console.log(answer);

function dfs(V) {
  visited[V] = true;
  answer += V + " ";
  if (graph[V] === undefined) return;
  for (let i = 0; i < graph[V].length; i++) {
    if (!visited[graph[V][i]]) dfs(graph[V][i]);
  }
}

/* BFS */
bfs(V);
function bfs(V) {
  const q = [];
  const visited2 = Array(N + 1).fill(false);
  let answer2 = V + " ";

  q.push(V);
  visited2[V] = true;

  while (q.length > 0) {
    const cur = q.shift();
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (next && !visited2[next]) {
        q.push(next);
        answer2 += next + " ";
        visited2[next] = true;
      }
    }
  }
  console.log(answer2);
}
