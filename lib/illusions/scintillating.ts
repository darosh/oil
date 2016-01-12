import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class Scintillating extends Illusion {
    static meta:IMeta = {
        name: null,
        description: null,
        author: null,
        authoredDate: null,
        implementationDate: null,
        category: null
    };

    static params:any = {
        clip: true,
        grid: {
            value: 6,
            min: 3,
            max: 9
        }
    };

    draw() {
        var size = this.options.size / this.options.grid;

        var c0 = '#000';
        var c05 = '#888';
        var c1 = '#fff';

        var rowArr = d3.range(this.options.grid + 1);

        var colArr = d3.range(this.options.grid + 1);
        rowArr.forEach(function (d, i) {
            rowArr[i] = colArr;
        });

        // join rows
        var rows = this.root.selectAll('g').data(rowArr);

        // enter rows
        rows.enter().append('g')
            .attr('transform', function (d, i) {
                return 'translate(' + [0, i * size] + ')';
            });

        // join cols
        var cols = rows.selectAll('rect').data(function (d) {
            return d;
        });

        var points = rows.selectAll('circle').data(function (d) {
            return d;
        });

        // enter cols
        cols.enter().append('rect')
            .attr('width', size)
            .attr('height', size)
            .attr('transform', function (d, i) {
                return 'translate(' + [(i - 0.5) * size, 0] + ')';
            });

        points.enter().append('circle')
            .attr('r', this.options.l3)
            .attr('transform', function (d, i) {
                return 'translate(' + [(i - 0.5) * size, 0] + ')';
            });

        // enter + update rows
        rows
        // .transition()
            .attr('transform', function (d, i) {
                return 'translate(' + [0, (i - 0.5) * size] + ')';
            });

        // enter + update cols
        cols
        // .transition()
            .attr('fill', c0)
            .attr('stroke', c05)
            .attr('stroke-width', this.options.l4)
            .style({
                opacity: 1
            });

        points
            .attr('fill', c1);

        // exit cols
        cols.exit().remove();

        // exit rows
        rows.exit().remove();
    }
}
