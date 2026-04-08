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
    return Math.floor((i - 1) / 2);
  }
  swap(i, j) {
    [this.heap[i], this.head[j]] = [this.heap[j], this.head[i]];
  }
  compare(i, j) {
    if (this.heapType === "min") {
      return this.heap[i] < this.heap[j];
    } else {
      return this.heap[i] > this.heap[j];
    }
  }
  heapifyUp(index) {
    let curruntIndex = index;
    let parentindex = this.getParentIndex(curruntIndex);
    while (curruntIndex > 0 && this.compare(curruntIndex, parentindex)) {
      // o(log(N))
      this.swap(curruntIndex, parentindex);
      curruntIndex = parentindex;
      parentindex = this.getParentIndex(curruntIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapify(this.heap.length - 1);
  }

  size() {
    return this.heap.length;
  }
  peek() {
    if (this.size() > 0) {
      return this.heap[0];
    }

    return null;
  }
  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.heap = [];
  }

  levelorderTraversal() {
    for (let i = 0; i < this.size(); i++) {
      console.log(this.heap[i]);
    }
  }

  // space and time compleity o(log(n))
  heapifyDown(index) {
    let target = index;
    let leftChild = this.getLeftChildindex(parrentIndex);
    let rightChild = this.getRightChildindex(parrentIndex);

    const size = this.size();

    if (leftChild < size && this.compare(leftChild, target)) {
      target = leftChild;
    }

    if (rightChild < size && this.compare(rightChild, target)) {
      target = rightChild;
    }
    if (target !== index) {
      this.swap(index, target);
      this.heapifyDown(target);
    }
  }

  extract() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    const poopedNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return poopedNode;
  }
    
    
    
}


class Graph {
  constructor(isDirected = false) {
    this.numVertices = numVertices;
    this.isDirected = isDirected;
    this.adjacencyList = {};
  }

  addVertex(v1) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }

    return false;
  }

  addEdge(v1, v2, weight = 1) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v1);
      if (!this.isDirected) {
        this.adjacencyList[v2].push(v2);
      }

      return true;
    }

    return false;
  }

  addEdgeWeight(v1, v2, weight = 1) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ node: v1, weight: weight });
      if (!this.isDirected) {
        this.adjacencyList[v2].push({ node: v2, weight: weight });
      }

      return true;
    }

    return false;
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      const index1 = this.adjacencyList[v1].indexOf(v2);
      if (index1 !== 1) {
        this.adjacencyList[v1].splice(index1, 1);
      }
      if (!this.isDirected) {
        const index2 = this.adjacencyList[v2].indexOf(v1);
        if (index2 !== 1) {
          this.adjacencyList[v2].splice(index2, 1);
        }
      }

      return true;
    }

    return false;
  }

  removeEdgeWeigh(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        (edge) => edge.node !== v2,
      );

      if (!this.isDirected) {
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
          (edge) => edge.node !== v1,
        );
      }

      return true;
    }

    return false;
  }

  //space o(V) , and time complexity o(v^2 + e) ....
  bfs(startVertext) {
    const visited = new Set();
    const queue = [startVertext];

    visited.add(startVertext);
    while (queue.length > 0) {
      const currentVertext = queue.shift();
      console.log(currentVertext);
      for (const neighbor of this.adjacencyList[currentVertext]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  // o(v) --space ,  o(v + E) time complexity
  dfs(startVertext) {
    const visited = new Set();
    const stack = [startVertext];

    visited.add(startVertext);
    while (stack.length > 0) {
      const currentVertext = stack.pop();
      console.log(currentVertext);
      for (const neighbor of this.adjacencyList[currentVertext]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }

  topologicalSortUtils(vertex, visited, stack) {
    visited[vertex] = true;

    for (let neighbor of this.adjacencyList[vertex]) {
      if (!visited[neighbor]) {
        this.topologicalSortUtils(neighbor, visited, stack);
      }
    }

    stack.push(vertex);
  }

  topologicalSort() {
    let stack = [];
    let visited = {};

    if (this.hasCycle()) {
      console.log("Graph contains a cycle");
      return;
    }

    for (let vertex in this.adjacencyList) {
      visited[vertex] = false;
    }

    for (let vertex in this.adjacencyList) {
      if (!visited[vertex]) {
        this.topologicalSortUtils(vertex, visited, stack);
      }
    }
  }

  hasCycle() {
    let visited = new Set();
    let recStack = new Set();

    const dfs = (vertex) => {
      if (recStack.has(vertex)) return true;
      if (visited.has(vertex)) return false;

      visited.add(vertex);
      recStack.add(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (dfs(neighbor)) return true;
      }

      recStack.delete(vertex);
      return false;
    };

    for (let vertex in this.adjacencyList) {
      if (dfs(vertex)) return true;
    }

    return false;
  }
    
    dijkstra(start) {
        let distance = {}
        let previous = {}
        const minHeap = new BinaryHeap("min")
        const visited = new Set()

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distance[vertex] = 0
                minHeap.insert([vertex, 0])
            } else {
                distance[vertex] =Infinity
            }
            
            previous[vertex] = null
        }

        while (!minHeap.isEmpty()) {
            const [currentVertext, curruntDistance] = minHeap.extract()
            if (visited.has(currentVertext)) continue
            
            for (let n of this.adjacencyList[currentVertext]) {
                let newDis = curruntDistance + n.weight
                if (newDis < distance[n.node]) {
                    distance[n] = newDis
                    previous[n] = currentVertext
                    minHeap.insert([n.node, newDis])
                }
            }
        }

        return {distance,previous}
    }
}
