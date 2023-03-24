/**
 * 난이도: Level 2
 * 키워드 : bfs, dp
 */

function solution1(x, y, n) {
  const q = new Queue(); // 시작 숫자와 연산 횟수를 큐에 넣습니다.
  q.enqueue([x, 0]);
  const visited = new Set(); // 이미 방문한 숫자를 체크하기 위한 Set입니다.

  while (q.size > 0) {
    const [num, count] = q.dequeue(); // 큐에서 숫자와 연산 횟수를 꺼냅니다.

    if (num === y) {
      // y로 만들 수 있다면, 연산 횟수를 반환합니다.
      return count;
    }

    // 다음 연산 결과를 큐에 넣습니다.
    const add = num + n;
    const double = num * 2;
    const triple = num * 3;

    if (add <= y && !visited.has(add)) {
      // y보다 작고, 이미 방문한 숫자가 아니라면
      q.enqueue([add, count + 1]); // 큐에 넣습니다.
      visited.add(add); // 방문 체크를 합니다.
    }
    if (double <= y && !visited.has(double)) {
      // y보다 작고, 이미 방문한 숫자가 아니라면
      q.enqueue([double, count + 1]); // 큐에 넣습니다.
      visited.add(double); // 방문 체크를 합니다.
    }
    if (triple <= y && !visited.has(triple)) {
      // y보다 작고, 이미 방문한 숫자가 아니라면
      q.enqueue([triple, count + 1]); // 큐에 넣습니다.
      visited.add(triple); // 방문 체크를 합니다.
    }
  }

  return -1; // y로 만들 수 없다면 -1을 반환합니다.
}

function solution2(x, y, n) {
  const d = new Array(y + 1).fill(Infinity); // d 배열 초기화
  d[x] = 0; // 시작점 초기화

  for (let i = x; i < y; i++) {
    // 가능한 연산 결과값에 대해 d 갱신
    if (i + n <= y) {
      d[i + n] = Math.min(d[i + n], d[i] + 1);
    }
    if (i * 2 <= y) {
      d[i * 2] = Math.min(d[i * 2], d[i] + 1);
    }
    if (i * 3 <= y) {
      d[i * 3] = Math.min(d[i * 3], d[i] + 1);
    }
  }

  return d[y] === Infinity ? -1 : d[y]; // y에 대한 최소 연산 횟수 반환
}

class Node {
  #value;
  #next;
  constructor(value) {
    this.#value = value;
    this.#next = null;
  }

  get value() {
    return this.#value;
  }

  set value(v) {
    this.#value = v;
  }

  get next() {
    return this.#next;
  }

  set next(value) {
    this.#next = value;
  }
}

class Queue {
  #head;
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.#head == null) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }

    this.#size++;
  }

  dequeue() {
    if (this.#head == null) {
      throw new Error("q is empty");
      return;
    }
    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#size--;
    return value;
  }

  peek() {
    if (this.#head === null) {
      throw new Error("q is empty");
    }
    return this.#head.value;
  }

  print() {
    let result = "";
    let cur = this.#head;
    while (cur != null) {
      result += `${cur.value}, `;
      cur = cur.next;
    }
    console.log(result);
  }
}
