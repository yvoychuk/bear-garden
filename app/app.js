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

	// import * as config from "./config.json"
	// var config = require("./config.json")
	(function () {

	  var rootComponent = document.getElementById("app");

	  var Router = __webpack_require__(1);

	  var router = new Router();

	  var views = [{
	    path: "app",
	    name: "index",
	    meta: {
	      title: "Index page"
	    }
	  }, {
	    path: "todo"
	  }, {
	    path: "codewars",
	    meta: {
	      title: "Codewars examples"
	    }
	  }, {
	    path: "gmap"
	  }, {
	    path: "timers",
	    meta: {
	      title: "Timers"
	    }
	  }];

	  router.register(views, {
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

	var _errors = __webpack_require__(3);

	var errors = _interopRequireWildcard(_errors);

	var _meta = __webpack_require__(5);

	var meta = _interopRequireWildcard(_meta);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	    value: function createNewPage(path, data, props) {
	      var NewPage = __webpack_require__(6)("./" + path + ".js");
	      var renderedPage = new NewPage({
	        root: props.root
	      });
	      meta.setMetadata(data);
	      return false;
	    }
	  }, {
	    key: "createErrorPage",
	    value: function createErrorPage(props) {
	      var ErrorPage = new errors.Error404({
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
	          _this.createNewPage(page.path, page, _this.props);
	        })();
	      } catch (e) {
	        console.log(e);
	        this.createErrorPage(this.props);
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
	      var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var element = document.createElement(elementName);
	      if (id !== null) {
	        element.id = id;
	      };
	      element.innerHTML = text;
	      rootComponent.appendChild(element);
	      return false;
	    },

	    appendElementWithId: function appendElementWithId(parentId) {
	      var elementName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "id";

	      var element = document.createElement(elementName);
	      if (id !== null) {
	        element.id = id;
	      };
	      document.getElementById(parentId).appendChild(element);
	      return false;
	    },

	    appendLinkElement: function appendLinkElement(parentId, id, props) {
	      /* props:
	      - href
	      - target
	      - text
	      */
	      var link = document.createElement("a");
	      Object.assign(link, {
	        id: id,
	        href: props.href || "",
	        target: props.target || "_self"
	      });
	      link.innerHTML = props.text || "link";
	      document.getElementById(parentId).appendChild(link);
	      return false;
	    }

	  };
	}();

	module.exports = Utils;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Error403 = exports.Error404 = undefined;

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

	var Error404 = exports.Error404 = function (_Page) {
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

	var Error403 = exports.Error403 = function (_Page2) {
	  _inherits(Error403, _Page2);

	  function Error403(props) {
	    _classCallCheck(this, Error403);

	    var _this2 = _possibleConstructorReturn(this, (Error403.__proto__ || Object.getPrototypeOf(Error403)).call(this, props));

	    _this2.render(props);
	    return _this2;
	  }

	  _createClass(Error403, [{
	    key: "render",
	    value: function render(props) {
	      utils.test();
	      utils.appendElementWithText(props.root, "403");
	    }
	  }]);

	  return Error403;
	}(_page2.default);

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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setMetadata = setMetadata;

	var _utils = __webpack_require__(2);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function setMetadata() {
	  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var meta = data.meta;
	  document.title = meta && meta.title || data.name || "App - " + data.path;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./app.js": 7,
		"./codewars.js": 8,
		"./gmap.js": 10,
		"./timers.js": 11,
		"./todo.js": 12
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
	webpackContext.id = 6;


/***/ },
/* 7 */
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
	      utils.appendElementWithId("app", "nav", "navigation");
	      utils.appendElementWithId("navigation", "div", "nav-item-1");
	      utils.appendLinkElement("nav-item-1", "link-timer", {
	        href: "#timers",
	        text: "timers",
	        target: "_self"
	      });
	      utils.appendElementWithId("navigation", "div", "nav-item-2");
	      utils.appendLinkElement("nav-item-2", "link-codewars", {
	        href: "#codewars",
	        text: "codewars tasks",
	        target: "_self"
	      });
	    }
	  }]);

	  return App;
	}(_page2.default);

	module.exports = App;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var utils = _interopRequireWildcard(_utils);

	var _page = __webpack_require__(4);

	var _page2 = _interopRequireDefault(_page);

	var _tests = __webpack_require__(9);

	var tests = _interopRequireWildcard(_tests);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Codewars = function (_Page) {
	  _inherits(Codewars, _Page);

	  function Codewars(props) {
	    _classCallCheck(this, Codewars);

	    var _this = _possibleConstructorReturn(this, (Codewars.__proto__ || Object.getPrototypeOf(Codewars)).call(this, props));

	    _this.render(props);
	    return _this;
	  }

	  _createClass(Codewars, [{
	    key: "uniqueInOrder",
	    value: function uniqueInOrder(iterable) {
	      var isArray = Array.isArray(iterable);
	      var isIterable = typeof iterable == "string" || isArray;
	      var iterArray = isArray ? iterable : iterable.split("");
	      return isIterable && iterArray.filter(function (x, y, z) {
	        return y === 0 || x !== z[y - 1];
	      }) || false;
	    }
	  }, {
	    key: "productFib",
	    value: function productFib(prod) {
	      var a = 0;
	      var aplus = 1;
	      while (a * aplus < prod) {
	        aplus = aplus + a;
	        a = aplus - a;
	      }
	      return [a, aplus, a * aplus === prod];
	    }
	  }, {
	    key: "duplicateCount",
	    value: function duplicateCount(text) {
	      var u = [];
	      var test = function test(a, it) {
	        return {
	          dupl: a.find(function (i) {
	            return i === it;
	          }),
	          uniq: a.filter(function (i) {
	            return i === it;
	          }).length > 1
	        };
	      };
	      return text.toLowerCase().split("").filter(function (item, index, arr) {
	        if (test(arr, item).uniq && !test(u, item).dupl) {
	          u.push(item);
	          return item;
	        }
	      }).length;
	    }
	  }, {
	    key: "render",
	    value: function render(props) {
	      var dc = this.duplicateCount("abccCC");
	      // this.productFib(100);
	      utils.test(dc);
	      // tests.assertSimilar(uio, ['A', 'B', 'C', 'c', 'A', 'D']);
	      utils.appendElementWithText(props.root, dc);
	    }
	  }]);

	  return Codewars;
	}(_page2.default);

	module.exports = Codewars;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.assertSimilar = assertSimilar;
	function assertSimilar(fn, expected) {
	  var result = fn === expected;
	  console.log(fn, "..", expected, result ? "=> equal" : "=> not equal");
	  return result;
	}

/***/ },
/* 10 */
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

/***/ },
/* 11 */
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

	var Timers = function (_Page) {
	  _inherits(Timers, _Page);

	  function Timers(props) {
	    _classCallCheck(this, Timers);

	    var _this = _possibleConstructorReturn(this, (Timers.__proto__ || Object.getPrototypeOf(Timers)).call(this, props));

	    _this.render(props);
	    return _this;
	  }

	  _createClass(Timers, [{
	    key: "fib",
	    value: function fib(count) {
	      var arr = [0, 1];
	      for (var i = 2; i < count; i++) {
	        arr[i] = arr[i - 2] + arr[i - 1];
	      };
	      return arr;
	    }
	  }, {
	    key: "testTime",
	    value: function testTime(fn) {
	      var args = [].slice.call(arguments).slice(1);
	      var t1 = Date.now();
	      fn.apply(null, args);
	      var t2 = Date.now();
	      var delta = t2 - t1;
	      return "delta(ms): " + delta + "; delta(s): " + delta / 1000;
	    }
	  }, {
	    key: "createTimeElement",
	    value: function createTimeElement(id, parent) {
	      var element = document.createElement("div");
	      element.id = id;
	      parent.appendChild(element);
	    }
	  }, {
	    key: "showTime",
	    value: function showTime(currentTime) {
	      console.log(this);
	      var element = document.getElementById(this.id);
	      element.innerHTML = "time: " + currentTime;
	    }

	    // NOTE: there is a wormhole when some process in system occured

	  }, {
	    key: "timer",
	    value: function timer(startTime, preset) {
	      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var start = null;
	      var counter = 0;
	      var time = startTime;
	      var filter = [0, performance.now()];
	      var iter = function iter(ts) {
	        if (!start) start = ts;
	        var deltaFloor = Math.floor((ts - start) / 1000);
	        if (deltaFloor !== counter) {
	          filter[0] = filter[1];
	          filter.pop();
	          filter.push(performance.now());
	          var fault = Math.abs(1000 - (filter[1] - filter[0])) * (10 / 1000);
	          if (fault < 0.5) {
	            // console.log(time, fault);
	            callback(time);
	          } else console.log("waiting for stable state");
	          counter++;
	          var i = preset > startTime ? 1 : -1;
	          time += i;
	        }
	        if (time !== preset) {
	          window.requestAnimationFrame(iter);
	        } else return;
	      };
	      window.requestAnimationFrame(iter);
	      return false;
	    }
	  }, {
	    key: "render",
	    value: function render(props) {
	      var timerId1 = "timer-1";
	      this.createTimeElement(timerId1, props.root);
	      this.timer(0, 100, this.showTime.bind(Object.assign(this, { id: timerId1 })));
	      // utils.appendElementWithText(props.root, this.testTime(this.fib, 100));
	    }
	  }]);

	  return Timers;
	}(_page2.default);

	module.exports = Timers;

/***/ },
/* 12 */
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

	var Todo = function (_Page) {
	  _inherits(Todo, _Page);

	  function Todo(props) {
	    _classCallCheck(this, Todo);

	    var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

	    _this.render(props);
	    return _this;
	  }

	  _createClass(Todo, [{
	    key: "render",
	    value: function render(props) {
	      _utils2.default.test();
	      _utils2.default.appendElementWithText(this.props.root, "page b");
	    }
	  }]);

	  return Todo;
	}(_page2.default);

	module.exports = Todo;

/***/ }
/******/ ]);