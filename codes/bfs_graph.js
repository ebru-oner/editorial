const Graph = function () {
  this.vertices = {};
};

Graph.prototype.addVertex = function (vertex) {
  this.vertices[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.vertices[vertex1].push(vertex2);
  this.vertices[vertex2].push(vertex1);
};

Graph.prototype.bfs = function (startVertex) {
  const visited = {};
  const result = [];
  const queue = [startVertex];
  visited[startVertex] = true;

  while (queue.length > 0) {
    const currentVertex = queue.shift();
    result.push(currentVertex);

    for (const neighbor of this.vertices[currentVertex]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }

  return result;
};
