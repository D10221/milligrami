(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define("Milligrami", ["React"], factory);
	else if(typeof exports === 'object')
		exports["Milligrami"] = factory(require("React"));
	else
		root["Milligrami"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefined = function (x) { return typeof x !== "undefined"; };
exports.isUndefined = function (x) { return !exports.isDefined(x); };
exports.isUndefinedOrFalse = function (x) { return exports.isUndefined(x) || x === false; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 * TODO: HOC , possibly taking ButtonProps|LinkButtonProps|InputButtonProps
 *  return Button|Link|Input?
 *  not returning always the same thing smells
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = __webpack_require__(0);
var is_defined_1 = __webpack_require__(1);
exports.Button = function (xProps) {
    var outline = xProps.outline, clear = xProps.clear, props = __rest(xProps, ["outline", "clear"]);
    var className = "button" +
        (is_defined_1.isDefined(outline) && outline !== false ? " button-outline" : "") +
        (is_defined_1.isDefined(clear) && clear !== false ? " button-clear" : "");
    return (React.createElement("button", __assign({}, __assign({ className: className }, props))));
};
exports.LinkButton = function (xProps) {
    var outline = xProps.outline, clear = xProps.clear, props = __rest(xProps, ["outline", "clear"]);
    var className = "button" +
        (is_defined_1.isDefined(outline) && outline !== false ? " button-outline" : "") +
        (is_defined_1.isDefined(clear) && clear !== false ? " button-clear" : "");
    return (React.createElement("a", __assign({}, __assign({ className: className }, props))));
};
exports.InputButton = function (xProps) {
    var outline = xProps.outline, clear = xProps.clear, props = __rest(xProps, ["outline", "clear"]);
    var className = "button" +
        (is_defined_1.isDefined(outline) && outline !== false ? " button-outline" : "") +
        (is_defined_1.isDefined(clear) && clear !== false ? " button-clear" : "");
    return (React.createElement("input", __assign({}, __assign({ className: className }, props))));
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = __webpack_require__(0);
/**
 * Clear any float
 */
exports.ClearFix = function (xProps) {
    var className = xProps.className, props = __rest(xProps, ["className"]);
    var augmented = className + " clearfix";
    return (React.createElement("div", __assign({}, __assign({ className: augmented }, props))));
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
/**
 * Element ?
 */
exports.Codes = function (props) { return (React.createElement("pre", null,
    React.createElement("code", __assign({}, props)))); };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = __webpack_require__(0);
/**
 * a <div/> column
 */
exports.Column = function (xProps) {
    var columnWidth = xProps.columnWidth, offset = xProps.offset, props = __rest(xProps, ["columnWidth", "offset"]);
    var className = "column" +
        (!columnWidth ? "" : " column-" + columnWidth) +
        (!offset ? "" : " column-offset-" + offset);
    return (React.createElement("div", __assign({}, __assign({ className: className }, props))));
};
/**
 * same as @see {Column} but with a <sapn/> instead of a <div/>
 */
exports.ColumnSpan = function (xProps) {
    var columnWidth = xProps.columnWidth, offset = xProps.offset, props = __rest(xProps, ["columnWidth", "offset"]);
    var className = "column" +
        (!columnWidth ? "" : " column-" + columnWidth) +
        (!offset ? "" : " column-offset-" + offset);
    return React.createElement("span", __assign({}, __assign({ className: className }, props)));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = __webpack_require__(0);
exports.Container = function (xProps) {
    var className = xProps.className, props = __rest(xProps, ["className"]);
    var augmented = "container " + className;
    return (React.createElement("div", __assign({}, __assign({ augmented: augmented }, props))));
};
exports.ContainerSection = function (xProps) {
    var className = xProps.className, props = __rest(xProps, ["className"]);
    var augmented = "container " + className;
    return (React.createElement("section", __assign({}, __assign({ augmented: augmented }, props))));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = __webpack_require__(0);
exports.Float = function (xProps) {
    var xFloat = xProps.xFloat, className = xProps.className, props = __rest(xProps, ["xFloat", "className"]);
    var cname = className +
        (xFloat === "left"
            ? " float-left"
            : " float-right");
    return (React.createElement("div", __assign({}, __assign({ className: cname }, props))));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = __webpack_require__(0);
var is_defined_1 = __webpack_require__(1);
exports.Label = function (xProps) {
    var inLine = xProps.inLine, className = xProps.className, props = __rest(xProps, ["inLine", "className"]);
    var augmented = className +
        (is_defined_1.isUndefinedOrFalse(inLine) ? "" : " label-inline");
    return (React.createElement("label", __assign({}, __assign({ className: augmented }, props))));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = __webpack_require__(0);
var is_defined_1 = __webpack_require__(1);
/**
 *
 */
exports.Row = function (xProps) {
    var rowWrap = xProps.rowWrap, rowNoPadding = xProps.rowNoPadding, rowTop = xProps.rowTop, rowBottom = xProps.rowBottom, rowCenter = xProps.rowCenter, rowStretch = xProps.rowStretch, rowBaseline = xProps.rowBaseline, props = __rest(xProps, ["rowWrap", "rowNoPadding", "rowTop", "rowBottom", "rowCenter", "rowStretch", "rowBaseline"]);
    var className = "row" +
        (is_defined_1.isUndefinedOrFalse(rowWrap) ? "" : " row-wrap") +
        (is_defined_1.isUndefinedOrFalse(rowNoPadding) ? "" : " row-no-padding") +
        (is_defined_1.isUndefinedOrFalse(rowTop) ? "" : " row-top") +
        (is_defined_1.isUndefinedOrFalse(rowBottom) ? "" : " row-bottom") +
        (is_defined_1.isUndefinedOrFalse(rowCenter) ? "" : " row-center") +
        (is_defined_1.isUndefinedOrFalse(rowStretch) ? "" : " row-stretch") +
        (is_defined_1.isUndefinedOrFalse(rowStretch) ? "" : " row-baseline");
    return (React.createElement("div", __assign({}, __assign({ className: className }, props))));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Milligram's styled elements
 */
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ })
/******/ ]);
});