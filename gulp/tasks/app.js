function App (gulp, c) {
  var plumber = require('gulp-plumber');
  var webpack = require('webpack-stream');
  var utils = require('../utils.js');
  var paths = utils.setPath(c, 'app');
  return gulp.src(paths.src)
    .pipe(plumber())
    .pipe(webpack({
      module: {
        loaders: [
          {
            loader: 'babel',
            query: {
              plugins: ['lodash'],
              presets: ['es2015']
            }
          }
        ]
      },
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(gulp.dest(paths.dest));
}

module.exports = App