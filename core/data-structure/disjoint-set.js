export function union(parents, a, b) {
  a = find(parents, a);
  b = find(parents, b);
  if (a < b) {
    parents[b] = a;
  } else {
    parents[a] = b;
  }
  console.log(`${a}와 ${b}를 합치자!`);
}

export function find(parents, x) {
  if (parents[x] === x) {
    return x;
  }

  return (parents[x] = find(parents, parents[x]));
}

// example
const parents = [0, 1, 2, 3];
console.log(parents);

union(parents, 1, 2);
console.log();

console.log(parents);

union(parents, 1, 3);
console.log();

console.log(parents);
