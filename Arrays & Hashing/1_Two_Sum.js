/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Constraints:
 * 1. 2 <= nums.length <= 104
 * 2. -109 <= nums[i] <= 109
 * 3. -109 <= target <= 109
 * 4. Only one valid answer exists.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time: O(n^2), Space: O(1)
var twoSum_bruteForce = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        return [i, y];
      }
    }
  }
  return [];
};

// Time: O(n), Space: O(n)
var twoSum_map = function (nums, target) {
  const map = new Map(); // S=O(n)

  // worst case: T=O(n)
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return [];
};
