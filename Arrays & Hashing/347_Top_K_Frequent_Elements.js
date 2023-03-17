/**
 * Given an integer array nums and an integer k,
 * return the k most frequent elements. You may return the answer in any order.
 *
 * Constraints:
 * 1. 1 <= nums.length <= 105
 * 2. -104 <= nums[i] <= 104
 * 3. k is in the range [1, the number of unique elements in the array].
 * 4. It is guaranteed that the answer is unique.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Time: O(klogn), Space: O(n)
var topKFrequent_map_quickSort = function (nums, k) {
  const map = new Map(); // S=O(n)

  // T=O(n)
  nums.forEach((num) => {
    map.set(num, map.get(num) + 1 || 1);
  });

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1]) // T=O(klogn)
    .slice(0, k)
    .map((entry) => entry[0]);
};

// Time: O(n), Space: O(n)
var topKFrequent_map_bucketSort = function (nums, k) {
  const map = new Map(); // S=O(n)

  // T=O(n)
  for (const num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }

  const freq = Array.from({ length: nums.length + 1 }, () => []); // S=O(n+1)

  // T=O(n)
  for (const [num, count] of map) {
    freq[count].push(num);
  }

  const ans = [];
  // T=O(n)
  for (let i = freq.length - 1; i > 0; i--) {
    if (freq[i].length) {
      ans.push(...freq[i]);
    }
    if (ans.length >= k) {
      break;
    }
  }
  return ans;
};
