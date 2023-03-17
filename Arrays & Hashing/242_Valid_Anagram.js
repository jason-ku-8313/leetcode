/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Constraints:
 * 1. 1 <= s.length, t.length <= 5 * 104
 * 2. s and t consist of lowercase English letters.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time: O(nlogn), Space: O(1)
var isAnagram_quicksort = function (s, t) {
  if (s.length !== t.length) return false;

  const sortedS = [...s].sort().join(""); // T=O(nlogn)
  const sortedT = [...t].sort().join(""); // T=O(nlogn)
  return sortedS === sortedT;
};

// Time: O(n), Space: O(26)
var isAnagram_ASCIICode = function (s, t) {
  if (s.length !== t.length) return false;

  const arr = new Array(26).fill(0);
  const a = "a".charCodeAt(); // 97
  // T=O(n)
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - a]++;
    arr[t[i].charCodeAt() - a]--;
  }

  return arr.every((num) => num === 0); // T=O(n)
};
