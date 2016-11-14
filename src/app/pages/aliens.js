class Aliens {
  constructor(props) {
    this.x = 100;    
  }
  static render () {
    console.log("rendered aliens")
    let app = document.getElementById("app");
    let element = document.createElement("p");
    element.innerHTML = "aliens";    
    app.appendChild(element);
    return false;
  }
}

module.exports = Aliens;