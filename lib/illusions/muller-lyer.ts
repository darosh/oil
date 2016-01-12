import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class MullerLyer extends Illusion {
    static meta:IMeta = {
        name: null,
        description: null,
        author: null,
        authoredDate: null,
        implementationDate: null,
        category: null
    };

    static params:any = {
        items: {
            value: 2,
            min: 2,
            max: 3
        }
    };

    draw() {
        var data = this.options.items > 2 ? [0, 1, 2] : [0, 2];
        var paths = this.root.selectAll('path').data(data);

        var w = this.options.size * 4 / 8;
        var a = this.options.size * 1 / 10;

        paths.enter().append('path');

        var l = 'M0,0 h' + w + ' ';

        paths
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-width', this.options.l4)
            .attr('transform', function (n, d) {
                return 'translate(' + [w / 2, d * a * 3 + a + a + (data.length < 3 ? a * 1.5 : 0)] + ')';
            })
            .attr('d', function (d) {
                switch (d) {
                    case 0:
                        return l +
                            'M' + a + ',' + a + ' L0,0 L' + a + ',' + (-a) + ' ' +
                            'M' + (w - a) + ',' + (-a) + ' l' + a + ',' + a + ' l' + (-a) + ',' + a;
                    case 1:
                        return l +
                            'M' + a + ',' + a + ' L0,0 L' + a + ',' + (-a) + ' ' +
                            'M' + (w + a) + ',' + (-a) + ' l' + (-a) + ',' + a + ' l' + a + ',' + a;
                    case 2:
                        return l +
                            'M' + (-a) + ',' + a + ' L0,0 L' + (-a) + ',' + (-a) + ' ' +
                            'M' + (w + a) + ',' + (-a) + ' l' + (-a) + ',' + a + ' l' + a + ',' + a;
                    default:
                        return;
                }
            });
    }
}
