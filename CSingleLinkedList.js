// prepend  next of curunt

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class CSLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      newNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = newNode;
    }

    this.length++;
  }
  // stope after we print last node
  // problem is infinite loop
  transverse() {
    const currunt = this.head;
    while (currunt) {
      console.log(currunt);
      currunt = currunt.next;
      if (currunt === this.head) {
        break;
      }
    }
  }
  search(target) {
    const currunt = this.head;
    const index = 0;
    while (currunt) {
      if (currunt === target) {
        return index;
      }
      currunt = currunt.next;
      index++;
      if (currunt === this.head) {
        break;
      }
    }
    return -1;
  }

  // get(index) {
  //     const currunt = this.head
  //     const index = 0

  //     while (currunt) {
  //         if (index === currunt) {
  //             return currunt
  //         }
  //         currunt = currunt.next
  //         index++
  //         if (currunt === this.head) {
  //             break
  //         }
  //     }

  //     return null
  // }

  getValue(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let currunt = this.head;
    for (let i = 0; i < index; i++) {
      currunt = currunt.next;
    }

    return currunt;
  }

  setValue(index , value) {
      const temp = this.getValue(index)
      if (temp) {
          temp.value = value
          return true
      }
      return false
  }
    
    popFirst() {
        if (this.length === 0) {
            return null
        }
        const poppedNode = this.head;

        if (this.length === 1) {
            this.head = null
            this.tail = null

        } else {
           this.head = this.head.next;
           this.tail.next = this.head;
           poppedNode.next = null;
        }
      
        this.length--
        return poppedNode;
    }

    pop() {
        if (this.length === 0) {
            return null
        }
        let poppedNode = this.tail
        if ( this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let currunt = this.head;
              while (currunt.next !== this.tail) {
                currunt = currunt.next;
              }
            this.tail = currunt;
            currunt.next = this.head;
            poppedNode.next = null;
            this.length--;
        }
      
       
        return poppedNode
    }

    remove(index) {
        if(index < 0 || index >= this.length)
        if (index === 0) {
           return this.popFirst() 
        } else if(index === this.length -1) {
            return this.pop()
        }

        let prevNode = this.getValue(index - 1)
        let poppedNode = prevNode.next
        left.next = poppedNode.next
        poppedNode.next = null
        this.length--
        return poppedNode

        // for middle
    }

    deleteAll() {
        this.tail.next = null
        this.head = null
        this.tail = null
        this.length--
    }
}