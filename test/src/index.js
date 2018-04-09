import Life from "./life"
import View from "./view"

const pattern = [
  1, 0,
  2, 0,
  0, 1,
  1, 1,
  1, 2
] // R-pentomino

let size = [ 256, 256 ]
let world = Life(pattern.slice())

let state = {
  world,
  viewport: {
    position: [ 0, 0 ],
    size
  }
}

let view = View(size)

document.body.appendChild(view.context.canvas)
requestAnimationFrame(loop)

function loop() {
  Life.update(world)
  View.render(view, state)
  requestAnimationFrame(loop)
}
