var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('gulp:lint', function () {
    return gulp.src(['gulpfile.js', 'gulp_tasks/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
