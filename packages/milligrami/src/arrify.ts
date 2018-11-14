export default <T>(x: T | (T[]) | null | undefined): T[] =>
  x === null || x === undefined ? [] : Array.isArray(x) ? x : [x];
