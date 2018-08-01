const gulp = require('gulp');
// const ghPages = require('gulp-gh-pages');

// gulp.task('deploy', () => gulp.src('./dist/**/*').pipe(ghPages()));
const concat = require('gulp-concat');
const exec = require('child_process').exec;
const hash = require('gulp-hash-filename');
gulp.task('build', function (cb) {
  exec('ng build --prod', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
gulp.task('concat', function () {
  return gulp.src(['./dist/ng-profile/runtime.*.js', './dist/ng-profile/polyfills.*.js', './dist/ng-profile/scripts.*.js', './dist/ng-profile/main.*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/ng-profile'));
});


gulp.task('assemble', function () {
  return gulp.src('./dist/ng-profile/all.js')
    .pipe(hash())
    .pipe(gulp.dest('./dist/ng-profile/'))
});
