# life
> update function for [life-like cellular automata]

```js
import update from "life"

let world = {
  rule: { birth: [ 2, 3 ], survival: [ 3 ] },
  cells: [ 1, 0, 1, 1, 1, 2 ]
}

update(world.cells, world.rule)
console.log(world.cells)
// -> [ 0, 1, 1, 1, 2, 1 ]
```

## usage
[![npm badge]][npm package]

### `update(cells, rule)`
Receives a list of living `cells` and updates it using `rule`.

* `cells`: A list of the form `[ x0, y0, x1, y1, ...xn, yn ]` where each `x, y` pair represents a living cell
* `rule`: A map of the form `{ birth: [ ...neighborCount ], survival: [ ...neighborCount ] }` indicating the outcome when those criteria are met

[npm package]:                 https://www.npmjs.com/package/life
[npm badge]:                   https://nodei.co/npm/life.png?mini
[life-like cellular automata]: https://en.wikipedia.org/wiki/Life-like_cellular_automata
