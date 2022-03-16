//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/submissions/

//bfs
//Time: O(log(n))
//Space: O(1)
const lowestCommon = (root, p, q) => {
  while(root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      return root;
    }
  }
  return -1;
};

//dfs
//Time: O(N)
//Space: O(H) - O(N) (balanced v unbalanced)
const lowestCommon = (root, p, q) => {
    if (p.val > root.val && q.val > root.val) {
        return lowestCommon(root.right, p, q);
    } else if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};