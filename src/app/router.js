// hash based
import _ from "lodash";

class Router {
  constructor() {
    this.loc = window.location;
  }

  register (pages) {
    this.pages = pages;
    this.init();
  }

  init () { 
    let renderFn = this.render();
    renderFn()
    this.watchHashChange();
  }

  current (val) {
    return this.loc.href.match(/#(\/?)(.*)$/)[val];
  }

  redirect (path) {
    window.location.href = "http://localhost:3000/#aliens";
    return false;
  }

  render () {
    let currentPath = this.current(2);
    let page = this.pages.find(function (p) {return p.path === currentPath})
    let pageName = page.name === undefined ? page.path : page.name;
    return require("./pages/" + pageName + ".js").render;
  }

  watchHashChange () {
    let that = this;
    window.addEventListener("hashchange", this.onHashChange.bind(that));
  }

  onHashChange (event) {
    window.location.href = event.newURL;
    let renderFn = this.render();
    renderFn();
  }

}

module.exports = Router;