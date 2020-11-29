function Graph() {
  this.vertices = []; //顶点集合
  this.edges = new Map();
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
  this.edges.set(v, []);
};

Graph.prototype.addEdge = function (v, w) {
  let vEdge = this.edges.get(v);
  vEdge.push(w);
  let wEdge = this.edges.get(w);
  wEdge.push(v);
  this.edges.set(v, vEdge);
  this.edges.set(w, wEdge);
};

Graph.prototype.toString = function () {
  let s = "";
  for (let i = 0, length = this.vertices.length; i < length; i++) {
    let vertex = this.vertices[i];
    s += vertex + "->";
    let neighors = this.edges.get(vertex);
    for (let j = 0; j < neighors.length; j++) {
      s += neighors[j] + " ";
    }
    s += "\n";
  }
  return s;
};

Graph.prototype.dfs = function () {
  let marked = [];
  for (let i = 0; i < this.vertices.length; i++) {
    if (!marked[this.vertices[i]]) {
      dfsVisit(this.vertices[i], this.edges);
    }
  }
  function dfsVisit(u, edges) {
    marked[u] = true;
    console.log(u);
    let neighbors = edges.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (!marked[w]) {
        dfsVisit(w, edges);
      }
    }
  }
};

Graph.prototype.bfs = function (v) {
  let queue = [],
    marked = [];
  marked[v] = true;
  queue.push(v);
  while (queue.length > 0) {
    let s = queue.shift();
    if (this.edges.has(s)) {
      console.log(s);
    }
    let neighbors = this.edges.get(s);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (!marked[w]) {
        marked[w] = true;
        queue.push(w);
      }
    }
  }
};

let grahp = new Graph();
let vertices = [1, 2, 3, 4, 5];
for (let i = 0; i < vertices.length; i++) {
  grahp.addVertex(vertices[i]);
}
grahp.addEdge(1, 4);
grahp.addEdge(1, 3);
grahp.addEdge(2, 3);
grahp.addEdge(2, 4);

console.log(grahp.toString());
grahp.dfs();
console.log("\n");
grahp.bfs(1);
