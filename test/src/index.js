import World from "./world"
import View from "./view"

let state = {
  world: {
    rule: { birth: [ 3 ], survival: [ 2, 3 ] },
    prev: null,
    cells: [
      1, 0,
      2, 0,
      0, 1,
      1, 1,
      1, 2
    ]
  },
  viewport: {
    size: [ 256, 256 ],
    position: [ 0, 0 ]
  }
}

let view = (viewport => {
  let [ vw, vh ] = viewport.size
  let canvas = document.createElement("canvas")
  canvas.width = vw
  canvas.height = vh

  let context = canvas.getContext("2d")
  let image = context.getImageData(0, 0, canvas.width, canvas.height)

  return {
    context: context,
    image: image
  }
})(state.viewport)

document.body.appendChild(view.context.canvas)
requestAnimationFrame(loop)

function loop() {
  World.update(state.world)
  View.render(view, state)
  requestAnimationFrame(loop)
}
