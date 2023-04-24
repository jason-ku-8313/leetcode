/**
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 *
 * Implement the WordDictionary class:
 *
 * 1. WordDictionary() Initializes the object.
 * 2. void addWord(word) Adds word to the data structure, it can be matched later.
 * 3. bool search(word) Returns true if there is any string in the data structure that
 *      matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 *
 * Constraints:
 * 1. 1 <= word.length <= 25
 * 2. word in addWord consists of lowercase English letters.
 * 3. word in search consist of '.' or lowercase English letters.
 * 4. There will be at most 2 dots in word for search queries.
 * 5. At most 10^4 calls will be made to addWord and search.
 */
var WordDictionary = function () {
  this.root = {};
  this.candidates = [];
};

/**
 * @param {string} word
 * @return {void}
 */
// Time: O(n), Space: O(n)
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const c of word) {
    if (!node[c]) node[c] = {};
    node = node[c];
  }
  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
// Time: O(mn), Space: (1)
WordDictionary.prototype.search = function (word) {
  return helper(this.root, word);
};

function helper(trie, word) {
  if (word.length === 1) {
    return !!(
      (word === "." && Object.values(trie).find((n) => n.isWord)) ||
      trie[word]?.isWord
    );
  }

  const char = word[0];
  let node = trie;
  if (char === ".") {
    return !!Object.keys(node).find((key) => helper(node[key], word.slice(1)));
  } else if (!node[char]) {
    return false;
  } else {
    return helper(node[char], word.slice(1));
  }
}
