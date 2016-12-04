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
    },

    appendElementWithId: function (parentId, elementName = "div", id= "id") {
      let element = document.createElement(elementName);
      if (id !== null) {
        element.id = id
      };
      document.getElementById(parentId).appendChild(element);
      return false;
    },

    appendLinkElement: function (parentId, id, props) {
      /* props:
      - href
      - target
      - text
      */
      let link = document.createElement("a");
      Object.assign(link, {
        id: id,
        href: props.href || "",
        target: props.target || "_self"
      });
      link.innerHTML = props.text || "link";
      document.getElementById(parentId).appendChild(link);
      return false;
    }

  }

})()

module.exports = Utils