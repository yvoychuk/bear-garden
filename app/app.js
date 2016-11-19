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

	  var rootComponent = document.getElementById("app");

	  var Router = __webpack_require__(1);

	  var router = new Router();

	  router.register([{ path: "app", name: "index" }, { path: "b" }, { path: "a" }, { path: "gmap" }], {
	    root: rootComponent
	  });

	  return false;
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// hash based
	var Router = function () {
	  function Router() {
	    _classCallCheck(this, Router);

	    this.loc = window.location;
	  }

	  _createClass(Router, [{
	    key: "register",
	    value: function register(pages, props) {
	      this.pages = pages;
	      this.props = props;
	      this.init();
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      this.render();
	      this.watchHashChange();
	      return false;
	    }
	  }, {
	    key: "current",
	    value: function current() {
	      var _c = /#(\/?)(?:.+)$/gi.exec(this.loc.href);
	      if (_c === null) {
	        return "index";
	      } else {
	        return _c[1].length === 0 ? _c[0].substring(1) : _c[0].substring(2);
	      }
	    }
	  }, {
	    key: "createNewPage",
	    value: function createNewPage(path, props) {
	      var NewPage = __webpack_require__(3)("./" + path + ".js");
	      var renderedPage = new NewPage({
	        root: props.root
	      });
	      return false;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this = this;

	      try {
	        (function () {
	          var currentPath = _this.current();
	          var page = _this.pages.find(function (p) {
	            return p.path === currentPath || p.name === currentPath;
	          });
	          var pageName = page.path;
	          _this.createNewPage(page.path, _this.props);
	        })();
	      } catch (e) {
	        console.log(e);
	        this.createNewPage("_system/404", this.props);
	      }
	    }
	  }, {
	    key: "watchHashChange",
	    value: function watchHashChange() {
	      var that = this;
	      window.addEventListener("hashchange", this.onHashChange.bind(that));
	      return false;
	    }
	  }, {
	    key: "onHashChange",
	    value: function onHashChange(event) {
	      window.location.href = event.newURL;
	      window.location.reload();
	      return false;
	    }
	  }]);

	  return Router;
	}();

	module.exports = Router;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var Utils = function () {

	  return {

	    test: function test() {
	      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "text";

	      console.log(t);
	    },

	    appendElementWithText: function appendElementWithText(rootComponent) {
	      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sample";
	      var elementName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "p";

	      var element = document.createElement(elementName);
	      element.innerHTML = text;
	      rootComponent.appendChild(element);
	      return false;
	    }

	  };
	}();

	module.exports = Utils;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./_page.js": 4,
		"./_system/403.js": 5,
		"./_system/404.js": 6,
		"./_system/503.js": 7,
		"./a.js": 8,
		"./app.js": 9,
		"./b.js": 10,
		"./gmap.js": 11
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
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Page = function Page(props) {
	  _classCallCheck(this, Page);

	  this.props = props;
	};

	module.exports = Page;

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var utils = _interopRequireWildcard(_utils);

	var _page = __webpack_require__(4);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Error404 = function (_Page) {
	  _inherits(Error404, _Page);

	  function Error404(props) {
	    _classCallCheck(this, Error404);

	    var _this = _possibleConstructorReturn(this, (Error404.__proto__ || Object.getPrototypeOf(Error404)).call(this, props));

	    _this.render(props);
	    return _this;
	  }

	  _createClass(Error404, [{
	    key: "render",
	    value: function render(props) {
	      utils.test();
	      utils.appendElementWithText(props.root, "page not found");
	    }
	  }]);

	  return Error404;
	}(_page2.default);

	module.exports = Error404;

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var utils = _interopRequireWildcard(_utils);

	var _page = __webpack_require__(4);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var A = function (_Page) {
	  _inherits(A, _Page);

	  function A(props) {
	    _classCallCheck(this, A);

	    var _this = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, props));

	    _this.render(props);
	    return _this;
	  }

	  _createClass(A, [{
	    key: "render",
	    value: function render(props) {
	      utils.test();
	      utils.appendElementWithText(props.root, "page a");
	    }
	  }]);

	  return A;
	}(_page2.default);

	module.exports = A;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var utils = _interopRequireWildcard(_utils);

	var _page = __webpack_require__(4);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Page) {
	  _inherits(App, _Page);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.render(props);
	    return _this;
	  }

	  _createClass(App, [{
	    key: "render",
	    value: function render(props) {
	      utils.test();
	      utils.appendElementWithText(props.root, "page app index");
	    }
	  }]);

	  return App;
	}(_page2.default);

	module.exports = App;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var _utils2 = _interopRequireDefault(_utils);

	var _page = __webpack_require__(4);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var notA = function (_Page) {
	  _inherits(notA, _Page);

	  function notA(props) {
	    _classCallCheck(this, notA);

	    var _this = _possibleConstructorReturn(this, (notA.__proto__ || Object.getPrototypeOf(notA)).call(this, props));

	    _this.render(props);
	    return _this;
	  }

	  _createClass(notA, [{
	    key: "render",
	    value: function render(props) {
	      _utils2.default.test();
	      _utils2.default.appendElementWithText(this.props.root, "page b");
	    }
	  }]);

	  return notA;
	}(_page2.default);

	module.exports = notA;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Gmap = function () {
	  function Gmap() {
	    _classCallCheck(this, Gmap);
	  }

	  _createClass(Gmap, [{
	    key: "render",
	    value: function render() {
	      console.log("start rendering map");
	      // var mymap = L.map('lmap').setView([51.505, -0.09], 1);
	      // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	      //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	      //   maxZoom: 18,
	      //   id: 'your.mapbox.project.id',
	      //   accessToken: 'your.mapbox.public.access.token'
	      // }).addTo(mymap);
	      console.log("map rendered");
	    }
	  }]);

	  return Gmap;
	}();

	module.exports = Gmap;

/***/ }
/******/ ]);