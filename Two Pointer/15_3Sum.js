/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Constraints:
 * 1. 3 <= nums.length <= 3000
 * 2. -10^5 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time: O(n^3), Space: O(n)
var threeSum_bruteForce = function (nums) {
  if (nums.length < 3) return [];

  const map = new Map(); // S=O(n)

  // T=O(n^3)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const key = [nums[i], nums[j], nums[k]]
            .sort((a, b) => a - b)
            .join("");
          map.set(key, [nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return [...map.values()];
};

// Time: O(n^2), O(1)
var threeSum_quickSort_twoPointer = function (nums) {
  const ans = [];
  if (nums.length < 3) return ans;

  nums.sort((a, b) => a - b); // T=O(nlogn)

  const target = 0;
  // T=O(n^2)
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;

    if (nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        ans.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[++j]) continue;
        while (nums[k] === nums[--k]) continue;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return ans;
};
