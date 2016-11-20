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
  }
}

module.exports = App;