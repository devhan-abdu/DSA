class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLinkedList {
    // constructor(value) {
    //     const newNode = new Node(value)
    //     this.head = newNode
    //     this.tail = newNode
    //     this.length = 0
    // }

    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    toString() {
        let curruntNode = this.head
        let result = " "
         
        while (curruntNode) {
            result += curruntNode.value
            if (curruntNode.next) result += ' <--> '
            curruntNode = curruntNode.next
        }

        return  result
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
            newNode.prev = null
        }

        this.length++;

    }

    traverse() {
        let curruntNode = this.head
        while (curruntNode) {
            console.log(curruntNode.value)
            curruntNode = curruntNode.next
        }
    }
    reverseTransverse() {
        let curruntNode = this.tail
        while (curruntNode) {
            console.log(curruntNode.value)
            curruntNode = curruntNode.prev
        }
    }
    search(target) {
        let curruntNode = this.head
        while (curruntNode) {
            if (curruntNode.value === target) {
                return true
            }
            curruntNode = curruntNode.next
        }
        return false
            
    }

    get(index) {
        
        if (index < 0 || index >= this.length) {
            return null
        }
        let curruntNode;

        if (index < Math.floor(this.length / 2)) {
            curruntNode = this.head
            for (i = 0; i < index; i++) {
                curruntNode = curruntNode.next
            }
        } else {
            curruntNode = this.tail
            for (i = this.length - 1; i > index; i--) {
                curruntNode = curruntNode.prev 
            }

        }

        return curruntNode
    }
    set(index, value) {
       
        const curruntNode = this.get(index)
        if (curruntNode) {
            curruntNode.value = value
            return true
        }
        return false
        
    }

    insert(index, value) {
      const newNode = new Node(value)
      if (index < 0 || index >= this.length) {
          return null
      }
      else if (index === 0) {
          return this.prepend(value)
      } else if (index === this.length ) {
          return this.append(value)
      } else {
        //   const prevNode = this.get(index)
        //   newNode.next = prevNode
        //   newNode.prev = prevNode.prev
        //   prevNode.prev.next = newNode
          //   prevNode.prev = newNode
          const tempNode = this.get(index)
          newNode.next = tempNode.next
          newNode.prev = tempNode
          tempNode.next = newNode
          tempNode.next.prev = newNode
          this.length++;
          return newNode
      }
    }

    popFirst() {
        if (this.length === 0) {
            return null
        }
        const poppedNode = this.head;

        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
            return poppedNode
        } else {
            this.head = this.head.next 
            this.head.prev = null
            poppedNode.next = null
            this.length--
            return poppedNode

        }
    }

    pop() {
        if (this.length === 0) {
            return null
        }
        const poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
          
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            poppedNode.prev = null
        }
          this.length--;
          return poppedNode;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        if (index === 1 ) {
            return this.popFirst()
        } else if (index === this.length - 1) {
            return this.pop()
        } else {
            const removeNode = this.get(index);
            removeNode.prev.next = removeNode.next;
            removeNode.next.prev = removeNode.prev;
            removeNode.next = null;
            removeNode.prev = null;
            this.length--;
            return removeNode;
        }
      
    }

    deleteAll() {
        this.head = null
        this.tail = null
        this.length = 0
    }
}