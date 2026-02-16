class Node  {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.end = null
        this.length = 0
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.front = newNode
            this.end = newNode
        }
        else {
            this.end.next = newNode
            this.end = newNode
        }
        this.length++;
        return newNode

    }

    dequeue() {
        if (this.isEmpty()) return null
        const dequeuedNode = this.front;

          if (this.isEmpty()) {
            this.front = null;
            this.end = null;
          } else {
              this.front = this.front.next;
              dequeuedNode.next = null;
          }

        this.length--
        return dequeuedNode
    }

    get_front() {
        if (this.isEmpty()) throw new Error("The queue  is empty");
        return this.front
 
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }

    clear() {
        this.front = null
        this.end = null
        this.length = 0
    }
}