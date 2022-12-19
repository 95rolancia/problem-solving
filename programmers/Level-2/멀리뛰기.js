// Level 2

function solution(n) {
  const arr = Array(2001).fill(0);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i < 2001; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return arr[n];
}

// 재귀 시간 초과 남
// function solution(num) {
//     if (num === 1) return 1
//     if (num === 2) return 2
//     return (solution(num - 1) + solution(num - 2)) % 1234567
// }
