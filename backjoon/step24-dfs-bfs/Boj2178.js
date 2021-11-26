/*
    문제 : 미로 탐색 (https://www.acmicpc.net/problem/2178)
    난이도 : 실버 1
*/
const { BADFLAGS } = require("dns");
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 6
101111
101010
101011
111011`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = 0;

const [N, M] = input().split(" ").map(Number);
const map = [];

for(let i = 0; i < N; i++) {
  map.push(input().split("").map(Number))
}

const visited = Array.from({ length: N }, () => Array(M).fill(false));

bfs(0, 0);

console.log(map[N - 1][M - 1])

/*BFS */
function bfs(x, y) {
  const q = [];
  visited[x][y] = true;
  q.push([x, y]);

  while (q.length > 0) {
    const [curX, curY] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = curX + dx[i];
      const nextY = curY + dy[i];
      if (nextX < 0 || nextY < 0 || nextX >= visited.length || nextY >= visited[0].length) continue;
      if (visited[nextX][nextY]) continue;
      if (map[nextX][nextY] === 1) {
        visited[nextX][nextY] = true;
        q.push([nextX, nextY]);
        map[nextX][nextY] = map[curX][curY] + 1;
      }
    }
  }
}
