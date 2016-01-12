import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class HorizontalVertical extends Illusion {
    static meta:IMeta = {
        name: null,
        description: null,
        author: null,
        authoredDate: null,
        implementationDate: null,
        category: null
    };

    draw() {
        var s1 = this.options.l4;

        var r = this.root.selectAll('rect').data([0, 1]);

        r.enter().append('rect');

        r.attr('width', (d, i) => {
                return i ? s1 : this.options.size;
            })
            .attr('height', (d, i) => {
                return !i ? s1 : this.options.size;
            })
            .attr('transform', (d, i) => {
                return 'translate(' + [i ? (this.options.size - s1) / 2 : 0, i ? 0 : this.options.size - s1] + ')';
            });
    }
}
