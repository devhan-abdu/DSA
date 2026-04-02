const { version } = require("react");

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

    visited.add(startVertext)
    while (stack.length > 0) {
      const currentVertext = queue.pop();
      console.log(currentVertext);
      for (const neighbor of this.adjacencyList[currentVertext]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }
}
