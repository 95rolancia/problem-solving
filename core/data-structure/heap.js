class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor(curIdx / 2);

    while (parentIdx !== 0 && this.heap[parentIdx] < value) {
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = value;
      this.heap[curIdx] = temp;

      curIdx = parentIdx;
      parentIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;
    while (
      this.heap[curIdx] < this.heap[leftIdx] ||
      this.heap[curIdx] < this.heap[rightIdx]
    ) {
      if (!this.heap[rightIdx] || this.heap[leftIdx] < this.heap[rightIdx]) {
        const temp = this.heap[curIdx];
        this.heap[curIdx] = this.heap[rightIdx];
        this.heap[rightIdx] = temp;
        curIdx = rightIdx;
      } else {
        const temp = this.heap[curIdx];
        this.heap[curIdx] = this.heap[leftIdx];
        this.heap[leftIdx] = temp;
        curIdx = leftIdx;
      }

      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
console.log(heap.heap);
heap.push(36);
console.log(heap.heap);
heap.push(54);
console.log(heap.heap);
heap.push(27);
console.log(heap.heap);
heap.push(63);
console.log(heap.heap);

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
