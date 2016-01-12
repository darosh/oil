/// <reference path='./typings/tsd.d.ts' />

export class Svg {
    svg:any;
    root:any;
    id:string = 'svg';

    constructor(svg:any,
                width:number = 210,
                height:number = 210,
                margin:number = 0,
                background?:string,
                clip?:boolean,
                frame?:any) {
        if (svg) {
            this.svg = svg;
            return;
        }

        this.svg = this.root = d3.select('body').append('svg').remove();

        var size = [width + 2 * margin, height + 2 * margin];

        this.svg
            .attr('xmlns', 'http://www.w3.org/2000/svg')
            .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
            .attr('width', size[0])
            .attr('height', size[1])
            .attr('shape-rendering', 'geometricPrecision');

        if (background) {
            this.addBackground(size, background);
        }

        this.root = this.newRoot([width, height], margin, clip, background, frame);
    }

    newRoot(size, margin, clip, background, frame, x?, y?) {
        var clipId;
        var s = size.length ? size : [size, size];

        if (clip) {
            clipId = this.addClip(s);
        }

        if (frame) {
            frame(this.svg, s, x, y);
        }

        if (margin || clip || background || x >= 0) {
            var root = this.addRoot(margin, clip, clipId);

            if (x >= 0) {
                root.attr('transform', 'translate(' + [x + margin, y + margin] + ')');
            }

            return root;
        } else {
            return this.svg;
        }
    }

    addRoot(margin, clip, clipId) {
        return this.svg
            .append('g')
            .attr('transform', 'translate(' + [margin, margin] + ')')
            .attr('clip-path', clip ? 'url(#' + clipId + ')' : null);
    }

    addBackground(size, background) {
        this.svg
            .append('rect')
            .attr('width', size[0])
            .attr('height', size[1])
            .attr('fill', background);
    }

    getFreeId(id:string):string {
        var i = 1;

        while (document.getElementById(this.id + '-' + id + '-' + i) || this.svg.node().querySelector('#' + this.id + '-' + id + '-' + i)) {
            i++;
        }

        return this.id + '-' + id + '-' + i;
    }

    addClip(size) {
        var id = this.getFreeId('clip');

        this.svg
            .append('defs')
            .append('clipPath')
            .attr('id', id)
            .attr('xlink:href', '#' + id)
            .append('rect')
            .attr('width', size[0])
            .attr('height', size[1]);

        return id;
    }
}
