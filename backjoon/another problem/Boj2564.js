const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `10 5
3
1 4
3 2
2 8
2 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/*
    백준 2564번 : 경비원
    난이도 : 실버 1
    알고리즘 분류 : 구현
*/

/* start coding */
const [W, H] = input().split(" ").map(Number);
const S = parseInt(input());

let locs = [];
for (let i = 0; i < S; i++) {
  const [dir, dis] = input().split(" ").map(Number);
  locs.push([dir, dis]);
}

let [x, y] = input().split(" ").map(Number);

let answer = 0;
// 1. 북 2. 남 3. 서 4. 동
locs.forEach((loc) => {
  if (loc[0] === 1) {
    if (x === 1) {
      answer += Math.abs(loc[1] - y);
    } else if (x === 2) {
      const first = y + H + loc[1];
      const second = W - y + H + W - loc[1];
      answer += Math.min(first, second);
    } else if (x === 3) {
      answer += y + loc[1];
    } else if (x === 4) {
      answer += y + W - loc[1];
    }
  } else if (loc[0] === 2) {
    if (x === 1) {
      const first = y + H + loc[1];
      const second = W - y + H + W - loc[1];
      answer += Math.min(first, second);
    } else if (x === 2) {
      answer += Math.abs(loc[1] - y);
    } else if (x === 3) {
      answer += H - y + loc[1];
    } else if (x === 4) {
      answer += W - loc[1] + H - y;
    }
  } else if (loc[0] === 3) {
    if (x === 1) {
      answer += y + loc[1];
    } else if (x === 2) {
      answer += y + H - loc[1];
    } else if (x === 3) {
      answer += Math.abs(loc[1] - y);
    } else if (x === 4) {
      const first = y + W + loc[1];
      const second = H - y + W + H - loc[1];
      answer += Math.min(first, second);
    }
  } else if (loc[0] === 4) {
    if (x === 1) {
      answer += W - y + loc[1];
    } else if (x === 2) {
      answer += W - y + H - loc[1];
    } else if (x === 3) {
      const first = y + W + loc[1];
      const second = H - y + W + H - loc[1];
      answer += Math.min(first, second);
    } else if (x === 4) {
      answer += Math.abs(loc[1] - y);
    }
  }
});

console.log(answer);
