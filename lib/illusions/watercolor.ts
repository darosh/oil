import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class Watercolor extends Illusion {
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
            value: 7,
            min: 3,
            max: 9
        }
    };

    draw() {
        var c0 = '#000';
        var c05 = '#f00';
        var c05b = '#0f0';
        var c05c = '#0ff';
        var c05d = '#ff0';
        var c1 = '#fff';

        var frame = this.options.size / 2 / (this.options.grid + 0.5) / 2;

        this.root.append('rect')
            .attr('width', this.options.size)
            .attr('height', frame)
            .attr('fill', c0);

        this.root.append('rect')
            .attr('transform', 'translate(' + [0, this.options.size - frame] + ')')
            .attr('width', this.options.size)
            .attr('height', frame)
            .attr('fill', c0);

        this.root.append('rect')
            .attr('width', frame)
            .attr('height', this.options.size)
            .attr('fill', c0);

        this.root.append('rect')
            .attr('transform', 'translate(' + [this.options.size - frame, 0] + ')')
            .attr('width', frame)
            .attr('height', this.options.size)
            .attr('fill', c0);

        var wh = this.options.size / 2 - frame;
        var hh = this.options.size / 2 - frame;

        var g;

        g = this.root.append('g').attr('transform', 'translate(' + [frame, frame] + ')');
        this.updateBlock(g, wh, hh, c0, c05, c1);
        g = this.root.append('g').attr('transform', 'translate(' + [2 * wh + frame, 2 * hh + frame] + ') rotate(180)');
        this.updateBlock(g, wh, hh, c0, c05b, c1);
        g = this.root.append('g').attr('transform', 'translate(' + [wh * 2 + frame, 0 + frame] + ') rotate(90)');
        this.updateBlock(g, wh, hh, c0, c05c, c1);
        g = this.root.append('g').attr('transform', 'translate(' + [0 + frame, 2 * hh + frame] + ') rotate(-90)');
        this.updateBlock(g, wh, hh, c0, c05d, c1);
    }

    private updateBlock(svg, w, h, c0, c05, c1) {
        var line = this.options.l1;
        var dsize = w / (this.options.grid * 2);

        var sizeWhite = dsize - 2 * line;
        var sizeBlack = dsize;

        var rowArr = d3.range(this.options.grid * 4);

        var sizePattern = [line, sizeWhite, line, sizeBlack];
        var translatePattern = [0, line, line + sizeWhite, line + sizeWhite + line];
        var colorPattern = [c05, c1, c05, c0];

        // join rows
        var rows = svg.selectAll('rect').data(rowArr);

        // enter rows
        rows.enter().append('rect')
            .attr('width', (d, i) => {
                return sizePattern[i % 4];
            })
            .attr('height', h)
            .attr('fill', (d, i) => {
                return colorPattern[i % 4];
            })
            .attr('transform', function (d, i) {
                return 'translate(' + [
                        Math.floor(i / 4) * (sizeWhite + line + sizeBlack + line) +
                        translatePattern[i % 4],
                        0
                    ] + ')';
            });
    }
}
