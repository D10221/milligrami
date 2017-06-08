"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const is_defined_1 = require("./util/is-defined");
/**
 *
 */
exports.Row = (xProps) => {
    const { rowWrap, rowNoPadding, rowTop, rowBottom, rowCenter, rowStretch, rowBaseline } = xProps, props = __rest(xProps, ["rowWrap", "rowNoPadding", "rowTop", "rowBottom", "rowCenter", "rowStretch", "rowBaseline"]);
    const className = "row" +
        (is_defined_1.isUndefinedOrFalse(rowWrap) ? "" : " row-wrap") +
        (is_defined_1.isUndefinedOrFalse(rowNoPadding) ? "" : " row-no-padding") +
        (is_defined_1.isUndefinedOrFalse(rowTop) ? "" : " row-top") +
        (is_defined_1.isUndefinedOrFalse(rowBottom) ? "" : " row-bottom") +
        (is_defined_1.isUndefinedOrFalse(rowCenter) ? "" : " row-center") +
        (is_defined_1.isUndefinedOrFalse(rowStretch) ? "" : " row-stretch") +
        (is_defined_1.isUndefinedOrFalse(rowStretch) ? "" : " row-baseline");
    return (React.createElement("div", Object.assign({}, Object.assign({ className }, props))));
};
//# sourceMappingURL=row.js.map