class Graph {
  constructor(numVertices, isDirected = false) {
    this.numVertices = numVertices;
    this.isDirected = isDirected;
    this.adjacencyMatrix = [];

    for (let i = 0; i < this.numVertices; i++) {
      this.adjacencyMatrix[i] = [];
      for (let j = 0; j < this.numVertices; j++) {
        this.adjacencyMatrix[i][j] = 0;
      }
    }
  }

  addEdge(v1, v2, weight = 1) {
    if (v1 >= this.numVertices || v2 >= this.numVertices) return;

    this.adjacencyMatrix[v1][v2] = weight;

    if (!this.isDirected) {
      this.adjacencyMatrix[v2][v1] = weight;
    }
  }
   removeEdge(v1, v2) {
    if (v1 >= this.numVertices || v2 >= this.numVertices) return;

    this.adjacencyMatrix[v1][v2] = 0;

    if (!this.isDirected) {
      this.adjacencyMatrix[v2][v1] = 0;
    }
  }
}
