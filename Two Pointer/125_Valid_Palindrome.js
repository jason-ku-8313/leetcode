/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Constraints:
 * 1. 1 <= s.length <= 2 * 10^5
 * 2. consists only of printable ASCII characters.
 *
 * @param {string} s
 * @return {boolean}
 */
// Time: O(n), Space: O(1)
var isPalindrome_twoPointer = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // T=O(n)

  // T=O(n)
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) return false;
  }
  return true;
};
