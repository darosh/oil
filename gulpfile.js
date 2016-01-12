var gulp = require('gulp');

require('require-dir')('./gulp_tasks', {recurse: true});

gulp.task('lib', ['lib:lint', 'lib:js']);
gulp.task('utils', ['utils:lint']);
gulp.task('gulp', ['gulp:lint']);
gulp.task('default', ['lib', 'img', 'doc', 'utils', 'gulp']);
