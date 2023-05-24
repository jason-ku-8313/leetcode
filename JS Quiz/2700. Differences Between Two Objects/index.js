/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
  // Make sure obj1 and obj2 are both Array or Object
  if (obj1 === obj2) return {};
  if (obj1 === null || obj2 === null) return [obj1, obj2];
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return [obj1, obj2];
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];
  
  const result = {};
  for (const prop in obj1) {
    if (!obj2.hasOwnProperty(prop)) continue;

    const childDiff = objDiff(obj1[prop], obj2[prop]);
    if (Object.keys(childDiff).length) {
      result[prop] = childDiff;
    }
  }
  return result;
}
