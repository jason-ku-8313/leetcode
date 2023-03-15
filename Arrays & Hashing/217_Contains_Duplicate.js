/**
 * leetcode 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * @param {number[]} nums
 * @return {boolean}
 */

// Time: O(nlogn), Space: O(1)
var containsDuplicate_bruteForce = function (nums) {
  // Nested for-loop: T=O(nlogn)
  for (let i = 0; i < nums.length; i++) {
    for (let y = 1; y < nums.length; y++) {
      if (nums[i] === nums[y]) {
        return true;
      }
    }
  }
  return false;
};

// Time: O(logn), Space: O(1)
var containsDuplicate_quicksort = function (nums) {
  nums.sort(); // Quick Sort: T=O(logn)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// Time: O(1), Space: O(n)
var containsDuplicate_set = function (nums) {
  const set = new Set(nums); // S=O(n)
  return set.size === nums.length;
};
