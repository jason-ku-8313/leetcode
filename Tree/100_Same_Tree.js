/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the roots of two binary trees p and q, write a function to check
 * if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical,
 * and the nodes have the same value.
 *
 * Constraints:
 * 1. The number of nodes in both trees is in the range [0, 100].
 * 2. -10^4 <= Node.val <= 10^4
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// Time: O(n), Space: O(n)
var isSameTree_iterative = function (p, q) {
  const pStack = [p]; // S=O(n)
  const qStack = [q]; // S=O(n)

  // T=O(n)
  while (pStack.length || qStack.length) {
    const pNode = pStack.pop();
    const qNode = qStack.pop();

    if (pNode?.val !== qNode?.val) {
      return false;
    }
    if (pNode?.left || qNode?.left) {
      pNode.push(pNode?.left);
      qNode.push(qNode?.left);
    }
    if (pNode?.right || qNode?.right) {
      pNode.push(pNode?.right);
      qNode.push(qNode?.right);
    }
  }
  return !pStack.length && !qStack.length;
};

// Time: O(n), Space: O(n)
var isSameTree_recursive = function (p, q) {
  if (!p || !q) return p?.val === q?.val;

  // T=O(n), S=O(n)
  return (
    p.val === q.val &&
    isSameTree_recursive(p.left, q.left) &&
    isSameTree_recursive(p.right, q.right)
  );
};
