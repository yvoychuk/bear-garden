var gulp = require('gulp');
var config = require('./config.json');
var styles = require('./tasks/styles.js');
var markup = require('./tasks/markup.js');
var server = require('./tasks/server.js');
var app = require('./tasks/app.js');
var bsync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('styles', function () {
  return styles(gulp, config);
});

gulp.task('markup', function () {
  return markup(gulp, config);
});

gulp.task('server', ['styles', 'markup'], function () {
  return server(gulp, bsync, config);
});

gulp.task('app', function () {
  return app(gulp, config);
});

gulp.task('default', function (cb) {
  runSequence('styles', 
              'markup', 
              'server',
              cb);
});