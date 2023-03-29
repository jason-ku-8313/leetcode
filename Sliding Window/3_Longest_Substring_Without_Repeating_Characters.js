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
  let right = 0;
  let map = new Map(); // S=O(n)

  // T=O(n)
  while (right < s.length) {
    if (map.has(s[right])) {
      maxLen = Math.max(map.size, maxLen);
      left = map.get(s[right]) + 1;
      right = left;
      map.clear();
    }
    map.set(s[right], right);
    right++;
  }
  return Math.max(map.size, maxLen);
};

// Time: O(n), Space: O(n)
var lengthOfLongestSubstring_fasterSolution = function (s) {
  let maxLen = 0;
  let left = 0;
  let map = new Map(); // S=O(n)

  // T=O(n)
  for (let i = 0; i < s.length; i++) {
    while (map.has(s[i])) {
      map.delete(s[left]);
      left++;
    }
    map.set(s[i]);
    maxLen = Math.max(i - left + 1, maxLen);
  }
  return maxLen;
};
