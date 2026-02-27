class BinaryTree {
  constructor() {
    this.arr = [];
    this.lastUsedindex = 0;
  }

  insert(value) {
    this.arr[this.lastUsedindex + 1] = value;
    this.lastUsedindex++;
  }

  levelOrder() {
    for (let i = 1; i <= this.lastUsedindex; i++) {
      if (this.arr[i] !== undefined) console.log(this.arr[i]);
    }
  }

  // space and time complexity o(n)
  preOrder(index = 1) {
    if (index > this.lastUsedindex || !this.arr[index]) return;
    console.log(this.arr[index]);
    this.preOrder(index * 2);
    this.preOrder(index * 2 + 1);
  }

  //time and space complexity o(n)
  inOrder(index = 1) {
    if (index > this.lastUsedindex || !this.arr[index]) return;
    this.inOrder(index * 2);
    console.log(this.arr[index] + " ");
    this.inOrder(index * 2 + 1);
  }

  preOrderIterative() {
    let stack = [];
    stack.push(1);

    while (stack.length > 0) {
      const currentIndex = stack.pop();
      if (
        currentIndex <= this.lastUsedIndex &&
        this.arr[currentIndex] !== undefined
      ) {
        console.log(this.arr[currentIndex] + " ");

        // we need to get the left first
        stack.push(currentIndex * 2 + 1);
        stack.push(currentIndex * 2);
      }
    }
  }

  postOrderiterative() {
    let stack = [];
    let current = 1;
    let lastVisted = 0;

    while (this.arr[current] !== null || stack.length > 0) {
      if (this.arr[current] !== null) {
        stack.push(current);
        current = current * 2;
      } else {
        let peekNode = stack[current * 2 + 1];
        if (stack[current * 2 + 1] !== null && lastVisted !== current * 2 + 1) {
          current = current * 2 + 1;
        } else {
          console.log(this.arr[current * 2 + 1]);
          lastVisted = stack.pop();
        }
      }
    }
  }

  postOrder(index = 1) {
    while (index <= this.lastUsedindex || !this.arr[index]) {
      this.postOrder(index * 2);
      this.postOrder(index * 2 + 1);
      console.log(this.arr[index]);
    }
  }

  search(value) {
    for (let i = 1; i <= this.lastUsedindex; i++) {
      if (this.arr[i] === value) return i;
    }
    return -1;
  }
    delete(value) {
        let location = this.search(value)
        if (location === -1) {
            return false
        }
 
        this.arr[location] = this.arr[this.lastUsedindex]
        this.arr.pop()
        this.lastUsedindex--
        return true
  }
} 
