/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  let timer = null;
  let lastExecTime = 0;
  const helper = (func, args) => {
    func(...args);
    return Date.now();
  };

  return function(...args) {
    const timePassed = Date.now() - lastExecTime;
    if (timePassed < t) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastExecTime = helper(fn, args);
      }, t - timePassed);
      return;
    }
    lastExecTime = helper(fn, args);
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */