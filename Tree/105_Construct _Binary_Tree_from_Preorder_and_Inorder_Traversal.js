/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal
 * of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 *
 * Constraints:
 * 1. 1 <= preorder.length <= 3000
 * 2. inorder.length == preorder.length
 * 3. -3000 <= preorder[i], inorder[i] <= 3000
 * 4. preorder and inorder consist of unique values.
 * 5. Each value of inorder also appears in preorder.
 * 6. preorder is guaranteed to be the preorder traversal of the tree.
 * 7. inorder is guaranteed to be the inorder traversal of the tree.
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// Time: O(n), Space: O(n)
var buildTree_recursive = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]);
  const midIdx = inorder.indexOf(root.val);
  root.left = buildTree_recursive(
    preorder.slice(1, midIdx + 1),
    inorder.slice(0, midIdx)
  );
  root.right = buildTree_recursive(
    preorder.slice(midIdx + 1),
    inorder.slice(midIdx + 1)
  );

  return root;
};
