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
exports.Label = (xProps) => {
    const { inLine, className } = xProps, props = __rest(xProps, ["inLine", "className"]);
    const augmented = className +
        (is_defined_1.isUndefinedOrFalse(inLine) ? "" : " label-inline");
    return (React.createElement("label", Object.assign({}, Object.assign({ className: augmented }, props))));
};
//# sourceMappingURL=label.js.map