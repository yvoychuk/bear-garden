import * as utils from "../utils.js"
import Page from "./page.js"

export class Error404 extends Page {
  constructor (props) {
    super(props);
    this.render(props);
  }
  render (props) {
    utils.test();
    utils.appendElementWithText(props.root, "page not found");
  }
}

export class Error403 extends Page {
  constructor (props) {
    super(props);
    this.render(props);
  }
  render (props) {
    utils.test();
    utils.appendElementWithText(props.root, "403");
  }
}