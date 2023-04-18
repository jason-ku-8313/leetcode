/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 * Constraints:
 * 1. The number of nodes in the tree is in the range [1, 104].
 * 2. -2^31 <= Node.val <= 2^31 - 1
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
// Time: O(n), Space: O(n)
var isValidBST_iterative = function (root) {
  // S=O(n)
  const stack = [{ node: root, min: Number.MIN_VALUE, max: Number.MAX_VALUE }]; // record node and low/high boundary

  // T=O(n)
  while (stack.length) {
    const { node, min, max } = stack.pop();

    // If node value out of range means not a BST
    if (min > node.val || node.val > max) {
      return false;
    }

    // when go left side, replace high boundary with current node value
    if (node.left) {
      stack.push({ node: node.left, min, max: node.val });
    }
    // when go right side, replace low boundary with current node value
    if (node.right) {
      stack.push({ node: node.right, min: node.val, max });
    }
  }
  return true;
};
