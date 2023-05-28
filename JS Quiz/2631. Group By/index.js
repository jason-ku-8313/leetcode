/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, curr) => {
    const key = fn(curr);
    acc[key] ??= [];
    acc[key].push(curr);
    return acc;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
