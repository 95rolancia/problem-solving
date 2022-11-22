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
/**
 * 주어진 두 수의 최대공약수를 구하는 함수
 * @param {number} a
 * @param {number} b
 * @returns {number} 최대공약수
 */
function gcd(a, b) {
  if (a === 0) return b;
  return gcd(a % b, a);
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} 최소공배수
 */

function lcm(a, b) {
  return (a * b) / gcd(a, b);

  function gcd(a, b) {
    if (a === 0) return b;
    return gcd(a % b, a);
  }
}

/**
 * @description 주어진 숫자의 약수의 개수를 구하는 함수 | 시간복잡도: O(√N) 
 * @param {number} number
 * @returns {number} 약수의 개수
 */

 function getDivisorCnt(number) {
  let cnt = 0;
  for(let i = 1; i * i <= number; i++) {
      if (i * i === number) cnt++;
      else if (number % i == 0) cnt += 2;
  }
  return cnt;
}