class BearsPage {
  constructor(props) {
    this.x = 100;    
  }
  static render () {
    console.log("rendered bears");
    let app = document.getElementById("app");
    let element = document.createElement("p");
    element.innerHTML = "bears";    
    app.appendChild(element);
    return false;
  }
}

module.exports = BearsPage;