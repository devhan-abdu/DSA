class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(childNode) {
       this.children.push(childNode)
    }

    removeChild(childNode) {
        const index = this.children.findIndex(child => child === childNode) // o(n)
        
        if (index !== -1) {
            this.children.splice(index , 1)  // o(n)
        }
    }
}

class Tree {
    constructor() {
        this.root = null
    }


}