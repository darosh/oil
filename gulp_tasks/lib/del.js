var gulp = require('gulp');
var del = require('del');

gulp.task('lib:del', function (done) {
    del(['build/lib', 'dist'])
        .then(function () {
            done();
        })
        .catch(function (err) {
            done(err);
        });
});
