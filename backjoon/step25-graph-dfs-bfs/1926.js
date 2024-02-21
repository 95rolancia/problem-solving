/*
    문제 : 그림 (https://www.acmicpc.net/problem/1926)
    난이도 : 실버 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [m, n] = input().split(" ").map(Number);
const map = [];

for (let i = 0; i < m; i++) {
  map.push(input().split(" "));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

let cnt = 0; // 그림의 개수
let maxArea = 0; // 제일 큰 그림의 넓이

const visited = Array.from({ length: m }, () => Array(n).fill(false));

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === "1" && !visited[i][j]) {
      cnt++;
      bfs(i, j);
    }
  }
}

console.log(cnt);
console.log(maxArea);

function bfs(x, y) {
  const q = [[x, y]];
  visited[x][y] = true;
  let area = 0;

  while (q.length > 0) {
    area++;
    const [curX, curY] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (nx >= m || ny >= n || nx < 0 || ny < 0) continue;
      if (map[nx][ny] !== "1") continue;
      if (visited[nx][ny]) continue;

      q.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }
  maxArea = Math.max(maxArea, area);
}
