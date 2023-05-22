/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null) return "null";
  if (typeof object === "string") return `"${object}"`;
  if (typeof object !== "object") return object;
  if (Array.isArray(object)) {
    return `[${object.map((v) => jsonStringify(v)).join(",")}]`;
  }
  return `{${Object.entries(object)
    .map(([k, v]) => `"${k}":${jsonStringify(v)}`)
    .join(",")}}`;
};
