class CircularQueue {
    constructor(size) {
        this.size = size
        this.queue = new Array(size)
        this.front = 0
        this.rear = 0
        this.length = 0
    }

    enqueue(value) {
        if (this.isFull()) {
            this.front = (this.front + 1) % this.size
            this.length--
        }
        this.queue[this.rear] = value
        this.rear = (this.rear + 1) % this.size
        this.length++
    }

    dequeue() {
        if (this.isEmpty()) return null
        const value = this.queue[this.rear]
        this.rear = (this.rear + 1) % this.size
        this.length--
        return value
    }

    isEmpty() {
        return this.length === 0
    }

    isFull() {
        return this.length === this.size
    }
}


class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(element) {
    this.queue1.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow: no elements to pop");
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const topElement = this.queue1.shift();
    this.queue1 = this.queue2;
    this.queue2 = [];
    return topElement;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const topElement = this.queue1.shift();
    this.queue1.push(topElement);

    this.queue1 = this.queue2;
    this.queue2 = [];
    return topElement;
  }

  isEmpty() {
    return this.queue1.length === 0;
  }
}
