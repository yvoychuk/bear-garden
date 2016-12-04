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

  duplicateCount (text) {
    var u = [];
    var test = function(a,it) {
      return {
        dupl: a.find(function(i){return i===it}),
        uniq: a.filter(function(i){return i===it}).length > 1
      }
    }
    return text.toLowerCase().split("").filter( function(item, index, arr) {
      if ( test(arr,item).uniq && !test(u,item).dupl ) {
        u.push(item);
        return item}
      }
    ).length;
  }

  render (props) {
    let dc = this.duplicateCount("abccCC");
    // this.productFib(100);
    utils.test(dc);
    // tests.assertSimilar(uio, ['A', 'B', 'C', 'c', 'A', 'D']);
    utils.appendElementWithText(props.root, dc);
  }
}

module.exports = Codewars;