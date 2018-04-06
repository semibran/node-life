export default {
  render(view, world, viewport) {
    update(view.image, world, viewport)
    view.context.putImageData(view.image, 0, 0)
  }
}

function update(image, world, viewport) {
  let [ vw, vh ] = viewport.size
  let [ vx, vy ] = viewport.position
  vx -= vw / 2
  vy -= vh / 2

  for (let i = 0; i < world.prev.length; i += 2) {
    let x = world.prev[i]
    let y = world.prev[i + 1]
    if (x >= vx && y >= vy && x < vx + vw && y < vy + vh) {
      let index = ((y - vy) * image.width + (x - vx)) * 4
      image.data[index + 3] = 0
    }
  }

  for (let i = 0; i < world.cells.length; i += 2) {
    let x = world.cells[i]
    let y = world.cells[i + 1]
    if (x >= vx && y >= vy && x < vx + vw && y < vy + vh) {
      let index = ((y - vy) * image.width + (x - vx)) * 4
      image.data[index + 3] = 255
    }
  }
}
