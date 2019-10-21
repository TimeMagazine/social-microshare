var socialMicroshare =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/css-loader/dist/cjs.js?!../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/sass-loader/dist/cjs.js!../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/postcss-loader/src/index.js?!./styles.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/wilson/.npm/lib/node_modules/bundle-module/node_modules/css-loader/dist/cjs.js??ref--7-1!/Users/wilson/.npm/lib/node_modules/bundle-module/node_modules/sass-loader/dist/cjs.js!/Users/wilson/.npm/lib/node_modules/bundle-module/node_modules/postcss-loader/src??postcss!./styles.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/css-loader/dist/runtime/api.js */ "../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".social_microshare .social_icon {\n  border-radius: 100%;\n  height: 32px;\n  width: 32px;\n  display: inline-block;\n  margin-right: 5px;\n  position: relative;\n  cursor: pointer;\n  box-sizing: border-box; }\n  .social_microshare .social_icon svg {\n    position: absolute;\n    fill: #FFF;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%); }\n\n.social_microshare .facebook {\n  background-color: #3b5998; }\n  .social_microshare .facebook svg {\n    top: 55%; }\n\n.social_microshare .twitter {\n  background-color: #4099ff; }\n  .social_microshare .twitter svg {\n    top: 55%; }\n\n.social_microshare .pinterest {\n  background-color: #bd081c; }\n  .social_microshare .pinterest svg {\n    height: 18px;\n    width: 18px; }\n\n.social_microshare .linkedin {\n  background-color: #007bb6; }\n  .social_microshare .linkedin svg {\n    top: 47.5%; }\n\n.social_microshare .reddit {\n  border: 2px solid #000;\n  background-color: #FFFFFF;\n  width: 31.5px; }\n  .social_microshare .reddit svg {\n    fill: #000;\n    height: 18px;\n    width: 18px; }\n\n.social_microshare .gray {\n  background-color: #808080; }\n\n.social_microshare .transparent {\n  background-color: transparent; }\n\n.social_microshare .reddit.gray {\n  background-color: #FFF;\n  border: 2px solid #808080; }\n  .social_microshare .reddit.gray svg {\n    fill: #808080; }\n", ""]);


/***/ }),

/***/ "../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************************************************************!*\
  !*** /Users/wilson/.npm/lib/node_modules/bundle-module/node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/wilson/.npm/lib/node_modules/bundle-module/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: microshare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "microshare", function() { return microshare; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var microshare = function microshare(container_selector, services, opts) {
  __webpack_require__(/*! ./styles.scss */ "./styles.scss");

  opts = opts || {};
  var templates = {
    twitter: __webpack_require__(/*! ./svgs/twitter.html */ "./svgs/twitter.html"),
    facebook: __webpack_require__(/*! ./svgs/facebook.html */ "./svgs/facebook.html"),
    linkedin: __webpack_require__(/*! ./svgs/linkedin.html */ "./svgs/linkedin.html"),
    pinterest: __webpack_require__(/*! ./svgs/pinterest.html */ "./svgs/pinterest.html"),
    reddit: __webpack_require__(/*! ./svgs/reddit.html */ "./svgs/reddit.html")
  };
  var methods = {
    twitter: __webpack_require__(/*! ./lib/twitter */ "./lib/twitter.js"),
    facebook: __webpack_require__(/*! ./lib/facebook */ "./lib/facebook.js"),
    linkedin: __webpack_require__(/*! ./lib/linkedin */ "./lib/linkedin.js"),
    pinterest: __webpack_require__(/*! ./lib/pinterest */ "./lib/pinterest.js"),
    reddit: __webpack_require__(/*! ./lib/reddit */ "./lib/reddit.js")
  };
  var share = {};
  var parent;

  if (_typeof(container_selector) == "object") {
    parent = container_selector;
  } else {
    parent = document.querySelector(container_selector);
  }

  var div = document.createElement("div");
  div.className = "social_microshare";
  parent.appendChild(div);
  services.forEach(function (service) {
    service = service.toLowerCase();

    if (!templates[service]) {
      console.log("Couldn't find icon for", service + ". Options are", Object.keys(templates).join(","));
      return;
    }

    var el; // icon

    if (opts.images && opts.images[service]) {
      if (typeof opts.images[service] === "string") {
        el = document.querySelector(opts.images[service]);
      } else {
        el = opts.images[service];
      }
    } else {
      el = document.createElement("div");
      el.innerHTML = templates[service]();
      el.className = "social_icon " + service;

      if (opts.background && opts.background === "gray") {
        el.className += " gray";
      }

      if (opts.background && opts.background === "none" || opts.background && opts.background === "transparent") {
        el.className += " transparent";
      }

      div.appendChild(el);
    }

    el.onclick = function () {
      if (!share[service]) {
        console.log("You need to define the share options for", service);
        return;
      }

      share[service]();
    };
  });
  return {
    twitter: function twitter(opts) {
      share.twitter = methods.twitter(opts);
    },
    facebook: function facebook(opts) {
      share.facebook = methods.facebook(opts);
    },
    linkedin: function linkedin(opts) {
      share.linkedin = methods.linkedin(opts);
    },
    pinterest: function pinterest(opts) {
      share.pinterest = methods.pinterest(opts);
    },
    reddit: function reddit(opts) {
      share.reddit = methods.reddit(opts);
    },
    all: function all(opts) {
      share.facebook = methods.facebook(opts);
      share.linkedin = methods.linkedin(opts);
      share.pinterest = methods.pinterest(opts);
      share.twitter = methods.twitter(opts);
      share.reddit = methods.reddit(opts);
    },
    share: share
  };
};



/***/ }),

/***/ "./lib/facebook.js":
/*!*************************!*\
  !*** ./lib/facebook.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// FACEBOOK SHARE

/*
app_id: required
title: required
image: required
description: optional
link: defaults to page URL
*/
;

(function () {
  module.exports = function (opts) {
    // load the SDK, unless you already did
    // https://developers.facebook.com/docs/javascript/quickstart
    window.fbAsyncInit = function () {
      FB.init({
        appId: opts.app_id,
        xfbml: true,
        version: 'v2.8'
      });
    };

    (function (d, s, id) {
      var js,
          fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk'); //https://developers.facebook.com/docs/sharing/reference/feed-dialog
    // This will be deprecated on July 17, 2017


    var share = function share() {
      var obj = {
        app_id: opts.app_id,
        method: "share",
        display: "popup",
        href: opts.link || document.URL
      };

      if (opts.hashtag) {
        obj.hashtag;
      }

      obj.quote = opts.title;
      FB.ui(obj, function (response) {// console.log(response);
      });
    };

    return share;
  };
})();

/***/ }),

/***/ "./lib/linkedin.js":
/*!*************************!*\
  !*** ./lib/linkedin.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  module.exports = function (opts) {
    var share = function share() {
      if (!opts.title || !opts.description) {
        console.log("The LinkedIn share button requires a 'title' and 'description' field.");
        return;
      }

      opts.link = encodeURIComponent(opts.link || document.URL);
      opts.source = encodeURIComponent(location.protocol + "//" + location.hostname);
      opts.description = opts.description || "";
      var url = "http://www.linkedin.com/shareArticle?mini=true&url=" + opts.link + "&title=" + encodeURIComponent(opts.title) + "&summary=" + encodeURIComponent(opts.description) + "&source=" + opts.link;
      window.open(url);
    };

    return share;
  };
})();

/***/ }),

/***/ "./lib/pinterest.js":
/*!**************************!*\
  !*** ./lib/pinterest.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  module.exports = function (opts) {
    var share = function share() {
      if (!opts.image || !opts.title) {
        console.log("The Pinterest Share button requires 'title' and 'image' parameters.");
        return;
      }

      opts.link = encodeURIComponent(opts.link || document.URL);
      window.open("http://pinterest.com/pin/create/button/?media=" + encodeURIComponent(opts.image) + "&description=" + encodeURIComponent(opts.title) + "&url=" + opts.link);
    };

    return share;
  };
})();

/***/ }),

/***/ "./lib/reddit.js":
/*!***********************!*\
  !*** ./lib/reddit.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  module.exports = function (opts) {
    var share = function share() {
      if (!opts.title) {
        console.log("The Reddit share button requires a 'title'");
        return;
      }

      opts.link = encodeURIComponent(opts.link || document.URL);
      var url = "https://www.reddit.com/submit?title=" + encodeURIComponent(opts.title) + "&url=" + opts.link;
      window.open(url);
    };

    return share;
  };
})();

/***/ }),

/***/ "./lib/twitter.js":
/*!************************!*\
  !*** ./lib/twitter.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Twitter allows sharing through simple URLs, so it's not usually necessary to load the SDK by calling init() */
;

(function () {
  module.exports = function (opts) {
    var share = function share() {
      if (!opts.title) {
        console.log("The Twitter share button requires a 'title' parameter.");
        return;
      }

      opts.url = encodeURIComponent(opts.link || document.URL);
      console.log(opts.url);
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(opts.title) + "&url=" + opts.url);
    };

    return share;
  };
})();

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/sass-loader/dist/cjs.js!../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/postcss-loader/src??postcss!./styles.scss */ "../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/css-loader/dist/cjs.js?!../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/sass-loader/dist/cjs.js!../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/postcss-loader/src/index.js?!./styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../../../../.npm/lib/node_modules/bundle-module/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./svgs/facebook.html":
/*!****************************!*\
  !*** ./svgs/facebook.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg height="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 3 32 32">\n    <path d="M17.29 25.827v-8.475h2.356l.312-2.92H17.29l.005-1.462c0-.762.073-1.17 1.174-1.17h1.47V8.88h-2.354c-2.828 0-3.823 1.416-3.823 3.798v1.754H12v2.92h1.763v8.475h3.528z"></path>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./svgs/linkedin.html":
/*!****************************!*\
  !*** ./svgs/linkedin.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="100%" height="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 32 32">\n    <path d="M11.983 13.645H8.416V24.54h3.567M12.218 10.275c-.023-1.068-.775-1.882-1.995-1.882-1.22 0-2.017.814-2.017 1.882 0 1.046.774 1.883 1.97 1.883h.024c1.243 0 2.018-.837 2.018-1.883zM24.845 18.293c0-3.346-1.76-4.904-4.106-4.904-1.895 0-2.743 1.057-3.216 1.8v-1.544h-3.567c.047 1.022 0 10.894 0 10.894h3.567v-6.084c0-.326.023-.65.117-.884.26-.65.846-1.324 1.83-1.324 1.293 0 1.81 1 1.81 2.463v5.83h3.565v-6.247z"></path>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./svgs/pinterest.html":
/*!*****************************!*\
  !*** ./svgs/pinterest.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="100%" height="100%" preserveAspectRatio="xMinYMin meet" viewBox="602.4 5.5 104.1 104.1">\n    <path d="M654.5 5.5c-28.7 0-52 23.3-52 52 0 21.3 12.8 39.6 31.1 47.7-.1-3.6 0-8 .9-11.9l6.7-28.3s-1.7-3.3-1.7-8.2c0-7.7 4.5-13.5 10-13.5 4.7 0 7 3.6 7 7.8 0 4.8-3 11.9-4.6 18.5-1.3 5.5 2.8 10 8.2 10 9.9 0 16.5-12.7 16.5-27.7 0-11.4-7.7-19.9-21.6-19.9-15.8 0-25.6 11.8-25.6 24.9 0 4.5 1.3 7.7 3.4 10.2 1 1.1 1.1 1.6.8 2.9-.3.9-.8 3.3-1.1 4.2-.3 1.3-1.4 1.8-2.6 1.3-7.3-3-10.7-10.9-10.7-19.9 0-14.8 12.5-32.5 37.2-32.5 19.9 0 32.9 14.4 32.9 29.8 0 20.4-11.3 35.7-28.1 35.7-5.6 0-10.9-3-12.7-6.5 0 0-3 12-3.7 14.3-1.1 4-3.3 8-5.2 11.1 4.7 1.4 9.6 2.1 14.7 2.1 28.7 0 52-23.3 52-52 .2-28.8-23.1-52.1-51.8-52.1"></path>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./svgs/reddit.html":
/*!**************************!*\
  !*** ./svgs/reddit.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="100%" height="100%" preserveAspectRatio="xMinYMin meet" viewBox="237.6 5.2 84.7 84.7">\n    <path d="M261.8 51.3c-.2.7-.4 1.3-.4 2 0 1.5.4 2.9 1.1 4 .7 1.1 1.7 2 2.8 2.2.6.2 1.1.4 1.5.4 1.3 0 2.6-.7 3.5-1.5.9-.9 1.7-2.2 1.8-3.8.2-.4.2-.9.2-1.1 0-1.3-.4-2.6-.9-3.7-.7-1.1-1.7-2-2.6-2.4-.6-.2-1.3-.2-1.8-.2-1.1 0-2.2.4-3.1 1.1-1 .6-1.8 1.7-2.1 3zm3.3 16.3c.6-.2.9-.4 1.5-.4s.9.2 1.3.4c3.9 2.6 8.3 4.2 12.5 4.2 3.3 0 6.6-.9 9.6-2.7.6-.2.9-.7 1.5-1.1.4-.2.6-.4.9-.7.4 0 .7-.2 1.1-.2.4 0 .7 0 .9.2h.2c.4.2.9.7 1.1 1.3.2.4.4 1.1.4 1.8 0 .4 0 1.1-.4 1.5-.2.4-.6.9-.9 1.1-4.2 3.5-9.2 5.1-14.2 5.1-4.6 0-9-1.3-13.1-3.5-.6-.4-1.3-.9-2-1.3-.2-.2-.6-.4-.9-.9-.2-.4-.4-.9-.6-1.3 0-.4-.2-.7-.2-.9 0-.4.2-.9.4-1.1.2-.6.5-1 .9-1.5zm29.8-8.2h-.2c-.6.2-1.1.4-1.7.4-1.3 0-2.6-.7-3.7-1.8-.9-1.1-1.7-2.6-1.7-4.4v-.4c0-1.8.7-3.3 1.7-4.4 1.1-1.1 2.4-1.8 3.7-1.8h1.1c1.8.4 3.5 2.2 4.1 4.4.2.7.4 1.3.4 1.8 0 1.5-.4 2.9-1.1 4-.5.9-1.5 1.8-2.6 2.2zm-57.3-15.8v.7c0 2.4.6 4.9 1.7 6.8s2.4 3.5 4.1 4.6c0 .9-.2 1.8-.2 2.9 0 5.3 1.7 10.6 4.3 14.8 5 7.7 12.5 12.3 20.3 14.8 4.1 1.1 8.3 1.8 12.3 1.8 6.3 0 12.5-1.3 18.4-4.2 6.1-2.9 11.8-7.7 15.3-14.6 2-3.8 2.9-8.2 2.9-12.6v-2.9c1.5-1.1 2.9-2.7 3.9-4.4 1.1-2 1.8-4.4 1.8-6.8 0-3.3-1.1-6.6-3.1-8.8-1.8-2.4-4.4-4-7.2-4H311c-1.3 0-2.8.2-4.1.9-1.3.4-2.4 1.3-3.3 2.2-.4-.2-.7-.4-1.1-.7-6.1-4.4-13.3-5.9-20.3-6.4 0-4.2-.4-8.6-2.2-12.4-1.3-3.1-3.7-5.5-6.6-6.4-1.1-.2-2.2-.4-3.3-.4-2.9 0-5.9.9-8.7 2.2-1.1-2.2-2.8-3.7-4.8-4.8-1.3-.4-2.6-.7-3.7-.7-1.5 0-2.8.2-4.1.9-1.7.9-3.3 2.4-4.2 4.4-1.1 1.8-1.8 4.2-1.8 6.4 0 .4 0 .9.2 1.3.2 3.1 1.5 5.7 3.3 7.7 1.7 1.8 4.1 2.9 6.4 2.9h1.3c2.4-.2 4.6-1.5 6.3-3.8 1.7-2 2.8-4.9 2.8-7.7v-.4c2.2-1.3 4.6-2.2 7-2.2h.9c1.8.2 3.5 1.5 4.2 3.5 1.3 2.9 1.5 6.2 1.7 9.5-6.8.4-13.8 2.4-19.9 6.6-.2.2-.4.2-.6.4-.4-.4-.9-.9-1.3-1.1-1.8-1.5-4.1-2.2-6.3-2.2-.9 0-1.8 0-2.8.4h-.2c-2.2.7-4 2.2-5.7 4.2-1.4 2.1-2.3 4.7-2.5 7.6zm20.1-26.9v.4c0 1.3-.5 2.6-1.5 3.8-.9.9-2 1.5-3.1 1.5h-.4c-1.1 0-2.2-.7-3.1-1.5-.9-.9-1.5-2.2-1.5-3.7v-.4c0-1.3.5-2.9 1.5-3.8.9-1.1 2-1.8 3.3-1.8.4 0 .7 0 1.1.2 1.1.2 2 1.1 2.6 2 .7.8 1.1 2.2 1.1 3.3zm50.5 22c.9-.4 1.8-.9 2.8-.9h.6c1.3 0 2.8.7 3.7 2 1.1 1.1 1.7 2.4 1.7 4.2.2.2.2.2.2.4 0 1.1-.4 2-.7 2.9-.4.7-.7 1.3-1.3 1.8-1.9-4-4.3-7.6-7-10.4zm-59.5 20.1c0-3.8 1.1-7.3 2.8-10.4 3.7-6 9.2-9.7 14.9-11.9 1.1-.4 2.2-.9 3.3-1.1 3.3-.9 6.8-1.3 10.3-1.3 4.6 0 9.2.9 13.6 2.4 5.7 2.2 11.2 5.9 14.9 11.9 1.7 3.1 2.8 6.8 2.8 10.4 0 1.3-.2 2.6-.4 4-.7 3.1-2 5.7-3.7 7.9-1.5 2.4-3.5 4.4-5.7 6-.4.2-.9.7-1.3.9-6.3 4.2-13.3 6-20.2 6-1.3 0-2.4 0-3.7-.2-7-.7-14-3.1-19.9-8.1-1.7-1.8-3.5-3.5-4.8-5.7-1.3-2.4-2.4-4.9-2.8-7.5-.1-1.3-.1-2.2-.1-3.3zM243 44.3c0-.9.2-1.8.5-2.6.6-1.3 1.3-2.2 2.2-2.9 1.1-.7 2.2-.9 3.3-.9.9 0 1.8.2 2.8.9-2.8 2.9-5.1 6.4-6.8 10.4-.6-.4-.9-1.1-1.3-1.8-.3-1.2-.7-2-.7-3.1z"></path>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./svgs/twitter.html":
/*!***************************!*\
  !*** ./svgs/twitter.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg height="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 32 32">\n    <path d="M15.874 12.354l.032.537-.533-.065c-1.943-.252-3.64-1.106-5.082-2.542l-.703-.712-.182.527c-.384 1.173-.138 2.41.662 3.243.427.46.33.526-.405.252-.257-.087-.48-.153-.502-.12-.075.076.18 1.073.384 1.468.278.548.844 1.085 1.463 1.402l.523.252-.62.01c-.597 0-.62.012-.554.242.213.712 1.056 1.468 1.996 1.797l.662.23-.577.35c-.854.505-1.857.79-2.86.812-.48.01-.876.054-.876.087 0 .11 1.303.723 2.06.964 2.275.713 4.976.406 7.004-.81 1.44-.866 2.882-2.586 3.554-4.25.363-.89.726-2.51.726-3.288 0-.504.032-.57.63-1.173.352-.35.683-.734.747-.843.108-.208.097-.208-.447-.022-.907.328-1.036.285-.587-.208.33-.35.726-.986.726-1.173 0-.034-.16.02-.342.12-.192.11-.62.274-.94.372l-.576.187-.523-.363c-.287-.197-.693-.416-.906-.482-.544-.153-1.377-.132-1.868.044-1.334.492-2.178 1.763-2.082 3.154z"></path>\n</svg>';

}
return __p
}

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWxNaWNyb3NoYXJlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvY2lhbE1pY3Jvc2hhcmUvLi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9zb2NpYWxNaWNyb3NoYXJlLy9Vc2Vycy93aWxzb24vLm5wbS9saWIvbm9kZV9tb2R1bGVzL2J1bmRsZS1tb2R1bGUvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zb2NpYWxNaWNyb3NoYXJlLy9Vc2Vycy93aWxzb24vLm5wbS9saWIvbm9kZV9tb2R1bGVzL2J1bmRsZS1tb2R1bGUvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NvY2lhbE1pY3Jvc2hhcmUvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zb2NpYWxNaWNyb3NoYXJlLy4vbGliL2ZhY2Vib29rLmpzIiwid2VicGFjazovL3NvY2lhbE1pY3Jvc2hhcmUvLi9saWIvbGlua2VkaW4uanMiLCJ3ZWJwYWNrOi8vc29jaWFsTWljcm9zaGFyZS8uL2xpYi9waW50ZXJlc3QuanMiLCJ3ZWJwYWNrOi8vc29jaWFsTWljcm9zaGFyZS8uL2xpYi9yZWRkaXQuanMiLCJ3ZWJwYWNrOi8vc29jaWFsTWljcm9zaGFyZS8uL2xpYi90d2l0dGVyLmpzIiwid2VicGFjazovL3NvY2lhbE1pY3Jvc2hhcmUvLi9zdHlsZXMuc2Nzcz84YjM1Iiwid2VicGFjazovL3NvY2lhbE1pY3Jvc2hhcmUvLi9zdmdzL2ZhY2Vib29rLmh0bWwiLCJ3ZWJwYWNrOi8vc29jaWFsTWljcm9zaGFyZS8uL3N2Z3MvbGlua2VkaW4uaHRtbCIsIndlYnBhY2s6Ly9zb2NpYWxNaWNyb3NoYXJlLy4vc3Zncy9waW50ZXJlc3QuaHRtbCIsIndlYnBhY2s6Ly9zb2NpYWxNaWNyb3NoYXJlLy4vc3Zncy9yZWRkaXQuaHRtbCIsIndlYnBhY2s6Ly9zb2NpYWxNaWNyb3NoYXJlLy4vc3Zncy90d2l0dGVyLmh0bWwiXSwibmFtZXMiOlsibWljcm9zaGFyZSIsImNvbnRhaW5lcl9zZWxlY3RvciIsInNlcnZpY2VzIiwib3B0cyIsInJlcXVpcmUiLCJ0ZW1wbGF0ZXMiLCJ0d2l0dGVyIiwiZmFjZWJvb2siLCJsaW5rZWRpbiIsInBpbnRlcmVzdCIsInJlZGRpdCIsIm1ldGhvZHMiLCJzaGFyZSIsInBhcmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImZvckVhY2giLCJzZXJ2aWNlIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJlbCIsImltYWdlcyIsImlubmVySFRNTCIsImJhY2tncm91bmQiLCJvbmNsaWNrIiwiYWxsIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyIsImZiQXN5bmNJbml0IiwiRkIiLCJpbml0IiwiYXBwSWQiLCJhcHBfaWQiLCJ4ZmJtbCIsInZlcnNpb24iLCJkIiwicyIsImlkIiwianMiLCJmanMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm9iaiIsIm1ldGhvZCIsImRpc3BsYXkiLCJocmVmIiwibGluayIsIlVSTCIsImhhc2h0YWciLCJxdW90ZSIsInRpdGxlIiwidWkiLCJyZXNwb25zZSIsImRlc2NyaXB0aW9uIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic291cmNlIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwidXJsIiwib3BlbiIsImltYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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Q1QsSUFBSSxDQUFDMkQsS0FBVixFQUFpQjtBQUNoQnZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHdEQUFaO0FBQ0E7QUFDQTs7QUFDRHJCLFVBQUksQ0FBQ29FLEdBQUwsR0FBV0wsa0JBQWtCLENBQUMvRCxJQUFJLENBQUN1RCxJQUFMLElBQWE1QyxRQUFRLENBQUM2QyxHQUF2QixDQUE3QjtBQUNBcEMsYUFBTyxDQUFDQyxHQUFSLENBQVlyQixJQUFJLENBQUNvRSxHQUFqQjtBQUNHbkMsWUFBTSxDQUFDb0MsSUFBUCxDQUFZLDJDQUEyQ04sa0JBQWtCLENBQUMvRCxJQUFJLENBQUMyRCxLQUFOLENBQTdELEdBQTRFLE9BQTVFLEdBQXNGM0QsSUFBSSxDQUFDb0UsR0FBdkc7QUFDSCxLQVJEOztBQVNBLFdBQU8zRCxLQUFQO0FBQ0EsR0FYRDtBQVlBLENBYkMsR0FBRCxDOzs7Ozs7Ozs7OztBQ0ZELGNBQWMsbUJBQU8sQ0FBQywybUJBQWlVOztBQUV2VjtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxnUUFBOEg7O0FBRW5KO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDUkE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzb2NpYWxNaWNyb3NoYXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ubnBtL2xpYi9ub2RlX21vZHVsZXMvYnVuZGxlLW1vZHVsZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNvY2lhbF9taWNyb3NoYXJlIC5zb2NpYWxfaWNvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5zb2NpYWxfbWljcm9zaGFyZSAuc29jaWFsX2ljb24gc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmaWxsOiAjRkZGO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcblxcbi5zb2NpYWxfbWljcm9zaGFyZSAuZmFjZWJvb2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODsgfVxcbiAgLnNvY2lhbF9taWNyb3NoYXJlIC5mYWNlYm9vayBzdmcge1xcbiAgICB0b3A6IDU1JTsgfVxcblxcbi5zb2NpYWxfbWljcm9zaGFyZSAudHdpdHRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA5OWZmOyB9XFxuICAuc29jaWFsX21pY3Jvc2hhcmUgLnR3aXR0ZXIgc3ZnIHtcXG4gICAgdG9wOiA1NSU7IH1cXG5cXG4uc29jaWFsX21pY3Jvc2hhcmUgLnBpbnRlcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQwODFjOyB9XFxuICAuc29jaWFsX21pY3Jvc2hhcmUgLnBpbnRlcmVzdCBzdmcge1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHdpZHRoOiAxOHB4OyB9XFxuXFxuLnNvY2lhbF9taWNyb3NoYXJlIC5saW5rZWRpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmI2OyB9XFxuICAuc29jaWFsX21pY3Jvc2hhcmUgLmxpbmtlZGluIHN2ZyB7XFxuICAgIHRvcDogNDcuNSU7IH1cXG5cXG4uc29jaWFsX21pY3Jvc2hhcmUgLnJlZGRpdCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIHdpZHRoOiAzMS41cHg7IH1cXG4gIC5zb2NpYWxfbWljcm9zaGFyZSAucmVkZGl0IHN2ZyB7XFxuICAgIGZpbGw6ICMwMDA7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgd2lkdGg6IDE4cHg7IH1cXG5cXG4uc29jaWFsX21pY3Jvc2hhcmUgLmdyYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDsgfVxcblxcbi5zb2NpYWxfbWljcm9zaGFyZSAudHJhbnNwYXJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uc29jaWFsX21pY3Jvc2hhcmUgLnJlZGRpdC5ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjODA4MDgwOyB9XFxuICAuc29jaWFsX21pY3Jvc2hhcmUgLnJlZGRpdC5ncmF5IHN2ZyB7XFxuICAgIGZpbGw6ICM4MDgwODA7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJsZXQgbWljcm9zaGFyZSA9IGZ1bmN0aW9uKGNvbnRhaW5lcl9zZWxlY3Rvciwgc2VydmljZXMsIG9wdHMpIHtcblx0cmVxdWlyZShcIi4vc3R5bGVzLnNjc3NcIik7XG5cblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0bGV0IHRlbXBsYXRlcyA9IHtcblx0XHR0d2l0dGVyOiByZXF1aXJlKFwiLi9zdmdzL3R3aXR0ZXIuaHRtbFwiKSxcblx0XHRmYWNlYm9vazogcmVxdWlyZShcIi4vc3Zncy9mYWNlYm9vay5odG1sXCIpLFxuXHRcdGxpbmtlZGluOiByZXF1aXJlKFwiLi9zdmdzL2xpbmtlZGluLmh0bWxcIiksXG5cdFx0cGludGVyZXN0OiByZXF1aXJlKFwiLi9zdmdzL3BpbnRlcmVzdC5odG1sXCIpLFxuXHRcdHJlZGRpdDogcmVxdWlyZShcIi4vc3Zncy9yZWRkaXQuaHRtbFwiKVxuXHR9O1xuXG5cdGxldCBtZXRob2RzID0ge1xuXHRcdHR3aXR0ZXI6IHJlcXVpcmUoXCIuL2xpYi90d2l0dGVyXCIpLFxuXHRcdGZhY2Vib29rOiByZXF1aXJlKFwiLi9saWIvZmFjZWJvb2tcIiksXG5cdFx0bGlua2VkaW46IHJlcXVpcmUoXCIuL2xpYi9saW5rZWRpblwiKSxcblx0XHRwaW50ZXJlc3Q6IHJlcXVpcmUoXCIuL2xpYi9waW50ZXJlc3RcIiksXG5cdFx0cmVkZGl0OiByZXF1aXJlKFwiLi9saWIvcmVkZGl0XCIpXG5cdH07XG5cblx0bGV0IHNoYXJlID0ge307XG5cdGxldCBwYXJlbnQ7XG5cblx0aWYgKHR5cGVvZiBjb250YWluZXJfc2VsZWN0b3IgPT0gXCJvYmplY3RcIikge1xuXHRcdHBhcmVudCA9IGNvbnRhaW5lcl9zZWxlY3Rvcjtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcl9zZWxlY3Rvcik7XG5cdH1cblxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGl2LmNsYXNzTmFtZSA9IFwic29jaWFsX21pY3Jvc2hhcmVcIjtcblx0cGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG5cblx0c2VydmljZXMuZm9yRWFjaChzZXJ2aWNlID0+IHtcblx0XHRzZXJ2aWNlID0gc2VydmljZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghdGVtcGxhdGVzW3NlcnZpY2VdKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkNvdWxkbid0IGZpbmQgaWNvbiBmb3JcIiwgc2VydmljZSArIFwiLiBPcHRpb25zIGFyZVwiLCBPYmplY3Qua2V5cyh0ZW1wbGF0ZXMpLmpvaW4oXCIsXCIpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgZWw7IC8vIGljb25cblxuXHRcdGlmIChvcHRzLmltYWdlcyAmJiBvcHRzLmltYWdlc1tzZXJ2aWNlXSkge1xuXHRcdFx0aWYgKHR5cGVvZiBvcHRzLmltYWdlc1tzZXJ2aWNlXSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0cy5pbWFnZXNbc2VydmljZV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwgPSBvcHRzLmltYWdlc1tzZXJ2aWNlXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gdGVtcGxhdGVzW3NlcnZpY2VdKCk7XG5cdFx0XHRlbC5jbGFzc05hbWUgPSBcInNvY2lhbF9pY29uIFwiICsgc2VydmljZTtcblxuXHRcdFx0aWYgKG9wdHMuYmFja2dyb3VuZCAmJiBvcHRzLmJhY2tncm91bmQgPT09IFwiZ3JheVwiKSB7XG5cdFx0XHRcdGVsLmNsYXNzTmFtZSArPSBcIiBncmF5XCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRzLmJhY2tncm91bmQgJiYgb3B0cy5iYWNrZ3JvdW5kID09PSBcIm5vbmVcIiB8fCBvcHRzLmJhY2tncm91bmQgJiYgb3B0cy5iYWNrZ3JvdW5kID09PSBcInRyYW5zcGFyZW50XCIpIHtcblx0XHRcdFx0ZWwuY2xhc3NOYW1lICs9IFwiIHRyYW5zcGFyZW50XCI7XG5cdFx0XHR9XG5cdFx0XHRkaXYuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdH1cblx0XHRcblx0XHRlbC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXNoYXJlW3NlcnZpY2VdKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiWW91IG5lZWQgdG8gZGVmaW5lIHRoZSBzaGFyZSBvcHRpb25zIGZvclwiLCBzZXJ2aWNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2hhcmVbc2VydmljZV0oKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0dHdpdHRlcjogZnVuY3Rpb24ob3B0cykge1xuXHRcdFx0c2hhcmUudHdpdHRlciA9IG1ldGhvZHMudHdpdHRlcihvcHRzKTtcblx0XHR9LFxuXHRcdGZhY2Vib29rOiBmdW5jdGlvbihvcHRzKSB7XG5cdFx0XHRzaGFyZS5mYWNlYm9vayA9IG1ldGhvZHMuZmFjZWJvb2sob3B0cyk7XG5cdFx0fSxcblx0XHRsaW5rZWRpbjogZnVuY3Rpb24ob3B0cykge1xuXHRcdFx0c2hhcmUubGlua2VkaW4gPSBtZXRob2RzLmxpbmtlZGluKG9wdHMpO1xuXHRcdH0sXG5cdFx0cGludGVyZXN0OiBmdW5jdGlvbihvcHRzKSB7XG5cdFx0XHRzaGFyZS5waW50ZXJlc3QgPSBtZXRob2RzLnBpbnRlcmVzdChvcHRzKTtcblx0XHR9LFxuXHRcdHJlZGRpdDogZnVuY3Rpb24ob3B0cykge1xuXHRcdFx0c2hhcmUucmVkZGl0ID0gbWV0aG9kcy5yZWRkaXQob3B0cyk7XG5cdFx0fSxcblx0XHRhbGw6IGZ1bmN0aW9uKG9wdHMpIHtcblx0XHRcdHNoYXJlLmZhY2Vib29rID0gbWV0aG9kcy5mYWNlYm9vayhvcHRzKTtcblx0XHRcdHNoYXJlLmxpbmtlZGluID0gbWV0aG9kcy5saW5rZWRpbihvcHRzKTtcblx0XHRcdHNoYXJlLnBpbnRlcmVzdCA9IG1ldGhvZHMucGludGVyZXN0KG9wdHMpO1xuXHRcdFx0c2hhcmUudHdpdHRlciA9IG1ldGhvZHMudHdpdHRlcihvcHRzKTtcblx0XHRcdHNoYXJlLnJlZGRpdCA9IG1ldGhvZHMucmVkZGl0KG9wdHMpO1xuXHRcdH0sXG5cdFx0c2hhcmU6IHNoYXJlXG5cdH07XG59XG5cbmV4cG9ydCB7IG1pY3Jvc2hhcmUgfSIsIi8vIEZBQ0VCT09LIFNIQVJFXG4vKlxuYXBwX2lkOiByZXF1aXJlZFxudGl0bGU6IHJlcXVpcmVkXG5pbWFnZTogcmVxdWlyZWRcbmRlc2NyaXB0aW9uOiBvcHRpb25hbFxubGluazogZGVmYXVsdHMgdG8gcGFnZSBVUkxcbiovXG5cbjsoZnVuY3Rpb24oKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuXHRcdC8vIGxvYWQgdGhlIFNESywgdW5sZXNzIHlvdSBhbHJlYWR5IGRpZFxuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9qYXZhc2NyaXB0L3F1aWNrc3RhcnRcblx0XHR3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdEZCLmluaXQoe1xuXHRcdFx0XHRhcHBJZDogb3B0cy5hcHBfaWQsXG5cdFx0XHRcdHhmYm1sOiB0cnVlLFxuXHRcdFx0XHR2ZXJzaW9uOiAndjIuOCdcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQoZnVuY3Rpb24oZCwgcywgaWQpe1xuXHRcdFx0dmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuXHRcdFx0aWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7cmV0dXJuO31cblx0XHRcdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xuXHRcdFx0anMuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xuXHRcdFx0ZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuXHRcdH0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XG5cbiAgICAgICAgLy9odHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3Mvc2hhcmluZy9yZWZlcmVuY2UvZmVlZC1kaWFsb2dcbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGRlcHJlY2F0ZWQgb24gSnVseSAxNywgMjAxN1xuXHRcdHZhciBzaGFyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9iaiA9IHtcblx0XHRcdFx0YXBwX2lkOiBvcHRzLmFwcF9pZCxcblx0XHRcdFx0bWV0aG9kOiBcInNoYXJlXCIsXG5cdFx0XHRcdGRpc3BsYXk6IFwicG9wdXBcIixcblx0XHRcdFx0aHJlZjogb3B0cy5saW5rIHx8IGRvY3VtZW50LlVSTFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKG9wdHMuaGFzaHRhZykge1xuXHRcdFx0XHRvYmouaGFzaHRhZztcblx0XHRcdH1cblxuXHRcdFx0b2JqLnF1b3RlID0gb3B0cy50aXRsZTtcblxuXHRcdFx0RkIudWkob2JqLCBmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cbiAgICAgICAgcmV0dXJuIHNoYXJlO1xuXHR9XG59KCkpO1xuIiwiOyhmdW5jdGlvbigpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG5cdFx0dmFyIHNoYXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIW9wdHMudGl0bGUgfHwgIW9wdHMuZGVzY3JpcHRpb24pIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJUaGUgTGlua2VkSW4gc2hhcmUgYnV0dG9uIHJlcXVpcmVzIGEgJ3RpdGxlJyBhbmQgJ2Rlc2NyaXB0aW9uJyBmaWVsZC5cIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0b3B0cy5saW5rID0gZW5jb2RlVVJJQ29tcG9uZW50KG9wdHMubGluayB8fCBkb2N1bWVudC5VUkwpO1xuXHRcdFx0b3B0cy5zb3VyY2UgPSBlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0bmFtZSk7XG5cdFx0XHRvcHRzLmRlc2NyaXB0aW9uID0gb3B0cy5kZXNjcmlwdGlvbiB8fCBcIlwiO1xuXG5cdFx0XHR2YXIgdXJsID0gXCJodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD1cIiArIG9wdHMubGluayArIFwiJnRpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdHMudGl0bGUpICsgXCImc3VtbWFyeT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvcHRzLmRlc2NyaXB0aW9uKSArIFwiJnNvdXJjZT1cIiArIG9wdHMubGluaztcblx0XHRcdHdpbmRvdy5vcGVuKHVybCk7XG5cdFx0fVxuXHRcdHJldHVybiBzaGFyZTtcdFx0XG5cdH07XG59KCkpOyIsIjsoZnVuY3Rpb24oKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuXHRcdHZhciBzaGFyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCFvcHRzLmltYWdlIHx8ICFvcHRzLnRpdGxlKSB7XHRcdFx0XHRcdFxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRoZSBQaW50ZXJlc3QgU2hhcmUgYnV0dG9uIHJlcXVpcmVzICd0aXRsZScgYW5kICdpbWFnZScgcGFyYW1ldGVycy5cIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0b3B0cy5saW5rID0gZW5jb2RlVVJJQ29tcG9uZW50KG9wdHMubGluayB8fCBkb2N1bWVudC5VUkwpO1xuXHQgICAgXHR3aW5kb3cub3BlbihcImh0dHA6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz9tZWRpYT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvcHRzLmltYWdlKSArIFwiJmRlc2NyaXB0aW9uPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdHMudGl0bGUpICsgXCImdXJsPVwiICsgb3B0cy5saW5rKTtcblx0XHR9XG5cdFx0cmV0dXJuIHNoYXJlO1xuXHR9XG59KCkpOyIsIjsoZnVuY3Rpb24oKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuXHRcdHZhciBzaGFyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCFvcHRzLnRpdGxlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiVGhlIFJlZGRpdCBzaGFyZSBidXR0b24gcmVxdWlyZXMgYSAndGl0bGUnXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG9wdHMubGluayA9IGVuY29kZVVSSUNvbXBvbmVudChvcHRzLmxpbmsgfHwgZG9jdW1lbnQuVVJMKTtcblx0XHRcdHZhciB1cmwgPSBcImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0P3RpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdHMudGl0bGUpICsgXCImdXJsPVwiICsgb3B0cy5saW5rO1xuXHRcdFx0d2luZG93Lm9wZW4odXJsKTtcblx0XHR9XG5cdFx0cmV0dXJuIHNoYXJlO1x0XHRcblx0fTtcbn0oKSk7IiwiLyogVHdpdHRlciBhbGxvd3Mgc2hhcmluZyB0aHJvdWdoIHNpbXBsZSBVUkxzLCBzbyBpdCdzIG5vdCB1c3VhbGx5IG5lY2Vzc2FyeSB0byBsb2FkIHRoZSBTREsgYnkgY2FsbGluZyBpbml0KCkgKi9cblxuOyhmdW5jdGlvbigpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG5cdFx0dmFyIHNoYXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIW9wdHMudGl0bGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJUaGUgVHdpdHRlciBzaGFyZSBidXR0b24gcmVxdWlyZXMgYSAndGl0bGUnIHBhcmFtZXRlci5cIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG9wdHMudXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KG9wdHMubGluayB8fCBkb2N1bWVudC5VUkwpO1xuXHRcdFx0Y29uc29sZS5sb2cob3B0cy51cmwpO1xuXHQgICAgXHR3aW5kb3cub3BlbihcImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob3B0cy50aXRsZSkgKyBcIiZ1cmw9XCIgKyBvcHRzLnVybCk7XG5cdFx0fTtcblx0XHRyZXR1cm4gc2hhcmU7XG5cdH1cbn0oKSk7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8ubnBtL2xpYi9ub2RlX21vZHVsZXMvYnVuZGxlLW1vZHVsZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLm5wbS9saWIvbm9kZV9tb2R1bGVzL2J1bmRsZS1tb2R1bGUvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy5ucG0vbGliL25vZGVfbW9kdWxlcy9idW5kbGUtbW9kdWxlL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy5ucG0vbGliL25vZGVfbW9kdWxlcy9idW5kbGUtbW9kdWxlL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8c3ZnIGhlaWdodD1cIjEwMCVcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pbllNaW4gbWVldFwiIHZpZXdCb3g9XCIwIDMgMzIgMzJcIj5cXG4gICAgPHBhdGggZD1cIk0xNy4yOSAyNS44Mjd2LTguNDc1aDIuMzU2bC4zMTItMi45MkgxNy4yOWwuMDA1LTEuNDYyYzAtLjc2Mi4wNzMtMS4xNyAxLjE3NC0xLjE3aDEuNDdWOC44OGgtMi4zNTRjLTIuODI4IDAtMy44MjMgMS40MTYtMy44MjMgMy43OTh2MS43NTRIMTJ2Mi45MmgxLjc2M3Y4LjQ3NWgzLjUyOHpcIj48L3BhdGg+XFxuPC9zdmc+JztcblxufVxucmV0dXJuIF9fcFxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWluWU1pbiBtZWV0XCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxcbiAgICA8cGF0aCBkPVwiTTExLjk4MyAxMy42NDVIOC40MTZWMjQuNTRoMy41NjdNMTIuMjE4IDEwLjI3NWMtLjAyMy0xLjA2OC0uNzc1LTEuODgyLTEuOTk1LTEuODgyLTEuMjIgMC0yLjAxNy44MTQtMi4wMTcgMS44ODIgMCAxLjA0Ni43NzQgMS44ODMgMS45NyAxLjg4M2guMDI0YzEuMjQzIDAgMi4wMTgtLjgzNyAyLjAxOC0xLjg4M3pNMjQuODQ1IDE4LjI5M2MwLTMuMzQ2LTEuNzYtNC45MDQtNC4xMDYtNC45MDQtMS44OTUgMC0yLjc0MyAxLjA1Ny0zLjIxNiAxLjh2LTEuNTQ0aC0zLjU2N2MuMDQ3IDEuMDIyIDAgMTAuODk0IDAgMTAuODk0aDMuNTY3di02LjA4NGMwLS4zMjYuMDIzLS42NS4xMTctLjg4NC4yNi0uNjUuODQ2LTEuMzI0IDEuODMtMS4zMjQgMS4yOTMgMCAxLjgxIDEgMS44MSAyLjQ2M3Y1LjgzaDMuNTY1di02LjI0N3pcIj48L3BhdGg+XFxuPC9zdmc+JztcblxufVxucmV0dXJuIF9fcFxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWluWU1pbiBtZWV0XCIgdmlld0JveD1cIjYwMi40IDUuNSAxMDQuMSAxMDQuMVwiPlxcbiAgICA8cGF0aCBkPVwiTTY1NC41IDUuNWMtMjguNyAwLTUyIDIzLjMtNTIgNTIgMCAyMS4zIDEyLjggMzkuNiAzMS4xIDQ3LjctLjEtMy42IDAtOCAuOS0xMS45bDYuNy0yOC4zcy0xLjctMy4zLTEuNy04LjJjMC03LjcgNC41LTEzLjUgMTAtMTMuNSA0LjcgMCA3IDMuNiA3IDcuOCAwIDQuOC0zIDExLjktNC42IDE4LjUtMS4zIDUuNSAyLjggMTAgOC4yIDEwIDkuOSAwIDE2LjUtMTIuNyAxNi41LTI3LjcgMC0xMS40LTcuNy0xOS45LTIxLjYtMTkuOS0xNS44IDAtMjUuNiAxMS44LTI1LjYgMjQuOSAwIDQuNSAxLjMgNy43IDMuNCAxMC4yIDEgMS4xIDEuMSAxLjYuOCAyLjktLjMuOS0uOCAzLjMtMS4xIDQuMi0uMyAxLjMtMS40IDEuOC0yLjYgMS4zLTcuMy0zLTEwLjctMTAuOS0xMC43LTE5LjkgMC0xNC44IDEyLjUtMzIuNSAzNy4yLTMyLjUgMTkuOSAwIDMyLjkgMTQuNCAzMi45IDI5LjggMCAyMC40LTExLjMgMzUuNy0yOC4xIDM1LjctNS42IDAtMTAuOS0zLTEyLjctNi41IDAgMC0zIDEyLTMuNyAxNC4zLTEuMSA0LTMuMyA4LTUuMiAxMS4xIDQuNyAxLjQgOS42IDIuMSAxNC43IDIuMSAyOC43IDAgNTItMjMuMyA1Mi01MiAuMi0yOC44LTIzLjEtNTIuMS01MS44LTUyLjFcIj48L3BhdGg+XFxuPC9zdmc+JztcblxufVxucmV0dXJuIF9fcFxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWluWU1pbiBtZWV0XCIgdmlld0JveD1cIjIzNy42IDUuMiA4NC43IDg0LjdcIj5cXG4gICAgPHBhdGggZD1cIk0yNjEuOCA1MS4zYy0uMi43LS40IDEuMy0uNCAyIDAgMS41LjQgMi45IDEuMSA0IC43IDEuMSAxLjcgMiAyLjggMi4yLjYuMiAxLjEuNCAxLjUuNCAxLjMgMCAyLjYtLjcgMy41LTEuNS45LS45IDEuNy0yLjIgMS44LTMuOC4yLS40LjItLjkuMi0xLjEgMC0xLjMtLjQtMi42LS45LTMuNy0uNy0xLjEtMS43LTItMi42LTIuNC0uNi0uMi0xLjMtLjItMS44LS4yLTEuMSAwLTIuMi40LTMuMSAxLjEtMSAuNi0xLjggMS43LTIuMSAzem0zLjMgMTYuM2MuNi0uMi45LS40IDEuNS0uNHMuOS4yIDEuMy40YzMuOSAyLjYgOC4zIDQuMiAxMi41IDQuMiAzLjMgMCA2LjYtLjkgOS42LTIuNy42LS4yLjktLjcgMS41LTEuMS40LS4yLjYtLjQuOS0uNy40IDAgLjctLjIgMS4xLS4yLjQgMCAuNyAwIC45LjJoLjJjLjQuMi45LjcgMS4xIDEuMy4yLjQuNCAxLjEuNCAxLjggMCAuNCAwIDEuMS0uNCAxLjUtLjIuNC0uNi45LS45IDEuMS00LjIgMy41LTkuMiA1LjEtMTQuMiA1LjEtNC42IDAtOS0xLjMtMTMuMS0zLjUtLjYtLjQtMS4zLS45LTItMS4zLS4yLS4yLS42LS40LS45LS45LS4yLS40LS40LS45LS42LTEuMyAwLS40LS4yLS43LS4yLS45IDAtLjQuMi0uOS40LTEuMS4yLS42LjUtMSAuOS0xLjV6bTI5LjgtOC4yaC0uMmMtLjYuMi0xLjEuNC0xLjcuNC0xLjMgMC0yLjYtLjctMy43LTEuOC0uOS0xLjEtMS43LTIuNi0xLjctNC40di0uNGMwLTEuOC43LTMuMyAxLjctNC40IDEuMS0xLjEgMi40LTEuOCAzLjctMS44aDEuMWMxLjguNCAzLjUgMi4yIDQuMSA0LjQuMi43LjQgMS4zLjQgMS44IDAgMS41LS40IDIuOS0xLjEgNC0uNS45LTEuNSAxLjgtMi42IDIuMnptLTU3LjMtMTUuOHYuN2MwIDIuNC42IDQuOSAxLjcgNi44czIuNCAzLjUgNC4xIDQuNmMwIC45LS4yIDEuOC0uMiAyLjkgMCA1LjMgMS43IDEwLjYgNC4zIDE0LjggNSA3LjcgMTIuNSAxMi4zIDIwLjMgMTQuOCA0LjEgMS4xIDguMyAxLjggMTIuMyAxLjggNi4zIDAgMTIuNS0xLjMgMTguNC00LjIgNi4xLTIuOSAxMS44LTcuNyAxNS4zLTE0LjYgMi0zLjggMi45LTguMiAyLjktMTIuNnYtMi45YzEuNS0xLjEgMi45LTIuNyAzLjktNC40IDEuMS0yIDEuOC00LjQgMS44LTYuOCAwLTMuMy0xLjEtNi42LTMuMS04LjgtMS44LTIuNC00LjQtNC03LjItNEgzMTFjLTEuMyAwLTIuOC4yLTQuMS45LTEuMy40LTIuNCAxLjMtMy4zIDIuMi0uNC0uMi0uNy0uNC0xLjEtLjctNi4xLTQuNC0xMy4zLTUuOS0yMC4zLTYuNCAwLTQuMi0uNC04LjYtMi4yLTEyLjQtMS4zLTMuMS0zLjctNS41LTYuNi02LjQtMS4xLS4yLTIuMi0uNC0zLjMtLjQtMi45IDAtNS45LjktOC43IDIuMi0xLjEtMi4yLTIuOC0zLjctNC44LTQuOC0xLjMtLjQtMi42LS43LTMuNy0uNy0xLjUgMC0yLjguMi00LjEuOS0xLjcuOS0zLjMgMi40LTQuMiA0LjQtMS4xIDEuOC0xLjggNC4yLTEuOCA2LjQgMCAuNCAwIC45LjIgMS4zLjIgMy4xIDEuNSA1LjcgMy4zIDcuNyAxLjcgMS44IDQuMSAyLjkgNi40IDIuOWgxLjNjMi40LS4yIDQuNi0xLjUgNi4zLTMuOCAxLjctMiAyLjgtNC45IDIuOC03Ljd2LS40YzIuMi0xLjMgNC42LTIuMiA3LTIuMmguOWMxLjguMiAzLjUgMS41IDQuMiAzLjUgMS4zIDIuOSAxLjUgNi4yIDEuNyA5LjUtNi44LjQtMTMuOCAyLjQtMTkuOSA2LjYtLjIuMi0uNC4yLS42LjQtLjQtLjQtLjktLjktMS4zLTEuMS0xLjgtMS41LTQuMS0yLjItNi4zLTIuMi0uOSAwLTEuOCAwLTIuOC40aC0uMmMtMi4yLjctNCAyLjItNS43IDQuMi0xLjQgMi4xLTIuMyA0LjctMi41IDcuNnptMjAuMS0yNi45di40YzAgMS4zLS41IDIuNi0xLjUgMy44LS45LjktMiAxLjUtMy4xIDEuNWgtLjRjLTEuMSAwLTIuMi0uNy0zLjEtMS41LS45LS45LTEuNS0yLjItMS41LTMuN3YtLjRjMC0xLjMuNS0yLjkgMS41LTMuOC45LTEuMSAyLTEuOCAzLjMtMS44LjQgMCAuNyAwIDEuMS4yIDEuMS4yIDIgMS4xIDIuNiAyIC43LjggMS4xIDIuMiAxLjEgMy4zem01MC41IDIyYy45LS40IDEuOC0uOSAyLjgtLjloLjZjMS4zIDAgMi44LjcgMy43IDIgMS4xIDEuMSAxLjcgMi40IDEuNyA0LjIuMi4yLjIuMi4yLjQgMCAxLjEtLjQgMi0uNyAyLjktLjQuNy0uNyAxLjMtMS4zIDEuOC0xLjktNC00LjMtNy42LTctMTAuNHptLTU5LjUgMjAuMWMwLTMuOCAxLjEtNy4zIDIuOC0xMC40IDMuNy02IDkuMi05LjcgMTQuOS0xMS45IDEuMS0uNCAyLjItLjkgMy4zLTEuMSAzLjMtLjkgNi44LTEuMyAxMC4zLTEuMyA0LjYgMCA5LjIuOSAxMy42IDIuNCA1LjcgMi4yIDExLjIgNS45IDE0LjkgMTEuOSAxLjcgMy4xIDIuOCA2LjggMi44IDEwLjQgMCAxLjMtLjIgMi42LS40IDQtLjcgMy4xLTIgNS43LTMuNyA3LjktMS41IDIuNC0zLjUgNC40LTUuNyA2LS40LjItLjkuNy0xLjMuOS02LjMgNC4yLTEzLjMgNi0yMC4yIDYtMS4zIDAtMi40IDAtMy43LS4yLTctLjctMTQtMy4xLTE5LjktOC4xLTEuNy0xLjgtMy41LTMuNS00LjgtNS43LTEuMy0yLjQtMi40LTQuOS0yLjgtNy41LS4xLTEuMy0uMS0yLjItLjEtMy4zek0yNDMgNDQuM2MwLS45LjItMS44LjUtMi42LjYtMS4zIDEuMy0yLjIgMi4yLTIuOSAxLjEtLjcgMi4yLS45IDMuMy0uOS45IDAgMS44LjIgMi44LjktMi44IDIuOS01LjEgNi40LTYuOCAxMC40LS42LS40LS45LTEuMS0xLjMtMS44LS4zLTEuMi0uNy0yLS43LTMuMXpcIj48L3BhdGg+XFxuPC9zdmc+JztcblxufVxucmV0dXJuIF9fcFxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxzdmcgaGVpZ2h0PVwiMTAwJVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWluWU1pbiBtZWV0XCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxcbiAgICA8cGF0aCBkPVwiTTE1Ljg3NCAxMi4zNTRsLjAzMi41MzctLjUzMy0uMDY1Yy0xLjk0My0uMjUyLTMuNjQtMS4xMDYtNS4wODItMi41NDJsLS43MDMtLjcxMi0uMTgyLjUyN2MtLjM4NCAxLjE3My0uMTM4IDIuNDEuNjYyIDMuMjQzLjQyNy40Ni4zMy41MjYtLjQwNS4yNTItLjI1Ny0uMDg3LS40OC0uMTUzLS41MDItLjEyLS4wNzUuMDc2LjE4IDEuMDczLjM4NCAxLjQ2OC4yNzguNTQ4Ljg0NCAxLjA4NSAxLjQ2MyAxLjQwMmwuNTIzLjI1Mi0uNjIuMDFjLS41OTcgMC0uNjIuMDEyLS41NTQuMjQyLjIxMy43MTIgMS4wNTYgMS40NjggMS45OTYgMS43OTdsLjY2Mi4yMy0uNTc3LjM1Yy0uODU0LjUwNS0xLjg1Ny43OS0yLjg2LjgxMi0uNDguMDEtLjg3Ni4wNTQtLjg3Ni4wODcgMCAuMTEgMS4zMDMuNzIzIDIuMDYuOTY0IDIuMjc1LjcxMyA0Ljk3Ni40MDYgNy4wMDQtLjgxIDEuNDQtLjg2NiAyLjg4Mi0yLjU4NiAzLjU1NC00LjI1LjM2My0uODkuNzI2LTIuNTEuNzI2LTMuMjg4IDAtLjUwNC4wMzItLjU3LjYzLTEuMTczLjM1Mi0uMzUuNjgzLS43MzQuNzQ3LS44NDMuMTA4LS4yMDguMDk3LS4yMDgtLjQ0Ny0uMDIyLS45MDcuMzI4LTEuMDM2LjI4NS0uNTg3LS4yMDguMzMtLjM1LjcyNi0uOTg2LjcyNi0xLjE3MyAwLS4wMzQtLjE2LjAyLS4zNDIuMTItLjE5Mi4xMS0uNjIuMjc0LS45NC4zNzJsLS41NzYuMTg3LS41MjMtLjM2M2MtLjI4Ny0uMTk3LS42OTMtLjQxNi0uOTA2LS40ODItLjU0NC0uMTUzLTEuMzc3LS4xMzItMS44NjguMDQ0LTEuMzM0LjQ5Mi0yLjE3OCAxLjc2My0yLjA4MiAzLjE1NHpcIj48L3BhdGg+XFxuPC9zdmc+JztcblxufVxucmV0dXJuIF9fcFxufSJdLCJzb3VyY2VSb290IjoiIn0=