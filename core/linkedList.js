class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 양방향 연결 리스트에 새로운 노드를 추가하는 메서드
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // 리스트가 비어있으면 새로운 노드를 헤드와 테일로 지정
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 리스트가 비어있지 않으면 테일에 새로운 노드를 연결하고 테일을 갱신
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 양방향 연결 리스트의 노드들을 출력하는 메서드 (앞에서부터)
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `-> ${current.data}`;
      current = current.next;
    }
    console.log(result);
  }

  // 양방향 연결 리스트에서 특정 노드를 삭제하는 메서드
  remove(node) {
    if (!node) {
      console.error("유효한 노드를 입력하세요.");
      return;
    }

    if (node.prev) {
      // 이전 노드의 next를 삭제 노드의 next로 설정
      node.prev.next = node.next;
    } else {
      // 삭제 노드가 헤드인 경우 헤드를 다음 노드로 갱신
      this.head = node.next;
    }

    if (node.next) {
      // 다음 노드의 prev를 삭제 노드의 prev로 설정
      node.next.prev = node.prev;
    } else {
      // 삭제 노드가 테일인 경우 테일을 이전 노드로 갱신
      this.tail = node.prev;
    }
  }

  insertAfter(existingNode, data) {
    this._insertNode(existingNode, data, "next");
  }

  insertBefore(existingNode, data) {
    this._insertNode(existingNode, data, "prev");
  }

  _insertNode(existingNode, data, direction) {
    if (!existingNode) {
      throw new Error("Invalid node input.");
    }

    const newNode = new Node(data);

    newNode[direction] = existingNode[direction];
    newNode[direction === "next" ? "prev" : "next"] = existingNode;

    if (existingNode[direction]) {
      existingNode[direction][direction === "next" ? "prev" : "next"] = newNode;
    } else {
      this[direction === "next" ? "tail" : "head"] = newNode;
    }

    existingNode[direction] = newNode;
  }
}
