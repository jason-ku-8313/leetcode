/**
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 *
 * Constraints:
 * 1. n == height.length
 * 2. 2 <= n <= 10^5
 * 3. 0 <= height[i] <= 10^4
 *
 * @param {number[]} height
 * @return {number}
 */
// Time: O(n^2), Space: O(1)
var maxArea_bruteForce = function (height) {
  let maxArea = 0;

  // T=O(n^2)
  for (let i = 0; i < height.length; i++) {
    for (let y = i + 1; y < height.length; y++) {
      const length = y - i;
      const width = Math.min(height[i], height[y]);
      maxArea = Math.max(length * width, maxArea);
    }
  }
  return maxArea;
};

// Time: O(n), Space: O(1)
var maxArea_twoPointer = function (height) {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;

  // T=O(n)
  while (l < r) {
    const width = Math.min(height[l], height[r]);
    const length = r - l;
    maxArea = Math.max(width * length, maxArea);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};
