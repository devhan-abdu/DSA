class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new BSTNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  levelOrder() {
    if (!this.root) {
      return;
    }
    let queue = [this.root];
    while (queue.length > 0) {
      const poppedNode = queue.shift();
      console.log(poppedNode.value);
      if (poppedNode.right !== null) queue.push(poppedNode.right);
      if (poppedNode.left !== null) queue.push(poppedNode.left);
    }
  }

  preOrder(root = this.root) {
    if (!root) return;
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  inOrder(root = this.root) {
    if (!root) return;
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }
  postOrder(root = this.root) {
    if (!root) return;
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }

  search(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  minValue(currentNode) {

    while (currentNode.left !== null) {
        currentNode = currentNode.left
    }
      return currentNode
  }

    deleteNode(currentNode, value) {
        if (value < currentNode.value) {
            currentNode.left = this.deleteNode(currentNode.left, value)
            return currentNode
        } else if (value > currentNode.value) {
            currentNode.right = this.deleteNode(currentNode.right, value)
            return currentNode
        } else {
            if (currentNode.left === null) {
                return currentNode.right
            } else if(currentNode.right ===null) {
                  return currentNode.left
            }
            const minValue = this.minValue(currentNode.right)
            currentNode.value = minValue.value
            currentNode.right = this.deleteNode(currentNode.right , currentNode.value)
        }

        return currentNode
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
}