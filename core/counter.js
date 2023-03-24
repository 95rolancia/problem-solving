/**
 *
 * @param {string[]} arr
 * @returns arr을 카운팅 한 객체
 */
export const counter = (arr) =>
  arr.reduce((acc, cur, i) => ({ ...acc, [cur]: number[i] }), {});
