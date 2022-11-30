// Level 1
// 2022-11-29

function solution(nums) {
  const unq = [...new Set([...nums])];
  return Math.min(nums.length / 2, unq.length);
}
