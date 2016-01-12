import {IIllusion} from './iillusion';
import {IIllusionStatic} from './iillusionstatic';

export class Options {
    size:number;
    margin:number;

    black:string = '#000';
    white:string = '#fff';
    background:string = '#fff';

    clip:boolean = false;

    l0:number;
    l1:number;
    l2:number;
    l3:number;
    l4:number;

    [index:string]:any;

    // A lot of OVERCASTING! :-)
    static getParams(illusion:IIllusion, ret:any = {}):any {
        ret.name = (<IIllusionStatic><any>illusion).name;
        ret.id = (<IIllusionStatic><any>illusion).name.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();

        for (var key in (<IIllusionStatic><any>illusion).params) {
            if ((<IIllusionStatic><any>illusion).params.hasOwnProperty(key)) {
                ret[key] = (<IIllusionStatic><any>illusion).params[key].value !== undefined ?
                    (<IIllusionStatic><any>illusion).params[key].value :
                    (<IIllusionStatic><any>illusion).params[key];
            }
        }

        return ret;
    }

    constructor(illusion:IIllusion, size:number = 120, margin:number = 10) {
        this.size = size;
        this.margin = margin;

        this.l1 = Math.max(1, Math.floor(size / 160));
        this.l2 = this.l1 * 2;
        this.l3 = this.l1 * 3;
        this.l4 = this.l1 * 4;

        this.l0 = this.l1 / 2;

        Options.getParams(illusion, this);
    }
}
