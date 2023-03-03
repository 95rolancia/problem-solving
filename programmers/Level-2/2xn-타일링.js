/**
 * 난이도 : Level2
 * 키워드 : 다이나믹 프로그래밍, dp
 *
 * 풀이 :
 * d[n] = d[n - 1] + d[n - 2];
 */

function solution(n) {
  const d = Array(n + 1).fill(0);
  d[1] = 1;
  d[2] = 2;
  for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 2] + d[i - 1]) % 1000000007;
  }
  return d[n];
}
