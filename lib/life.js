module.exports = function update(world) {
  world.time++
  var count = world.cells.length
  if (!count) return // break early if no cells are alive
  var result = []
  for (var i = 0; i < world.cells.length; i += 2) {
    var x = world.cells[i]
    var y = world.cells[i + 1]
    var n = 0
    for (var dy = -1; dy <= 1; dy++) {
      var ny = y + dy
      for (var dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue // ignore center cell (closed neighborhood)
        var nx = x + dx
        for (var j = 0; j < world.cells.length; j += 2) {
          if (world.cells[j] === nx && world.cells[j + 1] === ny) {
            break // this neighbor has previously been added to the stack, ignore it
          }
        }
        if (j < world.cells.length) { // if we broke early
          if (j < count) { // if the cell we broke on is alive
            n++ // increase the count of living neighbors for the current cell
          }
        } else if (i < count) { // otherwise if the current cell is alive
          world.cells.push(nx, ny) // add the neighbor cell to the perimeter
        }
      }
    }
    if (world.rule.birth.indexOf(n) !== -1 && i >= count
    || world.rule.survival.indexOf(n) !== -1 && i < count) {
      result.push(x, y) // this cell will live during the next generation
    }
  }
  world.cells = result
}
