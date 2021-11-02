// https://programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  // dp[a][b] = a행에서 b열을 선택했을 때 최고 점수;
  // dp[a][0] = Math.max(dp[a - 1][1],dp[a - 1][2],dp[a - 1][3])
  // + land[a][0]
  const dp = Array.from({ length: 100001 }, () => new Array(4).fill(0));
  dp[0][0] = land[0][0];
  dp[0][1] = land[0][1];
  dp[0][2] = land[0][2];
  dp[0][3] = land[0][3];

  for (let i = 1; i < land.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][0];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + land[i][1];
    dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + land[i][2];
    dp[i][3] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + land[i][3];
  }
  return Math.max(...dp[land.length - 1]);
}
