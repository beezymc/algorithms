//https://leetcode.com/problems/invert-binary-tree/solution/

//dfs
//Time: O(N)
//Space: O(H) - O(N) (balanced v unbalanced)
const invertTree = (root) => {
  const left = invertTree(root.left)
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

//bfs
//Time: O(N)
//Space: O(N) (in a full tree, n/2 leaves)
const invertTree = (root) => {
  const queue = [root];
  while (queue.length) {
    let curr = queue.shift();
    let temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;
    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
  return root;
};