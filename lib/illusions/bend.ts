import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class Bend extends Illusion {
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

        var centers = [[
            arc.centroid(arcs[0 + arcs.length / 4]),
            arc.centroid(arcs[arcs.length / 4 + arcs.length / 2 - 1])
        ], [
            arc.centroid(arcs[-1 + arcs.length / 4]),
            arc.centroid(arcs[1 + arcs.length / 4 + arcs.length / 2 - 1])
        ]];

        var lines = this.root.selectAll('.bended').data(centers);

        lines.enter().append('line')
            .attr('class', 'bended')
            .attr('x1', function (d) {
                return d[0][0] + r;
            })
            .attr('y1', function (d) {
                return d[0][1] + r;
            })
            .attr('x2', function (d) {
                return d[1][0] + r;
            })
            .attr('y2', function (d) {
                return d[1][1] + r;
            })
            .style('stroke', '#f00')
            .style('stroke-width', this.options.l4);

        this.root.append('circle')
            .attr('r', r - s * 1)
            .attr('cx', r)
            .attr('cy', r)
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-width', s);

        this.root.append('circle')
            .attr('r', (centers[0][0][1] - centers[1][0][1]) / 4)
            .attr('cx', r)
            .attr('cy', r)
            .attr('fill', '#000');
    }
}
