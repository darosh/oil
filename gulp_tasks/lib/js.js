var browserify = require('browserify');
var gulp = require('gulp');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('lib:js', ['lib:ts'], function () {
    return browserify({
        entries: './utilities/oil.js',
        standalone: 'oil',
        debug: false
    }).bundle()
        .pipe(source('oil.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist'))
        .pipe(rename('oil.min.js'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});
