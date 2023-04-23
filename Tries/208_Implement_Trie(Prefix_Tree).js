/**
 * A trie (pronounced as "try") or prefix tree is a tree data structure used
 * to efficiently store and retrieve keys in a dataset of strings.
 * There are various applications of this data structure, such as autocomplete and spellchecker.
 *
 * Implement the Trie class:
 *  1. Trie() Initializes the trie object.
 *  2. void insert(String word) Inserts the string word into the trie.
 *  3. boolean search(String word) Returns true if the string word is
 *      in the trie (i.e., was inserted before), and false otherwise.
 *  4. boolean startsWith(String prefix) Returns true if there is a previously
 *      inserted string word that has the prefix prefix, and false otherwise.
 *
 */
var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const c of word) {
    if (!node[c]) node[c] = {};
    node = node[c];
  }
  node.isLastChar = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
// Time: O(n), Space: O(1)
Trie.prototype.search = function (word) {
  // T=O(n)
  const node = traverse(this.root, prefix);
  return !!node && !!node.isLastChar;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
// Time: O(n), Space: O(1)
Trie.prototype.startsWith = function (prefix) {
  // T=O(n)
  const node = traverse(this.root, prefix);
  return !!node;
};

function traverse(trie, word) {
  let node = trie;
  for (const c of word) {
    node = node[c];
    if (!node) break;
  }
  return node;
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
