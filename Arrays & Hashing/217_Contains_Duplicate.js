/**
 * leetcode 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Constraints:
 * 1. 1 <= nums.length <= 105
 * 2. -109 <= nums[i] <= 109
 *
 * @param {number[]} nums
 * @return {boolean}
 */

// Time: O(n^2), Space: O(1)
var containsDuplicate_bruteForce = function (nums) {
  // Nested for-loop: T=O(n^2)
  for (let i = 0; i < nums.length; i++) {
    for (let y = 1; y < nums.length; y++) {
      if (nums[i] === nums[y]) {
        return true;
      }
    }
  }
  return false;
};

// Time: O(nlogn), Space: O(1)
var containsDuplicate_quickSort = function (nums) {
  nums.sort(); // Quick Sort: T=O(nlogn)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// Time: O(n), Space: O(n)
var containsDuplicate_set = function (nums) {
  const set = new Set(nums); // T=O(n), S=O(n)
  return set.size === nums.length;
};
