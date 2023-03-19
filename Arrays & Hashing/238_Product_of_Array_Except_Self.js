/**
 * Given an integer array nums, return an array answer such that
 * answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Constraints:
 * 1. 2 <= nums.length <= 105
 * 2. -30 <= nums[i] <= 30
 * 3. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// Time: O(n), Space: O(1)
var productExceptSelf_prefix_postfix = function (nums) {
  const ans = new Array(nums.length); // S=O(n) <- Can be ignored because of follow-up
  let prefixProduct = 1;
  let postfixProduct = 1;

  // T=O(n)
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefixProduct;
    prefixProduct *= nums[i];
  }

  // T=O(n)
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= postfixProduct;
    postfixProduct *= nums[i];
  }
  return ans;
};
