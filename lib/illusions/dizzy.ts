import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class Dizzy extends Illusion {
    static meta:IMeta = {
        name: null,
        description: null,
        author: null,
        authoredDate: null,
        implementationDate: null,
        category: null
    };

    draw() {
        var z = Math.round(this.options.size / 240);
        var id = this.getFreeId('pattern');

        this.root.append('style').text('@font-face {  }');

        this.root.append('defs')
            .append('pattern')
            .attr('id', id)
            .attr('xlink:href', '#' + id)
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', z) // Overlap
            .attr('height', z * 2)
            .append('rect')
            .attr('width', z * 2) // Overlap
            .attr('height', z)
            .attr('y', 0)
            .attr('x', 0)
            .attr('fill', 'black')
            .attr('stroke', 'none');

        this.root.append('text')
            .attr('fill', 'url(#' + id + ')')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .attr('transform', 'translate(' + [this.options.size / 2, this.options.size / 2 + z * 3] + ')')
            .style('font-size', (this.options.size / 3.5) + 'px')
            .style('font-family', 'RobotoBlack')
            .text('DIZZY?');

        this.root.append('text')
            .attr('fill', 'url(#' + id + ')')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .attr('transform', 'translate(' + [this.options.size / 2, this.options.size / 2 + z * 6] + ')')
            .style('font-size', (this.options.size / 3.5) + 'px')
            .style('font-family', 'RobotoBlack')
            .text('DIZZY?');
    }
}
