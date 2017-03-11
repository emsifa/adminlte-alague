var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('watch', function () {
  return watch('src/stylus/**/*.styl', function() {
    gulp.src('src/stylus/skin-alague.styl')
    .pipe(plumber({
      errorHandler: notify.onError(("Error: <%= error.message %>"))
    }))
    .pipe(stylus({
      use: [autoprefixer('last 2 versions')]
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify("Updated: <%= file.relative %>!"))
  })
});
