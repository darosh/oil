import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class Mach extends Illusion {
    static meta:IMeta = {
        name: null,
        description: null,
        author: null,
        authoredDate: null,
        implementationDate: null,
        category: null
    };

    static params:any = {
        grid: {
            value: 6,
            min: 2,
            max: 12
        }
    };

    draw() {
        var size = this.options.size / this.options.grid;

        var c0 = '#000';
        var c1 = '#fff';
        var c:any = d3.scaleLinear().domain([-0.25, 1.25]).range([c0, c1]);

        var rowArr = d3.range(this.options.grid);

        // join rows
        var rows = this.root.selectAll('rect').data(rowArr);

        // enter rows
        rows.enter().append('rect')
            .attr('width', Math.ceil(size))
            .attr('height', this.options.size)
            .attr('fill', (d, i) => {
                return c(i / (this.options.grid - 1));
            })
            .attr('transform', function (d, i) {
                return 'translate(' + [i * size, 0] + ')';
            });
    }
}
