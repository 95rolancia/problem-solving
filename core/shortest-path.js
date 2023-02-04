import { MinHeap } from "./data-structure/heap";

function dijkstra(road, N) {
  const heap = new MinHeap();
  heap.push({ node: 1, code: 0 });

  const dist = [...Array(N + 1)].map(() => Infinity);
  dist[1] = 0;

  while (!heap.isEmpty()) {
    const { node: current, cost: currentCost } = heap.pop();

    for (const [src, dest, cost] of road) {
      const nextCost = cost + currentCost;

      if (src === current && nextCost < dist[dest]) {
        dist[dest] = nextCost;
        heap.push({ node: dest, cost: nextCost });
      } else if (dest === current && nextCost < dist[src]) {
        dist[src] = nextCost;
        heap.push({ node: src, cost: nextCost });
      }
    }
  }
  return dist;
}
