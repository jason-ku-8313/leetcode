/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;

  // Use two pointer to process all elements of arr
  let l = 0;
  let r = arr.length;
  while (l < r) {
    if (!Array.isArray(arr[l])) {
      l++;
      continue;
    }

    // flat nested array recursively
    const nestedArr = arr[l];
    flat(nestedArr, n - 1);
    arr.splice(l, 1, ...nestedArr); // Replace current element with flattened elements

    // we flattened nested array so arr.length is expended as well. Let's adjust l/r position to skip processed elements.
    l += nestedArr.length;
    r += nestedArr.length - 1; // Neet to -1 because we replaced an element from array;
  }
  return arr;
};
