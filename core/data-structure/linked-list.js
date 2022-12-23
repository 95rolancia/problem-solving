class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  findPrev(value) {
    let curNode = this.head;
    while (curNode.next !== null && curNode.next.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // 삽입 전 마지막 노드의 next를 새로운 노드로 설정
      this.tail = newNode; // 마지막 노드를 새로운 노드로 설정
    }
  }

  insert(node, value) {
    const newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    const prevNode = this.findPrev(value);
    prevNode.next = prevNode.next.next;
    // Garbage Collector에 의해 Node 자동 삭제
  }

  display() {
    let curNode = this.head;
    let result = "[";
    while (curNode !== null) {
      result += curNode.value + ", ";
      curNode = curNode.next;
    }
    result = result.slice(0, result.length - 2) + "]";
    console.log(result);
  }
}

const arr = new SinglyLinkedList();
arr.append(1);
arr.append(3);
arr.append(5);
arr.append(1);
// arr.display();

// arr.remove(1);
arr.display();

console.log(arr.findPrev(5));

arr.remove(1);
arr.display();
