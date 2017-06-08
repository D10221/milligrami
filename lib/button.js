"use strict";
/**
 *
 * TODO: HOC , possibly taking ButtonProps|LinkButtonProps|InputButtonProps
 *  return Button|Link|Input?
 *  not returning always the same thing smells
 */
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
exports.Button = (xProps) => {
    const { outline, clear } = xProps, props = __rest(xProps, ["outline", "clear"]);
    const className = "button" +
        (is_defined_1.isDefined(outline) && outline !== false ? " button-outline" : "") +
        (is_defined_1.isDefined(clear) && clear !== false ? " button-clear" : "");
    return (React.createElement("button", Object.assign({}, Object.assign({ className }, props))));
};
exports.LinkButton = (xProps) => {
    const { outline, clear } = xProps, props = __rest(xProps, ["outline", "clear"]);
    const className = "button" +
        (is_defined_1.isDefined(outline) && outline !== false ? " button-outline" : "") +
        (is_defined_1.isDefined(clear) && clear !== false ? " button-clear" : "");
    return (React.createElement("a", Object.assign({}, Object.assign({ className }, props))));
};
exports.InputButton = (xProps) => {
    const { outline, clear } = xProps, props = __rest(xProps, ["outline", "clear"]);
    const className = "button" +
        (is_defined_1.isDefined(outline) && outline !== false ? " button-outline" : "") +
        (is_defined_1.isDefined(clear) && clear !== false ? " button-clear" : "");
    return (React.createElement("input", Object.assign({}, Object.assign({ className }, props))));
};
//# sourceMappingURL=button.js.map