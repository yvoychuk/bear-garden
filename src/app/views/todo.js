import utils from "../utils.js"
import Page from "../system/page.js"

class Todo extends Page {
  constructor (props) {
    super(props);
    this.render(props);
  }
  render (props) {
    utils.test();
    utils.appendElementWithText(this.props.root, "page b");
  }
}

module.exports = Todo;