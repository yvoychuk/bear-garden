var Utils = (function () {

  return {

    test: function (t="text") {
      console.log(t)
    },

    appendElementWithText: function (rootComponent, text="sample", elementName = "p") {
      let element = document.createElement(elementName);
      element.innerHTML = text;    
      rootComponent.appendChild(element);
      return false;
    }

  }
  
})()

module.exports = Utils