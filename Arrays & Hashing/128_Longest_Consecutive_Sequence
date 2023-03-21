/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 *
 * Constraints:
 * 1. 0 <= nums.length <= 10^5
 * 2. -10^9 <= nums[i] <= 10^9
 *
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n), Space: O(n)
var longestConsecutive_map_extendBoundary = function (nums) {
  const map = new Map(); // S=O(n)
  let ans = 0;

  // T=O(n)
  for (const num of nums) {
    if (map.has(num)) continue; // ignore duplicated number

    const left = map.get(num - 1) || 0;
    const right = map.get(num + 1) || 0;
    const length = left + right + 1;
    map.set(num, length);
    ans = Math.max(length, ans);

    // Setting length to boundary for tracking
    map.set(num - left, length);
    map.set(num + right, length);
  }
  return ans;
};

// Time: O(nlogn), Space: O(1)
var longestConsecutive_noExtraSpace = function (nums) {
  let ans = 0;
  let left = 0;
  let right = 0;
  if (!nums.length) return ans;

  nums.sort((a, b) => a - b); // T=O(nlogn)

  // T=O(n)
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff === 0) continue;

    if (diff === 1) {
      right++;
    } else {
      ans = Math.max(right - left + 1, ans);
      left = i;
      right = left;
    }
  }
  return Math.max(right - left + 1, ans);
};
