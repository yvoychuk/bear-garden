import * as utils from "../utils.js"
import Page from "./_page.js"

class A extends Page {
  constructor (props) {
    super(props);
    this.render(props);
  }
  render (props) {
    utils.test();
    utils.appendElementWithText(props.root, "page a");
  }
}

module.exports = A;