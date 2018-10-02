var jPalette =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/Color.js":
/*!******************************!*\
  !*** ./src/classes/Color.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Color; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @export
 * @class Color
 */
var Color =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Color.
   *
   * @param {any} r 
   * @param {any} g 
   * @param {any} b 
   * @param {any} a 
   * @memberof Color
   */
  function Color() {
    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Color);

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  /**
   * Substract from given Color.
   * 
   * @param {any} color 
   * @returns {Color}
   * @memberof Color
   */


  _createClass(Color, [{
    key: "delta",
    value: function delta(color) {
      return new Color(this.r - color.r, this.g - color.g, this.b - color.b, this.a - color.a);
    }
    /**
     * Return the css rgb notation.
     * 
     * @returns {string}
     * @memberof Color
     */

  }, {
    key: "rgb",
    value: function rgb() {
      return "rgb(".concat(this.r, ",").concat(this.g, ",").concat(this.b, ")");
    }
    /**
     * Convert to JSON.
     *
     * @return {Object}
     * @memberof Color
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        _type: 'Color',
        r: this.r,
        g: this.g,
        b: this.b,
        a: this.a
      };
    }
    /**
     * Revive from JSON.
     *
     * @static
     * @param {Object} o
     * @return {Color}
     * @memberof Color
     */

  }], [{
    key: "revive",
    value: function revive(o) {
      return new Color(o.r, o.g, o.b, o.a);
    }
    /**
     * Return a predefined color.
     * 
     * @static
     * @param {any} name 
     * @returns 
     * @memberof Color
     */

  }, {
    key: "get",
    value: function get(name) {
      return function (alpha) {
        switch (name) {
          default:
          case 'white':
            return new Color(255, 255, 255, alpha);

          case 'black':
            return new Color(0, 0, 0, alpha);

          case 'red':
            return new Color(255, 0, 0, alpha);

          case 'green':
            return new Color(0, 255, 0, alpha);

          case 'blue':
            return new Color(0, 0, 255, alpha);

          case 'yellow':
            return new Color(255, 255, 0, alpha);

          case 'cyan':
            return new Color(0, 255, 255, alpha);

          case 'magenta':
            return new Color(255, 0, 255, alpha);

          case 'indigo':
            return new Color(128, 0, 255, alpha);

          case 'pink':
            return new Color(255, 0, 128, alpha);

          case 'orange':
            return new Color(255, 128, 0, alpha);

          case 'apple':
            return new Color(128, 255, 0, alpha);

          case 'manganese':
            return new Color(0, 128, 255, alpha);

          case 'guppie':
            return new Color(0, 255, 128, alpha);

          case 'purple':
            return new Color(128, 0, 128, alpha);

          case 'teal':
            return new Color(0, 128, 128, alpha);

          case 'olive':
            return new Color(128, 128, 0, alpha);

          case 'coral':
            return new Color(255, 128, 128, alpha);
        }
      };
    }
  }]);

  return Color;
}();



/***/ }),

/***/ "./src/classes/ColorMap.js":
/*!*********************************!*\
  !*** ./src/classes/ColorMap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorMap; });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color.js */ "./src/classes/Color.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @export
 * @class ColorMap
 */

var ColorMap =
/*#__PURE__*/
function () {
  /** 
   * Creates an instance of ColorMap.
   * @param {any} numSteps 
   * @param {any} colors 
   * @memberof ColorMap
   */
  function ColorMap(numSteps, colors) {
    _classCallCheck(this, ColorMap);

    if (colors.length <= 1) {
      throw 'Two colors minimum.';
    }

    this.map = [];
    this.numSteps = numSteps;
    this.colors = colors;
    this.init();
  }
  /**
   * Init method.
   */


  _createClass(ColorMap, [{
    key: "init",
    value: function init() {
      var firstIndex,
          lastIndex,
          localRatio,
          deltaColor,
          colorDelta = 1 / (this.colors.length - 1),
          that = this,
          compute = function compute(component) {
        return parseInt(that.colors[firstIndex][component] + localRatio * deltaColor[component], 10);
      };

      for (var i = 0; i < this.numSteps; i++) {
        var globalRatio = i / (this.numSteps - 1);
        firstIndex = Math.floor(globalRatio / colorDelta);
        lastIndex = Math.min(this.colors.length - 1, firstIndex + 1);
        localRatio = (globalRatio - firstIndex * colorDelta) / colorDelta;
        deltaColor = this.colors[lastIndex].delta(this.colors[firstIndex]);
        this.map.push(new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](compute('r'), compute('g'), compute('b'), compute('a')));
      }
    }
    /**
     * Return a color instance from a decimal number between 0 and 1.
     * 
     * @param {any} value Normalized decimal number in range [0,1].
     * @returns {Color}
     * @memberof ColorMap
     */

  }, {
    key: "getColor",
    value: function getColor(value) {
      var delta = Math.max(0, Math.min(1, value));
      var index = Math.floor(delta * (this.map.length - 1));
      return this.map[index];
    }
    /**
     * Convert to JSON.
     *
     * @return {Object}
     * @memberof Color
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        _type: 'ColorMap',
        numSteps: this.numSteps,
        colors: this.colors.map(function (i) {
          return i.toJSON();
        })
      };
    }
    /**
     * Revive from JSON.
     *
     * @static
     * @param {Object} o
     * @return {Color}
     * @memberof Color
     */

  }], [{
    key: "revive",
    value: function revive(o) {
      return new ColorMap(o.numSteps, o.colors.map(function (i) {
        return _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].revive(i);
      }));
    }
    /**
     * Return a predefined palette.
     * 
     * @static
     * @param {any} name 
     * @returns 
     * @memberof ColorMap
     */

  }, {
    key: "get",
    value: function get(name) {
      return function (steps) {
        switch (name) {
          default:
          case 'whitetoblack':
            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0, 255)]);

          case 'rgb':
            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 255, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 255, 255)]);

          case 'rainbow':
            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 128, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 255, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 255, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](128, 0, 128, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](128, 0, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 0, 0, 255)]);

          case 'night':
            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 102, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 102, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 102, 255)]);

          case 'blacknwhite':
            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0, 255)]);

          case 'fire':
            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 255, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](255, 0, 0, 255)]);

          case 'sky':
            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 120, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](200, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 120, 255)]);
        }
      };
    }
  }]);

  return ColorMap;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Color, ColorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Color.js */ "./src/classes/Color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _classes_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _classes_ColorMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ColorMap.js */ "./src/classes/ColorMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorMap", function() { return _classes_ColorMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qUGFsZXR0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qUGFsZXR0ZS8uL3NyYy9jbGFzc2VzL0NvbG9yLmpzIiwid2VicGFjazovL2pQYWxldHRlLy4vc3JjL2NsYXNzZXMvQ29sb3JNYXAuanMiLCJ3ZWJwYWNrOi8valBhbGV0dGUvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29sb3IiLCJyIiwiZyIsImIiLCJhIiwiY29sb3IiLCJfdHlwZSIsIm8iLCJuYW1lIiwiYWxwaGEiLCJDb2xvck1hcCIsIm51bVN0ZXBzIiwiY29sb3JzIiwibGVuZ3RoIiwibWFwIiwiaW5pdCIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJsb2NhbFJhdGlvIiwiZGVsdGFDb2xvciIsImNvbG9yRGVsdGEiLCJ0aGF0IiwiY29tcHV0ZSIsImNvbXBvbmVudCIsInBhcnNlSW50IiwiaSIsImdsb2JhbFJhdGlvIiwiTWF0aCIsImZsb29yIiwibWluIiwiZGVsdGEiLCJwdXNoIiwidmFsdWUiLCJtYXgiLCJpbmRleCIsInRvSlNPTiIsInJldml2ZSIsInN0ZXBzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FB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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQGV4cG9ydFxuICogQGNsYXNzIENvbG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ29sb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSByIFxuICAgKiBAcGFyYW0ge2FueX0gZyBcbiAgICogQHBhcmFtIHthbnl9IGIgXG4gICAqIEBwYXJhbSB7YW55fSBhIFxuICAgKiBAbWVtYmVyb2YgQ29sb3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHIgPSAwLCBnID0gMCwgYiA9IDAsIGEgPSAwKSB7XG4gICAgdGhpcy5yID0gcjtcbiAgICB0aGlzLmcgPSBnO1xuICAgIHRoaXMuYiA9IGI7XG4gICAgdGhpcy5hID0gYTtcbiAgfVxuICAvKipcbiAgICogU3Vic3RyYWN0IGZyb20gZ2l2ZW4gQ29sb3IuXG4gICAqIFxuICAgKiBAcGFyYW0ge2FueX0gY29sb3IgXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cbiAgICogQG1lbWJlcm9mIENvbG9yXG4gICAqL1xuICBkZWx0YShjb2xvcikge1xuICAgIHJldHVybiBuZXcgQ29sb3IoXG4gICAgICB0aGlzLnIgLSBjb2xvci5yLFxuICAgICAgdGhpcy5nIC0gY29sb3IuZyxcbiAgICAgIHRoaXMuYiAtIGNvbG9yLmIsXG4gICAgICB0aGlzLmEgLSBjb2xvci5hXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjc3MgcmdiIG5vdGF0aW9uLlxuICAgKiBcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIENvbG9yXG4gICAqL1xuICByZ2IoKSB7XG4gICAgcmV0dXJuIGByZ2IoJHt0aGlzLnJ9LCR7dGhpcy5nfSwke3RoaXMuYn0pYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRvIEpTT04uXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQG1lbWJlcm9mIENvbG9yXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF90eXBlIDogJ0NvbG9yJyxcbiAgICAgIHIgICAgIDogdGhpcy5yLFxuICAgICAgZyAgICAgOiB0aGlzLmcsXG4gICAgICBiICAgICA6IHRoaXMuYixcbiAgICAgIGEgICAgIDogdGhpcy5hXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZpdmUgZnJvbSBKU09OLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge0NvbG9yfVxuICAgKiBAbWVtYmVyb2YgQ29sb3JcbiAgICovXG4gIHN0YXRpYyByZXZpdmUobykge1xuICAgIHJldHVybiBuZXcgQ29sb3Ioby5yLCBvLmcsIG8uYiwgby5hKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBwcmVkZWZpbmVkIGNvbG9yLlxuICAgKiBcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge2FueX0gbmFtZSBcbiAgICogQHJldHVybnMgXG4gICAqIEBtZW1iZXJvZiBDb2xvclxuICAgKi9cbiAgc3RhdGljIGdldChuYW1lKSB7XG4gICAgcmV0dXJuIChhbHBoYSkgPT4ge1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSAnd2hpdGUnOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIGFscGhhKTtcbiAgICAgIGNhc2UgJ2JsYWNrJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigwICAsICAgMCwgICAwLCBhbHBoYSk7XG4gICAgICBjYXNlICdyZWQnOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDI1NSwgICAwLCAgIDAsIGFscGhhKTtcbiAgICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigwICAsIDI1NSwgICAwLCBhbHBoYSk7XG4gICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigwICAsICAgMCwgMjU1LCBhbHBoYSk7XG4gICAgICBjYXNlICd5ZWxsb3cnOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDI1NSwgMjU1LCAgIDAsIGFscGhhKTtcbiAgICAgIGNhc2UgJ2N5YW4nOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDAgICwgMjU1LCAyNTUsIGFscGhhKTtcbiAgICAgIGNhc2UgJ21hZ2VudGEnOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDI1NSwgICAwLCAyNTUsIGFscGhhKTtcbiAgICAgIGNhc2UgJ2luZGlnbyc6XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoMTI4LCAgIDAsIDI1NSwgYWxwaGEpO1xuICAgICAgY2FzZSAncGluayc6XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoMjU1LCAgIDAsIDEyOCwgYWxwaGEpO1xuICAgICAgY2FzZSAnb3JhbmdlJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigyNTUsIDEyOCwgICAwLCBhbHBoYSk7XG4gICAgICBjYXNlICdhcHBsZSc6XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoMTI4LCAyNTUsICAgMCwgYWxwaGEpO1xuICAgICAgY2FzZSAnbWFuZ2FuZXNlJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigwICAsIDEyOCwgMjU1LCBhbHBoYSk7XG4gICAgICBjYXNlICdndXBwaWUnOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDAgICwgMjU1LCAxMjgsIGFscGhhKTtcbiAgICAgIGNhc2UgJ3B1cnBsZSc6XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoMTI4LCAgIDAsIDEyOCwgYWxwaGEpO1xuICAgICAgY2FzZSAndGVhbCc6XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoMCAgLCAxMjgsIDEyOCwgYWxwaGEpO1xuICAgICAgY2FzZSAnb2xpdmUnOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDEyOCwgMTI4LCAgIDAsIGFscGhhKTtcbiAgICAgIGNhc2UgJ2NvcmFsJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigyNTUsIDEyOCwgMTI4LCBhbHBoYSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSIsImltcG9ydCBDb2xvciBmcm9tICcuL0NvbG9yLmpzJztcblxuLyoqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQ29sb3JNYXBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JNYXAge1xuXG4gIC8qKiBcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDb2xvck1hcC5cbiAgICogQHBhcmFtIHthbnl9IG51bVN0ZXBzIFxuICAgKiBAcGFyYW0ge2FueX0gY29sb3JzIFxuICAgKiBAbWVtYmVyb2YgQ29sb3JNYXBcbiAgICovXG4gIGNvbnN0cnVjdG9yKG51bVN0ZXBzLCBjb2xvcnMpIHtcbiAgICBpZiAoY29sb3JzLmxlbmd0aCA8PSAxKSB7XG4gICAgICB0aHJvdyAnVHdvIGNvbG9ycyBtaW5pbXVtLic7XG4gICAgfVxuICAgIHRoaXMubWFwICAgICAgPSBbXTtcbiAgICB0aGlzLm51bVN0ZXBzID0gbnVtU3RlcHM7XG4gICAgdGhpcy5jb2xvcnMgICA9IGNvbG9ycztcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IG1ldGhvZC5cbiAgICovXG4gIGluaXQoKSB7XG4gICAgbGV0IGZpcnN0SW5kZXgsIGxhc3RJbmRleCwgbG9jYWxSYXRpbywgZGVsdGFDb2xvcixcbiAgICAgIGNvbG9yRGVsdGEgPSAxIC8gKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpLFxuICAgICAgdGhhdCAgICAgICA9IHRoaXMsXG4gICAgICBjb21wdXRlICAgID0gKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoXG4gICAgICAgICAgdGhhdC5jb2xvcnNbZmlyc3RJbmRleF1bY29tcG9uZW50XSArIGxvY2FsUmF0aW8gKiBkZWx0YUNvbG9yW2NvbXBvbmVudF0sIDEwXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1TdGVwczsgaSsrKSB7XG4gICAgICBsZXQgZ2xvYmFsUmF0aW8gPSBpIC8gKHRoaXMubnVtU3RlcHMgLSAxKTtcbiAgICAgIGZpcnN0SW5kZXggID0gTWF0aC5mbG9vcihnbG9iYWxSYXRpbyAvIGNvbG9yRGVsdGEpO1xuICAgICAgbGFzdEluZGV4ICAgPSBNYXRoLm1pbih0aGlzLmNvbG9ycy5sZW5ndGggLSAxLCBmaXJzdEluZGV4ICsgMSk7XG4gICAgICBsb2NhbFJhdGlvICA9IChnbG9iYWxSYXRpbyAtIGZpcnN0SW5kZXggKiBjb2xvckRlbHRhKSAvIGNvbG9yRGVsdGE7XG4gICAgICBkZWx0YUNvbG9yICA9IHRoaXMuY29sb3JzW2xhc3RJbmRleF0uZGVsdGEodGhpcy5jb2xvcnNbZmlyc3RJbmRleF0pO1xuXG4gICAgICB0aGlzLm1hcC5wdXNoKG5ldyBDb2xvcihjb21wdXRlKCdyJyksIGNvbXB1dGUoJ2cnKSwgY29tcHV0ZSgnYicpLCBjb21wdXRlKCdhJykpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgY29sb3IgaW5zdGFuY2UgZnJvbSBhIGRlY2ltYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cbiAgICogXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBOb3JtYWxpemVkIGRlY2ltYWwgbnVtYmVyIGluIHJhbmdlIFswLDFdLlxuICAgKiBAcmV0dXJucyB7Q29sb3J9XG4gICAqIEBtZW1iZXJvZiBDb2xvck1hcFxuICAgKi9cbiAgZ2V0Q29sb3IodmFsdWUpIHtcbiAgICBsZXQgZGVsdGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xuICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoZGVsdGEgKiAodGhpcy5tYXAubGVuZ3RoIC0gMSkpO1xuICAgIFxuICAgIHJldHVybiB0aGlzLm1hcFtpbmRleF07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0byBKU09OLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBtZW1iZXJvZiBDb2xvclxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBfdHlwZSAgICAgOiAnQ29sb3JNYXAnLFxuICAgICAgbnVtU3RlcHMgIDogdGhpcy5udW1TdGVwcyxcbiAgICAgIGNvbG9ycyAgICA6IHRoaXMuY29sb3JzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBpLnRvSlNPTigpOyB9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV2aXZlIGZyb20gSlNPTi5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge09iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtDb2xvcn1cbiAgICogQG1lbWJlcm9mIENvbG9yXG4gICAqL1xuICBzdGF0aWMgcmV2aXZlKG8pIHtcbiAgICByZXR1cm4gbmV3IENvbG9yTWFwKFxuICAgICAgby5udW1TdGVwcyxcbiAgICAgIG8uY29sb3JzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBDb2xvci5yZXZpdmUoaSk7IH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBwcmVkZWZpbmVkIHBhbGV0dGUuXG4gICAqIFxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7YW55fSBuYW1lIFxuICAgKiBAcmV0dXJucyBcbiAgICogQG1lbWJlcm9mIENvbG9yTWFwXG4gICAqL1xuICBzdGF0aWMgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gKHN0ZXBzKSA9PiB7XG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICd3aGl0ZXRvYmxhY2snOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yTWFwKHN0ZXBzLCBbXG4gICAgICAgICAgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKCAgMCwgICAwLCAgIDAsIDI1NSlcbiAgICAgICAgXSk7XG4gICAgICBjYXNlICdyZ2InOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yTWFwKHN0ZXBzLCBbXG4gICAgICAgICAgbmV3IENvbG9yKDI1NSwgICAwLCAgIDAsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKCAgMCwgMjU1LCAgIDAsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKCAgMCwgICAwLCAyNTUsIDI1NSlcbiAgICAgICAgXSk7XG4gICAgICBjYXNlICdyYWluYm93JzpcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvck1hcChzdGVwcywgW1xuICAgICAgICAgIG5ldyBDb2xvcigyNTUsICAgMCwgICAwLCAyNTUpLFxuICAgICAgICAgIG5ldyBDb2xvcigyNTUsIDEyOCwgICAwLCAyNTUpLFxuICAgICAgICAgIG5ldyBDb2xvcigyNTUsIDI1NSwgICAwLCAyNTUpLFxuICAgICAgICAgIG5ldyBDb2xvcigwICAsIDI1NSwgICAwLCAyNTUpLFxuICAgICAgICAgIG5ldyBDb2xvcigxMjgsICAgMCwgMTI4LCAyNTUpLFxuICAgICAgICAgIG5ldyBDb2xvcigxMjgsICAgMCwgMjU1LCAyNTUpLFxuICAgICAgICAgIG5ldyBDb2xvcigyNTUsICAgMCwgICAwLCAyNTUpXG4gICAgICAgIF0pO1xuICAgICAgY2FzZSAnbmlnaHQnOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yTWFwKHN0ZXBzLCBbXG4gICAgICAgICAgbmV3IENvbG9yKDAgICwgICAwLCAxMDIsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKDI1NSwgMTAyLCAgIDAsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKDAgICwgICAwLCAxMDIsIDI1NSlcbiAgICAgICAgXSk7XG4gICAgICBjYXNlICdibGFja253aGl0ZSc6XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3JNYXAoc3RlcHMsIFtcbiAgICAgICAgICBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSxcbiAgICAgICAgICBuZXcgQ29sb3IoMCAgLCAgIDAsICAgMCwgMjU1KSxcbiAgICAgICAgICBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSxcbiAgICAgICAgICBuZXcgQ29sb3IoMCAgLCAgIDAsICAgMCwgMjU1KVxuICAgICAgICBdKTtcbiAgICAgIGNhc2UgJ2ZpcmUnOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yTWFwKHN0ZXBzLCBbXG4gICAgICAgICAgbmV3IENvbG9yKDAgICwgICAwLCAgIDAsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKDI1NSwgICAwLCAgIDAsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKDI1NSwgMjU1LCAgIDAsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKDI1NSwgICAwLCAgIDAsIDI1NSlcbiAgICAgICAgXSk7XG4gICAgICBjYXNlICdza3knOlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yTWFwKHN0ZXBzLCBbXG4gICAgICAgICAgbmV3IENvbG9yKDAgICwgICAwLCAxMjAsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKDIwMCwgMjU1LCAyNTUsIDI1NSksXG4gICAgICAgICAgbmV3IENvbG9yKDAgICwgICAwLCAxMjAsIDI1NSlcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSIsImV4cG9ydCB7ZGVmYXVsdCBhcyBDb2xvcn0gICAgZnJvbSAnLi9jbGFzc2VzL0NvbG9yLmpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBDb2xvck1hcH0gZnJvbSAnLi9jbGFzc2VzL0NvbG9yTWFwLmpzJzsiXSwic291cmNlUm9vdCI6IiJ9