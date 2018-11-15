/** typescript has problems importing 'arrify' declaration */

/**
 * toArray
 */
export default <T>(x: T | (T[]) | null | undefined): T[] =>
  x === null || x === undefined ? [] : Array.isArray(x) ? x : [x];
