// 섬 연결하기 Level-3
// 장르 : MST

function solution(n, costs) {
  let answer = 0;

  const sortedEdges = costs.sort((a, b) => a[2] - b[2]);
  const parents = Array.from({ length: n }, (_, i) => i);

  for (const edge of sortedEdges) {
    const [from, to, weight] = edge;
    if (find(parents, from) !== find(parents, to)) {
      union(parents, from, to);
      answer += weight;
    }
  }

  return answer;
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  if (a > b) {
    // 더 낮은 원소가 부모 원소가 되도록
    parent[a] = b;
  } else {
    parent[b] = a;
  }
}

function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }
  // 경로 압축 최적화
  return (parent[x] = find(parent, parent[x]));
}
