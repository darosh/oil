var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('utils:lint', function () {
    return gulp.src(['utilities/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
