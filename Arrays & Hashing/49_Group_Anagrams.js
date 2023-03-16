/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Constraints:
 * 1. 1 <= strs.length <= 104
 * 2. 0 <= strs[i].length <= 100
 * 3. strs[i] consists of lowercase English letters.
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
// Time: O(nlogn), Space: O(n)
var groupAnagrams_quicksort_and_map = function (strs) {
  const map = new Map(); // S=O(n)

  // T=O(n)
  for (const str of strs) {
    const sortedStr = [...str].sort().join(""); // T=O(nlogn)
    if (map.has(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr), str]);
    } else {
      map.set(sortedStr, [str]);
    }
  }
  return [...map.values()];
};

// Time: O(nm), Space: O(n)
var groupAnagrams_ASCII_code_and_map = function (strs) {
  const map = new Map(); // S=O(n)

  // T=O(nm)
  for (const str of strs) {
    const arr = new Array(26).fill(0);
    [...str].forEach((c) => arr[c.charCodeAt() - "a".charCodeAt()]++);

    const key = arr.join();
    if (map.has(key)) {
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }
  return [...map.values()];
};
