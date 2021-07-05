/*
    문제 : 유기농 배추 (https://www.acmicpc.net/problem/1012)
    난이도 : 실버 2
*/
const { BADFLAGS } = require("dns");
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = 0;

const tcCnt = +input();
for (let tc = 0; tc < tcCnt; tc++) {
  const [width, height, K] = input().split(" ").map(Number);
  const map = Array.from({ length: height }, () => Array(width).fill(0));

  for (let i = 0; i < K; i++) {
    const [x, y] = input().split(" ").map(Number);
    map[y][x] = 1;
  }

  const visited = Array.from({ length: height }, () => Array(width).fill(false));

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        // bfs(i, j, visited, map);
        dfs(i, j, visited, map);
        result++;
      }
    }
  }

  console.log(result);
  result = 0;
}

/*BFS */
function bfs(x, y, visited, map) {
  const q = [];
  visited[x][y] = true;
  q.push([x, y]);
  while (q.length > 0) {
    const cur = q.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = cur[0] + dx[i];
      const nextY = cur[1] + dy[i];
      if (nextX < 0 || nextY < 0 || nextX >= visited.length || nextY >= visited[0].length) continue;
      if (visited[nextX][nextY]) continue;
      if (map[nextX][nextY] === 1) {
        visited[nextX][nextY] = true;
        q.push([nextX, nextY]);
      }
    }
  }
  result++;
}

/* DFS */
function dfs(x, y, visited, map) {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];
    if (nextX < 0 || nextY < 0 || nextX >= visited.length || nextY >= visited[0].length) continue;
    if (visited[nextX][nextY]) continue;
    if (map[nextX][nextY] === 1) {
      dfs(nextX, nextY, visited, map);
    }
  }
}
