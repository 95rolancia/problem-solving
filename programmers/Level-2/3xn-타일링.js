function solution(n) {
  const d = Array(n + 1).fill(0);
  d[1] = 0;
  d[2] = 3;
  d[3] = 0;
  // d[4] = d[2] * 3 + 2
  // d[6] = d[4] * 3 + 2 * d[2] + 2
  // d[n] = d[n - 2] * 3 + 2 * [n - 4] + 2
  // f(n) = 3 * d[n - 2] + 2 * [n - 4] + ... 2 * d[2] + 2
  for (let i = 4; i <= n; i += 2) {
    let sum = 0;
    for (let j = i - 4; j >= 2; j -= 2) {
      sum += d[j];
    }
    d[i] = (3 * d[i - 2] + 2 * sum + 2) % 1000000007;
  }
  return d[n];
}
