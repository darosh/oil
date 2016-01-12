import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

// McCollough
// https://zaklynsky.wordpress.com/2015/02/09/the-mccollough-effect/

export class Ehrenstein extends Illusion {
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
            value: 11,
            min: 2,
            max: 18
        }
    };

    draw() {
        var w = this.options.size;

        var s1 = this.options.l2;
        var s2 = this.options.l4;

        var g = this.options.grid;

        var data = d3.range(g);

        var circles = this.root.selectAll('circle').data(data);

        circles.enter().append('circle');

        var r = w / 2;

        circles
            .attr('cx', r)
            .attr('cy', r)
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-width', s1)
            .attr('r', (d, i) => {
                return ((i + 1) / g) * (r - s2);
            });

        var rec = Math.sqrt(2 * (r - s2 * 2) * (r - s2 * 2));

        this.root.append('rect')
            .attr('width', rec)
            .attr('height', rec)
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-width', s2)
            .attr('transform', 'translate(' + [-rec / 2 + r, -rec / 2 + r] + ') rotate(45 ' + rec / 2 + ' ' + rec / 2 + ')');
    }
}
