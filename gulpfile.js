const gulp = require("gulp");
// const ghPages = require('gulp-gh-pages');

// gulp.task('deploy', () => gulp.src('./dist/**/*').pipe(ghPages()));
const concat = require("gulp-concat");
const exec = require("child_process").exec;
const hash = require("gulp-hash-filename");
const inject = require("gulp-inject");
const clean = require("gulp-clean");
const rmLines = require("gulp-rm-lines");
const replace = require("gulp-replace");
const htmlmin = require("gulp-htmlmin");
gulp.task("build", function(cb) {
  exec("ng build --prod", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
gulp.task("concat", function() {
  return gulp
    .src([
      "./dist/ng-profile/runtime-es2015.*.js",
      "./dist/ng-profile/polyfills-es2015.*.js",
      "./dist/ng-profile/scripts.*.js",
      "./dist/ng-profile/main-es2015.*.js"
    ])
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./dist/ng-profile"));
});

gulp.task("assemble", function() {
  return gulp
    .src("./dist/ng-profile/all.js")
    .pipe(hash())
    .pipe(gulp.dest("./dist/ng-profile/"));
}); //
gulp.task("cleanRuntime", function() {
  return gulp.src("./dist/ng-profile/runtime-*.js").pipe(
    clean({
      force: true
    })
  );
});
gulp.task("cleanMain", function() {
  return gulp.src("./dist/ng-profile/main-*.js").pipe(
    clean({
      force: true
    })
  );
});

gulp.task("cleanPolyfills", function() {
  return gulp.src("./dist/ng-profile/polyfills-*.js").pipe(
    clean({
      force: true
    })
  );
});
gulp.task("cleanScript", function() {
  return gulp.src("./dist/ng-profile/scripts.*.js").pipe(
    clean({
      force: true
    })
  );
});
gulp.task("cleanall", function() {
  return gulp.src("./dist/ng-profile/all.js").pipe(
    clean({
      force: true
    })
  );
});

gulp.task("rmLines", function() {
  return gulp
    .src("./dist/ng-profile/index.html")
    .pipe(
      rmLines({
        filters: ['<script type="text/javascript" src="runtime']
      })
    )
    .pipe(gulp.dest("./dist/ng-profile"));
});

gulp.task("cssasync", function() {
  return gulp
    .src(["./dist/ng-profile/index.html"])
    .pipe(
      replace(
        '<link rel="stylesheet" href="styles',
        '<script>var cb = function () { var l = document.createElement("link"); l.rel = "stylesheet"; l.href = "styles'
      )
    )
    .pipe(
      replace(
        '.css">',
        '.css"; var h = document.getElementsByTagName("head")[0]; h.parentNode.insertBefore(l, h); }; var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame; if (raf) raf(cb); else window.addEventListener("load", cb); </script>'
      )
    )
    .pipe(gulp.dest("./dist/ng-profile"));
});
gulp.task(
  "prodbuild",
  gulp.series([
    "build",
    "rmLines",
    "concat",
    "cleanRuntime",
    "cleanMain",
    "cleanPolyfills",
    "cleanScript",
    "assemble",
    "cleanall",
    "cssasync"
  ]),
  function() {
    return null;
  }
);
gulp.task("injectjs", function() {
  return gulp
    .src("./dist/ng-profile/index.html")
    .pipe(
      inject(gulp.src(["./dist/ng-profile/all*.js"], { read: false }), {
        relative: true
      })
    )
    .pipe(gulp.dest("./dist/ng-profile"));
});
gulp.task("minifyhtml", function() {
  return gulp
    .src("./dist/ng-profile/index.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      })
    )
    .pipe(gulp.dest("./dist/ng-profile"));
});

gulp.task("injectjs2", function() {
  return gulp
    .src("./dist/ng-profile/index.html")
    .pipe(
      inject(gulp.src("./dist/ng-profile/all*.js", { read: false }), {
        transform: path => {
          return `<script src="${path}" defer ></script>`;
        }
      })
    )
    .pipe(gulp.dest("./dist/ng-profile"));
});
