function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }
  return answer;
}

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

solution([1, 2, 3, 4]); // 1
solution([1, 2, 7, 6, 4]); // 4
