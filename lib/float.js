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
exports.Float = (xProps) => {
    const { xFloat, className } = xProps, props = __rest(xProps, ["xFloat", "className"]);
    const cname = className +
        (xFloat === "left"
            ? " float-left"
            : " float-right");
    return (React.createElement("div", Object.assign({}, Object.assign({ className: cname }, props))));
};
//# sourceMappingURL=float.js.map