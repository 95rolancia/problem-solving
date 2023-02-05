// 난이도 : Level 3
// 장르 : 백트래킹

function solution(n) {
  return search(Array(n).fill(0), 0);
}

function search(queen, row) {
  const len = queen.length;
  // N-Queen을 만족했을 때
  if (len === row) {
    return 1;
  }

  let cnt = 0;
  for (let col = 0; col < len; col++) {
    queen[row] = col;
    if (check(queen, row)) {
      cnt += search(queen, row + 1);
    }
  }

  return cnt;
}

function check(queen, row) {
  for (let i = 0; i < row; i++) {
    if (
      queen[i] === queen[row] ||
      Math.abs(queen[i] - queen[row]) === row - i
    ) {
      return false;
    }
  }
  return true;
}
