class Error403 {
  constructor(props) {
    this.x = 100;    
  }
  static render () {
    console.log("403 rendered")
    return false;
  }
}

module.exports = Error403;