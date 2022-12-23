// with singly linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    const node = this.top;
    this.top = this.top.next;
    this.size--;
    return node.value;
  }

  print() {
    let curNode = this.top;
    let result = "";
    while (curNode !== null) {
      result += `${curNode.value}, `;
      curNode = curNode.next;
    }
    console.log(result);
  }
}

const stk = new Stack();
stk.print();

stk.push(1);
stk.print();

stk.push(3);
stk.print();

stk.push(-1);
stk.print();

stk.pop();
stk.print();

stk.pop();
stk.print();
