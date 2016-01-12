import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class Arrows extends Illusion {
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
            value: 8,
            min: 3,
            max: 18
        }
    };

    draw() {
        // VARS
        var arrowPath = 'M-1,-2 L1,-2 L1,0 L2,0 L0,2 L-2,0 L-1,0Z';
        var arrowSize = 4;
        var scale = this.options.size / this.options.grid / arrowSize;
        var c0 = '#ff0';
        var c1 = '#0f0';
        var rowArr = d3.range(this.options.grid + 3);
        var colArr = d3.range(this.options.grid * 2 + 2);
        rowArr.forEach(function (d, i) {
            rowArr[i] = colArr;
        });

        // join rows
        var rows = this.root.selectAll('g').data(rowArr);

        // enter rows
        rows.enter().append('g')
            .attr('transform', function (d, i) {
                return 'scale(' + scale + '),translate(' + [0, i * arrowSize] + ')';
            });

        // join cols
        var cols = rows.selectAll('path').data(function (d) {
            return d;
        });

        // enter cols
        cols.enter().append('path')
            .attr('d', arrowPath)
            .attr('transform', function (d, i) {
                return 'translate(' + [i * arrowSize / 2, (i % 2 ? 0 : -1.5 * arrowSize) - 1] + ') ' +
                    'scale(' + (i % 2 ? -1 : +1) + ') rotate(90)';
            })
            .style({
                opacity: 0
            });

        // enter + update rows
        rows
        // .transition()
            .attr('transform', function (d, i) {
                return 'scale(' + scale + ') translate(' + [0, i * arrowSize] + ')';
            });

        // enter + update cols
        cols
        // .transition()
            .attr('fill', function (d, i) {
                return i % 2 ? c0 : c1;
            })
            .style({
                opacity: 1
            });

        // exit cols
        cols.exit().remove();

        // exit rows
        rows.exit().remove();
    }
}
