class AvlNode {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
      this.height = 1
  } 
}


class AVLTree{
  constructor() {
     this.root = null
  }

  getHeight(node) {
    if (!node) return 0
    return node.height
  }

  rightRotate(disbalanceNode) {
    let newRoot = disbalanceNode.left
    disbalanceNode.left = disbalanceNode.left.right
    newRoot.right = disbalanceNode
    disbalanceNode.height = 1 + Math.max(this.getHeight(disbalanceNode.left), this.getHeight(disbalanceNode.right))
    newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right))

    return newRoot
  }

  leftRotation(disbalanceNode) {
    let newRoot = disbalanceNode.right
    disbalanceNode.right = disbalanceNode.right.left
    newRoot.left = disbalanceNode
    disbalanceNode.height =
      1 +
      Math.max(
        this.getHeight(disbalanceNode.left),
        this.getHeight(disbalanceNode.right),
      );
    newRoot.height =
      1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

    return newRoot
  }
   
  getBalance(node) {
    if (!node) {
      0
    }
     return this.getHeight(node.left) - this.getHeight(node.right)
  }

  insertNode(node, data) {
    if (!node) return new AvlNode(data)
    if (data < node.value) {
      node.left = this.insertNode(node.left , data)
    } else if (data > node.value) {
       node.right = this.insertNode(node.right, data)
    } else {
      return node
    }

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    let balance = this.getBalance(node)

    if (balance > 1 && data < node.left.value) {
        return this.rightRotate(node)
    }

    if (balance < -1 && data > node.right.value) {
       return this.leftRotation(node)
    }
      if (balance > 1 && data > node.left.value) {
        node.left = this.leftRotation(node.left);
        return this.rightRotate(node)
      }
    
    if (balance < -1 && data < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotation(node)
    }

    return node
  }

}