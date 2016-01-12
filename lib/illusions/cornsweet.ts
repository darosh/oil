import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class Cornsweet extends Illusion {
    static meta:IMeta = {
        name: null,
        description: null,
        author: null,
        authoredDate: null,
        implementationDate: null,
        category: null
    };

    draw() {
        var c0 = '#c2c2c2';
        var c05 = '#c8c8c8';
        var c1 = '#cecece';

        var t = 100 * (1 - 12 * this.options.l4 / this.options.size / 2);

        var defs = this.root.append('defs');

        var id1 = this.getFreeId('gradient');

        var grad1 = defs.append('linearGradient')
            .attr('id', id1)
            .attr('xlink:href', '#' + id1)
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '100%')
            .attr('y2', '0%');

        grad1.append('stop')
            .attr('offset', t + '%')
            .style('stop-color', c05)
            .style('stop-opacity', 1);

        grad1.append('stop')
            .attr('offset', '100%')
            .style('stop-color', c0)
            .style('stop-opacity', 1);

        var id2 = this.getFreeId('gradient');

        var grad2 = defs.append('linearGradient')
            .attr('id', id2)
            .attr('xlink:href', '#' + id2)
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '100%')
            .attr('y2', '0%');

        grad2.append('stop')
            .attr('offset', '0%')
            .style('stop-color', c1)
            .style('stop-opacity', 1);

        grad2.append('stop')
            .attr('offset', (100 - t) + '%')
            .style('stop-color', c05)
            .style('stop-opacity', 1);

        this.root.append('rect')
            .style('fill', 'url(#' + id1 + ')')
            .attr('width', this.options.size / 2)
            .attr('height', this.options.size);

        this.root.append('rect')
            .style('fill', 'url(#' + id2 + ')')
            .attr('width', this.options.size / 2)
            .attr('height', this.options.size)
            .attr('transform', 'translate(' + [this.options.size / 2, 0] + ')');
    }
}
