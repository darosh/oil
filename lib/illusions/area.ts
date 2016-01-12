import {Illusion} from '../illusion';
import {IMeta} from '../imeta';

export class Area extends Illusion {
    static meta:IMeta = {
        name: null,
        description: null,
        author: null,
        authoredDate: null,
        implementationDate: null,
        category: null
    };

    static symbols:any[] = [
        d3.symbolCircle,
        d3.symbolTriangle,
        d3.symbolSquare,
        d3.symbolStar,
        d3.symbolDiamond,
        d3.symbolCross,
        d3.symbolWye
    ];

    static params:any = {
        items: {
            value: 3,
            min: 2,
            max: Area.symbols.length
        }
    };

    draw() {
        // VARS
        var p = this.options.size / (this.options.items + 1);
        var symbol = d3.symbol().size(p * p / 2);

        // DATA
        var data = d3.range(this.options.items);

        // JOIN
        var selection = this.root.selectAll('path').data(data);

        // ENTER
        selection.enter().append('path');

        // UPDATE
        selection
            .attr('d', (d) => {
                return symbol.type(Area.symbols[d])();
            })
            .attr('transform', (d, i) => {
                return 'translate(' + [(i + 1) * p, (i + 1) * p] + ')';
            });

        // EXIT
        selection.exit().remove();
    }
}
