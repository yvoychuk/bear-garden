class Chaining {
  constructor() {}
  box (a, b) {return arguments}
  static render () {
    console.log("rendered chaining")
    let app = document.getElementById("app");
    let element = document.createElement("p");
    element.innerHTML = "chaining";    
    app.appendChild(element);
    return false;
  }
}

module.exports = Chaining;