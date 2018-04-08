import life from "../../lib/life"

function Life(cells, rule) {
  if (!rule) rule = {
    birth: [ 3 ],
    survival: [ 2, 3 ]
  }

  return {
    cells: cells,
    rule: rule,
    prev: null,
  }
}

function update(world) {
  let next = life(world.cells, world.rule)
  world.prev = world.cells
  world.cells = next
}

export default Life
Life.update = update
