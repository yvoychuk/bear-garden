import _ from "lodash";
import utils from "./utils.js";
import * as errors from "./system/errors.js";
import * as meta from "./system/meta.js"

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

  createNewPage (path, data, props) {
    let NewPage = require("./views/" + path + ".js");
    let renderedPage = new NewPage({
      root: props.root
    });
    meta.setMetadata(data);
    return false;
  }

  createErrorPage (props) {
    let ErrorPage = new errors.Error404({
      root: props.root
    });
    return false;
  }

  render () {
    try {
      let currentPath = this.current();
      let page = this.pages.find(function (p) {return p.path === currentPath || p.name === currentPath})
      let pageName = page.path;
      this.createNewPage(page.path, page, this.props);
    } catch (e) {
      console.log(e)
      this.createErrorPage(this.props);
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