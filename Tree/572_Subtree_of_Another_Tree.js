/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the roots of two binary trees root and subRoot, return true if there is a
 * subtree of root with the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree `tree` is a tree that consists of a node in tree
 * and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.
 *
 * Constraints:
 * 1. The number of nodes in the root tree is in the range [1, 2000].
 * 2. The number of nodes in the subRoot tree is in the range [1, 1000].
 * 3. -10^4 <= root.val <= 10^4
 * -10^4 <= subRoot.val <= 10^4
 *
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// Time: O(nm), Space: O(nm) -> n as length of root and m as length of subRoot
var isSubtree_recursive = function (root, subRoot) {
  if (!root) return false;
  if (!subRoot) return true;

  if (isSameTree(root, subRoot)) return true;

  return (
    isSubtree_recursive(root.left, subRoot) ||
    isSubtree_recursive(root.right, subRoot)
  );
};

const isSameTree = (t1, t2) => {
  if (!t1 || !t2) return t1 === t2;

  return (
    t1.val === t2.val &&
    isSameTree(t1.left, t2.left) &&
    isSameTree(t1.right, t2.right)
  );
};
