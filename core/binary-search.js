const arr = [1, 2, 3, 4, 5, 6];
const answer = binarySearch(arr, 3);
console.log(answer);

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }
  return -1;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let curNode = this.root;
    while (curNode !== null) {
      if (curNode.value < value) {
        if (curNode.right === null) {
          curNode.right = newNode;
          break;
        }
        curNode = curNode.right;
      } else {
        if (curNode.left === null) {
          curNode.left = newNode;
          break;
        }
        curNode = curNode.left;
      }
    }
  }

  has(value) {
    let curNode = this.root;
    while (curNode !== null) {
      if (curNode.value === value) {
        return true;
      }

      if (curNode.value < value) {
        curNode = curNode.right;
      } else {
        curNode = curNode.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);

console.log(tree.has(8));
