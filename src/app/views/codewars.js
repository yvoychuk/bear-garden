import * as utils from "../utils.js"
import Page from "../system/page.js"
import * as tests from "../tests.js"

class Codewars extends Page {
  
  constructor (props) {
    super(props);
    this.render(props);
  }

  uniqueInOrder (iterable) {
    var isArray = Array.isArray(iterable);
    var isIterable = typeof iterable == "string" || isArray;
    var iterArray = isArray ? iterable: iterable.split("");
    return isIterable && iterArray.filter(function (x,y,z) {
        return y === 0 || x !== z[y-1]
      }) || false;
  }

  productFib (prod) {
    let a = 0;
    let aplus = 1;
    while (a * aplus < prod) {
      aplus = aplus + a;
      a = aplus - a;
    }
    return [a, aplus, a * aplus === prod]
  }

  render (props) {
    let pf = this.productFib(41);
    // this.productFib(100);
    utils.test(pf);
    // tests.assertSimilar(uio, ['A', 'B', 'C', 'c', 'A', 'D']);
    utils.appendElementWithText(props.root, "page a");
  }
}

module.exports = Codewars;