const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `103000509
002109400
000704000
300502006
060000050
700803004
000401000
009205800
804000107`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/*
    백준 2239번 : 스도쿠
    난이도 : 
    알고리즘 분류 : 
*/

/* start coding */
const check = ([row, col], n) => {
  // Check Row
  if (map[row].indexOf(number) >= 0) return false;
  // Check Col
  for (let i = 0; i < 9; i++) {
    if (map[i][col] === number) return false;
  }
  // Check Block
  const sx = parseInt(row / 3) * 3;
  const sy = Math.floor(col / 3) * 3;

  for (let i = sx; i < sx + 3; i++) {
    for (let j = sy; j < sy + 3; j++) {
      if (map[i][j] === number) return false;
    }
  }
  return true;
};
let find = false;
const simulation = (idx) => {
  if (find) return;
  if (idx === blank.length) {
    let answer = "";
    for (let i = 0; i < 9; i++) {
      answer += map[i].join("") + "\n";
    }
    console.log(answer);
    find = true;
    return;
  }

  for (let i = 1; i <= 9; i++) {
    if (check(blank[idx], i)) {
      map[blank[idx][0]][blank[idx][1]] = i;
      // console.log(blank[idx], i, idx);
      simulation(idx + 1);
      map[blank[idx][0]][blank[idx][1]] = 0;
    }
  }
};

const map = Array.from(new Array(9), () => new Array(9).fill(0));
const blank = [];
for (let i = 0; i < 9; i++) {
  let s = input().split("").map(Number);
  for (let j = 0; j < 9; j++) {
    map[i][j] = s[j];
    if (map[i][j] === 0) blank.push([i, j]);
  }
}

simulation(0);
