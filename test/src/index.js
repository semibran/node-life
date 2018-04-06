import World from "./world"
import View from "./view"

let state = (_ => {
  let world = {
    rule: { birth: [ 3 ], survival: [ 2, 3 ] },
    prev: null,
    cells: [
      1, 0,
      2, 0,
      0, 1,
      1, 1,
      1, 2
    ]
  }

  let viewport = {
    size: [ 256, 256 ],
    position: [ 0, 0 ]
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
  })(viewport)

  return { world, viewport, view }
})()

const actions = {
  world: World,
  view: View
}

document.body.appendChild(state.view.context.canvas)
requestAnimationFrame(loop)

function loop() {
  actions.world.update(state.world)
  actions.view.render(state.view, state.world, state.viewport)
  requestAnimationFrame(loop)
}
