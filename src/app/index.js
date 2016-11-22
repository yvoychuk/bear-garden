// import * as config from "./config.json"
// var config = require("./config.json")
(function () {

  var rootComponent = document.getElementById("app");
  
  let Router = require("./router.js");

  let router = new Router;

  let views = [
    {
      path: "app", 
      name: "index",
      meta: {
        title: "Index page"
      }
    },
    {
      path: "todo"
    },
    {
      path: "codewars",
      meta: {
        title: "Codewars examples"
      }
    },
    {
      path: "gmap"
    },
    {
      path: "timers",
      meta: {
        title: "Timers"
      }
    },
  ];

  router.register(views, {
    root: rootComponent
  });

  return false;

}) ()