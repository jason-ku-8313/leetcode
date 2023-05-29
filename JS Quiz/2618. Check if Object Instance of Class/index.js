/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  // Make sure input is valid before proceeding
  if (obj === undefined || obj === null || typeof classFunction !== "function")
    return false;

  // Make sure it's an object so instanceof has direct access to the constructor function
  if (typeof obj !== "object") {
    return Object(obj) instanceof classFunction;
  }
  return obj instanceof classFunction;
};

var checkIfInstanceOf_ = function (obj, classFunction) {
  if (obj === undefined || obj === null || typeof classFunction !== "function")
    return false;

  // Check obj's prototype chain
  while (Object.getPrototypeOf(obj) !== null) {
    if (Object.getPrototypeOf(obj) === classFunction.prototype) return true;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
