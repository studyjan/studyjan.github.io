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
var frames_1 = __webpack_require__(/*! ./frames */ "./src/frames.ts");
var blackBoxes_1 = __webpack_require__(/*! ./blackBoxes */ "./src/blackBoxes.ts");
var Animate = /** @class */ (function () {
    function Animate(options) {
        var _this = this;
        var _a, _b, _c, _d;
        this.frameTime = 2083 / 50;
        this.head = document.getElementsByTagName("head");
        (_a = this.head[0]) === null || _a === void 0 ? void 0 : _a.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.eot" } }));
        (_b = this.head[0]) === null || _b === void 0 ? void 0 : _b.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.eot?#iefix" } }));
        (_c = this.head[0]) === null || _c === void 0 ? void 0 : _c.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.woff2" } }));
        (_d = this.head[0]) === null || _d === void 0 ? void 0 : _d.appendChild(createElement_1.createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.woff" } }));
        var frames = __spread(frames_1.getFrames(options, this.frameTime), blackBoxes_1.getBlackBoxes(options.size, options.ratio));
        this.canvas = document.getElementById(options.id);
        var _e = __read(options.size.split("x"), 2), x = _e[0], y = _e[1];
        this.canvas.style.width = x + "px";
        this.canvas.style.height = y + "px";
        frames.forEach(function (frame, index) {
            var _a;
            if ('url' in frame) {
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
var blackBoxes160x600 = function (ratio) {
    return [
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
    if (size === '160x600') {
        return blackBoxes160x600(ratio);
    }
};


/***/ }),

/***/ "./src/frames.ts":
/*!***********************!*\
  !*** ./src/frames.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFrames = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
var getFrames300x250and480x480 = function (_a, frameTime) {
    var _b;
    var spray = _a.spray, icon = _a.icon, language = _a.language, size = _a.size, ratio = _a.ratio, text_1 = _a.text_1, text_2 = _a.text_2;
    return [
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
        },
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
    ];
};
var getFrames160x600 = function (_a, frameTime) {
    var _b;
    var spray = _a.spray, icon = _a.icon, language = _a.language, size = _a.size, ratio = _a.ratio, text_1 = _a.text_1, text_2 = _a.text_2;
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
        },
    ];
};
var getFrames300x600 = function (_a, frameTime) {
    var _b;
    var spray = _a.spray, icon = _a.icon, language = _a.language, size = _a.size, ratio = _a.ratio, text_1 = _a.text_1, text_2 = _a.text_2;
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
        },
    ];
};
exports.getFrames = function (options, frameTime) {
    if (options.size === "300x250" || options.size === "480x480") {
        return getFrames300x250and480x480(options, frameTime);
    }
    if (options.size === "160x600") {
        return getFrames160x600(options, frameTime);
    }
    if (options.size === "300x600") {
        return getFrames300x600(options, frameTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1NBQ3BDO1FBRUQ7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQ2xDO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1NBQ3RDO1FBRUQ7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxtQkFBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQ25DO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxtQkFBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQ25DO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxtQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxVQUFV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QUFIK0UsQ0FHL0U7Ozs7Ozs7VUN6QkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2dyYW0vLi9zcmMvYW5pbWF0ZS50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL2JsYWNrQm94ZXMudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9mcmFtZXMudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL3V0aWxzL2NyZWF0ZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2dyYW0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXZFbGVtZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0RnJhbWVzLCBnZXRGcmFtZXMzMDB4MjUwYW5kNDgweDQ4MCB9IGZyb20gXCIuL2ZyYW1lc1wiO1xuaW1wb3J0IHsgbGVmdFRvcCwgcmlnaHRCb3R0b20sIHdpZHRoSGVpZ2h0IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGdldEJsYWNrQm94ZXMgfSBmcm9tIFwiLi9ibGFja0JveGVzXCI7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnMgPSB7XG4gIHNwcmF5OiBcInN1bW1lclwiIHwgXCJkYXJrXCIsXG4gIGljb246IFwia2V5Ym9hcmRcIiB8IFwidW1icmVsbGFcIiB8IFwic3VuX3VtYnJlbGxhXCIgfCBcImdhbWVib3lcIixcbiAgbGFuZ3VhZ2U6IFwiQ1pcIiB8IFwiU0tcIixcbiAgdGV4dF8xPzogc3RyaW5nXG4gIHRleHRfMj86IHN0cmluZ1xuICBzaXplOiBcIjQ4MHg0ODBcIiB8IFwiMzAweDI1MFwiIHwgXCIzMDB4NjAwXCIgfCBcIjE2MHg2MDBcIixcbiAgcmF0aW86IG51bWJlcixcbiAgaWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBGcmFtZSA9IHtcbiAgZnJhbWU6IG51bWJlcixcbiAgY2xhc3M6IHN0cmluZyxcbiAgcG9zaXRpb246IHsgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciB9IHwgeyBsZWZ0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyIH0gfCB7IHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyIH0gfCB7IHJpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyIH1cbiAgZGltZW5zaW9uOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH1cbiAgdGV4dD86IHN0cmluZ1xuICB1cmw/OiBzdHJpbmdcbiAgc3R5bGU/OiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+XG4gIG5leHRTdHlsZT86IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj5cbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1hdGUge1xuICBmcmFtZVRpbWUgPSAyMDgzIC8gNTBcblxuICBjYW52YXNcbiAgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICB0aGlzLmhlYWRbMF0/LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGluaycsIGF0dHJpYnV0ZTogeyByZWw6IFwicHJlZmV0Y2hcIiwgaHJlZjogXCIuL2ZvbnRzL3JpZnRvbi1yZWd1bGFyLmVvdFwiIH0gfSkpXG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci5lb3Q/I2llZml4XCIgfSB9KSlcbiAgICB0aGlzLmhlYWRbMF0/LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGluaycsIGF0dHJpYnV0ZTogeyByZWw6IFwicHJlZmV0Y2hcIiwgaHJlZjogXCIuL2ZvbnRzL3JpZnRvbi1yZWd1bGFyLndvZmYyXCIgfSB9KSlcbiAgICB0aGlzLmhlYWRbMF0/LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGluaycsIGF0dHJpYnV0ZTogeyByZWw6IFwicHJlZmV0Y2hcIiwgaHJlZjogXCIuL2ZvbnRzL3JpZnRvbi1yZWd1bGFyLndvZmZcIiB9IH0pKVxuXG4gICAgY29uc3QgZnJhbWVzID0gWy4uLmdldEZyYW1lcyhvcHRpb25zLCB0aGlzLmZyYW1lVGltZSksIC4uLmdldEJsYWNrQm94ZXMob3B0aW9ucy5zaXplLCBvcHRpb25zLnJhdGlvKSxdXG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpXG5cbiAgICBjb25zdCBbeCwgeV0gPSBvcHRpb25zLnNpemUuc3BsaXQoXCJ4XCIpXG5cbiAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3h9cHhgXG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7eX1weGBcblxuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICgndXJsJyBpbiBmcmFtZSkge1xuICAgICAgICB0aGlzLmhlYWRbMF0/LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGluaycsIGF0dHJpYnV0ZTogeyByZWw6IFwicHJlZmV0Y2hcIiwgaHJlZjogZnJhbWUudXJsIH0gfSkpXG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudCh7IGF0dHJpYnV0ZTogeyBjbGFzczogYCR7ZnJhbWUuY2xhc3N9IHBvYWAsIFtcImRhdGEtZnJhbWVcIl06IGZyYW1lLmZyYW1lLCBbXCJkYXRhLWluZGV4XCJdOiBpbmRleCB9IH0pXG5cbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2ZyYW1lLmRpbWVuc2lvbi53aWR0aH1weGBcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtmcmFtZS5kaW1lbnNpb24uaGVpZ2h0fXB4YFxuICAgICAgICBpZiAoJ3RvcCcgaW4gZnJhbWUucG9zaXRpb24pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke2ZyYW1lLnBvc2l0aW9uLnRvcH1weGBcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2JvdHRvbScgaW4gZnJhbWUucG9zaXRpb24pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IGAke2ZyYW1lLnBvc2l0aW9uLmJvdHRvbX1weGBcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2xlZnQnIGluIGZyYW1lLnBvc2l0aW9uKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7ZnJhbWUucG9zaXRpb24ubGVmdH1weGBcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JpZ2h0JyBpbiBmcmFtZS5wb3NpdGlvbikge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSBgJHtmcmFtZS5wb3NpdGlvbi5yaWdodH1weGBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGZyYW1lLnVybCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7ZnJhbWUudXJsfVwiKWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcmFtZS50ZXh0KSB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBmcmFtZS50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZnJhbWUuc3R5bGUgfHwge30pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBmcmFtZS5zdHlsZVtrZXldXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoZnJhbWUubmV4dFN0eWxlIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBmcmFtZS5uZXh0U3R5bGVba2V5XVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIHRoaXMuZnJhbWVUaW1lKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICB9LCBmcmFtZS5mcmFtZSAqIHRoaXMuZnJhbWVUaW1lKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IEZyYW1lLCBPcHRpb25zIH0gZnJvbSBcIi4vYW5pbWF0ZVwiO1xuaW1wb3J0IHsgbGVmdEJvdHRvbSwgbGVmdFRvcCwgcmlnaHRCb3R0b20sIHJpZ2h0VG9wLCB3aWR0aEhlaWdodCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IGJsYWNrQm94ZXM0ODB4NDgwID0gKHJhdGlvOiBudW1iZXIgPSAxKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDIsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTM0LCAyMiwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDQwMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMiwgMzMsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg2MiwgNjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTksIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzIsIDM3MCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg5LCA4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzcwLCA1NSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMSwgMTEsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDIwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI3LCAzNSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzOTksIDM1LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDIxLCAyMSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg3OSwgNDE0LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE4LCAxOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMTUsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTUsIDM0LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDcsIDYwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEzNCwgMjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzksIDM5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDQ0NywgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMywgODgsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTI1LCA0NjEsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDQzMywgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg3OSwgNDcsIHJhdGlvKSxcbiAgICB9LFxuICBdXG59XG5cbmNvbnN0IGJsYWNrQm94ZXMzMDB4MjUwID0gKHJhdGlvOiBudW1iZXIpID0+IHtcbiAgY29uc3QgZGlmZiA9IDgwLjJcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMzQsIDIyLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDAwIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMiwgMzMsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg2MiwgNjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTksIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzIsIDM3MCAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoOSwgOCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEwNDMsIDIyMCwgMzAwIC8gMTM3MyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE4LCAxOCwgMzAwIC8gMTM3MyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTEsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDQyMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyNywgMzUsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzk5LCAzNSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyMSwgMjEsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNzksIDQxNCAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTYsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMxNSwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg1NSwgMzQsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0NywgNjAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTM0LCAyMiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzOSwgMzksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDQ3LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMzLCA4OCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMjUsIDQ2MSAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDQzMyAtIGRpZmYsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNzksIDQ3LCByYXRpbyksXG4gICAgfSxcbiAgXVxufVxuXG5jb25zdCBibGFja0JveGVzMzAweDYwMCA9IChyYXRpbzogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDEsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTk0LCAyMDcsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzNzMsIDEyNCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE4LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDY2LCAyNjAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMzcsIDEzNywgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzczLCAxMjQsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzNywgMTI0LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg1MTAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg2OCwgNjgsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDExNiwgMjYwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjIsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoODUsIDg1LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMDAsIDE0ODUsIHJhdGlvKSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgZnJhbWU6IDQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTQwLCAxNDAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDYwLCA2MCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRCb3R0b20oMTQwLCAxNDAsIHJhdGlvKSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgZnJhbWU6IDE3LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzMiwgMjUyLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogcmlnaHRCb3R0b20oMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDgsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjM2LCAxMDQsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTIsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNjAsIDYwLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogcmlnaHRCb3R0b20oMTMyLCAyNTIsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg1MiwgNTYsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgwLCA0MDgsIHJhdGlvKSxcbiAgICB9LFxuICBdXG59XG5cbmNvbnN0IGJsYWNrQm94ZXMxNjB4NjAwID0gKHJhdGlvOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNjksIDExMSwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI3MiwgNzAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg5NSwgMTUwLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoODAsIDgwLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgyNzIsIDcwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg4MCwgNzAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDI3MiArIDgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjAsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzksIDM5LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMjQsIDE0OSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIyLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM4LCAzOCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoOTAsIDc3MSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM4LCAzOCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMjYsIDM1MiwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0VG9wKDAsIDY3NSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDgsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjI0LCA4NSwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDI2LCA3MzgsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0OCwgNDgsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDQ2NiwgNjI2LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDgsIDQ4LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg1NzUsIDUzNiwgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEJsYWNrQm94ZXMgPSAoc2l6ZTogT3B0aW9uc1snc2l6ZSddLCByYXRpbzogbnVtYmVyKTogRnJhbWVbXSA9PiB7XG4gIGlmIChzaXplID09PSAnNDgweDQ4MCcpIHtcbiAgICByZXR1cm4gYmxhY2tCb3hlczQ4MHg0ODAocmF0aW8pXG4gIH1cbiAgaWYgKHNpemUgPT09ICczMDB4MjUwJykge1xuICAgIHJldHVybiBibGFja0JveGVzMzAweDI1MChyYXRpbylcbiAgfVxuICBpZiAoc2l6ZSA9PT0gJzMwMHg2MDAnKSB7XG4gICAgcmV0dXJuIGJsYWNrQm94ZXMzMDB4NjAwKHJhdGlvKVxuICB9XG4gIGlmIChzaXplID09PSAnMTYweDYwMCcpIHtcbiAgICByZXR1cm4gYmxhY2tCb3hlczE2MHg2MDAocmF0aW8pXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgRnJhbWUsIE9wdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRlXCI7XG5pbXBvcnQgeyBsZWZ0VG9wLCByaWdodEJvdHRvbSwgd2lkdGhIZWlnaHQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBnZXRGcmFtZXMzMDB4MjUwYW5kNDgweDQ4MCA9ICh7IHNwcmF5LCBpY29uLCBsYW5ndWFnZSwgc2l6ZSwgcmF0aW8sIHRleHRfMSwgdGV4dF8yIH06IE9wdGlvbnMsIGZyYW1lVGltZTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDAsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyBsZWZ0VG9wKDI4MCwgMTAwLCByYXRpbykgOiBsZWZ0VG9wKDI3NSwgMTY0LCByYXRpbykpLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYuMiwgNDcxLjgsIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICByb3RhdGU6IFwiOS42OTVkZWdcIixcbiAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtzaXplID09PSBcIjMwMHgyNTBcIiA/IFwibW92ZVNwcmF5TGVzc1wiIDogXCJtb3ZlU3ByYXlcIn0gNDAwMG1zIGxpbmVhciBpbmZpbml0ZWBcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyNSxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTUsIDk2LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyMCwgNzEsIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pXzBfQ1RBYnV0dG9uJHtsYW5ndWFnZX0ucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzMSxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjU5LCAxNDksIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjksIDQzLCByYXRpbyksXG5cbiAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMzcsXG4gICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzAsIDE3MiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0MDAsIDM0LCByYXRpbyksXG5cbiAgICAgIHRleHQ6IHRleHRfMSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImF1dG8gMzRweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIGZvbnRTaXplOiBgJHszNSAqIHJhdGlvfXB4YFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQyLFxuICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMwLCAyMTgsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDAwLCAzNCwgcmF0aW8pLFxuXG4gICAgICB0ZXh0OiB0ZXh0XzIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvIDM0cHggIWltcG9ydGFudFwiLFxuICAgICAgICBmb250U2l6ZTogYCR7MzUgKiByYXRpb31weGBcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA1MixcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoKHNpemUgPT09IFwiMzAweDI1MFwiID8gMTQzIDogOTYpLCAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAyNjAgOiAyNzgpLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHtcbiAgICAgICAgW1wia2V5Ym9hcmRcIl06IHdpZHRoSGVpZ2h0KDE1NSwgOTcsIHJhdGlvICogKHNpemUgPT09IFwiMzAweDI1MFwiID8gMzQxIC8gNDI4IDogMSkpLFxuICAgICAgICBbXCJnYW1lYm95XCJdOiB3aWR0aEhlaWdodCgzNjAsIDIzOSwgMC40ICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgIFtcInN1bl91bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoMTQ3OSwgMTQ4MSwgMC4xMiAqIHJhdGlvICogKHNpemUgPT09IFwiMzAweDI1MFwiID8gMzQxIC8gNDI4IDogMSkpLFxuICAgICAgfVtpY29uXSxcblxuICAgICAgdXJsOiBgLi9pX2ljb25fJHtpY29ufS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezUgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgJHsyMyAqIGZyYW1lVGltZX1tc2BcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgXVxufVxuXG5jb25zdCBnZXRGcmFtZXMxNjB4NjAwID0gKHsgc3ByYXksIGljb24sIGxhbmd1YWdlLCBzaXplLCByYXRpbywgdGV4dF8xLCB0ZXh0XzIgfTogT3B0aW9ucywgZnJhbWVUaW1lOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMCxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMTAwMCAtIDQwICogNCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYgKiA0ICogMSwgNDcxICogNCAqIDEsIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICByb3RhdGU6IFwiNmRlZ1wiLFxuICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICBhbmltYXRpb246IGAke1wibW92ZVNwcmF5XCJ9IDQwMDBtcyBsaW5lYXIgaW5maW5pdGVgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0MDAsIDEwMDAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjUsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMzLCAyNTksIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTg0LCAxMjksIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pXzBfQ1RBYnV0dG9uJHtsYW5ndWFnZX0ucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzMSxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzMxLCAzNjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjkgKiAyLjUsIDQzICogMi41LCByYXRpbyksXG5cbiAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcblxuICAgIHtcbiAgICAgIGZyYW1lOiAzNixcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGljb24gPT09IFwic3VuX3VtYnJlbGxhXCIgPyBsZWZ0VG9wKDMwICogNCwgMTIwICogNCwgcmF0aW8pIDogbGVmdFRvcCgzMCAqIDQsIDEzMCAqIDQsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjoge1xuICAgICAgICBbXCJrZXlib2FyZFwiXTogd2lkdGhIZWlnaHQoMTU1LCA5NywgcmF0aW8gKiAyKSxcbiAgICAgICAgW1wiZ2FtZWJveVwiXTogd2lkdGhIZWlnaHQoMzYwLCAyMzksIDAuNCAqIHJhdGlvICogMiksXG4gICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAyKSxcbiAgICAgICAgW1wic3VuX3VtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCgxNDc5LCAxNDgxLCAwLjEyICogcmF0aW8gKiAyKSxcbiAgICAgIH1baWNvbl0sXG5cbiAgICAgIHVybDogYC4vaV9pY29uXyR7aWNvbn0ucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs1ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgICAgIGFuaW1hdGlvbjogYHB1bHNlICR7MjMgKiBmcmFtZVRpbWV9bXNgXG4gICAgICB9LFxuICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgfVxuICAgIH0sXG4gIF1cbn1cblxuY29uc3QgZ2V0RnJhbWVzMzAweDYwMCA9ICh7IHNwcmF5LCBpY29uLCBsYW5ndWFnZSwgc2l6ZSwgcmF0aW8sIHRleHRfMSwgdGV4dF8yIH06IE9wdGlvbnMsIGZyYW1lVGltZTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDAsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM2MCwgMTAwMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYgKiA0LCA0NzEgKiA0LCByYXRpbyksXG5cbiAgICAgIHVybDogYC4vaV9zcHJheV8ke3NwcmF5fS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcm90YXRlOiBcIjkuNjk1ZGVnXCIsXG4gICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgIGFuaW1hdGlvbjogYCR7XCJtb3ZlU3ByYXlcIn0gNDAwMG1zIGxpbmVhciBpbmZpbml0ZWBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZnJhbWU6IDI1LFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMiwgMzg4LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExNDMsIDI1MiwgcmF0aW8pLFxuXG4gICAgICB1cmw6IGAuL2lfMF9DVEFidXR0b24ke2xhbmd1YWdlfS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezYgKiBmcmFtZVRpbWV9bXNgXG4gICAgICB9LFxuICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDMxLFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgyNTkgKyAxNjUgKiA0LCAxNDkgKyAxMDkgKiA0LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI5ICogMywgNDMgKiAzLCByYXRpbyksXG5cbiAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMzcsXG4gICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNjAsIDY2MCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMDAwLCAxNzAsIHJhdGlvKSxcblxuICAgICAgdGV4dDogdGV4dF8xLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgZm9udFNpemU6IGAkezEzMiAqIHJhdGlvfXB4YFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQyLFxuICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYwLCA4NDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTEwMCwgMTcwLCByYXRpbyksXG5cbiAgICAgIHRleHQ6IHRleHRfMixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImF1dG8gMzRweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIGZvbnRTaXplOiBgJHsxMzIgKiByYXRpb31weGBcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA1MixcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoKDk2KSwgKDI3OCArIDE5MCAqIDQpLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHtcbiAgICAgICAgW1wia2V5Ym9hcmRcIl06IHdpZHRoSGVpZ2h0KDE1NSwgOTcsIHJhdGlvICogMiksXG4gICAgICAgIFtcImdhbWVib3lcIl06IHdpZHRoSGVpZ2h0KDM2MCwgMjM5LCAwLjQgKiByYXRpbyAqIDIpLFxuICAgICAgICBbXCJ1bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoNzYyLCA3MjcsIDAuMiAqIHJhdGlvICogMiksXG4gICAgICAgIFtcInN1bl91bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoMTQ3OSwgMTQ4MSwgMC4xMiAqIHJhdGlvICogMiksXG4gICAgICB9W2ljb25dLFxuXG4gICAgICB1cmw6IGAuL2lfaWNvbl8ke2ljb259LnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7NSAqIGZyYW1lVGltZX1tc2AsXG4gICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgICAgICBhbmltYXRpb246IGBwdWxzZSAkezIzICogZnJhbWVUaW1lfW1zYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBnZXRGcmFtZXMgPSAob3B0aW9uczogT3B0aW9ucywgZnJhbWVUaW1lOiBudW1iZXIpOiBGcmFtZVtdID0+IHtcbiAgaWYgKG9wdGlvbnMuc2l6ZSA9PT0gXCIzMDB4MjUwXCIgfHwgb3B0aW9ucy5zaXplID09PSBcIjQ4MHg0ODBcIikge1xuICAgIHJldHVybiBnZXRGcmFtZXMzMDB4MjUwYW5kNDgweDQ4MChvcHRpb25zLCBmcmFtZVRpbWUpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc2l6ZSA9PT0gXCIxNjB4NjAwXCIpIHtcbiAgICByZXR1cm4gZ2V0RnJhbWVzMTYweDYwMChvcHRpb25zLCBmcmFtZVRpbWUpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc2l6ZSA9PT0gXCIzMDB4NjAwXCIpIHtcbiAgICByZXR1cm4gZ2V0RnJhbWVzMzAweDYwMChvcHRpb25zLCBmcmFtZVRpbWUpXG4gIH1cbn0iLCJpbXBvcnQgeyBBbmltYXRlLCBPcHRpb25zIH0gZnJvbSAnLi9hbmltYXRlJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IChvcHRpb25zPzogT3B0aW9ucykgPT4ge1xuICB3aW5kb3dbJ2FwcCddID0ge1xuICAgIGFuaW1hdGU6IG5ldyBBbmltYXRlKG9wdGlvbnMgfHwge1xuICAgICAgICAgICAgaWQ6IFwiY2FudmFzXCIsXG4gICAgICAgICAgICBzcHJheTogXCJkYXJrXCIsXG4gICAgICAgICAgICBpY29uOiBcInVtYnJlbGxhXCIsXG4gICAgICAgICAgICBsYW5ndWFnZTogXCJDWlwiLFxuICAgICAgICAgICAgdGV4dF8xOiBcIkEgbMOpdG9cIixcbiAgICAgICAgICAgIHRleHRfMjogXCJidWRlIHR2b2plXCIsXG4gICAgICAgICAgICBzaXplOiBcIjE2MHg2MDBcIixcbiAgICAgICAgICAgIHJhdGlvOiAzMDAgLyAxMjAwLFxuICAgICAgICB9KSxcbiAgfVxufVxud2luZG93Wydpbml0J10gPSBpbml0XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh7XG4gICAgZWxlbWVudDogZWxlbWVudE5hbWUsXG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiAoY2hpbGRyZW5zKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjaGlsZHJlbnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgIGlmICh0eXBlb2YgKGF0dHJpYnV0ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVucykpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gW2NoaWxkcmVuc107XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuc1tpXS50YWdOYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkcmVuc1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25FbGVtZW50ID0gKHtcbiAgICBhdHRyaWJ1dGUgPSB1bmRlZmluZWQsXG4gICAgY2hpbGRyZW5zID0gdW5kZWZpbmVkLFxufSk6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6ICdidXR0b24nLFxuICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgIGNoaWxkcmVuc1xuICAgIH0pIGFzIEhUTUxCdXR0b25FbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXZFbGVtZW50ID0gKHtcbiAgICBhdHRyaWJ1dGUgPSB1bmRlZmluZWQsXG4gICAgY2hpbGRyZW5zID0gdW5kZWZpbmVkLFxufSk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgIGNoaWxkcmVuc1xuICAgIH0pIGFzIEhUTUxEaXZFbGVtZW50XG59XG4iLCJleHBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9jcmVhdGVFbGVtZW50J1xuXG5leHBvcnQgY29uc3QgbGVmdFRvcCA9IChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgbGVmdDogbGVmdCAqIHJhdGlvLFxuICB0b3A6IHRvcCAqIHJhdGlvLFxufSlcblxuZXhwb3J0IGNvbnN0IHJpZ2h0VG9wID0gKHJpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgcmlnaHQ6IHJpZ2h0ICogcmF0aW8sXG4gIHRvcDogdG9wICogcmF0aW8sXG59KVxuXG5leHBvcnQgY29uc3QgbGVmdEJvdHRvbSA9IChsZWZ0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgbGVmdDogbGVmdCAqIHJhdGlvLFxuICBib3R0b206IGJvdHRvbSAqIHJhdGlvLFxufSlcblxuZXhwb3J0IGNvbnN0IHJpZ2h0Qm90dG9tID0gKHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgcmlnaHQ6IHJpZ2h0ICogcmF0aW8sXG4gIGJvdHRvbTogYm90dG9tICogcmF0aW8sXG59KVxuXG5leHBvcnQgY29uc3Qgd2lkdGhIZWlnaHQgPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhdGlvOiBudW1iZXIgPSAxKSA9PiAoe1xuICB3aWR0aDogd2lkdGggKiByYXRpbyxcbiAgaGVpZ2h0OiBoZWlnaHQgKiByYXRpbyxcbn0pXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=