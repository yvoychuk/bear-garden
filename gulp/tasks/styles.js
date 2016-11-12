function styles (gulp, c) {
  var plumber = require('gulp-plumber');
  var p = c.paths;
  var cps = p.styles;
  var r = p.root;
  var path = {
    src: r + cps.src + cps.index,
    dest: r + cps.dest
  };
  var stylus = require('gulp-stylus');
  var data = require('../' + r + cps.src + 'config/config.json');
  return gulp.src(path.src)
    .pipe(plumber())
    .pipe(stylus({
      rawDefine: {outerConfig: data}
    }))
    .pipe(gulp.dest(path.dest))

};

module.exports = styles;