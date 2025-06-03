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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Animate = void 0;
var createElement_1 = __webpack_require__(/*! ./utils/createElement */ "./src/utils/createElement.ts");
var blackBoxes_1 = __webpack_require__(/*! ./blackBoxes */ "./src/blackBoxes.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
var Animate = /** @class */ (function () {
    function Animate(options) {
        var _this = this;
        this.frameTime = 2083 / 50;
        this.getElements = function (_a) {
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
                        animation: "moveSpray 4000ms linear infinite"
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
                        transition: "opacity " + 6 * _this.frameTime + "ms"
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
                        transition: "opacity " + 4 * _this.frameTime + "ms",
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
                        transition: "opacity " + 5 * _this.frameTime + "ms",
                        transform: "scale(1)",
                        animation: "pulse " + 23 * _this.frameTime + "ms"
                    },
                    nextStyle: {
                        opacity: '1'
                    }
                },
            ]);
        };
        var elements = this.getElements(options);
        this.canvas = document.getElementById(options.id);
        var head = document.getElementsByTagName("head");
        var _a = __read(options.size.split("x"), 2), x = _a[0], y = _a[1];
        this.canvas.style.width = x + "px";
        this.canvas.style.height = y + "px";
        elements.forEach(function (box) {
            var _a;
            if (box.url) {
                console.log(head);
                (_a = head[0]) === null || _a === void 0 ? void 0 : _a.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: box.url } }));
            }
            setTimeout(function () {
                var _a;
                var element = createElement_1.createDivElement({ attribute: (_a = { class: box.class + " poa" }, _a["data-frame"] = box.frame, _a) });
                element.style.width = box.dimension.width + "px";
                element.style.height = box.dimension.height + "px";
                element.style.top = box.position.top + "px";
                element.style.left = box.position.left + "px";
                if (box.url) {
                    element.style.backgroundImage = "url(\"" + box.url + "\")";
                }
                if (box.text) {
                    element.innerHTML = box.text;
                }
                Object.keys(box.style || {}).forEach(function (key) {
                    element.style[key] = box.style[key];
                });
                setTimeout(function () {
                    Object.keys(box.nextStyle || {}).forEach(function (key) {
                        element.style[key] = box.nextStyle[key];
                    });
                }, _this.frameTime);
                _this.canvas.appendChild(element);
            }, box.frame * _this.frameTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaUI7SUFBSyxRQUFDO1FBQ2hGLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSztRQUNwQixNQUFNLEVBQUUsTUFBTSxHQUFHLEtBQUs7S0FDdkIsQ0FBQztBQUgrRSxDQUcvRTs7Ozs7OztVQ1ZGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL2FuaW1hdGUudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9ibGFja0JveGVzLnRzIiwid2VicGFjazovL3Byb2dyYW0vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy91dGlscy9jcmVhdGVFbGVtZW50LnRzIiwid2VicGFjazovL3Byb2dyYW0vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGl2RWxlbWVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGdldEJsYWNrQm94ZXMgfSBmcm9tIFwiLi9ibGFja0JveGVzXCI7XG5pbXBvcnQgeyBsZWZ0VG9wLCB3aWR0aEhlaWdodCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnMgPSB7XG4gIHNwcmF5OiBcInN1bW1lclwiIHwgXCJkYXJrXCIsXG4gIGljb246IFwia2V5Ym9hcmRcIiB8IFwidW1icmVsbGFcIiB8IFwic3VuX3VtYnJlbGxhXCIgfCBcImdhbWVib3lcIixcbiAgbGFuZ3VhZ2U6IFwiQ1pcIiB8IFwiU0tcIixcbiAgdGV4dF8xPzogc3RyaW5nXG4gIHRleHRfMj86IHN0cmluZ1xuICBzaXplOiBcIjQ4MHg0ODBcIiB8IFwiMzAweDI1MFwiLFxuICByYXRpbzogbnVtYmVyLFxuICBpZDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlckVsZW1lbnQgPSB7XG4gIGZyYW1lOiBudW1iZXIsXG4gIGNsYXNzOiBzdHJpbmcsXG4gIHBvc2l0aW9uOiB7IGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIgfVxuICBkaW1lbnNpb246IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfVxuICB0ZXh0Pzogc3RyaW5nXG4gIHVybD86IHN0cmluZ1xuICBzdHlsZT86IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj5cbiAgbmV4dFN0eWxlPzogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPlxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0ZSB7XG4gIGZyYW1lVGltZSA9IDIwODMgLyA1MFxuXG4gIGdldEVsZW1lbnRzID0gKHsgc3ByYXksIGljb24sIGxhbmd1YWdlLCBzaXplLCByYXRpbywgdGV4dF8xLCB0ZXh0XzIgfTogT3B0aW9ucyk6IFJlbmRlckVsZW1lbnRbXSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgICBwb3NpdGlvbjogKHNpemUgPT09IFwiMzAweDI1MFwiID8gbGVmdFRvcCgyODAsIDEwMCwgcmF0aW8pIDogbGVmdFRvcCgyNzUsIDE2NCwgcmF0aW8pKSxcbiAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYuMiwgNDcxLjgsIHJhdGlvKSxcblxuICAgICAgICB1cmw6IGAuL2lfc3ByYXlfJHtzcHJheX0ucG5nYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICByb3RhdGU6IFwiOS42OTVkZWdcIixcbiAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgIGFuaW1hdGlvbjogYG1vdmVTcHJheSA0MDAwbXMgbGluZWFyIGluZmluaXRlYFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLi4uZ2V0QmxhY2tCb3hlcyhzaXplLCByYXRpbyksXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAyNSxcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDE1LCA5NiwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyMCwgNzEsIHJhdGlvKSxcblxuICAgICAgICB1cmw6IGAuL2lfMF9DVEFidXR0b24ke2xhbmd1YWdlfS5wbmdgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezYgKiB0aGlzLmZyYW1lVGltZX1tc2BcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAzMSxcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDI1OSwgMTQ5LCByYXRpbyksXG4gICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjksIDQzLCByYXRpbyksXG5cbiAgICAgICAgdXJsOiAnLi9pX2NsaWNrLnBuZycsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7NCAqIHRoaXMuZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAzNyxcbiAgICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzAsIDE3MiwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQwMCwgMzQsIHJhdGlvKSxcblxuICAgICAgICB0ZXh0OiB0ZXh0XzEsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICBmb250U2l6ZTogYCR7MzUqcmF0aW99cHhgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiA0MixcbiAgICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzAsIDIxOCwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQwMCwgMzQsIHJhdGlvKSxcblxuICAgICAgICB0ZXh0OiB0ZXh0XzIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICBmb250U2l6ZTogYCR7MzUqcmF0aW99cHhgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiA1MixcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKChzaXplID09PSBcIjMwMHgyNTBcIiA/IDE0MyA6IDk2KSwgKHNpemUgPT09IFwiMzAweDI1MFwiID8gMjYwIDogMjc4KSwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHtcbiAgICAgICAgICBbXCJrZXlib2FyZFwiXTogd2lkdGhIZWlnaHQoMTU1LCA5NywgcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgICAgW1wiZ2FtZWJveVwiXTogd2lkdGhIZWlnaHQoMzYwLCAyMzksIDAuNCAqIHJhdGlvICogKHNpemUgPT09IFwiMzAweDI1MFwiID8gMzQxIC8gNDI4IDogMSkpLFxuICAgICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgICAgW1wic3VuX3VtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCgxNDc5LCAxNDgxLCAwLjEyICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgIH1baWNvbl0sXG5cbiAgICAgICAgdXJsOiBgLi9pX2ljb25fJHtpY29ufS5wbmdgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezUgKiB0aGlzLmZyYW1lVGltZX1tc2AsXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsXG4gICAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgJHsyMyAqIHRoaXMuZnJhbWVUaW1lfW1zYFxuICAgICAgICB9LFxuICAgICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICBdXG4gIH1cblxuICBjYW52YXNcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKG9wdGlvbnMpXG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVxuXG4gICAgY29uc3QgW3gsIHldID0gb3B0aW9ucy5zaXplLnNwbGl0KFwieFwiKVxuXG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBgJHt4fXB4YFxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke3l9cHhgXG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGlmIChib3gudXJsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWQpXG4gICAgICAgIGhlYWRbMF0/LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGluaycsIGF0dHJpYnV0ZTogeyByZWw6IFwicHJlZmV0Y2hcIiwgaHJlZjogYm94LnVybCB9IH0pKVxuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoeyBhdHRyaWJ1dGU6IHsgY2xhc3M6IGAke2JveC5jbGFzc30gcG9hYCwgW1wiZGF0YS1mcmFtZVwiXTogYm94LmZyYW1lIH0gfSlcblxuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7Ym94LmRpbWVuc2lvbi53aWR0aH1weGBcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtib3guZGltZW5zaW9uLmhlaWdodH1weGBcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtib3gucG9zaXRpb24udG9wfXB4YFxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtib3gucG9zaXRpb24ubGVmdH1weGBcblxuICAgICAgICBpZiAoYm94LnVybCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7Ym94LnVybH1cIilgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm94LnRleHQpIHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGJveC50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYm94LnN0eWxlIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gYm94LnN0eWxlW2tleV1cbiAgICAgICAgfSlcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhib3gubmV4dFN0eWxlIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBib3gubmV4dFN0eWxlW2tleV1cbiAgICAgICAgICB9KVxuICAgICAgICB9LCB0aGlzLmZyYW1lVGltZSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgfSwgYm94LmZyYW1lICogdGhpcy5mcmFtZVRpbWUpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGVcIjtcbmltcG9ydCB7IGxlZnRUb3AsIHdpZHRoSGVpZ2h0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgYmxhY2tCb3hlczQ4MHg0ODAgPSAocmF0aW86IG51bWJlciA9IDEpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMzQsIDIyLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyLCAzMywgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYyLCA2MiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOSwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMiwgMzcwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDksIDgsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzNzAsIDU1LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExLCAxMSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDExLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0MjAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjcsIDM1LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM5OSwgMzUsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjEsIDIxLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDc5LCA0MTQsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTYsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMxNSwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg1NSwgMzQsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0NywgNjAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTM0LCAyMiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzOSwgMzksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDQ3LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMzLCA4OCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMjUsIDQ2MSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDMzLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDc5LCA0NywgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuY29uc3QgYmxhY2tCb3hlczMwMHgyNTAgPSAocmF0aW86IG51bWJlcikgPT4ge1xuICBjb25zdCBkaWZmID0gODAuMlxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAyLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzNCwgMjIsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCA0MDAgLSBkaWZmLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyLCAzMywgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYyLCA2MiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOSwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMiwgMzcwIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg5LCA4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTA0MywgMjIwLCAzMDAvMTM3MyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE4LCAxOCwgMzAwLzEzNzMpLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDExLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0MjAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjcsIDM1LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM5OSwgMzUsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjEsIDIxLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDc5LCA0MTQgLSBkaWZmLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE4LCAxOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMTUsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTUsIDM0LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDcsIDYwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEzNCwgMjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzksIDM5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDQ0NywgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMywgODgsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTI1LCA0NjEgLSBkaWZmLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE4LCAxOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIzLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCA0MzMgLSBkaWZmLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDc5LCA0NywgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEJsYWNrQm94ZXMgPSAoc2l6ZTogT3B0aW9uc1snc2l6ZSddLCByYXRpbzogbnVtYmVyKSA9PiB7XG4gIGlmIChzaXplID09PSAnNDgweDQ4MCcpIHtcbiAgICByZXR1cm4gYmxhY2tCb3hlczQ4MHg0ODAocmF0aW8pXG4gIH1cbiAgaWYgKHNpemUgPT09ICczMDB4MjUwJykge1xuICAgIHJldHVybiBibGFja0JveGVzMzAweDI1MChyYXRpbylcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBBbmltYXRlLCBPcHRpb25zIH0gZnJvbSAnLi9hbmltYXRlJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IChvcHRpb25zPzogT3B0aW9ucykgPT4ge1xuICB3aW5kb3dbJ2FwcCddID0ge1xuICAgIGFuaW1hdGU6IG5ldyBBbmltYXRlKG9wdGlvbnMgfHwge1xuICAgICAgaWQ6IFwiY2FudmFzXCIsXG4gICAgICBzcHJheTogXCJzdW1tZXJcIixcbiAgICAgIGljb246IFwiZ2FtZWJveVwiLFxuICAgICAgbGFuZ3VhZ2U6IFwiU0tcIixcblxuICAgICAgdGV4dF8xOiBcIkEgQlXEjlwiLFxuICAgICAgdGV4dF8yOiBcIk1WUCBMw4lUQVwiLFxuXG4gICAgICAvLyBzaXplOiBcIjQ4MHg0ODBcIixcbiAgICAgIHNpemU6IFwiMzAweDI1MFwiLFxuXG4gICAgICAvLyByYXRpbzogMSxcbiAgICAgIHJhdGlvOiAzMDAvNDgwLFxuICAgIH0pLFxuICB9XG59XG53aW5kb3dbJ2luaXQnXSA9IGluaXRcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHtcbiAgICBlbGVtZW50OiBlbGVtZW50TmFtZSxcbiAgICBhdHRyaWJ1dGUgPSB1bmRlZmluZWQsXG4gICAgY2hpbGRyZW5zID0gdW5kZWZpbmVkLFxufSk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAodHlwZW9mIChjaGlsZHJlbnMpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNoaWxkcmVucyA9IFtdO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgaWYgKHR5cGVvZiAoYXR0cmlidXRlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW5zKSkge1xuICAgICAgICBjaGlsZHJlbnMgPSBbY2hpbGRyZW5zXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hpbGRyZW5zW2ldLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5zW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGRyZW5zW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvbkVsZW1lbnQgPSAoe1xuICAgIGF0dHJpYnV0ZSA9IHVuZGVmaW5lZCxcbiAgICBjaGlsZHJlbnMgPSB1bmRlZmluZWQsXG59KTogSFRNTEJ1dHRvbkVsZW1lbnQgPT4ge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDogJ2J1dHRvbicsXG4gICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgY2hpbGRyZW5zXG4gICAgfSkgYXMgSFRNTEJ1dHRvbkVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpdkVsZW1lbnQgPSAoe1xuICAgIGF0dHJpYnV0ZSA9IHVuZGVmaW5lZCxcbiAgICBjaGlsZHJlbnMgPSB1bmRlZmluZWQsXG59KTogSFRNTERpdkVsZW1lbnQgPT4ge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDogJ2RpdicsXG4gICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgY2hpbGRyZW5zXG4gICAgfSkgYXMgSFRNTERpdkVsZW1lbnRcbn1cbiIsImV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnXG5cbmV4cG9ydCBjb25zdCBsZWZ0VG9wID0gKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJhdGlvOiBudW1iZXIgPSAxKSA9PiAoe1xuICBsZWZ0OiBsZWZ0ICogcmF0aW8sXG4gIHRvcDogdG9wICogcmF0aW8sXG59KVxuXG5leHBvcnQgY29uc3Qgd2lkdGhIZWlnaHQgPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhdGlvOiBudW1iZXIgPSAxKSA9PiAoe1xuICB3aWR0aDogd2lkdGggKiByYXRpbyxcbiAgaGVpZ2h0OiBoZWlnaHQgKiByYXRpbyxcbn0pXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=