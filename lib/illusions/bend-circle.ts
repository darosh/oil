import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class BendCircle extends Illusion {
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
            min: 3,
            max: 9
        }
    };

    draw() {
        var slices = [];
        var grid = this.options.grid * 4;

        for (var i = 0; i < grid; i++) {
            slices.push(1);
        }

        var arcs = d3.pie().sort(function (a, b) {
            return a.index - b.index;
        })(slices);
        var paths = this.root.selectAll('.wheel').data(arcs);

        var r = this.options.size / 2;
        var s = this.options.l2;
        var arc = d3.arc().innerRadius(0).outerRadius(r - s * 2);

        paths.enter().append('line')
            .attr('x1', -(r - s * 1))
            .attr('y1', 0)
            .attr('x2', r - s * 1)
            .attr('y2', 0)
            .attr('class', 'wheel')
            .attr('transform', function (d) {
                return 'translate(' + [r, r] + ') rotate(' + (360 * d.startAngle / Math.PI / 2) + ')';
            })
            .style('fill', 'none')
            .style('stroke', '#000')
            .style('stroke-width', s);

        arc.innerRadius(r - 2 * Math.PI * r / slices.length / 2);

        this.root.append('circle')
            .attr('r', r - s * 1)
            .attr('cx', r)
            .attr('cy', r)
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-width', s);

        this.root.append('circle')
            .attr('r', r / 2.8)
            .attr('cx', r / 1.7)
            .attr('cy', r / 1.7)
            .attr('fill', 'none')
            .attr('stroke', '#f00')
            .attr('stroke-width', this.options.l4);

        this.root.append('circle')
            .attr('r', r / 8)
            .attr('cx', r)
            .attr('cy', r)
            .attr('fill', '#000');
    }
}
