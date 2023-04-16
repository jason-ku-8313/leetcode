/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia:
 *  “The lowest common ancestor is defined between two nodes p and q as the lowest node in T
 *  that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Constraints:
 * 1. The number of nodes in the tree is in the range [2, 105].
 * 2. -10^9 <= Node.val <= 10^9
 * 3. All Node.val are unique.
 * 4. p != q
 * 5. p and q will exist in the BST.
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Time: O(logn), Space: O(logn)
var lowestCommonAncestor_recursive = function (root, p, q) {
  const { val, left, right } = root;
  // T=O(logn), S=O(logn)
  if (p.val < val && q.val < val) {
    return lowestCommonAncestor_recursive(left, p, q);
  } else if (p.val > val && q.val > val) {
    return lowestCommonAncestor_recursive(right, p, q);
  } else {
    return root;
  }
};

// Time: O(logn), Space: O(1)
var lowestCommonAncestor_iterarive = function (root, p, q) {
  // T=O(logn)
  while (root) {
    const { val, left, right } = root;
    if (val > p.val && val > q.val) {
      root = right;
    } else if (val > p.val && val > q.val) {
      root = left;
    } else {
      return root;
    }
  }
  throw Error("Constrants Violated: p and q will exist in the BST");
};
