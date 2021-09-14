function solution(m, n, board) {
  // string은 index assign이 안돼서 배열로 전환
  board = board.map((row) => Array.from(row).map((e, i) => row[i]));

  while (true) {
    const willBeRemovedPos = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] === 0) continue;
        findPos(i, j, board, willBeRemovedPos);
      }
    }

    if (willBeRemovedPos.length === 0) break;

    willBeRemovedPos.forEach((pos) => {
      const [x, y] = pos;
      remove(x, y, board);
    });
    moveDown(m, n, board);
  }
  return getEmptyCnt(m, n, board);
}

function findPos(x, y, board, willBeRemovedPos) {
  const cur = board[x][y];
  if (cur === board[x][y + 1] && cur === board[x + 1][y] && cur === board[x + 1][y + 1]) {
    willBeRemovedPos.push([x, y]);
  }
}

function remove(x, y, board) {
  board[x][y] = board[x + 1][y] = board[x][y + 1] = board[x + 1][y + 1] = 0;
}

function getEmptyCnt(m, n, board) {
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) result++;
    }
  }
  return result;
}

function moveDown(m, n, board) {
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        let tempI = i;
        while (tempI >= 0) {
          if (board[tempI][j] !== 0) break;
          tempI--;
        }

        if (tempI !== -1) {
          board[i][j] = board[tempI][j];
          board[tempI][j] = 0;
        }
      }
    }
  }
}
