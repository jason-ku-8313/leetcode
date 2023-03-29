/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Constraints:
 * 1. 0 <= s.length <= 5 * 10^4
 * 2. s consists of English letters, digits, symbols and spaces.
 *
 * @param {string} s
 * @return {number}
 */
// Time: O(n), Space: O(n)
var lengthOfLongestSubstring_map_slidingWindow = function (s) {
  let maxLen = 0;
  let left = 0;
  let map = new Map(); // S=O(n)

  // T=O(n)
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      left = Math.max(map.get(s[i]) + 1, left);
    }
    maxLen = Math.max(i - left + 1, maxLen);
    map.set(s[i], i);
  }
  return maxLen;
};
