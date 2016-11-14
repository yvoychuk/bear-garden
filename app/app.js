/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function () {

	  var Router = __webpack_require__(1);

	  var router = new Router();

	  router.register([{ path: "bearland", name: "bears" }, { path: "chaining" }, { path: "aliens" }]);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Router = function () {
	  function Router() {
	    _classCallCheck(this, Router);

	    this.loc = window.location;
	  }

	  _createClass(Router, [{
	    key: "register",
	    value: function register(pages) {
	      this.pages = pages;
	      this.init();
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      var renderFn = this.render();
	      renderFn();
	      this.watchHashChange();
	    }
	  }, {
	    key: "current",
	    value: function current(val) {
	      return this.loc.href.match(/#(\/?)(.*)$/)[val];
	    }
	  }, {
	    key: "redirect",
	    value: function redirect(path) {
	      window.location.href = "http://localhost:3000/#aliens";
	      return false;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var currentPath = this.current(2);
	      var page = this.pages.find(function (p) {
	        return p.path === currentPath;
	      });
	      var pageName = page.name === undefined ? page.path : page.name;
	      return __webpack_require__(2)("./" + pageName + ".js").render;
	    }
	  }, {
	    key: "watchHashChange",
	    value: function watchHashChange() {
	      var that = this;
	      window.addEventListener("hashchange", this.onHashChange.bind(that));
	    }
	  }, {
	    key: "onHashChange",
	    value: function onHashChange(event) {
	      window.location.href = event.newURL;
	      var renderFn = this.render();
	      renderFn();
	    }
	  }]);

	  return Router;
	}(); // hash based


	module.exports = Router;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./_system/403.js": 3,
		"./_system/404.js": 4,
		"./_system/503.js": 5,
		"./aliens.js": 6,
		"./bears.js": 7,
		"./chaining.js": 8
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Error403 = function () {
	  function Error403(props) {
	    _classCallCheck(this, Error403);

	    this.x = 100;
	  }

	  _createClass(Error403, null, [{
	    key: "render",
	    value: function render() {
	      console.log("403 rendered");
	      return false;
	    }
	  }]);

	  return Error403;
	}();

	module.exports = Error403;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Error404 = function () {
	  function Error404(props) {
	    _classCallCheck(this, Error404);

	    this.x = 100;
	  }

	  _createClass(Error404, null, [{
	    key: "render",
	    value: function render() {
	      console.log("404 rendered");
	      return false;
	    }
	  }]);

	  return Error404;
	}();

	module.exports = Error404;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Error503 = function () {
	  function Error503(props) {
	    _classCallCheck(this, Error503);

	    this.x = 100;
	  }

	  _createClass(Error503, null, [{
	    key: "render",
	    value: function render() {
	      console.log("503 rendered");
	      return false;
	    }
	  }]);

	  return Error503;
	}();

	module.exports = Error503;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Aliens = function () {
	  function Aliens(props) {
	    _classCallCheck(this, Aliens);

	    this.x = 100;
	  }

	  _createClass(Aliens, null, [{
	    key: "render",
	    value: function render() {
	      console.log("rendered aliens");
	      var app = document.getElementById("app");
	      var element = document.createElement("p");
	      element.innerHTML = "aliens";
	      app.appendChild(element);
	      return false;
	    }
	  }]);

	  return Aliens;
	}();

	module.exports = Aliens;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BearsPage = function () {
	  function BearsPage(props) {
	    _classCallCheck(this, BearsPage);

	    this.x = 100;
	  }

	  _createClass(BearsPage, null, [{
	    key: "render",
	    value: function render() {
	      console.log("rendered bears");
	      var app = document.getElementById("app");
	      var element = document.createElement("p");
	      element.innerHTML = "bears";
	      app.appendChild(element);
	      return false;
	    }
	  }]);

	  return BearsPage;
	}();

	module.exports = BearsPage;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Chaining = function () {
	  function Chaining() {
	    _classCallCheck(this, Chaining);
	  }

	  _createClass(Chaining, [{
	    key: "box",
	    value: function box(a, b) {
	      return arguments;
	    }
	  }], [{
	    key: "render",
	    value: function render() {
	      console.log("rendered chaining");
	      var app = document.getElementById("app");
	      var element = document.createElement("p");
	      element.innerHTML = "chaining";
	      app.appendChild(element);
	      return false;
	    }
	  }]);

	  return Chaining;
	}();

	module.exports = Chaining;

/***/ }
/******/ ]);