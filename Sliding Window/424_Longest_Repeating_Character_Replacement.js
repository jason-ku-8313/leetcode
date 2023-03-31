/**
 * You are given a string s and an integer k. You can choose any character of the string and
 * change it to any other uppercase English character. You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 *
 * Constraints:
 * 1. 1 <= s.length <= 10^5
 * 2. s consists of only uppercase English letters.
 * 3. 0 <= k <= s.length
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Time: O(n), Space: O(1)
var characterReplacement = function (s, k) {
  let maxLen = 0;
  let left = 0;
  let right = left;
  let visited = new Array(26); // S=O(1)
  let longestDuplicated = 0;
  const A = "A".charCodeAt();

  // T=O(n)
  while (right < s.length) {
    const ascii = s[right].charCodeAt() - A;
    visited[ascii] = (visited[ascii] || 0) + 1;

    longestDuplicated = Math.max(visited[ascii], longestDuplicated);
    if (right - left + 1 - longestDuplicated > k) {
      visited[s[left].charCodeAt() - A] -= 1;
      left++;
    }

    maxLen = Math.max(right - left + 1, maxLen);
    right++;
  }
  return maxLen;
};
