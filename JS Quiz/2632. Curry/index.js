/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  const args = []
  function curried() {
    args.push(...arguments);
    return curried;
  };
  curried.toString = () => fn(...args);
  return curried;
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
