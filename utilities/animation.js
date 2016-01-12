var gm = require('gm');
var mkdirp = require('mkdirp');
var path = require('path');

module.exports = function (source, target, delay, done) {
    mkdirp(path.dirname(target), function () {
        gm(source).delay(delay).write(target, done);
    });
};
