/**
 * @description 주어진 연도가 윤년인지 검사하는 함수
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

/**
 * @description 주어진 두 날짜 차이를 구하는 함수
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number} date
 */
function datediff(date1, date2) {
  return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
}
