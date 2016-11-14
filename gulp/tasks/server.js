function server (gulp, bsync, c) {
  var p = c.paths;
  bsync.init({
    server: {
      baseDir: p.root + p.server.baseDir
    }
  });
  gulp.watch('../src/**', ['styles', 'markup', 'app']);
};

module.exports = server;