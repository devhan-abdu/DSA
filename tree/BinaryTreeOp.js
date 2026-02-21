class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.end = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.front = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.length++;
    return newNode;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const dequeuedNode = this.front;

    if (this.isEmpty()) {
      this.front = null;
      this.end = null;
    } else {
      this.front = this.front.next;
      dequeuedNode.next = null;
    }

    this.length--;
    return dequeuedNode.value;
  }

  get_front() {
    if (this.isEmpty()) throw new Error("The queue  is empty");
    return this.front;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  clear() {
    this.front = null;
    this.end = null;
    this.length = 0;
  }
}


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
 
    // space and time complexity o (n)
  levelOrder() {
      if (!this.root) return;
      const queue = new Queue();
      queue.enqueue(this.root);
    while (!queue.isEmpty()) { // o(n)
      let node = queue.dequeue();   // o(1)
      console.log(node.value);
      if (node.left !== null) queue.enqueue(node.left);
      if (node.right !== null) queue.enqueue(node.right);
    }
  }
    
    insert(value) {
        const newNode = new TreeNode(value)
        if (!this.root) {
            this.root = newNode
            return
        }

        const queue = new Queue()
        queue.enqueue(this.root)

        while (!queue.isEmpty()) {
            let node = queue.dequeue()
            if (node.left === null) {
                node.left = newNode
                return
            } else {
                queue.enqueue(node.left)
            }

            if(node.right === null) {
                node.right = newNode
                return
            } else {
                queue.enqueue(node.right)
            }
        } 
    }
}
