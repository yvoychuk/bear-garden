function markup (gulp, c) {
  var plumber = require('gulp-plumber');
  var p = c.paths;
  var cps = p.markup;
  var r = p.root;
  var path = {
    src: r + cps.src + cps.index,
    dest: r + cps.dest
  };
  var pug = require('gulp-pug');
  var stream = gulp
    .src(path.src)
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest(path.dest));
  return stream
};

module.exports = markup;