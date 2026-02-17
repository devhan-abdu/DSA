class Queue {
    constructor() {
        this.items = []
    }

    enqueue(val) {
        // o(1) but o(n) if we need resizing
        this.items.push(val)
    }

    dequeue() {
        if(this.isEmpty()) throw new Error("Dequeue from empty queue");
        this.items.shift()
    }
    front() {
        if (this.isEmpty()) throw new Error("Front from empty queue");

        return this.items[0]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    clear() {
        this.items = []
    }

}


function reverseQueue(queue) {
   let stack = []
   
   while(!queue.isEmpty()) {
       stack.push(queue.dequeue())
   }
 
   while(stack.length > 0) {
      queue.enqueue(stack.pop())
    
   }
  
   return queue
   
}