/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animate.ts":
/*!************************!*\
  !*** ./src/animate.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Animate = void 0;
var createElement_1 = __webpack_require__(/*! ./utils/createElement */ "./src/utils/createElement.ts");
var framesMobile_1 = __webpack_require__(/*! ./framesMobile */ "./src/framesMobile.ts");
var Animate = /** @class */ (function () {
    function Animate(options) {
        var _this = this;
        var _a, _b, _c, _d;
        this.frameTime = 2083 / 50;
        this.getFrames = function (options) {
            if (options.size === "300x250" || options.size === "480x480") {
                return framesMobile_1.getMobileFrames(options, _this.frameTime);
            }
        };
        this.head = document.getElementsByTagName("head");
        (_a = this.head[0]) === null || _a === void 0 ? void 0 : _a.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.eot" } }));
        (_b = this.head[0]) === null || _b === void 0 ? void 0 : _b.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.eot?#iefix" } }));
        (_c = this.head[0]) === null || _c === void 0 ? void 0 : _c.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.woff2" } }));
        (_d = this.head[0]) === null || _d === void 0 ? void 0 : _d.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.woff" } }));
        var frames = this.getFrames(options);
        this.canvas = document.getElementById(options.id);
        var _e = __read(options.size.split("x"), 2), x = _e[0], y = _e[1];
        this.canvas.style.width = x + "px";
        this.canvas.style.height = y + "px";
        frames.forEach(function (frame) {
            var _a;
            if (frame.url) {
                (_a = _this.head[0]) === null || _a === void 0 ? void 0 : _a.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: frame.url } }));
            }
            setTimeout(function () {
                var _a;
                var element = createElement_1.createDivElement({ attribute: (_a = { class: frame.class + " poa" }, _a["data-frame"] = frame.frame, _a) });
                element.style.width = frame.dimension.width + "px";
                element.style.height = frame.dimension.height + "px";
                element.style.top = frame.position.top + "px";
                element.style.left = frame.position.left + "px";
                if (frame.url) {
                    element.style.backgroundImage = "url(\"" + frame.url + "\")";
                }
                if (frame.text) {
                    element.innerHTML = frame.text;
                }
                Object.keys(frame.style || {}).forEach(function (key) {
                    element.style[key] = frame.style[key];
                });
                setTimeout(function () {
                    Object.keys(frame.nextStyle || {}).forEach(function (key) {
                        element.style[key] = frame.nextStyle[key];
                    });
                }, _this.frameTime);
                _this.canvas.appendChild(element);
            }, frame.frame * _this.frameTime);
        });
    }
    return Animate;
}());
exports.Animate = Animate;


/***/ }),

/***/ "./src/blackBoxes.ts":
/*!***************************!*\
  !*** ./src/blackBoxes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBlackBoxes = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
var blackBoxes480x480 = function (ratio) {
    if (ratio === void 0) { ratio = 1; }
    return [
        {
            frame: 2,
            class: 'blackBox',
            position: utils_1.leftTop(0, 0, ratio),
            dimension: utils_1.widthHeight(134, 22, ratio),
        },
        {
            frame: 3,
            class: 'blackBox',
            position: utils_1.leftTop(0, 400, ratio),
            dimension: utils_1.widthHeight(32, 33, ratio),
        },
        {
            frame: 4,
            class: 'blackBox',
            position: utils_1.leftTop(62, 62, ratio),
            dimension: utils_1.widthHeight(19, 19, ratio),
        },
        {
            frame: 6,
            class: 'blackBox',
            position: utils_1.leftTop(32, 370, ratio),
            dimension: utils_1.widthHeight(9, 8, ratio),
        },
        {
            frame: 9,
            class: 'blackBox',
            position: utils_1.leftTop(370, 55, ratio),
            dimension: utils_1.widthHeight(11, 11, ratio),
        },
        {
            frame: 11,
            class: 'blackBox',
            position: utils_1.leftTop(420, 0, ratio),
            dimension: utils_1.widthHeight(27, 35, ratio),
        },
        {
            frame: 14,
            class: 'blackBox',
            position: utils_1.leftTop(399, 35, ratio),
            dimension: utils_1.widthHeight(21, 21, ratio),
        },
        {
            frame: 15,
            class: 'blackBox',
            position: utils_1.leftTop(79, 414, ratio),
            dimension: utils_1.widthHeight(18, 19, ratio),
        },
        {
            frame: 16,
            class: 'blackBox',
            position: utils_1.leftTop(315, 0, ratio),
            dimension: utils_1.widthHeight(55, 34, ratio),
        },
        {
            frame: 17,
            class: 'blackBox',
            position: utils_1.leftTop(0, 0, ratio),
            dimension: utils_1.widthHeight(47, 60, ratio),
        },
        {
            frame: 19,
            class: 'blackBox',
            position: utils_1.leftTop(134, 22, ratio),
            dimension: utils_1.widthHeight(39, 39, ratio),
        },
        {
            frame: 19,
            class: 'blackBox',
            position: utils_1.leftTop(447, 0, ratio),
            dimension: utils_1.widthHeight(33, 88, ratio),
        },
        {
            frame: 20,
            class: 'blackBox',
            position: utils_1.leftTop(125, 461, ratio),
            dimension: utils_1.widthHeight(18, 19, ratio),
        },
        {
            frame: 23,
            class: 'blackBox',
            position: utils_1.leftTop(0, 433, ratio),
            dimension: utils_1.widthHeight(79, 47, ratio),
        },
    ];
};
var blackBoxes300x250 = function (ratio) {
    var diff = 80.2;
    return [
        {
            frame: 2,
            class: 'blackBox',
            position: utils_1.leftTop(0, 0, ratio),
            dimension: utils_1.widthHeight(134, 22, ratio),
        },
        {
            frame: 3,
            class: 'blackBox',
            position: utils_1.leftTop(0, 400 - diff, ratio),
            dimension: utils_1.widthHeight(32, 33, ratio),
        },
        {
            frame: 4,
            class: 'blackBox',
            position: utils_1.leftTop(62, 62, ratio),
            dimension: utils_1.widthHeight(19, 19, ratio),
        },
        {
            frame: 6,
            class: 'blackBox',
            position: utils_1.leftTop(32, 370 - diff, ratio),
            dimension: utils_1.widthHeight(9, 8, ratio),
        },
        {
            frame: 9,
            class: 'blackBox',
            position: utils_1.leftTop(1043, 220, 300 / 1373),
            dimension: utils_1.widthHeight(18, 18, 300 / 1373),
        },
        {
            frame: 11,
            class: 'blackBox',
            position: utils_1.leftTop(420, 0, ratio),
            dimension: utils_1.widthHeight(27, 35, ratio),
        },
        {
            frame: 14,
            class: 'blackBox',
            position: utils_1.leftTop(399, 35, ratio),
            dimension: utils_1.widthHeight(21, 21, ratio),
        },
        {
            frame: 15,
            class: 'blackBox',
            position: utils_1.leftTop(79, 414 - diff, ratio),
            dimension: utils_1.widthHeight(18, 19, ratio),
        },
        {
            frame: 16,
            class: 'blackBox',
            position: utils_1.leftTop(315, 0, ratio),
            dimension: utils_1.widthHeight(55, 34, ratio),
        },
        {
            frame: 17,
            class: 'blackBox',
            position: utils_1.leftTop(0, 0, ratio),
            dimension: utils_1.widthHeight(47, 60, ratio),
        },
        {
            frame: 19,
            class: 'blackBox',
            position: utils_1.leftTop(134, 22, ratio),
            dimension: utils_1.widthHeight(39, 39, ratio),
        },
        {
            frame: 19,
            class: 'blackBox',
            position: utils_1.leftTop(447, 0, ratio),
            dimension: utils_1.widthHeight(33, 88, ratio),
        },
        {
            frame: 20,
            class: 'blackBox',
            position: utils_1.leftTop(125, 461 - diff, ratio),
            dimension: utils_1.widthHeight(18, 19, ratio),
        },
        {
            frame: 23,
            class: 'blackBox',
            position: utils_1.leftTop(0, 433 - diff, ratio),
            dimension: utils_1.widthHeight(79, 47, ratio),
        },
    ];
};
exports.getBlackBoxes = function (size, ratio) {
    if (size === '480x480') {
        return blackBoxes480x480(ratio);
    }
    if (size === '300x250') {
        return blackBoxes300x250(ratio);
    }
};


/***/ }),

/***/ "./src/framesMobile.ts":
/*!*****************************!*\
  !*** ./src/framesMobile.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMobileFrames = void 0;
var blackBoxes_1 = __webpack_require__(/*! ./blackBoxes */ "./src/blackBoxes.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
exports.getMobileFrames = function (_a, frameTime) {
    var _b;
    var spray = _a.spray, icon = _a.icon, language = _a.language, size = _a.size, ratio = _a.ratio, text_1 = _a.text_1, text_2 = _a.text_2;
    return __spread([
        {
            frame: 0,
            class: 'image',
            position: (size === "300x250" ? utils_1.leftTop(280, 100, ratio) : utils_1.leftTop(275, 164, ratio)),
            dimension: utils_1.widthHeight(156.2, 471.8, ratio),
            url: "./i_spray_" + spray + ".png",
            style: {
                rotate: "9.695deg",
                zIndex: "1",
                animation: (size === "300x250" ? "moveSprayLess" : "moveSpray") + " 4000ms linear infinite"
            }
        }
    ], blackBoxes_1.getBlackBoxes(size, ratio), [
        {
            frame: 25,
            class: 'image',
            position: utils_1.leftTop(15, 96, ratio),
            dimension: utils_1.widthHeight(320, 71, ratio),
            url: "./i_0_CTAbutton" + language + ".png",
            style: {
                opacity: '0',
                transition: "opacity " + 6 * frameTime + "ms"
            },
            nextStyle: {
                opacity: '1'
            }
        },
        {
            frame: 31,
            class: 'image',
            position: utils_1.leftTop(259, 149, ratio),
            dimension: utils_1.widthHeight(29, 43, ratio),
            url: './i_click.png',
            style: {
                opacity: '0',
                transition: "opacity " + 4 * frameTime + "ms",
                animation: "moveCursor 2000ms infinite"
            },
            nextStyle: {
                opacity: '1'
            }
        },
        {
            frame: 37,
            class: 'text',
            position: utils_1.leftTop(30, 172, ratio),
            dimension: utils_1.widthHeight(400, 34, ratio),
            text: text_1,
            style: {
                backgroundSize: "auto 34px !important",
                fontSize: 35 * ratio + "px"
            }
        },
        {
            frame: 42,
            class: 'text',
            position: utils_1.leftTop(30, 218, ratio),
            dimension: utils_1.widthHeight(400, 34, ratio),
            text: text_2,
            style: {
                backgroundSize: "auto 34px !important",
                fontSize: 35 * ratio + "px"
            }
        },
        {
            frame: 52,
            class: 'image',
            position: utils_1.leftTop((size === "300x250" ? 143 : 96), (size === "300x250" ? 260 : 278), ratio),
            dimension: (_b = {},
                _b["keyboard"] = utils_1.widthHeight(155, 97, ratio * (size === "300x250" ? 341 / 428 : 1)),
                _b["gameboy"] = utils_1.widthHeight(360, 239, 0.4 * ratio * (size === "300x250" ? 341 / 428 : 1)),
                _b["umbrella"] = utils_1.widthHeight(762, 727, 0.2 * ratio * (size === "300x250" ? 341 / 428 : 1)),
                _b["sun_umbrella"] = utils_1.widthHeight(1479, 1481, 0.12 * ratio * (size === "300x250" ? 341 / 428 : 1)),
                _b)[icon],
            url: "./i_icon_" + icon + ".png",
            style: {
                opacity: '0',
                transition: "opacity " + 5 * frameTime + "ms",
                transform: "scale(1.05)",
                animation: "pulse " + 23 * frameTime + "ms"
            },
            nextStyle: {
                opacity: '1'
            }
        },
    ]);
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
var animate_1 = __webpack_require__(/*! ./animate */ "./src/animate.ts");
exports.init = function (options) {
    window['app'] = {
        animate: new animate_1.Animate(options || {
            id: "canvas",
            spray: "summer",
            icon: "gameboy",
            language: "SK",
            text_1: "A BUĎ",
            text_2: "MVP LÉTA",
            // size: "480x480",
            size: "300x250",
            // ratio: 1,
            ratio: 300 / 480,
        }),
    };
};
window['init'] = exports.init;


/***/ }),

/***/ "./src/utils/createElement.ts":
/*!************************************!*\
  !*** ./src/utils/createElement.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDivElement = exports.createButtonElement = exports.createElement = void 0;
function createElement(_a) {
    var elementName = _a.element, _b = _a.attribute, attribute = _b === void 0 ? undefined : _b, _c = _a.childrens, childrens = _c === void 0 ? undefined : _c;
    if (typeof (childrens) === "undefined") {
        childrens = [];
    }
    var element = document.createElement(elementName);
    if (typeof (attribute) === 'object') {
        for (var key in attribute) {
            element.setAttribute(key, attribute[key]);
        }
    }
    if (!Array.isArray(childrens)) {
        childrens = [childrens];
    }
    for (var i = 0; i < childrens.length; i++) {
        if (childrens[i].tagName) {
            element.appendChild(childrens[i]);
        }
        else {
            element.appendChild(document.createTextNode(childrens[i]));
        }
    }
    return element;
}
exports.createElement = createElement;
exports.createButtonElement = function (_a) {
    var _b = _a.attribute, attribute = _b === void 0 ? undefined : _b, _c = _a.childrens, childrens = _c === void 0 ? undefined : _c;
    return createElement({
        element: 'button',
        attribute: attribute,
        childrens: childrens
    });
};
exports.createDivElement = function (_a) {
    var _b = _a.attribute, attribute = _b === void 0 ? undefined : _b, _c = _a.childrens, childrens = _c === void 0 ? undefined : _c;
    return createElement({
        element: 'div',
        attribute: attribute,
        childrens: childrens
    });
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.widthHeight = exports.leftTop = void 0;
var createElement_1 = __webpack_require__(/*! ./createElement */ "./src/utils/createElement.ts");
Object.defineProperty(exports, "createElement", ({ enumerable: true, get: function () { return createElement_1.createElement; } }));
exports.leftTop = function (left, top, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        left: left * ratio,
        top: top * ratio,
    });
};
exports.widthHeight = function (width, height, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        width: width * ratio,
        height: height * ratio,
    });
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9hbmltYXRlLnRzIiwid2VicGFjazovL3Byb2dyYW0vLi9zcmMvYmxhY2tCb3hlcy50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL2ZyYW1lc01vYmlsZS50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3Byb2dyYW0vLi9zcmMvdXRpbHMvY3JlYXRlRWxlbWVudC50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL3Byb2dyYW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2dyYW0vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2dyYW0vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURpdkVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlscy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRNb2JpbGVGcmFtZXMgfSBmcm9tIFwiLi9mcmFtZXNNb2JpbGVcIjtcblxuZXhwb3J0IHR5cGUgT3B0aW9ucyA9IHtcbiAgc3ByYXk6IFwic3VtbWVyXCIgfCBcImRhcmtcIixcbiAgaWNvbjogXCJrZXlib2FyZFwiIHwgXCJ1bWJyZWxsYVwiIHwgXCJzdW5fdW1icmVsbGFcIiB8IFwiZ2FtZWJveVwiLFxuICBsYW5ndWFnZTogXCJDWlwiIHwgXCJTS1wiLFxuICB0ZXh0XzE/OiBzdHJpbmdcbiAgdGV4dF8yPzogc3RyaW5nXG4gIHNpemU6IFwiNDgweDQ4MFwiIHwgXCIzMDB4MjUwXCIsXG4gIHJhdGlvOiBudW1iZXIsXG4gIGlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgRnJhbWUgPSB7XG4gIGZyYW1lOiBudW1iZXIsXG4gIGNsYXNzOiBzdHJpbmcsXG4gIHBvc2l0aW9uOiB7IGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIgfVxuICBkaW1lbnNpb246IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfVxuICB0ZXh0Pzogc3RyaW5nXG4gIHVybD86IHN0cmluZ1xuICBzdHlsZT86IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj5cbiAgbmV4dFN0eWxlPzogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPlxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0ZSB7XG4gIGZyYW1lVGltZSA9IDIwODMgLyA1MFxuXG4gIGdldEZyYW1lcyA9IChvcHRpb25zOiBPcHRpb25zKTogRnJhbWVbXSA9PiB7XG4gICAgaWYgKG9wdGlvbnMuc2l6ZSA9PT0gXCIzMDB4MjUwXCIgfHwgb3B0aW9ucy5zaXplID09PSBcIjQ4MHg0ODBcIikge1xuICAgICAgcmV0dXJuIGdldE1vYmlsZUZyYW1lcyhvcHRpb25zLCB0aGlzLmZyYW1lVGltZSlcbiAgICB9XG4gIH1cblxuICBjYW52YXNcbiAgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICB0aGlzLmhlYWRbMF0/LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGluaycsIGF0dHJpYnV0ZTogeyByZWw6IFwicHJlZmV0Y2hcIiwgaHJlZjogXCIuL2ZvbnRzL3JpZnRvbi1yZWd1bGFyLmVvdFwiIH0gfSkpXG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci5lb3Q/I2llZml4XCIgfSB9KSlcbiAgICB0aGlzLmhlYWRbMF0/LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGluaycsIGF0dHJpYnV0ZTogeyByZWw6IFwicHJlZmV0Y2hcIiwgaHJlZjogXCIuL2ZvbnRzL3JpZnRvbi1yZWd1bGFyLndvZmYyXCIgfSB9KSlcbiAgICB0aGlzLmhlYWRbMF0/LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGluaycsIGF0dHJpYnV0ZTogeyByZWw6IFwicHJlZmV0Y2hcIiwgaHJlZjogXCIuL2ZvbnRzL3JpZnRvbi1yZWd1bGFyLndvZmZcIiB9IH0pKVxuXG4gICAgY29uc3QgZnJhbWVzID0gdGhpcy5nZXRGcmFtZXMob3B0aW9ucylcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZClcblxuICAgIGNvbnN0IFt4LCB5XSA9IG9wdGlvbnMuc2l6ZS5zcGxpdChcInhcIilcblxuICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gYCR7eH1weGBcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHt5fXB4YFxuXG4gICAgZnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICBpZiAoZnJhbWUudXJsKSB7XG4gICAgICAgIHRoaXMuaGVhZFswXT8uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdsaW5rJywgYXR0cmlidXRlOiB7IHJlbDogXCJwcmVmZXRjaFwiLCBocmVmOiBmcmFtZS51cmwgfSB9KSlcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KHsgYXR0cmlidXRlOiB7IGNsYXNzOiBgJHtmcmFtZS5jbGFzc30gcG9hYCwgW1wiZGF0YS1mcmFtZVwiXTogZnJhbWUuZnJhbWUgfSB9KVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtmcmFtZS5kaW1lbnNpb24ud2lkdGh9cHhgXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7ZnJhbWUuZGltZW5zaW9uLmhlaWdodH1weGBcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtmcmFtZS5wb3NpdGlvbi50b3B9cHhgXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2ZyYW1lLnBvc2l0aW9uLmxlZnR9cHhgXG5cbiAgICAgICAgaWYgKGZyYW1lLnVybCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7ZnJhbWUudXJsfVwiKWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcmFtZS50ZXh0KSB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBmcmFtZS50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZnJhbWUuc3R5bGUgfHwge30pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBmcmFtZS5zdHlsZVtrZXldXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoZnJhbWUubmV4dFN0eWxlIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBmcmFtZS5uZXh0U3R5bGVba2V5XVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIHRoaXMuZnJhbWVUaW1lKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICB9LCBmcmFtZS5mcmFtZSAqIHRoaXMuZnJhbWVUaW1lKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRlXCI7XG5pbXBvcnQgeyBsZWZ0VG9wLCB3aWR0aEhlaWdodCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IGJsYWNrQm94ZXM0ODB4NDgwID0gKHJhdGlvOiBudW1iZXIgPSAxKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDIsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTM0LCAyMiwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDQwMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMiwgMzMsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg2MiwgNjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTksIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzIsIDM3MCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg5LCA4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzcwLCA1NSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMSwgMTEsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDIwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI3LCAzNSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzOTksIDM1LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDIxLCAyMSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg3OSwgNDE0LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE4LCAxOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMTUsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTUsIDM0LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDcsIDYwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEzNCwgMjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzksIDM5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDQ0NywgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMywgODgsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTI1LCA0NjEsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDQzMywgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg3OSwgNDcsIHJhdGlvKSxcbiAgICB9LFxuICBdXG59XG5cbmNvbnN0IGJsYWNrQm94ZXMzMDB4MjUwID0gKHJhdGlvOiBudW1iZXIpID0+IHtcbiAgY29uc3QgZGlmZiA9IDgwLjJcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMzQsIDIyLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDAwIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMiwgMzMsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg2MiwgNjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTksIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzIsIDM3MCAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoOSwgOCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEwNDMsIDIyMCwgMzAwLzEzNzMpLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTgsIDMwMC8xMzczKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDIwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI3LCAzNSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzOTksIDM1LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDIxLCAyMSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg3OSwgNDE0IC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzE1LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDU1LCAzNCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE3LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQ3LCA2MCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMzQsIDIyLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM5LCAzOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0NDcsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzMsIDg4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjAsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEyNSwgNDYxIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDMzIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg3OSwgNDcsIHJhdGlvKSxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBnZXRCbGFja0JveGVzID0gKHNpemU6IE9wdGlvbnNbJ3NpemUnXSwgcmF0aW86IG51bWJlcikgPT4ge1xuICBpZiAoc2l6ZSA9PT0gJzQ4MHg0ODAnKSB7XG4gICAgcmV0dXJuIGJsYWNrQm94ZXM0ODB4NDgwKHJhdGlvKVxuICB9XG4gIGlmIChzaXplID09PSAnMzAweDI1MCcpIHtcbiAgICByZXR1cm4gYmxhY2tCb3hlczMwMHgyNTAocmF0aW8pXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGVcIjtcbmltcG9ydCB7IGdldEJsYWNrQm94ZXMgfSBmcm9tIFwiLi9ibGFja0JveGVzXCI7XG5pbXBvcnQgeyBsZWZ0VG9wLCB3aWR0aEhlaWdodCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRNb2JpbGVGcmFtZXMgPSAoeyBzcHJheSwgaWNvbiwgbGFuZ3VhZ2UsIHNpemUsIHJhdGlvLCB0ZXh0XzEsIHRleHRfMiB9OiBPcHRpb25zLCBmcmFtZVRpbWU6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAwLFxuICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgcG9zaXRpb246IChzaXplID09PSBcIjMwMHgyNTBcIiA/IGxlZnRUb3AoMjgwLCAxMDAsIHJhdGlvKSA6IGxlZnRUb3AoMjc1LCAxNjQsIHJhdGlvKSksXG4gICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTU2LjIsIDQ3MS44LCByYXRpbyksXG5cbiAgICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgcm90YXRlOiBcIjkuNjk1ZGVnXCIsXG4gICAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgICBhbmltYXRpb246IGAke3NpemUgPT09IFwiMzAweDI1MFwiID8gXCJtb3ZlU3ByYXlMZXNzXCIgOiBcIm1vdmVTcHJheVwifSA0MDAwbXMgbGluZWFyIGluZmluaXRlYFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLi4uZ2V0QmxhY2tCb3hlcyhzaXplLCByYXRpbyksXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAyNSxcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDE1LCA5NiwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyMCwgNzEsIHJhdGlvKSxcblxuICAgICAgICB1cmw6IGAuL2lfMF9DVEFidXR0b24ke2xhbmd1YWdlfS5wbmdgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezYgKiBmcmFtZVRpbWV9bXNgXG4gICAgICAgIH0sXG4gICAgICAgIG5leHRTdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmcmFtZTogMzEsXG4gICAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgyNTksIDE0OSwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI5LCA0MywgcmF0aW8pLFxuXG4gICAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICAgIGFuaW1hdGlvbjogYG1vdmVDdXJzb3IgMjAwMG1zIGluZmluaXRlYFxuICAgICAgICB9LFxuICAgICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDM3LFxuICAgICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMCwgMTcyLCByYXRpbyksXG4gICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDAwLCAzNCwgcmF0aW8pLFxuXG4gICAgICAgIHRleHQ6IHRleHRfMSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvIDM0cHggIWltcG9ydGFudFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBgJHszNSpyYXRpb31weGBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDQyLFxuICAgICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMCwgMjE4LCByYXRpbyksXG4gICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDAwLCAzNCwgcmF0aW8pLFxuXG4gICAgICAgIHRleHQ6IHRleHRfMixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvIDM0cHggIWltcG9ydGFudFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBgJHszNSpyYXRpb31weGBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDUyLFxuICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoKHNpemUgPT09IFwiMzAweDI1MFwiID8gMTQzIDogOTYpLCAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAyNjAgOiAyNzgpLCByYXRpbyksXG4gICAgICAgIGRpbWVuc2lvbjoge1xuICAgICAgICAgIFtcImtleWJvYXJkXCJdOiB3aWR0aEhlaWdodCgxNTUsIDk3LCByYXRpbyAqIChzaXplID09PSBcIjMwMHgyNTBcIiA/IDM0MSAvIDQyOCA6IDEpKSxcbiAgICAgICAgICBbXCJnYW1lYm95XCJdOiB3aWR0aEhlaWdodCgzNjAsIDIzOSwgMC40ICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgICAgW1widW1icmVsbGFcIl06IHdpZHRoSGVpZ2h0KDc2MiwgNzI3LCAwLjIgKiByYXRpbyAqIChzaXplID09PSBcIjMwMHgyNTBcIiA/IDM0MSAvIDQyOCA6IDEpKSxcbiAgICAgICAgICBbXCJzdW5fdW1icmVsbGFcIl06IHdpZHRoSGVpZ2h0KDE0NzksIDE0ODEsIDAuMTIgKiByYXRpbyAqIChzaXplID09PSBcIjMwMHgyNTBcIiA/IDM0MSAvIDQyOCA6IDEpKSxcbiAgICAgICAgfVtpY29uXSxcblxuICAgICAgICB1cmw6IGAuL2lfaWNvbl8ke2ljb259LnBuZ2AsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7NSAqIGZyYW1lVGltZX1tc2AsXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgJHsyMyAqIGZyYW1lVGltZX1tc2BcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgXVxufSIsImltcG9ydCB7IEFuaW1hdGUsIE9wdGlvbnMgfSBmcm9tICcuL2FuaW1hdGUnXG5cbmV4cG9ydCBjb25zdCBpbml0ID0gKG9wdGlvbnM/OiBPcHRpb25zKSA9PiB7XG4gIHdpbmRvd1snYXBwJ10gPSB7XG4gICAgYW5pbWF0ZTogbmV3IEFuaW1hdGUob3B0aW9ucyB8fCB7XG4gICAgICBpZDogXCJjYW52YXNcIixcbiAgICAgIHNwcmF5OiBcInN1bW1lclwiLFxuICAgICAgaWNvbjogXCJnYW1lYm95XCIsXG4gICAgICBsYW5ndWFnZTogXCJTS1wiLFxuXG4gICAgICB0ZXh0XzE6IFwiQSBCVcSOXCIsXG4gICAgICB0ZXh0XzI6IFwiTVZQIEzDiVRBXCIsXG5cbiAgICAgIC8vIHNpemU6IFwiNDgweDQ4MFwiLFxuICAgICAgc2l6ZTogXCIzMDB4MjUwXCIsXG5cbiAgICAgIC8vIHJhdGlvOiAxLFxuICAgICAgcmF0aW86IDMwMC80ODAsXG4gICAgfSksXG4gIH1cbn1cbndpbmRvd1snaW5pdCddID0gaW5pdFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnROYW1lLFxuICAgIGF0dHJpYnV0ZSA9IHVuZGVmaW5lZCxcbiAgICBjaGlsZHJlbnMgPSB1bmRlZmluZWQsXG59KTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0eXBlb2YgKGNoaWxkcmVucykgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gW107XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICBpZiAodHlwZW9mIChhdHRyaWJ1dGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZVtrZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbnMpKSB7XG4gICAgICAgIGNoaWxkcmVucyA9IFtjaGlsZHJlbnNdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbnNbaV0udGFnTmFtZSkge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbnNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbnNbaV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uRWxlbWVudCA9ICh7XG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MQnV0dG9uRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OiAnYnV0dG9uJyxcbiAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICBjaGlsZHJlbnNcbiAgICB9KSBhcyBIVE1MQnV0dG9uRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRGl2RWxlbWVudCA9ICh7XG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MRGl2RWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICBjaGlsZHJlbnNcbiAgICB9KSBhcyBIVE1MRGl2RWxlbWVudFxufVxuIiwiZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vY3JlYXRlRWxlbWVudCdcblxuZXhwb3J0IGNvbnN0IGxlZnRUb3AgPSAobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIGxlZnQ6IGxlZnQgKiByYXRpbyxcbiAgdG9wOiB0b3AgKiByYXRpbyxcbn0pXG5cbmV4cG9ydCBjb25zdCB3aWR0aEhlaWdodCA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIHdpZHRoOiB3aWR0aCAqIHJhdGlvLFxuICBoZWlnaHQ6IGhlaWdodCAqIHJhdGlvLFxufSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==