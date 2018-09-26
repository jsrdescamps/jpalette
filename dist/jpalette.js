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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Color; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @export\n * @class Color\n */\nvar Color =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Creates an instance of Color.\n   *\n   * @param {any} r \n   * @param {any} g \n   * @param {any} b \n   * @param {any} a \n   * @memberof Color\n   */\n  function Color() {\n    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n    _classCallCheck(this, Color);\n\n    this.r = r;\n    this.g = g;\n    this.b = b;\n    this.a = a;\n  }\n  /**\n   * Substract from given Color.\n   * \n   * @param {any} color \n   * @returns {Color}\n   * @memberof Color\n   */\n\n\n  _createClass(Color, [{\n    key: \"delta\",\n    value: function delta(color) {\n      return new Color(this.r - color.r, this.g - color.g, this.b - color.b, this.a - color.a);\n    }\n    /**\n     * Return the css rgb notation.\n     * \n     * @returns {string}\n     * @memberof Color\n     */\n\n  }, {\n    key: \"rgb\",\n    value: function rgb() {\n      return \"rgb(\".concat(this.r, \",\").concat(this.g, \",\").concat(this.b, \")\");\n    }\n    /**\n     * Return a predefined color.\n     * \n     * @static\n     * @param {any} name \n     * @returns \n     * @memberof Color\n     */\n\n  }], [{\n    key: \"get\",\n    value: function get(name) {\n      return function (alpha) {\n        switch (name) {\n          default:\n          case 'white':\n            return new Color(255, 255, 255, alpha);\n\n          case 'black':\n            return new Color(0, 0, 0, alpha);\n\n          case 'red':\n            return new Color(255, 0, 0, alpha);\n\n          case 'green':\n            return new Color(0, 255, 0, alpha);\n\n          case 'blue':\n            return new Color(0, 0, 255, alpha);\n\n          case 'yellow':\n            return new Color(255, 255, 0, alpha);\n\n          case 'cyan':\n            return new Color(0, 255, 255, alpha);\n\n          case 'magenta':\n            return new Color(255, 0, 255, alpha);\n\n          case 'indigo':\n            return new Color(128, 0, 255, alpha);\n\n          case 'pink':\n            return new Color(255, 0, 128, alpha);\n\n          case 'orange':\n            return new Color(255, 128, 0, alpha);\n\n          case 'apple':\n            return new Color(128, 255, 0, alpha);\n\n          case 'manganese':\n            return new Color(0, 128, 255, alpha);\n\n          case 'guppie':\n            return new Color(0, 255, 128, alpha);\n\n          case 'purple':\n            return new Color(128, 0, 128, alpha);\n\n          case 'teal':\n            return new Color(0, 128, 128, alpha);\n\n          case 'olive':\n            return new Color(128, 128, 0, alpha);\n\n          case 'coral':\n            return new Color(255, 128, 128, alpha);\n        }\n      };\n    }\n  }]);\n\n  return Color;\n}();\n\n\n\n//# sourceURL=webpack://jPalette/./src/classes/Color.js?");

/***/ }),

/***/ "./src/classes/ColorMap.js":
/*!*********************************!*\
  !*** ./src/classes/ColorMap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ColorMap; });\n/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color.js */ \"./src/classes/Color.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\n * @export\n * @class ColorMap\n */\n\nvar ColorMap =\n/*#__PURE__*/\nfunction () {\n  /** \n   * Creates an instance of ColorMap.\n   * @param {any} numSteps \n   * @param {any} colors \n   * @memberof ColorMap\n   */\n  function ColorMap(numSteps, colors) {\n    _classCallCheck(this, ColorMap);\n\n    if (colors.length <= 1) {\n      throw 'Two colors minimum.';\n    }\n\n    this.map = [];\n    this.numSteps = numSteps;\n    this.colors = colors;\n    this.init();\n  }\n  /**\n   * Init method.\n   */\n\n\n  _createClass(ColorMap, [{\n    key: \"init\",\n    value: function init() {\n      var firstIndex,\n          lastIndex,\n          localRatio,\n          deltaColor,\n          colorDelta = 1 / (this.colors.length - 1),\n          that = this,\n          compute = function compute(component) {\n        return parseInt(that.colors[firstIndex][component] + localRatio * deltaColor[component], 10);\n      };\n\n      for (var i = 0; i < this.numSteps; i++) {\n        var globalRatio = i / (this.numSteps - 1);\n        firstIndex = Math.floor(globalRatio / colorDelta);\n        lastIndex = Math.min(this.colors.length - 1, firstIndex + 1);\n        localRatio = (globalRatio - firstIndex * colorDelta) / colorDelta;\n        deltaColor = this.colors[lastIndex].delta(this.colors[firstIndex]);\n        this.map.push(new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](compute('r'), compute('g'), compute('b'), compute('a')));\n      }\n    }\n    /**\n     * Return a color instance from a decimal number between 0 and 1.\n     * \n     * @param {any} value Normalized decimal number in range [0,1].\n     * @returns {Color}\n     * @memberof ColorMap\n     */\n\n  }, {\n    key: \"getColor\",\n    value: function getColor(value) {\n      var delta = Math.max(0, Math.min(1, value));\n      var index = Math.floor(delta * (this.map.length - 1));\n      return this.map[index];\n    }\n    /**\n     * Return a predefined palette.\n     * \n     * @static\n     * @param {any} name \n     * @returns \n     * @memberof ColorMap\n     */\n\n  }], [{\n    key: \"get\",\n    value: function get(name) {\n      return function (steps) {\n        switch (name) {\n          default:\n          case 'whitetoblack':\n            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0, 255)]);\n\n          case 'rgb':\n            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 255, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 255, 255)]);\n\n          case 'rainbow':\n            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 128, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 255, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 255, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](128, 0, 128, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](128, 0, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 0, 0, 255)]);\n\n          case 'night':\n            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 102, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 102, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 102, 255)]);\n\n          case 'blacknwhite':\n            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0, 255)]);\n\n          case 'fire':\n            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 0, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 255, 0, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](255, 0, 0, 255)]);\n\n          case 'sky':\n            return new ColorMap(steps, [new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 120, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](200, 255, 255, 255), new _Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 120, 255)]);\n        }\n      };\n    }\n  }]);\n\n  return ColorMap;\n}();\n\n\n\n//# sourceURL=webpack://jPalette/./src/classes/ColorMap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Color, ColorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Color.js */ \"./src/classes/Color.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return _classes_Color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _classes_ColorMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ColorMap.js */ \"./src/classes/ColorMap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ColorMap\", function() { return _classes_ColorMap_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://jPalette/./src/index.js?");

/***/ })

/******/ });