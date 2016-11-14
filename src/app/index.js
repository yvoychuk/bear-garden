(function () {
  
  let Router = require("./router.js");

  let router = new Router;
  
  router.register([
    {path: "bearland", name: "bears"},
    {path: "chaining"},
    {path: "aliens"}
  ]);

}) ()