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
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
var Animate = /** @class */ (function () {
    function Animate(options) {
        var _this = this;
        var _a, _b, _c, _d;
        this.frameTime = 2083 / 50;
        this.getFrames = function (options) {
            var _a;
            var ratio = options.ratio, language = options.language, spray = options.spray, icon = options.icon, text_1 = options.text_1, text_2 = options.text_2;
            var frameTime = _this.frameTime;
            if (options.size === "300x250" || options.size === "480x480") {
                return framesMobile_1.getMobileFrames(options, _this.frameTime);
            }
            if (options.size === "300x600") {
                return [
                    {
                        frame: 0,
                        class: 'image',
                        position: utils_1.leftTop(360, 1000, ratio),
                        dimension: utils_1.widthHeight(156 * 4, 471 * 4, ratio),
                        url: "./i_spray_" + spray + ".png",
                        style: {
                            rotate: "9.695deg",
                            zIndex: "1",
                            animation: "moveSpray" + " 4000ms linear infinite"
                        }
                    },
                    {
                        frame: 25,
                        class: 'image',
                        position: utils_1.leftTop(32, 388, ratio),
                        dimension: utils_1.widthHeight(1143, 252, ratio),
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
                        position: utils_1.leftTop(259 + 165 * 4, 149 + 109 * 4, ratio),
                        dimension: utils_1.widthHeight(29 * 3, 43 * 3, ratio),
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
                        position: utils_1.leftTop(60, 660, ratio),
                        dimension: utils_1.widthHeight(1000, 170, ratio),
                        text: text_1,
                        style: {
                            backgroundSize: "auto 34px !important",
                            fontSize: 132 * ratio + "px"
                        }
                    },
                    {
                        frame: 42,
                        class: 'text',
                        position: utils_1.leftTop(60, 840, ratio),
                        dimension: utils_1.widthHeight(1100, 170, ratio),
                        text: text_2,
                        style: {
                            backgroundSize: "auto 34px !important",
                            fontSize: 132 * ratio + "px"
                        }
                    },
                    {
                        frame: 52,
                        class: 'image',
                        position: utils_1.leftTop((96), (278 + 190 * 4), ratio),
                        dimension: (_a = {},
                            _a["keyboard"] = utils_1.widthHeight(155, 97, ratio * 2),
                            _a["gameboy"] = utils_1.widthHeight(360, 239, 0.4 * ratio * 2),
                            _a["umbrella"] = utils_1.widthHeight(762, 727, 0.2 * ratio * 2),
                            _a["sun_umbrella"] = utils_1.widthHeight(1479, 1481, 0.12 * ratio * 2),
                            _a)[icon],
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
                    {
                        frame: 1,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(194, 207, ratio),
                        position: utils_1.leftTop(0, 0, ratio),
                    },
                    {
                        frame: 15,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(373, 124, ratio),
                        position: utils_1.leftTop(0, 0, ratio),
                    },
                    {
                        frame: 18,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(66, 260, ratio),
                        position: utils_1.leftTop(0, 0, ratio),
                    },
                    {
                        frame: 17,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(137, 137, ratio),
                        position: utils_1.leftTop(373, 124, ratio),
                    },
                    {
                        frame: 2,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(137, 124, ratio),
                        position: utils_1.leftTop(510, 0, ratio),
                    },
                    {
                        frame: 20,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(68, 68, ratio),
                        position: utils_1.leftTop(116, 260, ratio),
                    },
                    {
                        frame: 22,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(85, 85, ratio),
                        position: utils_1.leftTop(100, 1485, ratio),
                    },
                    {
                        frame: 4,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(140, 140, ratio),
                        position: utils_1.leftBottom(0, 0, ratio),
                    },
                    {
                        frame: 5,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(60, 60, ratio),
                        position: utils_1.leftBottom(140, 140, ratio),
                    },
                    {
                        frame: 17,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(132, 252, ratio),
                        position: utils_1.rightBottom(0, 0, ratio),
                    },
                    {
                        frame: 8,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(236, 104, ratio),
                        position: utils_1.rightBottom(0, 0, ratio),
                    },
                    {
                        frame: 12,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(60, 60, ratio),
                        position: utils_1.rightBottom(132, 252, ratio),
                    },
                    {
                        frame: 15,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(52, 56, ratio),
                        position: utils_1.rightBottom(0, 408, ratio),
                    },
                ];
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
        frames.forEach(function (frame, index) {
            var _a;
            if (frame.url) {
                (_a = _this.head[0]) === null || _a === void 0 ? void 0 : _a.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: frame.url } }));
            }
            setTimeout(function () {
                var _a;
                var element = createElement_1.createDivElement({ attribute: (_a = { class: frame.class + " poa" }, _a["data-frame"] = frame.frame, _a["data-index"] = index, _a) });
                element.style.width = frame.dimension.width + "px";
                element.style.height = frame.dimension.height + "px";
                if ('top' in frame.position) {
                    element.style.top = frame.position.top + "px";
                }
                if ('bottom' in frame.position) {
                    element.style.bottom = frame.position.bottom + "px";
                }
                if ('left' in frame.position) {
                    element.style.left = frame.position.left + "px";
                }
                if ('right' in frame.position) {
                    element.style.right = frame.position.right + "px";
                }
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
            icon: "sun_umbrella",
            language: "CZ",
            text_1: "A léto",
            text_2: "bude tvoje",
            // size: "480x480",
            size: "300x600",
            // ratio: 1,
            ratio: 300 / 1200,
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
exports.widthHeight = exports.rightBottom = exports.leftBottom = exports.leftTop = void 0;
var createElement_1 = __webpack_require__(/*! ./createElement */ "./src/utils/createElement.ts");
Object.defineProperty(exports, "createElement", ({ enumerable: true, get: function () { return createElement_1.createElement; } }));
exports.leftTop = function (left, top, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        left: left * ratio,
        top: top * ratio,
    });
};
exports.leftBottom = function (left, bottom, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        left: left * ratio,
        bottom: bottom * ratio,
    });
};
exports.rightBottom = function (right, bottom, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        right: right * ratio,
        bottom: bottom * ratio,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUs7UUFDcEIsTUFBTSxFQUFFLE1BQU0sR0FBRyxLQUFLO0tBQ3ZCLENBQUM7QUFIK0UsQ0FHL0U7Ozs7Ozs7VUNwQkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2dyYW0vLi9zcmMvYW5pbWF0ZS50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL2JsYWNrQm94ZXMudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9mcmFtZXNNb2JpbGUudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL3V0aWxzL2NyZWF0ZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2dyYW0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXZFbGVtZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0TW9iaWxlRnJhbWVzIH0gZnJvbSBcIi4vZnJhbWVzTW9iaWxlXCI7XG5pbXBvcnQgeyBsZWZ0Qm90dG9tLCBsZWZ0VG9wLCByaWdodEJvdHRvbSwgd2lkdGhIZWlnaHQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICBzcHJheTogXCJzdW1tZXJcIiB8IFwiZGFya1wiLFxuICBpY29uOiBcImtleWJvYXJkXCIgfCBcInVtYnJlbGxhXCIgfCBcInN1bl91bWJyZWxsYVwiIHwgXCJnYW1lYm95XCIsXG4gIGxhbmd1YWdlOiBcIkNaXCIgfCBcIlNLXCIsXG4gIHRleHRfMT86IHN0cmluZ1xuICB0ZXh0XzI/OiBzdHJpbmdcbiAgc2l6ZTogXCI0ODB4NDgwXCIgfCBcIjMwMHgyNTBcIiB8IFwiMzAweDYwMFwiLFxuICByYXRpbzogbnVtYmVyLFxuICBpZDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEZyYW1lID0ge1xuICBmcmFtZTogbnVtYmVyLFxuICBjbGFzczogc3RyaW5nLFxuICBwb3NpdGlvbjogeyBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyIH0gfCB7IGxlZnQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIgfSB8IHsgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIgfVxuICBkaW1lbnNpb246IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfVxuICB0ZXh0Pzogc3RyaW5nXG4gIHVybD86IHN0cmluZ1xuICBzdHlsZT86IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj5cbiAgbmV4dFN0eWxlPzogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPlxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0ZSB7XG4gIGZyYW1lVGltZSA9IDIwODMgLyA1MFxuXG4gIGdldEZyYW1lcyA9IChvcHRpb25zOiBPcHRpb25zKTogRnJhbWVbXSA9PiB7XG4gICAgY29uc3QgeyByYXRpbywgbGFuZ3VhZ2UsIHNwcmF5LCBpY29uLCB0ZXh0XzEsIHRleHRfMiB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IGZyYW1lVGltZSA9IHRoaXMuZnJhbWVUaW1lXG5cbiAgICBpZiAob3B0aW9ucy5zaXplID09PSBcIjMwMHgyNTBcIiB8fCBvcHRpb25zLnNpemUgPT09IFwiNDgweDQ4MFwiKSB7XG4gICAgICByZXR1cm4gZ2V0TW9iaWxlRnJhbWVzKG9wdGlvbnMsIHRoaXMuZnJhbWVUaW1lKVxuICAgIH1cblxuXG5cbiAgICBpZiAob3B0aW9ucy5zaXplID09PSBcIjMwMHg2MDBcIikge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAwLFxuICAgICAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM2MCwgMTAwMCwgcmF0aW8pLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTU2ICogNCwgNDcxICogNCwgcmF0aW8pLFxuXG4gICAgICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHJvdGF0ZTogXCI5LjY5NWRlZ1wiLFxuICAgICAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYCR7XCJtb3ZlU3ByYXlcIn0gNDAwMG1zIGxpbmVhciBpbmZpbml0ZWBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDI1LFxuICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzIsIDM4OCwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExNDMsIDI1MiwgcmF0aW8pLFxuXG4gICAgICAgIHVybDogYC4vaV8wX0NUQWJ1dHRvbiR7bGFuZ3VhZ2V9LnBuZ2AsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7NiAqIGZyYW1lVGltZX1tc2BcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAzMSxcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDI1OSsxNjUqNCwgMTQ5KzEwOSo0LCByYXRpbyksXG4gICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjkgKiAzLCA0MyAqIDMsIHJhdGlvKSxcblxuICAgICAgICB1cmw6ICcuL2lfY2xpY2sucG5nJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs0ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDM3LFxuICAgICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCg2MCwgNjYwLCByYXRpbyksXG4gICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTAwMCwgMTcwLCByYXRpbyksXG5cbiAgICAgICAgdGV4dDogdGV4dF8xLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImF1dG8gMzRweCAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgZm9udFNpemU6IGAkezEzMipyYXRpb31weGBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDQyLFxuICAgICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCg2MCwgODQwLCByYXRpbyksXG4gICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTEwMCwgMTcwLCByYXRpbyksXG5cbiAgICAgICAgdGV4dDogdGV4dF8yLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImF1dG8gMzRweCAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgZm9udFNpemU6IGAkezEzMipyYXRpb31weGBcbiAgICAgICAgfVxuICAgICAgfSxcblxuXG4gICAgICAgICAgICB7XG4gICAgICAgIGZyYW1lOiA1MixcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKCg5NiksICgyNzggKyAxOTAqNCksIHJhdGlvKSxcbiAgICAgICAgZGltZW5zaW9uOiB7XG4gICAgICAgICAgW1wia2V5Ym9hcmRcIl06IHdpZHRoSGVpZ2h0KDE1NSwgOTcsIHJhdGlvICogMiksXG4gICAgICAgICAgW1wiZ2FtZWJveVwiXTogd2lkdGhIZWlnaHQoMzYwLCAyMzksIDAuNCAqIHJhdGlvICogMiksXG4gICAgICAgICAgW1widW1icmVsbGFcIl06IHdpZHRoSGVpZ2h0KDc2MiwgNzI3LCAwLjIgKiByYXRpbyAqIDIpLFxuICAgICAgICAgIFtcInN1bl91bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoMTQ3OSwgMTQ4MSwgMC4xMiAqIHJhdGlvICogMiksXG4gICAgICAgIH1baWNvbl0sXG5cbiAgICAgICAgdXJsOiBgLi9pX2ljb25fJHtpY29ufS5wbmdgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezUgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgICAgICAgIGFuaW1hdGlvbjogYHB1bHNlICR7MjMgKiBmcmFtZVRpbWV9bXNgXG4gICAgICAgIH0sXG4gICAgICAgIG5leHRTdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgICB9XG4gICAgICB9LFxuXG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAxLFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTk0LCAyMDcsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMTUsXG4gICAgICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzNzMsIDEyNCwgcmF0aW8pLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAxOCxcbiAgICAgICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDY2LCAyNjAsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMTcsXG4gICAgICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMzcsIDEzNywgcmF0aW8pLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM3MywgMTI0LCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMixcbiAgICAgICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzNywgMTI0LCByYXRpbyksXG4gICAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoNTEwLCAwLCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMjAsXG4gICAgICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg2OCwgNjgsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMTYsIDI2MCwgcmF0aW8pLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZnJhbWU6IDIyLFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoODUsIDg1LCByYXRpbyksXG4gICAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTAwLCAxNDg1LCByYXRpbyksXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiA0LFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTQwLCAxNDAsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogNSxcbiAgICAgICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDYwLCA2MCwgcmF0aW8pLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDE0MCwgMTQwLCByYXRpbyksXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAxNyxcbiAgICAgICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzMiwgMjUyLCByYXRpbyksXG4gICAgICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiA4LFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjM2LCAxMDQsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogcmlnaHRCb3R0b20oMCwgMCwgcmF0aW8pLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZnJhbWU6IDEyLFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNjAsIDYwLCByYXRpbyksXG4gICAgICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDEzMiwgMjUyLCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMTUsXG4gICAgICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg1MiwgNTYsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogcmlnaHRCb3R0b20oMCwgNDA4LCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgY2FudmFzXG4gIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci5lb3RcIiB9IH0pKVxuICAgIHRoaXMuaGVhZFswXT8uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdsaW5rJywgYXR0cmlidXRlOiB7IHJlbDogXCJwcmVmZXRjaFwiLCBocmVmOiBcIi4vZm9udHMvcmlmdG9uLXJlZ3VsYXIuZW90PyNpZWZpeFwiIH0gfSkpXG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci53b2ZmMlwiIH0gfSkpXG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci53b2ZmXCIgfSB9KSlcblxuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKG9wdGlvbnMpXG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpXG5cbiAgICBjb25zdCBbeCwgeV0gPSBvcHRpb25zLnNpemUuc3BsaXQoXCJ4XCIpXG5cbiAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3h9cHhgXG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7eX1weGBcblxuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmcmFtZS51cmwpIHtcbiAgICAgICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IGZyYW1lLnVybCB9IH0pKVxuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoeyBhdHRyaWJ1dGU6IHsgY2xhc3M6IGAke2ZyYW1lLmNsYXNzfSBwb2FgLCBbXCJkYXRhLWZyYW1lXCJdOiBmcmFtZS5mcmFtZSwgW1wiZGF0YS1pbmRleFwiXTogaW5kZXggfSB9KVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtmcmFtZS5kaW1lbnNpb24ud2lkdGh9cHhgXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7ZnJhbWUuZGltZW5zaW9uLmhlaWdodH1weGBcbiAgICAgICAgaWYgKCd0b3AnIGluIGZyYW1lLnBvc2l0aW9uKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtmcmFtZS5wb3NpdGlvbi50b3B9cHhgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdib3R0b20nIGluIGZyYW1lLnBvc2l0aW9uKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBgJHtmcmFtZS5wb3NpdGlvbi5ib3R0b219cHhgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdsZWZ0JyBpbiBmcmFtZS5wb3NpdGlvbikge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2ZyYW1lLnBvc2l0aW9uLmxlZnR9cHhgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyaWdodCcgaW4gZnJhbWUucG9zaXRpb24pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gYCR7ZnJhbWUucG9zaXRpb24ucmlnaHR9cHhgXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChmcmFtZS51cmwpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ZyYW1lLnVybH1cIilgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJhbWUudGV4dCkge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZnJhbWUudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGZyYW1lLnN0eWxlIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZnJhbWUuc3R5bGVba2V5XVxuICAgICAgICB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGZyYW1lLm5leHRTdHlsZSB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZnJhbWUubmV4dFN0eWxlW2tleV1cbiAgICAgICAgICB9KVxuICAgICAgICB9LCB0aGlzLmZyYW1lVGltZSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgfSwgZnJhbWUuZnJhbWUgKiB0aGlzLmZyYW1lVGltZSlcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb25zIH0gZnJvbSBcIi4vYW5pbWF0ZVwiO1xuaW1wb3J0IHsgbGVmdFRvcCwgd2lkdGhIZWlnaHQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBibGFja0JveGVzNDgweDQ4MCA9IChyYXRpbzogbnVtYmVyID0gMSkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAyLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzNCwgMjIsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCA0MDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzIsIDMzLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNjIsIDYyLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE5LCAxOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDYsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMyLCAzNzAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoOSwgOCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM3MCwgNTUsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTEsIDExLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTEsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDQyMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyNywgMzUsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzk5LCAzNSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyMSwgMjEsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNzksIDQxNCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzE1LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDU1LCAzNCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE3LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQ3LCA2MCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMzQsIDIyLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM5LCAzOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0NDcsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzMsIDg4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjAsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEyNSwgNDYxLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE4LCAxOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIzLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCA0MzMsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNzksIDQ3LCByYXRpbyksXG4gICAgfSxcbiAgXVxufVxuXG5jb25zdCBibGFja0JveGVzMzAweDI1MCA9IChyYXRpbzogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGRpZmYgPSA4MC4yXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDIsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTM0LCAyMiwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDQwMCAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzIsIDMzLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNjIsIDYyLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE5LCAxOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDYsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMyLCAzNzAgLSBkaWZmLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDksIDgsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMDQzLCAyMjAsIDMwMC8xMzczKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE4LCAzMDAvMTM3MyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTEsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDQyMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyNywgMzUsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzk5LCAzNSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyMSwgMjEsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNzksIDQxNCAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTYsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMxNSwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg1NSwgMzQsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0NywgNjAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTM0LCAyMiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzOSwgMzksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDQ3LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMzLCA4OCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMjUsIDQ2MSAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDQzMyAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNzksIDQ3LCByYXRpbyksXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QmxhY2tCb3hlcyA9IChzaXplOiBPcHRpb25zWydzaXplJ10sIHJhdGlvOiBudW1iZXIpID0+IHtcbiAgaWYgKHNpemUgPT09ICc0ODB4NDgwJykge1xuICAgIHJldHVybiBibGFja0JveGVzNDgweDQ4MChyYXRpbylcbiAgfVxuICBpZiAoc2l6ZSA9PT0gJzMwMHgyNTAnKSB7XG4gICAgcmV0dXJuIGJsYWNrQm94ZXMzMDB4MjUwKHJhdGlvKVxuICB9XG59XG5cbiIsImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRlXCI7XG5pbXBvcnQgeyBnZXRCbGFja0JveGVzIH0gZnJvbSBcIi4vYmxhY2tCb3hlc1wiO1xuaW1wb3J0IHsgbGVmdFRvcCwgd2lkdGhIZWlnaHQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0TW9iaWxlRnJhbWVzID0gKHsgc3ByYXksIGljb24sIGxhbmd1YWdlLCBzaXplLCByYXRpbywgdGV4dF8xLCB0ZXh0XzIgfTogT3B0aW9ucywgZnJhbWVUaW1lOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBmcmFtZTogMCxcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyBsZWZ0VG9wKDI4MCwgMTAwLCByYXRpbykgOiBsZWZ0VG9wKDI3NSwgMTY0LCByYXRpbykpLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE1Ni4yLCA0NzEuOCwgcmF0aW8pLFxuXG4gICAgICAgIHVybDogYC4vaV9zcHJheV8ke3NwcmF5fS5wbmdgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHJvdGF0ZTogXCI5LjY5NWRlZ1wiLFxuICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgYW5pbWF0aW9uOiBgJHtzaXplID09PSBcIjMwMHgyNTBcIiA/IFwibW92ZVNwcmF5TGVzc1wiIDogXCJtb3ZlU3ByYXlcIn0gNDAwMG1zIGxpbmVhciBpbmZpbml0ZWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC4uLmdldEJsYWNrQm94ZXMoc2l6ZSwgcmF0aW8pLFxuICAgICAge1xuICAgICAgICBmcmFtZTogMjUsXG4gICAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgxNSwgOTYsIHJhdGlvKSxcbiAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMjAsIDcxLCByYXRpbyksXG5cbiAgICAgICAgdXJsOiBgLi9pXzBfQ1RBYnV0dG9uJHtsYW5ndWFnZX0ucG5nYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgICB9LFxuICAgICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDMxLFxuICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjU5LCAxNDksIHJhdGlvKSxcbiAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyOSwgNDMsIHJhdGlvKSxcblxuICAgICAgICB1cmw6ICcuL2lfY2xpY2sucG5nJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs0ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAzNyxcbiAgICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzAsIDE3MiwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQwMCwgMzQsIHJhdGlvKSxcblxuICAgICAgICB0ZXh0OiB0ZXh0XzEsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICBmb250U2l6ZTogYCR7MzUqcmF0aW99cHhgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiA0MixcbiAgICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzAsIDIxOCwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQwMCwgMzQsIHJhdGlvKSxcblxuICAgICAgICB0ZXh0OiB0ZXh0XzIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICBmb250U2l6ZTogYCR7MzUqcmF0aW99cHhgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiA1MixcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKChzaXplID09PSBcIjMwMHgyNTBcIiA/IDE0MyA6IDk2KSwgKHNpemUgPT09IFwiMzAweDI1MFwiID8gMjYwIDogMjc4KSwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHtcbiAgICAgICAgICBbXCJrZXlib2FyZFwiXTogd2lkdGhIZWlnaHQoMTU1LCA5NywgcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgICAgW1wiZ2FtZWJveVwiXTogd2lkdGhIZWlnaHQoMzYwLCAyMzksIDAuNCAqIHJhdGlvICogKHNpemUgPT09IFwiMzAweDI1MFwiID8gMzQxIC8gNDI4IDogMSkpLFxuICAgICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgICAgW1wic3VuX3VtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCgxNDc5LCAxNDgxLCAwLjEyICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgIH1baWNvbl0sXG5cbiAgICAgICAgdXJsOiBgLi9pX2ljb25fJHtpY29ufS5wbmdgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezUgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgICAgICAgIGFuaW1hdGlvbjogYHB1bHNlICR7MjMgKiBmcmFtZVRpbWV9bXNgXG4gICAgICAgIH0sXG4gICAgICAgIG5leHRTdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIF1cbn0iLCJpbXBvcnQgeyBBbmltYXRlLCBPcHRpb25zIH0gZnJvbSAnLi9hbmltYXRlJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IChvcHRpb25zPzogT3B0aW9ucykgPT4ge1xuICB3aW5kb3dbJ2FwcCddID0ge1xuICAgIGFuaW1hdGU6IG5ldyBBbmltYXRlKG9wdGlvbnMgfHwge1xuICAgICAgaWQ6IFwiY2FudmFzXCIsXG4gICAgICBzcHJheTogXCJzdW1tZXJcIixcbiAgICAgIGljb246IFwic3VuX3VtYnJlbGxhXCIsXG4gICAgICBsYW5ndWFnZTogXCJDWlwiLFxuXG4gICAgICB0ZXh0XzE6IFwiQSBsw6l0b1wiLFxuICAgICAgdGV4dF8yOiBcImJ1ZGUgdHZvamVcIixcblxuICAgICAgLy8gc2l6ZTogXCI0ODB4NDgwXCIsXG4gICAgICBzaXplOiBcIjMwMHg2MDBcIixcblxuICAgICAgLy8gcmF0aW86IDEsXG4gICAgICByYXRpbzogMzAwLzEyMDAsXG4gICAgfSksXG4gIH1cbn1cbndpbmRvd1snaW5pdCddID0gaW5pdFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnROYW1lLFxuICAgIGF0dHJpYnV0ZSA9IHVuZGVmaW5lZCxcbiAgICBjaGlsZHJlbnMgPSB1bmRlZmluZWQsXG59KTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0eXBlb2YgKGNoaWxkcmVucykgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gW107XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICBpZiAodHlwZW9mIChhdHRyaWJ1dGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZVtrZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbnMpKSB7XG4gICAgICAgIGNoaWxkcmVucyA9IFtjaGlsZHJlbnNdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbnNbaV0udGFnTmFtZSkge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbnNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbnNbaV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uRWxlbWVudCA9ICh7XG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MQnV0dG9uRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OiAnYnV0dG9uJyxcbiAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICBjaGlsZHJlbnNcbiAgICB9KSBhcyBIVE1MQnV0dG9uRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRGl2RWxlbWVudCA9ICh7XG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MRGl2RWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICBjaGlsZHJlbnNcbiAgICB9KSBhcyBIVE1MRGl2RWxlbWVudFxufVxuIiwiZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vY3JlYXRlRWxlbWVudCdcblxuZXhwb3J0IGNvbnN0IGxlZnRUb3AgPSAobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIGxlZnQ6IGxlZnQgKiByYXRpbyxcbiAgdG9wOiB0b3AgKiByYXRpbyxcbn0pXG5cbmV4cG9ydCBjb25zdCBsZWZ0Qm90dG9tID0gKGxlZnQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHJhdGlvOiBudW1iZXIgPSAxKSA9PiAoe1xuICBsZWZ0OiBsZWZ0ICogcmF0aW8sXG4gIGJvdHRvbTogYm90dG9tICogcmF0aW8sXG59KVxuXG5leHBvcnQgY29uc3QgcmlnaHRCb3R0b20gPSAocmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHJhdGlvOiBudW1iZXIgPSAxKSA9PiAoe1xuICByaWdodDogcmlnaHQgKiByYXRpbyxcbiAgYm90dG9tOiBib3R0b20gKiByYXRpbyxcbn0pXG5cbmV4cG9ydCBjb25zdCB3aWR0aEhlaWdodCA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIHdpZHRoOiB3aWR0aCAqIHJhdGlvLFxuICBoZWlnaHQ6IGhlaWdodCAqIHJhdGlvLFxufSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==