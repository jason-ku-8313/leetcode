/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (o1 === o2) return true;

    // Contains primitive type value and value not the same;
    if (typeof o1 !== "object" || typeof o2 !== "object") return false;

    // Type of null is 'object' so need to exclude null case here
    if (o1 === null || o2 === null) return o1 === o2;

    // Make sure they are both Array or object. Considering case: [1], { "0": 1 }
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;

    // Make sure the property length are the same. Considering case: [1, 2], [1, 2, 3]
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;

    for (const pName in o1) {
      if (!areDeeplyEqual(o1[pName], o2[pName])) return false;
    }
    return true;
};
