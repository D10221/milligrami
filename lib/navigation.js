"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { observer } from "mobx-react";
exports.Nav = (props) => {
    return (React.createElement("nav", Object.assign({ className: "navigation" }, props)));
};
exports.NavTitle = (props) => {
    return (React.createElement("a", Object.assign({ className: "navigation-title" }, props)));
};
exports.NavigationList = (props) => {
    return (React.createElement("ul", Object.assign({ className: "navigation-list float-right" }, props)));
};
exports.NavItem = (props) => {
    return (React.createElement("li", Object.assign({ className: "navigation-item" }, props)));
};
exports.NavLink = (props) => {
    return (React.createElement("a", Object.assign({ className: "navigation-link", "data-popover": true }, props)));
};
//# sourceMappingURL=navigation.js.map