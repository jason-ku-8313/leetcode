/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example,
 * the array nums = [0,1,2,4,5,6,7] might become:
 *
 * - [4,5,6,7,0,1,2] if it was rotated 4 times.
 * - [0,1,2,4,5,6,7] if it was rotated 7 times.
 *
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 *
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(logn), Space: O(1)
var findMin_binarySearch = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  // T=O(logn)
  while (left < right) {
    const middle = ~~((right - left) / 2) + left;
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return nums[right];
};
