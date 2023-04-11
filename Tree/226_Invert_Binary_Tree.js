/**
 * T=O(n), S=O(1)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Constraints:
 * 1. The number of nodes in the tree is in the range [0, 100].
 * 2. -100 <= Node.val <= 100
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Time: O(n), Space: O(n)
var invertTree_iterative = function (root) {
  if (!root) return root;

  const stack = [root]; // S=O(n)

  // T=O(n)
  while (stack.length) {
    const parent = stack.pop();
    const { left, right } = parent;

    if (left && (left?.right || left?.left)) {
      stack.push(left);
    }
    if (right && (right?.right || right?.left)) {
      stack.push(right);
    }
    if (left || right) {
      parent.left = right;
      parent.right = left;
    }
  }
  return root;
};

// Time: O(n), Space: O(n)
var invertTree_recursive = function (root) {
  if (!root) return root;

  const { left, right } = root;
  // T=O(n), S=O(n)
  root.left = invertTree_recursive(right);
  root.right = invertTree_recursive(left);
  return root;
};
