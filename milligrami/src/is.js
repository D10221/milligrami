export const isDefined = (x) => typeof x !== "undefined";

export const isUndefined = (x) => !isDefined(x);

export const isUndefinedOrFalse = (x) => isUndefined(x) || x === false;
