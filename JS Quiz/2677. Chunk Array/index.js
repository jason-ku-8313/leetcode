/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    const result = [];
    let idx = 0;
    while (idx < arr.length) {
      result.push(arr.slice(idx, idx + size));
      idx += size;
    }
    return result;
};
