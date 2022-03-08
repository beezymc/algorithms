//https://leetcode.com/problems/clone-graph/

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

//dfs
//Time: O(N + E) Nodes and Edges
//Space: O(N) -- the 'visited' hash map
const cloneGraph = (node, map = {}) => {
  if (node === null) {
    return node;
  }
  if (map[node.val]) {
    return map[node.val];
  }
  let cloneNode = new Node(node.val);
  map[node.val] = cloneNode;
  for (let i = 0; i < node.neighbors.length; i++) {
    cloneNode.neighbors.push(cloneGraph(node.neighbors[i], map));
  }
  return cloneNode;
};

//bfs
//Time: O(N + E) Nodes and Edges
//Space: O(N) -- the 'visited' hash map
const cloneGraph = (node, map = {}) => {
  if (node === null) {
    return node;
  }
  const visited = {};
  const queue = [node];
  visited[node.val] = new Node(node.val);
  while (queue.length) {
    let curr = queue.shift();
    for (let i = 0; i < curr.neighbors.length; i++) {
      let neighbor = curr.neighbors[i];
      if (visited[neighbor.val] === undefined) {
        visited[neighbor.val] = new Node(neighbor.val);
        queue.push(neighbor);
      }
      visited[curr.val].neighbors.push(visited[neighbor.val]);
    }
  }
  return visited[node.val];
};