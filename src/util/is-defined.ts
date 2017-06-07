export const isDefined = (x: any) => typeof x !== "undefined";
export const isUndefined = (x: any) => !isDefined(x);

export const isUndefinedOrFalse = (x: boolean) => isUndefined(x) || x === false;

