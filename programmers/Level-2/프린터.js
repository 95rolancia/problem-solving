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
    return this.#head;
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

  let answer = 1;
  priorities.sort((a, b) => a - b);

  while (q.size > 0) {
    const [v, i] = q.dequeue();
    if (priorities[0] === v) {
      q.dequeue();
      answer++;

      if (i === location) {
        return answer;
      }
      return;
    } else {
      q.enqueue(q.dequeue());
      answer++;
    }
  }
  return answer;
}

solution([2, 1, 3, 2], 2);
