/**
 * @desc 주어진 문자열 뒤의 n개의 문자를 구하는 함수
 * @param {string} str
 * @param {number} n
 * @returns
 */
function getStrFollowedByNChars(str, n) {
  return str.slice(-n);
}
