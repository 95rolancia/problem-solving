/**
 * ~ to 까지의 소수 배열을 구하는 함수
 * @param {number} to
 * @returns {number[]}
 */
function getPrimeNumList(to) {
  const boolArr = new Array(to + 1).fill(true);

  boolArr[0] = boolArr[1] = false;

  for (let i = 2; i * i <= to; i++) {
    for (let j = i * 2; j <= to; j += i) {
      boolArr[j] = false;
    }
  }

  const result = boolArr
    .map((boolValue, idx) => (boolValue ? idx : null)) //
    .filter((item) => item);

  return result;
}

/**
 * 주어진 숫자가 소수인지 판별하는 함수
 * @param {number} number
 * @returns {boolean}
 */
function isPrimeNumber(number) {
  if (number < 2) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}