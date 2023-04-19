/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the root of a binary search tree, and an integer k,
 * return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 *
 * Constraints:
 * 1. The number of nodes in the tree is n.
 * 2. 1 <= k <= n <= 10^4
 * 3. 0 <= Node.val <= 10^4
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// Time: O(n), Space: O(n)
var kthSmallest_DFS_inorder_recursive = function (root, k) {
  const sortedNodes = []; // S=O(n)
  inorderTraversal(root, sortedNodes); // T=O(n)
  return sortedNodes[k - 1].val;
};

var inorderTraversal = (root, arr) => {
  if (!root) return;

  inorderTraversal(root.left, arr);
  arr.push(root);
  inorderTraversal(root.right, arr);
};

// Time: O(n), Space: O(n)
var kthSmallest_DFS_inorder_iterative = function (root, k) {
  const stack = [];
  const sortedNodes = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    sortedNodes.push(root);
    root = root.right;
  }
  return sortedNodes[k - 1].val;
};
