var Utils = (function () {

  return {

    test: function (t="text") {
      console.log(t)
    },

    appendElementWithText: function (rootComponent, text="sample", elementName = "p", id=null) {
      let element = document.createElement(elementName);
      if (id !== null) {
        element.id = id
      };
      element.innerHTML = text;
      rootComponent.appendChild(element);
      return false;
    }

  }

})()

module.exports = Utils