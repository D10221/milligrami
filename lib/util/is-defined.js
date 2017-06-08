"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefined = (x) => typeof x !== "undefined";
exports.isUndefined = (x) => !exports.isDefined(x);
exports.isUndefinedOrFalse = (x) => exports.isUndefined(x) || x === false;
//# sourceMappingURL=is-defined.js.map