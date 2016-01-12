import {Options} from './options';
import {Svg} from './svg';

export class Illusion extends Svg {
    options:any;

    draw():void {
        throw new Error('Not implemented');
    }

    constructor(options:Options, svg?:any) {
        this.options = options;
        super(svg, options.size, options.size, options.margin, options.background, options.clip);
        this.id = options['id'];
    }
}
