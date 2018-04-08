import Life from "./life"
import View from "./view"

const pattern = [
  1, 0,
  2, 0,
  0, 1,
  1, 1,
  1, 2
] // R-pentomino

let world = Life(pattern.slice())
let viewport = {
  size: [ 256, 256 ],
  position: [ 0, 0 ]
}

let state = { world, viewport }
let view = View(...viewport.size)
document.body.appendChild(view.context.canvas)
requestAnimationFrame(loop)

function loop() {
  Life.update(world)
  View.render(view, state)
  requestAnimationFrame(loop)
}
