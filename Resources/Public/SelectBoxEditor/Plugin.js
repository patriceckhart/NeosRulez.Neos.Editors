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

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = createConsumerApi;\n\nvar _manifest = __webpack_require__(/*! ./manifest */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js\");\n\nvar _manifest2 = _interopRequireDefault(_manifest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createReadOnlyValue = function createReadOnlyValue(value) {\n    return {\n        value: value,\n        writable: false,\n        enumerable: false,\n        configurable: true\n    };\n};\nfunction createConsumerApi(manifests, exposureMap) {\n    var api = {};\n    Object.keys(exposureMap).forEach(function (key) {\n        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));\n    });\n    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));\n    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));\n}\n//# sourceMappingURL=createConsumerApi.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SynchronousMetaRegistry = exports.SynchronousRegistry = exports.readFromConsumerApi = exports.createConsumerApi = undefined;\n\nvar _createConsumerApi = __webpack_require__(/*! ./createConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js\");\n\nvar _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);\n\nvar _readFromConsumerApi = __webpack_require__(/*! ./readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nvar _index = __webpack_require__(/*! ./registry/index */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _readFromConsumerApi2.default)('manifest');\nexports.createConsumerApi = _createConsumerApi2.default;\nexports.readFromConsumerApi = _readFromConsumerApi2.default;\nexports.SynchronousRegistry = _index.SynchronousRegistry;\nexports.SynchronousMetaRegistry = _index.SynchronousMetaRegistry;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nexports.default = function (manifests) {\n    return function (identifier, options, bootstrap) {\n        manifests.push(_defineProperty({}, identifier, {\n            options: options,\n            bootstrap: bootstrap\n        }));\n    };\n};\n//# sourceMappingURL=manifest.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = readFromConsumerApi;\nfunction readFromConsumerApi(key) {\n    return function () {\n        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {\n            var _window$NeosHostPlu;\n\n            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);\n        }\n        throw new Error('You are trying to read from a consumer api that hasn\\'t been initialized yet!');\n    };\n}\n//# sourceMappingURL=readFromConsumerApi.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar AbstractRegistry = class AbstractRegistry {\n    constructor(description) {\n        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';\n        this.description = description;\n    }\n};\n//# sourceMappingURL=AbstractRegistry.js.map\n\nexports.default = AbstractRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js\");\n\nvar _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SynchronousMetaRegistry = class SynchronousMetaRegistry extends _SynchronousRegistry2.default {\n    set(key, value) {\n        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {\n            throw new Error('You can only add registries to a meta registry');\n        }\n        return super.set(key, value);\n    }\n};\n//# sourceMappingURL=SynchronousMetaRegistry.js.map\n\nexports.default = SynchronousMetaRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _AbstractRegistry = __webpack_require__(/*! ./AbstractRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js\");\n\nvar _AbstractRegistry2 = _interopRequireDefault(_AbstractRegistry);\n\nvar _positionalArraySorter = __webpack_require__(/*! @neos-project/positional-array-sorter */ \"./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js\");\n\nvar _positionalArraySorter2 = _interopRequireDefault(_positionalArraySorter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SynchronousRegistry = class SynchronousRegistry extends _AbstractRegistry2.default {\n    constructor(description) {\n        super(description);\n        this._registry = [];\n    }\n    set(key, value) {\n        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n        if (typeof key !== 'string') {\n            throw new Error('Key must be a string');\n        }\n        if (typeof position !== 'string' && typeof position !== 'number') {\n            throw new Error('Position must be a string or a number');\n        }\n        var entry = { key: key, value: value };\n        if (position) {\n            entry.position = position;\n        }\n        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {\n            return item.key === key;\n        });\n        if (indexOfItemWithTheSameKey === -1) {\n            this._registry.push(entry);\n        } else {\n            this._registry[indexOfItemWithTheSameKey] = entry;\n        }\n        return value;\n    }\n    get(key) {\n        if (typeof key !== 'string') {\n            console.error('Key must be a string');\n            return null;\n        }\n        var result = this._registry.find(function (item) {\n            return item.key === key;\n        });\n        return result ? result.value : null;\n    }\n    _getChildrenWrapped(searchKey) {\n        var unsortedChildren = this._registry.filter(function (item) {\n            return item.key.indexOf(searchKey + '/') === 0;\n        });\n        return (0, _positionalArraySorter2.default)(unsortedChildren);\n    }\n    getChildrenAsObject(searchKey) {\n        var result = {};\n        this._getChildrenWrapped(searchKey).forEach(function (item) {\n            result[item.key] = item.value;\n        });\n        return result;\n    }\n    getChildren(searchKey) {\n        return this._getChildrenWrapped(searchKey).map(function (item) {\n            return item.value;\n        });\n    }\n    has(key) {\n        if (typeof key !== 'string') {\n            console.error('Key must be a string');\n            return false;\n        }\n        return Boolean(this._registry.find(function (item) {\n            return item.key === key;\n        }));\n    }\n    _getAllWrapped() {\n        return (0, _positionalArraySorter2.default)(this._registry);\n    }\n    getAllAsObject() {\n        var result = {};\n        this._getAllWrapped().forEach(function (item) {\n            result[item.key] = item.value;\n        });\n        return result;\n    }\n    getAllAsList() {\n        return this._getAllWrapped().map(function (item) {\n            return Object.assign({ id: item.key }, item.value);\n        });\n    }\n};\n//# sourceMappingURL=SynchronousRegistry.js.map\n\nexports.default = SynchronousRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SynchronousMetaRegistry = exports.SynchronousRegistry = undefined;\n\nvar _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js\");\n\nvar _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);\n\nvar _SynchronousMetaRegistry = __webpack_require__(/*! ./SynchronousMetaRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js\");\n\nvar _SynchronousMetaRegistry2 = _interopRequireDefault(_SynchronousMetaRegistry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.SynchronousRegistry = _SynchronousRegistry2.default;\nexports.SynchronousMetaRegistry = _SynchronousMetaRegistry2.default;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiI18n;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().React;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar positionalArraySorter = function positionalArraySorter(subject) {\n    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'position';\n    var idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';\n\n    var positionAccessor = typeof position === 'string' ? function (value) {\n        return value[position];\n    } : position;\n    var indexMapping = {};\n    var middleKeys = {};\n    var startKeys = {};\n    var endKeys = {};\n    var beforeKeys = {};\n    var afterKeys = {};\n    subject.forEach(function (item, index) {\n        var key = item[idKey] ? item[idKey] : String(index);\n        indexMapping[key] = index;\n        var positionValue = positionAccessor(item);\n        var position = String(positionValue ? positionValue : index);\n        var invalid = false;\n        if (position.startsWith('start')) {\n            var weightMatch = position.match(/start\\s+(\\d+)/);\n            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;\n            if (!startKeys[weight]) {\n                startKeys[weight] = [];\n            }\n            startKeys[weight].push(key);\n        } else if (position.startsWith('end')) {\n            var _weightMatch = position.match(/end\\s+(\\d+)/);\n            var _weight = _weightMatch && _weightMatch[1] ? Number(_weightMatch[1]) : 0;\n            if (!endKeys[_weight]) {\n                endKeys[_weight] = [];\n            }\n            endKeys[_weight].push(key);\n        } else if (position.startsWith('before')) {\n            var match = position.match(/before\\s+(\\S+)(\\s+(\\d+))?/);\n            if (!match) {\n                invalid = true;\n            } else {\n                var reference = match[1];\n                var _weight2 = match[3] ? Number(match[3]) : 0;\n                if (!beforeKeys[reference]) {\n                    beforeKeys[reference] = {};\n                }\n                if (!beforeKeys[reference][_weight2]) {\n                    beforeKeys[reference][_weight2] = [];\n                }\n                beforeKeys[reference][_weight2].push(key);\n            }\n        } else if (position.startsWith('after')) {\n            var _match = position.match(/after\\s+(\\S+)(\\s+(\\d+))?/);\n            if (!_match) {\n                invalid = true;\n            } else {\n                var _reference = _match[1];\n                var _weight3 = _match[3] ? Number(_match[3]) : 0;\n                if (!afterKeys[_reference]) {\n                    afterKeys[_reference] = {};\n                }\n                if (!afterKeys[_reference][_weight3]) {\n                    afterKeys[_reference][_weight3] = [];\n                }\n                afterKeys[_reference][_weight3].push(key);\n            }\n        } else {\n            invalid = true;\n        }\n        if (invalid) {\n            var numberPosition = parseFloat(position);\n            if (isNaN(numberPosition) || !isFinite(numberPosition)) {\n                numberPosition = index;\n            }\n            if (!middleKeys[numberPosition]) {\n                middleKeys[numberPosition] = [];\n            }\n            middleKeys[numberPosition].push(key);\n        }\n    });\n    var resultStart = [];\n    var resultMiddle = [];\n    var resultEnd = [];\n    var processedKeys = [];\n    var sortedWeights = function sortedWeights(dict, asc) {\n        var weights = Object.keys(dict).map(function (x) {\n            return Number(x);\n        }).sort(function (a, b) {\n            return a - b;\n        });\n        return asc ? weights : weights.reverse();\n    };\n    var addToResults = function addToResults(keys, result) {\n        keys.forEach(function (key) {\n            if (processedKeys.indexOf(key) >= 0) {\n                return;\n            }\n            processedKeys.push(key);\n            if (beforeKeys[key]) {\n                var beforeWeights = sortedWeights(beforeKeys[key], true);\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                    for (var _iterator = beforeWeights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                        var i = _step.value;\n\n                        addToResults(beforeKeys[key][i], result);\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n                    } finally {\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n            }\n            result.push(key);\n            if (afterKeys[key]) {\n                var afterWeights = sortedWeights(afterKeys[key], false);\n                var _iteratorNormalCompletion2 = true;\n                var _didIteratorError2 = false;\n                var _iteratorError2 = undefined;\n\n                try {\n                    for (var _iterator2 = afterWeights[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                        var _i = _step2.value;\n\n                        addToResults(afterKeys[key][_i], result);\n                    }\n                } catch (err) {\n                    _didIteratorError2 = true;\n                    _iteratorError2 = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                            _iterator2.return();\n                        }\n                    } finally {\n                        if (_didIteratorError2) {\n                            throw _iteratorError2;\n                        }\n                    }\n                }\n            }\n        });\n    };\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n        for (var _iterator3 = sortedWeights(startKeys, false)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n            var i = _step3.value;\n\n            addToResults(startKeys[i], resultStart);\n        }\n    } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion3 && _iterator3.return) {\n                _iterator3.return();\n            }\n        } finally {\n            if (_didIteratorError3) {\n                throw _iteratorError3;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion4 = true;\n    var _didIteratorError4 = false;\n    var _iteratorError4 = undefined;\n\n    try {\n        for (var _iterator4 = sortedWeights(middleKeys, true)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n            var _i2 = _step4.value;\n\n            addToResults(middleKeys[_i2], resultMiddle);\n        }\n    } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion4 && _iterator4.return) {\n                _iterator4.return();\n            }\n        } finally {\n            if (_didIteratorError4) {\n                throw _iteratorError4;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion5 = true;\n    var _didIteratorError5 = false;\n    var _iteratorError5 = undefined;\n\n    try {\n        for (var _iterator5 = sortedWeights(endKeys, true)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n            var _i3 = _step5.value;\n\n            addToResults(endKeys[_i3], resultEnd);\n        }\n    } catch (err) {\n        _didIteratorError5 = true;\n        _iteratorError5 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion5 && _iterator5.return) {\n                _iterator5.return();\n            }\n        } finally {\n            if (_didIteratorError5) {\n                throw _iteratorError5;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion6 = true;\n    var _didIteratorError6 = false;\n    var _iteratorError6 = undefined;\n\n    try {\n        for (var _iterator6 = Object.keys(beforeKeys)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n            var key = _step6.value;\n\n            if (processedKeys.indexOf(key) >= 0) {\n                continue;\n            }\n            var _iteratorNormalCompletion8 = true;\n            var _didIteratorError8 = false;\n            var _iteratorError8 = undefined;\n\n            try {\n                for (var _iterator8 = sortedWeights(beforeKeys[key], false)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {\n                    var _i4 = _step8.value;\n\n                    addToResults(beforeKeys[key][_i4], resultStart);\n                }\n            } catch (err) {\n                _didIteratorError8 = true;\n                _iteratorError8 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion8 && _iterator8.return) {\n                        _iterator8.return();\n                    }\n                } finally {\n                    if (_didIteratorError8) {\n                        throw _iteratorError8;\n                    }\n                }\n            }\n        }\n    } catch (err) {\n        _didIteratorError6 = true;\n        _iteratorError6 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion6 && _iterator6.return) {\n                _iterator6.return();\n            }\n        } finally {\n            if (_didIteratorError6) {\n                throw _iteratorError6;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion7 = true;\n    var _didIteratorError7 = false;\n    var _iteratorError7 = undefined;\n\n    try {\n        for (var _iterator7 = Object.keys(afterKeys)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {\n            var _key = _step7.value;\n\n            if (processedKeys.indexOf(_key) >= 0) {\n                continue;\n            }\n            var _iteratorNormalCompletion9 = true;\n            var _didIteratorError9 = false;\n            var _iteratorError9 = undefined;\n\n            try {\n                for (var _iterator9 = sortedWeights(afterKeys[_key], false)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {\n                    var _i5 = _step9.value;\n\n                    addToResults(afterKeys[_key][_i5], resultMiddle);\n                }\n            } catch (err) {\n                _didIteratorError9 = true;\n                _iteratorError9 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion9 && _iterator9.return) {\n                        _iterator9.return();\n                    }\n                } finally {\n                    if (_didIteratorError9) {\n                        throw _iteratorError9;\n                    }\n                }\n            }\n        }\n    } catch (err) {\n        _didIteratorError7 = true;\n        _iteratorError7 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion7 && _iterator7.return) {\n                _iterator7.return();\n            }\n        } finally {\n            if (_didIteratorError7) {\n                throw _iteratorError7;\n            }\n        }\n    }\n\n    var sortedKeys = [].concat(resultStart, resultMiddle, resultEnd);\n    return sortedKeys.map(function (key) {\n        return indexMapping[key];\n    }).map(function (i) {\n        return subject[i];\n    });\n};\nexports.default = positionalArraySorter;\n//# sourceMappingURL=positionalArraySorter.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js?");

/***/ }),

/***/ "./src/Editor.js":
/*!***********************!*\
  !*** ./src/Editor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = undefined;\n\nvar _dec, _dec2, _class, _class2, _temp2;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js\");\n\nvar _neosUiDecorators = __webpack_require__(/*! @neos-project/neos-ui-decorators */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js\");\n\nvar _neosUiI18n = __webpack_require__(/*! @neos-project/neos-ui-i18n */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js\");\n\nvar _neosUiI18n2 = _interopRequireDefault(_neosUiI18n);\n\nvar _plowJs = __webpack_require__(/*! plow-js */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js\");\n\nvar _neosUiReduxStore = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js\");\n\nvar _Option = __webpack_require__(/*! ./Option */ \"./src/Option.js\");\n\nvar _Option2 = _interopRequireDefault(_Option);\n\nvar _SelectBoxHelpers = __webpack_require__(/*! ./SelectBoxHelpers */ \"./src/SelectBoxHelpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getDataLoaderOptionsForProps = function getDataLoaderOptionsForProps(props) {\n\treturn {\n\t\tcontextNodePath: props.focusedNodePath,\n\t\tdataSourceIdentifier: props.options.dataSourceIdentifier,\n\t\tdataSourceUri: props.options.dataSourceUri,\n\t\tdataSourceAdditionalData: props.options.dataSourceAdditionalData,\n\t\tdataSourceDisableCaching: Boolean(props.options.dataSourceDisableCaching)\n\t};\n};\n\nvar StyleSelectBoxEditor = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {\n\treturn {\n\t\ti18nRegistry: globalRegistry.get(\"i18n\"),\n\t\tdataSourcesDataLoader: globalRegistry.get(\"dataLoaders\").get(\"DataSources\")\n\t};\n}), _dec2 = (0, _reactRedux.connect)((0, _plowJs.$transform)({\n\tfocusedNodePath: _neosUiReduxStore.selectors.CR.Nodes.focusedNodePathSelector\n})), _dec(_class = _dec2(_class = (_temp2 = _class2 = class StyleSelectBoxEditor extends _react.PureComponent {\n\tconstructor() {\n\t\tvar _temp, _this;\n\n\t\treturn _temp = _this = super(...arguments), this.state = {\n\t\t\tsearchTerm: \"\",\n\t\t\tisLoading: false,\n\t\t\tselectBoxOptions: {}\n\t\t}, this.handleSearchTermChange = function (searchTerm) {\n\t\t\t_this.setState({ searchTerm: searchTerm });\n\t\t}, _temp;\n\t}\n\n\tcomponentDidMount() {\n\t\tthis.loadSelectBoxOptions();\n\t}\n\n\tcomponentDidUpdate(prevProps) {\n\t\t// if our data loader options have changed (e.g. due to use of ClientEval), we want to re-initialize the data source.\n\t\tif (JSON.stringify(getDataLoaderOptionsForProps(this.props)) !== JSON.stringify(getDataLoaderOptionsForProps(prevProps))) {\n\t\t\tthis.loadSelectBoxOptions();\n\t\t}\n\t}\n\n\tloadSelectBoxOptions() {\n\t\tvar _this2 = this;\n\n\t\tif (this.props.options.dataSourceIdentifier) {\n\t\t\tthis.setState({ isLoading: true });\n\t\t\tthis.props.dataSourcesDataLoader.resolveValue(getDataLoaderOptionsForProps(this.props), this.props.value).then(function (selectBoxOptions) {\n\t\t\t\t_this2.setState({\n\t\t\t\t\tisLoading: false,\n\t\t\t\t\tselectBoxOptions: selectBoxOptions\n\t\t\t\t});\n\t\t\t});\n\t\t} else {\n\t\t\tthis.setState({ selectBoxOptions: this.props.options.values });\n\t\t}\n\t}\n\n\trender() {\n\t\tvar _props = this.props,\n\t\t    commit = _props.commit,\n\t\t    value = _props.value,\n\t\t    i18nRegistry = _props.i18nRegistry,\n\t\t    className = _props.className;\n\n\t\tvar options = Object.assign({}, this.constructor.defaultOptions, this.props.options);\n\n\t\tvar processedSelectBoxOptions = (0, _SelectBoxHelpers.processSelectBoxOptions)(i18nRegistry, this.state.selectBoxOptions);\n\n\t\t// Placeholder text must be unescaped in case html entities were used\n\t\tvar placeholder = options && options.placeholder && i18nRegistry.translate(unescape(options.placeholder));\n\t\tvar loadingLabel = i18nRegistry.translate(\"loading\", \"Loading\", [], \"Neos.Neos\", \"Main\");\n\n\t\treturn _react2.default.createElement(_reactUiComponents.SelectBox, {\n\t\t\tclassName: className,\n\t\t\toptions: this.state.searchTerm ? (0, _SelectBoxHelpers.searchOptions)(this.state.searchTerm, processedSelectBoxOptions) : processedSelectBoxOptions,\n\t\t\tvalue: value,\n\t\t\tonValueChange: commit,\n\t\t\tloadingLabel: loadingLabel,\n\t\t\tdisplayLoadingIndicator: this.state.isLoading,\n\t\t\tplaceholder: placeholder,\n\t\t\tallowEmpty: options.allowEmpty,\n\t\t\tdisplaySearchBox: (0, _SelectBoxHelpers.shouldDisplaySearchBox)(options, processedSelectBoxOptions),\n\t\t\tonSearchTermChange: this.handleSearchTermChange,\n\t\t\tnoMatchesFoundLabel: this.props.i18nRegistry.translate(\"Neos.Neos:Main:noMatchesFound\"),\n\t\t\tsearchBoxLeftToTypeLabel: this.props.i18nRegistry.translate(\"Neos.Neos:Main:searchBoxLeftToType\"),\n\t\t\tthreshold: options.threshold,\n\t\t\tListPreviewElement: _Option2.default\n\t\t});\n\t}\n\n}, _class2.propTypes = {\n\tcommit: _propTypes2.default.func.isRequired,\n\tclassName: _propTypes2.default.string,\n\tvalue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),\n\toptions: _propTypes2.default.shape({\n\t\tallowEmpty: _propTypes2.default.bool,\n\t\tplaceholder: _propTypes2.default.string,\n\n\t\tdataSourceIdentifier: _propTypes2.default.string,\n\t\tdataSourceUri: _propTypes2.default.string,\n\t\tdataSourceDisableCaching: _propTypes2.default.bool,\n\t\tdataSourceAdditionalData: _propTypes2.default.objectOf(_propTypes2.default.any),\n\n\t\tminimumResultsForSearch: _propTypes2.default.number,\n\n\t\tvalues: _propTypes2.default.objectOf(_propTypes2.default.shape({\n\t\t\tlabel: _propTypes2.default.string,\n\t\t\ticon: _propTypes2.default.string,\n\n\t\t\t// TODO\n\t\t\tgroup: _propTypes2.default.string\n\t\t}))\n\t}).isRequired,\n\ti18nRegistry: _propTypes2.default.object.isRequired,\n\tdataSourcesDataLoader: _propTypes2.default.shape({\n\t\tresolveValue: _propTypes2.default.func.isRequired\n\t}).isRequired,\n\n\tfocusedNodePath: _propTypes2.default.string.isRequired\n}, _class2.defaultOptions = {\n\t// Use \"5\" as minimum result for search default; same as with old UI\n\tminimumResultsForSearch: 5,\n\tthreshold: 0\n}, _temp2)) || _class) || _class);\nexports.default = StyleSelectBoxEditor;\n\n//# sourceURL=webpack:///./src/Editor.js?");

/***/ }),

/***/ "./src/Option.js":
/*!***********************!*\
  !*** ./src/Option.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _class, _temp;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _SelectBox_Option_MultiLineWithStyle = __webpack_require__(/*! ./SelectBox_Option_MultiLineWithStyle */ \"./src/SelectBox_Option_MultiLineWithStyle.js\");\n\nvar _SelectBox_Option_MultiLineWithStyle2 = _interopRequireDefault(_SelectBox_Option_MultiLineWithStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Option = (_temp = _class = class Option extends _react.PureComponent {\n\n\trender() {\n\t\tvar option = this.props.option;\n\n\n\t\treturn _react2.default.createElement(_SelectBox_Option_MultiLineWithStyle2.default, _extends({}, this.props, {\n\t\t\tlabel: option.label,\n\t\t\tbackgroundColor: option.backgroundColor,\n\t\t\ttextColor: option.textColor\n\t\t}));\n\t}\n}, _class.propTypes = {\n\toption: _propTypes2.default.shape({\n\t\tlabel: _propTypes2.default.string.isRequired,\n\t\tloaderUri: _propTypes2.default.string.isRequired,\n\t\tbackgroundColor: _propTypes2.default.string,\n\t\ttextColor: _propTypes2.default.string\n\t})\n}, _temp);\nexports.default = Option;\n\n//# sourceURL=webpack:///./src/Option.js?");

/***/ }),

/***/ "./src/SelectBoxHelpers.js":
/*!*********************************!*\
  !*** ./src/SelectBoxHelpers.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n/**\n * This file is copied from Neos.Ui to make the selectbox work\n */\n\nvar shouldDisplaySearchBox = exports.shouldDisplaySearchBox = function shouldDisplaySearchBox(options, processedSelectBoxOptions) {\n\treturn options.minimumResultsForSearch >= 0 && processedSelectBoxOptions.length >= options.minimumResultsForSearch;\n};\n\n// Currently, we're doing an extremely simple lowercase substring matching; of course this could be improved a lot!\nvar searchOptions = exports.searchOptions = function searchOptions(searchTerm, processedSelectBoxOptions) {\n\treturn processedSelectBoxOptions.filter(function (option) {\n\t\treturn option.label && option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;\n\t});\n};\n\nvar processSelectBoxOptions = exports.processSelectBoxOptions = function processSelectBoxOptions(i18nRegistry, selectBoxOptions) {\n\treturn (\n\t\t// ToDo: Can't we optimize this by using Object.values and one instead of two filter statements instead?\n\t\tObject.keys(selectBoxOptions).filter(function (k) {\n\t\t\treturn selectBoxOptions[k];\n\t\t})\n\t\t// Filter out items without a label\n\t\t.map(function (k) {\n\t\t\treturn selectBoxOptions[k].label && Object.assign({ value: k }, selectBoxOptions[k], {\n\t\t\t\tlabel: i18nRegistry.translate(selectBoxOptions[k].label)\n\t\t\t});\n\t\t}).filter(function (k) {\n\t\t\treturn k;\n\t\t})\n\t);\n};\n\n//# sourceURL=webpack:///./src/SelectBoxHelpers.js?");

/***/ }),

/***/ "./src/SelectBox_Option_MultiLineWithStyle.js":
/*!****************************************************!*\
  !*** ./src/SelectBox_Option_MultiLineWithStyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _class, _temp;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SelectBox_Option_MultiLineWithStyle = (_temp = _class = class SelectBox_Option_MultiLineWithStyle extends _react.PureComponent {\n\n\trender() {\n\t\tvar _props = this.props,\n\t\t    label = _props.label,\n\t\t    backgroundColor = _props.backgroundColor,\n\t\t    textColor = _props.textColor,\n\t\t    onClick = _props.onClick,\n\t\t    onMouseEnter = _props.onMouseEnter;\n\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{\n\t\t\t\tonMouseEnter: onMouseEnter,\n\t\t\t\tonClick: onClick,\n\t\t\t\trole: 'button',\n\t\t\t\tstyle: { backgroundColor: backgroundColor, color: textColor },\n\t\t\t\tclassName: _styles2.default.option\n\t\t\t},\n\t\t\t_react2.default.createElement('div', { className: _styles2.default.preview, style: { backgroundColor: backgroundColor } }),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\tnull,\n\t\t\t\tlabel\n\t\t\t)\n\t\t);\n\t}\n}, _class.propTypes = {\n\tlabel: _propTypes2.default.string.isRequired,\n\tstyle: _propTypes2.default.string,\n\tonClick: _propTypes2.default.func,\n\tisHighlighted: _propTypes2.default.bool,\n\tonMouseEnter: _propTypes2.default.func\n}, _temp);\nexports.default = SelectBox_Option_MultiLineWithStyle;\n\n//# sourceURL=webpack:///./src/SelectBox_Option_MultiLineWithStyle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./manifest */ \"./src/manifest.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/index.js\");\n\nvar _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);\n\nvar _Editor = __webpack_require__(/*! ./Editor */ \"./src/Editor.js\");\n\nvar _Editor2 = _interopRequireDefault(_Editor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _neosUiExtensibility2.default)('NeosRulez.Neos.Editors.SelectBoxEditor', {}, function (globalRegistry) {\n\tvar editorsRegistry = globalRegistry.get('inspector').get('editors');\n\teditorsRegistry.set(\"NeosRulez/Neos/Editors/SelectBoxEditor\", {\n\t\tcomponent: _Editor2.default\n\t});\n});\n\n//# sourceURL=webpack:///./src/manifest.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"option\":\"styles__option___1sn1C\",\"preview\":\"styles__preview___2cXKK\"};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });