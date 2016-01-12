var gulp = require('gulp');
var del = require('del');

gulp.task('img:del', function (done) {
    del(['build/images', 'build/thumbnail'])
        .then(function () {
            done();
        })
        .catch(function (err) {
            done(err);
        });
});
