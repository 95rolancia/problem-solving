const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/*
    백준 7576번 : 토마토
    난이도 : 실버 1
    알고리즘 분류 : 구현
*/

/* start coding */
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (box, visited, q) => {
  let time = 0;
  let head = 0;
  while (q.length > head) {
    const size = q.length - head;
    for (let s = 0; s < size; s++) {
      const [x, y] = q[head++];
      for (let i = 0; i < 4; i++) {
        const mx = x + dx[i];
        const my = y + dy[i];
        if (mx < 0 || my < 0 || mx >= N || my >= M) continue;
        if (visited[mx][my]) continue;

        visited[mx][my] = true;
        if (box[mx][my] === 0) {
          zeroCnt--;
          box[mx][my] = 1;
          q.push([mx, my]);
        }
      }
    }
    time++;
  }
  return time;
};

const [M, N] = input().split(" ").map(Number);
const box = [];
for (let i = 0; i < N; i++) {
  box.push(input().split(" ").map(Number));
}

const q = [];
const visited = Array.from(Array(N), () => Array(M).fill(false));
var zeroCnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      q.push([i, j]);
      visited[i][j] = true;
    } else if (box[i][j] === 0) {
      zeroCnt++;
    }
  }
}
const time = bfs(box, visited, q);
if (zeroCnt !== 0) {
  console.log(-1);
} else {
  console.log(time - 1);
}
