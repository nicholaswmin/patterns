var os = require('os');
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

/**
 * Default tasks
 */

gulp.task('default', ['compile', 'app:watch']);

var LOCALS = {};

gulp.task('compile', function() {
  // all .jade in app/
  gulp.src('./components/**/*.jade')
    .pipe(jade({
      locals: LOCALS,
      pretty: true,
      basedir: './components'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/'));

  // all .scss in app/sass/
  gulp.src('./components/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));

  // all everything(for everything else(.js,.css,.png, gif, whatever))
  gulp.src('./components/**/*.{png,jpg,gif,css,js}')
    .pipe(gulp.dest('./dist/'));

  process.stdout.write("\033[92m Compiling /app -> /dist \033[0m\n");
});

gulp.task('app:watch', function() {
  gulp.watch('./components/**', ['compile']);
  process.stdout.write("\033[92m /app folder is being watched for changes \033[0m\n");
});
