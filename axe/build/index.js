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
var framesMobile_1 = __webpack_require__(/*! ./framesMobile */ "./src/framesMobile.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
var blackBoxes_1 = __webpack_require__(/*! ./blackBoxes */ "./src/blackBoxes.ts");
var Animate = /** @class */ (function () {
    function Animate(options) {
        var _this = this;
        var _a, _b, _c, _d;
        this.frameTime = 2083 / 50;
        this.getFrames = function (options) {
            var _a, _b;
            var ratio = options.ratio, language = options.language, spray = options.spray, size = options.size, icon = options.icon, text_1 = options.text_1, text_2 = options.text_2;
            var frameTime = _this.frameTime;
            if (options.size === "300x250" || options.size === "480x480") {
                return framesMobile_1.getMobileFrames(options, _this.frameTime);
            }
            if (options.size === "160x600") {
                return [
                    {
                        frame: 0,
                        class: 'image',
                        position: utils_1.leftTop(0, 1000 - 40 * 4, ratio),
                        dimension: utils_1.widthHeight(156 * 4 * 1, 471 * 4 * 1, ratio),
                        url: "./i_spray_" + spray + ".png",
                        style: {
                            rotate: "6deg",
                            zIndex: "1",
                            animation: "moveSpray" + " 4000ms linear infinite"
                        }
                    },
                    {
                        frame: 1,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(400, 1000, ratio),
                        position: utils_1.rightBottom(0, 0, ratio),
                    },
                    {
                        frame: 25,
                        class: 'image',
                        position: utils_1.leftTop(33, 259, ratio),
                        dimension: utils_1.widthHeight(584, 129, ratio),
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
                        position: utils_1.leftTop(331, 362, ratio),
                        dimension: utils_1.widthHeight(29 * 2.5, 43 * 2.5, ratio),
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
                        frame: 36,
                        class: 'image',
                        position: icon === "sun_umbrella" ? utils_1.leftTop(30 * 4, 120 * 4, ratio) : utils_1.leftTop(30 * 4, 130 * 4, ratio),
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
                        dimension: utils_1.widthHeight(169, 111, ratio),
                        position: utils_1.leftTop(0, 0, ratio),
                    },
                    {
                        frame: 15,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(272, 70, ratio),
                        position: utils_1.leftTop(0, 0, ratio),
                    },
                    {
                        frame: 18,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(95, 150, ratio),
                        position: utils_1.leftTop(0, 0, ratio),
                    },
                    {
                        frame: 17,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(80, 80, ratio),
                        position: utils_1.leftTop(272, 70, ratio),
                    },
                    {
                        frame: 2,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(80, 70, ratio),
                        position: utils_1.leftTop(272 + 80, 0, ratio),
                    },
                    {
                        frame: 20,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(39, 39, ratio),
                        position: utils_1.leftTop(124, 149, ratio),
                    },
                    {
                        frame: 22,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(38, 38, ratio),
                        position: utils_1.leftTop(90, 771, ratio),
                    },
                    {
                        frame: 19,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(38, 38, ratio),
                        position: utils_1.rightTop(0, 0, ratio),
                    },
                    {
                        frame: 17,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(126, 352, ratio),
                        position: utils_1.rightTop(0, 675, ratio),
                    },
                    {
                        frame: 8,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(224, 85, ratio),
                        position: utils_1.leftTop(426, 738, ratio),
                    },
                    {
                        frame: 12,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(48, 48, ratio),
                        position: utils_1.leftTop(466, 626, ratio),
                    },
                    {
                        frame: 15,
                        class: 'blackBox',
                        dimension: utils_1.widthHeight(48, 48, ratio),
                        position: utils_1.leftTop(575, 536, ratio),
                    },
                ];
            }
            if (options.size === "300x600") {
                return __spread([
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
                        dimension: (_b = {},
                            _b["keyboard"] = utils_1.widthHeight(155, 97, ratio * 2),
                            _b["gameboy"] = utils_1.widthHeight(360, 239, 0.4 * ratio * 2),
                            _b["umbrella"] = utils_1.widthHeight(762, 727, 0.2 * ratio * 2),
                            _b["sun_umbrella"] = utils_1.widthHeight(1479, 1481, 0.12 * ratio * 2),
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
                    }
                ], blackBoxes_1.getBlackBoxes(size, ratio));
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
var blackBoxes300x600 = function (ratio) {
    return [
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
};
exports.getBlackBoxes = function (size, ratio) {
    if (size === '480x480') {
        return blackBoxes480x480(ratio);
    }
    if (size === '300x250') {
        return blackBoxes300x250(ratio);
    }
    if (size === '300x600') {
        return blackBoxes300x600(ratio);
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
            spray: "dark",
            icon: "umbrella",
            language: "CZ",
            text_1: "A léto",
            text_2: "bude tvoje",
            size: "160x600",
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
exports.widthHeight = exports.rightBottom = exports.leftBottom = exports.rightTop = exports.leftTop = void 0;
var createElement_1 = __webpack_require__(/*! ./createElement */ "./src/utils/createElement.ts");
Object.defineProperty(exports, "createElement", ({ enumerable: true, get: function () { return createElement_1.createElement; } }));
exports.leftTop = function (left, top, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        left: left * ratio,
        top: top * ratio,
    });
};
exports.rightTop = function (right, top, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        right: right * ratio,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL2FuaW1hdGUudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9ibGFja0JveGVzLnRzIiwid2VicGFjazovL3Byb2dyYW0vLi9zcmMvZnJhbWVzTW9iaWxlLnRzIiwid2VicGFjazovL3Byb2dyYW0vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy91dGlscy9jcmVhdGVFbGVtZW50LnRzIiwid2VicGFjazovL3Byb2dyYW0vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGl2RWxlbWVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGdldE1vYmlsZUZyYW1lcyB9IGZyb20gXCIuL2ZyYW1lc01vYmlsZVwiO1xuaW1wb3J0IHsgbGVmdEJvdHRvbSwgbGVmdFRvcCwgcmlnaHRCb3R0b20sIHJpZ2h0VG9wLCB3aWR0aEhlaWdodCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRCbGFja0JveGVzIH0gZnJvbSBcIi4vYmxhY2tCb3hlc1wiO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICBzcHJheTogXCJzdW1tZXJcIiB8IFwiZGFya1wiLFxuICBpY29uOiBcImtleWJvYXJkXCIgfCBcInVtYnJlbGxhXCIgfCBcInN1bl91bWJyZWxsYVwiIHwgXCJnYW1lYm95XCIsXG4gIGxhbmd1YWdlOiBcIkNaXCIgfCBcIlNLXCIsXG4gIHRleHRfMT86IHN0cmluZ1xuICB0ZXh0XzI/OiBzdHJpbmdcbiAgc2l6ZTogXCI0ODB4NDgwXCIgfCBcIjMwMHgyNTBcIiB8IFwiMzAweDYwMFwiIHwgXCIxNjB4NjAwXCIsXG4gIHJhdGlvOiBudW1iZXIsXG4gIGlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgRnJhbWUgPSB7XG4gIGZyYW1lOiBudW1iZXIsXG4gIGNsYXNzOiBzdHJpbmcsXG4gIHBvc2l0aW9uOiB7IGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIgfSB8IHsgbGVmdDogbnVtYmVyLCBib3R0b206IG51bWJlciB9IHwgeyByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciB9IHwgeyByaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciB9XG4gIGRpbWVuc2lvbjogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9XG4gIHRleHQ/OiBzdHJpbmdcbiAgdXJsPzogc3RyaW5nXG4gIHN0eWxlPzogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPlxuICBuZXh0U3R5bGU/OiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlIHtcbiAgZnJhbWVUaW1lID0gMjA4MyAvIDUwXG5cbiAgZ2V0RnJhbWVzID0gKG9wdGlvbnM6IE9wdGlvbnMpOiBGcmFtZVtdID0+IHtcbiAgICBjb25zdCB7IHJhdGlvLCBsYW5ndWFnZSwgc3ByYXksIHNpemUsIGljb24sIHRleHRfMSwgdGV4dF8yIH0gPSBvcHRpb25zXG4gICAgY29uc3QgZnJhbWVUaW1lID0gdGhpcy5mcmFtZVRpbWVcblxuICAgIGlmIChvcHRpb25zLnNpemUgPT09IFwiMzAweDI1MFwiIHx8IG9wdGlvbnMuc2l6ZSA9PT0gXCI0ODB4NDgwXCIpIHtcbiAgICAgIHJldHVybiBnZXRNb2JpbGVGcmFtZXMob3B0aW9ucywgdGhpcy5mcmFtZVRpbWUpXG4gICAgfVxuXG5cbiAgICBpZiAob3B0aW9ucy5zaXplID09PSBcIjE2MHg2MDBcIikge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAwLFxuICAgICAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDEwMDAgLSA0MCAqIDQsIHJhdGlvKSxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE1NiAqIDQgKiAxLCA0NzEgKiA0ICogMSwgcmF0aW8pLFxuXG4gICAgICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHJvdGF0ZTogXCI2ZGVnXCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBgJHtcIm1vdmVTcHJheVwifSA0MDAwbXMgbGluZWFyIGluZmluaXRlYFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAxLFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDAwLCAxMDAwLCByYXRpbyksXG4gICAgICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAyNSxcbiAgICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMywgMjU5LCByYXRpbyksXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg1ODQsIDEyOSwgcmF0aW8pLFxuXG4gICAgICAgICAgdXJsOiBgLi9pXzBfQ1RBYnV0dG9uJHtsYW5ndWFnZX0ucG5nYCxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblxuXG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAzMSxcbiAgICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMzEsIDM2MiwgcmF0aW8pLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjkgKiAyLjUsIDQzICogMi41LCByYXRpbyksXG5cbiAgICAgICAgICB1cmw6ICcuL2lfY2xpY2sucG5nJyxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs0ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYG1vdmVDdXJzb3IgMjAwMG1zIGluZmluaXRlYFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAzNixcbiAgICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICBwb3NpdGlvbjogaWNvbiA9PT0gXCJzdW5fdW1icmVsbGFcIiA/IGxlZnRUb3AoMzAgKiA0LCAxMjAgKiA0LCByYXRpbykgOiBsZWZ0VG9wKDMwICogNCwgMTMwICogNCwgcmF0aW8pLFxuICAgICAgICAgIGRpbWVuc2lvbjoge1xuICAgICAgICAgICAgW1wia2V5Ym9hcmRcIl06IHdpZHRoSGVpZ2h0KDE1NSwgOTcsIHJhdGlvICogMiksXG4gICAgICAgICAgICBbXCJnYW1lYm95XCJdOiB3aWR0aEhlaWdodCgzNjAsIDIzOSwgMC40ICogcmF0aW8gKiAyKSxcbiAgICAgICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAyKSxcbiAgICAgICAgICAgIFtcInN1bl91bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoMTQ3OSwgMTQ4MSwgMC4xMiAqIHJhdGlvICogMiksXG4gICAgICAgICAgfVtpY29uXSxcblxuICAgICAgICAgIHVybDogYC4vaV9pY29uXyR7aWNvbn0ucG5nYCxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs1ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgJHsyMyAqIGZyYW1lVGltZX1tc2BcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5leHRTdHlsZToge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAxLFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTY5LCAxMTEsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMTUsXG4gICAgICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyNzIsIDcwLCByYXRpbyksXG4gICAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZnJhbWU6IDE4LFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoOTUsIDE1MCwgcmF0aW8pLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAxNyxcbiAgICAgICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDgwLCA4MCwgcmF0aW8pLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDI3MiwgNzAsIHJhdGlvKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAyLFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoODAsIDcwLCByYXRpbyksXG4gICAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjcyICsgODAsIDAsIHJhdGlvKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAyMCxcbiAgICAgICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM5LCAzOSwgcmF0aW8pLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEyNCwgMTQ5LCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMjIsXG4gICAgICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzOCwgMzgsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCg5MCwgNzcxLCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMTksXG4gICAgICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzOCwgMzgsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogcmlnaHRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZnJhbWU6IDE3LFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTI2LCAzNTIsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogcmlnaHRUb3AoMCwgNjc1LCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogOCxcbiAgICAgICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDIyNCwgODUsIHJhdGlvKSxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCg0MjYsIDczOCwgcmF0aW8pLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZnJhbWU6IDEyLFxuICAgICAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDgsIDQ4LCByYXRpbyksXG4gICAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDY2LCA2MjYsIHJhdGlvKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAxNSxcbiAgICAgICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQ4LCA0OCwgcmF0aW8pLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDU3NSwgNTM2LCByYXRpbyksXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuXG5cblxuICAgIGlmIChvcHRpb25zLnNpemUgPT09IFwiMzAweDYwMFwiKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzYwLCAxMDAwLCByYXRpbyksXG4gICAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYgKiA0LCA0NzEgKiA0LCByYXRpbyksXG5cbiAgICAgICAgICB1cmw6IGAuL2lfc3ByYXlfJHtzcHJheX0ucG5nYCxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgcm90YXRlOiBcIjkuNjk1ZGVnXCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBgJHtcIm1vdmVTcHJheVwifSA0MDAwbXMgbGluZWFyIGluZmluaXRlYFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgZnJhbWU6IDI1LFxuICAgICAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMyLCAzODgsIHJhdGlvKSxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExNDMsIDI1MiwgcmF0aW8pLFxuXG4gICAgICAgICAgdXJsOiBgLi9pXzBfQ1RBYnV0dG9uJHtsYW5ndWFnZX0ucG5nYCxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZTogMzEsXG4gICAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjU5ICsgMTY1ICogNCwgMTQ5ICsgMTA5ICogNCwgcmF0aW8pLFxuICAgICAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjkgKiAzLCA0MyAqIDMsIHJhdGlvKSxcblxuICAgICAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBgbW92ZUN1cnNvciAyMDAwbXMgaW5maW5pdGVgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiAzNyxcbiAgICAgICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYwLCA2NjAsIHJhdGlvKSxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEwMDAsIDE3MCwgcmF0aW8pLFxuXG4gICAgICAgICAgdGV4dDogdGV4dF8xLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvIDM0cHggIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IGAkezEzMiAqIHJhdGlvfXB4YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiA0MixcbiAgICAgICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYwLCA4NDAsIHJhdGlvKSxcbiAgICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExMDAsIDE3MCwgcmF0aW8pLFxuXG4gICAgICAgICAgdGV4dDogdGV4dF8yLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvIDM0cHggIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IGAkezEzMiAqIHJhdGlvfXB4YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lOiA1MixcbiAgICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgoOTYpLCAoMjc4ICsgMTkwICogNCksIHJhdGlvKSxcbiAgICAgICAgICBkaW1lbnNpb246IHtcbiAgICAgICAgICAgIFtcImtleWJvYXJkXCJdOiB3aWR0aEhlaWdodCgxNTUsIDk3LCByYXRpbyAqIDIpLFxuICAgICAgICAgICAgW1wiZ2FtZWJveVwiXTogd2lkdGhIZWlnaHQoMzYwLCAyMzksIDAuNCAqIHJhdGlvICogMiksXG4gICAgICAgICAgICBbXCJ1bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoNzYyLCA3MjcsIDAuMiAqIHJhdGlvICogMiksXG4gICAgICAgICAgICBbXCJzdW5fdW1icmVsbGFcIl06IHdpZHRoSGVpZ2h0KDE0NzksIDE0ODEsIDAuMTIgKiByYXRpbyAqIDIpLFxuICAgICAgICAgIH1baWNvbl0sXG5cbiAgICAgICAgICB1cmw6IGAuL2lfaWNvbl8ke2ljb259LnBuZ2AsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7NSAqIGZyYW1lVGltZX1tc2AsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYHB1bHNlICR7MjMgKiBmcmFtZVRpbWV9bXNgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLi4uZ2V0QmxhY2tCb3hlcyhzaXplLCByYXRpbyksXG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgY2FudmFzXG4gIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci5lb3RcIiB9IH0pKVxuICAgIHRoaXMuaGVhZFswXT8uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdsaW5rJywgYXR0cmlidXRlOiB7IHJlbDogXCJwcmVmZXRjaFwiLCBocmVmOiBcIi4vZm9udHMvcmlmdG9uLXJlZ3VsYXIuZW90PyNpZWZpeFwiIH0gfSkpXG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci53b2ZmMlwiIH0gfSkpXG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci53b2ZmXCIgfSB9KSlcblxuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKG9wdGlvbnMpXG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpXG5cbiAgICBjb25zdCBbeCwgeV0gPSBvcHRpb25zLnNpemUuc3BsaXQoXCJ4XCIpXG5cbiAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3h9cHhgXG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7eX1weGBcblxuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmcmFtZS51cmwpIHtcbiAgICAgICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IGZyYW1lLnVybCB9IH0pKVxuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoeyBhdHRyaWJ1dGU6IHsgY2xhc3M6IGAke2ZyYW1lLmNsYXNzfSBwb2FgLCBbXCJkYXRhLWZyYW1lXCJdOiBmcmFtZS5mcmFtZSwgW1wiZGF0YS1pbmRleFwiXTogaW5kZXggfSB9KVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtmcmFtZS5kaW1lbnNpb24ud2lkdGh9cHhgXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7ZnJhbWUuZGltZW5zaW9uLmhlaWdodH1weGBcbiAgICAgICAgaWYgKCd0b3AnIGluIGZyYW1lLnBvc2l0aW9uKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtmcmFtZS5wb3NpdGlvbi50b3B9cHhgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdib3R0b20nIGluIGZyYW1lLnBvc2l0aW9uKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBgJHtmcmFtZS5wb3NpdGlvbi5ib3R0b219cHhgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdsZWZ0JyBpbiBmcmFtZS5wb3NpdGlvbikge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2ZyYW1lLnBvc2l0aW9uLmxlZnR9cHhgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyaWdodCcgaW4gZnJhbWUucG9zaXRpb24pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gYCR7ZnJhbWUucG9zaXRpb24ucmlnaHR9cHhgXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChmcmFtZS51cmwpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ZyYW1lLnVybH1cIilgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJhbWUudGV4dCkge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZnJhbWUudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGZyYW1lLnN0eWxlIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZnJhbWUuc3R5bGVba2V5XVxuICAgICAgICB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGZyYW1lLm5leHRTdHlsZSB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZnJhbWUubmV4dFN0eWxlW2tleV1cbiAgICAgICAgICB9KVxuICAgICAgICB9LCB0aGlzLmZyYW1lVGltZSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgfSwgZnJhbWUuZnJhbWUgKiB0aGlzLmZyYW1lVGltZSlcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb25zIH0gZnJvbSBcIi4vYW5pbWF0ZVwiO1xuaW1wb3J0IHsgbGVmdEJvdHRvbSwgbGVmdFRvcCwgcmlnaHRCb3R0b20sIHdpZHRoSGVpZ2h0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgYmxhY2tCb3hlczQ4MHg0ODAgPSAocmF0aW86IG51bWJlciA9IDEpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMzQsIDIyLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyLCAzMywgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYyLCA2MiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOSwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMiwgMzcwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDksIDgsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzNzAsIDU1LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExLCAxMSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDExLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0MjAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjcsIDM1LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM5OSwgMzUsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjEsIDIxLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDc5LCA0MTQsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTYsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMxNSwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg1NSwgMzQsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0NywgNjAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTM0LCAyMiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzOSwgMzksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDQ3LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMzLCA4OCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMjUsIDQ2MSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDMzLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDc5LCA0NywgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuY29uc3QgYmxhY2tCb3hlczMwMHgyNTAgPSAocmF0aW86IG51bWJlcikgPT4ge1xuICBjb25zdCBkaWZmID0gODAuMlxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAyLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzNCwgMjIsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCA0MDAgLSBkaWZmLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyLCAzMywgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYyLCA2MiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOSwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMiwgMzcwIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg5LCA4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTA0MywgMjIwLCAzMDAgLyAxMzczKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE4LCAzMDAgLyAxMzczKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDIwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI3LCAzNSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzOTksIDM1LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDIxLCAyMSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg3OSwgNDE0IC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzE1LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDU1LCAzNCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE3LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQ3LCA2MCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMzQsIDIyLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM5LCAzOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0NDcsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzMsIDg4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjAsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEyNSwgNDYxIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDMzIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg3OSwgNDcsIHJhdGlvKSxcbiAgICB9LFxuICBdXG59XG5cbmNvbnN0IGJsYWNrQm94ZXMzMDB4NjAwID0gKHJhdGlvOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOTQsIDIwNywgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM3MywgMTI0LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTgsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNjYsIDI2MCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE3LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzNywgMTM3LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzNzMsIDEyNCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTM3LCAxMjQsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDUxMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDY4LCA2OCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTE2LCAyNjAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg4NSwgODUsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEwMCwgMTQ4NSwgcmF0aW8pLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBmcmFtZTogNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNDAsIDE0MCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRCb3R0b20oMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNjAsIDYwLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdEJvdHRvbSgxNDAsIDE0MCwgcmF0aW8pLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBmcmFtZTogMTcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTMyLCAyNTIsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyMzYsIDEwNCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg2MCwgNjAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgxMzIsIDI1MiwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDUyLCA1NiwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDQwOCwgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEJsYWNrQm94ZXMgPSAoc2l6ZTogT3B0aW9uc1snc2l6ZSddLCByYXRpbzogbnVtYmVyKSA9PiB7XG4gIGlmIChzaXplID09PSAnNDgweDQ4MCcpIHtcbiAgICByZXR1cm4gYmxhY2tCb3hlczQ4MHg0ODAocmF0aW8pXG4gIH1cbiAgaWYgKHNpemUgPT09ICczMDB4MjUwJykge1xuICAgIHJldHVybiBibGFja0JveGVzMzAweDI1MChyYXRpbylcbiAgfVxuICBpZiAoc2l6ZSA9PT0gJzMwMHg2MDAnKSB7XG4gICAgcmV0dXJuIGJsYWNrQm94ZXMzMDB4NjAwKHJhdGlvKVxuICB9XG59XG5cbiIsImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRlXCI7XG5pbXBvcnQgeyBnZXRCbGFja0JveGVzIH0gZnJvbSBcIi4vYmxhY2tCb3hlc1wiO1xuaW1wb3J0IHsgbGVmdFRvcCwgd2lkdGhIZWlnaHQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0TW9iaWxlRnJhbWVzID0gKHsgc3ByYXksIGljb24sIGxhbmd1YWdlLCBzaXplLCByYXRpbywgdGV4dF8xLCB0ZXh0XzIgfTogT3B0aW9ucywgZnJhbWVUaW1lOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBmcmFtZTogMCxcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyBsZWZ0VG9wKDI4MCwgMTAwLCByYXRpbykgOiBsZWZ0VG9wKDI3NSwgMTY0LCByYXRpbykpLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE1Ni4yLCA0NzEuOCwgcmF0aW8pLFxuXG4gICAgICAgIHVybDogYC4vaV9zcHJheV8ke3NwcmF5fS5wbmdgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHJvdGF0ZTogXCI5LjY5NWRlZ1wiLFxuICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgYW5pbWF0aW9uOiBgJHtzaXplID09PSBcIjMwMHgyNTBcIiA/IFwibW92ZVNwcmF5TGVzc1wiIDogXCJtb3ZlU3ByYXlcIn0gNDAwMG1zIGxpbmVhciBpbmZpbml0ZWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC4uLmdldEJsYWNrQm94ZXMoc2l6ZSwgcmF0aW8pLFxuICAgICAge1xuICAgICAgICBmcmFtZTogMjUsXG4gICAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgICBwb3NpdGlvbjogbGVmdFRvcCgxNSwgOTYsIHJhdGlvKSxcbiAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMjAsIDcxLCByYXRpbyksXG5cbiAgICAgICAgdXJsOiBgLi9pXzBfQ1RBYnV0dG9uJHtsYW5ndWFnZX0ucG5nYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgICB9LFxuICAgICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDMxLFxuICAgICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjU5LCAxNDksIHJhdGlvKSxcbiAgICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyOSwgNDMsIHJhdGlvKSxcblxuICAgICAgICB1cmw6ICcuL2lfY2xpY2sucG5nJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs0ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAzNyxcbiAgICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzAsIDE3MiwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQwMCwgMzQsIHJhdGlvKSxcblxuICAgICAgICB0ZXh0OiB0ZXh0XzEsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICBmb250U2l6ZTogYCR7MzUqcmF0aW99cHhgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiA0MixcbiAgICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzAsIDIxOCwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQwMCwgMzQsIHJhdGlvKSxcblxuICAgICAgICB0ZXh0OiB0ZXh0XzIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICBmb250U2l6ZTogYCR7MzUqcmF0aW99cHhgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiA1MixcbiAgICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKChzaXplID09PSBcIjMwMHgyNTBcIiA/IDE0MyA6IDk2KSwgKHNpemUgPT09IFwiMzAweDI1MFwiID8gMjYwIDogMjc4KSwgcmF0aW8pLFxuICAgICAgICBkaW1lbnNpb246IHtcbiAgICAgICAgICBbXCJrZXlib2FyZFwiXTogd2lkdGhIZWlnaHQoMTU1LCA5NywgcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgICAgW1wiZ2FtZWJveVwiXTogd2lkdGhIZWlnaHQoMzYwLCAyMzksIDAuNCAqIHJhdGlvICogKHNpemUgPT09IFwiMzAweDI1MFwiID8gMzQxIC8gNDI4IDogMSkpLFxuICAgICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgICAgW1wic3VuX3VtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCgxNDc5LCAxNDgxLCAwLjEyICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgIH1baWNvbl0sXG5cbiAgICAgICAgdXJsOiBgLi9pX2ljb25fJHtpY29ufS5wbmdgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezUgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgICAgICAgIGFuaW1hdGlvbjogYHB1bHNlICR7MjMgKiBmcmFtZVRpbWV9bXNgXG4gICAgICAgIH0sXG4gICAgICAgIG5leHRTdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIF1cbn0iLCJpbXBvcnQgeyBBbmltYXRlLCBPcHRpb25zIH0gZnJvbSAnLi9hbmltYXRlJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IChvcHRpb25zPzogT3B0aW9ucykgPT4ge1xuICB3aW5kb3dbJ2FwcCddID0ge1xuICAgIGFuaW1hdGU6IG5ldyBBbmltYXRlKG9wdGlvbnMgfHwge1xuICAgICAgICAgICAgaWQ6IFwiY2FudmFzXCIsXG4gICAgICAgICAgICBzcHJheTogXCJkYXJrXCIsXG4gICAgICAgICAgICBpY29uOiBcInVtYnJlbGxhXCIsXG4gICAgICAgICAgICBsYW5ndWFnZTogXCJDWlwiLFxuICAgICAgICAgICAgdGV4dF8xOiBcIkEgbMOpdG9cIixcbiAgICAgICAgICAgIHRleHRfMjogXCJidWRlIHR2b2plXCIsXG4gICAgICAgICAgICBzaXplOiBcIjE2MHg2MDBcIixcbiAgICAgICAgICAgIHJhdGlvOiAzMDAgLyAxMjAwLFxuICAgICAgICB9KSxcbiAgfVxufVxud2luZG93Wydpbml0J10gPSBpbml0XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh7XG4gICAgZWxlbWVudDogZWxlbWVudE5hbWUsXG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiAoY2hpbGRyZW5zKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjaGlsZHJlbnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgIGlmICh0eXBlb2YgKGF0dHJpYnV0ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVucykpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gW2NoaWxkcmVuc107XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuc1tpXS50YWdOYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkcmVuc1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25FbGVtZW50ID0gKHtcbiAgICBhdHRyaWJ1dGUgPSB1bmRlZmluZWQsXG4gICAgY2hpbGRyZW5zID0gdW5kZWZpbmVkLFxufSk6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6ICdidXR0b24nLFxuICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgIGNoaWxkcmVuc1xuICAgIH0pIGFzIEhUTUxCdXR0b25FbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXZFbGVtZW50ID0gKHtcbiAgICBhdHRyaWJ1dGUgPSB1bmRlZmluZWQsXG4gICAgY2hpbGRyZW5zID0gdW5kZWZpbmVkLFxufSk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgIGNoaWxkcmVuc1xuICAgIH0pIGFzIEhUTUxEaXZFbGVtZW50XG59XG4iLCJleHBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9jcmVhdGVFbGVtZW50J1xuXG5leHBvcnQgY29uc3QgbGVmdFRvcCA9IChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgbGVmdDogbGVmdCAqIHJhdGlvLFxuICB0b3A6IHRvcCAqIHJhdGlvLFxufSlcblxuZXhwb3J0IGNvbnN0IHJpZ2h0VG9wID0gKHJpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgcmlnaHQ6IHJpZ2h0ICogcmF0aW8sXG4gIHRvcDogdG9wICogcmF0aW8sXG59KVxuXG5leHBvcnQgY29uc3QgbGVmdEJvdHRvbSA9IChsZWZ0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgbGVmdDogbGVmdCAqIHJhdGlvLFxuICBib3R0b206IGJvdHRvbSAqIHJhdGlvLFxufSlcblxuZXhwb3J0IGNvbnN0IHJpZ2h0Qm90dG9tID0gKHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgcmlnaHQ6IHJpZ2h0ICogcmF0aW8sXG4gIGJvdHRvbTogYm90dG9tICogcmF0aW8sXG59KVxuXG5leHBvcnQgY29uc3Qgd2lkdGhIZWlnaHQgPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhdGlvOiBudW1iZXIgPSAxKSA9PiAoe1xuICB3aWR0aDogd2lkdGggKiByYXRpbyxcbiAgaGVpZ2h0OiBoZWlnaHQgKiByYXRpbyxcbn0pXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=