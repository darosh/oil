# D3 4.0 custom build

## Build & test

```npm run build```

```npm test```

Output: [d3.js](./d3.js) and [d3.min.js](./d3.min.js)

Configuration: [index.js](./index.js)

## Breaking changes

| Old | New |
| --- | --- |
| ```d3.select('body').attr({})``` | ```d3.select('body').attrs({})``` |
| ```d3.scale.linear``` | ```d3.linear``` |
