/*
    문제 : 단지번호 붙이기 (https://www.acmicpc.net/problem/2667)
    난이도 : 실버 1
*/
const { BADFLAGS } = require("dns");
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const N = +input();
const map = [];
for (let i = 0; i < N; i++) {
  map.push(input().split("").map(Number));
}

const result = [];
const visited = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      bfs(i, j);
    }
  }
}

function bfs(x, y) {
  let cnt = 1;
  const q = [];
  visited[x][y] = true;
  q.push([x, y]);

  while (q.length > 0) {
    const cur = q.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = cur[0] + dx[i];
      const nextY = cur[1] + dy[i];
      if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
      if (visited[nextX][nextY]) continue;
      if (map[nextX][nextY] === 1) {
        visited[nextX][nextY] = true;
        cnt++;
        q.push([nextX, nextY]);
      }
    }
  }
  result.push(cnt);
}

console.log(result.length);
result.sort((a, b) => a - b).forEach((v) => console.log(v));
