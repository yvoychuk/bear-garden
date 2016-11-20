export function assertSimilar (fn, expected) {
  let result = fn === expected;
  console.log(fn, "..", expected, result ? "=> equal" : "=> not equal");
  return result;
}