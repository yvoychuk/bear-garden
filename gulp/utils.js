var Utils = {};

Utils.setPath = function (config, task) {
  var p = config.paths;
  var cps = p[task];
  var r = p.root;
  return {
    src: r + cps.src + cps.index,
    dest: r + cps.dest
  }
}

module.exports = Utils;