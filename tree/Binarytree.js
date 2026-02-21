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
        if (!this.root) return
        
        let stack = [this.root]
   // time and space complexity o(n)
        while (stack.length > 0) {
            let node = stack.pop()  // o(1)
            console.log(node.value)

            if (node.right !== null) stack.push(node.right) // o(1)
            if(node.left !== null) stack.push(node.left)
        }
    }
// space and time complexity o(n)
    preOrderRec(node = this.root) {
        if (node !== null) {
            console.log(node.value)
            this.preOrderRec(node.left)
            this.preOrderRec(node.right)
        } 
    }

    inOrder() {
        if (!this.root) return 
        
        let stack = []
        let cuurrent = this.root
        
        while (cuurrent !== null || stack.length > 0) {
         while(cuurrent !== null) {
             stack.push(cuurrent)
            cuurrent  = cuurrent.left
         }
            cuurrent = stack.pop()
            console.log(cuurrent.value)
            cuurrent = cuurrent.right

        }
    }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];

    while (queue.length >0) {
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
}