import * as utils from "../utils.js"
import Page from "../system/page.js"

class App extends Page {
  constructor (props) {
    super(props);
    this.render(props);
  }

  render (props) {
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
}

module.exports = App;