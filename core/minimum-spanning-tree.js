// * @typedef {Object} Todo
// * @property {number} id - 할일 id
// * @property {string} content - 할일 내용
// * @property {boolean} completed - 할일 완료 여부

import { find, union } from "./data-structure/disjoint-set";

/**
 * @description MST 최소 비용 구하는 함수
 * @param {number} n 정점의 개수
 * @param {[number, number, number][]} edges 순서대로 from, to, weight
 */
function kruskal(n, edges) {
  const sortedEdges = edges.sort((a, b) => a[2] - b[2]);
  const parents = Array.from({ length: n }, (_, i) => i);
  let result = 0;
  edges.forEach(([from, to, weight]) => {
    if (find(parents, from) !== find(parents, to)) {
      union(parents, from, to);
      result += weight;
    }
  });
  return weight;
}
