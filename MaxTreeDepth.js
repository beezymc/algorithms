//https://leetcode.com/problems/maximum-depth-of-binary-tree/solution/

//dfs
//Time: O(N)
//Space: O(logn) - O(n) depending on tree balance.
const maxDepth = (root) => {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

//bfs
//Time: O(N)
//Space: O(logn) - O(n) depending on tree balance.
const maxDepth = (root) => {
  const queue = [root];
  const depth = [1];
  let maxDepth = 0;
  while (queue.length) {
    let currNode = queue.shift();
    let currDepth = queue.depth();
    if (currNode !== null) {
      maxDepth = currDepth;
      depth.push(maxDepth + 1);
      queue.push(currNode.left);
      depth.push(maxDepth + 1);
      queue.push(currNode.right);
    }
  }
  return maxDepth;
}