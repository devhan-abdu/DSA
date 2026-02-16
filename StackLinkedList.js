class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

//    constructor(value) {
//         const newNode = new Node(value)
//         this.top = newNode
//         this.length = 1
//     }
class Stack {
    constructor() {
        this.top = null
        this.length = 0
    }
    push(value) {
        const newNode = new Node(value);

        if (!this.top) {
            this.top = newNode
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++
        return newNode
         
    }
    pop() {
        if (this.length === 0) {
            return null
        } 

        let poppedNode = this.top
     
            this.top = this.top.next
            poppedNode.next = null
    

        this.length--
        return poppedNode
    }

    peak() {
        return this.top.value
    }

    isEmpty() {
        // return this.top === null
        return this.length === 0
    }

    clear() {
        this.top = null
        this.length = 0
    }



 
}