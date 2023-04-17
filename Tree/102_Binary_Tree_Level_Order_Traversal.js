/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 *
 * Constraints:
 * 1. The number of nodes in the tree is in the range [0, 2000].
 * 2. -1000 <= Node.val <= 1000
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Time: O(n), Space: O(n)
var levelOrder_BFS = function (root) {
  if (!root) return [];

  const ans = []; // S=O(n)
  const queue = [root]; // S=O(n)

  // T=O(n)
  while (queue.length) {
    const level = [];
    let nodeCount = queue.length;
    while (level.length < nodeCount) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (level.length) ans.push(level);
  }
  return ans;
};
