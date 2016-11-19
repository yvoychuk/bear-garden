(function () {

  var rootComponent = document.getElementById("app");
  
  let Router = require("./router.js");

  let router = new Router;

  router.register([
    {path: "app", name: "index"},
    {path: "b"},
    {path: "a"},
    {path: "gmap"}
  ], {
    root: rootComponent
  });

  return false;

}) ()