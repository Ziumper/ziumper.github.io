/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/scripts/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/gridshuffle.js":
/*!************************************!*\
  !*** ./src/scripts/gridshuffle.js ***!
  \************************************/
/*! exports provided: GridShuffle, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GridShuffle\", function() { return GridShuffle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony import */ var shufflejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shufflejs */ \"./node_modules/shufflejs/dist/shuffle.esm.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar GridShuffle =\n/*#__PURE__*/\nfunction () {\n  function GridShuffle(itemSelectorClass, sizerSelectorClass, shuffleContainerId, itemInnerClassName, itemTransitionClassName) {\n    _classCallCheck(this, GridShuffle);\n\n    this.itemSelectorClass = itemSelectorClass; //'.shuffle-item';\n\n    this.sizerSelectorClass = sizerSelectorClass; //'.shuffle-sizer';\n\n    this.shuffleContainerId = shuffleContainerId; //'shuffle-container';\n\n    this.itemInnerClassName = itemInnerClassName; //.picture-item__inner\n\n    this.itemTransitionClassName = itemTransitionClassName; //'picture-item__inner--transition'\n\n    this.gridContainerElement = document.getElementById(this.shuffleContainerId);\n    this.gridItems = this.gridContainerElement.querySelectorAll(this.itemSelectorClass);\n    this.shuffleInstance = new shufflejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.gridContainerElement, {\n      itemSelector: this.itemSelectorClass,\n      sizer: this.sizerSelectorClass\n    });\n    var callback = this.showItemsInViewport.bind(this);\n    this.observer = new window.IntersectionObserver(callback, {\n      threshold: 0.5\n    }); // Loop through each grid item and add it to the viewport watcher.\n\n    for (var i = 0; i < this.gridItems.length; i++) {\n      this.observer.observe(this.gridItems[i]);\n    } // Add the transition class to the items after ones that are in the viewport\n    // have received the `in` class.\n\n\n    setTimeout(function () {\n      this.addTransitionToItems();\n    }.bind(this), 100);\n  }\n\n  _createClass(GridShuffle, [{\n    key: \"addTransitionToItems\",\n    value: function addTransitionToItems() {\n      for (var i = 0; i < this.gridItems.length; i++) {\n        var inner = this.gridItems[i].querySelector(this.itemInnerClassName);\n\n        if (inner) {\n          inner.classList.add(this.itemTransitionClassName);\n        } else {\n          console.error(\"Grid item inner element not defined\");\n        }\n      }\n    }\n  }, {\n    key: \"showItemsInViewport\",\n    value: function showItemsInViewport(changes) {\n      changes.forEach(function (change) {\n        if (change.isIntersecting) {\n          change.target.classList.add('in');\n        }\n      });\n    }\n  }]);\n\n  return GridShuffle;\n}();\nfunction filter(button, key) {\n  var className = 'active-separator-button';\n  var elements = document.getElementsByClassName(className);\n  var oldActiveButton = getFirst(elements);\n  oldActiveButton.classList.remove(className);\n  button.classList.add(className);\n  window.gridShuffle.shuffleInstance.filter(key);\n\n  function getFirst(elements) {\n    if (elements[0]) {\n      return elements[0];\n    }\n\n    return null;\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/gridshuffle.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/scripts/main.js\");\n/* harmony import */ var _gridshuffle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gridshuffle */ \"./src/scripts/gridshuffle.js\");\n\n\n\n\nObject(_main__WEBPACK_IMPORTED_MODULE_2__[\"main\"])();\nwindow.filter = _gridshuffle__WEBPACK_IMPORTED_MODULE_3__[\"filter\"];\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGithub */ \"./node_modules/@fortawesome/free-brands-svg-icons/faGithub.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedin */ \"./node_modules/@fortawesome/free-brands-svg-icons/faLinkedin.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLinkedin__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faInstagram */ \"./node_modules/@fortawesome/free-brands-svg-icons/faInstagram.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebook */ \"./node_modules/@fortawesome/free-brands-svg-icons/faFacebook.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_regular_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons/faCircle */ \"./node_modules/@fortawesome/free-regular-svg-icons/faCircle.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! owl.carousel */ \"./node_modules/owl.carousel/dist/owl.carousel.js\");\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _gridshuffle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gridshuffle */ \"./src/scripts/gridshuffle.js\");\n\n\n\n\n\n\n\n\nvar main = function main() {\n  setupShuffle();\n  configureJqueryElements();\n\n  function setupShuffle() {\n    document.addEventListener('DOMContentLoaded', function () {\n      window.gridShuffle = new _gridshuffle__WEBPACK_IMPORTED_MODULE_7__[\"GridShuffle\"]('.picture-item', '.my-shuffle-sizer', 'shuffle-grid', '.picture-item__inner', 'picture-item__inner--transition');\n    });\n  }\n\n  function configureJqueryElements() {\n    $(document).ready(function () {\n      onToggleMenuButtonClick();\n      showPage();\n      addIcons();\n      turnOnFontAwesomeIcons();\n      addOwlCarousel();\n      addOnScrollFixedMenu();\n\n      function onToggleMenuButtonClick() {\n        $('.toggle').click(function () {\n          $('.toggle').toggleClass('active');\n          $('.toggle-menu').toggleClass('active');\n          var accordionChilds = $('.toggle-menu .toggle-menu-list .toggle-menu-item');\n          $.each(accordionChilds, function (number, element) {\n            var jqueryElement = $(element);\n            var visibleElement = jqueryElement.is(':visible');\n\n            if (visibleElement) {\n              jqueryElement.slideUp(\"slow\");\n            } else {\n              jqueryElement.slideDown(\"slow\");\n            }\n          });\n        });\n      }\n\n      function showPage() {\n        $('#loading').fadeOut(3000);\n        $('#page').fadeIn(4000);\n      }\n\n      function turnOnFontAwesomeIcons() {\n        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].watch();\n      }\n\n      function addIcons() {\n        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[\"library\"].add([_fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_1__[\"faGithub\"], _fortawesome_free_brands_svg_icons_faLinkedin__WEBPACK_IMPORTED_MODULE_2__[\"faLinkedin\"], _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_3__[\"faInstagram\"], _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_4__[\"faFacebook\"], _fortawesome_free_regular_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_5__[\"faCircle\"]]);\n      }\n\n      function addOwlCarousel() {\n        $(\".owl-carousel\").owlCarousel({\n          items: 1,\n          dots: true,\n          onDragged: onDraggedCallback,\n          dotsContainer: \"#dots-container\"\n        }).find('.owl-item').each(function (i) {\n          var attr = $(this).children().attr('data-year');\n          var element = $('<p>' + attr + '</p>');\n          $('#dots-container .owl-dot').eq(i).append(element);\n        });\n        $(\"#dots-container\").find('.owl-dot').each(function (i) {\n          $(this).click(function (e) {\n            var index = $(e.currentTarget.parentElement).children().index(e.currentTarget);\n            changeBackground(index);\n          });\n        });\n\n        function onDraggedCallback(event) {\n          var index = event.item.index;\n          changeBackground(index);\n        }\n\n        function changeBackground(itemIndex) {\n          var activeItem = $(\".owl-stage\").children().eq(itemIndex).children(\".item\");\n          var imageUrl = $(activeItem).attr(\"background-image\");\n          $('#carousel-parallax').css(\"background-image\", \"url(\" + imageUrl + \")\");\n        }\n      }\n\n      function addOnScrollFixedMenu() {\n        var navbar = $(\".navigation-container\");\n        var lastScrollTop = 0;\n        $(window).scroll(function (event) {\n          var st = $(this).scrollTop();\n\n          if (st > lastScrollTop || st == 0) {\n            navbar.removeClass('navbar-fixed');\n          } else {\n            navbar.addClass(\"navbar-fixed\");\n          }\n\n          lastScrollTop = st;\n        });\n      }\n    });\n  }\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });