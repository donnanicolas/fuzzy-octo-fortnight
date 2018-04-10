
/**
 *
 * @param {Object} object
 * @param {string[]} path
 * @param {any} val
 */
const set = (object = {}, path, val) => {
  const [first, ...rest] = path;
  return rest.length === 0
    ? { ...object, [first]: val }
    : { ...object, [first]: set(object[first], rest, val) };
};

export default set;
