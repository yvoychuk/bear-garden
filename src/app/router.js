// hash based
import _ from "lodash";
import utils from "./utils.js";

class Router {
  constructor() {
    this.loc = window.location;
  }

  register (pages, props) {
    this.pages = pages;
    this.props = props;
    this.init();
  }

  init () { 
    this.render();
    this.watchHashChange();
    return false;
  }

  current () {
    let _c = /#(\/?)(?:.+)$/gi.exec(this.loc.href);
    if (_c === null) {
      return "index";
    } else {
      return _c[1].length === 0 ? _c[0].substring(1) : _c[0].substring(2);
    }
  }

  createNewPage (path, props) {
    let NewPage = require("./pages/" + path + ".js");
    let renderedPage = new NewPage({
      root: props.root
    });
    return false;
  }

  render () {
    try {
      let currentPath = this.current();
      let page = this.pages.find(function (p) {return p.path === currentPath || p.name === currentPath})
      let pageName = page.path;
      this.createNewPage(page.path, this.props);
    } catch (e) {
      console.log(e)
      this.createNewPage("_system/404", this.props);
    }
  }

  watchHashChange () {
    let that = this;
    window.addEventListener("hashchange", this.onHashChange.bind(that));
    return false;
  }

  onHashChange (event) {
    window.location.href = event.newURL;
    window.location.reload()
    return false;
  }

}

module.exports = Router;