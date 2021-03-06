# Optical Illusions

*Because they [show how we see](https://www.ted.com/talks/beau_lotto_optical_illusions_show_how_we_see).*


A very early&hellip;

- Library
- Application
- Utilities

![preview](./build/thumbnails/gif/all.gif "animation")

## Roadmap

### Library
- [ ] Typescript + upcoming [d3.js 4.0](https://github.com/d3)
- [ ] procedural and parametrized
- [ ] scalable and resizable
- [ ] printable
- [ ] standalone
- [ ] Inkscape compatible
- [ ] illusion metadata and credits
- [ ] hint feature
- [ ] browser and node
- [ ] L10N

### Application
- [ ] AngularJS + Material Design
- [ ] web
- [ ] mobile?
- [ ] search
- [ ] L10N

### Utilities
- [ ] Atom feed
- [ ] SVG
- [ ] PNG
- [ ] GIF (GraphicsMagick?)
- [ ] SVG poster?
- [ ] L10N
- [ ] pseudo L10N

## Development

### Prerequisites

- [GraphicsMagick](http://www.graphicsmagick.org/) used via [gm](https://www.npmjs.com/package/gm) for GIFs
- [Roboto font](https://www.google.com/fonts#UsePlace:use/Collection:Roboto) for PNGs from SVGs (rendered with PhantomJS)
- [Node.js](https://nodejs.org)

### Install

```
npm i -g gulp
npm i
```

### Building

```
gulp
```
