/*
    문제 : 숨바꼭질 (https://www.acmicpc.net/problem/1697)
    난이도 : 실버 1
*/

const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5 17`).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

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
    }
    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#size--;
    return value;
  }

  front() {
    if (this.#head === null) {
      throw new Error("q is empty");
    }
    return this.#head.value;
  }

  back() {
    if (this.#tail === null) {
      throw new Error("q is empty");
    }
    return this.#tail.value;
  }
}

const [n, k] = input().split(" ").map(Number);

const dis = Array(100001).fill(-1);

const q = new Queue();
q.enqueue(n);
dis[n] = 0;

while (dis[k] === -1) {
  const cur = q.dequeue();

  for (const next of [cur - 1, cur + 1, cur * 2]) {
    if (next < 0 || next > 100000) continue;
    if (dis[next] !== -1) continue;

    q.enqueue(next);
    dis[next] = dis[cur] + 1;
  }
}

console.log(dis[k]);
