function App (gulp, c) {
  var webpack = require('webpack-stream');
  var utils = require('../utils.js');
  var paths = utils.setPath(c, 'app');
  return gulp.src(paths.src)
    .pipe(webpack())
    .pipe(gulp.dest(paths.dest));
}

module.exports = App