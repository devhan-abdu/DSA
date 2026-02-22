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
  // o(n^2) .... time
  // o(n) .... space
  levelOrder() {
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length > 0) {
      // (o(n))
      let node = queue.shift(); // o(n)
      console.log(node.value);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  preOrder() {
    if (!this.root) return;

    let stack = [this.root];
    // time and space complexity o(n)
    while (stack.length > 0) {
      let node = stack.pop(); // o(1)
      console.log(node.value);

      if (node.right !== null) stack.push(node.right); // o(1)
      if (node.left !== null) stack.push(node.left);
    }
  }
  // space and time complexity o(n)
  preOrderRec(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderRec(node.left);
      this.preOrderRec(node.right);
    }
  }

  inOrder() {
    if (!this.root) return;

    let stack = [];
    let cuurrent = this.root;

    while (cuurrent !== null || stack.length > 0) {
      while (cuurrent !== null) {
        stack.push(cuurrent);
        cuurrent = cuurrent.left;
      }
      cuurrent = stack.pop();
      console.log(cuurrent.value);
      cuurrent = cuurrent.right;
    }
  }

  // time and space complexity o(n)
  inOrderRec(node = this.root) {
    if (node !== null) {
      this.inOrderRec(node.left); // left subtree
      console.log(node.value); // root node
      this.inOrderRec(node.right); // right subtree
    }
  }

  postOrder() {
    let stack = [];
    let current = this.root;
    let lastVisted = null;

    while (current !== null || stack.length > 0) {
      if (current !== null) {
        stack.push(current);
        current = current.left;
      } else {
        let peekNode = stack[stack.length - 1];
        if (peekNode.right !== null && lastVisted !== peekNode.right) {
          current = peekNode.right;
        } else {
          console.log(peekNode.value);
          lastVisted = stack.pop();
        }
      }
    }
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();
      if (node.left === null) {
        node.left = newNode;
        return;
      } else {
        queue.push(node.left);
      }

      if (node.right === null) {
        node.right = newNode;
        return;
      } else {
        queue.push(node.right);
      }
    }
  }

  search(value) {
    if (!this.root) return false;
    const queue = [this.root];
    while (queue.length > 0) {
      // (o(n))
      let node = queue.shift(); // o(n)
      if(node.value === value) return true
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    return false;
  }

  deleteDeepestNode() {
    if (!this.root) return
    const queue = [this.root]
    let previousNode, presentNode = null;

    while (queue.length > 0) {
      previousNode = presentNode
      presentNode = queue.shift()

      if (presentNode.left === null) {
        previousNode.right = null
        return
      } else if (presentNode.right === null) {
        presentNode.left = null
        return
      }
       if (presentNode.left !== null) {
         queue.push(presentNode.left);
       }

       if (presentNode.right !== null) {
         queue.push(presentNode.right);
       }
    }
  } 

  deleteNode(value) {
    if (!this.root) return
    
    let queue = [this.root]
    let nodeToDelete = null
    let lastNode = null
    while (queue.length > 0) {
      lastNode = queue.shift()
      if (lastNode.value === value) {
        nodeToDelete = lastNode
      }

      if(lastNode.left !== null) {
        queue.push(lastNode.left)
      }

      if(lastNode.right !== null) {
        queue.push(lastNode.right)
      }
    }

    if (nodeToDelete !== null) {
      nodeToDelete.value = lastNode.value
      this.deleteDeepestNode()
      return true
    }
    return false
  }
}