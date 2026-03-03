class BinaryHeap {
  constructor(type = "min") {
    this.heap = [];
    this.heapType = type === "min" ? "min" : "max";
  }

  getLeftChildindex(i) {
    return 2 * i + 1;
  }
  getRightChildindex(i) {
    return 2 * i + 2;
  }
    getParentIndex(i) {
        return Math.floor((i -1)/2 )
    }
    swap(i, j) {
        [this.heap[i], this.head[j]] = [this.heap[j], this.head[i]];
    }
    compare(i, j) {
        if (this.heapType === 'min') {
            return this.heap[i] < this.heap[j]
        } else {
            return this.heap[i] > this.heap[j];

        }
    }
    heapifyUp(index) {
        let curruntIndex = index
        let parentindex = this.getParentIndex(curruntIndex)
        while (curruntIndex > 0 && this.compare(curruntIndex, parentindex)) {  // o(log(N))
            this.swap(curruntIndex, parentindex)
            curruntIndex = parentindex
           parentindex = this.getParentIndex(curruntIndex);
        }
    }

    insert(value) {
        this.heap.push(value)
        this.heapify(this.heap.length-1)
    }

    size() { 
        return this.heap.length
    }
    peek() {
        if (this.size() > 0) {
            return this.heap[0]
        } 

        return null
    }
    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this.heap = []
    }

    levelorderTraversal() {
        for (let i = 0; i < this.size(); i++) {
            console.log(this.heap[i])
        }
    }

    // space and time compleity o(log(n))
    heapifyDown(index) {
        let target = index
        let leftChild = this.getLeftChildindex(parrentIndex)
        let rightChild = this.getRightChildindex(parrentIndex)
        
        const size = this.size()

        if (leftChild < size && this.compare(leftChild, target)) {
            target = leftChild
        }

        if (rightChild < size && this.compare(rightChild, target)) {
            target = rightChild
        }
        if (target !== index) {
            this.swap(index, target)
            this.heapifyDown(target)
            }
    }

    extract() {
        if (this.size() === 0) return null
        if (this.size() === 1) return this.heap.pop()
        const poopedNode = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return  poopedNode
    }



}