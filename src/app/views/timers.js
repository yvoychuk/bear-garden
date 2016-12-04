import * as utils from "../utils.js"
import Page from "../system/page.js"

class Timers extends Page {

  constructor (props) {
    super(props);
    this.render(props);
  }

  fib (count) {
    let arr = [0,1];
    for (let i = 2; i < count; i++) {
      arr[i] = arr[i-2] + arr[i-1];
    };
    return arr;
  }

  testTime (fn) {
    let args = [].slice.call(arguments).slice(1)
    let t1 = Date.now();
    fn.apply(null, args);
    let t2 = Date.now();
    let delta = t2 - t1;
    return "delta(ms): " + delta + "; delta(s): " + delta/1000;
  }

  createTimeElement (id, parent) {
    let element = document.createElement("div");
    element.id = id;
    parent.appendChild(element);
  }

  showTime (currentTime) {
    console.log(this);
    let element = document.getElementById(this.id);
    element.innerHTML = "time: " + currentTime;
  }

  // NOTE: there is a wormhole when some process in system occured
  timer (startTime, preset, callback = null) {
    let start = null;
    let counter = 0;
    let time = startTime;
    let filter = [0, performance.now()];
    var iter = function (ts) {
      if (!start) start = ts;
      let deltaFloor = Math.floor((ts - start) / 1000);
      if (deltaFloor !== counter) {
        filter[0] = filter[1];
        filter.pop();
        filter.push(performance.now());
        let fault = Math.abs(1000 - (filter[1] - filter[0])) * (10 / 1000);
        if (fault < 0.5) {
          // console.log(time, fault);
          callback(time);
        }
        else console.log("waiting for stable state")
        counter++;
        let i = preset > startTime ? 1 : -1;
        time += i;
      }
      if (time !== preset) {
        window.requestAnimationFrame(iter);
      } else return;
    }
    window.requestAnimationFrame(iter);
    return false;
  }

  render (props) {
    let timerId1 = "timer-1";
    this.createTimeElement(timerId1, props.root)
    this.timer(0, 100, this.showTime.bind(Object.assign(this, {id:timerId1})));
    // utils.appendElementWithText(props.root, this.testTime(this.fib, 100));
  }

}

module.exports = Timers;