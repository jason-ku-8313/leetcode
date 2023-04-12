/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the
 * longest path from the root node down to the farthest leaf node.
 *
 * Constraints:
 * 1. The number of nodes in the tree is in the range [0, 104].
 * 2. -100 <= Node.val <= 100
 *
 * @param {TreeNode} root
 * @return {number}
 */
// Time: O(n), Space: O(n)
var maxDepth_iterative = function (root) {
  if (!root) return 0;

  const stack = []; // S=O(n)
  let depth = 1;
  let maxDep = 1;

  // T=O(n)
  while (stack.length || root.left || root.right) {
    const { left, right } = root;
    if (left && right) {
      depth++;
      stack.push({ right, depth });
      root = left;
    } else if (left || right) {
      depth++;
      root = left ?? right;
    } else {
      maxDep = Math.max(maxDep, depth);
      const prev = stack.pop();
      root = prev.right;
      depth = prev.depth;
    }
  }
  return Math.max(maxDep, depth);
};

// Time: O(n), Space: O(n)
var maxDepth_recursive = function (root) {
  if (!root) return 0;

  // T=O(n), S=O(n)
  return (
    1 + Math.max(maxDepth_recursive(root.left), maxDepth_recursive(root.right))
  );
};
