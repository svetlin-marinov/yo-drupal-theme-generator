/* eslint strict: ["error", "global"] */

// =======================================================
// Include gulp
// =======================================================
var gulp = require('gulp');

// =======================================================
// Include Our Plugins
// =======================================================
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

// Export our tasks.
module.exports = {

  // Compress svg/png/jpg files.
  assets: function () {
    return gulp.src([
      './templates/_img/**/*{.png,.jpg,.svg}'
    ])
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false
        }]
      }))
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./templates/_img/'));
  }
};
