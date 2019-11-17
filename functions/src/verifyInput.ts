// https://stackoverflow.com/a/35047888
/**
 * Verifies that `data` is the same type of class as `refClass`
 * @param data - object being compared
 * @param refClass - empty reference class to compare to
 */
export default function VerifyInput<T extends Object>(data: T, refClass: T): boolean {
  const dataKeys = [data, refClass].reduce((keys, object) => keys.concat(Object.keys(object)), new Array());
  const union = new Set(dataKeys);
  return [data, refClass].every((object) => union.size === Object.keys(object).length);
}
