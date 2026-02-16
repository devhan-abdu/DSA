class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class CDLinkedList {
    constructor(value) {
            const newNode = new Node(value)
            this.head = newNode
            this.tail = newNode
            newNode.next = newNode
            newNode.prev = newNode
            this.length = 1
    }
    
    append(value) {
        const newNode = new Node(value)

        if (!this.head) {
            newNode.next = newNode
            newNode.prev = newNode
            this.head = newNode
            this.tail = newNode
            
        } else {
            this.tail.next = newNode;
            this.head.prev = newNode
         newNode.prev = this.tail;
         newNode.next = this.head;
         this.tail = newNode;
        }
        
        this.length++
        return newNode
    }

    prepend(value) {
        const newNode = new Node(value)

        if (!this.head) {
            newNode.next = newNode
            newNode.prev = newNode
            this.head = newNode
            this.tail = newNode
            
        } else {
            newNode.prev = this.tail
            newNode.next = this.head
            this.tail.next = newNode
            this.head.prev = newNode
            this.head = newNode

        }
        this.length++
        return newNode
    }

    toString() {
        const curruntNode = this.head
        let results = " "
        while(curruntNode) {
            results += curruntNode.value
            curruntNode = curruntNode.next;
            if (curruntNode === this.head) break
            
                results += "<->"
        }

        return results
    }
    traverse() {
        let curruntNode = this.head
        while (curruntNode) {
            console.log(curruntNode.value)
            if (curruntNode.next === this.head) {
                break
            }
            curruntNode = curruntNode.next
        }
    }
    
    reverseTraverse() {
        let curruntNode = this.tail
        while (curruntNode) {
            console.log(curruntNode)
              curruntNode = curruntNode.prev;
            if (curruntNode === this.tail) break
           
        }
    }

    search(target) {
        let curruntNode = this.head
        let index =0
        while (curruntNode) {
            if (curruntNode.value === target) {
                return index
            }
            curruntNode = curruntNode.next;
            index++
            if (curruntNode === this.head)
            {
                break
            }
           
        }

        return -1
    }

    get(index) {
        if (index < 0 || index >= this.length) {
             return null
         }
        let temp;
        if (index < Math.floor(this.length / 2)) {
            temp = this.head
            for (i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }

        return temp
    }

    set(index, value) {
     
        const setNode = this.get(index)
        if (setNode) {
             setNode.value = value;
             return true;
        }
        return false
           
     
    }

    insert(index, value) {
          if (index < 0 || index > this.length) {
            return null;
          }
        const newNode = new Node(value)
        if (index === 0) {
            return this.prepend(value)
        } else if (inde === this.length) {
            return this.append(value)
        }
        const getNode = this.get(index)
        newNode.prev = getNode.prev
        newNode.next = getNode
        getNode.prev.next = newNode
        getNode.prev = newNode
        this.length++
        return newNode
    }

    popFirst() {
        if (!this.head) {
            return false
        }
        const popedNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = this.tail
            this.tail.next = this.head
            popedNode.prev = null
            popedNode.next = null
           
        }
        this.length--
        return popedNode
    }
    pop() {
        if (!this.head) {
            return null
        }
        const popedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = this.head
            this.head.prev = this.tail
            popedNode.next = null
            popedNode.prev = null
        }
        this.length--
        return popedNode
    }

    remove(index) {
           if (index < 0 || index >= this.length) {
             return null;
           }
        if (index === 0) {
            return this.popFirst()

        } else if (index === this.length - 1) {
            return this.pop()
        } else {
            const popedNode = this.get(index)
            popedNode.prev.next = popedNode.next
            popedNode.next.prev = popedNode.prev
            popedNode.next = null
            popedNode.prev = null
        }

        this.length--
        return popedNode

    }

    deleteAll() {
        this.head = null
        this.tail = null
        this.length =0
    }
}


