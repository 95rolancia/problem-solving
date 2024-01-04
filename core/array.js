/**
 * @desc [startNumber, startNumber + 1, ..., endNumber] 배열을 구하는 함수
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns
 */
function getNumberArray(startNumber, endNumber) {
  return Array.from({ length: endNumber - startNumber + 1 }, (_, idx) => idx + startNumber);
}
