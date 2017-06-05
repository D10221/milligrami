"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.ButtonLinkFty = (...types) => (props) => {
    return (React.createElement("a", Object.assign({ className: `button ${types.map(x => `button-${x}`).join(" ")}` }, props)));
};
//# sourceMappingURL=button-link-fty.js.map