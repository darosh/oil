var gulp = require('gulp');
var images = require('../../utilities/images');
var animation = require('../../utilities/animation');

gulp.task('img', ['lib:js', 'img:del'], function (done) {

    images({output: './build/thumbnails', size: 150, margin: 0}, function () {
        images({output: './build/images', size: 1080, margin: 0}, function () {
            animation('./build/thumbnails/png/*.png', './build/thumbnails/gif/all.gif', 80, done);
        });
    });
});
