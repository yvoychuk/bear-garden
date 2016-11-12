function watch (gulp, bsync, config) {
  return function (done) {
    bsync.reload();
    done();
  }
};

module.exports = watch;