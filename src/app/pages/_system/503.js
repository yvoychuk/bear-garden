class Error503 {
  constructor(props) {
    this.x = 100;    
  }
  static render () {
    console.log("503 rendered")
    return false;
  }
}

module.exports = Error503;