function server (gulp, bsync, c) {
  var p = c.paths;
  bsync.init({
    server: {
      baseDir: p.root + p.server.baseDir,
      browser: undefined
    }
  });
  gulp.watch('../src/**', ['styles', 'markup']);
};

module.exports = server;