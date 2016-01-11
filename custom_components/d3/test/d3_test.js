var d3 = require('../d3.js');

exports.select = function(test){
    test.expect(2);
    test.ok(d3.select, "select");
    test.ok(d3.selectAll, "selectAll");
    test.done();
};

exports.array = function(test){
    test.expect(1);
    test.ok(d3.range, "range");
    test.done();
};
