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
        console.log(options);
        var _e = __read(options.size.split("x"), 2), x = _e[0], y = _e[1];
        console.log(x, y);
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
var blackBoxes480x300 = function (ratio) {
    return [
        {
            frame: 1,
            class: 'blackBox',
            dimension: utils_1.widthHeight(199, 58, ratio),
            position: utils_1.leftTop(0, 0, ratio),
        },
        {
            frame: 8,
            class: 'blackBox',
            dimension: utils_1.widthHeight(141, 141, ratio),
            position: utils_1.leftTop(0, 0, ratio),
        },
        {
            frame: 20,
            class: 'blackBox',
            dimension: utils_1.widthHeight(31, 31, ratio),
            position: utils_1.leftTop(199, 58, ratio),
        },
        {
            frame: 3,
            class: 'blackBox',
            dimension: utils_1.widthHeight(108, 295, ratio),
            position: utils_1.leftBottom(0, 0, ratio),
        },
        {
            frame: 8,
            class: 'blackBox',
            dimension: utils_1.widthHeight(257, 192, ratio),
            position: utils_1.leftBottom(0, 0, ratio),
        },
        {
            frame: 10,
            class: 'blackBox',
            dimension: utils_1.widthHeight(31, 31, ratio),
            position: utils_1.leftBottom(108, 384, ratio),
        },
        {
            frame: 13,
            class: 'blackBox',
            dimension: utils_1.widthHeight(58, 59, ratio),
            position: utils_1.leftBottom(261, 192, ratio),
        },
        {
            frame: 18,
            class: 'blackBox',
            dimension: utils_1.widthHeight(58, 59, ratio),
            position: utils_1.leftBottom(412, 33, ratio),
        },
        {
            frame: 8,
            class: 'blackBox',
            dimension: utils_1.widthHeight(94, 187, ratio),
            position: utils_1.rightBottom(0, 0, ratio),
        },
        {
            frame: 4,
            class: 'blackBox',
            dimension: utils_1.widthHeight(349, 113, ratio),
            position: utils_1.rightBottom(0, 0, ratio),
        },
        {
            frame: 1,
            class: 'blackBox',
            dimension: utils_1.widthHeight(58, 59, ratio),
            position: utils_1.rightBottom(94, 187, ratio),
        },
        {
            frame: 19,
            class: 'blackBox',
            dimension: utils_1.widthHeight(31, 31, ratio),
            position: utils_1.rightBottom(157, 293, ratio),
        },
        {
            frame: 3,
            class: 'blackBox',
            dimension: utils_1.widthHeight(93, 151, ratio),
            position: utils_1.rightBottom(0, 324, ratio),
        },
    ];
};
var blackBoxes990and970x250 = function (ratio) {
    return [
        {
            frame: 1,
            class: 'blackBox',
            dimension: utils_1.widthHeight(89, 7, ratio),
            position: utils_1.leftTop(0, 0, ratio),
        },
        {
            frame: 20,
            class: 'blackBox',
            dimension: utils_1.widthHeight(49, 23, ratio),
            position: utils_1.leftTop(0, 0, ratio),
        },
        {
            frame: 4,
            class: 'blackBox',
            dimension: utils_1.widthHeight(30, 50, ratio),
            position: utils_1.leftTop(0, 0, ratio),
        },
        {
            frame: 19,
            class: 'blackBox',
            dimension: utils_1.widthHeight(10, 10, ratio),
            position: utils_1.leftTop(49, 24, ratio),
        },
        {
            frame: 3,
            class: 'blackBox',
            dimension: utils_1.widthHeight(65, 25, ratio),
            position: utils_1.leftBottom(0, 0, ratio),
        },
        {
            frame: 7,
            class: 'blackBox',
            dimension: utils_1.widthHeight(25, 55, ratio),
            position: utils_1.leftBottom(0, 0, ratio),
        },
        {
            frame: 5,
            class: 'blackBox',
            dimension: utils_1.widthHeight(10, 10, ratio),
            position: utils_1.leftBottom(25, 55, ratio),
        },
        {
            frame: 20,
            class: 'blackBox',
            dimension: utils_1.widthHeight(12, 16, ratio),
            position: utils_1.leftBottom(0, 72, ratio),
        },
        {
            frame: 6,
            class: 'blackBox',
            dimension: utils_1.widthHeight(111, 51, ratio),
            position: utils_1.rightBottom(0, 0, ratio),
        },
        {
            frame: 10,
            class: 'blackBox',
            dimension: utils_1.widthHeight(28, 91, ratio),
            position: utils_1.rightBottom(0, 0, ratio),
        },
        {
            frame: 23,
            class: 'blackBox',
            dimension: utils_1.widthHeight(29, 29, ratio),
            position: utils_1.rightBottom(28, 91, ratio),
        },
        {
            frame: 15,
            class: 'blackBox',
            dimension: utils_1.widthHeight(11, 11, ratio),
            position: utils_1.rightBottom(57, 120, ratio),
        },
    ];
};
var blackBoxes1200x400 = function (ratio) {
    return [
        {
            frame: 1,
            class: 'blackBox',
            dimension: utils_1.widthHeight(116, 23, ratio),
            position: utils_1.leftTop(0, 0, ratio),
        },
        {
            frame: 5,
            class: 'blackBox',
            dimension: utils_1.widthHeight(64, 44, ratio),
            position: utils_1.leftTop(0, 0, ratio),
        },
        {
            frame: 8,
            class: 'blackBox',
            dimension: utils_1.widthHeight(40, 79, ratio),
            position: utils_1.leftTop(0, 0, ratio),
        },
        {
            frame: 15,
            class: 'blackBox',
            dimension: utils_1.widthHeight(13, 13, ratio),
            position: utils_1.leftTop(64, 44, ratio),
        },
        {
            frame: 3,
            class: 'blackBox',
            dimension: utils_1.widthHeight(86, 84, ratio),
            position: utils_1.leftBottom(0, 0, ratio),
        },
        {
            frame: 6,
            class: 'blackBox',
            dimension: utils_1.widthHeight(33, 122, ratio),
            position: utils_1.leftBottom(0, 0, ratio),
        },
        {
            frame: 15,
            class: 'blackBox',
            dimension: utils_1.widthHeight(13, 13, ratio),
            position: utils_1.leftBottom(33, 122, ratio),
        },
        {
            frame: 18,
            class: 'blackBox',
            dimension: utils_1.widthHeight(16, 20, ratio),
            position: utils_1.leftBottom(0, 146, ratio),
        },
        {
            frame: 20,
            class: 'blackBox',
            dimension: utils_1.widthHeight(40, 40, ratio),
            position: utils_1.leftBottom(123, 3, ratio),
        },
        {
            frame: 7,
            class: 'blackBox',
            dimension: utils_1.widthHeight(143, 27, ratio),
            position: utils_1.rightBottom(0, 0, ratio),
        },
        {
            frame: 11,
            class: 'blackBox',
            dimension: utils_1.widthHeight(37, 78, ratio),
            position: utils_1.rightBottom(0, 0, ratio),
        },
        {
            frame: 16,
            class: 'blackBox',
            dimension: utils_1.widthHeight(37, 37, ratio),
            position: utils_1.rightBottom(37, 80, ratio),
        },
        {
            frame: 20,
            class: 'blackBox',
            dimension: utils_1.widthHeight(14, 14, ratio),
            position: utils_1.rightBottom(74, 117, ratio),
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
    if (size === '480x300') {
        return blackBoxes480x300(ratio);
    }
    if (size === '990x250' || size === '970x250') {
        return blackBoxes990and970x250(ratio);
    }
    if (size === '1200x400') {
        return blackBoxes1200x400(ratio);
    }
    return [];
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
var getFrames480x300 = function (_a, frameTime) {
    var _b;
    var spray = _a.spray, icon = _a.icon, language = _a.language, size = _a.size, ratio = _a.ratio, text_1 = _a.text_1, text_2 = _a.text_2;
    return [
        {
            frame: 0,
            class: 'image',
            position: utils_1.leftTop(300 * 1 / ratio, 20 * 1 / ratio, ratio),
            dimension: utils_1.widthHeight(0.85 * 156 * 1 / ratio, 0.85 * 471 * 1 / ratio, ratio),
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
            position: utils_1.leftTop(152, 152, ratio),
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
            position: utils_1.leftTop(1113, 330, ratio),
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
            frame: 37,
            class: 'text',
            position: utils_1.leftTop(210, 413, ratio),
            dimension: utils_1.widthHeight(1000, 143, ratio),
            text: text_1,
            style: {
                backgroundSize: "auto 34px !important",
                fontSize: 143 * ratio + "px"
            }
        },
        {
            frame: 42,
            class: 'text',
            position: utils_1.leftTop(210, 413 + 180, ratio),
            dimension: utils_1.widthHeight(1500, 143, ratio),
            text: text_2,
            style: {
                backgroundSize: "auto 34px !important",
                fontSize: 143 * ratio + "px"
            }
        },
        {
            frame: 52,
            class: 'image',
            position: icon === "sun_umbrella" ? utils_1.leftTop(180 * 1 / ratio, 185 * 1 / ratio, ratio) : utils_1.leftTop(180 * 1 / ratio, 190 * 1 / ratio, ratio),
            dimension: (_b = {},
                _b["keyboard"] = utils_1.widthHeight(155, 97, ratio * 2.5),
                _b["gameboy"] = utils_1.widthHeight(360, 239, 0.4 * ratio * 2.5),
                _b["umbrella"] = utils_1.widthHeight(762, 727, 0.2 * ratio * 2.5),
                _b["sun_umbrella"] = utils_1.widthHeight(1479, 1481, 0.12 * ratio * 2.5),
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
var getFrames990and970x250 = function (_a, frameTime) {
    var _b;
    var spray = _a.spray, icon = _a.icon, language = _a.language, size = _a.size, ratio = _a.ratio, text_1 = _a.text_1, text_2 = _a.text_2;
    var leftDiff = size === "970x250" ? -20 : 0;
    return [
        {
            frame: 0,
            class: 'image',
            position: utils_1.leftTop(680 + leftDiff, -100, ratio),
            dimension: utils_1.widthHeight(1.05 * 156 * 1 / ratio, 1.05 * 471 * 1 / ratio, ratio),
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
            position: utils_1.leftTop(95 + leftDiff, 30, ratio),
            dimension: utils_1.widthHeight(498, 92, ratio),
            url: "./i_0_CTAbutton" + language + "V2.png",
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
            position: utils_1.leftTop(465, 100, ratio),
            dimension: utils_1.widthHeight(45, 68, ratio),
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
            position: utils_1.leftTop(130 + leftDiff, 130, ratio),
            dimension: utils_1.widthHeight(1000, 143, ratio),
            text: text_1,
            style: {
                backgroundSize: "auto 34px !important",
                fontSize: 44 * ratio + "px"
            }
        },
        {
            frame: 42,
            class: 'text',
            position: utils_1.leftTop(130 + leftDiff, 180, ratio),
            dimension: utils_1.widthHeight(1500, 143, ratio),
            text: text_2,
            style: {
                backgroundSize: "auto 34px !important",
                fontSize: 44 * ratio + "px"
            }
        },
        {
            frame: 52,
            class: 'image',
            position: icon === "sun_umbrella" ? utils_1.leftTop(530 + leftDiff, 132, ratio) : utils_1.leftTop(530 + leftDiff, 138, ratio),
            dimension: (_b = {},
                _b["keyboard"] = utils_1.widthHeight(155, 97, ratio * .65),
                _b["gameboy"] = utils_1.widthHeight(360, 239, 0.4 * ratio * .65),
                _b["umbrella"] = utils_1.widthHeight(762, 727, 0.2 * ratio * .65),
                _b["sun_umbrella"] = utils_1.widthHeight(1479, 1481, 0.12 * ratio * .65),
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
var getFrames1200x400 = function (_a, frameTime) {
    var _b;
    var spray = _a.spray, icon = _a.icon, language = _a.language, size = _a.size, ratio = _a.ratio, text_1 = _a.text_1, text_2 = _a.text_2;
    return [
        {
            frame: 0,
            class: 'image',
            position: utils_1.leftTop(860, 10, ratio),
            dimension: utils_1.widthHeight(1.15 * 156 * 1 / ratio, 1.15 * 471 * 1 / ratio, ratio),
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
            position: utils_1.leftTop(83, 70, ratio),
            dimension: utils_1.widthHeight(679, 125, ratio),
            url: "./i_0_CTAbutton" + language + "V2.png",
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
            position: utils_1.leftTop(670, 163, ratio),
            dimension: utils_1.widthHeight(45, 68, ratio),
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
            position: utils_1.leftTop(134, 202, ratio),
            dimension: utils_1.widthHeight(1000, 143, ratio),
            text: text_1,
            style: {
                backgroundSize: "auto 34px !important",
                fontSize: 60 * ratio + "px"
            }
        },
        {
            frame: 42,
            class: 'text',
            position: utils_1.leftTop(134, 276, ratio),
            dimension: utils_1.widthHeight(1500, 143, ratio),
            text: text_2,
            style: {
                backgroundSize: "auto 34px !important",
                fontSize: 60 * ratio + "px"
            }
        },
        {
            frame: 52,
            class: 'image',
            position: icon === "sun_umbrella" ? utils_1.leftTop(660, 255, ratio) : utils_1.leftTop(660, 265, ratio),
            dimension: (_b = {},
                _b["keyboard"] = utils_1.widthHeight(155, 97, ratio * .80),
                _b["gameboy"] = utils_1.widthHeight(360, 239, 0.4 * ratio * .80),
                _b["umbrella"] = utils_1.widthHeight(762, 727, 0.2 * ratio * .80),
                _b["sun_umbrella"] = utils_1.widthHeight(1479, 1481, 0.12 * ratio * .80),
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
    if (options.size === "480x300") {
        return getFrames480x300(options, frameTime);
    }
    if (options.size === '990x250' || options.size === '970x250') {
        return getFrames990and970x250(options, frameTime);
    }
    if (options.size === "1200x400") {
        return getFrames1200x400(options, frameTime);
    }
    return [];
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
            language: "SK",
            text_1: "a skús",
            text_2: "to znova",
            size: "1200x400",
            ratio: 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUUsbUJBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUNyQyxRQUFRLEVBQUUsZUFBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1NBQ3BDO1FBRUQ7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQ2xDO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1NBQ3RDO1FBRUQ7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxtQkFBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQ25DO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxtQkFBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQ25DO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxtQkFBVyxDQUFD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QUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxlQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7U0FDbEM7UUFHRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDdkMsUUFBUSxFQUFFLGtCQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbEM7UUFDRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDdkMsUUFBUSxFQUFFLGtCQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbEM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDdEM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDdEM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7U0FDckM7UUFHRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbkM7UUFDRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDdkMsUUFBUSxFQUFFLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbkM7UUFDRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDdEM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLG1CQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDdkM7UUFDRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLG1CQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDckM7S0FDRjtBQUNILENBQUM7QUFFRCxJQUFNLHVCQUF1QixHQUFHLFVBQUMsS0FBYTtJQUM1QyxPQUFPO1FBQ0w7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxlQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDL0I7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGVBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztTQUMvQjtRQUNEO1lBQ0UsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsVUFBVTtZQUNqQixTQUFTLEVBQUUsbUJBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUNyQyxRQUFRLEVBQUUsZUFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQy9CO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxlQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7U0FDakM7UUFHRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbEM7UUFDRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbEM7UUFDRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7U0FDcEM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7U0FDbkM7UUFHRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbkM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbkM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7U0FDckM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDdEM7S0FDRjtBQUNILENBQUM7QUFFRCxJQUFNLGtCQUFrQixHQUFHLFVBQUMsS0FBYTtJQUN2QyxPQUFPO1FBQ0w7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxlQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDL0I7UUFDRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGVBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztTQUMvQjtRQUNEO1lBQ0UsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsVUFBVTtZQUNqQixTQUFTLEVBQUUsbUJBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUNyQyxRQUFRLEVBQUUsZUFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQy9CO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxlQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7U0FDakM7UUFHRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbEM7UUFDRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLGtCQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDbEM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDckM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDcEM7UUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLGtCQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDcEM7UUFHRDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLG1CQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUs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O0lBQWpCLGlDQUFpQjtJQUFLLFFBQUM7UUFDaEYsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxNQUFNLEdBQUcsS0FBSztLQUN2QixDQUFDO0FBSCtFLENBRy9FO0FBRVcsbUJBQVcsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsS0FBaUI7SUFBakIsaUNBQWlCO0lBQUssUUFBQztRQUNoRixLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUs7UUFDcEIsTUFBTSxFQUFFLE1BQU0sR0FBRyxLQUFLO0tBQ3ZCLENBQUM7QUFIK0UsQ0FHL0U7Ozs7Ozs7VUN6QkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2dyYW0vLi9zcmMvYW5pbWF0ZS50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL2JsYWNrQm94ZXMudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9mcmFtZXMudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL3V0aWxzL2NyZWF0ZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vcHJvZ3JhbS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2dyYW0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXZFbGVtZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0RnJhbWVzIH0gZnJvbSBcIi4vZnJhbWVzXCI7XG5pbXBvcnQgeyBnZXRCbGFja0JveGVzIH0gZnJvbSBcIi4vYmxhY2tCb3hlc1wiO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICBzcHJheTogXCJzdW1tZXJcIiB8IFwiZGFya1wiLFxuICBpY29uOiBcImtleWJvYXJkXCIgfCBcInVtYnJlbGxhXCIgfCBcInN1bl91bWJyZWxsYVwiIHwgXCJnYW1lYm95XCIsXG4gIGxhbmd1YWdlOiBcIkNaXCIgfCBcIlNLXCIsXG4gIHRleHRfMT86IHN0cmluZ1xuICB0ZXh0XzI/OiBzdHJpbmdcbiAgc2l6ZTogXCI0ODB4NDgwXCIgfCBcIjMwMHgyNTBcIiB8IFwiMzAweDYwMFwiIHwgXCIxNjB4NjAwXCIgfCBcIjQ4MHgzMDBcIiB8IFwiOTkweDI1MFwiIHwgXCI5NzB4MjUwXCIgfCBcIjEyMDB4NDAwXCIsXG4gIHJhdGlvOiBudW1iZXIsXG4gIGlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgRnJhbWUgPSB7XG4gIGZyYW1lOiBudW1iZXIsXG4gIGNsYXNzOiBzdHJpbmcsXG4gIHBvc2l0aW9uOiB7IGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIgfSB8IHsgbGVmdDogbnVtYmVyLCBib3R0b206IG51bWJlciB9IHwgeyByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciB9IHwgeyByaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciB9XG4gIGRpbWVuc2lvbjogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9XG4gIHRleHQ/OiBzdHJpbmdcbiAgdXJsPzogc3RyaW5nXG4gIHN0eWxlPzogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPlxuICBuZXh0U3R5bGU/OiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlIHtcbiAgZnJhbWVUaW1lID0gMjA4MyAvIDUwXG5cbiAgY2FudmFzXG4gIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci5lb3RcIiB9IH0pKVxuICAgIHRoaXMuaGVhZFswXT8uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdsaW5rJywgYXR0cmlidXRlOiB7IHJlbDogXCJwcmVmZXRjaFwiLCBocmVmOiBcIi4vZm9udHMvcmlmdG9uLXJlZ3VsYXIuZW90PyNpZWZpeFwiIH0gfSkpXG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci53b2ZmMlwiIH0gfSkpXG4gICAgdGhpcy5oZWFkWzBdPy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGU6IHsgcmVsOiBcInByZWZldGNoXCIsIGhyZWY6IFwiLi9mb250cy9yaWZ0b24tcmVndWxhci53b2ZmXCIgfSB9KSlcblxuICAgIGNvbnN0IGZyYW1lcyA9IFsuLi5nZXRGcmFtZXMob3B0aW9ucywgdGhpcy5mcmFtZVRpbWUpLCAuLi5nZXRCbGFja0JveGVzKG9wdGlvbnMuc2l6ZSwgb3B0aW9ucy5yYXRpbyksXVxuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmlkKVxuXG4gICAgY29uc29sZS5sb2cob3B0aW9ucylcbiAgICBjb25zdCBbeCwgeV0gPSBvcHRpb25zLnNpemUuc3BsaXQoXCJ4XCIpXG4gICAgY29uc29sZS5sb2coeCwgeSlcblxuICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gYCR7eH1weGBcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHt5fXB4YFxuXG4gICAgZnJhbWVzLmZvckVhY2goKGZyYW1lLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKCd1cmwnIGluIGZyYW1lKSB7XG4gICAgICAgIHRoaXMuaGVhZFswXT8uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdsaW5rJywgYXR0cmlidXRlOiB7IHJlbDogXCJwcmVmZXRjaFwiLCBocmVmOiBmcmFtZS51cmwgfSB9KSlcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KHsgYXR0cmlidXRlOiB7IGNsYXNzOiBgJHtmcmFtZS5jbGFzc30gcG9hYCwgW1wiZGF0YS1mcmFtZVwiXTogZnJhbWUuZnJhbWUsIFtcImRhdGEtaW5kZXhcIl06IGluZGV4IH0gfSlcblxuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7ZnJhbWUuZGltZW5zaW9uLndpZHRofXB4YFxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2ZyYW1lLmRpbWVuc2lvbi5oZWlnaHR9cHhgXG4gICAgICAgIGlmICgndG9wJyBpbiBmcmFtZS5wb3NpdGlvbikge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7ZnJhbWUucG9zaXRpb24udG9wfXB4YFxuICAgICAgICB9XG4gICAgICAgIGlmICgnYm90dG9tJyBpbiBmcmFtZS5wb3NpdGlvbikge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gYCR7ZnJhbWUucG9zaXRpb24uYm90dG9tfXB4YFxuICAgICAgICB9XG4gICAgICAgIGlmICgnbGVmdCcgaW4gZnJhbWUucG9zaXRpb24pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtmcmFtZS5wb3NpdGlvbi5sZWZ0fXB4YFxuICAgICAgICB9XG4gICAgICAgIGlmICgncmlnaHQnIGluIGZyYW1lLnBvc2l0aW9uKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9IGAke2ZyYW1lLnBvc2l0aW9uLnJpZ2h0fXB4YFxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoZnJhbWUudXJsKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtmcmFtZS51cmx9XCIpYFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyYW1lLnRleHQpIHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGZyYW1lLnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhmcmFtZS5zdHlsZSB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGZyYW1lLnN0eWxlW2tleV1cbiAgICAgICAgfSlcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhmcmFtZS5uZXh0U3R5bGUgfHwge30pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGZyYW1lLm5leHRTdHlsZVtrZXldXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgdGhpcy5mcmFtZVRpbWUpXG5cbiAgICAgICAgdGhpcy5jYW52YXMuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgIH0sIGZyYW1lLmZyYW1lICogdGhpcy5mcmFtZVRpbWUpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgRnJhbWUsIE9wdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRlXCI7XG5pbXBvcnQgeyBsZWZ0Qm90dG9tLCBsZWZ0VG9wLCByaWdodEJvdHRvbSwgcmlnaHRUb3AsIHdpZHRoSGVpZ2h0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgYmxhY2tCb3hlczQ4MHg0ODAgPSAocmF0aW86IG51bWJlciA9IDEpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMzQsIDIyLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyLCAzMywgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYyLCA2MiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOSwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMiwgMzcwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDksIDgsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzNzAsIDU1LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExLCAxMSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDExLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0MjAsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjcsIDM1LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM5OSwgMzUsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjEsIDIxLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDc5LCA0MTQsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTYsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMxNSwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg1NSwgMzQsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0NywgNjAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTM0LCAyMiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzOSwgMzksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDQ3LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMzLCA4OCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMjUsIDQ2MSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDMzLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDc5LCA0NywgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuY29uc3QgYmxhY2tCb3hlczMwMHgyNTAgPSAocmF0aW86IG51bWJlcikgPT4ge1xuICBjb25zdCBkaWZmID0gODAuMlxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAyLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzNCwgMjIsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCA0MDAgLSBkaWZmLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyLCAzMywgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYyLCA2MiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOSwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMiwgMzcwIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg5LCA4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTA0MywgMjIwLCAzMDAgLyAxMzczKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTgsIDE4LCAzMDAgLyAxMzczKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDIwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI3LCAzNSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE0LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzOTksIDM1LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDIxLCAyMSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg3OSwgNDE0IC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzE1LCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDU1LCAzNCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE3LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQ3LCA2MCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMzQsIDIyLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM5LCAzOSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE5LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0NDcsIDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzMsIDg4LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjAsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEyNSwgNDYxIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOCwgMTksIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgNDMzIC0gZGlmZiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg3OSwgNDcsIHJhdGlvKSxcbiAgICB9LFxuICBdXG59XG5cbmNvbnN0IGJsYWNrQm94ZXMzMDB4NjAwID0gKHJhdGlvOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxOTQsIDIwNywgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM3MywgMTI0LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTgsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNjYsIDI2MCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE3LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEzNywgMTM3LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzNzMsIDEyNCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTM3LCAxMjQsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDUxMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDY4LCA2OCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTE2LCAyNjAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg4NSwgODUsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEwMCwgMTQ4NSwgcmF0aW8pLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBmcmFtZTogNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNDAsIDE0MCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRCb3R0b20oMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNjAsIDYwLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdEJvdHRvbSgxNDAsIDE0MCwgcmF0aW8pLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBmcmFtZTogMTcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTMyLCAyNTIsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyMzYsIDEwNCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg2MCwgNjAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgxMzIsIDI1MiwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDUyLCA1NiwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDQwOCwgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuY29uc3QgYmxhY2tCb3hlczE2MHg2MDAgPSAocmF0aW86IG51bWJlcikgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAxLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDE2OSwgMTExLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjcyLCA3MCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE4LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDk1LCAxNTAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg4MCwgODAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDI3MiwgNzAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDgwLCA3MCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjcyICsgODAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzOSwgMzksIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEyNCwgMTQ5LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjIsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzgsIDM4LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg5MCwgNzcxLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzgsIDM4LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogcmlnaHRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE3LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEyNiwgMzUyLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogcmlnaHRUb3AoMCwgNjc1LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyMjQsIDg1LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0MjYsIDczOCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDEyLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQ4LCA0OCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDY2LCA2MjYsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0OCwgNDgsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDU3NSwgNTM2LCByYXRpbyksXG4gICAgfSxcbiAgXVxufVxuXG5jb25zdCBibGFja0JveGVzNDgweDMwMCA9IChyYXRpbzogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDEsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTk5LCA1OCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDgsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTQxLCAxNDEsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMSwgMzEsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDE5OSwgNTgsIHJhdGlvKSxcbiAgICB9LFxuXG5cbiAgICB7XG4gICAgICBmcmFtZTogMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMDgsIDI5NSwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRCb3R0b20oMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDgsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjU3LCAxOTIsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMSwgMzEsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDEwOCwgMzg0LCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTgsIDU5LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdEJvdHRvbSgyNjEsIDE5MiwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDE4LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDU4LCA1OSwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRCb3R0b20oNDEyLCAzMywgcmF0aW8pLFxuICAgIH0sXG5cblxuICAgIHtcbiAgICAgIGZyYW1lOiA4LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDk0LCAxODcsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzNDksIDExMywgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDU4LCA1OSwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDk0LCAxODcsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMSwgMzEsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgxNTcsIDI5MywgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoOTMsIDE1MSwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDMyNCwgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuY29uc3QgYmxhY2tCb3hlczk5MGFuZDk3MHgyNTAgPSAocmF0aW86IG51bWJlcikgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAxLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDg5LCA3LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjAsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDksIDIzLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzMCwgNTAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMCwgMTAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDQ5LCAyNCwgcmF0aW8pLFxuICAgIH0sXG5cblxuICAgIHtcbiAgICAgIGZyYW1lOiAzLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDY1LCAyNSwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRCb3R0b20oMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjUsIDU1LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMCwgMTAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDI1LCA1NSwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEyLCAxNiwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRCb3R0b20oMCwgNzIsIHJhdGlvKSxcbiAgICB9LFxuXG5cbiAgICB7XG4gICAgICBmcmFtZTogNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMTEsIDUxLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogcmlnaHRCb3R0b20oMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDEwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI4LCA5MSwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyOSwgMjksIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgyOCwgOTEsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMSwgMTEsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSg1NywgMTIwLCByYXRpbyksXG4gICAgfSxcbiAgXVxufVxuXG5jb25zdCBibGFja0JveGVzMTIwMHg0MDAgPSAocmF0aW86IG51bWJlcikgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAxLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExNiwgMjMsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA1LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDY0LCA0NCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDgsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDAsIDc5LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTUsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTMsIDEzLCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg2NCwgNDQsIHJhdGlvKSxcbiAgICB9LFxuXG5cbiAgICB7XG4gICAgICBmcmFtZTogMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg4NiwgODQsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMzLCAxMjIsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMywgMTMsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDMzLCAxMjIsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxOCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNiwgMjAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0Qm90dG9tKDAsIDE0NiwgcmF0aW8pLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDIwLFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQwLCA0MCwgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IGxlZnRCb3R0b20oMTIzLCAzLCByYXRpbyksXG4gICAgfSxcblxuXG4gICAge1xuICAgICAgZnJhbWU6IDcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTQzLCAyNywgcmF0aW8pLFxuICAgICAgcG9zaXRpb246IHJpZ2h0Qm90dG9tKDAsIDAsIHJhdGlvKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgzNywgNzgsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTYsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzcsIDM3LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogcmlnaHRCb3R0b20oMzcsIDgwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjAsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTQsIDE0LCByYXRpbyksXG4gICAgICBwb3NpdGlvbjogcmlnaHRCb3R0b20oNzQsIDExNywgcmF0aW8pLFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEJsYWNrQm94ZXMgPSAoc2l6ZTogT3B0aW9uc1snc2l6ZSddLCByYXRpbzogbnVtYmVyKTogRnJhbWVbXSA9PiB7XG4gIGlmIChzaXplID09PSAnNDgweDQ4MCcpIHtcbiAgICByZXR1cm4gYmxhY2tCb3hlczQ4MHg0ODAocmF0aW8pXG4gIH1cbiAgaWYgKHNpemUgPT09ICczMDB4MjUwJykge1xuICAgIHJldHVybiBibGFja0JveGVzMzAweDI1MChyYXRpbylcbiAgfVxuICBpZiAoc2l6ZSA9PT0gJzMwMHg2MDAnKSB7XG4gICAgcmV0dXJuIGJsYWNrQm94ZXMzMDB4NjAwKHJhdGlvKVxuICB9XG4gIGlmIChzaXplID09PSAnMTYweDYwMCcpIHtcbiAgICByZXR1cm4gYmxhY2tCb3hlczE2MHg2MDAocmF0aW8pXG4gIH1cbiAgaWYgKHNpemUgPT09ICc0ODB4MzAwJykge1xuICAgIHJldHVybiBibGFja0JveGVzNDgweDMwMChyYXRpbylcbiAgfVxuICBpZiAoc2l6ZSA9PT0gJzk5MHgyNTAnIHx8IHNpemUgPT09ICc5NzB4MjUwJykge1xuICAgIHJldHVybiBibGFja0JveGVzOTkwYW5kOTcweDI1MChyYXRpbylcbiAgfVxuICBpZiAoc2l6ZSA9PT0gJzEyMDB4NDAwJykge1xuICAgIHJldHVybiBibGFja0JveGVzMTIwMHg0MDAocmF0aW8pXG4gIH1cblxuICByZXR1cm4gW11cbn1cblxuIiwiaW1wb3J0IHsgRnJhbWUsIE9wdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRlXCI7XG5pbXBvcnQgeyBsZWZ0VG9wLCByaWdodEJvdHRvbSwgd2lkdGhIZWlnaHQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBnZXRGcmFtZXMzMDB4MjUwYW5kNDgweDQ4MCA9ICh7IHNwcmF5LCBpY29uLCBsYW5ndWFnZSwgc2l6ZSwgcmF0aW8sIHRleHRfMSwgdGV4dF8yIH06IE9wdGlvbnMsIGZyYW1lVGltZTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDAsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyBsZWZ0VG9wKDI4MCwgMTAwLCByYXRpbykgOiBsZWZ0VG9wKDI3NSwgMTY0LCByYXRpbykpLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYuMiwgNDcxLjgsIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICByb3RhdGU6IFwiOS42OTVkZWdcIixcbiAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtzaXplID09PSBcIjMwMHgyNTBcIiA/IFwibW92ZVNwcmF5TGVzc1wiIDogXCJtb3ZlU3ByYXlcIn0gNDAwMG1zIGxpbmVhciBpbmZpbml0ZWBcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyNSxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTUsIDk2LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDMyMCwgNzEsIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pXzBfQ1RBYnV0dG9uJHtsYW5ndWFnZX0ucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzMSxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjU5LCAxNDksIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjksIDQzLCByYXRpbyksXG5cbiAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMzcsXG4gICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzAsIDE3MiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0MDAsIDM0LCByYXRpbyksXG5cbiAgICAgIHRleHQ6IHRleHRfMSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImF1dG8gMzRweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIGZvbnRTaXplOiBgJHszNSAqIHJhdGlvfXB4YFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQyLFxuICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMwLCAyMTgsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDAwLCAzNCwgcmF0aW8pLFxuXG4gICAgICB0ZXh0OiB0ZXh0XzIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvIDM0cHggIWltcG9ydGFudFwiLFxuICAgICAgICBmb250U2l6ZTogYCR7MzUgKiByYXRpb31weGBcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA1MixcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoKHNpemUgPT09IFwiMzAweDI1MFwiID8gMTQzIDogOTYpLCAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAyNjAgOiAyNzgpLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHtcbiAgICAgICAgW1wia2V5Ym9hcmRcIl06IHdpZHRoSGVpZ2h0KDE1NSwgOTcsIHJhdGlvICogKHNpemUgPT09IFwiMzAweDI1MFwiID8gMzQxIC8gNDI4IDogMSkpLFxuICAgICAgICBbXCJnYW1lYm95XCJdOiB3aWR0aEhlaWdodCgzNjAsIDIzOSwgMC40ICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAoc2l6ZSA9PT0gXCIzMDB4MjUwXCIgPyAzNDEgLyA0MjggOiAxKSksXG4gICAgICAgIFtcInN1bl91bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoMTQ3OSwgMTQ4MSwgMC4xMiAqIHJhdGlvICogKHNpemUgPT09IFwiMzAweDI1MFwiID8gMzQxIC8gNDI4IDogMSkpLFxuICAgICAgfVtpY29uXSxcblxuICAgICAgdXJsOiBgLi9pX2ljb25fJHtpY29ufS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezUgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgJHsyMyAqIGZyYW1lVGltZX1tc2BcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgXVxufVxuXG5jb25zdCBnZXRGcmFtZXMxNjB4NjAwID0gKHsgc3ByYXksIGljb24sIGxhbmd1YWdlLCBzaXplLCByYXRpbywgdGV4dF8xLCB0ZXh0XzIgfTogT3B0aW9ucywgZnJhbWVUaW1lOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBmcmFtZTogMCxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMTAwMCAtIDQwICogNCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYgKiA0ICogMSwgNDcxICogNCAqIDEsIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICByb3RhdGU6IFwiNmRlZ1wiLFxuICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICBhbmltYXRpb246IGAke1wibW92ZVNwcmF5XCJ9IDQwMDBtcyBsaW5lYXIgaW5maW5pdGVgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0MDAsIDEwMDAsIHJhdGlvKSxcbiAgICAgIHBvc2l0aW9uOiByaWdodEJvdHRvbSgwLCAwLCByYXRpbyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjUsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDMzLCAyNTksIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTg0LCAxMjksIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pXzBfQ1RBYnV0dG9uJHtsYW5ndWFnZX0ucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzMSxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzMxLCAzNjIsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMjkgKiAyLjUsIDQzICogMi41LCByYXRpbyksXG5cbiAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcblxuICAgIHtcbiAgICAgIGZyYW1lOiAzNixcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGljb24gPT09IFwic3VuX3VtYnJlbGxhXCIgPyBsZWZ0VG9wKDMwICogNCwgMTIwICogNCwgcmF0aW8pIDogbGVmdFRvcCgzMCAqIDQsIDEzMCAqIDQsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjoge1xuICAgICAgICBbXCJrZXlib2FyZFwiXTogd2lkdGhIZWlnaHQoMTU1LCA5NywgcmF0aW8gKiAyKSxcbiAgICAgICAgW1wiZ2FtZWJveVwiXTogd2lkdGhIZWlnaHQoMzYwLCAyMzksIDAuNCAqIHJhdGlvICogMiksXG4gICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAyKSxcbiAgICAgICAgW1wic3VuX3VtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCgxNDc5LCAxNDgxLCAwLjEyICogcmF0aW8gKiAyKSxcbiAgICAgIH1baWNvbl0sXG5cbiAgICAgIHVybDogYC4vaV9pY29uXyR7aWNvbn0ucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs1ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgICAgIGFuaW1hdGlvbjogYHB1bHNlICR7MjMgKiBmcmFtZVRpbWV9bXNgXG4gICAgICB9LFxuICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgfVxuICAgIH0sXG4gIF1cbn1cblxuY29uc3QgZ2V0RnJhbWVzMzAweDYwMCA9ICh7IHNwcmF5LCBpY29uLCBsYW5ndWFnZSwgc2l6ZSwgcmF0aW8sIHRleHRfMSwgdGV4dF8yIH06IE9wdGlvbnMsIGZyYW1lVGltZTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDAsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM2MCwgMTAwMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYgKiA0LCA0NzEgKiA0LCByYXRpbyksXG5cbiAgICAgIHVybDogYC4vaV9zcHJheV8ke3NwcmF5fS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcm90YXRlOiBcIjkuNjk1ZGVnXCIsXG4gICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgIGFuaW1hdGlvbjogYCR7XCJtb3ZlU3ByYXlcIn0gNDAwMG1zIGxpbmVhciBpbmZpbml0ZWBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZnJhbWU6IDI1LFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMiwgMzg4LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExNDMsIDI1MiwgcmF0aW8pLFxuXG4gICAgICB1cmw6IGAuL2lfMF9DVEFidXR0b24ke2xhbmd1YWdlfS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezYgKiBmcmFtZVRpbWV9bXNgXG4gICAgICB9LFxuICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDMxLFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgyNTkgKyAxNjUgKiA0LCAxNDkgKyAxMDkgKiA0LCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI5ICogMywgNDMgKiAzLCByYXRpbyksXG5cbiAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMzcsXG4gICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNjAsIDY2MCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMDAwLCAxNzAsIHJhdGlvKSxcblxuICAgICAgdGV4dDogdGV4dF8xLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgZm9udFNpemU6IGAkezEzMiAqIHJhdGlvfXB4YFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQyLFxuICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDYwLCA4NDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTEwMCwgMTcwLCByYXRpbyksXG5cbiAgICAgIHRleHQ6IHRleHRfMixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImF1dG8gMzRweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIGZvbnRTaXplOiBgJHsxMzIgKiByYXRpb31weGBcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA1MixcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoKDk2KSwgKDI3OCArIDE5MCAqIDQpLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHtcbiAgICAgICAgW1wia2V5Ym9hcmRcIl06IHdpZHRoSGVpZ2h0KDE1NSwgOTcsIHJhdGlvICogMiksXG4gICAgICAgIFtcImdhbWVib3lcIl06IHdpZHRoSGVpZ2h0KDM2MCwgMjM5LCAwLjQgKiByYXRpbyAqIDIpLFxuICAgICAgICBbXCJ1bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoNzYyLCA3MjcsIDAuMiAqIHJhdGlvICogMiksXG4gICAgICAgIFtcInN1bl91bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoMTQ3OSwgMTQ4MSwgMC4xMiAqIHJhdGlvICogMiksXG4gICAgICB9W2ljb25dLFxuXG4gICAgICB1cmw6IGAuL2lfaWNvbl8ke2ljb259LnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7NSAqIGZyYW1lVGltZX1tc2AsXG4gICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgICAgICBhbmltYXRpb246IGBwdWxzZSAkezIzICogZnJhbWVUaW1lfW1zYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICBdXG59XG5cbmNvbnN0IGdldEZyYW1lczQ4MHgzMDAgPSAoeyBzcHJheSwgaWNvbiwgbGFuZ3VhZ2UsIHNpemUsIHJhdGlvLCB0ZXh0XzEsIHRleHRfMiB9OiBPcHRpb25zLCBmcmFtZVRpbWU6IG51bWJlcikgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAwLFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgzMDAgKiAxIC8gcmF0aW8sIDIwICogMSAvIHJhdGlvLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDAuODUgKiAxNTYgKiAxIC8gcmF0aW8sIDAuODUgKiA0NzEgKiAxIC8gcmF0aW8sIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICByb3RhdGU6IFwiOS42OTVkZWdcIixcbiAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtcIm1vdmVTcHJheVwifSA0MDAwbXMgbGluZWFyIGluZmluaXRlYFxuICAgICAgfVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBmcmFtZTogMjUsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDE1MiwgMTUyLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDExNDMsIDI1MiwgcmF0aW8pLFxuXG4gICAgICB1cmw6IGAuL2lfMF9DVEFidXR0b24ke2xhbmd1YWdlfS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezYgKiBmcmFtZVRpbWV9bXNgXG4gICAgICB9LFxuICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBmcmFtZTogMzEsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDExMTMsIDMzMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgyOSAqIDIuNSwgNDMgKiAyLjUsIHJhdGlvKSxcblxuICAgICAgdXJsOiAnLi9pX2NsaWNrLnBuZycsXG4gICAgICBzdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7NCAqIGZyYW1lVGltZX1tc2AsXG4gICAgICAgIGFuaW1hdGlvbjogYG1vdmVDdXJzb3IgMjAwMG1zIGluZmluaXRlYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZnJhbWU6IDM3LFxuICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDIxMCwgNDEzLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEwMDAsIDE0MywgcmF0aW8pLFxuXG4gICAgICB0ZXh0OiB0ZXh0XzEsXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvIDM0cHggIWltcG9ydGFudFwiLFxuICAgICAgICBmb250U2l6ZTogYCR7MTQzICogcmF0aW99cHhgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNDIsXG4gICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjEwLCA0MTMgKyAxODAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTUwMCwgMTQzLCByYXRpbyksXG5cbiAgICAgIHRleHQ6IHRleHRfMixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImF1dG8gMzRweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIGZvbnRTaXplOiBgJHsxNDMgKiByYXRpb31weGBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZnJhbWU6IDUyLFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogaWNvbiA9PT0gXCJzdW5fdW1icmVsbGFcIiA/IGxlZnRUb3AoMTgwICogMSAvIHJhdGlvLCAxODUgKiAxIC8gcmF0aW8sIHJhdGlvKSA6IGxlZnRUb3AoMTgwICogMSAvIHJhdGlvLCAxOTAgKiAxIC8gcmF0aW8sIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjoge1xuICAgICAgICBbXCJrZXlib2FyZFwiXTogd2lkdGhIZWlnaHQoMTU1LCA5NywgcmF0aW8gKiAyLjUpLFxuICAgICAgICBbXCJnYW1lYm95XCJdOiB3aWR0aEhlaWdodCgzNjAsIDIzOSwgMC40ICogcmF0aW8gKiAyLjUpLFxuICAgICAgICBbXCJ1bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoNzYyLCA3MjcsIDAuMiAqIHJhdGlvICogMi41KSxcbiAgICAgICAgW1wic3VuX3VtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCgxNDc5LCAxNDgxLCAwLjEyICogcmF0aW8gKiAyLjUpLFxuICAgICAgfVtpY29uXSxcblxuICAgICAgdXJsOiBgLi9pX2ljb25fJHtpY29ufS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezUgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgJHsyMyAqIGZyYW1lVGltZX1tc2BcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgXVxufVxuXG5jb25zdCBnZXRGcmFtZXM5OTBhbmQ5NzB4MjUwID0gKHsgc3ByYXksIGljb24sIGxhbmd1YWdlLCBzaXplLCByYXRpbywgdGV4dF8xLCB0ZXh0XzIgfTogT3B0aW9ucywgZnJhbWVUaW1lOiBudW1iZXIpID0+IHtcbiAgY29uc3QgbGVmdERpZmYgPSBzaXplID09PVwiOTcweDI1MFwiID8gLTIwIDogMFxuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDAsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDY4MCArIGxlZnREaWZmLCAtMTAwLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEuMDUgKiAxNTYgKiAxIC8gcmF0aW8sIDEuMDUgKiA0NzEgKiAxIC8gcmF0aW8sIHJhdGlvKSxcblxuICAgICAgdXJsOiBgLi9pX3NwcmF5XyR7c3ByYXl9LnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICByb3RhdGU6IFwiOS42OTVkZWdcIixcbiAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtcIm1vdmVTcHJheVwifSA0MDAwbXMgbGluZWFyIGluZmluaXRlYFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDI1LFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg5NSArIGxlZnREaWZmLCAzMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0OTgsIDkyLCByYXRpbyksXG5cbiAgICAgIHVybDogYC4vaV8wX0NUQWJ1dHRvbiR7bGFuZ3VhZ2V9VjIucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs2ICogZnJhbWVUaW1lfW1zYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzMSxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoNDY1LCAxMDAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNDUsIDY4LCByYXRpbyksXG5cbiAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICBhbmltYXRpb246IGBtb3ZlQ3Vyc29yIDIwMDBtcyBpbmZpbml0ZWBcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMzcsXG4gICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTMwICsgbGVmdERpZmYsIDEzMCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMDAwLCAxNDMsIHJhdGlvKSxcblxuICAgICAgdGV4dDogdGV4dF8xLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgZm9udFNpemU6IGAkezQ0ICogcmF0aW99cHhgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNDIsXG4gICAgICBjbGFzczogJ3RleHQnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTMwICsgbGVmdERpZmYsIDE4MCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTAwLCAxNDMsIHJhdGlvKSxcblxuICAgICAgdGV4dDogdGV4dF8yLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgZm9udFNpemU6IGAkezQ0ICogcmF0aW99cHhgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNTIsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBpY29uID09PSBcInN1bl91bWJyZWxsYVwiID8gbGVmdFRvcCg1MzAgKyBsZWZ0RGlmZiwgMTMyLCByYXRpbykgOiBsZWZ0VG9wKDUzMCArIGxlZnREaWZmLCAxMzgsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjoge1xuICAgICAgICBbXCJrZXlib2FyZFwiXTogd2lkdGhIZWlnaHQoMTU1LCA5NywgcmF0aW8gKiAuNjUpLFxuICAgICAgICBbXCJnYW1lYm95XCJdOiB3aWR0aEhlaWdodCgzNjAsIDIzOSwgMC40ICogcmF0aW8gKiAuNjUpLFxuICAgICAgICBbXCJ1bWJyZWxsYVwiXTogd2lkdGhIZWlnaHQoNzYyLCA3MjcsIDAuMiAqIHJhdGlvICogLjY1KSxcbiAgICAgICAgW1wic3VuX3VtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCgxNDc5LCAxNDgxLCAwLjEyICogcmF0aW8gKiAuNjUpLFxuICAgICAgfVtpY29uXSxcbiAgICAgIHVybDogYC4vaV9pY29uXyR7aWNvbn0ucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs1ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgICAgIGFuaW1hdGlvbjogYHB1bHNlICR7MjMgKiBmcmFtZVRpbWV9bXNgXG4gICAgICB9LFxuICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgfVxuICAgIH0sXG4gIF1cbn1cblxuXG5jb25zdCBnZXRGcmFtZXMxMjAweDQwMCA9ICh7IHNwcmF5LCBpY29uLCBsYW5ndWFnZSwgc2l6ZSwgcmF0aW8sIHRleHRfMSwgdGV4dF8yIH06IE9wdGlvbnMsIGZyYW1lVGltZTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZnJhbWU6IDAsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDg2MCwgMTAsIHJhdGlvKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMS4xNSAqIDE1NiAqIDEgLyByYXRpbywgMS4xNSAqIDQ3MSAqIDEgLyByYXRpbywgcmF0aW8pLFxuXG4gICAgICB1cmw6IGAuL2lfc3ByYXlfJHtzcHJheX0ucG5nYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHJvdGF0ZTogXCI5LjY5NWRlZ1wiLFxuICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICBhbmltYXRpb246IGAke1wibW92ZVNwcmF5XCJ9IDQwMDBtcyBsaW5lYXIgaW5maW5pdGVgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjUsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDgzLCA3MCwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg2NzksIDEyNSwgcmF0aW8pLFxuXG4gICAgICB1cmw6IGAuL2lfMF9DVEFidXR0b24ke2xhbmd1YWdlfVYyLnBuZ2AsXG4gICAgICBzdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7NiAqIGZyYW1lVGltZX1tc2BcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMzEsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDY3MCwgMTYzLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQ1LCA2OCwgcmF0aW8pLFxuXG4gICAgICB1cmw6ICcuL2lfY2xpY2sucG5nJyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs0ICogZnJhbWVUaW1lfW1zYCxcbiAgICAgICAgYW5pbWF0aW9uOiBgbW92ZUN1cnNvciAyMDAwbXMgaW5maW5pdGVgXG4gICAgICB9LFxuICAgICAgbmV4dFN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDM3LFxuICAgICAgY2xhc3M6ICd0ZXh0JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEzNCwgMjAyLCByYXRpbyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDEwMDAsIDE0MywgcmF0aW8pLFxuXG4gICAgICB0ZXh0OiB0ZXh0XzEsXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvIDM0cHggIWltcG9ydGFudFwiLFxuICAgICAgICBmb250U2l6ZTogYCR7NjAgKiByYXRpb31weGBcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA0MixcbiAgICAgIGNsYXNzOiAndGV4dCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgxMzQsIDI3NiwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTAwLCAxNDMsIHJhdGlvKSxcblxuICAgICAgdGV4dDogdGV4dF8yLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiYXV0byAzNHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgZm9udFNpemU6IGAkezYwICogcmF0aW99cHhgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNTIsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBpY29uID09PSBcInN1bl91bWJyZWxsYVwiID8gbGVmdFRvcCg2NjAsIDI1NSwgcmF0aW8pIDogbGVmdFRvcCg2NjAsIDI2NSwgcmF0aW8pLFxuICAgICAgZGltZW5zaW9uOiB7XG4gICAgICAgIFtcImtleWJvYXJkXCJdOiB3aWR0aEhlaWdodCgxNTUsIDk3LCByYXRpbyAqIC44MCksXG4gICAgICAgIFtcImdhbWVib3lcIl06IHdpZHRoSGVpZ2h0KDM2MCwgMjM5LCAwLjQgKiByYXRpbyAqIC44MCksXG4gICAgICAgIFtcInVtYnJlbGxhXCJdOiB3aWR0aEhlaWdodCg3NjIsIDcyNywgMC4yICogcmF0aW8gKiAuODApLFxuICAgICAgICBbXCJzdW5fdW1icmVsbGFcIl06IHdpZHRoSGVpZ2h0KDE0NzksIDE0ODEsIDAuMTIgKiByYXRpbyAqIC44MCksXG4gICAgICB9W2ljb25dLFxuICAgICAgdXJsOiBgLi9pX2ljb25fJHtpY29ufS5wbmdgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezUgKiBmcmFtZVRpbWV9bXNgLFxuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgJHsyMyAqIGZyYW1lVGltZX1tc2BcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgXVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGdldEZyYW1lcyA9IChvcHRpb25zOiBPcHRpb25zLCBmcmFtZVRpbWU6IG51bWJlcik6IEZyYW1lW10gPT4ge1xuICBpZiAob3B0aW9ucy5zaXplID09PSBcIjMwMHgyNTBcIiB8fCBvcHRpb25zLnNpemUgPT09IFwiNDgweDQ4MFwiKSB7XG4gICAgcmV0dXJuIGdldEZyYW1lczMwMHgyNTBhbmQ0ODB4NDgwKG9wdGlvbnMsIGZyYW1lVGltZSlcbiAgfVxuICBpZiAob3B0aW9ucy5zaXplID09PSBcIjE2MHg2MDBcIikge1xuICAgIHJldHVybiBnZXRGcmFtZXMxNjB4NjAwKG9wdGlvbnMsIGZyYW1lVGltZSlcbiAgfVxuICBpZiAob3B0aW9ucy5zaXplID09PSBcIjMwMHg2MDBcIikge1xuICAgIHJldHVybiBnZXRGcmFtZXMzMDB4NjAwKG9wdGlvbnMsIGZyYW1lVGltZSlcbiAgfVxuICBpZiAob3B0aW9ucy5zaXplID09PSBcIjQ4MHgzMDBcIikge1xuICAgIHJldHVybiBnZXRGcmFtZXM0ODB4MzAwKG9wdGlvbnMsIGZyYW1lVGltZSlcbiAgfVxuICBpZiAob3B0aW9ucy5zaXplID09PSAnOTkweDI1MCcgfHwgb3B0aW9ucy5zaXplID09PSAnOTcweDI1MCcpIHtcbiAgICByZXR1cm4gZ2V0RnJhbWVzOTkwYW5kOTcweDI1MChvcHRpb25zLCBmcmFtZVRpbWUpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc2l6ZSA9PT0gXCIxMjAweDQwMFwiKSB7XG4gICAgcmV0dXJuIGdldEZyYW1lczEyMDB4NDAwKG9wdGlvbnMsIGZyYW1lVGltZSlcbiAgfVxuICByZXR1cm4gW11cbn0iLCJpbXBvcnQgeyBBbmltYXRlLCBPcHRpb25zIH0gZnJvbSAnLi9hbmltYXRlJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IChvcHRpb25zPzogT3B0aW9ucykgPT4ge1xuICB3aW5kb3dbJ2FwcCddID0ge1xuICAgIGFuaW1hdGU6IG5ldyBBbmltYXRlKG9wdGlvbnMgfHwge1xuICAgICAgaWQ6IFwiY2FudmFzXCIsXG4gICAgICBzcHJheTogXCJkYXJrXCIsXG4gICAgICBpY29uOiBcInVtYnJlbGxhXCIsXG4gICAgICBsYW5ndWFnZTogXCJTS1wiLFxuICAgICAgdGV4dF8xOiBcImEgc2vDunNcIixcbiAgICAgIHRleHRfMjogXCJ0byB6bm92YVwiLFxuICAgICAgc2l6ZTogXCIxMjAweDQwMFwiLFxuICAgICAgcmF0aW86IDEsXG4gICAgfSksXG4gIH1cbn1cbndpbmRvd1snaW5pdCddID0gaW5pdFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnROYW1lLFxuICAgIGF0dHJpYnV0ZSA9IHVuZGVmaW5lZCxcbiAgICBjaGlsZHJlbnMgPSB1bmRlZmluZWQsXG59KTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0eXBlb2YgKGNoaWxkcmVucykgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gW107XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICBpZiAodHlwZW9mIChhdHRyaWJ1dGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZVtrZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbnMpKSB7XG4gICAgICAgIGNoaWxkcmVucyA9IFtjaGlsZHJlbnNdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbnNbaV0udGFnTmFtZSkge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbnNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbnNbaV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uRWxlbWVudCA9ICh7XG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MQnV0dG9uRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OiAnYnV0dG9uJyxcbiAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICBjaGlsZHJlbnNcbiAgICB9KSBhcyBIVE1MQnV0dG9uRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRGl2RWxlbWVudCA9ICh7XG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MRGl2RWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICBjaGlsZHJlbnNcbiAgICB9KSBhcyBIVE1MRGl2RWxlbWVudFxufVxuIiwiZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vY3JlYXRlRWxlbWVudCdcblxuZXhwb3J0IGNvbnN0IGxlZnRUb3AgPSAobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIGxlZnQ6IGxlZnQgKiByYXRpbyxcbiAgdG9wOiB0b3AgKiByYXRpbyxcbn0pXG5cbmV4cG9ydCBjb25zdCByaWdodFRvcCA9IChyaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIHJpZ2h0OiByaWdodCAqIHJhdGlvLFxuICB0b3A6IHRvcCAqIHJhdGlvLFxufSlcblxuZXhwb3J0IGNvbnN0IGxlZnRCb3R0b20gPSAobGVmdDogbnVtYmVyLCBib3R0b206IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIGxlZnQ6IGxlZnQgKiByYXRpbyxcbiAgYm90dG9tOiBib3R0b20gKiByYXRpbyxcbn0pXG5cbmV4cG9ydCBjb25zdCByaWdodEJvdHRvbSA9IChyaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIHJpZ2h0OiByaWdodCAqIHJhdGlvLFxuICBib3R0b206IGJvdHRvbSAqIHJhdGlvLFxufSlcblxuZXhwb3J0IGNvbnN0IHdpZHRoSGVpZ2h0ID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYXRpbzogbnVtYmVyID0gMSkgPT4gKHtcbiAgd2lkdGg6IHdpZHRoICogcmF0aW8sXG4gIGhlaWdodDogaGVpZ2h0ICogcmF0aW8sXG59KVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9