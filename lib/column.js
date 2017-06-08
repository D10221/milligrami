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
/**
 * a <div/> column
 */
exports.Column = (xProps) => {
    const { columnWidth, offset } = xProps, props = __rest(xProps, ["columnWidth", "offset"]);
    const className = "column" +
        (!columnWidth ? "" : ` column-${columnWidth}`) +
        (!offset ? "" : ` column-offset-${offset}`);
    return (React.createElement("div", Object.assign({}, Object.assign({ className }, props))));
};
/**
 * same as @see {Column} but with a <sapn/> instead of a <div/>
 */
exports.ColumnSpan = (xProps) => {
    const { columnWidth, offset } = xProps, props = __rest(xProps, ["columnWidth", "offset"]);
    const className = "column" +
        (!columnWidth ? "" : ` column-${columnWidth}`) +
        (!offset ? "" : ` column-offset-${offset}`);
    return React.createElement("span", Object.assign({}, Object.assign({ className }, props)));
};
//# sourceMappingURL=column.js.map