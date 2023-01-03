// 인접 행렬
const graph = Array.from({ length: 5 }, () => Array(5).fill(false));
graph[0][1] = true;
graph[0][3] = true;
console.table(graph);

// 인접 리스트
const graph2 = Array.from({ length: 5 }, () => []);
graph2[0].push(1);
graph2[0].push(3);
graph2[1].push(2);
console.table(graph2);
