//dfs
//Time: O(N)
//Space: O(logn) = O(N) (balanced v unbalanced)
const sameTree = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.val !== tree2.val) return false;
  return sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right);
}

//bfs
//Time: O(N)
//Space: O(logn) = O(N) (balanced v unbalanced)
const sameTree = (tree1, tree2) => {
  const oneQueue = [tree1];
  const twoQueue = [tree2];
  while (oneQueue.length || twoQueue.length) {
    let oneNode = oneQueue.shift();
    let twoNode = twoQueue.shift();
    if (!check(oneNode.left, twoNode.left)) return false;
    if (oneNode.left !== null) {
      oneQueue.push(oneNode.left);
      twoQueue.push(twoNode.left);
    }
    if (!check(oneNode.right, twoNode.right)) return false;
    if (oneNode.right !== null) {
      oneQueue.push(oneNode.right);
      twoQueue.push(twoNode.right);
    }
  }
  return true;
}

const check = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return true
};