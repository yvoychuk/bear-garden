class Error404 {
  constructor(props) {
    this.x = 100;    
  }
  static render () {
    console.log("404 rendered")
    return false;
  }
}

module.exports = Error404;