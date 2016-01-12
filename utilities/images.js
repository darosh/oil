var jsdom = require('jsdom');
var fs = require('fs');
var mkdirp = require('mkdirp');
var svg2png = require('svg2png');
var async = require('async');
var os = require('os');

function fix(svg) {
    return svg
        .replace(/lineargradient/g, 'linearGradient')
        .replace(/clippath/g, 'clipPath');
}

function write(f, name, i, done) {
    var svg = f + '/svg/' + name + '.svg';
    var png = f + '/png/' + name + '.png';

    fs.writeFile(svg, fix(i.svg.node().outerHTML), function () {
        svg2png(svg, png, done);
    });
}

function generate(cfg, done) {
    async.eachLimit(global.oil.Illusions, os.cpus().length, function (illusion, cb) {
        var o = new global.oil.Options(illusion, cfg.size, cfg.margin);
        var i = new illusion(o);
        i.draw();
        write(cfg.output, o.id, i, cb);
    }, done);
}

function dom(cfg, done) {
    jsdom.env({
        html: '',
        scripts: [
            __dirname + '/../custom_components/d3/d3.js',
            __dirname + '/../dist/oil.js'
        ],
        done: function (err, window) {
            global.d3 = window.d3;
            global.oil = window.oil;
            generate(cfg, done);
        }
    });
}

module.exports = function (cfg, done) {
    async.each([cfg.output + '/svg', cfg.output + '/png'], mkdirp, function () {
        dom(cfg, done);
    });
};
