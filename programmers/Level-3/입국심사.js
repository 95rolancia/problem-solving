function solution(n, times) {
  let answer = 0;
  times.sort((a, b) => a - b);

  let left = 0;
  let right = n * times[times.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
      answer = mid;
    }
  }

  return answer;
}
