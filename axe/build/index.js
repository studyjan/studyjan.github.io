/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animate.ts":
/*!************************!*\
  !*** ./src/animate.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Animate = void 0;
var createElement_1 = __webpack_require__(/*! ./utils/createElement */ "./src/utils/createElement.ts");
var leftTop = function (left, top, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        left: left * ratio,
        top: top * ratio,
    });
};
var widthHeight = function (width, height, ratio) {
    if (ratio === void 0) { ratio = 1; }
    return ({
        width: width * ratio,
        height: height * ratio,
    });
};
var Animate = /** @class */ (function () {
    function Animate() {
        var _this = this;
        this.sizeScale = 480 / 1326;
        this.frameTime = 2083 / 50;
        this.elements = [
            {
                frame: 0,
                class: 'image',
                position: leftTop(275, 164, (1 / this.sizeScale)),
                dimension: widthHeight(156.2, 156.2 * (737 / 244), (1 / this.sizeScale)),
                url: './i_1_axe_can.png',
                style: {
                    rotate: "9.695deg",
                    zIndex: "1",
                    animation: "moveSpray 4000ms linear infinite"
                }
            },
            {
                frame: 2,
                class: 'blackBox',
                position: leftTop(0, 0),
                dimension: widthHeight(371, 60),
            },
            {
                frame: 3,
                class: 'blackBox',
                position: leftTop(0, 1105),
                dimension: widthHeight(88, 90),
            },
            {
                frame: 4,
                class: 'blackBox',
                position: leftTop(170, 170),
                dimension: widthHeight(53, 53),
            },
            {
                frame: 6,
                class: 'blackBox',
                position: leftTop(88, 1023),
                dimension: widthHeight(26, 27),
            },
            {
                frame: 9,
                class: 'blackBox',
                position: leftTop(1022, 152),
                dimension: widthHeight(31, 31),
            },
            {
                frame: 11,
                class: 'blackBox',
                position: leftTop(1160, 0),
                dimension: widthHeight(74, 96),
            },
            {
                frame: 14,
                class: 'blackBox',
                position: leftTop(1101, 95),
                dimension: widthHeight(59, 58),
            },
            {
                frame: 15,
                class: 'blackBox',
                position: leftTop(218, 1143),
                dimension: widthHeight(50, 52),
            },
            {
                frame: 16,
                class: 'blackBox',
                position: leftTop(871, 0),
                dimension: widthHeight(151, 95),
            },
            {
                frame: 17,
                class: 'blackBox',
                position: leftTop(0, 0),
                dimension: widthHeight(130, 167),
            },
            {
                frame: 19,
                class: 'blackBox',
                position: leftTop(371, 60),
                dimension: widthHeight(108, 108),
            },
            {
                frame: 19,
                class: 'blackBox',
                position: leftTop(1234, 0),
                dimension: widthHeight(92, 243),
            },
            {
                frame: 20,
                class: 'blackBox',
                position: leftTop(346, 1274),
                dimension: widthHeight(50, 52),
            },
            {
                frame: 23,
                class: 'blackBox',
                position: leftTop(0, 1195),
                dimension: widthHeight(218, 131),
            },
            {
                frame: 25,
                class: 'image',
                position: leftTop(42, 265),
                dimension: widthHeight(884, 195),
                url: './i_bubble.png',
            },
            {
                frame: 25,
                class: 'image',
                position: leftTop(89, 325),
                dimension: widthHeight(796, 74),
                url: './i_1_text_buble.png',
                style: {
                    opacity: '0',
                    transition: "opacity " + 6 * this.frameTime + "ms"
                },
                nextStyle: {
                    opacity: '1'
                }
            },
            {
                frame: 31,
                class: 'image',
                position: leftTop(715, 412),
                dimension: widthHeight(80, 119),
                url: './i_click.png',
                style: {
                    opacity: '0',
                    transition: "opacity " + 4 * this.frameTime + "ms",
                    animation: "moveCursor 2000ms infinite"
                },
                nextStyle: {
                    opacity: '1'
                }
            },
            {
                frame: 37,
                class: 'image',
                position: leftTop(82, 476),
                dimension: widthHeight(455, 94),
                url: './i_1_text_under_buble.png',
            },
            {
                frame: 42,
                class: 'image',
                position: leftTop(82, 603),
                dimension: widthHeight(665, 80),
                url: './i_1_text_under_buble2.png',
            },
            {
                frame: 52,
                class: 'image',
                position: leftTop(264, 768),
                dimension: widthHeight(428, 269),
                url: './i_1_icon.png',
                style: {
                    opacity: '0',
                    transition: "opacity " + 5 * this.frameTime + "ms",
                    transform: "scale(1)",
                    animation: "pulse " + 23 * this.frameTime + "ms"
                },
                nextStyle: {
                    opacity: '1'
                }
            },
        ];
        this.canvas = document.getElementById('canvas');
        console.log(this.canvas);
        this.elements.map(function (element) { return (__assign(__assign({}, element), { position: {
                top: element.position.top * _this.sizeScale,
                left: element.position.left * _this.sizeScale,
            }, dimension: {
                width: element.dimension.width * _this.sizeScale,
                height: element.dimension.height * _this.sizeScale,
            } })); }).forEach(function (box) {
            setTimeout(function () {
                var element = createElement_1.createDivElement({
                    attribute: {
                        class: box.class + " poa"
                    }
                });
                element.style.width = box.dimension.width + "px";
                element.style.height = box.dimension.height + "px";
                element.style.top = box.position.top + "px";
                element.style.left = box.position.left + "px";
                if (box.url) {
                    element.style.backgroundImage = "url(\"" + box.url + "\")";
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
var animate_1 = __webpack_require__(/*! ./animate */ "./src/animate.ts");
exports.init = function () {
    window['app'] = {
        animate: new animate_1.Animate(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUdBQXlEO0FBRXpELElBQU0sT0FBTyxHQUFHLFVBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxLQUFpQjtJQUFqQixpQ0FBaUI7SUFBSyxRQUFDO1FBQ2pFLElBQUksRUFBRSxJQUFJLEdBQUcsS0FBSztRQUNsQixHQUFHLEVBQUUsR0FBRyxHQUFHLEtBQUs7S0FDakIsQ0FBQztBQUhnRSxDQUdoRTtBQUVGLElBQU0sV0FBVyxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUFpQjtJQUFqQixpQ0FBaUI7SUFBSyxRQUFDO1FBQ3pFLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSztRQUNwQixNQUFNLEVBQUUsTUFBTSxHQUFHLEtBQUs7S0FDdkIsQ0FBQztBQUh3RSxDQUd4RTtBQVlGO0lBbUxFO1FBQUEsaUJBMENDO1FBNU5ELGNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSTtRQUN0QixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFckIsYUFBUSxHQUFvQjtZQUMxQjtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsT0FBTztnQkFDZCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUV4RSxHQUFHLEVBQUUsbUJBQW1CO2dCQUN4QixLQUFLLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLFVBQVU7b0JBQ2xCLE1BQU0sRUFBRSxHQUFHO29CQUNYLFNBQVMsRUFBRSxrQ0FBa0M7aUJBQzlDO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDaEM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUMxQixTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUMzQixTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO2dCQUMzQixTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUM1QixTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUMzQixTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUM1QixTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDaEM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDakM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUMxQixTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDakM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7YUFDaEM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLE9B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ckIsU0FBUyxtQkFBRyxTQUFTLE9BQ3JCLGlCQUFxQixFQUFyQixTQUFTLG1CQUFHLFNBQVM7SUFFckIsT0FBTyxhQUFhLENBQUM7UUFDakIsT0FBTyxFQUFFLEtBQUs7UUFDZCxTQUFTO1FBQ1QsU0FBUztLQUNaLENBQW1CO0FBQ3hCLENBQUM7Ozs7Ozs7VUNuREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2dyYW0vLi9zcmMvYW5pbWF0ZS50cyIsIndlYnBhY2s6Ly9wcm9ncmFtLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3Byb2dyYW0vLi9zcmMvdXRpbHMvY3JlYXRlRWxlbWVudC50cyIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2dyYW0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9ncmFtL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXZFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiO1xuXG5jb25zdCBsZWZ0VG9wID0gKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJhdGlvOiBudW1iZXIgPSAxKSA9PiAoe1xuICBsZWZ0OiBsZWZ0ICogcmF0aW8sXG4gIHRvcDogdG9wICogcmF0aW8sXG59KVxuXG5jb25zdCB3aWR0aEhlaWdodCA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlciA9IDEpID0+ICh7XG4gIHdpZHRoOiB3aWR0aCAqIHJhdGlvLFxuICBoZWlnaHQ6IGhlaWdodCAqIHJhdGlvLFxufSlcblxudHlwZSBSZW5kZXJFbGVtZW50ID0ge1xuICBmcmFtZTogbnVtYmVyLFxuICBjbGFzczogc3RyaW5nLFxuICBwb3NpdGlvbjogeyBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyIH1cbiAgZGltZW5zaW9uOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH1cbiAgdXJsPzogc3RyaW5nXG4gIHN0eWxlPzogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPlxuICBuZXh0U3R5bGU/OiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlIHtcbiAgc2l6ZVNjYWxlID0gNDgwIC8gMTMyNlxuICBmcmFtZVRpbWUgPSAyMDgzIC8gNTBcblxuICBlbGVtZW50czogUmVuZGVyRWxlbWVudFtdID0gW1xuICAgIHtcbiAgICAgIGZyYW1lOiAwLFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCgyNzUsIDE2NCwgKDEgLyB0aGlzLnNpemVTY2FsZSkpLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxNTYuMiwgMTU2LjIgKiAoNzM3IC8gMjQ0KSwgKDEgLyB0aGlzLnNpemVTY2FsZSkpLFxuXG4gICAgICB1cmw6ICcuL2lfMV9heGVfY2FuLnBuZycsXG4gICAgICBzdHlsZToge1xuICAgICAgICByb3RhdGU6IFwiOS42OTVkZWdcIixcbiAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgbW92ZVNwcmF5IDQwMDBtcyBsaW5lYXIgaW5maW5pdGVgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMCksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDM3MSwgNjApLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDMsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDExMDUpLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg4OCwgOTApLFxuICAgIH0sXG4gICAge1xuICAgICAgZnJhbWU6IDQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDE3MCwgMTcwKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTMsIDUzKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA2LFxuICAgICAgY2xhc3M6ICdibGFja0JveCcsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg4OCwgMTAyMyksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDI2LCAyNyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogOSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTAyMiwgMTUyKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMzEsIDMxKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxMSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMTE2MCwgMCksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDc0LCA5NiksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTQsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDExMDEsIDk1KSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTksIDU4KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNSxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjE4LCAxMTQzKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTAsIDUyKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAxNixcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoODcxLCAwKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoMTUxLCA5NSksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTcsXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDAsIDApLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMzAsIDE2NyksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDM3MSwgNjApLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCgxMDgsIDEwOCksXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMTksXG4gICAgICBjbGFzczogJ2JsYWNrQm94JyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDEyMzQsIDApLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg5MiwgMjQzKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMCxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMzQ2LCAxMjc0KSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoNTAsIDUyKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAyMyxcbiAgICAgIGNsYXNzOiAnYmxhY2tCb3gnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMCwgMTE5NSksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDIxOCwgMTMxKSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgZnJhbWU6IDI1LFxuICAgICAgY2xhc3M6ICdpbWFnZScsXG4gICAgICBwb3NpdGlvbjogbGVmdFRvcCg0MiwgMjY1KSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoODg0LCAxOTUpLFxuXG4gICAgICB1cmw6ICcuL2lfYnViYmxlLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMjUsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDg5LCAzMjUpLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg3OTYsIDc0KSxcblxuICAgICAgdXJsOiAnLi9pXzFfdGV4dF9idWJsZS5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezYgKiB0aGlzLmZyYW1lVGltZX1tc2BcbiAgICAgIH0sXG4gICAgICBuZXh0U3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzEnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogMzEsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDcxNSwgNDEyKSxcbiAgICAgIGRpbWVuc2lvbjogd2lkdGhIZWlnaHQoODAsIDExOSksXG5cbiAgICAgIHVybDogJy4vaV9jbGljay5wbmcnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAkezQgKiB0aGlzLmZyYW1lVGltZX1tc2AsXG4gICAgICAgIGFuaW1hdGlvbjogYG1vdmVDdXJzb3IgMjAwMG1zIGluZmluaXRlYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiAzNyxcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoODIsIDQ3NiksXG4gICAgICBkaW1lbnNpb246IHdpZHRoSGVpZ2h0KDQ1NSwgOTQpLFxuXG4gICAgICB1cmw6ICcuL2lfMV90ZXh0X3VuZGVyX2J1YmxlLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmFtZTogNDIsXG4gICAgICBjbGFzczogJ2ltYWdlJyxcbiAgICAgIHBvc2l0aW9uOiBsZWZ0VG9wKDgyLCA2MDMpLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg2NjUsIDgwKSxcblxuICAgICAgdXJsOiAnLi9pXzFfdGV4dF91bmRlcl9idWJsZTIucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyYW1lOiA1MixcbiAgICAgIGNsYXNzOiAnaW1hZ2UnLFxuICAgICAgcG9zaXRpb246IGxlZnRUb3AoMjY0LCA3NjgpLFxuICAgICAgZGltZW5zaW9uOiB3aWR0aEhlaWdodCg0MjgsIDI2OSksXG5cbiAgICAgIHVybDogJy4vaV8xX2ljb24ucG5nJyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHs1ICogdGhpcy5mcmFtZVRpbWV9bXNgLFxuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMSlcIixcbiAgICAgICAgYW5pbWF0aW9uOiBgcHVsc2UgJHsyMyAqIHRoaXMuZnJhbWVUaW1lfW1zYFxuICAgICAgfSxcbiAgICAgIG5leHRTdHlsZToge1xuICAgICAgICBvcGFjaXR5OiAnMSdcbiAgICAgIH1cbiAgICB9LFxuICBdO1xuXG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2FudmFzKVxuICAgIHRoaXMuZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiAoe1xuICAgICAgLi4uZWxlbWVudCxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogZWxlbWVudC5wb3NpdGlvbi50b3AgKiB0aGlzLnNpemVTY2FsZSxcbiAgICAgICAgbGVmdDogZWxlbWVudC5wb3NpdGlvbi5sZWZ0ICogdGhpcy5zaXplU2NhbGUsXG4gICAgICB9LFxuICAgICAgZGltZW5zaW9uOiB7XG4gICAgICAgIHdpZHRoOiBlbGVtZW50LmRpbWVuc2lvbi53aWR0aCAqIHRoaXMuc2l6ZVNjYWxlLFxuICAgICAgICBoZWlnaHQ6IGVsZW1lbnQuZGltZW5zaW9uLmhlaWdodCAqIHRoaXMuc2l6ZVNjYWxlLFxuICAgICAgfVxuICAgIH0pKS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudCh7XG4gICAgICAgICAgYXR0cmlidXRlOiB7XG4gICAgICAgICAgICBjbGFzczogYCR7Ym94LmNsYXNzfSBwb2FgXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtib3guZGltZW5zaW9uLndpZHRofXB4YFxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2JveC5kaW1lbnNpb24uaGVpZ2h0fXB4YFxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke2JveC5wb3NpdGlvbi50b3B9cHhgXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2JveC5wb3NpdGlvbi5sZWZ0fXB4YFxuXG4gICAgICAgIGlmIChib3gudXJsKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtib3gudXJsfVwiKWBcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGJveC5zdHlsZSB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGJveC5zdHlsZVtrZXldXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoYm94Lm5leHRTdHlsZSB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gYm94Lm5leHRTdHlsZVtrZXldXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgdGhpcy5mcmFtZVRpbWUpXG5cbiAgICAgICAgdGhpcy5jYW52YXMuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgIH0sIGJveC5mcmFtZSAqIHRoaXMuZnJhbWVUaW1lKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IEFuaW1hdGUgfSBmcm9tICcuL2FuaW1hdGUnXG5cbmV4cG9ydCBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHdpbmRvd1snYXBwJ10gPSB7XG4gICAgICAgIGFuaW1hdGU6IG5ldyBBbmltYXRlKCksXG4gICAgfVxufVxud2luZG93Wydpbml0J10gPSBpbml0XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh7XG4gICAgZWxlbWVudDogZWxlbWVudE5hbWUsXG4gICAgYXR0cmlidXRlID0gdW5kZWZpbmVkLFxuICAgIGNoaWxkcmVucyA9IHVuZGVmaW5lZCxcbn0pOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiAoY2hpbGRyZW5zKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjaGlsZHJlbnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgIGlmICh0eXBlb2YgKGF0dHJpYnV0ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVucykpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gW2NoaWxkcmVuc107XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuc1tpXS50YWdOYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkcmVuc1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25FbGVtZW50ID0gKHtcbiAgICBhdHRyaWJ1dGUgPSB1bmRlZmluZWQsXG4gICAgY2hpbGRyZW5zID0gdW5kZWZpbmVkLFxufSk6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6ICdidXR0b24nLFxuICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgIGNoaWxkcmVuc1xuICAgIH0pIGFzIEhUTUxCdXR0b25FbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXZFbGVtZW50ID0gKHtcbiAgICBhdHRyaWJ1dGUgPSB1bmRlZmluZWQsXG4gICAgY2hpbGRyZW5zID0gdW5kZWZpbmVkLFxufSk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgIGNoaWxkcmVuc1xuICAgIH0pIGFzIEhUTUxEaXZFbGVtZW50XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=