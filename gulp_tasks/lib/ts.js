var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('lib:ts', ['lib:del'], function () {
    var tsProject = ts.createProject('./lib/tsconfig.json');

    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('build/lib'));
});
