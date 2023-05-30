/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  // Make 'fn' configurable so we can delete it later
  Object.defineProperty(context, "fn", { value: this, configurable: true });
  const result = context.fn(...args);

  // Remove temporarily property 'fn' to prevent poisoning 'context'
  delete context.fn;
  return result;
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
