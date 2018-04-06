import update from "../../lib/life"

export default {
  update(world) {
    let next = update(world.cells, world.rule)
    world.prev = world.cells
    world.cells = next
  }
}
