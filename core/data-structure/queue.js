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

function solution(priorities, location) {
  const q = new Queue();
  priorities.forEach((priority, idx) => {
    q.enqueue([priority, idx]);
  });

  let answer = 0;
  priorities.sort((a, b) => b - a);

  while (true) {
    const [v, i] = q.front();
    if (priorities[answer] === v) {
      q.dequeue();
      answer++;
      if (i === location) {
        return answer;
      }
    } else {
      q.enqueue(q.dequeue());
    }
  }
}
