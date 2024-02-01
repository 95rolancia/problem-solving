/**
 * @desc [startNumber, startNumber + 1, ..., endNumber] 배열을 구하는 함수
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns
 */
function getNumberArray(startNumber, endNumber) {
  return Array.from({ length: endNumber - startNumber + 1 }, (_, idx) => idx + startNumber);
}

/**
 * 주어진 숫자 시퀀스의 조세푸스 순열을 생성합니다.
 *
 * @param {number} n - 시퀀스의 요소 개수(1 <= n <= 10^5)
 * @param {number} k - 요소를 세고 제거하는 데 사용되는 간격(1 <= k <= n)
 * @returns {number[]} - 시퀀스의 조세푸스 순열입니다.
 *
 * @example
 * const n = 7;
 * const k = 3;
 * const result = josephusPermutation(n, k);
 * console.log(result); // 결과: [3, 6, 2, 7, 5, 1, 4]
 */
function josephusPermutation(n, k) {
  const answer = [];
  let idx = 0;

  const sequence = Array.from({ length: n }, (_, i) => i + 1);

  while (sequence.length !== 0) {
    idx = (idx + k - 1) % sequence.length;
    answer.push(sequence.splice(idx, 1)[0]);
  }

  return answer;
}
