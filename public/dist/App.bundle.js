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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(4);
var isBuffer = __webpack_require__(16);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(15);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(18);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? 'undefined' : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.DOMPurify = factory();
})(undefined, function () {
  'use strict';

  var html = ['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];

  // SVG
  var svg = ['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern'];

  var svgFilters = ['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence'];

  var mathMl = ['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmuliscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mpspace', 'msqrt', 'mystyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover'];

  var text = ['#text'];

  var html$1 = ['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns'];

  var svg$1 = ['accent-height', 'accumulate', 'additivive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan'];

  var mathMl$1 = ['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns'];

  var xml = ['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink'];

  /* Add properties to a lookup table */
  function addToSet(set, array) {
    var l = array.length;
    while (l--) {
      if (typeof array[l] === 'string') {
        array[l] = array[l].toLowerCase();
      }
      set[array[l]] = true;
    }
    return set;
  }

  /* Shallow clone an object */
  function clone(object) {
    var newObject = {};
    var property = void 0;
    for (property in object) {
      if (Object.prototype.hasOwnProperty.call(object, property)) {
        newObject[property] = object[property];
      }
    }
    return newObject;
  }

  var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm; // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;
  var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/; // eslint-disable-line no-useless-escape
  var ARIA_ATTR = /^aria-[\-\w]+$/; // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i; // eslint-disable-line no-useless-escape
  var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
  var ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g; // This needs to be extensive thanks to Webkit/Blink's behavior

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '1.0.3';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;

      return DOMPurify;
    }

    var originalDocument = window.document;
    var useDOMParser = false; // See comment below
    var useXHR = false;

    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        Text = window.Text,
        Comment = window.Comment,
        DOMParser = window.DOMParser,
        _window$XMLHttpReques = window.XMLHttpRequest,
        XMLHttpRequest = _window$XMLHttpReques === undefined ? window.XMLHttpRequest : _window$XMLHttpReques,
        _window$encodeURI = window.encodeURI,
        encodeURI = _window$encodeURI === undefined ? window.encodeURI : _window$encodeURI;

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        getElementsByTagName = _document.getElementsByTagName,
        createDocumentFragment = _document.createDocumentFragment;

    var importNode = originalDocument.importNode;

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
        ERB_EXPR$$1 = ERB_EXPR,
        DATA_ATTR$$1 = DATA_ATTR,
        ARIA_ATTR$$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;

    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for jQuery's $() factory? */
    var SAFE_FOR_JQUERY = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    var SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify. */
    var RETURN_DOM_IMPORT = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* Allow usage of profiles like html, svg and mathMl */
    var USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = addToSet({}, ['audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video']);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  optional config literal
     */
    // eslint-disable-next-line complexity
    var _parseConfig = function _parseConfig(cfg) {
      /* Shield configuration object from tampering */
      if ((typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
        cfg = {};
      }
      /* Set configuration parameters */
      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html);
          addToSet(ALLOWED_ATTR, html$1);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl);
          addToSet(ALLOWED_ATTR, mathMl$1);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (Object && 'freeze' in Object) {
        Object.freeze(cfg);
      }

      CONFIG = cfg;
    };

    /**
     * _forceRemove
     *
     * @param  a DOM node
     */
    var _forceRemove = function _forceRemove(node) {
      DOMPurify.removed.push({ element: node });
      try {
        node.parentNode.removeChild(node);
      } catch (err) {
        node.outerHTML = '';
      }
    };

    /**
     * _removeAttribute
     *
     * @param  an Attribute name
     * @param  a DOM node
     */
    var _removeAttribute = function _removeAttribute(name, node) {
      DOMPurify.removed.push({
        attribute: node.getAttributeNode(name),
        from: node
      });
      node.removeAttribute(name);
    };

    /**
     * _initDocument
     *
     * @param  a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */
    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc = void 0;
      var body = void 0;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      }

      /* Use XHR if necessary because Safari 10.1 and newer are buggy */
      if (useXHR) {
        try {
          dirty = encodeURI(dirty);
        } catch (err) {}
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'document';
        xhr.open('GET', 'data:text/html;charset=utf-8,' + dirty, false);
        xhr.send(null);
        doc = xhr.response;
      }

      /* Use DOMParser to workaround Firefox bug (see comment below) */
      if (useDOMParser) {
        try {
          doc = new DOMParser().parseFromString(dirty, 'text/html');
        } catch (err) {}
      }

      /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
      Safari (see comment below) */
      if (!doc || !doc.documentElement) {
        doc = implementation.createHTMLDocument('');
        body = doc.body;
        body.parentNode.removeChild(body.parentNode.firstElementChild);
        body.outerHTML = dirty;
      }

      /* Work on whole document or just its body */
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
    };

    // Safari 10.1+ (unfixed as of time of writing) has a catastrophic bug in
    // its implementation of DOMParser such that the following executes the
    // JavaScript:
    //
    // new DOMParser()
    //   .parseFromString('<svg onload=alert(document.domain)>', 'text/html');
    //
    // Later, it was also noticed that even more assumed benign and inert ways
    // of creating a document are now insecure thanks to Safari. So we work
    // around that with a feature test and use XHR to create the document in
    // case we really have to. That one seems safe for now.
    //
    // However, Firefox uses a different parser for innerHTML rather than
    // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
    // which means that you *must* use DOMParser, otherwise the output may
    // not be safe if used in a document.write context later.
    //
    // So we feature detect the Firefox bug and use the DOMParser if necessary.
    if (DOMPurify.isSupported) {
      (function () {
        var doc = _initDocument('<svg><g onload="this.parentNode.remove()"></g></svg>');
        if (!doc.querySelector('svg')) {
          useXHR = true;
        }
        try {
          doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
          if (doc.querySelector('svg img')) {
            useDOMParser = true;
          }
        } catch (err) {}
      })();
    }

    /**
     * _createIterator
     *
     * @param  document/fragment to create iterator for
     * @return iterator instance
     */
    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
        return NodeFilter.FILTER_ACCEPT;
      }, false);
    };

    /**
     * _isClobbered
     *
     * @param  element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */
    var _isClobbered = function _isClobbered(elm) {
      if (elm instanceof Text || elm instanceof Comment) {
        return false;
      }
      if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function') {
        return true;
      }
      return false;
    };

    /**
     * _isNode
     *
     * @param object to check whether it's a DOM node
     * @return true is object is a DOM node
     */
    var _isNode = function _isNode(obj) {
      return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode
     */
    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      hooks[entryPoint].forEach(function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   node to check for permission to exist
     * @return  true if node was killed, false if left alive
     */
    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content = void 0;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      var tagName = currentNode.nodeName.toLowerCase();

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Keep content except for black-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
          try {
            currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
          } catch (err) {}
        }
        _forceRemove(currentNode);
        return true;
      }

      /* Convert markup to cover jQuery behavior */
      if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
        DOMPurify.removed.push({ element: currentNode.cloneNode() });
        currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = content.replace(MUSTACHE_EXPR$$1, ' ');
        content = content.replace(ERB_EXPR$$1, ' ');
        if (currentNode.textContent !== content) {
          DOMPurify.removed.push({ element: currentNode.cloneNode() });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param   node to sanitize
     * @return  void
     */
    // eslint-disable-next-line complexity
    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr = void 0;
      var name = void 0;
      var value = void 0;
      var lcName = void 0;
      var idAttr = void 0;
      var attributes = void 0;
      var l = void 0;
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);

      attributes = currentNode.attributes;

      /* Check if we have attributes; if not we might have a text node */
      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        attr = attributes[l];
        name = attr.name;
        value = attr.value.trim();
        lcName = name.toLowerCase();

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;

        /* Remove attribute */
        // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
        // remove a "name" attribute from an <img> tag that has an "id"
        // attribute at the time.
        if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
          idAttr = attributes.id;
          attributes = Array.prototype.slice.apply(attributes);
          _removeAttribute('id', currentNode);
          _removeAttribute(name, currentNode);
          if (attributes.indexOf(idAttr) > l) {
            currentNode.setAttribute('id', idAttr.value);
          }
        } else if (
        // This works around a bug in Safari, where input[type=file]
        // cannot be dynamically set after type has been removed
        currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
          continue;
        } else {
          // This avoids a crash in Safari v9.0 with double-ids.
          // The trick is to first set the id to be empty and then to
          // remove the attribute
          if (name === 'id') {
            currentNode.setAttribute(name, '');
          }
          _removeAttribute(name, currentNode);
        }

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Make sure attribute cannot clobber */
        if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          value = value.replace(MUSTACHE_EXPR$$1, ' ');
          value = value.replace(ERB_EXPR$$1, ' ');
        }

        /* Allow valid data-* attributes: At least one character after "-"
           (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
           XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
           We don't need to check the value; it's always URI safe. */
        if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) {
          // This attribute is safe
        } else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) {
          // This attribute is safe
          /* Otherwise, check the name is permitted */
        } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
          continue;

          /* Check value is safe. First, is attr inert? If so, is safe */
        } else if (URI_SAFE_ATTRIBUTES[lcName]) {
          // This attribute is safe
          /* Check no script, data or unknown possibly unsafe URI
           unless we know URI values are safe for that attribute */
        } else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
          // This attribute is safe
          /* Keep image data URIs alive if src/xlink:href is allowed */
        } else if ((lcName === 'src' || lcName === 'xlink:href') && value.indexOf('data:') === 0 && DATA_URI_TAGS[currentNode.nodeName.toLowerCase()]) {
          // This attribute is safe
          /* Allow unknown protocols: This provides support for links that
           are handled by protocol handlers which may be unknown ahead of
           time, e.g. fb:, spotify: */
        } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
          // This attribute is safe
          /* Check for binary attributes */
          // eslint-disable-next-line no-negated-condition
        } else if (!value) {
          // Binary attributes are safe at this point
          /* Anything else, presume unsafe, do not add it back */
        } else {
          continue;
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          currentNode.setAttribute(name, value);
          DOMPurify.removed.pop();
        } catch (err) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  fragment to iterate over recursively
     * @return void
     */
    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode = void 0;
      var shadowIterator = _createIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty, cfg) {
      var body = void 0;
      var importedNode = void 0;
      var currentNode = void 0;
      var oldNode = void 0;
      var returnNode = void 0;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      if (!dirty) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw new TypeError('toString is not a function');
        } else {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw new TypeError('dirty is not a string, aborting');
          }
        }
      }

      /* Check we can run. Otherwise fall back or ignore */
      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          } else if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }
        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!-->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else {
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
          return dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : '';
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      var nodeIterator = _createIterator(body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }

        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (RETURN_DOM_IMPORT) {
          /* AdoptNode() is not used because internal state is not reset
                 (e.g. the past names map of a HTMLFormElement), this is safe
                 in theory but we would rather not risk another attack vector.
                 The state that is cloned by importNode() is explicitly defined
                 by the specs. */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} configuration object
     * @return void
     */
    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     * @return void
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint
     * @param {Function} hookFunction
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      hooks[entryPoint].push(hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint
     * @return void
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint].pop();
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint
     * @return void
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     * @return void
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;
});
//# sourceMappingURL=purify.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(19);
var buildURL = __webpack_require__(21);
var parseHeaders = __webpack_require__(22);
var isURLSameOrigin = __webpack_require__(23);
var createError = __webpack_require__(7);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(24);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(25);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(20);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = [{"Name":"Новокосино","Longitude":37.864052,"LineColor":"FFCD1C","Latitude":55.745113,"Line":"Калининская","Order":0},{"Name":"Новогиреево","Longitude":37.814587,"LineColor":"FFCD1C","Latitude":55.752237,"Line":"Калининская","Order":1},{"Name":"Перово","Longitude":37.78422,"LineColor":"FFCD1C","Latitude":55.75098,"Line":"Калининская","Order":2},{"Name":"Шоссе энтузиастов","Longitude":37.751703,"LineColor":"FFCD1C","Latitude":55.75809,"Line":"Калининская","Order":3},{"Name":"Авиамоторная","Longitude":37.717444,"LineColor":"FFCD1C","Latitude":55.751933,"Line":"Калининская","Order":4},{"Name":"Площадь Ильича","Longitude":37.680726,"LineColor":"FFCD1C","Latitude":55.747115,"Line":"Калининская","Order":5},{"Name":"Марксистская","Longitude":37.65604,"LineColor":"FFCD1C","Latitude":55.740746,"Line":"Калининская","Order":6},{"Name":"Третьяковская","Longitude":37.626142,"LineColor":"FFCD1C","Latitude":55.741125,"Line":"Калининская","Order":7},{"Name":"Деловой центр","Longitude":37.5395,"LineColor":"FFCD1C","Latitude":55.7491,"Line":"Калининская","Order":8},{"Name":"Парк Победы","Longitude":37.514401,"LineColor":"FFCD1C","Latitude":55.736478,"Line":"Калининская","Order":9},{"Name":"Речной вокзал","Longitude":37.476728,"LineColor":"4FB04F","Latitude":55.854152,"Line":"Замоскворецкая","Order":0},{"Name":"Водный стадион","Longitude":37.487515,"LineColor":"4FB04F","Latitude":55.838978,"Line":"Замоскворецкая","Order":1},{"Name":"Войковская","Longitude":37.497791,"LineColor":"4FB04F","Latitude":55.818923,"Line":"Замоскворецкая","Order":2},{"Name":"Сокол","Longitude":37.515245,"LineColor":"4FB04F","Latitude":55.805564,"Line":"Замоскворецкая","Order":3},{"Name":"Аэропорт","Longitude":37.530477,"LineColor":"4FB04F","Latitude":55.800441,"Line":"Замоскворецкая","Order":4},{"Name":"Динамо","Longitude":37.558212,"LineColor":"4FB04F","Latitude":55.789704,"Line":"Замоскворецкая","Order":5},{"Name":"Белорусская","Longitude":37.582107,"LineColor":"4FB04F","Latitude":55.777439,"Line":"Замоскворецкая","Order":6},{"Name":"Маяковская","Longitude":37.596192,"LineColor":"4FB04F","Latitude":55.769808,"Line":"Замоскворецкая","Order":7},{"Name":"Тверская","Longitude":37.603918,"LineColor":"4FB04F","Latitude":55.765343,"Line":"Замоскворецкая","Order":8},{"Name":"Театральная","Longitude":37.61768,"LineColor":"4FB04F","Latitude":55.758808,"Line":"Замоскворецкая","Order":9},{"Name":"Новокузнецкая","Longitude":37.62928,"LineColor":"4FB04F","Latitude":55.742391,"Line":"Замоскворецкая","Order":10},{"Name":"Павелецкая","Longitude":37.638693,"LineColor":"4FB04F","Latitude":55.729741,"Line":"Замоскворецкая","Order":11},{"Name":"Автозаводская","Longitude":37.657008,"LineColor":"4FB04F","Latitude":55.706634,"Line":"Замоскворецкая","Order":12},{"Name":"Технопарк","Longitude":37.664167,"LineColor":"4FB04F","Latitude":55.695,"Line":"Замоскворецкая","Order":13},{"Name":"Коломенская","Longitude":37.663719,"LineColor":"4FB04F","Latitude":55.677423,"Line":"Замоскворецкая","Order":14},{"Name":"Каширская","Longitude":37.649683,"LineColor":"4FB04F","Latitude":55.655745,"Line":"Замоскворецкая","Order":15},{"Name":"Кантемировская","Longitude":37.656218,"LineColor":"4FB04F","Latitude":55.636107,"Line":"Замоскворецкая","Order":16},{"Name":"Царицыно","Longitude":37.669612,"LineColor":"4FB04F","Latitude":55.620982,"Line":"Замоскворецкая","Order":17},{"Name":"Орехово","Longitude":37.695214,"LineColor":"4FB04F","Latitude":55.61269,"Line":"Замоскворецкая","Order":18},{"Name":"Домодедовская","Longitude":37.717111,"LineColor":"4FB04F","Latitude":55.610131,"Line":"Замоскворецкая","Order":19},{"Name":"Красногвардейская","Longitude":37.742697,"LineColor":"4FB04F","Latitude":55.614075,"Line":"Замоскворецкая","Order":20},{"Name":"Алма-Атинская","Longitude":37.765678,"LineColor":"4FB04F","Latitude":55.63349,"Line":"Замоскворецкая","Order":21},{"Name":"Медведково","Longitude":37.661562,"LineColor":"F07E24","Latitude":55.888103,"Line":"Калужско-Рижская","Order":0},{"Name":"Бабушкинская","Longitude":37.664341,"LineColor":"F07E24","Latitude":55.870641,"Line":"Калужско-Рижская","Order":1},{"Name":"Свиблово","Longitude":37.653379,"LineColor":"F07E24","Latitude":55.855558,"Line":"Калужско-Рижская","Order":2},{"Name":"Ботанический сад","Longitude":37.637811,"LineColor":"F07E24","Latitude":55.844597,"Line":"Калужско-Рижская","Order":3},{"Name":"ВДНХ","Longitude":37.640751,"LineColor":"F07E24","Latitude":55.819626,"Line":"Калужско-Рижская","Order":4},{"Name":"Алексеевская","Longitude":37.638699,"LineColor":"F07E24","Latitude":55.807794,"Line":"Калужско-Рижская","Order":5},{"Name":"Рижская","Longitude":37.636114,"LineColor":"F07E24","Latitude":55.792494,"Line":"Калужско-Рижская","Order":6},{"Name":"Проспект Мира","Longitude":37.633199,"LineColor":"F07E24","Latitude":55.781827,"Line":"Калужско-Рижская","Order":7},{"Name":"Сухаревская","Longitude":37.63285,"LineColor":"F07E24","Latitude":55.772315,"Line":"Калужско-Рижская","Order":8},{"Name":"Тургеневская","Longitude":37.636732,"LineColor":"F07E24","Latitude":55.765371,"Line":"Калужско-Рижская","Order":9},{"Name":"Китай-город","Longitude":37.631326,"LineColor":"F07E24","Latitude":55.756498,"Line":"Калужско-Рижская","Order":10},{"Name":"Третьяковская","Longitude":37.625624,"LineColor":"F07E24","Latitude":55.74073,"Line":"Калужско-Рижская","Order":11},{"Name":"Октябрьская","Longitude":37.612851,"LineColor":"F07E24","Latitude":55.731232,"Line":"Калужско-Рижская","Order":12},{"Name":"Шаболовская","Longitude":37.607892,"LineColor":"F07E24","Latitude":55.718828,"Line":"Калужско-Рижская","Order":13},{"Name":"Ленинский проспект","Longitude":37.58499,"LineColor":"F07E24","Latitude":55.70678,"Line":"Калужско-Рижская","Order":14},{"Name":"Академическая","Longitude":37.5723,"LineColor":"F07E24","Latitude":55.687147,"Line":"Калужско-Рижская","Order":15},{"Name":"Профсоюзная","Longitude":37.562595,"LineColor":"F07E24","Latitude":55.677671,"Line":"Калужско-Рижская","Order":16},{"Name":"Новые Черемушки","Longitude":37.554493,"LineColor":"F07E24","Latitude":55.670077,"Line":"Калужско-Рижская","Order":17},{"Name":"Калужская","Longitude":37.540075,"LineColor":"F07E24","Latitude":55.656682,"Line":"Калужско-Рижская","Order":18},{"Name":"Беляево","Longitude":37.526115,"LineColor":"F07E24","Latitude":55.642357,"Line":"Калужско-Рижская","Order":19},{"Name":"Коньково","Longitude":37.519156,"LineColor":"F07E24","Latitude":55.631857,"Line":"Калужско-Рижская","Order":20},{"Name":"Теплый Стан","Longitude":37.505912,"LineColor":"F07E24","Latitude":55.61873,"Line":"Калужско-Рижская","Order":21},{"Name":"Ясенево","Longitude":37.5334,"LineColor":"F07E24","Latitude":55.606182,"Line":"Калужско-Рижская","Order":22},{"Name":"Новоясеневская","Longitude":37.553017,"LineColor":"F07E24","Latitude":55.601947,"Line":"Калужско-Рижская","Order":23},{"Name":"Бульвар Рокоссовского","Longitude":37.732227,"LineColor":"E42313","Latitude":55.814916,"Line":"Сокольническая","Order":0},{"Name":"Черкизовская","Longitude":37.744863,"LineColor":"E42313","Latitude":55.802787,"Line":"Сокольническая","Order":1},{"Name":"Преображенская площадь","Longitude":37.713582,"LineColor":"E42313","Latitude":55.796322,"Line":"Сокольническая","Order":2},{"Name":"Сокольники","Longitude":37.679895,"LineColor":"E42313","Latitude":55.789282,"Line":"Сокольническая","Order":3},{"Name":"Красносельская","Longitude":37.666097,"LineColor":"E42313","Latitude":55.780014,"Line":"Сокольническая","Order":4},{"Name":"Комсомольская","Longitude":37.654565,"LineColor":"E42313","Latitude":55.774072,"Line":"Сокольническая","Order":5},{"Name":"Красные ворота","Longitude":37.6478,"LineColor":"E42313","Latitude":55.768307,"Line":"Сокольническая","Order":6},{"Name":"Чистые пруды","Longitude":37.638293,"LineColor":"E42313","Latitude":55.76499,"Line":"Сокольническая","Order":7},{"Name":"Лубянка","Longitude":37.625336,"LineColor":"E42313","Latitude":55.759889,"Line":"Сокольническая","Order":8},{"Name":"Охотный ряд","Longitude":37.615078,"LineColor":"E42313","Latitude":55.757228,"Line":"Сокольническая","Order":9},{"Name":"Библиотека им.Ленина","Longitude":37.610388,"LineColor":"E42313","Latitude":55.752123,"Line":"Сокольническая","Order":10},{"Name":"Кропоткинская","Longitude":37.604217,"LineColor":"E42313","Latitude":55.745297,"Line":"Сокольническая","Order":11},{"Name":"Парк культуры","Longitude":37.595027,"LineColor":"E42313","Latitude":55.736163,"Line":"Сокольническая","Order":12},{"Name":"Фрунзенская","Longitude":37.58022,"LineColor":"E42313","Latitude":55.727462,"Line":"Сокольническая","Order":13},{"Name":"Спортивная","Longitude":37.562041,"LineColor":"E42313","Latitude":55.722388,"Line":"Сокольническая","Order":14},{"Name":"Воробьевы горы","Longitude":37.557293,"LineColor":"E42313","Latitude":55.709169,"Line":"Сокольническая","Order":15},{"Name":"Университет","Longitude":37.534511,"LineColor":"E42313","Latitude":55.69329,"Line":"Сокольническая","Order":16},{"Name":"Проспект Вернадского","Longitude":37.504584,"LineColor":"E42313","Latitude":55.676549,"Line":"Сокольническая","Order":17},{"Name":"Юго-Западная","Longitude":37.482852,"LineColor":"E42313","Latitude":55.663146,"Line":"Сокольническая","Order":18},{"Name":"Тропарево","Longitude":37.4725,"LineColor":"E42313","Latitude":55.6459,"Line":"Сокольническая","Order":19},{"Name":"Румянцево","Longitude":37.4419,"LineColor":"E42313","Latitude":55.633,"Line":"Сокольническая","Order":20},{"Name":"Саларьево","Longitude":37.424,"LineColor":"E42313","Latitude":55.6227,"Line":"Сокольническая","Order":21},{"Name":"Щелковская","Longitude":37.798261,"LineColor":"0072BA","Latitude":55.809962,"Line":"Арбатско-Покровская","Order":0},{"Name":"Первомайская","Longitude":37.799364,"LineColor":"0072BA","Latitude":55.794376,"Line":"Арбатско-Покровская","Order":1},{"Name":"Измайловская","Longitude":37.779896,"LineColor":"0072BA","Latitude":55.787713,"Line":"Арбатско-Покровская","Order":2},{"Name":"Партизанская","Longitude":37.74882,"LineColor":"0072BA","Latitude":55.788401,"Line":"Арбатско-Покровская","Order":3},{"Name":"Семеновская","Longitude":37.719289,"LineColor":"0072BA","Latitude":55.783096,"Line":"Арбатско-Покровская","Order":4},{"Name":"Электрозаводская","Longitude":37.7053,"LineColor":"0072BA","Latitude":55.782057,"Line":"Арбатско-Покровская","Order":5},{"Name":"Бауманская","Longitude":37.67904,"LineColor":"0072BA","Latitude":55.772405,"Line":"Арбатско-Покровская","Order":6},{"Name":"Площадь Революции","Longitude":37.62236,"LineColor":"0072BA","Latitude":55.756741,"Line":"Арбатско-Покровская","Order":7},{"Name":"Курская","Longitude":37.659039,"LineColor":"0072BA","Latitude":55.758564,"Line":"Арбатско-Покровская","Order":8},{"Name":"Арбатская","Longitude":37.60349,"LineColor":"0072BA","Latitude":55.752312,"Line":"Арбатско-Покровская","Order":9},{"Name":"Смоленская","Longitude":37.583802,"LineColor":"0072BA","Latitude":55.747713,"Line":"Арбатско-Покровская","Order":10},{"Name":"Киевская","Longitude":37.564132,"LineColor":"0072BA","Latitude":55.743117,"Line":"Арбатско-Покровская","Order":11},{"Name":"Парк Победы","Longitude":37.516865,"LineColor":"0072BA","Latitude":55.735679,"Line":"Арбатско-Покровская","Order":12},{"Name":"Славянский бульвар","Longitude":37.470973,"LineColor":"0072BA","Latitude":55.729542,"Line":"Арбатско-Покровская","Order":13},{"Name":"Кунцевская","Longitude":37.445123,"LineColor":"0072BA","Latitude":55.730634,"Line":"Арбатско-Покровская","Order":14},{"Name":"Молодежная","Longitude":37.415627,"LineColor":"0072BA","Latitude":55.741375,"Line":"Арбатско-Покровская","Order":15},{"Name":"Крылатское","Longitude":37.408139,"LineColor":"0072BA","Latitude":55.756842,"Line":"Арбатско-Покровская","Order":16},{"Name":"Строгино","Longitude":37.402405,"LineColor":"0072BA","Latitude":55.803831,"Line":"Арбатско-Покровская","Order":17},{"Name":"Мякинино","Longitude":37.385214,"LineColor":"0072BA","Latitude":55.823342,"Line":"Арбатско-Покровская","Order":18},{"Name":"Волоколамская","Longitude":37.382453,"LineColor":"0072BA","Latitude":55.835154,"Line":"Арбатско-Покровская","Order":19},{"Name":"Митино","Longitude":37.36122,"LineColor":"0072BA","Latitude":55.846098,"Line":"Арбатско-Покровская","Order":20},{"Name":"Пятницкое шоссе","Longitude":37.353108,"LineColor":"0072BA","Latitude":55.853634,"Line":"Арбатско-Покровская","Order":21},{"Name":"Кунцевская","Longitude":37.446754,"LineColor":"1EBCEF","Latitude":55.730815,"Line":"Филевская","Order":0},{"Name":"Пионерская","Longitude":37.466728,"LineColor":"1EBCEF","Latitude":55.736027,"Line":"Филевская","Order":1},{"Name":"Филевский парк","Longitude":37.483902,"LineColor":"1EBCEF","Latitude":55.739665,"Line":"Филевская","Order":2},{"Name":"Багратионовская","Longitude":37.497042,"LineColor":"1EBCEF","Latitude":55.743544,"Line":"Филевская","Order":3},{"Name":"Фили","Longitude":37.514035,"LineColor":"1EBCEF","Latitude":55.746763,"Line":"Филевская","Order":4},{"Name":"Кутузовская","Longitude":37.5341,"LineColor":"1EBCEF","Latitude":55.740544,"Line":"Филевская","Order":5},{"Name":"Студенческая","Longitude":37.54842,"LineColor":"1EBCEF","Latitude":55.738761,"Line":"Филевская","Order":6},{"Name":"Киевская","Longitude":37.565425,"LineColor":"1EBCEF","Latitude":55.743168,"Line":"Филевская","Order":7},{"Name":"Смоленская","Longitude":37.582173,"LineColor":"1EBCEF","Latitude":55.749083,"Line":"Филевская","Order":8},{"Name":"Арбатская","Longitude":37.601553,"LineColor":"1EBCEF","Latitude":55.752122,"Line":"Филевская","Order":9},{"Name":"Александровский сад","Longitude":37.608775,"LineColor":"1EBCEF","Latitude":55.752255,"Line":"Филевская","Order":10},{"Name":"Выставочная","Longitude":37.542641,"LineColor":"1EBCEF","Latitude":55.750243,"Line":"Филевская","Order":11},{"Name":"Международная","Longitude":37.533282,"LineColor":"1EBCEF","Latitude":55.748324,"Line":"Филевская","Order":12},{"Name":"Алтуфьево","Longitude":37.586473,"LineColor":"ADACAC","Latitude":55.899034,"Line":"Серпуховско-Тимирязевская","Order":0},{"Name":"Бибирево","Longitude":37.603011,"LineColor":"ADACAC","Latitude":55.883868,"Line":"Серпуховско-Тимирязевская","Order":1},{"Name":"Отрадное","Longitude":37.605066,"LineColor":"ADACAC","Latitude":55.864273,"Line":"Серпуховско-Тимирязевская","Order":2},{"Name":"Владыкино","Longitude":37.590451,"LineColor":"ADACAC","Latitude":55.848236,"Line":"Серпуховско-Тимирязевская","Order":3},{"Name":"Петровско-Разумовская","Longitude":37.575512,"LineColor":"ADACAC","Latitude":55.836565,"Line":"Серпуховско-Тимирязевская","Order":4},{"Name":"Тимирязевская","Longitude":37.574498,"LineColor":"ADACAC","Latitude":55.81866,"Line":"Серпуховско-Тимирязевская","Order":5},{"Name":"Дмитровская","Longitude":37.581734,"LineColor":"ADACAC","Latitude":55.808056,"Line":"Серпуховско-Тимирязевская","Order":6},{"Name":"Савеловская","Longitude":37.587163,"LineColor":"ADACAC","Latitude":55.794054,"Line":"Серпуховско-Тимирязевская","Order":7},{"Name":"Менделеевская","Longitude":37.599141,"LineColor":"ADACAC","Latitude":55.781999,"Line":"Серпуховско-Тимирязевская","Order":8},{"Name":"Цветной бульвар","Longitude":37.620466,"LineColor":"ADACAC","Latitude":55.771653,"Line":"Серпуховско-Тимирязевская","Order":9},{"Name":"Чеховская","Longitude":37.608493,"LineColor":"ADACAC","Latitude":55.765747,"Line":"Серпуховско-Тимирязевская","Order":10},{"Name":"Боровицкая","Longitude":37.60934,"LineColor":"ADACAC","Latitude":55.750399,"Line":"Серпуховско-Тимирязевская","Order":11},{"Name":"Полянка","Longitude":37.618594,"LineColor":"ADACAC","Latitude":55.736795,"Line":"Серпуховско-Тимирязевская","Order":12},{"Name":"Серпуховская","Longitude":37.624792,"LineColor":"ADACAC","Latitude":55.726548,"Line":"Серпуховско-Тимирязевская","Order":13},{"Name":"Тульская","Longitude":37.622569,"LineColor":"ADACAC","Latitude":55.70961,"Line":"Серпуховско-Тимирязевская","Order":14},{"Name":"Нагатинская","Longitude":37.620917,"LineColor":"ADACAC","Latitude":55.682099,"Line":"Серпуховско-Тимирязевская","Order":15},{"Name":"Нагорная","Longitude":37.610397,"LineColor":"ADACAC","Latitude":55.672962,"Line":"Серпуховско-Тимирязевская","Order":16},{"Name":"Нахимовский проспект","Longitude":37.605274,"LineColor":"ADACAC","Latitude":55.662379,"Line":"Серпуховско-Тимирязевская","Order":17},{"Name":"Севастопольская","Longitude":37.59809,"LineColor":"ADACAC","Latitude":55.651451,"Line":"Серпуховско-Тимирязевская","Order":18},{"Name":"Чертановская","Longitude":37.606065,"LineColor":"ADACAC","Latitude":55.640538,"Line":"Серпуховско-Тимирязевская","Order":19},{"Name":"Южная","Longitude":37.609047,"LineColor":"ADACAC","Latitude":55.622436,"Line":"Серпуховско-Тимирязевская","Order":20},{"Name":"Пражская","Longitude":37.602386,"LineColor":"ADACAC","Latitude":55.610962,"Line":"Серпуховско-Тимирязевская","Order":21},{"Name":"Улица Академика Янгеля","Longitude":37.601498,"LineColor":"ADACAC","Latitude":55.596753,"Line":"Серпуховско-Тимирязевская","Order":22},{"Name":"Аннино","Longitude":37.596999,"LineColor":"ADACAC","Latitude":55.583477,"Line":"Серпуховско-Тимирязевская","Order":23},{"Name":"Бульвар Дмитрия Донского","Longitude":37.576856,"LineColor":"ADACAC","Latitude":55.568201,"Line":"Серпуховско-Тимирязевская","Order":24},{"Name":"Планерная","Longitude":37.436808,"LineColor":"943E90","Latitude":55.859676,"Line":"Таганско-Краснопресненская","Order":0},{"Name":"Сходненская","Longitude":37.44076,"LineColor":"943E90","Latitude":55.84926,"Line":"Таганско-Краснопресненская","Order":1},{"Name":"Тушинская","Longitude":37.437024,"LineColor":"943E90","Latitude":55.825479,"Line":"Таганско-Краснопресненская","Order":2},{"Name":"Спартак","Longitude":37.4352,"LineColor":"943E90","Latitude":55.8182,"Line":"Таганско-Краснопресненская","Order":3},{"Name":"Щукинская","Longitude":37.463241,"LineColor":"943E90","Latitude":55.8094,"Line":"Таганско-Краснопресненская","Order":4},{"Name":"Октябрьское поле","Longitude":37.493317,"LineColor":"943E90","Latitude":55.793581,"Line":"Таганско-Краснопресненская","Order":5},{"Name":"Полежаевская","Longitude":37.517895,"LineColor":"943E90","Latitude":55.777201,"Line":"Таганско-Краснопресненская","Order":6},{"Name":"Беговая","Longitude":37.545518,"LineColor":"943E90","Latitude":55.773505,"Line":"Таганско-Краснопресненская","Order":7},{"Name":"Улица 1905 года","Longitude":37.562271,"LineColor":"943E90","Latitude":55.763944,"Line":"Таганско-Краснопресненская","Order":8},{"Name":"Баррикадная","Longitude":37.581242,"LineColor":"943E90","Latitude":55.760793,"Line":"Таганско-Краснопресненская","Order":9},{"Name":"Пушкинская","Longitude":37.604356,"LineColor":"943E90","Latitude":55.765607,"Line":"Таганско-Краснопресненская","Order":10},{"Name":"Кузнецкий мост","Longitude":37.624423,"LineColor":"943E90","Latitude":55.761498,"Line":"Таганско-Краснопресненская","Order":11},{"Name":"Китай-город","Longitude":37.633877,"LineColor":"943E90","Latitude":55.75436,"Line":"Таганско-Краснопресненская","Order":12},{"Name":"Таганская","Longitude":37.653605,"LineColor":"943E90","Latitude":55.739502,"Line":"Таганско-Краснопресненская","Order":13},{"Name":"Пролетарская","Longitude":37.666917,"LineColor":"943E90","Latitude":55.731546,"Line":"Таганско-Краснопресненская","Order":14},{"Name":"Волгоградский проспект","Longitude":37.685197,"LineColor":"943E90","Latitude":55.725546,"Line":"Таганско-Краснопресненская","Order":15},{"Name":"Текстильщики","Longitude":37.732117,"LineColor":"943E90","Latitude":55.709211,"Line":"Таганско-Краснопресненская","Order":16},{"Name":"Кузьминки","Longitude":37.763295,"LineColor":"943E90","Latitude":55.705493,"Line":"Таганско-Краснопресненская","Order":17},{"Name":"Рязанский проспект","Longitude":37.792694,"LineColor":"943E90","Latitude":55.716139,"Line":"Таганско-Краснопресненская","Order":18},{"Name":"Выхино","Longitude":37.816788,"LineColor":"943E90","Latitude":55.715983,"Line":"Таганско-Краснопресненская","Order":19},{"Name":"Лермонтовский проспект","Longitude":37.851044,"LineColor":"943E90","Latitude":55.702036,"Line":"Таганско-Краснопресненская","Order":20},{"Name":"Жулебино","Longitude":37.855833,"LineColor":"943E90","Latitude":55.684722,"Line":"Таганско-Краснопресненская","Order":21},{"Name":"Котельники","Longitude":37.8582,"LineColor":"943E90","Latitude":55.6743,"Line":"Таганско-Краснопресненская","Order":22},{"Name":"Новослободская","Longitude":37.601252,"LineColor":"915133","Latitude":55.779606,"Line":"Кольцевая","Order":0},{"Name":"Проспект Мира","Longitude":37.633646,"LineColor":"915133","Latitude":55.779584,"Line":"Кольцевая","Order":1},{"Name":"Комсомольская","Longitude":37.654772,"LineColor":"915133","Latitude":55.775672,"Line":"Кольцевая","Order":2},{"Name":"Курская","Longitude":37.661059,"LineColor":"915133","Latitude":55.758631,"Line":"Кольцевая","Order":3},{"Name":"Таганская","Longitude":37.653334,"LineColor":"915133","Latitude":55.742396,"Line":"Кольцевая","Order":4},{"Name":"Павелецкая","Longitude":37.636294,"LineColor":"915133","Latitude":55.731414,"Line":"Кольцевая","Order":5},{"Name":"Добрынинская","Longitude":37.622533,"LineColor":"915133","Latitude":55.728994,"Line":"Кольцевая","Order":6},{"Name":"Октябрьская","Longitude":37.611049,"LineColor":"915133","Latitude":55.729264,"Line":"Кольцевая","Order":7},{"Name":"Парк культуры","Longitude":37.593095,"LineColor":"915133","Latitude":55.735221,"Line":"Кольцевая","Order":8},{"Name":"Киевская","Longitude":37.56735,"LineColor":"915133","Latitude":55.74361,"Line":"Кольцевая","Order":10},{"Name":"Краснопресненская","Longitude":37.577114,"LineColor":"915133","Latitude":55.760378,"Line":"Кольцевая","Order":11},{"Name":"Белорусская","Longitude":37.582303,"LineColor":"915133","Latitude":55.775179,"Line":"Кольцевая","Order":12},{"Name":"Петровско-Разумовская","Longitude":37.575556,"LineColor":"BED12C","Latitude":55.836667,"Line":"Люблинско-Дмитровская","Order":0},{"Name":"Фонвизинская","Longitude":37.588056,"LineColor":"BED12C","Latitude":55.822778,"Line":"Люблинско-Дмитровская","Order":1},{"Name":"Бутырская ","Longitude":37.602778,"LineColor":"BED12C","Latitude":55.813333,"Line":"Люблинско-Дмитровская","Order":2},{"Name":"Марьина Роща","Longitude":37.61618,"LineColor":"BED12C","Latitude":55.793723,"Line":"Люблинско-Дмитровская","Order":3},{"Name":"Достоевская","Longitude":37.613889,"LineColor":"BED12C","Latitude":55.781667,"Line":"Люблинско-Дмитровская","Order":4},{"Name":"Трубная","Longitude":37.621926,"LineColor":"BED12C","Latitude":55.76771,"Line":"Люблинско-Дмитровская","Order":5},{"Name":"Сретенский бульвар","Longitude":37.635688,"LineColor":"BED12C","Latitude":55.766106,"Line":"Люблинско-Дмитровская","Order":6},{"Name":"Чкаловская","Longitude":37.659293,"LineColor":"BED12C","Latitude":55.755951,"Line":"Люблинско-Дмитровская","Order":7},{"Name":"Римская","Longitude":37.679996,"LineColor":"BED12C","Latitude":55.747027,"Line":"Люблинско-Дмитровская","Order":8},{"Name":"Крестьянская застава","Longitude":37.665325,"LineColor":"BED12C","Latitude":55.732278,"Line":"Люблинско-Дмитровская","Order":9},{"Name":"Дубровка","Longitude":37.676259,"LineColor":"BED12C","Latitude":55.71807,"Line":"Люблинско-Дмитровская","Order":10},{"Name":"Кожуховская","Longitude":37.68544,"LineColor":"BED12C","Latitude":55.706156,"Line":"Люблинско-Дмитровская","Order":11},{"Name":"Печатники","Longitude":37.728338,"LineColor":"BED12C","Latitude":55.692921,"Line":"Люблинско-Дмитровская","Order":12},{"Name":"Волжская","Longitude":37.754314,"LineColor":"BED12C","Latitude":55.690446,"Line":"Люблинско-Дмитровская","Order":13},{"Name":"Люблино","Longitude":37.761639,"LineColor":"BED12C","Latitude":55.676596,"Line":"Люблинско-Дмитровская","Order":14},{"Name":"Братиславская","Longitude":37.748415,"LineColor":"BED12C","Latitude":55.658817,"Line":"Люблинско-Дмитровская","Order":15},{"Name":"Марьино","Longitude":37.743844,"LineColor":"BED12C","Latitude":55.649158,"Line":"Люблинско-Дмитровская","Order":16},{"Name":"Борисово","Longitude":37.743333,"LineColor":"BED12C","Latitude":55.6325,"Line":"Люблинско-Дмитровская","Order":17},{"Name":"Шипиловская","Longitude":37.743611,"LineColor":"BED12C","Latitude":55.621667,"Line":"Люблинско-Дмитровская","Order":18},{"Name":"Зябликово","Longitude":37.745278,"LineColor":"BED12C","Latitude":55.611944,"Line":"Люблинско-Дмитровская","Order":19},{"Name":"Каширская","Longitude":37.647705,"LineColor":"88CDCF","Latitude":55.654327,"Line":"Каховская","Order":0},{"Name":"Варшавская","Longitude":37.619522,"LineColor":"88CDCF","Latitude":55.653294,"Line":"Каховская","Order":1},{"Name":"Каховская","Longitude":37.596573,"LineColor":"88CDCF","Latitude":55.652923,"Line":"Каховская","Order":2},{"Name":"Бунинская аллея","Longitude":37.515899,"LineColor":"BAC8E8","Latitude":55.537977,"Line":"Бутовская","Order":0},{"Name":"Улица Горчакова","Longitude":37.532063,"LineColor":"BAC8E8","Latitude":55.542281,"Line":"Бутовская","Order":1},{"Name":"Бульвар Адмирала Ушакова","Longitude":37.542329,"LineColor":"BAC8E8","Latitude":55.545207,"Line":"Бутовская","Order":2},{"Name":"Улица Скобелевская","Longitude":37.552721,"LineColor":"BAC8E8","Latitude":55.548103,"Line":"Бутовская","Order":3},{"Name":"Улица Старокачаловская","Longitude":37.576074,"LineColor":"BAC8E8","Latitude":55.569194,"Line":"Бутовская","Order":4},{"Name":"Лесопарковая","Longitude":37.577816,"LineColor":"BAC8E8","Latitude":55.581656,"Line":"Бутовская","Order":5},{"Name":"Битцевский Парк","Longitude":37.556058,"LineColor":"BAC8E8","Latitude":55.600066,"Line":"Бутовская","Order":6},{"Name":"Окружная","Longitude":37.571111,"LineColor":"F9BCD1","Latitude":55.848889,"Line":"Московское центральное кольцо","Order":0},{"Name":"Владыкино","Longitude":37.591944,"LineColor":"F9BCD1","Latitude":55.847222,"Line":"Московское центральное кольцо","Order":1},{"Name":"Ботанический сад","Longitude":37.640278,"LineColor":"F9BCD1","Latitude":55.845556,"Line":"Московское центральное кольцо","Order":2},{"Name":"Ростокино","Longitude":37.667778,"LineColor":"F9BCD1","Latitude":55.839444,"Line":"Московское центральное кольцо","Order":3},{"Name":"Белокаменная","Longitude":37.700556,"LineColor":"F9BCD1","Latitude":55.83,"Line":"Московское центральное кольцо","Order":4},{"Name":"Бульвар Рокоссовского","Longitude":37.736944,"LineColor":"F9BCD1","Latitude":55.817222,"Line":"Московское центральное кольцо","Order":5},{"Name":"Локомотив","Longitude":37.745742,"LineColor":"F9BCD1","Latitude":55.803219,"Line":"Московское центральное кольцо","Order":6},{"Name":"Измайлово","Longitude":37.742778,"LineColor":"F9BCD1","Latitude":55.788611,"Line":"Московское центральное кольцо","Order":7},{"Name":"Соколиная Гора","Longitude":37.745278,"LineColor":"F9BCD1","Latitude":55.77,"Line":"Московское центральное кольцо","Order":8},{"Name":"Шоссе Энтузиастов","Longitude":37.748477,"LineColor":"F9BCD1","Latitude":55.758633,"Line":"Московское центральное кольцо","Order":9},{"Name":"Андроновка","Longitude":37.734444,"LineColor":"F9BCD1","Latitude":55.741111,"Line":"Московское центральное кольцо","Order":10},{"Name":"Нижегородская","Longitude":37.72825,"LineColor":"F9BCD1","Latitude":55.732222,"Line":"Московское центральное кольцо","Order":11},{"Name":"Новохохловская","Longitude":37.716111,"LineColor":"F9BCD1","Latitude":55.723889,"Line":"Московское центральное кольцо","Order":12},{"Name":"Угрешская","Longitude":37.697778,"LineColor":"F9BCD1","Latitude":55.718333,"Line":"Московское центральное кольцо","Order":13},{"Name":"Дубровка","Longitude":37.677775,"LineColor":"F9BCD1","Latitude":55.71268,"Line":"Московское центральное кольцо","Order":14},{"Name":"Автозаводская","Longitude":37.66314,"LineColor":"F9BCD1","Latitude":55.70631,"Line":"Московское центральное кольцо","Order":15},{"Name":"ЗИЛ","Longitude":37.648333,"LineColor":"F9BCD1","Latitude":55.698333,"Line":"Московское центральное кольцо","Order":16},{"Name":"Верхние Котлы","Longitude":37.618889,"LineColor":"F9BCD1","Latitude":55.69,"Line":"Московское центральное кольцо","Order":17},{"Name":"Крымская","Longitude":37.605,"LineColor":"F9BCD1","Latitude":55.690038,"Line":"Московское центральное кольцо","Order":18},{"Name":"Площадь Гагарина","Longitude":37.585833,"LineColor":"F9BCD1","Latitude":55.706944,"Line":"Московское центральное кольцо","Order":19},{"Name":"Лужники","Longitude":37.563056,"LineColor":"F9BCD1","Latitude":55.720278,"Line":"Московское центральное кольцо","Order":20},{"Name":"Кутузовская","Longitude":37.533333,"LineColor":"F9BCD1","Latitude":55.740833,"Line":"Московское центральное кольцо","Order":21},{"Name":"Деловой центр","Longitude":37.532222,"LineColor":"F9BCD1","Latitude":55.747222,"Line":"Московское центральное кольцо","Order":22},{"Name":"Шелепиха","Longitude":37.525556,"LineColor":"F9BCD1","Latitude":55.7575,"Line":"Московское центральное кольцо","Order":23},{"Name":"Хорошево","Longitude":37.507222,"LineColor":"F9BCD1","Latitude":55.777222,"Line":"Московское центральное кольцо","Order":24},{"Name":"Зорге","Longitude":37.504444,"LineColor":"F9BCD1","Latitude":55.787778,"Line":"Московское центральное кольцо","Order":25},{"Name":"Панфиловская","Longitude":37.498889,"LineColor":"F9BCD1","Latitude":55.799167,"Line":"Московское центральное кольцо","Order":26},{"Name":"Стрешнево","Longitude":37.486944,"LineColor":"F9BCD1","Latitude":55.813611,"Line":"Московское центральное кольцо","Order":27},{"Name":"Балтийская","Longitude":37.496111,"LineColor":"F9BCD1","Latitude":55.825833,"Line":"Московское центральное кольцо","Order":28},{"Name":"Коптево","Longitude":37.520037,"LineColor":"F9BCD1","Latitude":55.839637,"Line":"Московское центральное кольцо","Order":29},{"Name":"Лихоборы","Longitude":37.551389,"LineColor":"F9BCD1","Latitude":55.847222,"Line":"Московское центральное кольцо","Order":30},{"Name":"Тимирязевская","Longitude":37.578882,"LineColor":"006DA8","Latitude":55.819049,"Line":"Монорельс","Order":0},{"Name":"Улица Милашенкова","Longitude":37.591206,"LineColor":"006DA8","Latitude":55.821876,"Line":"Монорельс","Order":1},{"Name":"Телецентр","Longitude":37.608975,"LineColor":"006DA8","Latitude":55.821795,"Line":"Монорельс","Order":2},{"Name":"Улица Академика Королёва","Longitude":37.627167,"LineColor":"006DA8","Latitude":55.821821,"Line":"Монорельс","Order":3},{"Name":"Выставочный центр","Longitude":37.638494,"LineColor":"006DA8","Latitude":55.824086,"Line":"Монорельс","Order":4},{"Name":"Улица Сергея Эйзенштейна","Longitude":37.644997,"LineColor":"006DA8","Latitude":55.829305,"Line":"Монорельс","Order":5}]

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var _autocomplete = __webpack_require__(13);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _typeAhead = __webpack_require__(14);

var _typeAhead2 = _interopRequireDefault(_typeAhead);

var _map = __webpack_require__(33);

var _map2 = _interopRequireDefault(_map);

var _heart = __webpack_require__(34);

var _heart2 = _interopRequireDefault(_heart);

var _subway = __webpack_require__(35);

var _subway2 = _interopRequireDefault(_subway);

var _subwayFront = __webpack_require__(36);

var _subwayFront2 = _interopRequireDefault(_subwayFront);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _subway2.default)(document.querySelector('#subway'));

(0, _subwayFront2.default)(document.querySelector('#subway__front'));

(0, _autocomplete2.default)(document.querySelector('#address'), document.querySelector('#lat'), document.querySelector('#lng'));

(0, _typeAhead2.default)(document.querySelector('.search'));

(0, _map2.default)(document.querySelector('#map'));

var heartForms = document.querySelectorAll('form.heart');
heartForms.forEach(function (form) {
  form.addEventListener('submit', _heart2.default);
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function autocomplete(input, latInput, lngInput) {
    if (!input) return; //skip this fn from running if there is no input on the page
    var dropdown = new google.maps.places.Autocomplete(input);

    dropdown.addListener('place_changed', function () {
        var place = dropdown.getPlace();
        latInput.value = place.geometry.location.lat();
        lngInput.value = place.geometry.location.lng();
    });

    // if someone hits enter on the address field - don't submit the form
    input.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        };
    });
}

exports.default = autocomplete;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _dompurify = __webpack_require__(3);

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchResultsHTML(companies) {
  return companies.map(function (company) {
    return '\n        <a href="/companies/' + company.slug + '" class="search__result">\n          <strong>' + company.name + '</strong>\n        </a>\n    ';
  }).join('');
};

function typeAhead(search) {
  if (!search) return;

  var searchInput = search.querySelector('input[name="search"]');
  var searchResults = search.querySelector('.search__results');

  searchInput.addEventListener('input', function () {
    var _this = this;

    // If there is no value - quit it!
    if (!this.value) {
      searchResults.style.display = 'none';
      return; // stop!
    };
    //Show the search results!
    searchResults.style.display = 'block';

    _axios2.default.get('/api/search?q=' + this.value).then(function (res) {
      if (res.data.length) {
        searchResults.innerHTML = _dompurify2.default.sanitize(searchResultsHTML(res.data));
        return;
      }
      // tell them nothing came back
      searchResults.innerHTML = _dompurify2.default.sanitize('<div class="search__result">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0434\u043B\u044F ' + _this.value + ' \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!</div>');
    }).catch(function (err) {
      console.log(err);
    });
  });

  // Handle Keyboard Inputs
  searchInput.addEventListener('keyup', function (e) {
    // If they aren't pressing up, down or enter - who cares?!
    if (![38, 40, 13].includes(e.keyCode)) {
      return; // skip it
    }

    var activeClass = 'search__result--active';
    var current = search.querySelector('.' + activeClass);
    var items = search.querySelectorAll('.search__result');
    var next = void 0;

    if (e.keyCode === 40 && current) {
      next = current.nextElementSibling || items[0];
    } else if (e.keyCode === 40) {
      next = items[0];
    } else if (e.keyCode === 38 && current) {
      next = current.previousElementSibling || items[items.length - 1];
    } else if (e.keyCode === 38) {
      next = items[items.length - 1];
    } else if (e.keyCode === 13 && current.href) {
      window.location = current.href;
      return;
    }

    if (current) {
      current.classList.remove(activeClass);
    }

    next.classList.add(activeClass);
  });
};

exports.default = typeAhead;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(4);
var Axios = __webpack_require__(17);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(9);
axios.CancelToken = __webpack_require__(31);
axios.isCancel = __webpack_require__(8);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(32);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(26);
var dispatchRequest = __webpack_require__(27);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(28);
var isCancel = __webpack_require__(8);
var defaults = __webpack_require__(2);
var isAbsoluteURL = __webpack_require__(29);
var combineURLs = __webpack_require__(30);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(9);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Map Options
var mapOptions = {
  center: { lat: 55.7, lng: 37.6 },
  zoom: 12

  // Load Companies
};function loadPlaces(map) {
  var lat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 55.7;
  var lng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 37.6;

  _axios2.default.get('/api/companies/near?lat=' + lat + '&lng=' + lng).then(function (res) {
    var places = res.data;
    if (!places.length) {
      alert('Места на карте на найдены!');
      return;
    }

    // Create Bounds
    var bounds = new google.maps.LatLngBounds();
    var infoWindow = new google.maps.InfoWindow();

    var markers = places.map(function (place) {
      // Destructuring - first assign placeLng - in MongoDB LNG is first!!
      var _place$location$coord = _slicedToArray(place.location.coordinates, 2),
          placeLng = _place$location$coord[0],
          placeLat = _place$location$coord[1];

      var position = { lat: placeLat, lng: placeLng };

      // Bind Each Marker into Bounds
      bounds.extend(position);
      var marker = new google.maps.Marker({
        map: map,
        position: position
      });

      marker.place = place;
      return marker;
    });

    // when someone click a marker -> show details of that place. Use addListener (google's addEventListener)
    markers.forEach(function (marker) {
      marker.addListener('click', function () {

        var html = '\n      <div class="popup">\n        <a href="/companies/' + this.place.slug + '">\n          <img src="/uploads/' + (this.place.photo || 'company.jpg') + '" alt="' + this.place.name + '" />\n          <p>' + this.place.name + ' - ' + this.place.location.address + '</p>\n        </a>\n      </div>\n      ';
        infoWindow.setContent(html);
        infoWindow.open(map, this);
      });
    });

    // Then zoom the map to fit all the markers perfectly
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
  }).catch(function (err) {
    console.log(err);
  });
};

// Make Map
function makeMap(mapDiv) {
  if (!mapDiv) return;

  // 1) Load Map
  var map = new google.maps.Map(mapDiv, mapOptions);
  // 2) Load places
  loadPlaces(map);

  // Setup Input AutoComplete
  var input = document.querySelector('input[name="geolocate"]');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function () {
    var place = autocomplete.getPlace();
    loadPlaces(map, place.geometry.location.lat(), place.geometry.location.lng());
  });
};

exports.default = makeMap;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ajaxHeart(e) {
  var _this = this;

  e.preventDefault();
  _axios2.default.post(this.action).then(function (res) {
    var isHearted = _this.heart.classList.toggle('heart__button--hearted');
    document.querySelector('.heart-count').textContent = res.data.hearts.length;
  }).catch(function (e) {
    console.log(e);
  });
}

exports.default = ajaxHeart;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dompurify = __webpack_require__(3);

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawStations = __webpack_require__(10);


function findMatches(wordsToMatch, stations) {
    return stations.filter(function (station) {
        var regex = new RegExp(wordsToMatch, 'gi');
        return station.Name.match(regex);
    });
}

function searchResultsHtml(stations) {
    return stations.map(function (station) {
        return '\n        \n            <li class="subway__result">\n                ' + station.Name + '\n            </li>\n        ';
    }).join('');
}

function subway(searchInput) {
    var _this = this;

    if (!searchInput) return;

    var searchResults = document.querySelector('.search__results--subway');

    searchInput.addEventListener('input', function () {

        if (!this.value) {
            searchResults.style.display = 'none';
            return;
        }

        searchResults.style.display = 'block';

        var matchArray = findMatches(this.value, rawStations);
        var html = searchResultsHtml(matchArray);

        searchResults.innerHTML = _dompurify2.default.sanitize(html);

        var subwayResults = document.querySelectorAll('.subway__result');
        subwayResults.forEach(function (result) {

            result.addEventListener('click', function () {
                searchInput.value = this.innerText;
                searchResults.innerHTML = _dompurify2.default.sanitize('');
                return;
            });
        });
    });

    //Handle Keyboard Inputs
    searchInput.addEventListener('keyup', function (e) {
        var search = document.querySelector('.search__subway');

        if (![38, 40, 13].includes(e.keyCode)) {
            return;
        }

        var activeClass = 'search__subway--active';
        var current = search.querySelector('.' + activeClass);

        var items = search.querySelectorAll('.subway__result');

        var next = void 0;

        if (e.keyCode === 40 && current) {
            next = current.nextElementSibling || items[0];
        } else if (e.keyCode === 40) {
            next = items[0];
        } else if (e.keyCode === 38 && current) {
            next = current.previousElementSibling || items[items.length - 1];
        } else if (e.keyCode === 38) {
            next = items[items.length - 1];
        } else if (e.keyCode === 13 && current) {
            console.log(_this.value);
            //searchInput.value = this.innerText;
            return;
        }

        if (current) {
            current.classList.remove(activeClass);
        }

        next.classList.add(activeClass);
    });
}

exports.default = subway;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _dompurify = __webpack_require__(3);

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawStations = __webpack_require__(10);


// const statColor = rawStations.map(station => {
//     console.log(station)
// })

function findMatches(wordsToMatch, stations) {
    return stations.filter(function (station) {
        var regex = new RegExp(wordsToMatch, 'gi');
        return station.Name.match(regex);
    });
}

function searchResultsHtml(stations) {
    return stations.map(function (station) {
        return '\n        \n            <li class="subway__result__front" type="checkbox">\n            <span style="color: #' + station.LineColor + '">\u043C.</span> ' + station.Name + '\n            </li>\n        ';
    }).join('');
}

// MAIN
function subwayFront(searchInput) {

    if (!searchInput) return;

    var searchResults = document.querySelector('.search__subway__front--results');

    document.querySelector('.search__subway__front input[type="submit"]').addEventListener('click', function (e) {
        e.preventDefault();

        if (!searchInput.value) return;
        window.location = '/metro/' + searchInput.value.toLowerCase();
        return;
    });

    searchInput.addEventListener('input', function () {

        if (!this.value) {
            searchResults.style.display = 'none';
            return;
        }

        searchResults.style.display = 'block';

        var matchArray = findMatches(this.value, rawStations);
        var html = searchResultsHtml(matchArray);

        searchResults.innerHTML = _dompurify2.default.sanitize(html);

        var subwayResults = document.querySelectorAll('.subway__result__front');
        subwayResults.forEach(function (result) {

            result.addEventListener('click', function () {
                searchInput.value = this.innerText.replace(/м./g, '').trim();
                searchResults.innerHTML = _dompurify2.default.sanitize('');
                return;
            });
        });
    });

    //Handle Keyboard Inputs
    searchInput.addEventListener('keyup', function (e) {

        var search = document.querySelector('.search__subway__front');

        if (![38, 40, 13].includes(e.keyCode)) {
            return;
        }

        var activeClass = 'search__subway--active';
        var current = search.querySelector('.' + activeClass);

        var items = search.querySelectorAll('.subway__result__front');

        var next = void 0;

        if (e.keyCode === 40 && current) {
            next = current.nextElementSibling || items[0];
        } else if (e.keyCode === 40) {
            next = items[0];
        } else if (e.keyCode === 38 && current) {
            next = current.previousElementSibling || items[items.length - 1];
        } else if (e.keyCode === 38) {
            next = items[items.length - 1];
        } else if (e.keyCode === 13 && current) {
            searchInput.value = current.innerText.replace(/м./g, '').trim();
            //searchInput.value = current.innerHTML.trim();
            searchResults.style.display = 'none';
            return;
        }

        if (current) {
            current.classList.remove(activeClass);
        }

        next.classList.add(activeClass);
    });
}

exports.default = subwayFront;

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map